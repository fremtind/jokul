import{j as e}from"./iframe-BFenp-hc.js";import{T as n}from"./TextInput-tnwMaZr4.js";/* empty css               */import{I as l}from"./IconButton-DeRJXr98.js";import{C as s}from"./CloseIcon-0UiAeCfz.js";import{F as d}from"./FieldGroup-B0gcks0G.js";import{F as p}from"./Flex-CL-QSou9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./InputGroup-DW-vnUj_.js";import"./useId-BdJSV1WM.js";import"./Label-BbYmZYGT.js";import"./SupportLabel-D7lVbcoL.js";import"./WarningIcon-WbiLtCkr.js";import"./Icon-CGS143Wr.js";import"./BaseTextInput-X3dts0bZ.js";import"./SlotComponent-N_Y7aQAl.js";import"./mergeRefs-BJRndm5D.js";const U={title:"Komponenter/TextInput/TextInput",component:n,argTypes:{type:{control:"text"},maxLength:{type:"number"},unit:{type:"string"},actionButton:{control:"select",options:["Uten action","Med action"],mapping:{"Uten action":void 0,"Med action":e.jsx(l,{onClick:r=>"",children:e.jsx(s,{})})}}},args:{label:"E-post",align:"left",inline:!1,placeholder:"E-post",maxLength:25,unit:"",disabled:!1,readOnly:!1,defaultValue:"",description:""}},o={},a={name:"Unit + Align",args:{label:"Boareal",align:"right",maxLength:10,placeholder:"0",unit:"kvm"}},t={args:{labelProps:{srOnly:!1}},render:r=>e.jsx(d,{legend:"Når er du født?",labelProps:{variant:"medium"},children:e.jsxs(p,{gap:"xs",children:[e.jsx(n,{...r,maxLength:2,label:"Dag",placeholder:"dd",autoComplete:"bday-day","aria-label":"Fødselsdato dag"}),e.jsx(n,{...r,maxLength:2,label:"Måned",placeholder:"mm",autoComplete:"bday-month","aria-label":"Fødselsdato måned"}),e.jsx(n,{...r,maxLength:4,label:"År",placeholder:"åååå",autoComplete:"bday-year","aria-label":"Fødselsdato år"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
