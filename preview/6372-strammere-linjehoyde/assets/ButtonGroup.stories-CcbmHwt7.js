import{j as r}from"./iframe-DY_UNGw3.js";import{C as m}from"./Card-CTw3DNTm.js";import{F as s}from"./Flex-LWgvdm1W.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as i}from"./Button-CUHMnuw3.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-BSWVJxFG.js";import"./mergeRefs-_7lZvp9j.js";import"./types-BlFGa32c.js";import"./usePreviousValue--GHruUyN.js";import"./Loader-BcJU36QW.js";import"./useDelayedRender-akJ86Vlq.js";const t=({mainAction:e,secondaryAction:a,className:c,...d})=>r.jsxs(s,{...d,className:p("jkl-button-group",c),gap:"8",direction:"column",alignItems:"center",children:[r.jsx(i,{variant:"primary",...e}),a&&r.jsx(i,{variant:"ghost",...a})]});try{t.displayName="ButtonGroup",t.__docgenInfo={description:"",displayName:"ButtonGroup",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/button-group/ButtonGroup.tsx",methods:[],props:{mainAction:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/button-group/ButtonGroup.tsx",name:"TypeLiteral"}],description:"",name:"mainAction",required:!0,tags:{},type:{name:'({ variant?: "primary" | "secondary" | "tertiary" | "ghost" | undefined; className?: string | undefined; loader?: { showLoader: boolean; textDescription: string; } | undefined; iconLeft?: ReactNode; iconRight?: ReactNode; } & ... 6 more ... & { ...; }) | ({ ...; } & ... 6 more ... & { ...; })'}},secondaryAction:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/button-group/ButtonGroup.tsx",name:"TypeLiteral"}],description:"",name:"secondaryAction",required:!1,tags:{},type:{name:'({ variant?: "primary" | "secondary" | "tertiary" | "ghost"; className?: string; loader?: { showLoader: boolean; textDescription: string; } | undefined; iconLeft?: ReactNode; iconRight?: ReactNode; } & ... 6 more ... & { ...; }) | ({ ...; } & ... 6 more ... & { ...; }) | undefined'}}},tags:{}}}catch{}const _={title:"Komponenter/Button Group",args:{mainAction:{children:"Fortsett"}},decorators:e=>r.jsx(m,{as:s,style:{minWidth:"max(90vw, 100%)",maxWidth:"60ch",minHeight:"40ex"},alignItems:"end",padding:"l",children:r.jsx(e,{})})},n={name:"Én handling",render:e=>r.jsx(t,{...e})},o={name:"Hovedhandling og sekundærhandling",args:{mainAction:{children:"Bekreft endringer"},secondaryAction:{children:"Avbryt"}},render:e=>r.jsx(t,{...e})},v=["SingleAction","TwoActions"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Én handling",
  render: args => <ButtonGroup {...args} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Hovedhandling og sekundærhandling",
  args: {
    mainAction: {
      children: "Bekreft endringer"
    },
    secondaryAction: {
      children: "Avbryt"
    }
  },
  render: args => <ButtonGroup {...args} />
}`,...o.parameters?.docs?.source}}};export{n as SingleAction,o as TwoActions,v as __namedExportsOrder,_ as default};
