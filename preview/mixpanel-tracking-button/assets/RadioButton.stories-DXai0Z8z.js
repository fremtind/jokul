import{j as n,r as m}from"./iframe-DNlyx_tI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ByqmrYM1.js";import i from"./BaseRadioButton.stories-B7xKrk-e.js";import{F as d}from"./FieldGroup-C5d_OEn-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-tFl9oDjg.js";import"./SupportLabel-CLVd2b15.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-AxeGWCG5.js";import"./Icon-mG3k-rxp.js";import"./WarningIcon-B78_aJnF.js";import"./BaseRadioButton-CM0FyFci.js";import"./Label-BVEtrlZG.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
