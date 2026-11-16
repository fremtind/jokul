import{r as p,j as i}from"./iframe-CealOKkv.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Byd3qQvB.js";import{CheckboxStory as c}from"./Checkbox.stories-MGTS0ueC.js";import d from"./Help.stories-Cr6fqfht.js";import k from"./RadioButton.stories-BduA-FXn.js";import{RadioPanel as u}from"./RadioPanel.stories-Bk3jRhNq.js";import{F as g}from"./FieldGroup-Bx1oo1oe.js";import{C as h}from"./Checkbox-C4NYantB.js";import{R as b}from"./RadioPanel-igloamZS.js";import{H as x}from"./Help-CJcwlGGE.js";import{R as C}from"./RadioButton-cSvxrqoa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C5RYsnv6.js";import"./clsx-B-dksMZM.js";import"./Flex-BkyhpHZj.js";import"./SlotComponent-CiM2jmHC.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D0ZL_OjJ.js";import"./usePreviousValue-CCrqAJCR.js";import"./Loader-D32rncR1.js";import"./useDelayedRender-DR1NlhZS.js";import"./BaseRadioButton.stories-IZ60aUEW.js";import"./BaseRadioButton-BCLogCHH.js";import"./useId-DlmpHPNw.js";import"./Title-BfVfA3oP.js";import"./Card-CoKpcdaa.js";import"./Text-B-Uducdy.js";import"./Tag-BXmMVFyS.js";import"./ExpandablePanel-BQ0_MkLT.js";import"./useAnimatedHeightBetween-DWSgEHSR.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D-KQrKo2.js";import"./Expander-DVMipMbh.js";import"./ChevronDownIcon-CiUYkMdM.js";import"./Icon-CWx273BR.js";import"./ChevronUpIcon-BWAaIYD5.js";import"./ListItem-DzhryD_6.js";import"./Label-X9PTW0Nx.js";import"./SupportLabel-BQAysLfB.js";import"./SuccessIcon-C5pFxrZL.js";import"./WarningIcon-DgI67v5F.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
