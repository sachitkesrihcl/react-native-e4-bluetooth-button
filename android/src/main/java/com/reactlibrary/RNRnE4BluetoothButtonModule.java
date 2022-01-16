
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNRnE4BluetoothButtonModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNRnE4BluetoothButtonModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNRnE4BluetoothButton";
  }
}