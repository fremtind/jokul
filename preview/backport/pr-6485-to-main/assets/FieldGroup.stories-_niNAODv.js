import{r as p,j as i}from"./iframe-Bs0Cqlfw.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CjVhW0a4.js";import{CheckboxStory as c}from"./Checkbox.stories-BUqLkXc6.js";import d from"./Help.stories-BvfXUd8h.js";import k from"./RadioButton.stories-CjWUa7Wb.js";import{RadioPanel as u}from"./RadioPanel.stories-DH_anvQ-.js";import{F as g}from"./FieldGroup-D9u5F5Gm.js";import{C as h}from"./Checkbox-Bl2_3AsG.js";import{R as b}from"./RadioPanel-DxYgkbnl.js";import{H as x}from"./Help-B26V_-PF.js";import{R as C}from"./RadioButton-Bp3rJCzL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-YKisNK9D.js";import"./clsx-B-dksMZM.js";import"./Flex-CsHboFCV.js";import"./SlotComponent-K6h3c7VS.js";import"./mergeRefs-CimS05_0.js";import"./Button-CSbkhBT5.js";import"./usePreviousValue-Bd6GVa6m.js";import"./Loader-BMGUPtGF.js";import"./useDelayedRender-DsmJP9tD.js";import"./BaseRadioButton.stories-BGodekD0.js";import"./BaseRadioButton-CMQfO2iS.js";import"./useId-BiVwqN8e.js";import"./Title-BehAMDGR.js";import"./Card-Bqyqdpw8.js";import"./Text-yOyesxeD.js";import"./Tag-pmVyzO5b.js";import"./ExpandablePanel-DRTNnynP.js";import"./useAnimatedHeightBetween--enTuLal.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DuoYIPh1.js";import"./Expander-BdxR5L4m.js";import"./ChevronDownIcon-DnGC1rwj.js";import"./Icon-TvVxXKgX.js";import"./ChevronUpIcon-CmqEVOAt.js";import"./ListItem-BqS2EUv-.js";import"./Label-z19zwp89.js";import"./SupportLabel-Ce7XOasm.js";import"./SuccessIcon-C-sUBhzp.js";import"./WarningIcon-1sZe7W9i.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
