(window.webpackJsonp=window.webpackJsonp||[]).push([[11,18],{267:function(e,n,t){"use strict";t.r(n);var o={props:["item"],name:"FlexToolboxItem",data:function(){return{}}},l=t(13),component=Object(l.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"alloy-cards alloy-cards--dark alloy-item alloy-item--toolbox"},[t("div",{staticClass:"inner"},[t("div",{staticClass:"alloy-image"},[t("img",{attrs:{src:e.item.featuredImage.sourceUrl,alt:"Tool: "+e.item.title}})]),e._v(" "),t("h4",[e._v(e._s(e.item.title))]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.item.content)}})])])},[],!1,null,null,null);n.default=component.exports},275:function(e,n,t){"use strict";t.r(n);var o=t(289),l=t.n(o),r={props:["item"],name:"FlexToolbox",data:function(){return{}},components:{ToolboxItem:t(267).default},apollo:{toolbox:{prefetch:!0,query:l.a,update:function(data){return data.toolbox.nodes}}},mounted:function(){},destroyed:function(){},methods:{}},d=t(13),component=Object(d.a)(r,function(){var e=this.$createElement,n=this._self._c||e;return n("section",{staticClass:"flex-Toolbox"},[n("div",{staticClass:"container--medium container-type--toolbox"},[n("h3",{staticClass:"alloy-title alloy-title--large"},[this._v("onze skills")]),this._v(" "),n("div",{staticClass:"inner"},[this._l(this.toolbox,function(e,t){return[n("div",{key:t,staticClass:"item"},[n("ToolboxItem",{key:t,attrs:{item:e}})],1)]})],2)])])},[],!1,null,null,null);n.default=component.exports},289:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetToolbox"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"toolbox"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"orderby"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"field"},value:{kind:"EnumValue",value:"MENU_ORDER"}},{kind:"ObjectField",name:{kind:"Name",value:"order"},value:{kind:"EnumValue",value:"ASC"}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"featuredImage"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sourceUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"altText"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:197}};t.loc.source={body:"query GetToolbox {\n  toolbox(where: {orderby: {field: MENU_ORDER, order: ASC}}) {\n    nodes {\n      title\n      content\n      featuredImage {\n        sourceUrl\n        altText\n      }\n    }\n  }\n}\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var o=n.type;"NamedType"===o.kind&&t.add(o.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),o[e.name.value]=n}}),e.exports=t,e.exports.GetToolbox=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,d=new Set,c=new Set;for(r.forEach(function(e){c.add(e)});c.size>0;){var m=c;c=new Set,m.forEach(function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach(function(e){c.add(e)}))})}return d.forEach(function(n){var o=l(e,n);o&&t.definitions.push(o)}),t}(t,"GetToolbox")}}]);