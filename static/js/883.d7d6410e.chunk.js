"use strict";(self.webpackChunkreact_personal_site=self.webpackChunkreact_personal_site||[]).push([[883],{3182:(e,a,r)=>{r.r(a),r.d(a,{default:()=>l});r(2791);var s=r(3267),t=r(2110);const o={container:"Posters_container__p77Br",mainContent:"Posters_mainContent__3k70S"};var n=r(523),c=r(3284),i=r(184);const l=()=>{const e=[{alt:"Poster inspired by Good Guy \u2013 Frank Ocean",src:"posters/like-you-look-mockup.jpg"},{alt:"Poster inspired by Off the Table \u2013 Ariana Grande, The Weeknd",src:"posters/off-the-table-mockup.jpg"},{alt:"Poster inspired by the HTBH Tour \u2013 Chelsea Cutler",src:"posters/htbh-poster.jpg"},{alt:"Poster inspired by Pears \u2013 Weston Estate",src:"posters/pears-mockup.jpg"},{alt:"Poster inspired by Down Bad slang",src:"posters/down-bad-mockup.jpg"},{alt:"Poster inspired by the Patagonia Outerwear",src:"posters/patagonia-mockup.jpg"},{alt:"Poster inspired by the My Future - Billie Eilish",src:"posters/my-future-mockup.jpg"},{alt:"Poster inspired by Good Days \u2013 SZA",src:"posters/GOOD-DAYS-mockup.jpg"},{alt:"Poster inspired by Adidas Samba",src:"posters/samba-mockup.jpg"},{alt:"Poster inspired by Waves of Blue - Majid Jordan",src:"posters/wob-mockup.jpg"},{alt:"Poster inspired by Motive \u2013 Arian Grande, Doja Cat",src:"posters/motive-mockup.jpg"},{alt:"Poster inspired by political decisions made by men on women's autonomy",src:"posters/menSTFU-mockup.jpg"}].map((e=>({...e,hdSrc:e.src.replace(/(\.\w+)$/,"-hd$1")})));return(0,i.jsxs)("div",{className:o.container,children:[(0,i.jsx)(s.Z,{title:"Posters | Anthony Freay"}),(0,i.jsx)(t.Z,{className:o.navBar}),(0,i.jsx)("div",{className:o.mainContent,children:(0,i.jsx)(n.Z,{images:e})}),(0,i.jsx)(c.Z,{className:o.footer,activePage:"posters"})]})}},3284:(e,a,r)=>{r.d(a,{Z:()=>c});r(2791);const s={footer:"Footer_footer__jCZgs",pageSection:"Footer_pageSection__ajNhR",pages:"Footer_pages__gUnrU",copyright:"Footer_copyright__NjdM6",footerActive:"Footer_footerActive__xunGE"};var t=r(1087),o=r(8640),n=r(184);const c=function(e){let{activePage:a}=e;return(0,n.jsxs)("div",{className:"".concat(s.footer," ").concat(s.container),id:s.footer,children:[(0,n.jsxs)("div",{className:s.pageSection,children:[(0,n.jsx)(t.rU,{to:"/live",className:"".concat(s.pages," ").concat("live"===a?s.footerActive:""),children:"Live"}),(0,n.jsx)(t.rU,{to:"/bw",className:"".concat(s.pages," ").concat("bw"===a?s.footerActive:""),children:"B & W"}),(0,n.jsx)(t.rU,{to:"/people",className:"".concat(s.pages," ").concat("people"===a?s.footerActive:""),children:"People"}),(0,n.jsx)(t.rU,{to:"/contact",className:"".concat(s.pages," ").concat("contact"===a?s.footerActive:""),children:"Contact"})]}),(0,n.jsx)(o.Z,{className:s.icons,iconSize:30}),(0,n.jsx)("p",{className:s.copyright,children:"Copyright \xa9 All Rights Reserved."})]})}},8640:(e,a,r)=>{r.d(a,{Z:()=>n});r(2791);var s=r(9135);const t={container:"Icons_container__6bwWC",icons:"Icons_icons__EmtPo",icon:"Icons_icon__a6JbE"};var o=r(184);const n=function(e){let{iconSize:a=35}=e;const r=encodeURIComponent("Website Inquiry - Anthony Freay");return(0,o.jsx)("div",{className:"".concat(t.footer," ").concat(t.container),id:t.footer,children:(0,o.jsxs)("div",{className:t.icons,children:[(0,o.jsx)("a",{href:"mailto:anthonyfreay@gmail.com?subject=".concat(r),"aria-label":"Email",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(s.uWG,{size:a})}),(0,o.jsx)("a",{href:"https://www.instagram.com/anthonyfreay","aria-label":"Visit Instagram Profile",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(s.Zf_,{size:a})}),(0,o.jsx)("a",{href:"https://www.pinterest.com/anthonybfreay","aria-label":"View Pinterest Board",className:t.icon,target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)(s.oIN,{size:a})})]})})}},523:(e,a,r)=>{r.d(a,{Z:()=>m});var s=r(2791);const t={"no-scroll":"ImageGallery_no-scroll__ttstl",gallery:"ImageGallery_gallery__Q+YCS","gallery-item":"ImageGallery_gallery-item__WhYRe",lightbox:"ImageGallery_lightbox__Q-932",galleryItem:"ImageGallery_galleryItem__AuXTQ"};var o=r(7087),n=(r(9713),r(2686)),c=(r(8300),r(184));const i=(0,s.memo)((e=>{let{images:a}=e;const[r,n]=(0,s.useState)(!1),[i,m]=(0,s.useState)(0),p=(0,s.useCallback)((e=>{m(e),n(!0)}),[]),d=(0,s.useCallback)((()=>{n(!1)}),[]),v=a.map((e=>({...e,src:e.hdSrc})));return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:t.gallery,children:a.map(((e,a)=>(0,c.jsx)("div",{className:t.galleryItem,onClick:()=>p(a),children:(0,c.jsx)(o.LazyLoadImage,{src:e.src,alt:e.alt,effect:"blur",threshold:100})},e.src)))}),r&&(0,c.jsx)(l,{images:v,open:r,activeImage:i,onClose:d,animation:{fade:0}})]})})),l=e=>{let{images:a,open:r,activeImage:s,onClose:o}=e;return(0,c.jsx)("div",{className:t.lightboxContainer,children:(0,c.jsx)(n.ZP,{slides:a,open:r,index:s,controller:{closeOnBackdropClick:!0},close:o,className:t.lightbox,animation:{swipe:0}})})},m=i},2110:(e,a,r)=>{r.d(a,{Z:()=>i});r(2791);var s=r(4166),t=r(8390),o=r(1087),n=r(4023),c=r(184);const i=function(e){let{activePage:a}=e;return(0,c.jsxs)(s.Z,{expand:"lg",className:n.Z.navbar,children:[(0,c.jsx)(s.Z.Brand,{as:o.rU,to:"/",className:n.Z.navBrand,children:"Anthony Freay"}),(0,c.jsx)(s.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,c.jsx)(s.Z.Collapse,{id:"basic-navbar-nav",children:(0,c.jsxs)(t.Z,{className:"".concat(n.Z.navContainer," ml-auto"),children:[(0,c.jsx)(t.Z.Link,{as:o.rU,to:"/work",className:"".concat(n.Z.navItem," ").concat("work"===a?n.Z.activeNavLink:""),children:"Work"}),(0,c.jsx)("a",{href:"https://anthonyfreay.darkroom.com/",target:"_blank",rel:"noopener noreferrer",className:n.Z.navItem,children:"Prints"}),(0,c.jsx)(t.Z.Link,{as:o.rU,to:"/contact",className:"".concat(n.Z.navItem," ").concat("contact"===a?n.Z.activeNavLink:""),children:"Contact"})]})})]})}},3267:(e,a,r)=>{r.d(a,{Z:()=>o});r(2791);var s=r(4270),t=r(184);const o=e=>{let{title:a}=e;return(0,t.jsx)(s.q,{children:(0,t.jsx)("title",{children:a})})}},4023:(e,a,r)=>{r.d(a,{Z:()=>s});const s={navbar:"Navbar_navbar__DM0K8",navContainer:"Navbar_navContainer__Ip3z2",navBrand:"Navbar_navBrand__NzbXo",activeNavLink:"Navbar_activeNavLink__swnFk",navItem:"Navbar_navItem__JTcr9",homeNavbar:"Navbar_homeNavbar__xLlB3",homeNavItem:"Navbar_homeNavItem__AlW9s"}}}]);
//# sourceMappingURL=883.d7d6410e.chunk.js.map