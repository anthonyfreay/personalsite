"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[378],{8803:(a,e,n)=>{n.r(e),n.d(e,{default:()=>i});n(2791);var r=n(3267),t=n(2110);const s={container:"Apparel_container__jbInM",mainContent:"Apparel_mainContent__yiULp"};var c=n(523),o=n(3284),l=n(184);const i=()=>{const a=[{alt:"Inspired by Brent Faiyaz",src:"apparel/lost-kids_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Frank Ocean",src:"apparel/TEARS_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by brent ii",src:"apparel/EMILY_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Good Days",src:"apparel/WAR-IN-My-MIND_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Sweet Life",src:"apparel/SWEET-LIFE_TSHIRT_MOCKUP.jpg"},{alt:"Inspired by Fun Girl",src:"apparel/FUN-GIRL_TSHIRT_MOCKUP.jpg"}].map((a=>({...a,hdSrc:a.src.replace(/(\.\w+)$/,"-hd$1")})));return(0,l.jsxs)("div",{className:s.container,children:[(0,l.jsx)(r.Z,{title:"Apparel | Anthony Freay"}),(0,l.jsx)(t.Z,{className:s.navBar}),(0,l.jsx)("div",{className:s.mainContent,children:(0,l.jsx)(c.Z,{images:a})}),(0,l.jsx)(o.Z,{className:s.footer,activePage:"apparel"})]})}},3284:(a,e,n)=>{n.d(e,{Z:()=>o});n(2791);const r={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var t=n(1087),s=n(8640),c=n(184);const o=function(a){let{activePage:e}=a;return(0,c.jsxs)("div",{className:"".concat(r.footer," ").concat(r.container),id:r.footer,children:[(0,c.jsxs)("div",{className:r.pageSection,children:[(0,c.jsx)(t.rU,{to:"/live",className:"".concat(r.pages," ").concat("live"===e?r.footerActive:""),children:"Live"}),(0,c.jsx)(t.rU,{to:"/bw",className:"".concat(r.pages," ").concat("bw"===e?r.footerActive:""),children:"B & W"}),(0,c.jsx)(t.rU,{to:"/people",className:"".concat(r.pages," ").concat("people"===e?r.footerActive:""),children:"People"}),(0,c.jsx)(t.rU,{to:"/contact",className:"".concat(r.pages," ").concat("contact"===e?r.footerActive:""),children:"Contact"})]}),(0,c.jsx)(s.Z,{className:r.icons,iconSize:30}),(0,c.jsx)("p",{className:r.copyright,children:"Copyright \xa9 All Rights Reserved."})]})}},8640:(a,e,n)=>{n.d(e,{Z:()=>c});n(2791);var r=n(9135);const t={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var s=n(184);const c=function(a){let{iconSize:e=35}=a;const n=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,s.jsx)("div",{className:"".concat(t.footer," ").concat(t.container),id:t.footer,children:(0,s.jsxs)("div",{className:t.icons,children:[(0,s.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(n),"aria-label":"Email",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(r.uWG,{size:e})}),(0,s.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(r.Zf_,{size:e})}),(0,s.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(r.oIN,{size:e})})]})})}},523:(a,e,n)=>{n.d(e,{Z:()=>_});var r=n(2791);const t={"no-scroll":"ImageGallery_no-scroll__ttstl",gallery:"ImageGallery_gallery__Q+YCS","gallery-item":"ImageGallery_gallery-item__WhYRe",lightbox:"ImageGallery_lightbox__Q-932",galleryItem:"ImageGallery_galleryItem__AuXTQ"};var s=n(7087),c=(n(9713),n(2686)),o=(n(8300),n(184));const l=(0,r.memo)((a=>{let{images:e}=a;const[n,c]=(0,r.useState)(!1),[l,_]=(0,r.useState)(0),m=(0,r.useCallback)((a=>{_(a),c(!0)}),[]),p=(0,r.useCallback)((()=>{c(!1)}),[]),d=e.map((a=>({...a,src:a.hdSrc})));return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:t.gallery,children:e.map(((a,e)=>(0,o.jsx)("div",{className:t.galleryItem,onClick:()=>m(e),children:(0,o.jsx)(s.LazyLoadImage,{src:a.src,alt:a.alt,effect:"blur",threshold:100})},a.src)))}),n&&(0,o.jsx)(i,{images:d,open:n,activeImage:l,onClose:p,animation:{fade:0}})]})})),i=a=>{let{images:e,open:n,activeImage:r,onClose:s}=a;return(0,o.jsx)("div",{className:t.lightboxContainer,children:(0,o.jsx)(c.ZP,{slides:e,open:n,index:r,controller:{closeOnBackdropClick:!0},close:s,className:t.lightbox,animation:{swipe:0}})})},_=l},2110:(a,e,n)=>{n.d(e,{Z:()=>l});n(2791);var r=n(4166),t=n(8390),s=n(1087),c=n(4023),o=n(184);const l=function(a){let{activePage:e}=a;return(0,o.jsxs)(r.Z,{expand:"lg",className:c.Z.navbar,children:[(0,o.jsx)(r.Z.Brand,{as:s.rU,to:"/",className:c.Z.navBrand,children:"Anthony Freay"}),(0,o.jsx)(r.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,o.jsx)(r.Z.Collapse,{id:"basic-navbar-nav",children:(0,o.jsxs)(t.Z,{className:"".concat(c.Z.navContainer," ml-auto"),children:[(0,o.jsx)(t.Z.Link,{as:s.rU,to:"/work",className:"".concat(c.Z.navItem," ").concat("work"===e?c.Z.activeNavLink:""),children:"Work"}),(0,o.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:c.Z.navItem,children:"Prints"}),(0,o.jsx)(t.Z.Link,{as:s.rU,to:"/contact",className:"".concat(c.Z.navItem," ").concat("contact"===e?c.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(a,e,n)=>{n.d(e,{Z:()=>s});n(2791);var r=n(4270),t=n(184);const s=a=>{let{title:e}=a;return(0,t.jsx)(r.q,{children:(0,t.jsx)("title",{children:e})})}},4023:(a,e,n)=>{n.d(e,{Z:()=>r});const r={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=378.8b6417fd.chunk.js.map