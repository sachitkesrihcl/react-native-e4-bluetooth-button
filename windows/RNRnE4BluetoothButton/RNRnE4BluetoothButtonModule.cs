using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Rn.E4.Bluetooth.Button.RNRnE4BluetoothButton
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNRnE4BluetoothButtonModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNRnE4BluetoothButtonModule"/>.
        /// </summary>
        internal RNRnE4BluetoothButtonModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNRnE4BluetoothButton";
            }
        }
    }
}
