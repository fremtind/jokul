"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5349],{95666:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return m},Head:function(){return u},default:function(){return d}});var a=n(47160),l=n(70079);function o(e){const t=Object.assign({p:"p",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",img:"img",a:"a"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Let's create a comprehensive project and deliver all the secrets of Google Maps + TypeScript + React? This is the first blog of Google Maps tutorial series with a course video.")),"\n",l.createElement(t.p,null,"Coding with Google Maps is a fun, mysterious and challenging journey. If you do it with Typescript, both joy and pain get doubled."),"\n",l.createElement(t.p,null,"When I was coding a Google Maps component for the first time, I was starving for a comprehensive tutorial on this topic.\nUnfortunately, the results were a bit disappointing, but like all developers I found a solution for each problem and the job was done."),"\n",l.createElement(t.p,null,"On the other hand, a design system is not a single deliverable, but a collection of different services to create other applications.\nHowever, this definition should not limit us with reusable components only. Jøkul's blog posts are also a part of the design system's deliverables.\nOur team assessed the possibility of having a reusable Google Maps component among Jøkul's packages. After gaining enough experience and knowledge,\nwe decided not to take this path because Google Maps itself is a very large library and answering the demands of different parties did not seem feasible.\nAs a result of these, our team decided to support the users of Jøkul Design System with a comprehensive blog post series which will assist the consumers\nwith technical knowledge and best practices while developing their own Google Maps component."),"\n",l.createElement(t.p,null,"So, while I was working on my map component, I discovered the answers to my questions via different websites. For example:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"How can I use TypeScript types from Google for my map project in React?"),"\n",l.createElement(t.li,null,"How should I load my Google Maps API script into my homepage? What could be the best practice?"),"\n",l.createElement(t.li,null,"Where should I use ",l.createElement(t.code,null,"useRef")," to point out my Google Maps DOM element?"),"\n"),"\n",l.createElement(t.p,null,"Some of the answers that I found were outdated, some people were not quite sure of what they were advising, etc… You know the drill."),"\n",l.createElement(t.p,null,"As a result, I created a sample project on GitHub and decided to sail for a new adventure as well. For the first time, I screencast while coding. The video is 55 minutes long and you can see the whole process."),"\n",l.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fMsAPI7de0A",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",l.createElement(t.h3,null,"Setup and Installation"),"\n",l.createElement(t.p,null,"To kick off the project, we need to create a react application with typescript flag. Use the sample command below to start with:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-npm"},"npx create-react-app google-maps --template typescript\n")),"\n",l.createElement(t.p,null,"After removing files like ",l.createElement(t.code,null,"logo.svg")," and ",l.createElement(t.code,null,"App.test.tsx"),", run the command below to install Google Maps TypeScript types. This will help you access types from the ",l.createElement(t.code,null,"google.maps")," namespace such as ",l.createElement(t.code,null,"google.maps.Map"),", ",l.createElement(t.code,null,"google.maps.LatLng"),", and so on."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-npm"},"npm install --save-dev @types/googlemaps\n")),"\n",l.createElement(t.p,null,"Bonus Hint: By doing so, you will also obtain ",l.createElement(t.code,null,"google.maps.places.AutocompletePrediction")," type which can be used to build an address dropdown component."),"\n",l.createElement(t.p,null,"Now we are ready to give a shape to our React project. I set up the file and folder structure of my src folder as blueprinted below:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-Folder"},"├── App.css\n├── App.tsx\n├── Map\n   ├── Map.scss\n   ├── Map.tsx\n   └── index.ts\n├── index.css\n├── index.tsx\n├── react-app-env.d.ts\n└── utils\n   └── GoogleMapsUtils.ts\n")),"\n",l.createElement(t.h3,null,"Loading the Google Maps library"),"\n",l.createElement(t.p,null,"While developing a Google Maps component, we need to load the script tag which will download the API library for us. At the end, our web page should show something like this:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<script\nsrc="https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>&libraries=places&language=no&region=NO&v=quarterly"\nasync defer>\n<\/script>\n')),"\n",l.createElement(t.p,null,"Before loading this tag into our DOM structure, we cannot run Google Maps related code pieces. Therefore, we should create a utility function under ",l.createElement(t.code,null,"utils/GoogleMapsUtils.ts"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"export const loadMapApi = () => {\n    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,places&language=no&region=NO&v=quarterly`;\n    const scripts = document.getElementsByTagName('script');\n    // Go through existing script tags, and return google maps api tag when found.\n    for (let i = 0; i < scripts.length; i++) {\n        if (scripts[i].src.indexOf(mapsURL) === 0) {\n            return scripts[i];\n        }\n    }\n\n    const googleMapScript = document.createElement('script');\n    googleMapScript.src = mapsURL;\n    googleMapScript.async = true;\n    googleMapScript.defer = true;\n    window.document.body.appendChild(googleMapScript);\n\n    return googleMapScript;\n};\n")),"\n",l.createElement(t.p,null,"This function creates the aforementioned script tag and inserts it into the DOM if it is not found. ",l.createElement(t.code,null,"loadMapApi()")," will be used by the page which uses our Map component. In my example, this page will be the homepage of the project (",l.createElement(t.code,null,"App.tsx"),")."),"\n",l.createElement(t.h3,null,"Making the app ready for maps"),"\n",l.createElement(t.p,null,"In this application, we have two fundamental tasks for ",l.createElement(t.code,null,"App.tsx"),". The first is to load the map utility, and the second is to render our Map component. To do the first, I created the React hook below:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"const [scriptLoaded, setScriptLoaded] = useState(false);\n")),"\n",l.createElement(t.p,null,"This hook makes sure that Google Maps script tag is loaded successfully into the page. When scriptLoaded hook is set true we render the Map component."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"useEffect(() => {\n    const googleMapScript = loadMapApi();\n    googleMapScript.addEventListener('load', function () {\n        setScriptLoaded(true);\n    });\n}, []);\n")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},'return (\n    <div className="App">\n        {scriptLoaded && (\n            <Map\n              mapType={google.maps.MapTypeId.ROADMAP}\n              mapTypeControl={true}\n            />\n        )}\n    </div>\n);\n')),"\n",l.createElement(t.h3,null,"Time to render the map"),"\n",l.createElement(t.p,null,"We finally reached to the heart of the application. ",l.createElement(t.code,null,"Map.tsx")," is the component I mentioned earlier. Let’s create its interface (",l.createElement(t.code,null,"IMap"),") first."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"interface IMap {\n    mapType: google.maps.MapTypeId;\n    mapTypeControl?: boolean;\n}\n")),"\n",l.createElement(t.p,null,"I wanted to receive two basic props. mapType can have ROADMAP, SATELLITE, TERRAIN or HYBRID values. These are specific map types defined by Google."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/google.maps.MapTypeId.ROADMAP.png",alt:"Roadmap Example"})),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/google.maps.MapTypeId.SATELLITE.png",alt:"Satellite Example"})),"\n",l.createElement(t.p,null,"And we will use mapTypeControl prop to show/hide the control menu on the left-top corner of your map. We may extend the number of props to increase the usability of our map component, but I wanted to use only two props to illustrate my example."),"\n",l.createElement("p",null,"I also use typescript’s custom type definition feature to increase the readability of my source code."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"type GoogleLatLng = google.maps.LatLng;\ntype GoogleMap = google.maps.Map;\n")),"\n",l.createElement(t.p,null,"Before I explain the ",l.createElement(t.code,null,"initMap"),", ",l.createElement(t.code,null,"defaultMapStart"),", and ",l.createElement(t.code,null,"startMap")," functions, I would like to show you the render part of the Map component."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},'const ref = useRef<HTMLDivElement>(null);\n\nreturn (\n    <div className="map-container">\n        <div ref={ref} className="map-container__map"></div>\n    </div>\n);\n')),"\n",l.createElement(t.p,null,"The inner div element is the reference point for Google Maps. The API will load my map content into this div element and I use the outer div just for styling purposes. On the other hand, the same ref value is used by ",l.createElement(t.code,null,"initMap")," function where the map is triggered."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"const initMap = (zoomLevel: number, address: GoogleLatLng): void => {\n    if (ref.current) {\n        setMap(\n            new google.maps.Map(ref.current, {\n                zoom: zoomLevel,\n                center: address,\n                mapTypeControl: mapTypeControl,\n                streetViewControl: false,\n                rotateControl: false,\n                scaleControl: true,\n                fullscreenControl: false,\n                panControl: false,\n                zoomControl: true,\n                gestureHandling: 'cooperative',\n                mapTypeId: mapType,\n                draggableCursor: 'pointer',\n            })\n        );\n    }\n};\n")),"\n",l.createElement(t.p,null,"As you see above, before implementing the initMap function, I created a hook called ",l.createElement(t.code,null,"map"),". This hook is used to keep the map object created by google.maps.Map(…) function. The same function takes our div element via ref.current as its first parameter and the second parameter is a json object which keeps the preferences of our map."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"initMap")," receives two inputs: ",l.createElement(t.code,null,"zoomLevel")," and ",l.createElement(t.code,null,"address"),". zoomLevel is straightforward to understand, but what address does will be more clear when we take a look at ",l.createElement(t.code,null,"defaultMapStart()")," function."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"const defaultMapStart = (): void => {\n    const defaultAddress = new google.maps.LatLng(65.166013499, 13.3698147);\n    initMap(4, defaultAddress);\n};\n")),"\n",l.createElement(t.p,null,"So, this function basically calls the ",l.createElement(t.code,null,"initMap"),", but it also does some critical work as well. It decides where to focus and how much to focus when our map starts."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-typescript"},"const startMap = (): void => {\n    if (!map) {\n        defaultMapStart();\n    }\n};\nuseEffect(startMap, [map]);\n")),"\n",l.createElement(t.p,null,"Finally, ",l.createElement(t.code,null,"startMap")," function calls ",l.createElement(t.code,null,"defaultMapStart()")," when the map hook is not null anymore. This check is necessary because of rendering delays and typescript will complain if you do not run this check."),"\n",l.createElement(t.h3,null,"Conclusion"),"\n",l.createElement(t.p,null,"This application may not seem so impressive in terms of functionality, but you see that we had to do a lot of things just to start our map. While shooting the video, I had a problem with the API key because I did not want to screencast it via my youtube video, but when I include it, the output is as shown below:"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/google.maps.MapTypeId.ROADMAP.png",alt:"Roadmap Example"})),"\n",l.createElement(t.p,null,"See you on the next tutorial/video where I will show how to add/remove markers on Google Maps. I hope you enjoyed this tutorial 🙂"),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"(This article was previously published on ",l.createElement(t.a,{href:"https://storksnestblog.wordpress.com/2020/08/16/setting-up-google-maps-with-react-typescript/"},"Stork's Nest"),")"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var s=n(72285),c=n(22756),i=n(95573),p=n(1634);const u=e=>{let{pageContext:t}=e;return l.createElement(c.p,{title:t.title})},m=e=>{let{location:t,data:n,pageContext:a,children:o}=e;const{frontmatter:r}=n.page,{types:c}=a;return l.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(i.M1,Object.assign({},r,{versions:a.versions})),l.createElement(i.w5,r),o,c&&l.createElement(s.l,{types:c}))};function d(e){return l.createElement(m,e,l.createElement(r,e))}},72285:function(e,t,n){n.d(t,{l:function(){return h}});var a=n(78217),l=n(76802),o=n(87505),r=n(70079),s=n(54656);const c=e=>r.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},p=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,o=n>0,r=a-n>l;t.classList.toggle("left-shadow",o),t.classList.toggle("right-shadow",r)},m=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),r.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},r.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},r.createElement(o.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},h=e=>{let{types:t}=e;return r.createElement("section",{className:"mb-104 jkl-portal-paragraph"},r.createElement("h2",{className:"heading-1 mt-104"},"React API"),r.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),r.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(p):[],o=n.props?Object.values(n.props).filter(i):[],c=(e=>{var t,n,a,l,o,r;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(o=l.param)||void 0===o?void 0:o.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(r=e.tags)&&void 0!==r&&r.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return r.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&r.createElement(s.dn,{className:"jkl-portal-code-block"},c),a.length>0&&r.createElement(d,{props:a}),o.length>0&&r.createElement(r.Fragment,null,r.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),r.createElement(d,{props:o})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(26372),l=n.n(a),o=n(49597),r=n(70079),s=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,r.useContext)(s.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return r.createElement(o.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return r}});var a=n(26372),l=n.n(a),o=n(70079);const r=e=>{let{className:t,density:n,...a}=e;return o.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...a})}},76802:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(53484),l=n(26372),o=n.n(l),r=n(70079);const s=e=>{let{onOpenChange:t,startExpanded:n}=e;const a=(0,r.useRef)(null),l=(0,r.useRef)(null),o=(0,r.useRef)(null),s=(0,r.useRef)(null),{0:c,1:i}=(0,r.useState)(!1),{0:p,1:u}=(0,r.useState)(!1);(0,r.useEffect)((()=>{a.current&&(a.current.open=n)}),[]);const m=e=>{a.current&&l.current&&(a.current.open=e,s.current=null,i(!1),u(!1),a.current.style.overflow="",a.current.style.height="")};return{detailsRef:a,summaryRef:l,contentRef:o,onSummaryClick:e=>{e.preventDefault(),a.current&&l.current&&(a.current.style.overflow="hidden",c||!a.current.open?(e=>{a.current&&l.current&&(a.current.style.height="".concat(a.current.offsetHeight,"px"),a.current.open=!0,requestAnimationFrame((()=>{if(a.current&&l.current&&o.current){u(!0),t(!0,e);const n=a.current.offsetHeight,r=l.current.offsetHeight+o.current.offsetHeight;s.current&&s.current.cancel(),a.current.animate&&(s.current=a.current.animate({height:["".concat(n,"px"),"".concat(r,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>m(!0),s.current.oncancel=()=>u(!1))}})))})(e):(p||a.current.open)&&(e=>{if(a.current&&l.current){i(!0),t(!1,e);const n=a.current.offsetHeight,o=l.current.offsetHeight;s.current&&s.current.cancel(),a.current.animate&&(s.current=a.current.animate({height:["".concat(n,"px"),"".concat(o,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>m(!1),s.current.oncancel=()=>i(!1))}})(e))}}},c=e=>{let{children:t,title:n,className:l,startExpanded:c=!1,onClick:i,...p}=e;const{0:u,1:m}=(0,r.useState)(c),{detailsRef:d,summaryRef:h,contentRef:g,onSummaryClick:f}=s({onOpenChange:(e,t)=>{m(e),i&&i(t,e)},startExpanded:c});return r.createElement("details",{"data-testid":"jkl-accordion-item",...p,className:o()("jkl-accordion-item",l),ref:d},r.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:h},n,r.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),r.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},r.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var a=n(70079),l=n(41699),o=n(65174),r=n(6914),s=n(82546),c=n(39126),i=n(66169),p=n(94509);const u=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:m,rows:d,verticalAlign:h,...g}=e;return a.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&a.createElement(r.R,{srOnly:!0},n),a.createElement(c.s,null,a.createElement(p.S,null,u.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(o.R,null,0===d.length&&m&&a.createElement(p.S,null,a.createElement(s.p,{colSpan:u.length},m)),d.map(((e,t)=>a.createElement(p.S,{key:t},e.map(((e,t)=>a.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:h},e))))))))}));u.displayName="DataTable"}}]);