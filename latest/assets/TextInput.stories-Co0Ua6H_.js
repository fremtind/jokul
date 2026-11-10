import{j as r}from"./iframe-CD9CZqvR.js";import{u as p}from"./index.esm-C8Np4MHg.js";import{T as t}from"./TextInput-BiYViT7W.js";/* empty css               */import{F as d}from"./FieldGroup-DmyAzwiy.js";import{F as u}from"./Flex-b2zTGoP_.js";import{r as g}from"./registerWithMask-D7cNL3Nf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-Sk-3q2R9.js";import"./useId-BBE_y2x5.js";import"./Label-klrn9LMA.js";import"./SupportLabel-Dbqsw5LZ.js";import"./SuccessIcon-B7X-0EYG.js";import"./Icon-CpAuQdJu.js";import"./WarningIcon-CjVjlawU.js";import"./BaseTextInput-g9fia5v2.js";import"./IconButton-BGorLUXG.js";import"./SlotComponent-CMzEMrFQ.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";const B={title:"Komponenter/TextInput/TextInput",component:t,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},n={},o={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},s={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},c=e=>{const m=p({defaultValues:{amount:"1 200"}}),{registerWithNumber:i}=g(m);return r.jsx(t,{...e,...i("amount"),label:"Beløp",maxLength:10,placeholder:"0",unit:"kr"})},l={name:"Tallmaskering",parameters:{docs:{description:{story:"Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."}}},args:{placeholder:"0"},render:e=>r.jsx(c,{...e})},a={args:{labelProps:{srOnly:!1}},render:e=>r.jsx(d,{legend:"Når er du født?",labelProps:{variant:"medium"},children:r.jsxs(u,{gap:"xs",children:[r.jsx(t,{...e,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),r.jsx(t,{...e,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),r.jsx(t,{...e,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})},G=["TextInput","UgyldigEpost","UnitAlign","Tallmaskering","Datovelger"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig e-post",
  args: {
    label: "E-post",
    defaultValue: "ola.nordmann",
    errorLabel: "Skriv inn en gyldig e-postadresse."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    inputMode: "numeric",
    maxLength: 6,
    placeholder: "120",
    unit: "kvm"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Tallmaskering",
  parameters: {
    docs: {
      description: {
        story: "Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."
      }
    }
  },
  args: {
    placeholder: "0"
  },
  render: args => <NumberMaskExample {...args} />
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    labelProps: {
      srOnly: false
    }
  },
  render: args => {
    return <FieldGroup legend="Når er du født?" labelProps={{
      variant: "medium"
    }}>
                <Flex gap="xs">
                    <TextInputComponent {...args} maxLength={2} label="Dag" placeholder="dd" autoComplete="bday-day" inputMode="numeric" aria-label={"Fødselsdato dag"} />
                    <TextInputComponent {...args} maxLength={2} label="Måned" placeholder="mm" autoComplete="bday-month" inputMode="numeric" aria-label={"Fødselsdato måned"} />
                    <TextInputComponent {...args} maxLength={3} label="År" placeholder="åååå" autoComplete="bday-year" inputMode="numeric" aria-label={"Fødselsdato år"} />
                </Flex>
            </FieldGroup>;
  }
}`,...a.parameters?.docs?.source},description:{story:`Når du spør om datoer brukerne har et veldig aktivt forhold til,
som for eksempel sin egen fødselsdato kan det være til hjelp å dele opp tekstfeltet
i dato, måned, år.`,...a.parameters?.docs?.description}}};export{a as Datovelger,l as Tallmaskering,n as TextInput,o as UgyldigEpost,s as UnitAlign,G as __namedExportsOrder,B as default};
