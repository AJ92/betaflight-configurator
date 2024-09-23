import CONFIGURATOR from "./data_storage";
import serialWebsocket from "./websocketSerial.js";
import BT from "./protocols/bluetooth.js";
import virtualSerial from "./virtualSerial.js";

export let serialShim = () => CONFIGURATOR.virtualMode ? virtualSerial: CONFIGURATOR.bluetoothMode ? BT : serialWebsocket;
