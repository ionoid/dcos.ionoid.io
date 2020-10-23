(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{388:function(e,t,i){"use strict";i.r(t);var s=i(45),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"monitor-and-manage-devices"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitor-and-manage-devices"}},[e._v("#")]),e._v(" Monitor and Manage Devices")]),e._v(" "),i("p",[e._v("The Ionoid.io dashboard offers the possiblity to monitor and manage devices\nfrom a single place. No matter how many devices your fleet has, once "),i("RouterLink",{attrs:{to:"/docs/register-devices.html"}},[e._v("registered on\nIonoid.io platform")]),e._v(", you will be able to ping\nthem, get their status, deploy apps on them, reboot them, ... etc")],1),e._v(" "),i("h2",{attrs:{id:"device-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-information"}},[e._v("#")]),e._v(" Device Information")]),e._v(" "),i("p",[e._v("Each device can be accessed through its dedicated information page:\n"),i("the-device-details-page"),e._v(". Among the information that are displayed on this page, we have:")],1),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#device-status"}},[e._v("Device status")])]),e._v(" "),i("li",[e._v("Device model and hostname")]),e._v(" "),i("li",[e._v("Device network information (IP addresses, connected networks, ... etc)")]),e._v(" "),i("li",[e._v("Device system information (Linux, SealOS, Systemd, Docker versions, ... etc)")]),e._v(" "),i("li",[e._v("Device activity: last seen time, uptime, ... etc")]),e._v(" "),i("li",[e._v("Device errors (if any)")]),e._v(" "),i("li",[e._v("Device operating system version")])]),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/device-details-page.gif",alt:"Device Details Page"}})]),e._v(" "),i("h2",{attrs:{id:"device-status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-status"}},[e._v("#")]),e._v(" Device Status")]),e._v(" "),i("p",[e._v("The device can be in one the 9 following status:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("STARTING")]),e._v(": Device is starting")]),e._v(" "),i("li",[i("strong",[e._v("ONLINE")]),e._v(": Device is online and in a clean state")]),e._v(" "),i("li",[i("strong",[e._v("ERRORS")]),e._v(": Device is online but has some errors and/or failures")]),e._v(" "),i("li",[i("strong",[e._v("MAINTENANCE")]),e._v(": Device is online but is in maintenance mode trying to auto\nrecover from failures")]),e._v(" "),i("li",[i("strong",[e._v("OFFLINE")]),e._v(": Device is offline and did not update Ionoid.io with its status.\n(The device can be running but due to connectivity issues we are unable to\ndetermine its state)")]),e._v(" "),i("li",[i("strong",[e._v("UPDATE")]),e._v(": Device is updating the operating system")]),e._v(" "),i("li",[i("strong",[e._v("UPDATE-MANAGER")]),e._v(": Device is updating the Ionoid SealOS Manager")]),e._v(" "),i("li",[i("strong",[e._v("DEPLOYING")]),e._v(": Device is downloading and deploying applications or files")]),e._v(" "),i("li",[i("strong",[e._v("ROLLING-BACK")]),e._v(": Device is performing a rollback operating of software or\napplications")])]),e._v(" "),i("h2",{attrs:{id:"realtime-activity-logs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#realtime-activity-logs"}},[e._v("#")]),e._v(" Realtime Activity Logs")]),e._v(" "),i("p",[e._v("Status and result of executed actions on your device are displayed on the right\nbloc of "),i("the-device-details-page"),e._v(" or "),i("the-project-details-page"),e._v(":")],1),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/device-realtime-messages.png",alt:"Device Details Page"}})]),e._v(" "),i("h2",{attrs:{id:"actions-history"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#actions-history"}},[e._v("#")]),e._v(" Actions History")]),e._v(" "),i("p",[e._v("A history of all executed commands can be found on the "),i("the-project-details-page"),e._v("\nto which the device belongs, by clicking on the "),i("strong",[e._v("ACTIONS HISTORY")]),e._v(" tab:")],1),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/project-actions-history.png",alt:"Project History Page"}})]),e._v(" "),i("h2",{attrs:{id:"device-system-logs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#device-system-logs"}},[e._v("#")]),e._v(" Device System Logs")]),e._v(" "),i("p",[e._v("The platform offers a way to see exactly what is happening inside your device in\nrealtime with the device logs (system logs) feature on the "),i("the-device-details-page"),e._v(".")],1),e._v(" "),i("p",[e._v("For that, click on the "),i("strong",[e._v("DEVICE LOGS")]),e._v(" tab on the bottom of the\n"),i("the-device-details-page"),e._v(", then click on the "),i("strong",[e._v("Start logs")]),e._v(" button. Logs will\nautomatically show up, and will continue to be forwarded to the corresponding\n"),i("em",[e._v("MQTT channels")]),e._v(" until the device becomes offline, or is instructed to stop\nforwarding logs by clicking on the "),i("em",[e._v("Stop logs")]),e._v(" button.")],1),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Device logs are sent for 10 minutes only, click on the "),i("em",[e._v("Start logs")]),e._v(" button again\nto get more logs.")])]),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/device-logs.png",alt:"Device Logs"}})]),e._v(" "),i("h2",{attrs:{id:"disable-device-management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#disable-device-management"}},[e._v("#")]),e._v(" Disable Device Management")]),e._v(" "),i("p",[e._v("To disable a device, click on the "),i("strong",[e._v("︙")]),e._v(" button on the\n"),i("the-device-details-page"),e._v(", then click on the "),i("strong",[e._v("Disable device")]),e._v(" action.\nConfirm by clicking again on the "),i("strong",[e._v("Disable device")]),e._v(" button:")],1),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/disable-device.png",alt:"Disable Device"}})]),e._v(" "),i("p",[e._v("Disabling a device will put it in the "),i("code",[e._v("Unregistered")]),e._v(" mode. This operation can\nalso be done manually by creating a file named "),i("code",[e._v("disable")]),e._v(" in the "),i("code",[e._v("/data/ionoid/")]),e._v("\ndirectory of the device storage, for example, using the command:")]),e._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" /data/ionoid/disable\n")])])]),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Disabling a device will put it in an "),i("code",[e._v("unregistered")]),e._v(" mode, it will add a file named\n"),i("code",[e._v("disable")]),e._v(" into the data folder.")])]),e._v(" "),i("li",[i("p",[e._v("A disabled device will never communicate with the Ionoid.io dashboard. To\nre-enable it, you will have to manually delete the "),i("code",[e._v("disable")]),e._v(" file from the\ndevice storage.")])])]),e._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /data/ionoid/disable\n")])])]),i("ul",[i("li",[i("p",[e._v("After disabling a device, and if the device is rebooted or online again, it\nwill still stay in the "),i("code",[e._v("unregistered")]),e._v(" mode. It will not communicate with the\nIonoid.io dashboard unless the file "),i("code",[e._v("disable")]),e._v(" is removed manually, "),i("ins",[e._v("use this at\nyour own risk!")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Deployed and running applications will continue to work as expected, however\nany new status updates will not show up on dashboard.")])]),e._v(" "),i("li",[i("p",[e._v("The device will continue to fetch system updates from Ionoid.io URLs, if\nthe installed operating system is supported by Ionoid.io System updates. No\noperation is logged or communicated to Ionoid.io dashboard. This is a free\nsystem update service to keep your devices secure. If you do not want\nany system updates, please install another fresh operating system that\ndoes not support Ionoid.io system updates.")])])])]),e._v(" "),i("h2",{attrs:{id:"delete-device"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#delete-device"}},[e._v("#")]),e._v(" Delete Device")]),e._v(" "),i("p",[e._v("To delete a device, go to the "),i("the-device-settings-page"),e._v(". On the left sidebar,\nclick on "),i("strong",[e._v("Settings")]),e._v(" under the "),i("strong",[e._v("Current device")]),e._v(" menu. Then, scroll to the\nbottom of the page and click on the "),i("strong",[e._v("Delete this device")]),e._v(" button:")],1),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/delete-device-part-1.png",alt:"Click on Delete Device"}})]),e._v(" "),i("p",[e._v("Then enter the first 5 characters of the device UUID, and click on "),i("strong",[e._v("Delete\nthis device")]),e._v(" button:")]),e._v(" "),i("p",[i("img",{attrs:{src:"/steps/monitoring-devices/delete-device-part-2.png",alt:"Confirm Delete Device"}})]),e._v(" "),i("p",[e._v("Please be aware that the device will show up again in the next reboot (or when\nit is online again) if you do not disable it. To delete the device completely from\nIonoid.io, make sure to check the "),i("strong",[e._v("Disable")]),e._v(" checkbox. Disabling a device will\nprevent its registering on the next reboot (or when it is online again), then deletes\nit from the Ionoid.io backends.")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Deployed and running applications will continue to work as expected, however\nany new status updates will not show up on dashboard.")])]),e._v(" "),i("li",[i("p",[e._v("The device will continue to fetch system updates from Ionoid.io URLs, if\nthe installed operating system is supported by Ionoid.io System updates. No\noperation is logged or communicated to Ionoid.io dashboard. This is a free\nsystem update service to keep your devices secure. If you do not want\nany system updates, please install another fresh operating system that\ndoes not support Ionoid.io system updates.")])])])]),e._v(" "),i("Content",{attrs:{"page-key":e.getPageKey(e.$site.pages,"/docs/_have-questions.html")}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);