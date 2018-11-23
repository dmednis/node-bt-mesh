const dbus = require('dbus-native');

const MESH_SERVICE_NAME = 'org.bluez.mesh1'
const MESH_SERVICE_PATH = "/org/bluez/mesh1"
const DBUS_PROP_IFACE = 'org.freedesktop.DBus.Properties'
const DBUS_OM_IFACE = 'org.freedesktop.DBus.ObjectManager'

const MESH_NETWORK_IFACE = 'org.bluez.mesh1.Network'
const MESH_NODE_IFACE = 'org.bluez.mesh1.Node'
const MESH_ELEMENT_IFACE = 'org.bluez.mesh1.Element'

const sessionBus = dbus.sessionBus();

if (!sessionBus) {
  throw new Error('Could not connect to the DBus session bus.');
}

console.log('test');

process.exit(0);
