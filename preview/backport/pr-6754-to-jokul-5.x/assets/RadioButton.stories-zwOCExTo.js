import{j as n,r as m}from"./iframe-BJpvCbT4.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DbQWVSkx.js";import i from"./BaseRadioButton.stories-CS4hbBtE.js";import{F as d}from"./FieldGroup-CEY98I38.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BJWLu_kn.js";import"./SupportLabel-BhlUzh_h.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BRq2V2pC.js";import"./Icon-DPlqcyC_.js";import"./WarningIcon-BepMX16y.js";import"./BaseRadioButton-DP19BhoZ.js";import"./Label-XAGFMfIC.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
