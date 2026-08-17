import{r as p,j as i}from"./iframe-ZaQY9TES.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-J9gdKiKv.js";import l from"./Help.stories-xtT9BsAe.js";import c from"./RadioButton.stories-DRMj4TyR.js";import{F as d}from"./FieldGroup-CKt4ZZgZ.js";import{C as k,a as u}from"./CheckboxPanel.stories-CQ7ivjyr.js";import{RadioPanel as g}from"./RadioPanel.stories-C0WCkldl.js";import{C as h}from"./Checkbox-BiPMztLf.js";import{R as b}from"./RadioPanel-DTwnc_Dn.js";import{H as x}from"./Help-CJV1VkfK.js";import{R as C}from"./RadioButton-CFZ0qrTu.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CFdIrwva.js";import"./BaseRadioButton-D2KPSnPH.js";import"./clsx-B-dksMZM.js";import"./useId-CLupJ3_7.js";import"./Label-DWqaiRcK.js";import"./SupportLabel-CwLDWYwG.js";import"./SuccessIcon-D3EBThdu.js";import"./Icon-D1B3-uv7.js";import"./WarningIcon-DJvKrB-H.js";import"./InputPanel-xhDxi9Lg.js";import"./Flex-HqaP7SOa.js";import"./SlotComponent-BgoLUgKX.js";import"./mergeRefs-Sp57JHAp.js";import"./Button-B8CDBdGd.js";import"./usePreviousValue-BTHEyhUk.js";import"./Loader-CA-jD-TZ.js";import"./useDelayedRender-CYh9x8Xg.js";import"./Title-Cp6r0KtT.js";import"./Card-Cwb2FCHt.js";import"./Text-CUBTBveq.js";import"./Tag-CAoZV5da.js";import"./ExpandablePanel-C-Mxbx1Q.js";import"./useAnimatedHeightBetween-Bohg4AVo.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BsISc8yl.js";import"./Expander-pRFFlwKI.js";import"./ChevronDownIcon-BHkYjhoG.js";import"./ChevronUpIcon-B0lcEBLh.js";import"./ListItem-TigzBO1-.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
