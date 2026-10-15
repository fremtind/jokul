import{r as p,j as i}from"./iframe-zpIsUMYL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-CjcO6H9y.js";import{CheckboxStory as l}from"./Checkbox.stories-Z7XaQw1_.js";import c from"./Help.stories-BD9Y4MG5.js";import d from"./RadioButton.stories-O26uMlwI.js";import{RadioPanel as k}from"./RadioPanel.stories-Du2tzG-c.js";import{F as u}from"./FieldGroup-DEBJTo3H.js";import{C as g}from"./Checkbox-DbBrlpJ7.js";import{C as h}from"./CheckboxPanel-e5iE8oJ2.js";import{R as b}from"./RadioPanel-CHxnbLBo.js";import{H as x}from"./Help-CANkJa_U.js";import{R as C}from"./RadioButton-C9NdeOeD.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-CZ44juCk.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BvyvmNvi.js";import"./mergeRefs-C5B2LNbB.js";import"./Button-CkyzHkqu.js";import"./usePreviousValue-D0qsaQ1K.js";import"./Loader-BIWB7Xr8.js";import"./useDelayedRender-CfgF7us7.js";import"./InputPanel-BqE_X7Jx.js";import"./useId-DxELmYub.js";import"./SupportLabel-dfQt5yi0.js";import"./SuccessIcon-CJuqG36J.js";import"./Icon-DhWlKq84.js";import"./WarningIcon-BZW7TVg4.js";import"./BaseRadioButton-mJi_EkXC.js";import"./Label-CdX-08tO.js";import"./BaseRadioButton.stories-Cb8qIN5u.js";import"./Title-QFywjyFi.js";import"./Card-DSRF0S2C.js";import"./Text--ItatX3e.js";import"./Tag-DVPUbmgA.js";import"./ExpandablePanel-BENunNWB.js";import"./useAnimatedHeightBetween-Bz38v7IZ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CC5_eeAJ.js";import"./Expander-BxJcTuOJ.js";import"./ChevronUpIcon-DzsyB7zN.js";import"./ListItem-yIz4zSE6.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
