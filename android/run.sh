#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.appversionmanagementv3/host.exp.exponent.MainActivity
