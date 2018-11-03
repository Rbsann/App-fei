#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.appsoma.android.prof/host.exp.exponent.MainActivity
