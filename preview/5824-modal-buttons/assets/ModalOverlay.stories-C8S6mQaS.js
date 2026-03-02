/* empty css               */import{a as n}from"./Modal-CJWi5FyW.js";import"./iframe-C6DTywqF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-BntBszxm.js";import"./CloseIcon-DJRGpsrY.js";import"./Icon-DtMNsZn9.js";const p={title:"Komponenter/Modal/ModalOverlay",component:n};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
