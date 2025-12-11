/* empty css               */import{a as s}from"./Modal-CYqcIR88.js";import"./jsx-runtime-BbjHj44Y.js";import"./index-C6mWTJJr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./IconButton-DhDUYojH.js";import"./CloseIcon-BKY4pjcT.js";import"./Icon-CZwjvlw8.js";const y={title:"Komponenter/Modal/ModalOverlay",component:s,parameters:{layout:"centered"},tags:["autodocs"]};let e=null;const a={args:{dialogRef:o=>{e=o},onCancel:()=>{console.log("❌ Cancel"),e==null||e.hide()},onClick:()=>{var o,n;(n=(o=a.args)==null?void 0:o.onCancel)==null||n.call(o)}}};var r,l,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(t=(l=a.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const O=["ModalOverlay"];export{a as ModalOverlay,O as __namedExportsOrder,y as default};
