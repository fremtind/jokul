import{j as n,r as m}from"./iframe-BLh5WKhB.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B7HZlpEu.js";import i from"./BaseRadioButton.stories-DI9v-UOi.js";import{F as d}from"./FieldGroup-Dc7YxU2G.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C-iNBN64.js";import"./SupportLabel-BkI7YTN8.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DgzhIWdX.js";import"./Icon-B5LLWZHv.js";import"./WarningIcon-2X_4-MaP.js";import"./BaseRadioButton-BA370TwV.js";import"./Label-BNHUVq9R.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
