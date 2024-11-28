require 'json'

# Load metadata from the package.json (use the correct path here)
package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))  # Go up one directory to reach package.json

Pod::Spec.new do |s|
  # Basic info
  s.name           = 'NfcPayments'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = { :ios => '15.1' }
  s.swift_version  = '5.4'

  # Source of the pod
  s.source         = { git: package['repository']['url'], tag: s.version }

  # Use static frameworks to integrate with ExpoModulesCore
  s.static_framework = true

  # Dependencies
  s.dependency 'ExpoModulesCore'

  # Include all Swift and Objective-C source files
  s.source_files = "ios/**/*.{h,m,mm,swift,hpp,cpp}"

  # Specify the module map
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  # Resource bundles (if you have any resources like .xcassets, localization files, etc.)
  s.resources = 'ios/**/*.xcassets'
end
