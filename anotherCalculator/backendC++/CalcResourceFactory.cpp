#include "CalcResourceFactory.h"

#include <iomanip>
#include <iostream>
#include <nlohmann/json.hpp>
#include <sstream>

CalcResourceFactory::CalcResourceFactory() {
  std::cout << "START SERVER\n";
  _resource = std::make_shared<restbed::Resource>();
  _resource->set_path(
      "/{operation: add|subtract|multiply|divide}"
      "/{num1: [-+]?[0-9]*\\.?[0-9]*}"
      "/{num2: [-+]?[0-9]*\\.?[0-9]*}");
  _resource->set_method_handler(
      "GET", [&](const auto session) { get_handler(session); });
}

std::shared_ptr<restbed::Resource> CalcResourceFactory::get_resource() const {
  return _resource;
}

float CalcResourceFactory::calculate(float num1, float num2,
                                     std::string operation) {
  std::cout << "calculating..." << num1 << operation << num2 << std::endl;
  if (operation == "add") {
    std::cout << "Addition Procedure\n";
    return num1 + num2;
  } else if (operation == "subtract") {
    std::cout << "Subtraction Procedure\n";
    return num1 - num2;
  } else if (operation == "multiply") {
    std::cout << "Multiplication Procedure\n";
    return num1 * num2;
  } else if (operation == "divide") {
    std::cout << "Division Procedure\n";
    return num1 / num2;
  }
}

std::tuple<float, float, std::string> CalcResourceFactory::get_path_parameters(
    const std::shared_ptr<restbed::Session> session) const {
  const auto& request = session->get_request();
  const auto operation = request->get_path_parameter("operation");
  auto num1 = atof(request->get_path_parameter("num1").c_str());
  auto num2 = atof(request->get_path_parameter("num2").c_str());
  return make_tuple(num1, num2, operation);
}

std::string CalcResourceFactory::to_json(float result) {
  std::ostringstream str_stream;
  str_stream << result;
  nlohmann::json jsonResult = {{"result", str_stream.str()}};
  return jsonResult.dump();
}

void CalcResourceFactory::get_handler(
    const std::shared_ptr<restbed::Session> session) {
  const auto [num1, num2, operation] = get_path_parameters(session);
  auto result = calculate(num1, num2, operation);
  auto content = to_json(result);
  session->close(restbed::OK, content,
                 {{"Content-Length", std::to_string(content.size())}});
}
