(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[133],{8133:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(2791),o=n(3267),a=n(2110),i=n(3284),s=n(5764),c=n(520);n(8509);function l(e){let{prefix:t,field:n,errors:o,...a}=e;if(null==o)return null;let i=n?o.getFieldErrors(n):o.getFormErrors();return 0===i.length?null:r.createElement("div",{...a},t?"".concat(t," "):null,i.map((e=>e.message)).join(", "))}var u=r.createContext(null);var f="@formspree/react@".concat("2.5.1");function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(){var e;return null!==(e=(0,r.useContext)(u))&&void 0!==e?e:{client:(0,c.getDefaultClient)()}}(),{client:o=n.client,extraData:a,onError:i,onSuccess:l,origin:p}=t,{stripe:m}=o,h=(0,r.useMemo)((()=>null===m||void 0===m?void 0:m.elements().getElement(s.CardElement)),[m]);return async function(t){let n=function(e){return"preventDefault"in e&&"function"==typeof e.preventDefault}(t)?function(e){e.preventDefault();let t=e.currentTarget;if("FORM"!=t.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(t)}(t):t;if("object"==typeof a)for(let[e,o]of Object.entries(a)){let t;t="function"==typeof o?await o():o,void 0!==t&&(0,c.appendExtraData)(n,e,t)}let r=await o.submitForm(e,n,{endpoint:p,clientName:f,createPaymentMethod:m&&h?()=>m.createPaymentMethod({type:"card",card:h,billing_details:d(n)}):void 0});(0,c.isSubmissionError)(r)?null===i||void 0===i||i(r):null===l||void 0===l||l(r)}}function d(e){let t={address:m(e)};for(let n of["name","email","phone"]){let r=e instanceof FormData?e.get(n):e[n];r&&"string"==typeof r&&(t[n]=r)}return t}function m(e){let t={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=e instanceof FormData?e.get(n):e[n];o&&"string"==typeof o&&(t[r]=o)}return t}const h={contactForm:"ContactForm_contactForm__nXVPN",submit:"ContactForm_submit__VPP+6",terms:"ContactForm_terms__Jrj6m",thankYouMessage:"ContactForm_thankYouMessage__RFRFj","thankYouMessage-active":"ContactForm_thankYouMessage-active__75hlw"};var y=n(184);const v=()=>{const[e,t]=(0,r.useState)(Date.now()),[n,o]=(0,r.useState)(!1),[a,i]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[n,o]=(0,r.useState)(null),[a,i]=(0,r.useState)(null),[s,c]=(0,r.useState)(!1),[l,u]=(0,r.useState)(!1);if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let f=p(e,{client:t.client,extraData:t.data,onError(e){o(e),c(!1),u(!1)},onSuccess(e){o(null),i(e),c(!1),u(!0)},origin:t.endpoint});return[{errors:n,result:a,submitting:s,succeeded:l},async function(e){c(!0),await f(e)},function(){o(null),i(null),c(!1),u(!1)}]}("xdowepna"),s=(0,r.useRef)();(0,r.useEffect)((()=>{a.succeeded&&(o(!0),s.current.reset(),t(Date.now()))}),[a.succeeded]);return(0,y.jsxs)("form",{ref:s,className:h.contactForm,onSubmit:async e=>{e.preventDefault(),await i(e)},children:[(0,y.jsx)("input",{className:h.name,id:"fname",type:"text",name:"fname",placeholder:"First Name*",required:!0}),(0,y.jsx)(l,{field:"fname",prefix:"First Name",errors:a.errors}),(0,y.jsx)("input",{className:h.name,id:"lname",type:"text",name:"lname",placeholder:"Last Name*",required:!0}),(0,y.jsx)(l,{field:"lname",prefix:"Last Name",errors:a.errors}),(0,y.jsx)("input",{className:h.email,type:"email",name:"_replyto",placeholder:"Email*",required:!0}),(0,y.jsx)(l,{field:"_replyto",prefix:"Email",errors:a.errors}),(0,y.jsx)("input",{className:h.subject,type:"text",name:"_subject",placeholder:"Subject*",required:!0}),(0,y.jsx)(l,{field:"_subject",prefix:"Subject",errors:a.errors}),(0,y.jsx)("textarea",{className:h.body,name:"message",placeholder:"Scope of Work*",required:!0}),(0,y.jsx)(l,{field:"message",prefix:"Message",errors:a.errors}),(0,y.jsxs)("label",{htmlFor:"check",className:h.terms,children:["Terms of Service*",(0,y.jsx)("span",{className:h.terms,children:"I understand this form is for professional inquiries only."})]}),(0,y.jsxs)("select",{className:h.terms,name:"check",required:!0,children:[(0,y.jsx)("option",{value:"",children:"Select"}),(0,y.jsx)("option",{value:"Yes",children:"Yes, I understand"})]}),(0,y.jsx)("button",{type:"submit",className:h.submit,disabled:a.submitting,children:"Submit"}),n&&(0,y.jsxs)("p",{className:"".concat(h.thankYouMessage," ").concat(n?h["thankYouMessage-active"]:""),children:["Thanks for reaching out! ",(0,y.jsx)("br",{}),"Please refresh to send a new message."]})]},e)},g={container:"ContactStyle_container__K+8Db",mainContent:"ContactStyle_mainContent__Xw4u0",bioContainer:"ContactStyle_bioContainer__iL78i",bioImage:"ContactStyle_bioImage__GOqDP",bioDescription:"ContactStyle_bioDescription__SyPcm"},b=()=>(0,y.jsxs)("div",{className:g.container,children:[(0,y.jsx)(o.Z,{title:"Contact | Anthony Freay"}),(0,y.jsx)(a.Z,{activePage:"contact"}),(0,y.jsx)("div",{className:g.mainContent,children:(0,y.jsxs)("div",{className:g.bioContainer,children:[(0,y.jsx)("div",{className:g.bioImage,children:(0,y.jsx)("img",{src:"/me/anthonyfreay-bw.jpg",alt:"Anthony Freay",className:g.profileImage})}),(0,y.jsxs)("div",{className:g.bioDescription,children:[(0,y.jsxs)("p",{className:g.intro,children:[(0,y.jsx)("b",{children:"Anthony Freay"})," (he/they) is a ",(0,y.jsx)("b",{children:"New York-based"})," multifaceted Creative, specializing in: ",(0,y.jsx)("br",{}),(0,y.jsx)("b",{children:"software engineering, photo, and design."})]}),(0,y.jsx)("p",{className:g.ethos,children:"Anthony's work ethos focuses on collaboration and attention to detail to create authentic and clean imagery."}),(0,y.jsx)("p",{className:g.location,children:"Anthony is currently booking. For professional inquiries, please use the form below or reach out directly via email."}),(0,y.jsx)(v,{})]})]})}),(0,y.jsx)(i.Z,{activePage:"contact"})]})},3284:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});n(2791);const r={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var o=n(1087),a=n(8640),i=n(184);const s=function(e){let{activePage:t}=e;return(0,i.jsxs)("div",{className:"".concat(r.footer," ").concat(r.container),id:r.footer,children:[(0,i.jsxs)("div",{className:r.pageSection,children:[(0,i.jsx)(o.rU,{to:"/live",className:"".concat(r.pages," ").concat("live"===t?r.footerActive:""),children:"Live"}),(0,i.jsx)(o.rU,{to:"/bw",className:"".concat(r.pages," ").concat("bw"===t?r.footerActive:""),children:"B&W"}),(0,i.jsx)(o.rU,{to:"/portraits",className:"".concat(r.pages," ").concat("portraits"===t?r.footerActive:""),children:"Portraits"}),(0,i.jsx)(o.rU,{to:"/posters",className:"".concat(r.pages," ").concat("posters"===t?r.footerActive:""),children:"Posters"}),(0,i.jsx)(o.rU,{to:"/apparel",className:"".concat(r.pages," ").concat("apparel"===t?r.footerActive:""),children:"Apparel"}),(0,i.jsx)(o.rU,{to:"/contact",className:"".concat(r.pages," ").concat("contact"===t?r.footerActive:""),children:"Contact"})]}),(0,i.jsx)(a.Z,{className:r.icons,iconSize:30}),(0,i.jsx)("p",{className:r.copyright,children:"Copyright \xa9 All Rights Reserved."})]})}},8640:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(2791);var r=n(9135);const o={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var a=n(184);const i=function(e){let{iconSize:t=35}=e;const n=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,a.jsx)("div",{className:"".concat(o.footer," ").concat(o.container),id:o.footer,children:(0,a.jsxs)("div",{className:o.icons,children:[(0,a.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(n),"aria-label":"Email",className:o.icon,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(r.uWG,{size:t})}),(0,a.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:o.icon,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(r.Zf_,{size:t})}),(0,a.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:o.icon,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(r.oIN,{size:t})})]})})}},2110:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(2791);var r=n(4166),o=n(8390),a=n(1087),i=n(4023),s=n(184);const c=function(e){let{activePage:t}=e;return(0,s.jsxs)(r.Z,{expand:"lg",className:i.Z.navbar,children:[(0,s.jsx)(r.Z.Brand,{as:a.rU,to:"/",className:i.Z.navBrand,children:"Anthony Freay"}),(0,s.jsx)(r.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsx)(r.Z.Collapse,{id:"basic-navbar-nav",children:(0,s.jsxs)(o.Z,{className:"".concat(i.Z.navContainer," ml-auto"),children:[(0,s.jsx)(o.Z.Link,{as:a.rU,to:"/work",className:"".concat(i.Z.navItem," ").concat("work"===t?i.Z.activeNavLink:""),children:"Work"}),(0,s.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:i.Z.navItem,children:"Prints"}),(0,s.jsx)(o.Z.Link,{as:a.rU,to:"/contact",className:"".concat(i.Z.navItem," ").concat("contact"===t?i.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(2791);var r=n(4270),o=n(184);const a=e=>{let{title:t}=e;return(0,o.jsx)(r.q,{children:(0,o.jsx)("title",{children:t})})}},520:e=>{var t,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,i=(e,t,n)=>new Promise(((r,o)=>{var a=e=>{try{s(n.next(e))}catch(t){o(t)}},i=e=>{try{s(n.throw(e))}catch(t){o(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,i);s((n=n.apply(e,t)).next())})),s={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(s,{SubmissionError:()=>h,appendExtraData:()=>j,createClient:()=>C,getDefaultClient:()=>N,isSubmissionError:()=>m}),e.exports=(t=s,((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let c of o(t))!a.call(e,c)&&c!==i&&n(e,c,{get:()=>t[c],enumerable:!(s=r(t,c))||s.enumerable});return e})(n({},"__esModule",{value:!0}),t));var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var u=()=>navigator.webdriver||!!document.documentElement.getAttribute(function(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!l.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(3&e.length));for(var t,n,r,o="",a=0;a<e.length;)t=c.indexOf(e.charAt(a++))<<18|c.indexOf(e.charAt(a++))<<12|(n=c.indexOf(e.charAt(a++)))<<6|(r=c.indexOf(e.charAt(a++))),o+=64===n?String.fromCharCode(t>>16&255):64===r?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,255&t);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,f=class{constructor(){this.loadedAt=Date.now(),this.webdriver=u()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},p=class{constructor(e){this.kind="success",this.next=e.next}};var d=class{constructor(e,t){this.paymentIntentClientSecret=e,this.resubmitKey=t,this.kind="stripePluginPending"}};function m(e){return"error"===e.kind}var h=class{constructor(){var e;this.kind="error",this.formErrors=[],this.fieldErrors=new Map;for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];for(let o of n){if(!o.field){this.formErrors.push({code:o.code&&y(o.code)?o.code:"UNSPECIFIED",message:o.message});continue}let t=null!=(e=this.fieldErrors.get(o.field))?e:[];t.push({code:o.code&&g(o.code)?o.code:"UNSPECIFIED",message:o.message}),this.fieldErrors.set(o.field,t)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(e){var t;return null!=(t=this.fieldErrors.get(e))?t:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function y(e){return e in v}var v={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function g(e){return e in b}var b={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};var E=e=>function(e){for(var t,n,r,o,a="",i=0,s=(e=String(e)).length%3;i<e.length;){if((n=e.charCodeAt(i++))>255||(r=e.charCodeAt(i++))>255||(o=e.charCodeAt(i++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");a+=c.charAt((t=n<<16|r<<8|o)>>18&63)+c.charAt(t>>12&63)+c.charAt(t>>6&63)+c.charAt(63&t)}return s?a.slice(0,s-3)+"===".substring(s):a}(JSON.stringify(e)),_=e=>{let t="@formspree/core@".concat("3.0.1");return e?"".concat(e," ").concat(t):t};function j(e,t,n){e instanceof FormData?e.append(t,n):e[t]=n}var w=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.project=e.project,this.stripe=e.stripe,"undefined"!=typeof window&&(this.session=new f)}submitForm(e,t){return i(this,arguments,(function(e,t){var n=this;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function*(){let o=r.endpoint||"https://formspree.io",a=n.project?"".concat(o,"/p/").concat(n.project,"/f/").concat(e):"".concat(o,"/f/").concat(e),s={Accept:"application/json","Formspree-Client":_(r.clientName)};function c(e){return i(this,null,(function*(){try{let t=yield(yield fetch(a,{method:"POST",mode:"cors",body:e instanceof FormData?e:JSON.stringify(e),headers:s})).json();if(function(e){return null!==e&&"object"==typeof e}(t)){if(function(e){return"errors"in e&&Array.isArray(e.errors)&&e.errors.every((e=>"string"==typeof e.message))||"error"in e&&"string"==typeof e.error}(t))return Array.isArray(t.errors)?new h(...t.errors):new h({message:t.error});if(function(e){if("stripe"in e&&"resubmitKey"in e&&"string"==typeof e.resubmitKey){let{stripe:t}=e;return"object"==typeof t&&null!=t&&"paymentIntentClientSecret"in t&&"string"==typeof t.paymentIntentClientSecret}return!1}(t))return new d(t.stripe.paymentIntentClientSecret,t.resubmitKey);if(function(e){return"next"in e&&"string"==typeof e.next}(t))return new p({next:t.next})}return new h({message:"Unexpected response format"})}catch(t){let e=t instanceof Error?t.message:"Unknown error while posting to Formspree: ".concat(JSON.stringify(t));return new h({message:e})}}))}if(n.session&&(s["Formspree-Session-Data"]=E(n.session.data())),t instanceof FormData||(s["Content-Type"]="application/json"),n.stripe&&r.createPaymentMethod){let e=yield r.createPaymentMethod();if(e.error)return new h({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});j(t,"paymentMethod",e.paymentMethod.id);let o=yield c(t);if("error"===o.kind)return o;if("stripePluginPending"===o.kind){let e=yield n.stripe.handleCardAction(o.paymentIntentClientSecret);if(e.error)return new h({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});t instanceof FormData?t.delete("paymentMethod"):delete t.paymentMethod,j(t,"paymentIntent",e.paymentIntent.id),j(t,"resubmitKey",o.resubmitKey);let r=yield c(t);return S(r),r}return o}let l=yield c(t);return S(l),l}()}))}};function S(e){let{kind:t}=e;if("success"!==t&&"error"!==t)throw new Error("Unexpected submission result (kind: ".concat(t,")"))}var x,C=e=>new w(e),N=()=>(x||(x=C()),x)},5764:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return s(e)||c(e,t)||l(e,t)||f()}function s(e){if(Array.isArray(e))return e}function c(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){s=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}function l(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function m(){}function h(){}h.resetWarningCache=m;var y=function(){function e(e,t,n,r,o,a){if(a!==d){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h,resetWarningCache:m};return n.PropTypes=n,n},v=p((function(e){e.exports=y()})),g=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},b=function(e){return null!==e&&"object"===o(e)},E=function(e){return b(e)&&"function"===typeof e.then},_=function(e){return b(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},j="[object Object]",w=function e(t,n){if(!b(t)||!b(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===j;if(o!==(Object.prototype.toString.call(n)===j))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),i=Object.keys(n);if(a.length!==i.length)return!1;for(var s={},c=0;c<a.length;c+=1)s[a[c]]=!0;for(var l=0;l<i.length;l+=1)s[i[l]]=!0;var u=Object.keys(s);if(u.length!==a.length)return!1;var f=t,p=n,d=function(t){return e(f[t],p[t])};return u.every(d)},S=function(e,t,n){return b(e)?Object.keys(e).reduce((function(o,i){var s=!b(t)||!w(e[i],t[i]);return n.includes(i)?(s&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):s?r(r({},o||{}),{},a({},i,e[i])):o}),null):null},x="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",C=function(e){if(null===e||_(e))return e;throw new Error(x)},N=function(e){if(E(e))return{tag:"async",stripePromise:Promise.resolve(e).then(C)};var t=C(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},O=t.createContext(null);O.displayName="ElementsContext";var P=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},A=t.createContext(null);A.displayName="CartElementContext";var I=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},k=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return N(n)}),[n]),s=i(t.useState(null),2),c=s[0],l=s[1],u=i(t.useState(null),2),f=u[0],p=u[1],d=i(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),m=d[0],h=d[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||m.stripe?"sync"!==a.tag||m.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,m,r]);var y=g(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var v=g(r);return t.useEffect((function(){if(m.elements){var e=S(r,v,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[r,v,m.elements]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[m.stripe]),t.createElement(O.Provider,{value:m},t.createElement(A.Provider,{value:{cart:c,setCart:l,cartState:f,setCartState:p}},o))};k.propTypes={stripe:v.any,options:v.object};var F=function(e){var n=t.useContext(O);return P(n,e)},T=function(e){var n=t.useContext(A);return I(n,e)},R=function(){return F("calls useElements()").elements},D=function(){return F("calls useStripe()").stripe},M=function(){return T("calls useCartElement()").cart},L=function(){return T("calls useCartElementState()").cartState},U=function(e){return(0,e.children)(F("mounts <ElementsConsumer>"))};U.propTypes={children:v.func.isRequired};var Z=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},B=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Y=function(e,n){var r="".concat(B(e),"Element"),o=n?function(e){F("mounts <".concat(r,">")),T("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,s=n.className,c=n.options,l=void 0===c?{}:c,u=n.onBlur,f=n.onFocus,p=n.onReady,d=n.onChange,m=n.onEscape,h=n.onClick,y=n.onLoadError,v=n.onLoaderStart,b=n.onNetworksChange,E=n.onCheckout,_=n.onLineItemClick,j=n.onConfirm,w=n.onCancel,x=n.onShippingAddressChange,C=n.onShippingRateChange,N=F("mounts <".concat(r,">")).elements,O=i(t.useState(null),2),P=O[0],A=O[1],I=t.useRef(null),k=t.useRef(null),R=T("mounts <".concat(r,">")),D=R.setCart,M=R.setCartState;Z(P,"blur",u),Z(P,"focus",f),Z(P,"escape",m),Z(P,"click",h),Z(P,"loaderror",y),Z(P,"loaderstart",v),Z(P,"networkschange",b),Z(P,"lineitemclick",_),Z(P,"confirm",j),Z(P,"cancel",w),Z(P,"shippingaddresschange",x),Z(P,"shippingratechange",C),"cart"===e?o=function(e){M(e),p&&p(e)}:p&&(o="payButton"===e?p:function(){p(P)}),Z(P,"ready",o),Z(P,"change","cart"===e?function(e){M(e),d&&d(e)}:d),Z(P,"checkout","cart"===e?function(e){M(e),E&&E(e)}:E),t.useLayoutEffect((function(){if(null===I.current&&N&&null!==k.current){var t=N.create(e,l);"cart"===e&&D&&D(t),I.current=t,A(t),t.mount(k.current)}}),[N,l,D]);var L=g(l);return t.useEffect((function(){if(I.current){var e=S(l,L,["paymentRequest"]);e&&I.current.update(e)}}),[l,L]),t.useLayoutEffect((function(){return function(){I.current&&(I.current.destroy(),I.current=null)}}),[]),t.createElement("div",{id:a,className:s,ref:k})};return o.propTypes={id:v.string,className:v.string,onChange:v.func,onBlur:v.func,onFocus:v.func,onReady:v.func,onEscape:v.func,onClick:v.func,onLoadError:v.func,onLoaderStart:v.func,onNetworksChange:v.func,onCheckout:v.func,onLineItemClick:v.func,onConfirm:v.func,onCancel:v.func,onShippingAddressChange:v.func,onShippingRateChange:v.func,options:v.object},o.displayName=r,o.__elementType=e,o},q="undefined"===typeof window,W=Y("auBankAccount",q),z=Y("card",q),J=Y("cardNumber",q),K=Y("cardExpiry",q),V=Y("cardCvc",q),G=Y("fpxBank",q),X=Y("iban",q),Q=Y("idealBank",q),H=Y("p24Bank",q),$=Y("epsBank",q),ee=Y("payment",q),te=Y("payButton",q),ne=Y("paymentRequestButton",q),re=Y("linkAuthentication",q),oe=Y("address",q),ae=Y("shippingAddress",q),ie=Y("cart",q),se=Y("paymentMethodMessaging",q),ce=Y("affirmMessage",q),le=Y("afterpayClearpayMessage",q);e.AddressElement=oe,e.AffirmMessageElement=ce,e.AfterpayClearpayMessageElement=le,e.AuBankAccountElement=W,e.CardCvcElement=V,e.CardElement=z,e.CardExpiryElement=K,e.CardNumberElement=J,e.CartElement=ie,e.Elements=k,e.ElementsConsumer=U,e.EpsBankElement=$,e.FpxBankElement=G,e.IbanElement=X,e.IdealBankElement=Q,e.LinkAuthenticationElement=re,e.P24BankElement=H,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=se,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=M,e.useCartElementState=L,e.useElements=R,e.useStripe=D,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(2791))},1251:(e,t)=>{"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var r,o="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,c=function(e){return null!==s||(s=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(o,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null}();r&&e?console.warn(i):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(o).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(s){return void n(s)}else t(null)}))),s},l=function(e){var t="invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e),"\n");if(null===e||"object"!==n(e))throw new Error(t);if(1===Object.keys(e).length&&"boolean"===typeof e.advancedFraudSignals)return e;throw new Error(t)},u=!1,f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u=!0;var o=Date.now();return c(r).then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,o)}))};f.setLoadParameters=function(e){if(u&&r){var t=l(e);if(Object.keys(t).reduce((function(t,n){var o;return t&&e[n]===(null===(o=r)||void 0===o?void 0:o[n])}),!0))return}if(u)throw new Error("You cannot change load parameters after calling loadStripe");r=l(e)}},8509:(e,t,n)=>{n(1251)},4023:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=133.211bdfc1.chunk.js.map