import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";/* empty css               */import{c}from"./clsx-B-dksMZM.js";import{u as v}from"./useDelayedRender-B8sMdCvv.js";import{f as m,d as n,b as x,c as y,S as T,a as w,e as q}from"./SkeletonTable-CjvOIr1d.js";import"./_commonjsHelpers-BosuxZz1.js";const f=({className:o,delay:t=0,density:s,textDescription:a="Vennligst vent",...l})=>{const i=v(t);return t&&!i?null:e.jsx("div",{className:c("jkl-skeleton-animation",o),"aria-busy":"true","aria-label":a,...l,"data-density":s})};f.__docgenInfo={description:"",methods:[],displayName:"SkeletonAnimation",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},textDescription:{required:!1,tsType:{name:"string"},description:'@default "Vennligst vent"',defaultValue:{value:'"Vennligst vent"',computed:!1}},role:{required:!1,tsType:{name:"AriaRole"},description:""},delay:{required:!1,tsType:{name:"number"},description:`Antall millisekunder komponenten vil vente før den rendrer
@default 0`,defaultValue:{value:"0",computed:!1}}},composes:["Pick"]};const S=({className:o,checkboxes:t,density:s,labelProps:a,inputProps:l,...i})=>{const r=s==="compact";return e.jsxs("div",{className:c("jkl-skeleton-input",o),...i,children:[e.jsx(m,{density:s,...a}),Array.from(Array(t)).map((g,p)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(n,{width:r?22:24,height:r?22:24}),e.jsx(n,{width:r?201:216,height:r?22:24,...l})]},`jkl-skeleton-checkbox-${p}`))]})};S.__docgenInfo={description:"",methods:[],displayName:"SkeletonCheckboxGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"number"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const b=({className:o,radioButtons:t,density:s,labelProps:a,inputProps:l,...i})=>{const r=s==="compact";return e.jsxs("div",{className:c("jkl-skeleton-input",o),...i,children:[e.jsx(m,{density:s,...a}),Array.from(Array(t)).map((g,p)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(n,{width:r?22:24,height:r?22:24,style:{borderRadius:"50%"}}),e.jsx(n,{width:r?201:216,height:r?22:24,...l})]},`jkl-skeleton-checkbox-${p}`))]})};b.__docgenInfo={description:"",methods:[],displayName:"SkeletonRadioButtonGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},radioButtons:{required:!0,tsType:{name:"number"},description:""}}};const j=({className:o,density:t,labelProps:s,inputProps:a,...l})=>{const i=t==="compact";return e.jsxs("div",{className:c("jkl-skeleton-input",o),...l,"data-density":t,children:[e.jsx(m,{density:t,...s}),e.jsx(n,{width:i?301:316,height:i?148:168,...a})]})};j.__docgenInfo={description:"",methods:[],displayName:"SkeletonTextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}}};const G={title:"Komponenter/Loader/SkeletonTable",component:x,subcomponents:{SkeletonElement:n,SkeletonTableHeader:y},argTypes:{width:{control:"number"}},tags:["autodocs"]},d={name:"Skeleton",args:{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(n,{width:350,height:32}),e.jsx(T,{}),e.jsx(j,{}),e.jsx(S,{checkboxes:3}),e.jsx(b,{radioButtons:3}),e.jsx(w,{width:225}),e.jsxs(x,{children:[e.jsxs(y,{children:[e.jsx("div",{style:{width:215},children:e.jsx(n,{width:115,height:16})}),e.jsx("div",{style:{width:115},children:e.jsx(n,{width:115,height:16})})]}),Array.from(Array(5)).map((o,t)=>e.jsxs(q,{children:[e.jsx("div",{style:{width:215},children:e.jsx(n,{width:t%2?115:185,height:19})}),e.jsx("div",{style:{width:115},children:e.jsx(n,{width:24,height:24,shape:"circle"})})]},t))]})]})},render:o=>e.jsx(f,{...o,role:"none presentation"})};var u,h,k;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Skeleton",
  args: {
    children: <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 40
    }}>
                <SkeletonElement width={350} height={32} />
                <SkeletonInput />
                <SkeletonTextArea />
                <SkeletonCheckboxGroup checkboxes={3} />
                <SkeletonRadioButtonGroup radioButtons={3} />
                <SkeletonButton width={225} />
                <SkeletonTable>
                    <SkeletonTableHeader>
                        <div style={{
            width: 215
          }}>
                            <SkeletonElement width={115} height={16} />
                        </div>
                        <div style={{
            width: 115
          }}>
                            <SkeletonElement width={115} height={16} />
                        </div>
                    </SkeletonTableHeader>
                    {Array.from(Array(5)).map((_, index) => <SkeletonTableRow key={index}>
                            <div style={{
            width: 215
          }}>
                                <SkeletonElement width={index % 2 ? 115 : 185} height={19} />
                            </div>
                            <div style={{
            width: 115
          }}>
                                <SkeletonElement width={24} height={24} shape="circle" />
                            </div>
                        </SkeletonTableRow>)}
                </SkeletonTable>
            </div>
  },
  render: args =>
  // biome-ignore lint/a11y/useValidAriaRole: // Kun for eksempelet, ellers blir det mange alerts på siden
  <SkeletonAnimation {...args} role="none presentation" />
}`,...(k=(h=d.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const I=["SkeletonStory"];export{d as SkeletonStory,I as __namedExportsOrder,G as default};
