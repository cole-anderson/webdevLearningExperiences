#!/bin/bash
echo "makefile.lol"
cmake -HbackendC++/ -BbackendC++/build
cmake --build backendC++/build --config Release --target all
backendC++/build/CalculatorAPI
