/* empty css               */import{a as n}from"./Modal-CqP1mKMQ.js";import"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./IconButton-CwYjR4Na.js";import"./CloseIcon-BPFAU_ZX.js";import"./Icon-CqyKskc7.js";const g={title:"Komponenter/Modal/ModalOverlay",component:n,parameters:{layout:"centered"},tags:["autodocs"]};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["ModalOverlay"];export{o as ModalOverlay,u as __namedExportsOrder,g as default};
