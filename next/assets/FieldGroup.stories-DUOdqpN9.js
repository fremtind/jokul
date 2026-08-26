import{r as n,j as i}from"./iframe-Bm6kKE0D.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BfNZfDEz.js";import l from"./Help.stories-BWfA6PQc.js";import c from"./RadioButton.stories-D2knu_5K.js";import{F as d}from"./FieldGroup-CnHgu_kT.js";import{C as k,a as u}from"./CheckboxPanel.stories-SYgwSFBs.js";import{RadioPanel as g}from"./RadioPanel.stories-BG0eb1_x.js";import{C as h}from"./Checkbox-DwaylOMe.js";import{R as b}from"./RadioPanel-BAN5CIeq.js";import{H as x}from"./Help-BjoKBcG6.js";import{R as C}from"./RadioButton-KYzZtnJU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DCbP7Fs3.js";import"./Label-DJYFbrTa.js";import"./SupportLabel-D1dpAWnf.js";import"./SuccessIcon-tt4Ugkih.js";import"./Icon-B7Phwng1.js";import"./WarningIcon-CEjwIgdn.js";import"./BaseRadioButton.stories-DdX46VKV.js";import"./BaseRadioButton-D2Qk5OF3.js";import"./InputPanel-BBJg1SYV.js";import"./Flex-BZZmCEma.js";import"./SlotComponent-CDjD078b.js";import"./mergeRefs-DbU8DW8s.js";import"./Button-DZU1ZRpl.js";import"./usePreviousValue-CB62d_Xp.js";import"./Loader-WF7uP59y.js";import"./useDelayedRender-o4dD9Vgx.js";import"./Title-jE-vKRvD.js";import"./Card-BV7xwOJq.js";import"./Text-DH9JmG4j.js";import"./Tag-BmL5_IMY.js";import"./ExpandablePanel--th4wwFp.js";import"./useAnimatedHeightBetween-Drorj6nw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BMloIEsp.js";import"./Expander-BsyIi8cK.js";import"./ChevronUpIcon-BbYo-KDV.js";import"./ListItem-B73T62T7.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
