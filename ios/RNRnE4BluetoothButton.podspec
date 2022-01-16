
Pod::Spec.new do |s|
  s.name         = "RNRnE4BluetoothButton"
  s.version      = "1.0.0"
  s.summary      = "RNRnE4BluetoothButton"
  s.description  = <<-DESC
                  RNRnE4BluetoothButton
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNRnE4BluetoothButton.git", :tag => "master" }
  s.source_files  = "RNRnE4BluetoothButton/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  