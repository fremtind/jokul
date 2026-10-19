import{j as e,r as s}from"./iframe-D7upYY5c.js";import{F as c}from"./Flex-Zq4juz9d.js";import{F}from"./FieldGroup-CJKRsCxy.js";import{C as x}from"./Checkbox-Cl3pupzn.js";import{T as b}from"./TextInput-CaX5dHnq.js";import{B as j}from"./Button-zY7tvP5K.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CVs4UBRo.js";import"./mergeRefs-jfUaLMSN.js";import"./useId-DbCQwEhX.js";import"./Label-Dv_2Lq2P.js";import"./SupportLabel-Cc-OmoOL.js";import"./SuccessIcon-BrqVnmDE.js";import"./Icon-DikkJyQA.js";import"./WarningIcon-8eiyg0RW.js";import"./InputGroup-DAhVQWVj.js";import"./BaseTextInput-848pKHNX.js";import"./IconButton-BBTWXEdB.js";import"./usePreviousValue-zWvAZfDp.js";import"./Loader-BpfQvpCK.js";import"./useDelayedRender-D0vDkmzN.js";const Z={title:"Mønstre/Hvordan la brukeren oppgi eget svar",parameters:{layout:"centered",docs:{description:{component:"Hjelp brukeren med å oppgi et eget svar når ingen av alternativene i en liste passer."}}}},m="Et annet rom",y=["Bad","Kjeller","Kjøkken","Soverom","Stue"];function C(){const[n,u]=s.useState([]),[o,g]=s.useState(""),[a,v]=s.useState(!1),k=s.useId(),r=n.includes(m),i=a&&n.length===0,S=a&&r&&!o.trim(),f=(t,h)=>{u(d=>h?d.includes(t)?d:[...d,t]:d.filter(T=>T!==t))},E=t=>{t.preventDefault(),v(!0)};return e.jsx("form",{noValidate:!0,onSubmit:E,children:e.jsxs(c,{direction:"column",gap:"l",children:[e.jsxs(F,{legend:"Hvilke rom har fått vannskade?",description:"Velg alle rom der du kan se skader.",errorLabel:i?"Velg minst ett rom":"","aria-invalid":i,children:[y.map(t=>e.jsx(x,{name:"rom-med-vannskade",value:t,checked:n.includes(t),invalid:i,onChange:h=>f(t,h.currentTarget.checked),children:t},t)),e.jsx(x,{name:"rom-med-vannskade",value:m,checked:r,invalid:i,onChange:t=>f(m,t.currentTarget.checked),children:m}),r?e.jsx(b,{id:k,className:"jkl-spacing-m--top",name:"annet-rom-med-vannskade",label:"Oppgi rommet",value:o,required:!0,errorLabel:S?"Oppgi rommet":"",onChange:t=>g(t.currentTarget.value)}):null]}),e.jsx(c,{children:e.jsx(j,{type:"submit",variant:"primary",children:"Fortsett"})})]})})}const L=["Datamaskin","Hvitevarer","Mobiltelefon","Møbler","Sykkel","TV"];function I(){const[n,u]=s.useState(""),[o,g]=s.useState(!1),a=s.useId(),v=o&&!n.trim(),k=r=>{r.preventDefault(),g(!0)};return e.jsx("form",{noValidate:!0,onSubmit:k,children:e.jsxs(c,{direction:"column",gap:"l",children:[e.jsx(b,{name:"skadet-gjenstand",label:"Hvilken gjenstand ble skadet?",description:"Skriv inn hva slags gjenstand det er.",value:n,list:a,required:!0,errorLabel:v?"Oppgi hvilken gjenstand som ble skadet":"",onChange:r=>u(r.currentTarget.value)}),e.jsx("datalist",{id:a,children:L.map(r=>e.jsx("option",{value:r},r))}),e.jsx(c,{children:e.jsx(j,{type:"submit",variant:"primary",children:"Fortsett"})})]})})}const l={name:"Liste med eget svar",parameters:{docs:{description:{story:"Bruk når listen dekker de fleste behovene, og bare noen få brukere trenger å oppgi et eget svar."}}},render:()=>e.jsx(C,{})},p={name:"Tekstfelt med forslag",parameters:{docs:{description:{story:"Bruk når det finnes mange mulige svar, brukeren vet hva de leter etter, og forslag kan gjøre det raskere å svare."}}},render:()=>e.jsx(I,{})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
