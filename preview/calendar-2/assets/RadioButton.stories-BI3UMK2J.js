import{j as n,r as m}from"./iframe-DarWBN5d.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BJJHYJJW.js";import i from"./BaseRadioButton.stories-Wyoa8-DS.js";import{F as d}from"./FieldGroup-Bk7i1MD7.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BpJf4wXY.js";import"./SupportLabel-DIfi0VSP.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-tCuuDXkp.js";import"./Icon-BjQr04ax.js";import"./WarningIcon-Df_pdorf.js";import"./BaseRadioButton-0iGO3OsA.js";import"./Label-DVtXELzE.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
