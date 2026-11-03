import{T as n}from"./TextArea-B9sC1bot.js";/* empty css               */import"./iframe-DgpoztGT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B-4yupAL.js";import"./useId-B71GOAp2.js";import"./Label-2gUN2bMr.js";import"./SupportLabel-DtaPXGGO.js";import"./SuccessIcon-D4kAr62N.js";import"./Icon-DRXG0bUE.js";import"./WarningIcon-CAephRV_.js";import"./mergeRefs-_7lZvp9j.js";const E={title:"Komponenter/TextArea",component:n,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},e={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."}},r={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"}},s={args:{counter:{maxLength:400,hideProgress:!1}}},a={args:{autoExpand:!0}},o={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}}},t={args:{errorLabel:"Du må beskrive skaden for å fortsette"}},y=["TextArea","Rows","ReadOnly","AutoExpand","ByteCounter","_Error"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};export{a as AutoExpand,o as ByteCounter,s as ReadOnly,r as Rows,e as TextArea,t as _Error,y as __namedExportsOrder,E as default};
