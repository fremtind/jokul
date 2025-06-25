/* empty css               */import{a as s}from"./Modal-B3acawRg.js";import"./jsx-runtime-BbgvZ3_S.js";import"./index-C67T7Eu_.js";import"./_commonjsHelpers-gnU0ypJ3.js";import"./clsx-B-dksMZM.js";import"./IconButton-DgEt8jWj.js";import"./CloseIcon-CnDQTxOM.js";import"./Icon-DzOJaiRU.js";const y={title:"Komponenter/Modal/ModalOverlay",component:s,parameters:{layout:"centered"},tags:["autodocs"]};let e=null;const a={args:{dialogRef:o=>{e=o},onCancel:()=>{console.log("❌ Cancel"),e==null||e.hide()},onClick:()=>{var o,n;(n=(o=a.args)==null?void 0:o.onCancel)==null||n.call(o)}}};var r,l,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
