import{T as n}from"./TextArea-D8AWyZJx.js";/* empty css               */import"./iframe-B_D-Yn_i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-ccGglHjr.js";import"./useId-1mPO-Ij8.js";import"./Label-Dre8fBOY.js";import"./SupportLabel-BvvMUq5M.js";import"./SuccessIcon-38lGBLgk.js";import"./Icon-CHxAH6Hv.js";import"./WarningIcon-YjELxZqt.js";import"./mergeRefs-HxCfe7Up.js";const y={title:"Komponenter/TextArea",component:n,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},e={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."}},r={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"}},s={args:{counter:{maxLength:400,hideProgress:!1}}},a={args:{autoExpand:!0}},o={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}}},t={args:{errorLabel:"Du må beskrive skaden for å fortsette"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    counter: {
      maxLength: 400,
      hideProgress: false
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    autoExpand: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Melding til ekstern tjeneste",
    description: "Brukes når en integrasjon håndhever en bytegrense.",
    counter: {
      maxLength: 4096,
      strategy: "bytes",
      hideProgress: false
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    errorLabel: "Du må beskrive skaden for å fortsette"
  }
}`,...t.parameters?.docs?.source}}};const L=["TextArea","Rows","ReadOnly","AutoExpand","ByteCounter","_Error"];export{a as AutoExpand,o as ByteCounter,s as ReadOnly,r as Rows,e as TextArea,t as _Error,L as __namedExportsOrder,y as default};
