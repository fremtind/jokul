import{T as t}from"./TextArea-DE_RRjNi.js";import"./iframe-Cw_cXWtk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BHWirV1l.js";import"./useId-O4j-bVKQ.js";import"./Label-Cl6WyKNe.js";import"./SupportLabel-o3Rb0Ipa.js";import"./WarningIcon-CiE7w4SM.js";import"./Icon-DOEkfrNC.js";const f={title:"Komponenter/TextArea",component:t,args:{label:"Tilleggsinformasjon",description:"Legg til relevant informasjon som kan påvirke saken.",counter:{maxLength:200,hideProgress:!1},autoExpand:!1,inline:!1,rows:7,startOpen:!0,readOnly:!1,disabled:!1,errorLabel:""},argTypes:{rows:{control:{type:"select"},options:[3,4,5,6,7,8,9,10]}}},e={args:{label:"Har du noen tilbakemeldinger til oss?",description:"Din tilbakemelding hjelper oss å bli bedre."}},r={args:{label:"Beskriv skaden",errorLabel:"Du må beskrive skaden for å fortsette"}},s={args:{counter:{maxLength:400,hideProgress:!1}}},a={args:{autoExpand:!0}},n={args:{label:"Melding til ekstern tjeneste",description:"Brukes når en integrasjon håndhever en bytegrense.",counter:{maxLength:4096,strategy:"bytes",hideProgress:!1}}},o={args:{errorLabel:"Du må beskrive skaden for å fortsette"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const h=["TextArea","Rows","ReadOnly","AutoExpand","ByteCounter","_Error"];export{a as AutoExpand,n as ByteCounter,s as ReadOnly,r as Rows,e as TextArea,o as _Error,h as __namedExportsOrder,f as default};
