import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

export const BluetoothButton = (props) => {

    const [bluetoothState, setBluetoothState] = useState(false)

    const enableBluetooth = () => {
        BluetoothStateManager.enable()
            .then(() => {
                setBluetoothState(true)
            })
            .catch(error => setBluetoothState(false))
    }

    /* 
     * Checks for the device bluetooth state.
     */
    _checkBluetoothState = () => {
        if (Platform.OS = 'android') {
            NativeModules.BluetoothAndroidModule.checkBluetoothState((bluetooth_state) => {
                setBluetoothState(bluetooth_state)
            });
        } else {
            // iOS code goes here.
        }
    }

    useEffect(() => {
        // _checkBluetoothState()
        let btListener = BluetoothStateManager.addEventListener(
            BluetoothStateManager.EVENT_BLUETOOTH_STATE_CHANGE,
            (bluetoothState) => {
                if (bluetoothState === "PoweredOff") {
                    setBluetoothState(false)
                } else if (bluetoothState === "PoweredOn") {
                    setBluetoothState(true)
                }
            }
        );
        return () => {
            btListener.remove()
        }
    }, [])


    return (
        <>
            {
                bluetoothState && <View style={{ backgroundColor: "white", "width": "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
                    <TouchableOpacity style={[styles.button, { width: "95%", backgroundColor: "#2d88ff1a", display: "flex", flexDirection: "row", padding: wp("2%") }, styles.shadowContainerStyle]} activeOpacity={0.5} onPress={enableBluetooth}>
                        <Image
                            source={require('../assets/bluetooth_icon.jpeg')}
                            style={{ padding: wp("2%"), width: "20%", height: "100%", resizeMode: "contain" }}
                        />
                        <View style={[{ width: "80%", height: "100%", justifyContent: 'center', alignItems: "center" }]}>
                            <Text style={[styles.buttonText, { fontWeight: "bold", textAlign: "left", color: "#3b5998", paddingLeft: wp("2%"), letterSpacing: 0 }]}> ENABLE BLUETOOTH</Text>
                            <Text style={[styles.buttonText, { fontWeight: "400", textAlign: "left", color: "#3b5998", paddingLeft: wp("2%"), fontSize: wp("3%"), letterSpacing: 0 }]}> Please turn on bluetooth by pressing the button to make this app work. </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
        </>

    )
}

const styles = StyleSheet.create({
    shadowContainerStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    button: {
        width: "50%",
        height: "70%",
        backgroundColor: '#BF0000',
        borderRadius: 25,
    },
    buttonText: {
        width: "100%",
        fontSize: wp("3.5%"),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 2,
    }
})
