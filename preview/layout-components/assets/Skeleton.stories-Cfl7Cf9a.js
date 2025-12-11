import{j as e}from"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";/* empty css               */import{c as d}from"./clsx-B-dksMZM.js";import{u as w}from"./useDelayedRender-B8sMdCvv.js";import{b as s,S as f,a as y,c as q}from"./SkeletonTable-0-3wqZIS.js";import"./_commonjsHelpers-BosuxZz1.js";const x=({className:n,delay:t=0,density:o,textDescription:a="Vennligst vent",...i})=>{const r=w(t);return t&&!r?null:e.jsx("div",{className:d("jkl-skeleton-animation",n),"aria-busy":"true","aria-label":a,...i,"data-density":o})};x.__docgenInfo={description:"",methods:[],displayName:"SkeletonAnimation",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},textDescription:{required:!1,tsType:{name:"string"},description:'@default "Vennligst vent"',defaultValue:{value:'"Vennligst vent"',computed:!1}},role:{required:!1,tsType:{name:"AriaRole"},description:""},delay:{required:!1,tsType:{name:"number"},description:`Antall millisekunder komponenten vil vente før den rendrer
@default 0`,defaultValue:{value:"0",computed:!1}}},composes:["Pick"]};const b=({style:n,density:t,...o})=>e.jsx(s,{...o,height:t==="compact"?24:40,style:{borderRadius:"999px",...n}});b.__docgenInfo={description:"",methods:[],displayName:"SkeletonButton",props:{density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}},composes:["Omit"]};const c=({density:n,...t})=>{const o=n==="compact";return e.jsx(s,{...t,width:o?100:115,height:o?12:16})};c.__docgenInfo={description:"",methods:[],displayName:"SkeletonLabel",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}},composes:["Omit"]};const S=({className:n,checkboxes:t,density:o,labelProps:a,inputProps:i,...r})=>{const l=o==="compact";return e.jsxs("div",{className:d("jkl-skeleton-input",n),...r,children:[e.jsx(c,{density:o,...a}),Array.from(Array(t)).map((T,m)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(s,{width:l?22:24,height:l?22:24}),e.jsx(s,{width:l?201:216,height:l?22:24,...i})]},`jkl-skeleton-checkbox-${m}`))]})};S.__docgenInfo={description:"",methods:[],displayName:"SkeletonCheckboxGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"number"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const j=({className:n,density:t,labelProps:o,inputProps:a,...i})=>{const r=t==="compact";return e.jsxs("div",{className:d("jkl-skeleton-input",n),...i,children:[e.jsx(c,{density:t,...o}),e.jsx(s,{width:r?301:316,height:r?32:48,...a})]})};j.__docgenInfo={description:"",methods:[],displayName:"SkeletonInput",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const g=({className:n,radioButtons:t,density:o,labelProps:a,inputProps:i,...r})=>{const l=o==="compact";return e.jsxs("div",{className:d("jkl-skeleton-input",n),...r,children:[e.jsx(c,{density:o,...a}),Array.from(Array(t)).map((T,m)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(s,{width:l?22:24,height:l?22:24,style:{borderRadius:"50%"}}),e.jsx(s,{width:l?201:216,height:l?22:24,...i})]},`jkl-skeleton-checkbox-${m}`))]})};g.__docgenInfo={description:"",methods:[],displayName:"SkeletonRadioButtonGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},radioButtons:{required:!0,tsType:{name:"number"},description:""}}};const v=({className:n,density:t,labelProps:o,inputProps:a,...i})=>{const r=t==="compact";return e.jsxs("div",{className:d("jkl-skeleton-input",n),...i,"data-density":t,children:[e.jsx(c,{density:t,...o}),e.jsx(s,{width:r?301:316,height:r?148:168,...a})]})};v.__docgenInfo={description:"",methods:[],displayName:"SkeletonTextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}}};const B={title:"Komponenter/Loader/SkeletonTable",component:f,subcomponents:{SkeletonElement:s,SkeletonTableHeader:y},argTypes:{width:{control:"number"}},tags:["autodocs"]},p={name:"Skeleton",args:{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{width:350,height:32}),e.jsx(j,{}),e.jsx(v,{}),e.jsx(S,{checkboxes:3}),e.jsx(g,{radioButtons:3}),e.jsx(b,{width:225}),e.jsxs(f,{children:[e.jsxs(y,{children:[e.jsx("div",{style:{width:215},children:e.jsx(s,{width:115,height:16})}),e.jsx("div",{style:{width:115},children:e.jsx(s,{width:115,height:16})})]}),Array.from(Array(5)).map((n,t)=>e.jsxs(q,{children:[e.jsx("div",{style:{width:215},children:e.jsx(s,{width:t%2?115:185,height:19})}),e.jsx("div",{style:{width:115},children:e.jsx(s,{width:24,height:24,shape:"circle"})})]},t))]})]})},render:n=>e.jsx(x,{...n,role:"none presentation"})};var u,h,k;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(h=p.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const L=["SkeletonStory"];export{p as SkeletonStory,L as __namedExportsOrder,B as default};
