import{j as e}from"./jsx-runtime-BbjHj44Y.js";import{c as a}from"./clsx-B-dksMZM.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";const c=({children:i,className:s,...t})=>e.jsx("dl",{...t,className:a("jkl-description-list",s),children:i}),n=({children:i,className:s,...t})=>e.jsx("dt",{...t,className:a("jkl-description-list__term",s),children:i}),r=({children:i,className:s,...t})=>e.jsx("dd",{...t,className:a("jkl-description-list__detail",s),children:i});c.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"DescriptionTerm",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"DescriptionDetail",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Komponenter/DescriptionList",component:c,subcomponents:{DescriptionDetail:r,DescriptionTerm:n},parameters:{layout:"centered"},tags:["autodocs"]},o={name:"DescriptionList",render:()=>e.jsxs(c,{children:[e.jsx(n,{children:"Dekning"}),e.jsx(r,{children:"Kasko"}),e.jsx(n,{children:"Egenandel"}),e.jsx(r,{children:"2 000 kr for glass"}),e.jsx(r,{children:"6 000 kr for øvrige skader"}),e.jsx(n,{children:"Sjåfør under 23 år"}),e.jsx(r,{children:"Nei"})]})};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const g=["DescriptionListStory"];export{o as DescriptionListStory,g as __namedExportsOrder,j as default};
