import{r as p,j as i}from"./iframe-EPvOlv_F.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DOuU9rm1.js";import l from"./Help.stories-7JsTvmDs.js";import c from"./RadioButton.stories-BTip1yDM.js";import{F as d}from"./FieldGroup-DFsmQcWj.js";import{C as k,a as u}from"./CheckboxPanel.stories-D5jyDQJh.js";import{RadioPanel as g}from"./RadioPanel.stories-DyezWqnH.js";import{C as h}from"./Checkbox-CkoAKQD5.js";import{R as b}from"./RadioPanel-B1lZ2gun.js";import{H as x}from"./Help-sb03zkOn.js";import{R as C}from"./RadioButton-D4kHjMxE.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Oi0axBVJ.js";import"./BaseRadioButton-Vk8FjGem.js";import"./clsx-B-dksMZM.js";import"./useId-CqIl3Kfh.js";import"./Label-Ww55hA2i.js";import"./SupportLabel-BLgrsNEN.js";import"./SuccessIcon-nftInbf3.js";import"./Icon-DKP1ftMT.js";import"./WarningIcon-CaBWEXmc.js";import"./InputPanel-KuOhhRyq.js";import"./Flex-nSztWOmI.js";import"./SlotComponent-B54SKzKH.js";import"./mergeRefs-BxTdfp7q.js";import"./Button-I5dUsh7u.js";import"./usePreviousValue-B9IG-bCw.js";import"./Loader-ZCvHG8Ya.js";import"./useDelayedRender-yP3kqHMz.js";import"./Title-B9V_GuYw.js";import"./Card-MVM2cC-1.js";import"./Text-DdvZaq8e.js";import"./Tag-RCjr9-EF.js";import"./ExpandablePanel-Ciq_FsvN.js";import"./useAnimatedHeightBetween-BngEihyp.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-o-ek3WHf.js";import"./Expander-CSryXg7A.js";import"./ChevronDownIcon-O4FEjsLT.js";import"./ChevronUpIcon-C1FNM7oE.js";import"./ListItem-BEP-SrVa.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
