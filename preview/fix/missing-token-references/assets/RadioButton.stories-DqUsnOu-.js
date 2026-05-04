import{j as n,r as m}from"./iframe-o0HbI-tJ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CYy-lgXI.js";import i from"./BaseRadioButton.stories-CIjq5c_2.js";import{F as d}from"./FieldGroup-BuA14_6O.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-_rMxyb4Z.js";import"./SupportLabel-h5jJ_w4j.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Dk7mGQuE.js";import"./Icon-BfofD_DC.js";import"./BaseRadioButton-CBhqoywB.js";import"./Label-zUQ8J2jy.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
