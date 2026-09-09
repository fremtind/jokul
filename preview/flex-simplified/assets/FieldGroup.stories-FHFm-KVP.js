import{r as n,j as i}from"./iframe-wvx-g-2V.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-ApvoGiN5.js";import{CheckboxStory as c}from"./Checkbox.stories-DChFEtXa.js";import d from"./Help.stories-CjIVEW8I.js";import k from"./RadioButton.stories-Dahm4o4g.js";import{RadioPanel as u}from"./RadioPanel.stories-DbBW0Gws.js";import{F as g}from"./FieldGroup-DOZ4lOTy.js";import{C as h}from"./Checkbox-DgHbqGq7.js";import{R as b}from"./RadioPanel-B1oLcOG4.js";import{H as x}from"./Help-DKrcGnRz.js";import{R as C}from"./RadioButton-xs3Q9jtY.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BiV8r7mi.js";import"./clsx-B-dksMZM.js";import"./Flex-tyU_G5s2.js";import"./SlotComponent-CUBrCo6X.js";import"./mergeRefs-BbhurGMX.js";import"./Button-CgvcJsGI.js";import"./usePreviousValue-BeG1KQq1.js";import"./Loader-B3sordg9.js";import"./useDelayedRender-Dbc4-Cyt.js";import"./useId-Dw6jVryZ.js";import"./Label-B5rSYA0u.js";import"./SupportLabel-C3WFf-t9.js";import"./SuccessIcon-CrlzhAVs.js";import"./Icon-DgFrHBJl.js";import"./WarningIcon-CrwdHGeU.js";import"./BaseRadioButton.stories-BRL8jkdH.js";import"./BaseRadioButton-CHA4wp8i.js";import"./Title-zwPjz-KD.js";import"./Card-ByjLVOdn.js";import"./Text-DyaVk3pq.js";import"./Tag-CCQzNMc1.js";import"./ExpandablePanel-RgeTXL3l.js";import"./useAnimatedHeightBetween-DZYS4Dkg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-R__Cd6VD.js";import"./Expander-c36Onlhj.js";import"./ChevronUpIcon-ZiUckB6m.js";import"./ListItem-z1P9W5Bd.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
