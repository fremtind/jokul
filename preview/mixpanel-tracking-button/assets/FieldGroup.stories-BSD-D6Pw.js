import{r as n,j as i}from"./iframe-o5xXI9T2.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BzdNBMvx.js";import{CheckboxStory as c}from"./Checkbox.stories-e9yU02Ga.js";import d from"./Help.stories-DjNToShH.js";import k from"./RadioButton.stories-GyLeWGlu.js";import{RadioPanel as u}from"./RadioPanel.stories-CoNQ7Inv.js";import{F as g}from"./FieldGroup-D-L8khYi.js";import{C as h}from"./Checkbox-BRavGgTA.js";import{R as b}from"./RadioPanel-B3_up-I1.js";import{H as x}from"./Help-DIbxy_Fp.js";import{R as C}from"./RadioButton-Cjq2Etxw.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Do1C1zgT.js";import"./clsx-B-dksMZM.js";import"./Flex-BsrjzTFf.js";import"./SlotComponent-QwqktxNl.js";import"./mergeRefs-CgmAvBlj.js";import"./Button-CANYxM3R.js";import"./usePreviousValue-DiCS2DL_.js";import"./Loader-Bgg48W6O.js";import"./useDelayedRender-B8kWdbeR.js";import"./useId-DsFMDjle.js";import"./Label-DDTJR7v3.js";import"./SupportLabel-M8umW8ZG.js";import"./SuccessIcon-DUVlusU_.js";import"./Icon-4EibA9YZ.js";import"./WarningIcon-aQZmb1kY.js";import"./BaseRadioButton.stories-DBX1_xMC.js";import"./BaseRadioButton-Cnwstou3.js";import"./Title-CY0x7gSj.js";import"./Card-Cktq4Z5m.js";import"./Text-Bzqx9XEX.js";import"./Tag-C-H95SFD.js";import"./ExpandablePanel-B6v6SXmm.js";import"./useAnimatedHeightBetween-DAY8ZLRv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BrsFOqhW.js";import"./Expander-DenFmmgJ.js";import"./ChevronUpIcon-L3krhDb3.js";import"./ListItem-C8drNsOt.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
