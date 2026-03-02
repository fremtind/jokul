import{j as n,r as m}from"./iframe-DcJp3R4E.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BnU-qNNS.js";import i from"./BaseRadioButton.stories-CPCcXH1v.js";import{F as d}from"./FieldGroup-Jh2rpO7i.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Dc8WJCbM.js";import"./SupportLabel-hfHDPOR2.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-4VI8NK86.js";import"./Icon-Ckbr9r7j.js";import"./BaseRadioButton-BwqwG-_4.js";import"./Label-NG44WkBA.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
