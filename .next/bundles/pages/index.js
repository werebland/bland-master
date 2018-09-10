module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([3],{202:function(e,t,n){e.exports=n(203)},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n.n(o),a=n(14),i=n(96),l=n.n(i),s=n(220),c=n.n(s);var u=a.a.section.withConfig({displayName:"Hero__Section",componentId:"mrxqip-0"})(["width:100vw;height:100vh;display:flex;flex-flow:column nowrap;"]),f=a.a.div.withConfig({displayName:"Hero__SectionContent",componentId:"mrxqip-1"})(["display:flex;flex:1;width:100%;padding-left:144px;box-sizing:border-box;align-items:center;@media all and (max-width:860px){padding-left:48px}@media all and (max-width:520px){padding-left:24px}"]),p=a.a.h1.withConfig({displayName:"Hero__SectionTitle",componentId:"mrxqip-2"})(["font-size:3rem;font-weight:100;color:#9f9f9f;margin:0;& strong{font-weight:500;color:#0f0f0f;display:block;}"]),d=a.a.div.withConfig({displayName:"Hero__SectionImage",componentId:"mrxqip-3"})(["display:flex;flex:1;width:100%;background:#9f9f9f;background-image:url(",");background-size:cover;background-position:center;"],function(e){return e.image}),h=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.a.createElement(u,{className:"hero"},r.a.createElement(f,{className:"hero__content"},r.a.createElement(p,{className:"hero__content--title"},"Forget the 7 herbs and spices,",r.a.createElement("strong",null,"we're your secret ingredient"))),r.a.createElement(d,{image:"/static/spices.jpg"}))},m=n(102);var y=a.a.section.withConfig({displayName:"Why__Section",componentId:"e62d7n-0"})(["width:100vw;height:100vh;display:flex;flex-flow:row nowrap;align-items:center;padding:72px;box-sizing:border-box;position:relative;@media all and (max-width:860px){padding:72px 48px;}@media all and (max-width:670px){flex-flow:column nowrap;}@media all and (max-width:520px){padding:72px 24px;}"]),b=a.a.article.withConfig({displayName:"Why__SectionCard",componentId:"e62d7n-1"})(["width:50vw;height:60vh;padding:48px;box-sizing:border-box;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);z-index:8;@media all and (max-width:1000px){width:75vw;}@media all and (max-width:670px){width:75vw;height:auto;padding:24px;}"]),g=a.a.h3.withConfig({displayName:"Why__SectionTitle",componentId:"e62d7n-2"})(["font-size:2rem;font-weight:500;color:#0f0f0f;margin:0 0 24px 0;"]),v=a.a.p.withConfig({displayName:"Why__SectionCopy",componentId:"e62d7n-3"})(["font-size:1.5rem;font-weight:300;color:#9f9f9f;margin:0;padding:0;"]),w=a.a.div.withConfig({displayName:"Why__SectionImage",componentId:"e62d7n-4"})(["width:66vw;height:calc(100vh - 144px);background:#9f9f9f;display:flex;position:absolute;top:72px;right:72px;background-image:url(",");background-size:cover;background-position:center;@media all and (max-width:860px){right:48px;}@media all and (max-width:670px){width:100vw;right:0;left:0;top:24px;}"],function(e){return e.image}),x=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.a.createElement(y,{className:"why"},r.a.createElement(b,{className:"why__card"},r.a.createElement(g,{className:"why__card--title"},"Why Bland?"),r.a.createElement(v,{className:"why__card--copy"},"By merging disruptive technology with industry standards, we are able to create a one-of-a-kind presence for your brand. From social media management and content creation to a full-blown branding and identity overhaul, we have the power, expertise, and drive to bring your vision to life. From startups to established business, we’re ready for the opportunity to embrace your big idea.")),r.a.createElement(w,{image:"/static/speaker.jpg"}))},_=n(103),O=(n(23),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),C=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},j={boxSizing:"border-box",display:"inline-block",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",paddingTop:5,position:"relative"},E={boxSizing:"border-box",fontSize:"1rem",left:0,padding:"17px 0 13px 0",pointerEvents:"none",position:"absolute",top:0,transition:"font-size 200ms, padding 200ms",zIndex:1},k={fontSize:"0.625rem",padding:0},S={border:"none",borderBottom:"1px solid black",boxSizing:"border-box",fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",fontSize:"1rem",padding:"12px 0 8px 0"},I={borderColor:"blue",outline:"none"},P=function(e){function t(){var n,o;O(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=C(this,e.call.apply(e,[this].concat(a))),o.state={floating:!1,focused:!1,value:o.props.value},o.handleChange=function(e){var t=e.target.value;o.props.onChange(e),o.setState({value:t})},o.handleFocusChange=function(e){"focus"===e.type?o.props.onFocus(e):o.props.onBlur(e),o.setState({focused:!o.state.focused})},C(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isFloating=function(e,t){return e.length||t},t.prototype.render=function(){var e=this.state,t=e.value,n=e.focused,o=this.props.styles,a=this.isFloating(t,n),i=this.props.element,l=a&&Object.assign({},k,o.floating),s=n&&Object.assign({},I,o.focus),c=Object.assign({},j,o.label),u=Object.assign({},E,o.span,l),f=Object.assign({},S,o.input,s);return r.a.createElement("label",{htmlFor:this.props.id,style:c},r.a.createElement("span",{style:u},this.props.placeholder),r.a.createElement(i,{autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoFocus:this.props.autoFocus,defaultValue:this.props.value,id:this.props.id,inputMode:this.props.inputMode,max:this.props.max,maxLength:this.props.maxLength,min:this.props.min,minLength:this.props.minLength,name:this.props.name,onBlur:this.handleFocusChange,onChange:this.handleChange,onFocus:this.handleFocusChange,pattern:this.props.pattern,readOnly:this.props.readOnly,required:this.props.required,spellCheck:this.props.spellCheck,step:this.props.step,style:f,type:this.props.type}))},t}(r.a.Component);P.defaultProps={autoFocus:!1,disabled:!1,element:"input",name:"",onBlur:function(){},onChange:function(){},onFocus:function(){},placeholder:"",readOnly:!1,required:!1,step:1,styles:{},type:"text",value:""};var N=P;function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){T(e,t,n[t])})}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var M=a.a.article.withConfig({displayName:"Contact__ContactWrapper",componentId:"sc-10vz4cd-0"})(["width:25vw;min-width:360px;height:auto;position:absolute;right:72px;top:72px;background:#fff;box-shadow:0 2px 16px -2px rgba(159,159,159,0.32);"]),W=a.a.h3.withConfig({displayName:"Contact__ContactHeader",componentId:"sc-10vz4cd-1"})(["width:100%;padding:24px 0;background:#0f0f0f;color:#fff;font-size:1.5rem;font-weight:500;margin:0;display:flex;align-items:center;justify-content:center;"]),B=a.a.form.withConfig({displayName:"Contact__ContactForm",componentId:"sc-10vz4cd-2"})(["width:100%;padding:24px;box-sizing:border-box;display:flex;flex-flow:column nowrap;& label input{width:100%;margin-bottom:8px;}& label textarea{width:100%;height:120px;margin-bottom:24px;}& input:-webkit-autofill,& input:-webkit-autofill:hover,& input:-webkit-autofill:focus & textarea:-webkit-autofill,& textarea:-webkit-autofill:hover & textarea:-webkit-autofill:focus,& select:-webkit-autofill,& select:-webkit-autofill:hover,& select:-webkit-autofill:focus{-webkit-box-shadow:0 0 0px 1000px #fff inset;}"]),L=a.a.div.withConfig({displayName:"Contact__ContactFormRow",componentId:"sc-10vz4cd-3"})(["width:100%;display:flex;flex-flow:row nowrap;justify-content:space-between;& label{width:calc(50% - 12px);}& label input{width:100%;}& label textarea{width:100%;}"]),A=(a.a.fieldset.withConfig({displayName:"Contact__ContactFormFieldset",componentId:"sc-10vz4cd-4"})(["border:0;"]),a.a.div.withConfig({displayName:"Contact__StyledSubmitWrapper",componentId:"sc-10vz4cd-5"})(['width:100%;height:56px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;appearance:none;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;position:relative;&::before{content:"";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:"";height:100%;width:100%;background:#0f0f0f;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}&:hover::after{width:0;}'])),H=a.a.input.withConfig({displayName:"Contact__StyledSubmit",componentId:"sc-10vz4cd-6"})(["position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;appearance:none;border:0;background-image:none;background:transparent;color:#fff;font-size:1.25rem;font-weight:400;cursor:pointer;"]),D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),R(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){return r.a.createElement(M,{className:"contact"},r.a.createElement(W,{className:"contact__header"},"Let us buy you a beer"),r.a.createElement(B,{name:"contact",className:"contact__form",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field"},r.a.createElement(L,{className:"contact__form--row"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("input",{type:"text",name:"bot-field",hidden:!0}),r.a.createElement(N,{type:"text",name:"fname",placeholder:"First name",required:!0,styles:{floating:F({},k,{color:"#9f9f9f"}),focus:F({},I,{borderColor:"#0f0f0f"}),input:F({},S,{borderBottomColor:"#9f9f9f",width:"100%"}),label:F({},j,{color:"#9f9f9f"})}}),r.a.createElement(N,{type:"text",name:"lname",placeholder:"Last name",required:!0,styles:{floating:F({},k,{color:"#9f9f9f"}),focus:F({},I,{borderColor:"#0f0f0f"}),input:F({},S,{borderBottomColor:"#9f9f9f",width:"100%"}),label:F({},j,{color:"#9f9f9f"})}})),r.a.createElement(N,{type:"email",placeholder:"Email",name:"email",required:!0,styles:{floating:F({},k,{color:"#9f9f9f"}),focus:F({},I,{borderColor:"#0f0f0f"}),input:F({},S,{borderBottomColor:"#9f9f9f",width:"100%"}),label:F({},j,{color:"#9f9f9f"})}}),r.a.createElement(N,{type:"text",placeholder:"Favorite Halifax hangout spot",name:"hangout",required:!0,styles:{floating:F({},k,{color:"#9f9f9f"}),focus:F({},I,{borderColor:"#0f0f0f"}),input:F({},S,{borderBottomColor:"#9f9f9f",width:"100%"}),label:F({},j,{color:"#9f9f9f"})}}),r.a.createElement(N,{type:"text",placeholder:"What are you working on? (AirBnB for pets, a queso truck, etc)",name:"message",required:!0,element:"textarea",rows:"5",styles:{floating:F({},k,{color:"#9f9f9f"}),focus:F({},I,{borderColor:"#0f0f0f"}),input:F({},S,{borderBottomColor:"#9f9f9f",width:"100%"}),label:F({},j,{color:"#9f9f9f"})}}),r.a.createElement(A,null,r.a.createElement(H,{type:"submit",value:"Submit"}))))}}])&&q(n.prototype,a),i&&q(n,i),t}(),U=n(105);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function $(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var J=a.a.div.withConfig({displayName:"pages__PageWrapper",componentId:"sc-1wbo52z-0"})(["width:100%;height:100%;padding:0;margin:0;"]),Y=a.a.div.withConfig({displayName:"pages__Floaty",componentId:"sc-1wbo52z-1"})(["width:40vw;height:auto;margin:24px auto;padding:24px;box-sizing:border-box;background:#0f0f0f;@media all and (max-width:860px){width:calc(100vw - 96px);}@media all and (max-width:520px){width:calc(100vw - 48px);}"]),G=a.a.p.withConfig({displayName:"pages__FloatyContent",componentId:"sc-1wbo52z-2"})(["font-size:1.5rem;font-weight:500;color:#fff;margin:0 0 24px 0;padding:0;"]),X=a.a.a.withConfig({displayName:"pages__FloatyButton",componentId:"sc-1wbo52z-3"})(['width:100%;height:64px;display:flex;align-items:center;justify-content:center;color:#0f0f0f;font-size:1.5rem;font-weight:400;position:relative;z-index:1;cursor:pointer;text-decoration:none;&::before{content:"";height:100%;width:100%;position:absolute;left:0;top:0;bottom:0;background:#9f9f9f;z-index:-1;}&::after{content:"";height:100%;width:100%;background:#fff;position:absolute;left:0;top:0;bottom:0;z-index:-1;transition:0.3s ease-out all;}&:hover::after{width:0;}']),Z=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=$(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={menuVisible:!1},n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this;return r.a.createElement(J,null,r.a.createElement(_.a,{open:this.state.menuVisible}),r.a.createElement(m.a,{handleMenuToggle:function(){return e.setState({menuVisible:!e.state.menuVisible})},open:this.state.menuVisible}),r.a.createElement(c.a,{query:"(min-width: 1160px)"},r.a.createElement(D,null)),r.a.createElement(h,null),r.a.createElement(Y,{className:"about"},r.a.createElement(G,{className:"about__content"},"Bland is an agile marketing agency devoted to first impressions with a focus on the food and beverage industry. We sweat the details of content and identity to create tangible and expansive presences that capture customers and lead to real-world growth."),r.a.createElement(l.a,{href:"/services",prefetch:!0,passHref:!0},r.a.createElement(X,{className:"about__button"},"See what we can do"))),r.a.createElement(x,null),r.a.createElement(U.a,null))}}])&&Q(n.prototype,a),i&&Q(n,i),t}();t.default=Z},220:function(e,t,n){var o;"undefined"!=typeof self&&self,o=function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){var o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(6)(function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},!0)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var o=/[A-Z]/g,r=/^ms-/,a={};e.exports=function(e){return e in a?a[e]:a[e]=e.replace(o,"-$&").toLowerCase().replace(r,"-ms-")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),i=(o=a)&&o.__esModule?o:{default:o},l=i.default.oneOfType([i.default.string,i.default.number]),s={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:l,deviceHeight:l,width:l,deviceWidth:l,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:l},c=r({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:l,maxHeight:l,minDeviceHeight:l,maxDeviceHeight:l,minWidth:l,maxWidth:l,minDeviceWidth:l,maxDeviceWidth:l,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:l,maxResolution:l},s),u={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},f=r({},u,c);s.type=Object.keys(u),t.default={all:f,types:u,matchers:s,features:c},e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){var n=l({},e);return t.forEach(function(e){return delete n[e]}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.toQuery=t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=o(n(5)),c=o(n(0)),u=o(n(9)),f=o(n(2)),p=o(n(3)),d=o(n(11)),h={component:c.default.node,query:c.default.string,values:c.default.shape(p.default.matchers),children:c.default.oneOfType([c.default.node,c.default.func]),onChange:c.default.func,onBeforeChange:c.default.func},m=Object.keys(p.default.all),y=Object.keys(h),b=y.concat(m),g=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];return n=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={matches:!1},o.updateMatches=function(){o._mql.matches!==o.state.matches&&o.setState({matches:o._mql.matches})},o.removeMql=function(){o._mql&&(o._mql.removeListener(o.updateMatches),o._mql.dispose())},r(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),i(t,[{key:"componentWillMount",value:function(){this.updateQuery(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.updateQuery(e)}},{key:"updateQuery",value:function(e){var t=void 0,n=!1;if(e.query?this.query=e.query:this.query=(0,d.default)(a(e,y)),!this.query)throw new Error("Invalid or missing MediaQuery!");e.values&&(t=Object.keys(e.values).reduce(function(t,n){return t[(0,f.default)(n)]=e.values[n],t},{}),0!==Object.keys(t).length&&(n=!0)),this.removeMql(),this._mql=(0,u.default)(this.query,t,n),this._mql.addListener(this.updateMatches),this.updateMatches()}},{key:"componentWillUpdate",value:function(e,t){this.props.onBeforeChange&&this.state.matches!==t.matches&&this.props.onBeforeChange(this.state.matches)}},{key:"componentDidUpdate",value:function(e,t){this.props.onChange&&t.matches!==this.state.matches&&this.props.onChange(this.state.matches)}},{key:"componentWillUnmount",value:function(){this.removeMql()}},{key:"render",value:function(){if("function"==typeof this.props.children)return this.props.children(this.state.matches);if(!1===this.state.matches)return null;var e=a(this.props,b),t=Object.keys(e).length>0,n=s.default.Children.count(this.props.children);return this.props.component||null==this.props.children||t&&n>1?s.default.createElement(this.props.component||"div",e,this.props.children):t?s.default.cloneElement(this.props.children,e):n?this.props.children:null}}]),t}();g.displayName="MediaQuery",g.defaultProps={values:{}},t.default=g,t.toQuery=d.default},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(){return null}var r=n(7),a=n(1),i=n(8),l=function(){};l=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){function n(e){this.message=e,this.stack=""}function s(e){function o(o,s,c,u,f,p,d){if(u=u||y,p=p||c,d!==a){if(t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}if("undefined"!=typeof console){var m=u+":"+c;!r[m]&&i<3&&(l("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[c]?o?new n(null===s[c]?"The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(s,c,u,f,p)}var r={},i=0,s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function c(e){return s(function(t,o,r,a,i,l){var s=t[o];return f(s)!==e?new n("Invalid "+a+" `"+i+"` of type `"+p(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function u(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(u);if(null===t||e(t))return!0;var n=function(e){var t=e&&(h&&e[h]||e[m]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,r=n.call(t);if(n!==t.entries){for(;!(o=r.next()).done;)if(!u(o.value))return!1}else for(;!(o=r.next()).done;){var a=o.value;if(a&&!u(a[1]))return!1}return!0;default:return!1}}function f(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function p(e){if(void 0===e||null===e)return""+e;var t=f(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function d(e){var t=p(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}var h="function"==typeof Symbol&&Symbol.iterator,m="@@iterator",y="<<anonymous>>",b={array:c("array"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:s(o),arrayOf:function(e){return s(function(t,o,r,i,l){if("function"!=typeof e)return new n("Property `"+l+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[o];if(!Array.isArray(s))return new n("Invalid "+i+" `"+l+"` of type `"+f(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var u=e(s,c,r,i,l+"["+c+"]",a);if(u instanceof Error)return u}return null})},element:function(){return s(function(t,o,r,a,i){var l=t[o];return e(l)?null:new n("Invalid "+a+" `"+i+"` of type `"+f(l)+"` supplied to `"+r+"`, expected a single ReactElement.")})}(),instanceOf:function(e){return s(function(t,o,r,a,i){if(!(t[o]instanceof e)){var l=e.name||y;return new n("Invalid "+a+" `"+i+"` of type `"+((s=t[o]).constructor&&s.constructor.name?s.constructor.name:y)+"` supplied to `"+r+"`, expected instance of `"+l+"`.")}var s;return null})},node:function(){return s(function(e,t,o,r,a){return u(e[t])?null:new n("Invalid "+r+" `"+a+"` supplied to `"+o+"`, expected a ReactNode.")})}(),objectOf:function(e){return s(function(t,o,r,i,l){if("function"!=typeof e)return new n("Property `"+l+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[o],c=f(s);if("object"!==c)return new n("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in s)if(s.hasOwnProperty(u)){var p=e(s,u,r,i,l+"."+u,a);if(p instanceof Error)return p}return null})},oneOf:function(e){return Array.isArray(e)?s(function(t,o,r,a,i){for(var l=t[o],s=0;s<e.length;s++)if(c=l,u=e[s],c===u?0!==c||1/c==1/u:c!=c&&u!=u)return null;var c,u;return new n("Invalid "+a+" `"+i+"` of value `"+l+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}):(l("Invalid argument supplied to oneOf, expected an instance of array."),o)},oneOfType:function(e){if(!Array.isArray(e))return l("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(r)+" at index "+t+"."),o}return s(function(t,o,r,i,l){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,o,r,i,l,a))return null;return new n("Invalid "+i+" `"+l+"` supplied to `"+r+"`.")})},shape:function(e){return s(function(t,o,r,i,l){var s=t[o],c=f(s);if("object"!==c)return new n("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var p=e[u];if(p){var d=p(s,u,r,i,l+"."+u,a);if(d)return d}}return null})},exact:function(e){return s(function(t,o,i,l,s){var c=t[o],u=f(c);if("object"!==u)return new n("Invalid "+l+" `"+s+"` of type `"+u+"` supplied to `"+i+"`, expected `object`.");var p=r({},t[o],e);for(var d in p){var h=e[d];if(!h)return new n("Invalid "+l+" `"+s+"` key `"+d+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(t[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,d,i,l,s+"."+d,a);if(m)return m}return null})}};return n.prototype=Error.prototype,b.checkPropTypes=i,b.PropTypes=b,b}},function(e,t,n){"use strict";var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))r.call(n,c)&&(l[c]=n[c]);if(o){i=o(n);for(var u=0;u<i.length;u++)a.call(n,i[u])&&(l[i[u]]=n[i[u]])}}return l}},function(e,t,n){"use strict";var o=function(){},r=n(1),a={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t,n,i,l){for(var s in e)if(e.hasOwnProperty(s)){var c;try{if("function"!=typeof e[s]){var u=Error((i||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw u.name="Invariant Violation",u}c=e[s](t,s,i,n,null,r)}catch(e){c=e}if(!c||c instanceof Error||o((i||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in a)){a[c.message]=!0;var f=l?l():"";o("Failed "+n+" type: "+c.message+(null!=f?f:""))}}}},function(e,t,n){"use strict";var o=n(10).match,r="undefined"!=typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new function(e,t,n){function a(e){i.matches=e.matches,i.media=e.media}var i=this;if(r&&!n){var l=r.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(a)}else this.matches=o(e,t),this.media=e;this.addListener=function(e){l&&l.addListener(e)},this.removeListener=function(e){l&&l.removeListener(e)},this.dispose=function(){l&&l.removeListener(a)}}(e,t,n)}},function(e,t,n){"use strict";function o(e){return e.split(",").map(function(e){var t=(e=e.trim()).match(l),n=t[1],o=t[2],r=t[3]||"",a={};return a.inverse=!!n&&"not"===n.toLowerCase(),a.type=o?o.toLowerCase():"all",r=r.match(/\([^\)]+\)/g)||[],a.expressions=r.map(function(e){var t=e.match(s),n=t[1].toLowerCase().match(c);return{modifier:n[1],feature:n[2],value:t[2]}}),a})}function r(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function a(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return o(e).some(function(e){var n=e.inverse,o="all"===e.type||t.type===e.type;if(o&&n||!o&&!n)return!1;var l=e.expressions.every(function(e){var n=e.feature,o=e.modifier,l=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===l.toLowerCase();case"width":case"height":case"device-width":case"device-height":l=i(l),s=i(s);break;case"resolution":l=a(l),s=a(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":l=r(l),s=r(s);break;case"grid":case"color":case"color-index":case"monochrome":l=parseInt(l,10)||1,s=parseInt(s,10)||0}switch(o){case"min":return s>=l;case"max":return s<=l;default:return s===l}});return l&&!n||!l&&n})},t.parse=o;var l=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,c=/^(?:(min|max)-)?(.+)/,u=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return Object.keys(a.default.all).forEach(function(n){var o=e[n];null!=o&&t.push(function(e,t){var n=(0,r.default)(e);return"number"==typeof t&&(t+="px"),!0===t?e:!1===t?i(e):"("+n+": "+t+")"}(n,o))}),t.join(" and ")};var r=o(n(2)),a=o(n(3)),i=function(e){return"not "+e};e.exports=t.default}])},e.exports=o(n(1))}},[202]).default}});