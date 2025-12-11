/* empty css               */import{a as n}from"./Modal-DWk_7gp1.js";import"./jsx-runtime-BOJBhsC5.js";import"./index-Bv6P490N.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./IconButton-9XUYZjY_.js";import"./CloseIcon-UHfS0BBi.js";import"./Icon-DYEEOjBa.js";const g={title:"Komponenter/Modal/ModalOverlay",component:n,parameters:{layout:"centered"},tags:["autodocs"]};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
