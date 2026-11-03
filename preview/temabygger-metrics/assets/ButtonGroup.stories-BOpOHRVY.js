import{j as n}from"./iframe-hmKqKoj2.js";import{C as m}from"./Card-CRNZtlnn.js";import{F as s}from"./Flex-C0hb6Vfu.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as i}from"./Button-_4tHR8LW.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-B5PPv9T9.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-C0LKI-CD.js";import"./Loader-KbwPmhqx.js";import"./useDelayedRender-CRKjR1hX.js";const t=({mainAction:e,secondaryAction:a,className:c,...d})=>n.jsxs(s,{...d,className:p("jkl-button-group",c),gap:"8",direction:"column",alignItems:"center",children:[n.jsx(i,{variant:"primary",...e}),a&&n.jsx(i,{variant:"ghost",...a})]});try{t.displayName="ButtonGroup",t.__docgenInfo={description:"",displayName:"ButtonGroup",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/button-group/ButtonGroup.tsx",methods:[],props:{mainAction:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/button-group/ButtonGroup.tsx",name:"TypeLiteral"}],description:"",name:"mainAction",required:!0,tags:{},type:{name:'({ variant?: "primary" | "secondary" | "tertiary" | "ghost" | undefined; className?: string | undefined; loader?: { showLoader: boolean; textDescription: string; } | undefined; iconLeft?: ReactNode; iconRight?: ReactNode; } & ... 4 more ... & { ...; }) | ({ ...; } & ... 4 more ... & { ...; })'}},secondaryAction:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/button-group/ButtonGroup.tsx",name:"TypeLiteral"}],description:"",name:"secondaryAction",required:!1,tags:{},type:{name:'({ variant?: "primary" | "secondary" | "tertiary" | "ghost"; className?: string; loader?: { showLoader: boolean; textDescription: string; } | undefined; iconLeft?: ReactNode; iconRight?: ReactNode; } & ... 4 more ... & { ...; }) | ({ ...; } & ... 4 more ... & { ...; }) | undefined'}}},tags:{}}}catch{}const N={title:"Komponenter/Button Group",args:{mainAction:{children:"Fortsett"}},decorators:e=>n.jsx(m,{as:s,style:{minWidth:"max(90vw, 100%)",maxWidth:"60ch",minHeight:"40ex"},alignItems:"end",padding:"l",children:n.jsx(e,{})})},r={name:"Én handling",render:e=>n.jsx(t,{...e})},o={name:"Hovedhandling og sekundærhandling",args:{mainAction:{children:"Bekreft endringer"},secondaryAction:{children:"Avbryt"}},render:e=>n.jsx(t,{...e})},_=["SingleAction","TwoActions"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Én handling",
  render: args => <ButtonGroup {...args} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{r as SingleAction,o as TwoActions,_ as __namedExportsOrder,N as default};
