import{j as r}from"./iframe-DJDS5Wb7.js";import{u as c}from"./index.esm-DaWOOpz0.js";import{T as n}from"./TextInput-Bb7xVkow.js";/* empty css               */import{F as g}from"./FieldGroup-BmzPBJbf.js";import{F as b}from"./Flex-DlEDuZ8l.js";import{r as x}from"./registerWithMask-D7cNL3Nf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-B6LqnCmA.js";import"./useId-B7ypxmtD.js";import"./Label-QCojN2NV.js";import"./SupportLabel-D1TT9jgR.js";import"./SuccessIcon-B0jzzEaH.js";import"./Icon-CCqWF8ue.js";import"./WarningIcon-DUMYN4tw.js";import"./BaseTextInput-COzExtv7.js";import"./IconButton-MtZyaI4f.js";import"./SlotComponent-FhtfniMO.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";const G={title:"Komponenter/TextInput/TextInput",component:n,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},t={},o={args:{disabled:!0,defaultValue:"ola.nordmann@eksempel.no",helpLabel:"Label og hjelpetekst beholder full kontrast."}},s={name:"Read only",args:{readOnly:!0,defaultValue:"ola.nordmann@eksempel.no",helpLabel:"Verdien kan leses og kopieres, men ikke endres."}},l={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},d={name:"Label som sideoverskrift",args:{label:"Hva er e-postadressen din?",description:"Vi sender kvitteringen hit.",labelProps:{pageHeading:!0}}},i={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},h=e=>{const p=c({defaultValues:{amount:"1 200"}}),{registerWithNumber:u}=x(p);return r.jsx(n,{...e,...u("amount"),label:"Beløp",maxLength:10,placeholder:"0",unit:"kr"})},m={name:"Tallmaskering",parameters:{docs:{description:{story:"Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."}}},args:{placeholder:"0"},render:e=>r.jsx(h,{...e})},a={args:{labelProps:{srOnly:!1}},render:e=>r.jsx(g,{legend:"Når er du født?",labelProps:{variant:"medium"},children:r.jsxs(b,{gap:"xs",children:[r.jsx(n,{...e,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),r.jsx(n,{...e,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),r.jsx(n,{...e,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})},_=["TextInput","Disabled","ReadOnly","UgyldigEpost","LabelSomSideoverskrift","UnitAlign","Tallmaskering","Datovelger"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Label som sideoverskrift",
  args: {
    label: "Hva er e-postadressen din?",
    description: "Vi sender kvitteringen hit.",
    labelProps: {
      pageHeading: true
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    inputMode: "numeric",
    maxLength: 6,
    placeholder: "120",
    unit: "kvm"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
i dato, måned, år.`,...a.parameters?.docs?.description}}};export{a as Datovelger,o as Disabled,d as LabelSomSideoverskrift,s as ReadOnly,m as Tallmaskering,t as TextInput,l as UgyldigEpost,i as UnitAlign,_ as __namedExportsOrder,G as default};
