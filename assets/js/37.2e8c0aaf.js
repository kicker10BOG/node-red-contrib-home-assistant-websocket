(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{271:function(t,e,a){"use strict";a.r(e);var i=a(0),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wait-until"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-until"}},[t._v("#")]),t._v(" Wait Until")]),t._v(" "),a("p",[t._v("When an input is received the node will wait until the condition is met or the timeout occurs then will pass on the last received message")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"entity-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-id"}},[t._v("#")]),t._v(" Entity ID "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("The id of an entity to use for the comparison.")]),t._v(" "),a("h3",{attrs:{id:"wait-until-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-until-2"}},[t._v("#")]),t._v(" Wait Until "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("property")]),t._v(" field will be checked against the "),a("code",[t._v("value")]),t._v(" field using the comparator.")]),t._v(" "),a("h3",{attrs:{id:"timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[t._v("#")]),t._v(" Timeout")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])])]),t._v(" "),a("p",[t._v("The amount of time to wait for the condition to become true before deactivating the node and passing the message object to the second output. If the timeout is equal to zero the node will wait indefinitely for the condition to be met.")]),t._v(" "),a("h3",{attrs:{id:"entity-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-location"}},[t._v("#")]),t._v(" Entity Location")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("The entity object can also be pass with the message object.")]),t._v(" "),a("h3",{attrs:{id:"check-against-the-current-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-against-the-current-state"}},[t._v("#")]),t._v(" Check against the current state")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("When an input is received it will check the comparator against the current state instead of waiting for a state change.")]),t._v(" "),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("h3",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" reset")]),t._v(" "),a("p",[t._v("If the received message has this property set to any value the node will be set to inactive and the timeout cleared.")]),t._v(" "),a("h3",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" payload")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("object")])])]),t._v(" "),a("p",[t._v("Override config values by passing in a property with a valid value.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("entity_id")])]),t._v(" "),a("li",[a("code",[t._v("entityId")]),t._v(" "),a("Badge",{attrs:{type:"warning",text:"deprecated"}})],1),t._v(" "),a("li",[a("code",[t._v("property")])]),t._v(" "),a("li",[a("code",[t._v("comparator")])]),t._v(" "),a("li",[a("code",[t._v("value")])]),t._v(" "),a("li",[a("code",[t._v("valueType")])]),t._v(" "),a("li",[a("code",[t._v("timeout")])]),t._v(" "),a("li",[a("code",[t._v("timeoutUnits")])]),t._v(" "),a("li",[a("code",[t._v("entityLocation")])]),t._v(" "),a("li",[a("code",[t._v("entityLocationType")])]),t._v(" "),a("li",[a("code",[t._v("checkCurrentState")])])]),t._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("p",[t._v("Will output the last received message when the condition is true or the timeout\noccurs. If the condition becomes true the message will be pass to the first\noutput. If the timeout passes the message will be sent to the second output.")])])}),[],!1,null,null,null);e.default=s.exports}}]);