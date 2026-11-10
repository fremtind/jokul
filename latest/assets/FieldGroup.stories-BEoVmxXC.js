import{r as n,j as i}from"./iframe-CKngQadI.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BbbBmVUK.js";import{CheckboxStory as c}from"./Checkbox.stories-CmtfzGXe.js";import d from"./Help.stories-D19ZOAEr.js";import k from"./RadioButton.stories-pEocVmxG.js";import{RadioPanel as u}from"./RadioPanel.stories-rR6-qFs8.js";import{F as g}from"./FieldGroup-DEXf4WDB.js";import{C as h}from"./Checkbox-DQKH3VdZ.js";import{R as b}from"./RadioPanel-B2GAwokC.js";import{H as x}from"./Help-BJNvSn4s.js";import{R as C}from"./RadioButton-Xvc9AH5d.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CcdciZTo.js";import"./clsx-B-dksMZM.js";import"./Flex-BQhJqL3M.js";import"./SlotComponent-BuEpJC1F.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D6vWi4yY.js";import"./usePreviousValue-DIPgobu8.js";import"./Loader-MKsReU9_.js";import"./useDelayedRender-CdUVuMk7.js";import"./useId-DBksgG2f.js";import"./Label-Du9Yy9SG.js";import"./SupportLabel-B8x1ROJC.js";import"./SuccessIcon-Dxozc7Et.js";import"./Icon-DSJXnuET.js";import"./WarningIcon-DzXqAcQW.js";import"./BaseRadioButton.stories-DyPotT9o.js";import"./BaseRadioButton-BAMFm2A2.js";import"./Title-DcOX8AE5.js";import"./Card-sxgIln3i.js";import"./Text-C2uxKpLK.js";import"./Tag-DAjWi15V.js";import"./ExpandablePanel-BeW_B0bW.js";import"./useAnimatedHeightBetween-Cjydm5S-.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CGwlUJsY.js";import"./Expander-ZsTlKIVG.js";import"./ChevronUpIcon-GGacsKjC.js";import"./ListItem-B3QxAA91.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
