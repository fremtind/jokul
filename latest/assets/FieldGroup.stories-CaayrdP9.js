import{r as n,j as i}from"./iframe-D7upYY5c.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BVRdyRCD.js";import{CheckboxStory as c}from"./Checkbox.stories-Deo3dRO8.js";import d from"./Help.stories-CooTm_da.js";import k from"./RadioButton.stories-QXyJVAqC.js";import{RadioPanel as u}from"./RadioPanel.stories-o9xrzQZJ.js";import{F as g}from"./FieldGroup-CJKRsCxy.js";import{C as h}from"./Checkbox-Cl3pupzn.js";import{R as b}from"./RadioPanel-C-xPzy9t.js";import{H as x}from"./Help-Bzc7-Oy4.js";import{R as C}from"./RadioButton-x8tSoRbG.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B7xt53Fn.js";import"./clsx-B-dksMZM.js";import"./Flex-Zq4juz9d.js";import"./SlotComponent-CVs4UBRo.js";import"./mergeRefs-jfUaLMSN.js";import"./Button-zY7tvP5K.js";import"./usePreviousValue-zWvAZfDp.js";import"./Loader-BpfQvpCK.js";import"./useDelayedRender-D0vDkmzN.js";import"./useId-DbCQwEhX.js";import"./Label-Dv_2Lq2P.js";import"./SupportLabel-Cc-OmoOL.js";import"./SuccessIcon-BrqVnmDE.js";import"./Icon-DikkJyQA.js";import"./WarningIcon-8eiyg0RW.js";import"./BaseRadioButton.stories-4Bll_9te.js";import"./BaseRadioButton-BI2Rb3Rm.js";import"./Title-BRzdY8Fb.js";import"./Card-D7QEc_m0.js";import"./Text-DVQDvN0F.js";import"./Tag-ZSAYWdNH.js";import"./ExpandablePanel-DKT-SPCC.js";import"./useAnimatedHeightBetween-DeOPNVqM.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-iRPyTOm1.js";import"./Expander-BNZrmkYK.js";import"./ChevronUpIcon-DHkyq0H4.js";import"./ListItem-6IJlCaCY.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
