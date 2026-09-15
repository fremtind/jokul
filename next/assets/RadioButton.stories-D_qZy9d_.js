import{j as n,r as m}from"./iframe-Dhoj6gWh.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DQ0OIPFk.js";import i from"./BaseRadioButton.stories-Dc6pWX5p.js";import{F as d}from"./FieldGroup-CaqPFQDF.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C53Hlqdd.js";import"./SupportLabel-ewM0OFrs.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Cb_bwlD9.js";import"./Icon--p5HIDpU.js";import"./WarningIcon-CfG_2gsk.js";import"./BaseRadioButton-BznhIioJ.js";import"./Label-D3eD4LEe.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
