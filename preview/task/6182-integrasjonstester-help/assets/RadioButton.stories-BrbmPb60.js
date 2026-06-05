import{j as n,r as m}from"./iframe-DG2z7F0f.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Du3B9l11.js";import i from"./BaseRadioButton.stories-BYfsK7Wr.js";/* empty css               */import{F as p}from"./FieldGroup-DZUiwP9g.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B9J_SAca.js";import"./SupportLabel-CVRpnw4w.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DG9jaouR.js";import"./Icon-DY6lulXa.js";import"./BaseRadioButton-MsJvx6Q0.js";import"./Label-BQ1mbtSY.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
