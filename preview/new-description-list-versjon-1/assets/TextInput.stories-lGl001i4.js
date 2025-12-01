import{R as e}from"./index-siqcju79.js";import{T as n}from"./TextInput-CWffCVAW.js";/* empty css               */import{I as l}from"./IconButton-B7cUPyFx.js";import{C as s}from"./CloseIcon-bvBUMA_V.js";import{F as m}from"./FieldGroup-ThhHt0Sp.js";import{F as p}from"./Flex-BJkkUza_.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./InputGroup-jkm-2-wj.js";import"./useId-CahK3IZ3.js";import"./Label-tZYmh4ng.js";import"./SupportLabel-Bm3W2hYF.js";import"./ErrorIcon-BUXYVAIL.js";import"./Icon-mINJCSxV.js";import"./WarningIcon-CnuYLHnq.js";import"./BaseTextInput-Un_Ktj_I.js";import"./tokens-CmXyXTIM.js";import"./SlotComponent-DjLpilNT.js";import"./mergeRefs-CYSLoF3z.js";const B={title:"Komponenter/TextInput/TextInput",component:n,parameters:{layout:"centered",controls:{expanded:!0,sort:"alpha"}},tags:["autodocs","forms"],argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"},actionButton:{control:"select",options:["Uten action","Med action"],mapping:{"Uten action":void 0,"Med action":e.createElement(l,{onClick:r=>""},e.createElement(s,null))}}},args:{label:"E-post",align:"left",inline:!1,placeholder:"E-post",maxLength:25,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:""}},o={args:{}},t={name:"Unit + Align",args:{label:"Boareal",align:"right",maxLength:10,placeholder:"0",unit:"kvm"}},a={args:{labelProps:{srOnly:!1}},render:r=>e.createElement(m,{legend:"Når er du født?",labelProps:{variant:"medium"}},e.createElement(p,{gap:8},e.createElement(n,{...r,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day","aria-label":"Fødselsdato dag"}),e.createElement(n,{...r,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month","aria-label":"Fødselsdato måned"}),e.createElement(n,{...r,maxLength:4,label:"År",placeholder:"åååå",autoComplete:"bday-year","aria-label":"Fødselsdato år"})))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Unit + Align",
  args: {
    label: "Boareal",
    align: "right",
    maxLength: 10,
    placeholder: "0",
    unit: "kvm"
  }
}`,...t.parameters?.docs?.source},description:{story:`Ved å bruke unit og align sammen vil du få et godt utgangspunkt for
nummer-baserte svar.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`Når du spør om datoer brukerne har et veldig aktivt forhold til,
som for eksempel sin egen fødselsdato kan det være til hjelp å dele opp tekstfeltet
i dato, måned, år.`,...a.parameters?.docs?.description}}};const D=["TextInput","UnitAlign","Datovelger"];export{a as Datovelger,o as TextInput,t as UnitAlign,D as __namedExportsOrder,B as default};
