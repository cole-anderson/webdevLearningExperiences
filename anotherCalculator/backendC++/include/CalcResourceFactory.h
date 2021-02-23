#pragma once

#include <string>
#include <tuple>

#include "IResourceFactory.h"

class CalcResourceFactory : public IResourceFactory {
 public:
  CalcResourceFactory();
  std::shared_ptr<restbed::Resource> get_resource() const final;

 private:
  float calculate(float num1, float num2, std::string operation);
  std::tuple<float, float, std::string> get_path_parameters(
      const std::shared_ptr<restbed::Session> session) const;
  std::string to_json(float result);
  void get_handler(const std::shared_ptr<restbed::Session> session);

  std::shared_ptr<restbed::Resource> _resource;
};
