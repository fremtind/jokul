import{j as e,r as s}from"./iframe-DHD78tjs.js";import{F as c}from"./Flex-C3QskgCW.js";import{F}from"./FieldGroup-C4VTekVs.js";import{C as x}from"./Checkbox-Bm9QqvGD.js";import{T as b}from"./TextInput-BKjm7-Q5.js";import{B as j}from"./Button-Dp2HLE77.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C_wKr_lh.js";import"./mergeRefs-B7JkGqG8.js";import"./useId-BfD8L_Y7.js";import"./Label-QAGfqQH7.js";import"./SupportLabel-z2U0zmGO.js";import"./SuccessIcon-BXmcOft_.js";import"./Icon-Cv9XDEUJ.js";import"./WarningIcon-DHLwJs7-.js";import"./InputGroup-CRS2mp0S.js";import"./BaseTextInput-CkkLBZLK.js";import"./IconButton-BMX3UOf0.js";import"./usePreviousValue-BbAnQspG.js";import"./Loader-BMbQas-M.js";import"./useDelayedRender-Bj1LG78K.js";const Z={title:"Mønstre/Hvordan la brukeren oppgi eget svar",parameters:{layout:"centered",docs:{description:{component:"Hjelp brukeren med å oppgi et eget svar når ingen av alternativene i en liste passer."}}}},m="Et annet rom",y=["Bad","Kjeller","Kjøkken","Soverom","Stue"];function C(){const[n,u]=s.useState([]),[o,g]=s.useState(""),[a,v]=s.useState(!1),k=s.useId(),r=n.includes(m),i=a&&n.length===0,S=a&&r&&!o.trim(),f=(t,h)=>{u(d=>h?d.includes(t)?d:[...d,t]:d.filter(T=>T!==t))},E=t=>{t.preventDefault(),v(!0)};return e.jsx("form",{noValidate:!0,onSubmit:E,children:e.jsxs(c,{direction:"column",gap:"l",children:[e.jsxs(F,{legend:"Hvilke rom har fått vannskade?",description:"Velg alle rom der du kan se skader.",errorLabel:i?"Velg minst ett rom":"","aria-invalid":i,children:[y.map(t=>e.jsx(x,{name:"rom-med-vannskade",value:t,checked:n.includes(t),invalid:i,onChange:h=>f(t,h.currentTarget.checked),children:t},t)),e.jsx(x,{name:"rom-med-vannskade",value:m,checked:r,invalid:i,onChange:t=>f(m,t.currentTarget.checked),children:m}),r?e.jsx(b,{id:k,className:"jkl-spacing-m--top",name:"annet-rom-med-vannskade",label:"Oppgi rommet",value:o,required:!0,errorLabel:S?"Oppgi rommet":"",onChange:t=>g(t.currentTarget.value)}):null]}),e.jsx(c,{children:e.jsx(j,{type:"submit",variant:"primary",children:"Fortsett"})})]})})}const L=["Datamaskin","Hvitevarer","Mobiltelefon","Møbler","Sykkel","TV"];function I(){const[n,u]=s.useState(""),[o,g]=s.useState(!1),a=s.useId(),v=o&&!n.trim(),k=r=>{r.preventDefault(),g(!0)};return e.jsx("form",{noValidate:!0,onSubmit:k,children:e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(b,{name:"skadet-gjenstand",label:"Hvilken gjenstand ble skadet?",description:"Skriv inn hva slags gjenstand det er.",value:n,list:a,required:!0,errorLabel:v?"Oppgi hvilken gjenstand som ble skadet":"",onChange:r=>u(r.currentTarget.value)}),e.jsx("datalist",{id:a,children:L.map(r=>e.jsx("option",{value:r},r))}),e.jsx(c,{children:e.jsx(j,{type:"submit",variant:"primary",children:"Fortsett"})})]})})}const l={name:"Liste med eget svar",parameters:{docs:{description:{story:"Bruk når listen dekker de fleste behovene, og bare noen få brukere trenger å oppgi et eget svar."}}},render:()=>e.jsx(C,{})},p={name:"Tekstfelt med forslag",parameters:{docs:{description:{story:"Bruk når det finnes mange mulige svar, brukeren vet hva de leter etter, og forslag kan gjøre det raskere å svare."}}},render:()=>e.jsx(I,{})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Liste med eget svar",
  parameters: {
    docs: {
      description: {
        story: "Bruk når listen dekker de fleste behovene, og bare noen få brukere trenger å oppgi et eget svar."
      }
    }
  },
  render: () => <ListWithCustomAnswerExample />
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Tekstfelt med forslag",
  parameters: {
    docs: {
      description: {
        story: "Bruk når det finnes mange mulige svar, brukeren vet hva de leter etter, og forslag kan gjøre det raskere å svare."
      }
    }
  },
  render: () => <TextFieldWithSuggestionsExample />
}`,...p.parameters?.docs?.source}}};const $=["ListeMedEgetSvar","TekstfeltMedForslag"];export{l as ListeMedEgetSvar,p as TekstfeltMedForslag,$ as __namedExportsOrder,Z as default};
