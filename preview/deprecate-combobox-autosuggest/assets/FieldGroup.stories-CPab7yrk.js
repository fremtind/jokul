import{r as n,j as i}from"./iframe-BKrbA7lK.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cjk6P7C8.js";import{CheckboxStory as c}from"./Checkbox.stories-BzpZxTpO.js";import d from"./Help.stories-D774TDyJ.js";import k from"./RadioButton.stories-hwwXQS38.js";import{RadioPanel as u}from"./RadioPanel.stories-CbmIdRhJ.js";import{F as g}from"./FieldGroup-BVARrSda.js";import{C as h}from"./Checkbox-DZbnPsh6.js";import{R as b}from"./RadioPanel-CcwlkVwA.js";import{H as x}from"./Help-BkomOcCv.js";import{R as C}from"./RadioButton-cuidSocL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CL7ArGTv.js";import"./clsx-B-dksMZM.js";import"./Flex-BIH2HK41.js";import"./SlotComponent-DYO9kY_H.js";import"./mergeRefs-Bqlcb2HS.js";import"./Button-N2xg9U0A.js";import"./usePreviousValue-CRpUM-Ht.js";import"./Loader-DBStCeOR.js";import"./useDelayedRender-LjJSbtDX.js";import"./useId-DAUBF6OA.js";import"./Label-CGnvbyVP.js";import"./SupportLabel-D5iRQOcj.js";import"./SuccessIcon-PeXDc43_.js";import"./Icon-CX8FRTBv.js";import"./WarningIcon-715bircG.js";import"./BaseRadioButton.stories-DyQ0XZso.js";import"./BaseRadioButton-BzCOyXD9.js";import"./Title-D487M2Ye.js";import"./Card-CnidbE-f.js";import"./Text-BZttOrjB.js";import"./Tag-Bbm0TPv-.js";import"./ExpandablePanel-CgwdnVm4.js";import"./useAnimatedHeightBetween-DCWzoHCS.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D_Sfi7wW.js";import"./Expander-B3P4sqEt.js";import"./ChevronUpIcon-nMogoHRC.js";import"./ListItem-DJm4rZYk.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
