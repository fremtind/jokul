import{j as n,r as m}from"./iframe-U_bfD-vz.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BwFVaeH_.js";import i from"./BaseRadioButton.stories-Pt8nw8fv.js";import{F as d}from"./FieldGroup-BgAYO-Ac.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BHvPmunK.js";import"./SupportLabel-CCcWmwCn.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dtk71qB5.js";import"./Icon-bW-47p_G.js";import"./WarningIcon-DtjcIgfp.js";import"./BaseRadioButton-CGIViTaM.js";import"./Label-BxXjVMqy.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
