import{j as r}from"./iframe-7_fnrMRC.js";import{u,r as c}from"./index.esm-bVtaPJ7j.js";import{T as n}from"./TextInput-DPdMgROQ.js";/* empty css               */import{F as g}from"./FieldGroup-BJDzxhT7.js";import{F as x}from"./Flex-BA23hn0z.js";import"./preload-helper-PPVm8Dsz.js";import"./formatDate-hwqa_80k.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./clsx-B-dksMZM.js";import"./InputGroup-BCW5sF57.js";import"./useId-BbNq_aaf.js";import"./Label-DXV2eElB.js";import"./SupportLabel-DXsK5t_a.js";import"./SuccessIcon-UqAo9RGp.js";import"./Icon-DBMsta37.js";import"./WarningIcon-DvL1FK2z.js";import"./BaseTextInput-Buo6EoTd.js";import"./IconButton-C6jozOVS.js";import"./SlotComponent-BiLao9zq.js";import"./mergeRefs-_7lZvp9j.js";const B={title:"Komponenter/TextInput/TextInput",component:n,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},t={},o={args:{disabled:!0,defaultValue:"ola.nordmann@eksempel.no",helpLabel:"Label og hjelpetekst beholder full kontrast."}},s={name:"Read only",args:{readOnly:!0,defaultValue:"ola.nordmann@eksempel.no",helpLabel:"Verdien kan leses og kopieres, men ikke endres."}},l={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},m={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},b=e=>{const p=u({defaultValues:{amount:"1 200"}}),{registerWithNumber:i}=c(p);return r.jsx(n,{...e,...i("amount"),label:"Beløp",maxLength:10,placeholder:"0",unit:"kr"})},d={name:"Tallmaskering",parameters:{docs:{description:{story:"Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."}}},args:{placeholder:"0"},render:e=>r.jsx(b,{...e})},a={args:{labelProps:{srOnly:!1}},render:e=>r.jsx(g,{legend:"Når er du født?",labelProps:{variant:"medium"},children:r.jsxs(x,{gap:"xs",children:[r.jsx(n,{...e,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),r.jsx(n,{...e,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),r.jsx(n,{...e,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})},G=["TextInput","Disabled","ReadOnly","UgyldigEpost","UnitAlign","Tallmaskering","Datovelger"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "ola.nordmann@eksempel.no",
    helpLabel: "Label og hjelpetekst beholder full kontrast."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Read only",
  args: {
    readOnly: true,
    defaultValue: "ola.nordmann@eksempel.no",
    helpLabel: "Verdien kan leses og kopieres, men ikke endres."
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig e-post",
  args: {
    label: "E-post",
    defaultValue: "ola.nordmann",
    errorLabel: "Skriv inn en gyldig e-postadresse."
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    inputMode: "numeric",
    maxLength: 6,
    placeholder: "120",
    unit: "kvm"
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
i dato, måned, år.`,...a.parameters?.docs?.description}}};export{a as Datovelger,o as Disabled,s as ReadOnly,d as Tallmaskering,t as TextInput,l as UgyldigEpost,m as UnitAlign,G as __namedExportsOrder,B as default};
