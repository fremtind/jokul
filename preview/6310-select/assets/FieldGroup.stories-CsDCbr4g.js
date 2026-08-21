import{r as p,j as i}from"./iframe-C1NfLrqi.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BjdnRrbj.js";import l from"./Help.stories-B8JMZpJk.js";import c from"./RadioButton.stories-C9mUGf1H.js";import{F as d}from"./FieldGroup-DeO9CW0d.js";import{C as k,a as u}from"./CheckboxPanel.stories-DMwvmGiB.js";import{RadioPanel as g}from"./RadioPanel.stories-BqwirpVz.js";import{C as h}from"./Checkbox-6dJbHugU.js";import{R as b}from"./RadioPanel-CqXVWRl1.js";import{H as x}from"./Help-LZHDVp6u.js";import{R as C}from"./RadioButton-RpJzYiUV.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CsMXfNMc.js";import"./BaseRadioButton-0sdLgboL.js";import"./clsx-B-dksMZM.js";import"./useId-Bjjp-Vx3.js";import"./Label-CHYotkOa.js";import"./SupportLabel-BjPvgZdU.js";import"./SuccessIcon-DFwI9HyF.js";import"./Icon-BJWhppgC.js";import"./WarningIcon-BLjGpTsj.js";import"./InputPanel-DVvcboQ3.js";import"./Flex-EpAQnfDl.js";import"./SlotComponent-DXDipPW_.js";import"./mergeRefs-Cjjl-jWV.js";import"./Button-Z4aJAQ2-.js";import"./usePreviousValue-Crehl5o5.js";import"./Loader-C6_FEmQP.js";import"./useDelayedRender-CFbkWU4J.js";import"./Title-hGLXGcGP.js";import"./Card-Bc8kAxy-.js";import"./Text-DhihOi8g.js";import"./Tag-C6xEz1Bz.js";import"./ExpandablePanel-BEWGZl1g.js";import"./useAnimatedHeightBetween-B__geQx2.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cc06j2Fw.js";import"./Expander-CHozIfWw.js";import"./ChevronDownIcon-C1LEMHn3.js";import"./ChevronUpIcon-B4nHUTal.js";import"./ListItem-CI7BmFat.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
