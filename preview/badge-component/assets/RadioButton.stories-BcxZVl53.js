import{j as n,r as m}from"./iframe-BpMAOOay.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D-OOW65h.js";import i from"./BaseRadioButton.stories-CKTDwZB5.js";import{F as d}from"./FieldGroup-CoA5FIL5.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D3GDJ60I.js";import"./SupportLabel-CE3b_Xvb.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BUzW7O1C.js";import"./Icon-BOeDsiIE.js";import"./WarningIcon-P7PnRx0A.js";import"./BaseRadioButton-CGWbPLiv.js";import"./Label-C0zsIoNN.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
