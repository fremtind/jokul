import{j as e}from"./iframe-CkUZajGp.js";/* empty css               */import{c as o}from"./clsx-B-dksMZM.js";import{u as S}from"./useDelayedRender-SQiFEMjL.js";import"./preload-helper-PPVm8Dsz.js";const h=({className:n,delay:t=0,textDescription:r="Vennligst vent",...i})=>{const l=S(t);return t&&!l?null:e.jsx("div",{className:o("jkl-skeleton-animation",n),"aria-busy":"true","aria-label":r,...i})};h.__docgenInfo={description:"",methods:[],displayName:"SkeletonAnimation",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},textDescription:{required:!1,tsType:{name:"string"},description:'@default "Vennligst vent"',defaultValue:{value:'"Vennligst vent"',computed:!1}},role:{required:!1,tsType:{name:"AriaRole"},description:""},delay:{required:!1,tsType:{name:"number"},description:`Antall millisekunder komponenten vil vente før den rendrer
@default 0`,defaultValue:{value:"0",computed:!1}}},composes:["Pick"]};const s=({shape:n="rect",width:t,height:r,style:i,className:l,...p})=>e.jsx("div",{className:o("jkl-skeleton-element",`jkl-skeleton-element--${n}`,l),style:{width:t,height:r,...i},...p});s.__docgenInfo={description:"",methods:[],displayName:"SkeletonElement",props:{className:{required:!1,tsType:{name:"string"},description:""},shape:{required:!1,tsType:{name:"union",raw:'"rect" | "circle"',elements:[{name:"literal",value:'"rect"'},{name:"literal",value:'"circle"'}]},description:"",defaultValue:{value:'"rect"',computed:!1}},width:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},height:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}},composes:["Pick"]};const k=({style:n,...t})=>e.jsx(s,{...t,height:"var(--jkl-unit-40)",style:{borderRadius:"999px",...n}});k.__docgenInfo={description:"",methods:[],displayName:"SkeletonButton",composes:["Omit"]};const a=({...n})=>e.jsx(s,{...n,width:"var(--jkl-unit-130)",height:"var(--jkl-unit-20)"});a.__docgenInfo={description:"",methods:[],displayName:"SkeletonLabel",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const j=({className:n,checkboxes:t,labelProps:r,inputProps:i,...l})=>e.jsxs("div",{className:o("jkl-skeleton-input",n),...l,children:[e.jsx(a,{...r}),Array.from(Array(t)).map((p,c)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(s,{width:"var(--jkl-unit-30)",height:"var(--jkl-unit-30)"}),e.jsx(s,{width:"var(--jkl-unit-210)",height:"var(--jkl-unit-30)",...i})]},`jkl-skeleton-checkbox-${c}`))]});j.__docgenInfo={description:"",methods:[],displayName:"SkeletonCheckboxGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"number"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const y=({className:n,labelProps:t,inputProps:r,...i})=>e.jsxs("div",{className:o("jkl-skeleton-input",n),...i,children:[e.jsx(a,{...t}),e.jsx(s,{width:"var(--jkl-unit-210)",height:"var(--jkl-unit-40)",...r})]});y.__docgenInfo={description:"",methods:[],displayName:"SkeletonInput",props:{className:{required:!1,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const x=({className:n,radioButtons:t,labelProps:r,inputProps:i,...l})=>e.jsxs("div",{className:o("jkl-skeleton-input",n),...l,children:[e.jsx(a,{...r}),Array.from(Array(t)).map((p,c)=>e.jsxs("div",{className:"jkl-skeleton-input__checkbox",children:[e.jsx(s,{width:"var(--jkl-unit-30)",height:"var(--jkl-unit-30)",style:{borderRadius:"50%"}}),e.jsx(s,{width:"var(--jkl-unit-210)",height:"var(--jkl-unit-30)",...i})]},`jkl-skeleton-checkbox-${c}`))]});x.__docgenInfo={description:"",methods:[],displayName:"SkeletonRadioButtonGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},radioButtons:{required:!0,tsType:{name:"number"},description:""}}};const m=({className:n,width:t,style:r,...i})=>e.jsx("div",{className:o("jkl-skeleton-table",n),style:{width:t,...r},...i}),u=({className:n,...t})=>e.jsx("div",{className:o("jkl-skeleton-table__header",n),...t}),g=({className:n,...t})=>e.jsx("div",{className:o("jkl-skeleton-table__row",n),...t});m.__docgenInfo={description:"",methods:[],displayName:"SkeletonTable",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}},composes:["Pick"]};u.__docgenInfo={description:"",methods:[],displayName:"SkeletonTableHeader",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"SkeletonTableRow",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const f=({className:n,labelProps:t,inputProps:r,...i})=>e.jsxs("div",{className:o("jkl-skeleton-input",n),...i,children:[e.jsx(a,{...t}),e.jsx(s,{width:"calc(var(--jkl-unit-210) * 1.88)",height:"var(--jkl-unit-210)",...r})]});f.__docgenInfo={description:"",methods:[],displayName:"SkeletonTextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const _={title:"Komponenter/Loader/SkeletonTable",component:m,subcomponents:{SkeletonElement:s,SkeletonTableHeader:u},argTypes:{width:{control:"number"}}},d={name:"Skeleton",args:{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(s,{width:350,height:32}),e.jsx(y,{}),e.jsx(f,{}),e.jsx(j,{checkboxes:3}),e.jsx(x,{radioButtons:3}),e.jsx(k,{width:225}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsx("div",{style:{width:215},children:e.jsx(s,{width:115,height:16})}),e.jsx("div",{style:{width:115},children:e.jsx(s,{width:115,height:16})})]}),Array.from(Array(5)).map((n,t)=>e.jsxs(g,{children:[e.jsx("div",{style:{width:215},children:e.jsx(s,{width:t%2?115:185,height:19})}),e.jsx("div",{style:{width:115},children:e.jsx(s,{width:24,height:24,shape:"circle"})})]},t))]})]})},render:n=>e.jsx(h,{...n,role:"none presentation"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const q=["SkeletonStory"];export{d as SkeletonStory,q as __namedExportsOrder,_ as default};
