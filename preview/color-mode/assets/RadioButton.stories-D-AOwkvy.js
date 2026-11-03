import{j as n,r as m}from"./iframe-DgpoztGT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CYHfmpp2.js";import i from"./BaseRadioButton.stories-B7e6TFIf.js";import{F as d}from"./FieldGroup-oe7Un3d3.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B71GOAp2.js";import"./SupportLabel-DtaPXGGO.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D4kAr62N.js";import"./Icon-DRXG0bUE.js";import"./WarningIcon-CAephRV_.js";import"./BaseRadioButton-DWTbmLzK.js";import"./Label-2gUN2bMr.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
