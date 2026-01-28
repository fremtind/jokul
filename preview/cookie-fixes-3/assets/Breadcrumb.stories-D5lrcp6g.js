import{R as r,j as e}from"./iframe-Da6npOLB.js";import{c as p}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";const l=({className:n,children:s,density:d,...o})=>{const t=r.Children.count(s);return e.jsx("nav",{"aria-label":"Sti",className:p("jkl-breadcrumb",n),"data-layout-density":d,...o,children:e.jsx("ol",{className:"jkl-breadcrumb__list",children:r.Children.map(s,(i,b)=>{const u=b+1===t;return e.jsxs(e.Fragment,{children:[r.isValidElement(i)?r.cloneElement(i,{isLastElement:u}):i,!u&&e.jsx("span",{className:"jkl-breadcrumb__item-separator","aria-hidden":"true",children:"›"})]})})})})};l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}}};const a=({className:n,children:s,isLastElement:d,...o})=>e.jsx("li",{className:p("jkl-breadcrumb__item",n),...o,children:r.Children.map(s,t=>r.isValidElement(t)?r.cloneElement(t,{"aria-current":d?"page":void 0,className:"jkl-link"}):t)});a.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},isLastElement:{required:!1,tsType:{name:"boolean"},description:`Settes automatisk av Breadcrumb
@default false`}}};const j={title:"Komponenter/Breadcrumb",component:l,subcomponents:{BreadcrumbItem:a}},m={args:{children:[e.jsx(a,{children:e.jsx("a",{href:"#top",children:"Hjem"})},0),e.jsx(a,{children:e.jsx("a",{href:"#top",children:"Komponenter"})},1),e.jsx(a,{children:e.jsx("a",{href:"#top","aria-current":"page",children:"Breadcrumb"})},2)]}},c={name:"Breadcrumb Item",args:{children:e.jsx("a",{href:"#top","aria-current":"page",children:"Breadcrumb"})},render:n=>e.jsx(l,{children:e.jsx(a,{...n})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<BreadcrumbItem key={0}>
                <a href="#top">Hjem</a>
            </BreadcrumbItem>, <BreadcrumbItem key={1}>
                <a href="#top">Komponenter</a>
            </BreadcrumbItem>, <BreadcrumbItem key={2}>
                <a href="#top" aria-current="page">
                    Breadcrumb
                </a>
            </BreadcrumbItem>]
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Breadcrumb Item",
  args: {
    children: <a href="#top" aria-current="page">
                Breadcrumb
            </a>
  },
  render: args => <Breadcrumb>
            <BreadcrumbItem {...args} />
        </Breadcrumb>
}`,...c.parameters?.docs?.source}}};const x=["_Breadcrumb","BreadCrumbItems"];export{c as BreadCrumbItems,m as _Breadcrumb,x as __namedExportsOrder,j as default};
