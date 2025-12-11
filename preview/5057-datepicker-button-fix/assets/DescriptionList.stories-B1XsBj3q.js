import{R as e}from"./index-siqcju79.js";import{c as o}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-DaWZu8wl.js";const c=({children:r,className:n,...i})=>e.createElement("dl",{...i,className:o("jkl-description-list",n)},r),s=({children:r,className:n,...i})=>e.createElement("dt",{...i,className:o("jkl-description-list__term",n)},r),t=({children:r,className:n,...i})=>e.createElement("dd",{...i,className:o("jkl-description-list__detail",n)},r);c.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"DescriptionTerm",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"DescriptionDetail",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const d={title:"Komponenter/DescriptionList",component:c,subcomponents:{DescriptionDetail:t,DescriptionTerm:s},parameters:{layout:"centered"},tags:["autodocs"]},a={name:"DescriptionList",render:()=>e.createElement(c,null,e.createElement(s,null,"Dekning"),e.createElement(t,null,"Kasko"),e.createElement(s,null,"Egenandel"),e.createElement(t,null,"2 000 kr for glass"),e.createElement(t,null,"6 000 kr for øvrige skader"),e.createElement(s,null,"Sjåfør under 23 år"),e.createElement(t,null,"Nei"))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "DescriptionList",
  render: () => <DescriptionList>
            <DescriptionTerm>Dekning</DescriptionTerm>
            <DescriptionDetail>Kasko</DescriptionDetail>

            <DescriptionTerm>Egenandel</DescriptionTerm>
            <DescriptionDetail>2 000 kr for glass</DescriptionDetail>
            <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>

            <DescriptionTerm>Sjåfør under 23 år</DescriptionTerm>
            <DescriptionDetail>Nei</DescriptionDetail>
        </DescriptionList>
}`,...a.parameters?.docs?.source}}};const D=["DescriptionListStory"];export{a as DescriptionListStory,D as __namedExportsOrder,d as default};
