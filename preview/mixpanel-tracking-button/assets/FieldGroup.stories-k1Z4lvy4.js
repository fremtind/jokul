import{r as n,j as i}from"./iframe-YU4Utu5b.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DhH5yXho.js";import{CheckboxStory as c}from"./Checkbox.stories-CovYzZao.js";import d from"./Help.stories-DILt5Erg.js";import k from"./RadioButton.stories-im5RARGX.js";import{RadioPanel as u}from"./RadioPanel.stories-DTQbjODl.js";import{F as g}from"./FieldGroup-EkgUAX6B.js";import{C as h}from"./Checkbox-CEci0huo.js";import{R as b}from"./RadioPanel-36hajY6i.js";import{H as x}from"./Help-bu46jme7.js";import{R as C}from"./RadioButton-BgJXtRfx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B5r0PU60.js";import"./clsx-B-dksMZM.js";import"./Flex-pAF981Jl.js";import"./SlotComponent-5MmCHjQq.js";import"./mergeRefs-DqQMIfPS.js";import"./Button-gpAOkXjn.js";import"./usePreviousValue-DMHNIO2K.js";import"./Loader-CJUJntWD.js";import"./useDelayedRender-C2F1yFwd.js";import"./useId-CySU-0SA.js";import"./Label-PYuKMfAB.js";import"./SupportLabel-C4jpFA7d.js";import"./SuccessIcon-CXjVLux5.js";import"./Icon-BKKAqJa0.js";import"./WarningIcon-CTGsGzJh.js";import"./BaseRadioButton.stories-D237JrZk.js";import"./BaseRadioButton-B2X3VuDi.js";import"./Title-CWVZbYbi.js";import"./Card-B81CBy2h.js";import"./Text-Bf1V2Wul.js";import"./Tag-Bba9QblZ.js";import"./ExpandablePanel-D9iQ26Gv.js";import"./useAnimatedHeightBetween-3DNohduG.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CNi_9Wdo.js";import"./Expander-COAmTnBH.js";import"./ChevronUpIcon-CZyu11zg.js";import"./ListItem-BsHBZ-sa.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
