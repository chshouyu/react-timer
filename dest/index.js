__wpjp_([1],{0:function(e,t,n){e.exports=n(90)},53:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},88:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(l(r.parts[o],t))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(l(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],u=i[3],l={css:a,media:s,sourceMap:u};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(e,t){var n=m(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function l(e,t){var n,r,i;if(t.singleton){var o=g++;n=v||(v=s(t)),r=c.bind(null,n,o,!1),i=c.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=f.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),i=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function c(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var s=n[a],u=d[s.id];u.refs--,o.push(u)}if(e){var l=i(e);r(l,t)}for(var a=0;a<o.length;a++){var u=o[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},89:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(52),l=r(u);n(166);var c=function(e){function t(e){i(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={mill:0,passedMill:0,isRunning:!1,counts:[]},n.start=n.start.bind(n),n.stop=n.stop.bind(n),n.reset=n.reset.bind(n),n.count=n.count.bind(n),n}return a(t,e),s(t,[{key:"start",value:function(){var e=this;this.setState({isRunning:!0});var t=Date.now();this.timer=setInterval(function(){e.setState({mill:Date.now()-t+e.state.passedMill})},100)}},{key:"stop",value:function(){clearInterval(this.timer),this.setState({isRunning:!1,passedMill:this.state.mill})}},{key:"reset",value:function(){this.setState({mill:0,passedMill:0,counts:[]})}},{key:"count",value:function(){var e=this.state,t=e.counts,n=e.mill;t.unshift(n),this.setState({counts:t})}},{key:"parseTime",value:function(e){var t=Math.floor(e/1e3),n=Math.floor(e%1e3/100),r=Math.floor(t/60)%60,i=t%60,o=Math.floor(t/3600);return(o+":"+r+":"+i+":"+n).replace(/(^|:)(\d)(?=:)/g,"$10$2")}},{key:"render",value:function(){var e=this,t=this.state,n=t.mill,r=t.isRunning,i=t.counts,o=r?"停止":"开始",a=r?this.stop:this.start,s=r?"计次":"复位",u=r?this.count:this.reset;return l["default"].createElement("div",{className:"wrapper"},l["default"].createElement("header",null,"计时器"),l["default"].createElement("div",{className:"btns"},l["default"].createElement("input",{type:"button",value:o,onClick:a}),l["default"].createElement("input",{type:"button",value:s,onClick:u})),l["default"].createElement("div",{className:"time-screen"},this.parseTime(n)),i.length>0&&l["default"].createElement("ul",{className:"counts-list"},i.map(function(t,n){return l["default"].createElement("li",{key:n},e.parseTime(t))})))}}]),t}(u.Component);t["default"]=c},90:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(52),o=r(i),a=n(93),s=n(89),u=r(s);n(165);var l=document.getElementById("container");(0,a.render)(o["default"].createElement(u["default"],null),l)},91:function(e,t,n){t=e.exports=n(53)(),t.push([e.id,"/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}",""])},92:function(e,t,n){t=e.exports=n(53)(),t.push([e.id,".wrapper header{font-size:40px}.btns,.wrapper header{text-align:center;margin-top:20px}.btns input{display:inline-block;margin:0 10px;width:90px;height:36px;border:1px solid #111;border-radius:2px;background:#fff;font-size:18px;outline:none}.btns input:hover{background:#fafafa}.time-screen{text-align:center;font-size:48px;margin-top:10px;font-family:Droid Sans Mono,Consolas}.counts-list{margin:0}.counts-list li{font-family:Droid Sans Mono,Consolas;font-size:20px}",""])},93:function(e,t,n){"use strict";e.exports=n(60)},165:function(e,t,n){var r=n(91);"string"==typeof r&&(r=[[e.id,r,""]]);n(88)(r,{});r.locals&&(e.exports=r.locals)},166:function(e,t,n){var r=n(92);"string"==typeof r&&(r=[[e.id,r,""]]);n(88)(r,{});r.locals&&(e.exports=r.locals)}});