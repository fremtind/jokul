import{r as p,j as i}from"./iframe-q7IQxBMM.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-O7cAbguf.js";import{CheckboxStory as c}from"./Checkbox.stories-DJu3gnF-.js";import d from"./Help.stories-DyPV8wlA.js";import k from"./RadioButton.stories-DSrOZ5iI.js";import{RadioPanel as u}from"./RadioPanel.stories-TFGITLWP.js";import{F as g}from"./FieldGroup-BFWe1BkD.js";import{C as h}from"./Checkbox-eXUwAkBN.js";import{R as b}from"./RadioPanel-BAFWpz02.js";import{H as x}from"./Help-rJpafI8z.js";import{R as C}from"./RadioButton-PW3H9ahy.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D64QAf0P.js";import"./clsx-B-dksMZM.js";import"./Flex-NCOchzRW.js";import"./SlotComponent-D2q3kM3C.js";import"./mergeRefs-BZC_UhNs.js";import"./Button-B8nD9w74.js";import"./usePreviousValue-BbiNQu1O.js";import"./Loader-6GqLy-kK.js";import"./useDelayedRender-D0vKZ4Ez.js";import"./BaseRadioButton.stories-2Yj-kRwW.js";import"./BaseRadioButton-OoCgqa_E.js";import"./useId-Rc9tdMdK.js";import"./Title-CddYxZJu.js";import"./Card-iV4WPT2H.js";import"./Text-DqSkb2Gw.js";import"./Tag-DvFjpjL2.js";import"./ExpandablePanel-CS9lQ9kz.js";import"./useAnimatedHeightBetween-qCVRZp1a.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BdYkUoNZ.js";import"./Expander-BcbDc9Qg.js";import"./ChevronDownIcon-B7LmjX2I.js";import"./Icon-C7a4nGgk.js";import"./ChevronUpIcon-BW330y1Q.js";import"./ListItem-CgC3xi1B.js";import"./Label-C97reaV0.js";import"./SupportLabel-BHvWbKSE.js";import"./SuccessIcon-qmQLKEEh.js";import"./WarningIcon-ByQqt0Bf.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
