(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{265:function(t,e,n){"use strict";n.r(e);var r={props:["item"],name:"FlexTeam",data:function(){return{}},computed:{responsiveImage:function(){return this.item.featuredImage.mediaDetails.sizes.map(function(image){return"".concat(image.sourceUrl," ").concat(image.width,"w")})}}},l=n(13),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alloy-item alloy-item--team"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"alloy-image"},[e("img",{attrs:{src:this.item.featuredImage.sourceUrl,sizes:"(min-width: 1200px) 33vw,\n     (min-width: 768px) 300px,\n     (min-width: 576px) 200px,\n     100vw",srcset:this.responsiveImage,alt:"Profile "+this.item.title}})]),this._v(" "),e("h4",[this._v(this._s(this.item.title))])])])},[],!1,null,null,null);e.default=component.exports}}]);