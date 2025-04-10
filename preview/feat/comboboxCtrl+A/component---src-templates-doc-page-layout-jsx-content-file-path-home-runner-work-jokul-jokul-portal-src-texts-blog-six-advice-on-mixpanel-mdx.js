"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6215],{60602:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return m},Head:function(){return p},default:function(){return u}});var a=n(47160),o=n(70079);function r(e){const t=Object.assign({p:"p",img:"img",a:"a",h3:"h3",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),o.createElement(o.Fragment,null,o.createElement(n,null,o.createElement(t.p,null,"Mixpanel is a business analytics service which tracks user interactions on web and mobile applications. Integrating\na tracking analytics tool with an application may seem like a simple task, but this story recommends to review your\nplan once more.")),"\n",o.createElement(t.p,null,"User analytics is one of the most fundamental features that every popular web application should perform.\nWithout collecting data about user activities, one can never be sure of the user experience.\nThe developer team will invest days on some functionality, but unless they know how many users use this precious feature,\nthey will only guess and hope that the users are benefiting from it.\nIn other words, “Without data you’re just another person with an opinion.” W. Edwards Deming."),"\n",o.createElement(t.p,null,o.createElement(t.img,{src:"/assets/blog/quote-edwards-deming-data-opinion.jpg",alt:""})),"\n",o.createElement("p",null,o.createElement("a",{href:"https://www.pinterest.com/pin/760123243333129174/"},"via Pinterest")),"\n",o.createElement(t.p,null,"To clarify the ambiguity, my production team of ",o.createElement(t.a,{href:"https://meldeskade.no"},"https://meldeskade.no/")," decided to use popular business analytics tool, ",o.createElement(t.a,{href:"https://mixpanel.com/"},"Mixpanel"),".\nOur single page web application is built with ReactJS, uses Jøkul Design System and hundreds of users visit the website\nto report their insurance activities every day.\nIn short, meldeskade.no is a typical SPA which promises the user to follow a set of operations\nunder some sections and complete the user request somewhere along the way."),"\n",o.createElement(t.p,null,"From the perspective of a front-end developer, I thought including Mixpanel tracking would be a simple task. However, as our team gained more and more experience in the field, I started to realize the obstacles. We followed the path of ‘learning by doing’ and eventually, our Mixpanel tracking started to deliver us data. So, this article will help to those who are in the beginning of their Mixpanel journey and looking for some useful advice."),"\n",o.createElement(t.h3,null,"#1 Don’t underestimate the integration work"),"\n",o.createElement(t.p,null,"Know your enemy first! Adding Mixpanel to your web application is an integration process and system integration is maybe the most problematic fields in information technology. Because linking different systems increases the complexity. Although the relationship between a web application and Mixpanel is a one-way road, the integration will still be painful, and it has the potential to produce unforeseen errors."),"\n",o.createElement(t.p,null,"For instance, if you perform some tracking event before initializing the Mixpanel with the code below, application will have a fatal error and whole website will be down for the user. This error can seem obvious, but one exceptional case for some users might be the end of the show. Therefore, do not underestimate the complexity of integration process."),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-javascript"},"import { MixpanelUtils } from './MixpanelUtils';\n...\nMixpanelUtils.Init();\n")),"\n",o.createElement(t.h3,null,"#2 Document every tracking operation first, code later"),"\n",o.createElement(t.p,null,"Teamwork is required in order to integrate a web application with Mixpanel. Naturally, a web developer cannot sit alone and write all the tracking operations on their own for a large system. Product owner, architect, tester, and tech lead should give their consent on what user activities will be tracked besides developers. Since people from different roles are involved in the process, it is important to keep decisions in one open document."),"\n",o.createElement(t.p,null,"The team of meldeskade.no created a table which lists all tracking events. We included many columns for every event such as definition, trigger case for the tracking, its parameters, development status and we even wrote down the JIRA ticket for each tracking. This strategy helped the team solve the complexity of the problem."),"\n",o.createElement(t.p,null,"Besides, we still keep this document active. Whenever the team needs to implement a new Mixpanel tracking, we start the work by documenting. So, document first, code later."),"\n",o.createElement(t.h3,null,"#3 Don’t try to track too many events on first deployment"),"\n",o.createElement(t.p,null,"Since our team underestimated the complexity of adding Mixpanel to our website, we set an ambitious goal for our delivery. We tried to implement at least 10 different tracking operations in one go. However, you should also implement configuration code for Mixpanel. These are OptInTracking, alias, identify, getting cookie consent of the user, etc. This is the threshold that one team should initially come over to reach for tracking events. When a team wraps all of these in a single deployment, the development work grows much more than expected. Therefore, the goal on first deployment should be a successful configuration of Mixpanel, and a couple of meaningful tracking operations."),"\n",o.createElement(t.h3,null,"#4 Surprise! Surprise! You need a backend developer :)"),"\n",o.createElement(t.p,null,"This is a point that our team failed to foresee. We basically thought we had all the data out there. We should only write some well-organized tracking operations in JS and everything will go smoothly. However, the data flow of a web application is not like what you see on a webpage as a human being. For example, you want to track some category data after the user clicks a section, but the component that you are triggering the event from may not contain the category information as a prop. Therefore, you need to ask the backend developer to provide this additional data via corresponding API call."),"\n",o.createElement(t.p,null,"This tip is very much related to the advice #2. If the developers communicate about where and how to obtain the data attributes in the documentation, the process will go simultaneous and smooth."),"\n",o.createElement(t.h3,null,"#5 You will discover defects along the way"),"\n",o.createElement(t.p,null,"This might be one of the greatest paybacks for all the effort performed to reach the goal. As you implement more tracking on different components of a React application, you will discover some defects that have been omitted by you and other fellow front-end developers. React redundant rendering problems are known, but mostly ignored defects. And they are not easily discovered by tester, neither they truly create some run time error, but they are there. While adding more tracking operations, you will clearly see those mistakes and you will have the opportunity to fix them with some refactoring process. This practice will increase the performance of the application."),"\n",o.createElement(t.h3,null,"#6 GDPR is everyone’s responsibility. Speak up when in doubt."),"\n",o.createElement(t.p,null,"Every team member should be observant on potential GDPR violation. More data does not help to understand user interaction better, but key data does. Users’ private data does not play any role while measuring the efficiency of an application. Therefore, speak up when you are in doubt of some data that your team is about to collect."),"\n",o.createElement(t.p,null,"(This article was previously published on ",o.createElement(t.a,{href:"https://storksnestblog.wordpress.com/2022/03/12/6-advice-on-mixpanel-integration%ef%bf%bc/"},"Stork's Nest"),")"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)};var l=n(72285),s=n(22756),c=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return o.createElement(s.p,{title:t.title})},m=e=>{let{location:t,data:n,pageContext:a,children:r}=e;const{frontmatter:i}=n.page,{types:s}=a;return o.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},o.createElement(c.M1,Object.assign({},i,{versions:a.versions})),o.createElement(c.w5,i),r,s&&o.createElement(l.l,{types:s}))};function u(e){return o.createElement(m,e,o.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return h}});var a=n(78217),o=n(41994),r=n(87505),i=n(70079),l=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:o}=t,r=n>0,i=a-n>o;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",i)},m=e=>{const t=e.target,n=t.parentElement;p(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},h=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,o,r,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(o=e.tags)||void 0===o||null===(r=o.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(o.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(l.dn,{className:"jkl-portal-code-block"},s),a.length>0&&i.createElement(u,{props:a}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),o=n.n(a),r=n(49597),i=n(70079),l=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,i.useContext)(l.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:o()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var a=n(26372),o=n.n(a),r=n(70079);const i=e=>{let{className:t,density:n,...a}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(53484),o=n(3438),r=n(84490),i=n(26372),l=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:d,...p}=e;const m=(0,o.M)("title"),u=(0,o.M)("content"),{0:h,1:f}=(0,s.useState)(c),[g]=(0,r.v)(h,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...p,className:l()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":h})},s.createElement("button",{id:m,className:"jkl-accordion-item__title",type:"button","aria-expanded":h,"aria-controls":u,onClick:e=>{const t=!h;f(t),d&&d(e,t)}},n,s.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!h,bold:h})),s.createElement("div",{id:u,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":m,hidden:!h},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var a=n(70079),o=n(41699),r=n(65174),i=n(6914),l=n(82546),s=n(39126),c=n(66169),d=n(94509);const p=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:m,rows:u,verticalAlign:h,...f}=e;return a.createElement(o.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(i.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,p.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===u.length&&m&&a.createElement(d.S,null,a.createElement(l.p,{colSpan:p.length},m)),u.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(l.p,{key:t,"data-th":p[t],verticalAlign:h},e))))))))}));p.displayName="DataTable"}}]);