import{j as e}from"./iframe-BtDFJkP8.js";import{T as o}from"./TextInput-3HtnObC_.js";/* empty css               */import{F as s}from"./FieldGroup-EE3iXY-x.js";import{F as d}from"./Flex-D3WybB8L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-C_j85Iy1.js";import"./useId-D1j841OR.js";import"./Label-DdqonU-t.js";import"./SupportLabel-B3Q5-BiR.js";import"./WarningIcon-DmR8AMNG.js";import"./Icon-D5FzVccS.js";import"./BaseTextInput-JvI9oTxy.js";import"./IconButton-CLyXj4_U.js";import"./SlotComponent-jHTdA8tf.js";import"./mergeRefs-BJH5x43e.js";const C={title:"Komponenter/TextInput/TextInput",component:o,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"}},args:{label:"E-post",align:"left",inline:!1,placeholder:"ola.nordmann@eksempel.no",maxLength:80,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:"",helpLabel:"",errorLabel:""},tags:["autodocs","forms"]},r={},t={name:"Ugyldig e-post",args:{label:"E-post",defaultValue:"ola.nordmann",errorLabel:"Skriv inn en gyldig e-postadresse."}},n={name:"Unit + Align",args:{label:"Boareal",align:"right",inputMode:"numeric",maxLength:6,placeholder:"120",unit:"kvm"}},a={args:{labelProps:{srOnly:!1}},render:l=>e.jsx(s,{legend:"Når er du født?",labelProps:{variant:"medium"},children:e.jsxs(d,{gap:"xs",children:[e.jsx(o,{...l,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day",inputMode:"numeric","aria-label":"Fødselsdato dag"}),e.jsx(o,{...l,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month",inputMode:"numeric","aria-label":"Fødselsdato måned"}),e.jsx(o,{...l,maxLength:3,label:"År",placeholder:"åååå",autoComplete:"bday-year",inputMode:"numeric","aria-label":"Fødselsdato år"})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Ugyldig e-post",
  args: {
    label: "E-post",
    defaultValue: "ola.nordmann",
    errorLabel: "Skriv inn en gyldig e-postadresse."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    inputMode: "numeric",
    maxLength: 6,
    placeholder: "120",
    unit: "kvm"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
i dato, måned, år.`,...a.parameters?.docs?.description}}};const j=["TextInput","UgyldigEpost","UnitAlign","Datovelger"];export{a as Datovelger,r as TextInput,t as UgyldigEpost,n as UnitAlign,j as __namedExportsOrder,C as default};
