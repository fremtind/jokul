import{j as r}from"./iframe-DpX2Qt8H.js";import{C as m}from"./Card-GPkwwck7.js";import{F as s}from"./Flex-CYOJRcyo.js";import{c as p}from"./clsx-B-dksMZM.js";import{B as i}from"./Button-Ci11EZvI.js";import"./preload-helper-PPVm8Dsz.js";import"./SlotComponent-1wSQMfiA.js";import"./mergeRefs-_7lZvp9j.js";import"./usePreviousValue-LBuqfrZA.js";import"./Loader-DXMN4e6Q.js";import"./useDelayedRender-CHmCzfmU.js";const o=({mainAction:e,secondaryAction:a,className:d,...c})=>r.jsxs(s,{...c,className:p("jkl-button-group",d),gap:"8",direction:"column",alignItems:"center",children:[r.jsx(i,{variant:"primary",...e}),a&&r.jsx(i,{variant:"ghost",...a})]});try{o.displayName="ButtonGroup",o.__docgenInfo={description:"",displayName:"ButtonGroup",props:{mainAction:{defaultValue:null,description:"",name:"mainAction",required:!0,type:{name:'({ variant?: "primary" | "secondary" | "tertiary" | "ghost" | undefined; className?: string | undefined; loader?: { showLoader: boolean; textDescription: string; } | undefined; iconLeft?: ReactNode; iconRight?: ReactNode; } & ... 4 more ... & { ...; }) | ({ ...; } & ... 4 more ... & { ...; })'}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:'({ variant?: "primary" | "secondary" | "tertiary" | "ghost"; className?: string; loader?: { showLoader: boolean; textDescription: string; } | undefined; iconLeft?: ReactNode; iconRight?: ReactNode; } & ... 4 more ... & { ...; }) | ({ ...; } & ... 4 more ... & { ...; }) | undefined'}}}}}catch{}const v={title:"Komponenter/Button Group",args:{mainAction:{children:"Fortsett"}},decorators:e=>r.jsx(m,{as:s,style:{minWidth:"max(90vw, 100%)",maxWidth:"60ch",minHeight:"40ex"},alignItems:"end",padding:"l",children:r.jsx(e,{})})},n={name:"Én handling",render:e=>r.jsx(o,{...e})},t={name:"Hovedhandling og sekundærhandling",args:{mainAction:{children:"Bekreft endringer"},secondaryAction:{children:"Avbryt"}},render:e=>r.jsx(o,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Én handling",
  render: args => <ButtonGroup {...args} />
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["SingleAction","TwoActions"];export{n as SingleAction,t as TwoActions,N as __namedExportsOrder,v as default};
