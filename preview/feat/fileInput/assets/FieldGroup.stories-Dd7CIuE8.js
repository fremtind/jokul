import{r as p,j as i}from"./iframe-PjEGq4Ww.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-s-qMu67S.js";import l from"./Help.stories-DmAunZl6.js";import c from"./RadioButton.stories-DE54d4LL.js";import{F as d}from"./FieldGroup-BPk_3Z74.js";import{C as k,a as u}from"./CheckboxPanel.stories-Djau4b7N.js";import{RadioPanel as g}from"./RadioPanel.stories-C1502SPr.js";import{C as h}from"./Checkbox-Daeunk8u.js";import{R as b}from"./RadioPanel-CsmRufle.js";import{H as x}from"./Help-D3iUDCMj.js";import{R as C}from"./RadioButton-BYPdi6Ye.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-B_lm63rc.js";import"./BaseRadioButton-Bk8_JX6P.js";import"./clsx-B-dksMZM.js";import"./useId-B3bxqwye.js";import"./Label-BV2nNllb.js";import"./SupportLabel-B7fBVH6_.js";import"./SuccessIcon-Ba3WWZ4j.js";import"./Icon-DD6feRjE.js";import"./WarningIcon-lR9VqVQ-.js";import"./InputPanel-CTnnnFZP.js";import"./Flex-DrZy7CDx.js";import"./SlotComponent-DrdPyowy.js";import"./mergeRefs-Ch9e8n5X.js";import"./Button-BJUva9b3.js";import"./usePreviousValue-D3QdiY1k.js";import"./Loader-CGS_-b3S.js";import"./useDelayedRender-DQCtd_I7.js";import"./Title-CR1OfPI_.js";import"./Card-D20hWnIp.js";import"./Text-BCIP9sLg.js";import"./Tag-D8l9U5zX.js";import"./ExpandablePanel-BD5hDOxZ.js";import"./useAnimatedHeightBetween-CP4iTACL.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D10aHVDS.js";import"./Expander-MzeuhOsx.js";import"./ChevronDownIcon-BKsbDl-H.js";import"./ChevronUpIcon-6JiCaceL.js";import"./ListItem-86Lpz9hK.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
