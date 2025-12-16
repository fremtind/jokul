import{j as e}from"./jsx-runtime-DqZpzl9T.js";import"./index-siqcju79.js";import{T as n}from"./TextInput-zWRr78g7.js";/* empty css               */import{I as l}from"./IconButton-CwYjR4Na.js";import{C as s}from"./CloseIcon-BPFAU_ZX.js";import{F as d}from"./FieldGroup-BeC1Moop.js";import{F as p}from"./Flex-BO3EKfKB.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./InputGroup-COvhJdr3.js";import"./useId-CahK3IZ3.js";import"./Label-Ct8Bs2e9.js";import"./SupportLabel-clkk2LvH.js";import"./WarningIcon-BIoPmEbd.js";import"./Icon-CqyKskc7.js";import"./BaseTextInput-BeKbOWDR.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";const B={title:"Komponenter/TextInput/TextInput",component:n,parameters:{layout:"centered",controls:{expanded:!0,sort:"alpha"}},tags:["autodocs","forms"],argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"},actionButton:{control:"select",options:["Uten action","Med action"],mapping:{"Uten action":void 0,"Med action":e.jsx(l,{onClick:r=>"",children:e.jsx(s,{})})}}},args:{label:"E-post",align:"left",inline:!1,placeholder:"E-post",maxLength:25,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:""}},o={args:{}},a={name:"Unit + Align",args:{label:"Boareal",align:"right",maxLength:10,placeholder:"0",unit:"kvm"}},t={args:{labelProps:{srOnly:!1}},render:r=>e.jsx(d,{legend:"Når er du født?",labelProps:{variant:"medium"},children:e.jsxs(p,{gap:8,children:[e.jsx(n,{...r,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day","aria-label":"Fødselsdato dag"}),e.jsx(n,{...r,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month","aria-label":"Fødselsdato måned"}),e.jsx(n,{...r,maxLength:4,label:"År",placeholder:"åååå",autoComplete:"bday-year","aria-label":"Fødselsdato år"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    maxLength: 10,
    placeholder: "0",
    unit: "kvm"
  }
}`,...a.parameters?.docs?.source},description:{story:`Ved å bruke unit og align sammen vil du få et godt utgangspunkt for
nummer-baserte svar.`,...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    labelProps: {
      srOnly: false
    }
  },
  render: args => {
    return <FieldGroup legend="Når er du født?" labelProps={{
      variant: "medium"
    }}>
                <Flex gap={8}>
                    <TextInputComponent {...args} maxLength={2} label="Dag" placeholder="dd" autoComplete="bday-day" aria-label={"Fødselsdato dag"} />
                    <TextInputComponent {...args} maxLength={2} label="Måned" placeholder="mm" autoComplete="bday-month" aria-label={"Fødselsdato måned"} />
                    <TextInputComponent {...args} maxLength={4} label="År" placeholder="åååå" autoComplete="bday-year" aria-label={"Fødselsdato år"} />
                </Flex>
            </FieldGroup>;
  }
}`,...t.parameters?.docs?.source},description:{story:`Når du spør om datoer brukerne har et veldig aktivt forhold til,
som for eksempel sin egen fødselsdato kan det være til hjelp å dele opp tekstfeltet
i dato, måned, år.`,...t.parameters?.docs?.description}}};const D=["TextInput","UnitAlign","Datovelger"];export{t as Datovelger,o as TextInput,a as UnitAlign,D as __namedExportsOrder,B as default};
