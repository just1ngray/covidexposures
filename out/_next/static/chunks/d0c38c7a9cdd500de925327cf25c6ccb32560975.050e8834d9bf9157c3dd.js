(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,t,n){e.exports=n("nOHt")},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}},Aiso:function(e,t,n){e.exports=n("dQHF")},M1PH:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var i=n("q1tI"),r="creds";function o(){var e=Object(i.useState)(void 0),t=e[0],n=e[1];return Object(i.useEffect)((function(){var e=localStorage.getItem(r);n(null==e?null:JSON.parse(e))}),[]),t}function a(e){localStorage.setItem(r,JSON.stringify(e)),window.location.pathname.includes("/login")&&window.location.pathname.replace("/login","/dashboard")}function c(){localStorage.removeItem(r),window.location.reload()}},TBFr:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("nKUr"),r=n("20a2"),o=n("q1tI"),a=n("Aiso"),c=n.n(a),s=n("YFqc"),l=n.n(s),u=n("M1PH");function d(){var e=Object(u.c)(),t=Object(r.useRouter)(),n=Object(o.useState)(!1),a=n[0],s=n[1];var l=[{title:"Home",href:"/"},{title:"Status",href:"/status"},{title:"Hot Spots",href:"/heatmap"},null==e?{title:"Login",href:"/login"}:{title:"Your Locations",href:"/dashboard"}];return Object(i.jsxs)("nav",{className:" flex flex-wrap flex-shrink-0 xl:justify-center items-center  bg-gray-800 ",children:[Object(i.jsx)("div",{className:"hidden md:inline-block",children:Object(i.jsx)(c.a,{src:"/icons/covid.svg",height:50,width:50,alt:"COVID Icon"})}),Object(i.jsx)("div",{className:"inline-block md:hidden",onClick:function(){s((function(e){return!e}))},children:Object(i.jsx)("button",{className:"focus:outline-none",children:Object(i.jsx)(c.a,{src:a?"/icons/cross.svg":"/icons/hamburger.svg",height:70,width:70,alt:"COVID Icon or Menu Icon"})})}),Object(i.jsxs)("p",{className:" text-3xl text-white pl-4 flex-grow xl:flex-grow-0 xl:pr-32 ",children:["COVID ",Object(i.jsx)("br",{className:"lg:hidden"}),"EXPOSURES"]}),Object(i.jsx)("ul",{className:"\n                list-none \n                ".concat(a?"":"hidden md:inline-block","\n            "),children:l.map((function(e){return Object(i.jsx)(f,{href:e.href,title:e.title,isActive:t.pathname==e.href},e.href)}))})]})}function f(e){var t=e.href,n=e.title,r=e.isActive;return Object(i.jsx)("li",{className:"inline-block",children:Object(i.jsx)(l.a,{href:t,children:Object(i.jsx)("a",{className:"\n                    inline-block\n                    py-4 px-6 md:p-6 \n                    hover:bg-gray-700 cursor-pointer \n                    w-screen md:w-auto \n                    text-white \n                    text-lg \n                    ".concat(r?"font-extrabold":"","\n                "),children:n})})})}function h(){return Object(i.jsxs)("footer",{className:" bg-gray-300 border-t border-gray-400  flex flex-wrap flex-shrink-0 items-center justify-evenly p-4 ",children:[Object(i.jsxs)("section",{className:"flex flex-col",children:[Object(i.jsx)(l.a,{href:"/privacy",children:Object(i.jsx)("a",{children:"Privacy Policy"})}),Object(i.jsx)(l.a,{href:"/terms",children:Object(i.jsx)("a",{children:"Terms of Service"})})]}),Object(i.jsx)("section",{className:"w-full flex justify-center sm:w-2/4 lg:w-1/3",children:Object(i.jsxs)("a",{href:"https://github.com/just1ngray/covidexposures",className:"flex items-center p-4",children:[Object(i.jsx)("div",{className:"inline-block",children:Object(i.jsx)(c.a,{src:"/icons/GitHub-Mark-64px.png",layout:"fixed",height:48,width:48,alt:"GitHub logo"})}),Object(i.jsxs)("div",{className:"pl-2",children:[Object(i.jsx)("p",{className:"text-xl font-semibold -mb-1",children:"Contribute"}),Object(i.jsx)("p",{children:"This project is 100% open source!"})]})]})})]})}function p(e){var t=e.className,n=void 0===t?"":t,a=e.children,c=e.authRequired,s=void 0!==c&&c,l=Object(u.c)(),f=Object(r.useRouter)();return Object(o.useEffect)((function(){s&&null===l&&f.push("/login")}),[l]),Object(i.jsxs)("div",{className:"flex flex-col min-h-screen",children:[Object(i.jsx)("div",{className:"bg-red-500 text-center p-2",children:Object(i.jsx)("p",{className:"text-gray-200 text-xl",children:"THIS IS A DEMO WITH REDUCED FUNCTIONALITY"})}),Object(i.jsx)(d,{}),Object(i.jsxs)("main",{className:"\n                flex flex-col flex-grow flex-shrink-0\n                container mx-auto px-2\n                relative\n                ".concat(n,"\n            "),children:[l&&Object(i.jsx)("div",{className:"flex flex-row-reverse pr-4 -mt-2",children:Object(i.jsx)("button",{onClick:u.b,className:"p-1.5 underline",children:"Sign out"})}),a]}),Object(i.jsx)(h,{})]})}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var i=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",d=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):c||o}}),[r,e.href,e.as]),f=d.href,h=d.as,p=e.children,b=e.replace,m=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=o.Children.only(p),j=x&&"object"===typeof x&&x.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),w=i(y,2),O=w[0],A=w[1],S=o.default.useCallback((function(e){O(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,O]);(0,o.useEffect)((function(){var e=A&&t&&(0,a.isLocalURL)(f),i="undefined"!==typeof g?g:n&&n.locale,r=l[f+"%"+h+(i?"%"+i:"")];e&&!r&&u(n,f,h,{locale:i})}),[h,f,A,g,t,n]);var k={ref:S,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:s,scroll:c}))}(e,n,f,h,b,m,v,g)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var N="undefined"!==typeof g?g:n&&n.locale,z=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(h,N,n&&n.locales,n&&n.domainLocales);k.href=z||(0,a.addBasePath)((0,a.addLocale)(h,N,n&&n.defaultLocale))}return o.default.cloneElement(x,k)};t.default=d},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("J4zp"),r=n("RIqP"),o=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,o=void 0!==r&&r,c=e.priority,d=void 0!==c&&c,h=e.loading,p=e.className,b=e.quality,m=e.width,v=e.height,g=e.objectFit,x=e.objectPosition,O=e.loader,A=void 0===O?w:O,S=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),k=n?"responsive":"intrinsic",N=!1;"unsized"in S?(N=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(k=S.layout),delete S.layout);0;var z=!d&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(o=!0,z=!1);var E,I,_,L=(0,f.useIntersection)({rootMargin:"200px",disabled:!z}),q=i(L,2),M=q[0],R=q[1],C=!z||R,H=y(m),D=y(v),U=y(b),P={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:g,objectPosition:x};if("undefined"!==typeof H&&"undefined"!==typeof D&&"fill"!==k){var T=D/H,V=isNaN(T)?"100%":"".concat(100*T,"%");"responsive"===k?(E={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={display:"block",boxSizing:"border-box",paddingTop:V}):"intrinsic"===k?(E={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},I={boxSizing:"border-box",display:"block",maxWidth:"100%"},_='<svg width="'.concat(H,'" height="').concat(D,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===k&&(E={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:H,height:D})}else"undefined"===typeof H&&"undefined"===typeof D&&"fill"===k&&(E={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var B={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};C&&(B=j({src:t,unoptimized:o,layout:k,width:H,quality:U,sizes:n,loader:A}));N&&(E=void 0,I=void 0,P=void 0);return s.default.createElement("div",{style:E},I?s.default.createElement("div",{style:I},_?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(_))}):null):null,!C&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,j({src:t,unoptimized:o,layout:k,width:H,quality:U,sizes:n,loader:A}),{src:t,decoding:"async",sizes:n,style:P,className:p}))),s.default.createElement("img",Object.assign({},S,B,{decoding:"async",className:p,ref:M,style:P})),d?s.default.createElement(l.default,null,s.default.createElement("link",{key:"__nimg-"+B.src+B.srcSet+B.sizes,rel:"preload",as:"image",href:B.srcSet?void 0:B.src,imagesrcset:B.srcSet,imagesizes:B.sizes})):null)};var a=o(n("8OQS")),c=o(n("pVnL")),s=o(n("q1tI")),l=o(n("8Kt/")),u=n("dEHY"),d=n("UWYU"),f=n("vNVm");var h=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["auto=format","fit=max","w="+i],a="";r&&o.push("q="+r);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(O(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"imgix"}||d.imageConfigDefault,b=p.deviceSizes,m=p.imageSizes,v=p.loader,g=p.path,x=(p.domains,[].concat(r(b),r(m)));function j(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var i=r(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(i.length){var o=.01*Math.min.apply(Math,r(i));return{widths:x.filter((function(e){return e>=b[0]*o})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(o,i,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function y(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){var t=h.get(v);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(v))}function O(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},vNVm:function(e,t,n){"use strict";var i=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,r.useRef)(),l=(0,r.useState)(!1),u=i(l,2),d=u[0],f=u[1],h=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,r.useEffect)((function(){if(!a&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[h,d]};var r=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map}}]);