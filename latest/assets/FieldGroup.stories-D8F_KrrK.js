import{r as p,j as i}from"./iframe-BffHq9Y-.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C_NNJWKA.js";import l from"./Help.stories-BU_dQayi.js";import c from"./RadioButton.stories-UYTu_Crq.js";import{F as d}from"./FieldGroup-Doirt8wK.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bivms-uJ.js";import{RadioPanel as g}from"./RadioPanel.stories-DcD8BxJF.js";import{C as h}from"./Checkbox-ByPbjaAL.js";import{R as b}from"./RadioPanel-DqtuqIKT.js";import{H as x}from"./Help-5wFVQjCE.js";import{R as C}from"./RadioButton-D2uCn7LG.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-G1Ivgv_N.js";import"./BaseRadioButton-D_QsHp-j.js";import"./clsx-B-dksMZM.js";import"./useId-CQ77dZxX.js";import"./Label-siyWVQ1Y.js";import"./SupportLabel-WB962_g3.js";import"./SuccessIcon-DCxx6_Zu.js";import"./Icon-Dgm4JdKe.js";import"./WarningIcon-D-y4s4x1.js";import"./InputPanel-CIjoW_fQ.js";import"./Flex-DY7gA-72.js";import"./SlotComponent-lbRAkx4Q.js";import"./mergeRefs-C8ud9vmv.js";import"./Button-C2l2Vkek.js";import"./usePreviousValue-B-Zg4PlL.js";import"./Loader-BUna3hIC.js";import"./useDelayedRender-5c-9iIJk.js";import"./Title-BgbAlwL3.js";import"./Card-BEUcl2k9.js";import"./Text-CawbUECh.js";import"./Tag-BBNI0rC1.js";import"./ExpandablePanel-C6TZT6ZU.js";import"./useAnimatedHeightBetween-C2rLj9yu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CnPujgj8.js";import"./Expander-Cd8RsYCl.js";import"./ChevronDownIcon--jvKvR28.js";import"./ChevronUpIcon-CZsmp_DT.js";import"./ListItem-BANmORoC.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
