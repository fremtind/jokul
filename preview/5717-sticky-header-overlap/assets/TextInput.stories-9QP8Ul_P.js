import{j as e}from"./iframe-C5z_sbDv.js";import{T as n}from"./TextInput-CAP9CrXF.js";/* empty css               */import{I as l}from"./IconButton-D5pMECGf.js";import{C as s}from"./CloseIcon-Bnlx-1R7.js";import{F as d}from"./FieldGroup-DQpTdCPj.js";import{F as p}from"./Flex-DKwoBXaI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-CLPvIHoM.js";import"./useId-B4-yetQ_.js";import"./Label-BUOOjVnO.js";import"./SupportLabel-C-FIS_r_.js";import"./WarningIcon-CpBSpxC0.js";import"./Icon-CoEfuoEs.js";import"./BaseTextInput-C6yGJTK7.js";import"./tokens-d2GYn7oW.js";import"./SlotComponent-CnrrpCJ5.js";import"./mergeRefs-DgEu2Moh.js";const A={title:"Komponenter/TextInput/TextInput",component:n,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"},actionButton:{control:"select",options:["Uten action","Med action"],mapping:{"Uten action":void 0,"Med action":e.jsx(l,{onClick:r=>"",children:e.jsx(s,{})})}}},args:{label:"E-post",align:"left",inline:!1,placeholder:"E-post",maxLength:25,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:""}},o={},a={name:"Unit + Align",args:{label:"Boareal",align:"right",maxLength:10,placeholder:"0",unit:"kvm"}},t={args:{labelProps:{srOnly:!1}},render:r=>e.jsx(d,{legend:"Når er du født?",labelProps:{variant:"medium"},children:e.jsxs(p,{gap:"xs",children:[e.jsx(n,{...r,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day","aria-label":"Fødselsdato dag"}),e.jsx(n,{...r,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month","aria-label":"Fødselsdato måned"}),e.jsx(n,{...r,maxLength:4,label:"År",placeholder:"åååå",autoComplete:"bday-year","aria-label":"Fødselsdato år"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                <Flex gap="xs">
                    <TextInputComponent {...args} maxLength={2} label="Dag" placeholder="dd" autoComplete="bday-day" aria-label={"Fødselsdato dag"} />
                    <TextInputComponent {...args} maxLength={2} label="Måned" placeholder="mm" autoComplete="bday-month" aria-label={"Fødselsdato måned"} />
                    <TextInputComponent {...args} maxLength={4} label="År" placeholder="åååå" autoComplete="bday-year" aria-label={"Fødselsdato år"} />
                </Flex>
            </FieldGroup>;
  }
}`,...t.parameters?.docs?.source},description:{story:`Når du spør om datoer brukerne har et veldig aktivt forhold til,
som for eksempel sin egen fødselsdato kan det være til hjelp å dele opp tekstfeltet
i dato, måned, år.`,...t.parameters?.docs?.description}}};const B=["TextInput","UnitAlign","Datovelger"];export{t as Datovelger,o as TextInput,a as UnitAlign,B as __namedExportsOrder,A as default};
