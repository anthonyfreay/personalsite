"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[410],{9992:(a,e,s)=>{s.r(e),s.d(e,{default:()=>i});s(2791);var c=s(3267),n=s(2110);const t={container:"Places_container__bXnqW",mainContent:"Places_mainContent__v8r9x"};var r=s(523),o=s(3284),l=s(184);const i=()=>{const a=[{alt:"Beams",src:"places/A7202190-scapes.jpg"},{alt:"Tree",src:"places/A7406558-scapes.jpg"},{alt:"Eclipse",src:"places/RX706102-scapes.jpg"},{alt:"Queens",src:"places/A7202338-scapes.jpg"},{alt:"City Stacks",src:"places/A7202361-scapes.jpg"},{alt:"Ice Rink",src:"places/A7202369-scapes.jpg"},{alt:"Kids playing",src:"places/A7407388-scapes.jpg"},{alt:"Paradise",src:"places/A7407416-scapes.jpg"},{alt:"Sitting in the Sun",src:"places/A7407441-scapes.jpg"},{alt:"Charlseton",src:"places/A7406615-scapes.jpg"},{alt:"JETski",src:"places/A7407477-scapes.jpg"},{alt:"Aruba Sun",src:"places/A7407216-scapes.jpg"},{alt:"Me n You",src:"places/A7406508-scapes.jpg"}].map((a=>({...a,hdSrc:a.src.replace(/(\.\w+)$/,"-hd$1")})));return(0,l.jsxs)("div",{className:t.container,children:[(0,l.jsx)(c.Z,{title:"Places | Anthony Freay"}),(0,l.jsx)(n.Z,{className:t.navBar}),(0,l.jsx)("div",{className:t.mainContent,children:(0,l.jsx)(r.Z,{images:a})}),(0,l.jsx)(o.Z,{className:t.footer,activePage:"places"})]})}},3284:(a,e,s)=>{s.d(e,{Z:()=>o});s(2791);const c={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var n=s(1087),t=s(8640),r=s(184);const o=function(a){let{activePage:e}=a;return(0,r.jsxs)("div",{className:"".concat(c.footer," ").concat(c.container),id:c.footer,children:[(0,r.jsxs)("div",{className:c.pageSection,children:[(0,r.jsx)(n.rU,{to:"/live",className:"".concat(c.pages," ").concat("live"===e?c.footerActive:""),children:"Live"}),(0,r.jsx)(n.rU,{to:"/bw",className:"".concat(c.pages," ").concat("bw"===e?c.footerActive:""),children:"B & W"}),(0,r.jsx)(n.rU,{to:"/people",className:"".concat(c.pages," ").concat("people"===e?c.footerActive:""),children:"People"}),(0,r.jsx)(n.rU,{to:"/places",className:"".concat(c.pages," ").concat("places"===e?c.footerActive:""),children:"Places"}),(0,r.jsx)(n.rU,{to:"/contact",className:"".concat(c.pages," ").concat("contact"===e?c.footerActive:""),children:"Contact"})]}),(0,r.jsx)(t.Z,{className:c.icons,iconSize:30}),(0,r.jsxs)("p",{className:c.copyright,children:["Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved."]}),"        "]})}},8640:(a,e,s)=>{s.d(e,{Z:()=>r});s(2791);var c=s(9135);const n={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var t=s(184);const r=function(a){let{iconSize:e=35}=a;const s=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,t.jsx)("div",{className:"".concat(n.footer," ").concat(n.container),id:n.footer,children:(0,t.jsxs)("div",{className:n.icons,children:[(0,t.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(s),"aria-label":"Email",className:n.icon,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(c.uWG,{size:e})}),(0,t.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:n.icon,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(c.Zf_,{size:e})}),(0,t.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:n.icon,target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(c.oIN,{size:e})})]})})}},523:(a,e,s)=>{s.d(e,{Z:()=>p});var c=s(2791);const n={"no-scroll":"ImageGallery_no-scroll__ttstl",gallery:"ImageGallery_gallery__Q+YCS","gallery-item":"ImageGallery_gallery-item__WhYRe",lightbox:"ImageGallery_lightbox__Q-932",galleryItem:"ImageGallery_galleryItem__AuXTQ"};var t=s(7087),r=(s(9713),s(2686)),o=(s(8300),s(184));const l=(0,c.memo)((a=>{let{images:e}=a;const[s,r]=(0,c.useState)(!1),[l,p]=(0,c.useState)(0),m=(0,c.useCallback)((a=>{p(a),r(!0)}),[]),_=(0,c.useCallback)((()=>{r(!1)}),[]),v=e.map((a=>({...a,src:a.hdSrc})));return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:n.gallery,children:e.map(((a,e)=>(0,o.jsx)("div",{className:n.galleryItem,onClick:()=>m(e),children:(0,o.jsx)(t.LazyLoadImage,{src:a.src,alt:a.alt,effect:"blur",threshold:100})},a.src)))}),s&&(0,o.jsx)(i,{images:v,open:s,activeImage:l,onClose:_,animation:{fade:0}})]})})),i=a=>{let{images:e,open:s,activeImage:c,onClose:t}=a;return(0,o.jsx)("div",{className:n.lightboxContainer,children:(0,o.jsx)(r.ZP,{slides:e,open:s,index:c,controller:{closeOnBackdropClick:!0},close:t,className:n.lightbox,animation:{swipe:0}})})},p=l},2110:(a,e,s)=>{s.d(e,{Z:()=>l});s(2791);var c=s(4166),n=s(8390),t=s(1087),r=s(4023),o=s(184);const l=function(a){let{activePage:e}=a;return(0,o.jsxs)(c.Z,{expand:"lg",className:r.Z.navbar,children:[(0,o.jsx)(c.Z.Brand,{as:t.rU,to:"/",className:r.Z.navBrand,children:"Anthony Freay"}),(0,o.jsx)(c.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,o.jsx)(c.Z.Collapse,{id:"basic-navbar-nav",children:(0,o.jsxs)(n.Z,{className:"".concat(r.Z.navContainer," ml-auto"),children:[(0,o.jsx)(n.Z.Link,{as:t.rU,to:"/work",className:"".concat(r.Z.navItem," ").concat("work"===e?r.Z.activeNavLink:""),children:"Work"}),(0,o.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:r.Z.navItem,children:"Prints"}),(0,o.jsx)(n.Z.Link,{as:t.rU,to:"/contact",className:"".concat(r.Z.navItem," ").concat("contact"===e?r.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(a,e,s)=>{s.d(e,{Z:()=>t});s(2791);var c=s(4270),n=s(184);const t=a=>{let{title:e}=a;return(0,n.jsx)(c.q,{children:(0,n.jsx)("title",{children:e})})}},4023:(a,e,s)=>{s.d(e,{Z:()=>c});const c={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=410.4ec5e4f7.chunk.js.map