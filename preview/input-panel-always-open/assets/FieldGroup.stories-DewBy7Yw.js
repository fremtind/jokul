import{r as n,j as i}from"./iframe-NC1Lmq9f.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-_GvbnmRm.js";import{CheckboxStory as c}from"./Checkbox.stories-Cg4CXbvj.js";import d from"./Help.stories-ERodl7Ve.js";import k from"./RadioButton.stories-COfwaMzu.js";import{RadioPanel as u}from"./RadioPanel.stories-CeASKbLU.js";import{F as g}from"./FieldGroup-0CLZ3oaO.js";import{C as h}from"./Checkbox-Co9CwaQy.js";import{R as b}from"./RadioPanel-WKLkGwnq.js";import{H as x}from"./Help-Dco4eJ4l.js";import{R as C}from"./RadioButton-D-njfvTK.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CqyXOsZt.js";import"./clsx-B-dksMZM.js";import"./Flex-uPTkJPKU.js";import"./SlotComponent-C9ZZyCjR.js";import"./mergeRefs-BvUnMYrt.js";import"./Button-vNjpPI1D.js";import"./usePreviousValue-D60BaYOK.js";import"./Loader-1ooJgf3z.js";import"./useDelayedRender-6uI1Lv4Y.js";import"./useId-DZLr8X4y.js";import"./Label-BsTPmh-i.js";import"./SupportLabel-nHKT8HHN.js";import"./SuccessIcon-cidQ4F48.js";import"./Icon-XKLts_3x.js";import"./WarningIcon-DsI6MigH.js";import"./BaseRadioButton.stories-DrTGYTYk.js";import"./BaseRadioButton-DKOdC4f4.js";import"./Title-BGdKXZhK.js";import"./Card-4XzBewSr.js";import"./Text-FdCn9c7I.js";import"./Tag-DB8Mu14S.js";import"./ExpandablePanel-DjidZhfn.js";import"./useAnimatedHeightBetween-BBHB5e-x.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CUootpgb.js";import"./Expander-DPc6hzo7.js";import"./ChevronUpIcon-BnArMgN2.js";import"./ListItem-BXLmug7W.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
