/* empty css               */import{a as n}from"./Modal-0DOueCR2.js";import"./iframe-DzdEdhGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-CSJVKDpP.js";import"./CloseIcon-B_1tI4Fj.js";import"./Icon-CIyquo7v.js";const p={title:"Komponenter/Modal/ModalOverlay",component:n};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
