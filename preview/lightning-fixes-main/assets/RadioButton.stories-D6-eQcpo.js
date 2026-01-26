import{j as n,r as m}from"./iframe-Ij3yGqIt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DjTCmhYk.js";import i from"./BaseRadioButton.stories-0jAzKrU7.js";import{F as d}from"./FieldGroup-BCkCt7gq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BiZoHpfM.js";import"./SupportLabel-Bmo50R8F.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BIQXuiQm.js";import"./Icon-CnEch3nk.js";import"./BaseRadioButton-ChP6qliY.js";import"./Label-Ni-CNFBg.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
