import{r as p,j as i}from"./iframe-DBzUJUvj.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BPIdIJ8D.js";import{CheckboxStory as c}from"./Checkbox.stories-DWJ8ksBA.js";import d from"./Help.stories-GLLxmmb2.js";import k from"./RadioButton.stories-Cvr6Y7ep.js";import{RadioPanel as u}from"./RadioPanel.stories-Dp95dBLx.js";import{F as g}from"./FieldGroup-By6bSRYK.js";import{C as h}from"./Checkbox-CBYiVbHB.js";import{R as b}from"./RadioPanel-C0NHvUDe.js";import{H as x}from"./Help-lwkeT2zl.js";import{R as C}from"./RadioButton-C0_kwE8k.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BXFNxHIq.js";import"./clsx-B-dksMZM.js";import"./Flex-DqJQL-ut.js";import"./SlotComponent-TvtvgOuo.js";import"./mergeRefs-wjMnaABL.js";import"./Button-BXEcwBj8.js";import"./usePreviousValue-l_SO-8Tj.js";import"./Loader-CqcEDqUN.js";import"./useDelayedRender-CkstzTeu.js";import"./BaseRadioButton.stories-D89JCqWb.js";import"./BaseRadioButton-CDtsfRrV.js";import"./useId-BC-TyTJ2.js";import"./Title-CdHrJ6OY.js";import"./Card-DDNkf_76.js";import"./Text-lrW5JHgr.js";import"./Tag-C_sQf48X.js";import"./ExpandablePanel-CVRyIJX4.js";import"./useAnimatedHeightBetween-CPJe2pf-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CrGaYZgj.js";import"./Expander-BiqEYwbF.js";import"./ChevronDownIcon-BVbaiPLL.js";import"./Icon-C-lNmd4f.js";import"./ChevronUpIcon-TE2YaVof.js";import"./ListItem-WcJqfRG8.js";import"./Label-au_d2mKN.js";import"./SupportLabel-KJBF9G-4.js";import"./SuccessIcon-Cuj7seq0.js";import"./WarningIcon-CAg6xK0-.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
