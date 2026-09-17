import{r as n,j as i}from"./iframe-De6Ejqi3.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BgeWNqK3.js";import{CheckboxStory as c}from"./Checkbox.stories-DJCoMSiz.js";import d from"./Help.stories-CHFHSDoz.js";import k from"./RadioButton.stories-CMZHEog-.js";import{RadioPanel as u}from"./RadioPanel.stories-BVG5mF-D.js";import{F as g}from"./FieldGroup-ByFfkK-f.js";import{C as h}from"./Checkbox-BvVRKhGa.js";import{R as b}from"./RadioPanel-De3cVOxX.js";import{H as x}from"./Help-F06nIE-S.js";import{R as C}from"./RadioButton-DQeJr0Ja.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D57nSOeZ.js";import"./clsx-B-dksMZM.js";import"./Flex-Bl0NqQ0f.js";import"./SlotComponent-BC89NloO.js";import"./mergeRefs-sm-GB2yW.js";import"./Button-XzqfJaBO.js";import"./usePreviousValue-qkAqziQy.js";import"./Loader-Bfex__nM.js";import"./useDelayedRender-KdriBex4.js";import"./useId-BLJCrD_4.js";import"./Label-CQrFV-Ds.js";import"./SupportLabel-C4leC4L9.js";import"./SuccessIcon-BVlyAb0G.js";import"./Icon-0w9oqJeO.js";import"./WarningIcon-BZPnB_ek.js";import"./BaseRadioButton.stories-B_cZx_Dc.js";import"./BaseRadioButton-B5cyp3E6.js";import"./Title-Dbwj988n.js";import"./Card-xcQXSEih.js";import"./Text-BJp3d020.js";import"./Tag-Docy4MVm.js";import"./ExpandablePanel-B3vV8QRH.js";import"./useAnimatedHeightBetween-BGSzTCe-.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cuel7J9e.js";import"./Expander-PE2-y4un.js";import"./ChevronUpIcon-BgCywOsz.js";import"./ListItem-Dfwb9w4n.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
