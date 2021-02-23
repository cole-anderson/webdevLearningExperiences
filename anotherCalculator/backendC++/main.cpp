#include "CalcResourceFactory.h"
#include "CalcService.h"
#include "CalcServiceSettingsFactory.h"

int main(const int, const char**) {
  auto calc_resource_factory = std::make_shared<CalcResourceFactory>();
  auto calc_service_settings_factory =
      std::make_shared<CalcServiceSettingsFactory>();

  CalcService calc_service{calc_resource_factory,
                           calc_service_settings_factory};

  calc_service.start();

  return EXIT_SUCCESS;
}
