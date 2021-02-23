#pragma once

#include "IResourceFactory.h"
#include "IService.h"
#include "IServiceSettingsFactory.h"

class CalcService : public IService {
 public:
  CalcService(std::shared_ptr<IResourceFactory> resource_factory,
              std::shared_ptr<IServiceSettingsFactory> settings_factory);
  void start() final;

 private:
  restbed::Service _service;
  std::shared_ptr<IServiceSettingsFactory> _settings_factory;
};
