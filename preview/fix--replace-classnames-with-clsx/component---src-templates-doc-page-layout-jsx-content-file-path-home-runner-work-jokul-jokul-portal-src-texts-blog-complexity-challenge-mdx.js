"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2753],{5860:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return p},default:function(){return u}});var a=n(47160),o=n(70079);function i(e){const t=Object.assign({p:"p",a:"a",img:"img",h3:"h3"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),o.createElement(o.Fragment,null,o.createElement(n,null,o.createElement(t.p,null,"How much complexity can we tolerate in a design system architecture? Or what is the fine balance of granularity for\na design system to control the complexity at an optimum level?")),"\n",o.createElement(t.p,null,"Architecture is the invisible blueprint of every IT system. As the DNA identifies the structure of an organism,\nthe architecture clarifies the integrity of an IT system and its character makes impact on every level of the hierarchy.\nTherefore, specifying the architecture is a fundamental step to solve the complexity problem of platform ecosystems.\nBasically, architecture answers the question of what should be placed where in an IT system, whereas governance\ndescribes who decides what."),"\n",o.createElement(t.p,null,"One of the reasons behind the need for design systems is surely to reduce the complexity. However, a design system without\na proper architecture can contribute to the complexity problem and turn out to become a gridlock instead of solving the problem.\nTherefore, design systems consist of sub-systems to create granularity (modularization). So that, the architecture\nof a design system is the collection of those sub-systems and the applications that a design system is in interaction with.\nCertainly, such hierarchical settlement is not an end to the complexity problem, but maybe a new and manageable beginning."),"\n",o.createElement(t.p,null,"An ecosystem’s complexity is a function of the number of unique subsystems present in it. The more numerous such subsystems,\nthe greater its complexity. In a platform ecosystem, these subsystems are the platform and the apps that interoperate with it.\nComplex systems that were complex to begin with can become even more complex over time as they evolve. (A. Tiwana (2013: Ch.5))"),"\n",o.createElement(t.p,null,"Tiwana’s description of ecosystem complexity implies with the status of Jøkul Design System in several aspects. Firstly,\nthe number of components (sub-systems) in a design system specifies the complexity of its core. In the example of Jøkul,\nthe number of these components are surely increasing by time because the core team constantly looks for opportunities to\nprovide reusable components for their client applications. Although the modularization of these components is well-partitioned,\nthe same components have interdependencies as well. For instance, Jøkul’s DatePicker component utilizes jkl-icon-button and\njkl-text-input components of the same core and\n",o.createElement(t.a,{href:"https://static.nrk.no/core-components/latest/index.html?core-datepicker/readme.md"},"Core Datepicker library of NRK")," is used as an external dependency.\nThese components are needed to form the user interface of DatePicker and their functionalities are benefited at the same time."),"\n",o.createElement(t.p,null,o.createElement(t.img,{src:"/assets/blog/jokul-datepicker-architecture.png",alt:""})),"\n",o.createElement(t.p,null,"The outcome in the example of DatePicker is the result of hierarchical modularization approach of design systems.\nSome teams separate granular elements from more complex ones. The levels of granularity vary in number and perceived complexity.\nAtomic design, pioneered by Brad Frost, is a popular example of hierarchical categorization. Atoms are the basic building blocks,\nwhich combine to create more complex standalone elements: molecules. For example, a form label, input and button combine into\na search form. Molecules join together into organisms (such as a site header), and organisms into templates and pages.\n(A. Kholmatova (2017)) So that, jkl-icon-button and jkl-text-input components serve as the atoms of DatePicker molecule."),"\n",o.createElement(t.p,null,"In addition to that, the number of client applications which benefit Jøkul Design System is also on the rise\nbecause different parties of Fremtind AS promotes the use of design system within its organization. This fact also\ncontributes to the growing complexity. Moreover, unlike Jøkul, a highly evolved design system can be used by\nseveral organizations and hundreds of different client applications."),"\n",o.createElement(t.h3,null,"Growing complexity in two different dimensions"),"\n",o.createElement(t.p,null,"All in all, these two main points prove that a design system has growing complexity in two different dimensions.\nOne, via the interdependencies of core components; two, via the number of client applications which use the design system."),"\n",o.createElement(t.p,null,"In any platform, complexity can be of two types: structural complexity and behavioral complexity. An ecosystem can be\nboth structurally complex where interconnections between its parts are difficult to describe and behaviorally complex\nwhere its aggregate behavior is difficult to predict or control. (A. Tiwana (2013: Ch.5)) Architecture handles the structural\ncomplexity meanwhile governance cures behavioral complexity. In this article, we continue to assess the structural complexity of\nJøkul Design System."),"\n",o.createElement(t.h3,null,"So, how one should deal with the complexity of a platform?"),"\n",o.createElement(t.p,null,"The advice of Tiwana and reasoning by straight forward thinking\nsay that complexity should be reduced. It cannot be totally avoided and complexity will always be present, but it\nshould be reduced at an acceptable and manageable level."),"\n",o.createElement(t.p,null,"In the example of Jøkul’s DatePicker, present complexity can be reduced by writing imported components specific to\nDatePicker component. So that, the changes in jkl-icon-button or jkl-text-input would have no impact on DatePicker and hence,\nthe owners of Jøkul could avoid potential regressions. However, this approach would not be practical in several conditions.\nFirst, that would double the work of imported components. Second, it would be more difficult to control them because\ncomponents will behave independently by time. Least to mention, the same approach would result in performance issues as well.\nWriting specific minor components for DatePicker would increase the volume of packages. So that, the client applications\nwould serve larger files to their customers. As a result, freeing Jøkul’s DatePicker from jkl-icon-button and jkl-text-input\ncomponent dependencies would increase the current complexity rather than reducing it.\nThis is the internal dependency side of the complexity."),"\n",o.createElement(t.p,null,"As mentioned earlier, Jøkul’s DatePicker utilizes NRK’s calendar library as well. This is actually one of the ways\nhow Jøkul is connected to an external platform. However, controlling the changes of NRK’s library is not possible for Fremtind AS.\nTherefore, this dependency can create problems for Jøkul in the future. Removing this dependency and re-writing it for\nJøkul can be beneficial and that would surely help them eliminate an external complexity, but core team is not eager to do so\nbecause of the cost of re-writing a calendar library. This decision was discussed within the core team in a design forum meeting\nin September 2020 and the team decided to keep on using NRK’s library."),"\n",o.createElement(t.p,null,"The example of Jøkul’s DatePicker shows that core team accepts existing complexities and discusses these issues internally.\nHowever, freeing all dependencies just for the sake of reduced complexity is not a final solution to all structural problems.\nA design system team’s architecture should evaluate the options and choose suitable path to sustain manageable complexity with\nthe help of architecture."),"\n",o.createElement(t.h3,null,"References"),"\n",o.createElement(t.p,null,"A. Kholmatova (2017), ",o.createElement(t.a,{href:"https://www.amazon.com/Design-Systems-practical-creating-languages/dp/3945749581"},"Design Systems: A practical guide to creating design languages for digital products"),", Smashing Media AG"),"\n",o.createElement(t.p,null,"A. Tiwana (2013: Ch.5), ",o.createElement(t.a,{href:"https://www.uio.no/studier/emner/matnat/ifi/IN5430/v20/pensumliste/readings/tiwana-platform-ecosystems-ch5.pdf"},"Platform Ecosystems: Aligning Architecture, Governance, and Strategy"),", Morgan Kaufmann Publishers"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?o.createElement(t,e,o.createElement(i,e)):i(e)};var s=n(72285),l=n(22756),c=n(95573),m=n(1634);const p=e=>{let{pageContext:t}=e;return o.createElement(l.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:a,children:i}=e;const{frontmatter:r}=n.page,{types:l}=a;return o.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},o.createElement(c.M1,Object.assign({},r,{versions:a.versions})),o.createElement(c.w5,r),i,l&&o.createElement(s.l,{types:l}))};function u(e){return o.createElement(d,e,o.createElement(r,e))}},72285:function(e,t,n){n.d(t,{l:function(){return h}});var a=n(78217),o=n(41994),i=n(87505),r=n(70079),s=n(54656);const l=e=>r.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:o}=t,i=n>0,r=a-n>o;t.classList.toggle("left-shadow",i),t.classList.toggle("right-shadow",r)},d=e=>{const t=e.target,n=t.parentElement;p(t,n)},u=e=>{let{props:t}=e;const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),r.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},r.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},r.createElement(i.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?l(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?l(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?l(e.type.name):""]})))})));var a},h=e=>{let{types:t}=e;return r.createElement("section",{className:"mb-104 jkl-portal-paragraph"},r.createElement("h2",{className:"heading-1 mt-104"},"React API"),r.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),r.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],i=n.props?Object.values(n.props).filter(c):[],l=(e=>{var t,n,a,o,i,r;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(o=e.tags)||void 0===o||null===(i=o.param)||void 0===i?void 0:i.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(r=e.tags)&&void 0!==r&&r.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return r.createElement(o.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l&&r.createElement(s.dn,{className:"jkl-portal-code-block"},l),a.length>0&&r.createElement(u,{props:a}),i.length>0&&r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),r.createElement(u,{props:i})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return l}});var a=n(26372),o=n.n(a),i=n(49597),r=n(70079),s=n(34044);const l=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,r.useContext)(s.R),l="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return r.createElement(i.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||l?0:.35},className:o()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var a=n(53048),o=n(70079);const i=e=>{let{className:t,density:n,id:i,...r}=e;return o.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,a.Z)("jkl-accordion",t),"data-density":n,id:i,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(53484),o=n(1386),i=n(53048),r=n(70079);const s=e=>{let{children:t,title:n,className:s,startExpanded:l=!1,onClick:c,id:m,...p}=e;const{0:d,1:u}=(0,r.useState)(l),{0:h}=(0,r.useState)((()=>l)),{detailsRef:f,summaryRef:y,contentRef:g,onSummaryClick:b}=(0,o.E)({onOpenChange:(e,t)=>{u(e),c&&c(t,e)},isExpanded:h});return r.createElement("details",{"data-testid":"jkl-accordion-item",...p,className:(0,i.Z)("jkl-accordion-item",s),ref:f,id:m},r.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:y},n,r.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),r.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},r.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var a=n(70079),o=n(41699),i=n(65174),r=n(6914),s=n(82546),l=n(39126),c=n(66169),m=n(94509);const p=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:d,rows:u,verticalAlign:h,...f}=e;return a.createElement(o.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(r.R,{srOnly:!0},n),a.createElement(l.s,null,a.createElement(m.S,null,p.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(i.R,null,0===u.length&&d&&a.createElement(m.S,null,a.createElement(s.p,{colSpan:p.length},d)),u.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(s.p,{key:t,"data-th":p[t],verticalAlign:h},e))))))))}));p.displayName="DataTable"}}]);