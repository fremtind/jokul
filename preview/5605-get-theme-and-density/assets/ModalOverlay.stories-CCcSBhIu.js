/* empty css               */import{a as n}from"./Modal-DTDZ_VG2.js";import"./iframe-rzzW3gX2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-C8uqjaQO.js";import"./CloseIcon-BFVK9m6s.js";import"./Icon-rzk6z11L.js";const p={title:"Komponenter/Modal/ModalOverlay",component:n};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
