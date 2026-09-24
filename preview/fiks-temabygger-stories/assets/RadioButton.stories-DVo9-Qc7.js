import{j as n,r as m}from"./iframe-CJ_YRqrh.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BRZIRi3D.js";import i from"./BaseRadioButton.stories-C4FSSFpP.js";import{F as d}from"./FieldGroup-BEtx1_1h.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bd68ajHp.js";import"./SupportLabel-DveM9eyw.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-d980i90z.js";import"./Icon-CT2AkY6r.js";import"./WarningIcon-gRnqbHvL.js";import"./BaseRadioButton-DVRpYdnh.js";import"./Label-D_0rpg_Y.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
