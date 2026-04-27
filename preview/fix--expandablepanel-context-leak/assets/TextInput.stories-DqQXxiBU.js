import{j as e}from"./iframe-CTbQ37GR.js";import{T as n}from"./TextInput-DX8Q6fVb.js";/* empty css               */import{F as l}from"./FieldGroup-B55XFKeH.js";import{F as s}from"./Flex-CV5d1Oa-.js";import{I as d}from"./IconButton-Cwhsurn4.js";import{C as p}from"./CloseIcon-CPECvnfN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-mIS6WzCb.js";import"./useId-9xkqMgJy.js";import"./Label-CBdtC75F.js";import"./SupportLabel-C3WxlAcS.js";import"./WarningIcon-DhbtjuSN.js";import"./Icon-DH3AneDh.js";import"./BaseTextInput-CH0gSeUJ.js";import"./SlotComponent-Broje9WZ.js";import"./mergeRefs-Brrq9sk_.js";const U={title:"Komponenter/TextInput/TextInput",component:n,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"},actionButton:{control:"select",options:["Uten action","Med action"],mapping:{"Uten action":void 0,"Med action":e.jsx(d,{onClick:r=>"",children:e.jsx(p,{})})}}},args:{label:"E-post",align:"left",inline:!1,placeholder:"E-post",maxLength:25,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:""}},o={},a={name:"Unit + Align",args:{label:"Boareal",align:"right",maxLength:10,placeholder:"0",unit:"kvm"}},t={args:{labelProps:{srOnly:!1}},render:r=>e.jsx(l,{legend:"Når er du født?",labelProps:{variant:"medium"},children:e.jsxs(s,{gap:"xs",children:[e.jsx(n,{...r,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day","aria-label":"Fødselsdato dag"}),e.jsx(n,{...r,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month","aria-label":"Fødselsdato måned"}),e.jsx(n,{...r,maxLength:4,label:"År",placeholder:"åååå",autoComplete:"bday-year","aria-label":"Fødselsdato år"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
i dato, måned, år.`,...t.parameters?.docs?.description}}};const A=["TextInput","UnitAlign","Datovelger"];export{t as Datovelger,o as TextInput,a as UnitAlign,A as __namedExportsOrder,U as default};
