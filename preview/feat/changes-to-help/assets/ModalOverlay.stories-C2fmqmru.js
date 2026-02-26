/* empty css               */import{a as n}from"./Modal-BKyJCnjC.js";import"./iframe-BlL1f6tE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-RTpbCdtl.js";import"./CloseIcon-Ci-qZyAn.js";import"./Icon-DQG0WF9n.js";const p={title:"Komponenter/Modal/ModalOverlay",component:n};let a=null;const o={args:{dialogRef:e=>{a=e},onCancel:()=>{console.log("❌ Cancel"),a?.hide()},onClick:()=>{o.args?.onCancel?.()}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
