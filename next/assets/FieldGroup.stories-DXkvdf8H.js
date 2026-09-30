import{r as n,j as i}from"./iframe-C2XFszDf.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BODFpWGk.js";import{CheckboxStory as c}from"./Checkbox.stories-DO31B-3c.js";import d from"./Help.stories-DTO2hfx5.js";import k from"./RadioButton.stories-8ipxK5fV.js";import{RadioPanel as u}from"./RadioPanel.stories-AAPBUeCZ.js";import{F as g}from"./FieldGroup-Bkc39T0l.js";import{C as h}from"./Checkbox-C2frLbAL.js";import{R as b}from"./RadioPanel-BTe9vnuR.js";import{H as x}from"./Help-DMVO2oyc.js";import{R as C}from"./RadioButton-WtQZ2UtZ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bnxdr-VL.js";import"./clsx-B-dksMZM.js";import"./Flex-BYdEQ-M8.js";import"./SlotComponent-CsySloKY.js";import"./mergeRefs-ky2digOM.js";import"./Button-CaAMmtYd.js";import"./usePreviousValue-fNWBYZnn.js";import"./Loader-DuGQjjVm.js";import"./useDelayedRender-CVeLxtK8.js";import"./useId-BOFq2vqU.js";import"./Label-J790fuMB.js";import"./SupportLabel-D30dPyZl.js";import"./SuccessIcon-hIoVSMPH.js";import"./Icon-DQZoYK-v.js";import"./WarningIcon-BsaDaeeR.js";import"./BaseRadioButton.stories-0M6XO6dn.js";import"./BaseRadioButton-Dvwp2h7q.js";import"./Title-CpkHzkTy.js";import"./Card-h1SvEtSA.js";import"./Text-BbzvfkfH.js";import"./Tag-LrQ29fh1.js";import"./ExpandablePanel-qfOzkWuq.js";import"./useAnimatedHeightBetween-Czs9VFuo.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BBAzyMIZ.js";import"./Expander-CulvieWJ.js";import"./ChevronUpIcon-DioTYnQi.js";import"./ListItem-CrcM-HT2.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
