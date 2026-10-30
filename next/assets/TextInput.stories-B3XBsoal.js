import{j as r}from"./iframe-5Ej-9cBK.js";import{u as d}from"./index.esm-D-UHXEP_.js";import{T as t}from"./TextInput-B20Xwmyh.js";/* empty css               */import{F as u}from"./FieldGroup-CxVCPM-G.js";import{F as g}from"./Flex-jC5EYJxR.js";import{r as c}from"./registerWithMask-D7cNL3Nf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C-cn7LSE.js";import"./useId-Tgr1C5Ky.js";import"./Label-C0GuFZNe.js";import"./SupportLabel-DVL-dBwI.js";import"./SuccessIcon-DPG-2EwA.js";import"./Icon-CwvX68sH.js";import"./WarningIcon-CWi4oa_N.js";import"./BaseTextInput-DnOz6kxX.js";import"./IconButton-DdbIIOHz.js";import"./SlotComponent-BxN4NUeE.js";import"./mergeRefs-_7lZvp9j.js";import"./formatDate-Dke5WO_s.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";const B={title:"Komponenter/TextInput/TextInput",component:t,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},n={},o={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},s={name:"Label som sideoverskrift",args:{label:"Hva er e-postadressen din?",description:"Vi sender kvitteringen hit.",labelProps:{pageHeading:!0}}},l={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},b=e=>{const m=d({defaultValues:{amount:"1 200"}}),{registerWithNumber:p}=c(m);return r.jsx(t,{...e,...p("amount"),label:"Beløp",maxLength:10,placeholder:"0",unit:"kr"})},i={name:"Tallmaskering",parameters:{docs:{description:{story:"Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."}}},args:{placeholder:"0"},render:e=>r.jsx(b,{...e})},a={args:{labelProps:{srOnly:!1}},render:e=>r.jsx(u,{legend:"Når er du født?",labelProps:{variant:"medium"},children:r.jsxs(g,{gap:"xs",children:[r.jsx(t,{...e,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),r.jsx(t,{...e,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),r.jsx(t,{...e,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig e-post",
  args: {
    label: "E-post",
    defaultValue: "ola.nordmann",
    errorLabel: "Skriv inn en gyldig e-postadresse."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Label som sideoverskrift",
  args: {
    label: "Hva er e-postadressen din?",
    description: "Vi sender kvitteringen hit.",
    labelProps: {
      pageHeading: true
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    inputMode: "numeric",
    maxLength: 6,
    placeholder: "120",
    unit: "kvm"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
i dato, måned, år.`,...a.parameters?.docs?.description}}};const G=["TextInput","UgyldigEpost","LabelSomSideoverskrift","UnitAlign","Tallmaskering","Datovelger"];export{a as Datovelger,s as LabelSomSideoverskrift,i as Tallmaskering,n as TextInput,o as UgyldigEpost,l as UnitAlign,G as __namedExportsOrder,B as default};
