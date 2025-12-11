import{R as e}from"./index-siqcju79.js";/* empty css               */import{c}from"./clsx-B-dksMZM.js";import{u as v}from"./useDelayedRender-CQprwS1c.js";import{b as r,a as u,S as h,c as T}from"./SkeletonTable-DnwXskhj.js";import"./_commonjsHelpers-DaWZu8wl.js";const k=({className:n,delay:t=0,density:a,textDescription:o="Vennligst vent",...i})=>{const l=v(t);return t&&!l?null:e.createElement("div",{className:c("jkl-skeleton-animation",n),"aria-busy":"true","aria-label":o,...i,"data-density":a})};k.__docgenInfo={description:"",methods:[],displayName:"SkeletonAnimation",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},textDescription:{required:!1,tsType:{name:"string"},description:'@default "Vennligst vent"',defaultValue:{value:'"Vennligst vent"',computed:!1}},role:{required:!1,tsType:{name:"AriaRole"},description:""},delay:{required:!1,tsType:{name:"number"},description:`Antall millisekunder komponenten vil vente før den rendrer
@default 0`,defaultValue:{value:"0",computed:!1}}},composes:["Pick"]};const y=({style:n,density:t,...a})=>e.createElement(r,{...a,height:t==="compact"?24:40,style:{borderRadius:"999px",...n}});y.__docgenInfo={description:"",methods:[],displayName:"SkeletonButton",props:{density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}},composes:["Omit"]};const m=({density:n,...t})=>{const a=n==="compact";return e.createElement(r,{...t,width:a?100:115,height:a?12:16})};m.__docgenInfo={description:"",methods:[],displayName:"SkeletonLabel",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}},composes:["Omit"]};const f=({className:n,checkboxes:t,density:a,labelProps:o,inputProps:i,...l})=>{const s=a==="compact";return e.createElement("div",{className:c("jkl-skeleton-input",n),...l},e.createElement(m,{density:a,...o}),Array.from(Array(t)).map((g,p)=>e.createElement("div",{key:`jkl-skeleton-checkbox-${p}`,className:"jkl-skeleton-input__checkbox"},e.createElement(r,{width:s?22:24,height:s?22:24}),e.createElement(r,{width:s?201:216,height:s?22:24,...i}))))};f.__docgenInfo={description:"",methods:[],displayName:"SkeletonCheckboxGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},checkboxes:{required:!0,tsType:{name:"number"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const b=({className:n,density:t,labelProps:a,inputProps:o,...i})=>{const l=t==="compact";return e.createElement("div",{className:c("jkl-skeleton-input",n),...i},e.createElement(m,{density:t,...a}),e.createElement(r,{width:l?301:316,height:l?32:48,...o}))};b.__docgenInfo={description:"",methods:[],displayName:"SkeletonInput",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""}}};const S=({className:n,radioButtons:t,density:a,labelProps:o,inputProps:i,...l})=>{const s=a==="compact";return e.createElement("div",{className:c("jkl-skeleton-input",n),...l},e.createElement(m,{density:a,...o}),Array.from(Array(t)).map((g,p)=>e.createElement("div",{key:`jkl-skeleton-checkbox-${p}`,className:"jkl-skeleton-input__checkbox"},e.createElement(r,{width:s?22:24,height:s?22:24,style:{borderRadius:"50%"}}),e.createElement(r,{width:s?201:216,height:s?22:24,...i}))))};S.__docgenInfo={description:"",methods:[],displayName:"SkeletonRadioButtonGroup",props:{className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},radioButtons:{required:!0,tsType:{name:"number"},description:""}}};const E=({className:n,density:t,labelProps:a,inputProps:o,...i})=>{const l=t==="compact";return e.createElement("div",{className:c("jkl-skeleton-input",n),...i,"data-density":t},e.createElement(m,{density:t,...a}),e.createElement(r,{width:l?301:316,height:l?148:168,...o}))};E.__docgenInfo={description:"",methods:[],displayName:"SkeletonTextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},labelProps:{required:!1,tsType:{name:"SkeletonLabelProps"},description:""},inputProps:{required:!1,tsType:{name:"SkeletonElementProps"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""}}};const P={title:"Komponenter/Loader/SkeletonTable",component:h,subcomponents:{SkeletonElement:r,SkeletonTableHeader:u},argTypes:{width:{control:"number"}},tags:["autodocs"]},d={name:"Skeleton",args:{children:e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},e.createElement(r,{width:350,height:32}),e.createElement(b,null),e.createElement(E,null),e.createElement(f,{checkboxes:3}),e.createElement(S,{radioButtons:3}),e.createElement(y,{width:225}),e.createElement(h,null,e.createElement(u,null,e.createElement("div",{style:{width:215}},e.createElement(r,{width:115,height:16})),e.createElement("div",{style:{width:115}},e.createElement(r,{width:115,height:16}))),Array.from(Array(5)).map((n,t)=>e.createElement(T,{key:t},e.createElement("div",{style:{width:215}},e.createElement(r,{width:t%2?115:185,height:19})),e.createElement("div",{style:{width:115}},e.createElement(r,{width:24,height:24,shape:"circle"}))))))},render:n=>e.createElement(k,{...n,role:"none presentation"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const R=["SkeletonStory"];export{d as SkeletonStory,R as __namedExportsOrder,P as default};
