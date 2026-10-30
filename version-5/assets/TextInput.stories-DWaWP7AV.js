import{j as r}from"./iframe-BGaBJ1ys.js";import{u as p,r as d}from"./index.esm-Co0DoBbN.js";import{T as t}from"./TextInput-C_OE7i9Y.js";/* empty css               */import{F as u}from"./FieldGroup-Bo6ppGoz.js";import{F as g}from"./Flex-qt3UGmY4.js";import"./preload-helper-PPVm8Dsz.js";import"./formatDate-hwqa_80k.js";import"./unicode-DWvs0Pen.js";import"./formatOrganisasjonsnummer-DW0DyDi9.js";import"./formatNumber-Davy0grG.js";import"./clsx-B-dksMZM.js";import"./InputGroup-Ag0GiBkA.js";import"./useId-Cr0_R8OP.js";import"./Label-D7VCm1U8.js";import"./SupportLabel-DpRTcJHs.js";import"./SuccessIcon-x48MCFhe.js";import"./Icon-Cf3fY8pJ.js";import"./WarningIcon-BC6yM_cn.js";import"./BaseTextInput-Dll7CkqA.js";import"./IconButton-C8fL1QAn.js";import"./SlotComponent-C_4bRle4.js";import"./mergeRefs-CJbqZHUc.js";const V={title:"Komponenter/TextInput/TextInput",component:t,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},n={},o={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},s={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},c=e=>{const m=p({defaultValues:{amount:"1 200"}}),{registerWithNumber:i}=d(m);return r.jsx(t,{...e,...i("amount"),label:"Beløp",maxLength:10,placeholder:"0",unit:"kr"})},l={name:"Tallmaskering",parameters:{docs:{description:{story:"Eksempel på TextInput brukt sammen med registerWithMasks().registerWithNumber for formattering av tall."}}},args:{placeholder:"0"},render:e=>r.jsx(c,{...e})},a={args:{labelProps:{srOnly:!1}},render:e=>r.jsx(u,{legend:"Når er du født?",labelProps:{variant:"medium"},children:r.jsxs(g,{gap:"xs",children:[r.jsx(t,{...e,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),r.jsx(t,{...e,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),r.jsx(t,{...e,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
i dato, måned, år.`,...a.parameters?.docs?.description}}};const B=["TextInput","UgyldigEpost","UnitAlign","Tallmaskering","Datovelger"];export{a as Datovelger,l as Tallmaskering,n as TextInput,o as UgyldigEpost,s as UnitAlign,B as __namedExportsOrder,V as default};
