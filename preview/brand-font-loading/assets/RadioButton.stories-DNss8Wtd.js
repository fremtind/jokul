import{j as n,r as m}from"./iframe-DVoSZLws.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-xhXFC9z4.js";import i from"./BaseRadioButton.stories-D2094xJe.js";import{F as d}from"./FieldGroup-vqvaqirF.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BuePBBrJ.js";import"./SupportLabel-BdvQwJAM.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dbpx2h5v.js";import"./Icon-DgG7-j2I.js";import"./WarningIcon-DWCq6U8C.js";import"./BaseRadioButton-BimNhnlk.js";import"./Label-CwL8-y6m.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
