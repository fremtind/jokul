import{c as u}from"./clsx-B-dksMZM.js";import{R as e}from"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";const l=({className:a,children:n,density:s,...o})=>{const t=e.Children.count(n);return e.createElement("nav",{"aria-label":"Sti",className:u("jkl-breadcrumb",a),"data-layout-density":s,...o},e.createElement("ol",{className:"jkl-breadcrumb__list"},e.Children.map(n,(d,p)=>{const i=p+1===t;return e.createElement(e.Fragment,null,e.isValidElement(d)?e.cloneElement(d,{isLastElement:i}):d,!i&&e.createElement("span",{className:"jkl-breadcrumb__item-separator","aria-hidden":"true"},"›"))})))};l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}}};const r=({className:a,children:n,isLastElement:s,...o})=>e.createElement("li",{className:u("jkl-breadcrumb__item",a),...o},e.Children.map(n,t=>e.isValidElement(t)?e.cloneElement(t,{"aria-current":s?"page":void 0,className:"jkl-link"}):t));r.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},isLastElement:{required:!1,tsType:{name:"boolean"},description:`Settes automatisk av Breadcrumb
@default false`}}};const y={title:"Komponenter/Breadcrumb",component:l,subcomponents:{BreadcrumbItem:r},parameters:{layout:"centered"},tags:["autodocs","links"]},m={name:"Breadcrumb",tags:["visual"],args:{children:[e.createElement(r,{key:0},e.createElement("a",{href:"#top"},"Hjem")),e.createElement(r,{key:1},e.createElement("a",{href:"#top"},"Komponenter")),e.createElement(r,{key:2},e.createElement("a",{href:"#top","aria-current":"page"},"Breadcrumb"))]}},c={name:"Breadcrumb Item",args:{children:e.createElement("a",{href:"#top","aria-current":"page"},"Breadcrumb")},render:a=>e.createElement(l,null,e.createElement(r,{...a}))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Breadcrumb",
  tags: ["visual"],
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
}`,...c.parameters?.docs?.source}}};const g=["Story","BreadCrumbItems"];export{c as BreadCrumbItems,m as Story,g as __namedExportsOrder,y as default};
