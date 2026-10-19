import{j as n,r as m}from"./iframe-BEpC9W95.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CvOX0Boz.js";import i from"./BaseRadioButton.stories-C1vgAbag.js";import{F as d}from"./FieldGroup-DaWf_9J6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C7cO8LGV.js";import"./SupportLabel-DDt9HPEt.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-QdX6f4yD.js";import"./Icon-CexYCzGO.js";import"./WarningIcon-DLbxzt5W.js";import"./BaseRadioButton-I4G2ivWF.js";import"./Label-DGV2rOhO.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
