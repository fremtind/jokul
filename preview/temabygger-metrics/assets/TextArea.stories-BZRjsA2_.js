import{T as i}from"./TextArea-DVp9sqNI.js";/* empty css               */import"./iframe-CQSab0f2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-D9UPPzvp.js";import"./useId-CxAmkx76.js";import"./Label-BNSpnxyK.js";import"./SupportLabel-B6YyOooS.js";import"./SuccessIcon-Bx7XsCkq.js";import"./Icon-B9veFsxW.js";import"./WarningIcon-CN4tol4i.js";import"./mergeRefs-_7lZvp9j.js";const h={title:"Komponenter/TextArea",component:i,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},e={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."}},r={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"}},s={args:{disabled:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss."}},a={args:{readOnly:!0,defaultValue:"Bilen ble påkjørt bakfra i et veikryss.",counter:{maxLength:400,hideProgress:!1}}},t={args:{autoExpand:!0}},n={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}}},o={args:{errorLabel:"Du må beskrive skaden for å fortsette"}},v=["TextArea","Rows","Disabled","ReadOnly","AutoExpand","ByteCounter","_Error"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Har du noen tilbakemeldinger til oss?",
    description: "Din tilbakemelding hjelper oss å bli bedre."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Beskriv skaden",
    errorLabel: "Du må beskrive skaden for å fortsette"
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Bilen ble påkjørt bakfra i et veikryss."
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: "Bilen ble påkjørt bakfra i et veikryss.",
    counter: {
      maxLength: 400,
      hideProgress: false
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    autoExpand: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Melding til ekstern tjeneste",
    description: "Brukes når en integrasjon håndhever en bytegrense.",
    counter: {
      maxLength: 4096,
      strategy: "bytes",
      hideProgress: false
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Du må beskrive skaden for å fortsette"
  }
}`,...o.parameters?.docs?.source}}};export{t as AutoExpand,n as ByteCounter,s as Disabled,a as ReadOnly,r as Rows,e as TextArea,o as _Error,v as __namedExportsOrder,h as default};
