import{r as n,j as i}from"./iframe-C2ZmbiLT.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DhMoJ0UC.js";import l from"./Help.stories-D7oMNQCi.js";import c from"./RadioButton.stories-Dn0LdKSg.js";import{F as d}from"./FieldGroup-CU0O-JpF.js";import{C as k,a as u}from"./CheckboxPanel.stories-BKgszND-.js";import{RadioPanel as g}from"./RadioPanel.stories-DY9TlWfB.js";import{C as h}from"./Checkbox-C8TT1tj1.js";import{R as b}from"./RadioPanel-DugA-SHP.js";import{H as x}from"./Help-aEqo6tmz.js";import{R as C}from"./RadioButton-DI2eiBhT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BV6BdQbq.js";import"./Label-ChzpXHc6.js";import"./SupportLabel-B1Q9_Ai7.js";import"./SuccessIcon-CM_pQSDj.js";import"./Icon-D9NnWShw.js";import"./WarningIcon-DagbCNzO.js";import"./BaseRadioButton.stories-BYehcocz.js";import"./BaseRadioButton-DAcZUZao.js";import"./InputPanel-fQ2JrfZo.js";import"./Flex-DXgRj_RO.js";import"./SlotComponent-yzNv9ntj.js";import"./mergeRefs-DU_-6hD9.js";import"./Button-tNdC8uhg.js";import"./usePreviousValue-CFHszDuJ.js";import"./Loader-DSxBMOP6.js";import"./useDelayedRender-B0VUcnao.js";import"./Title-DcCIQ10L.js";import"./Card-mIWygaZK.js";import"./Text-C7WQDxJ_.js";import"./Tag-DXyEWjg6.js";import"./ExpandablePanel-D3qRyJC4.js";import"./useAnimatedHeightBetween-D3zKAzgX.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C8x3m3YM.js";import"./Expander-CSQBf0Mm.js";import"./ChevronUpIcon-BaX_kUk2.js";import"./ListItem-CR2MGq6X.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
