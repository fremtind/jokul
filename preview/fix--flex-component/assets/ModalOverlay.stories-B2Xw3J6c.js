/* empty css               */import{a as n}from"./Modal-CrG2DI5t.js";import"./clsx-B-dksMZM.js";import"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./IconButton-BsqD9nTf.js";import"./CloseIcon-Bpeq_SK8.js";import"./Icon-Crh-gXYv.js";const p={title:"Komponenter/Modal/ModalOverlay",component:n,parameters:{layout:"centered"},tags:["autodocs"]};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    dialogRef: (instance: ModalInstance | null) => {
      modalRef = instance;
    },
    onCancel: () => {
      console.log("❌ Cancel");
      modalRef?.hide();
    },
    onClick: () => {
      ModalOverlay.args?.onCancel?.();
    }
  }
}`,...o.parameters?.docs?.source}}};const g=["ModalOverlay"];export{o as ModalOverlay,g as __namedExportsOrder,p as default};
