import{r as p,j as i}from"./iframe-BESaWyIY.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DIyQBQ5X.js";import l from"./Help.stories-DZNZrS0h.js";import c from"./RadioButton.stories-DoAMwIoB.js";import{F as d}from"./FieldGroup-dcHeKLx7.js";import{C as k,a as u}from"./CheckboxPanel.stories-CGZPxyJ-.js";import{RadioPanel as g}from"./RadioPanel.stories-DxW0rN24.js";import{C as h}from"./Checkbox-DiHttZ2W.js";import{R as b}from"./RadioPanel-BD4sBuSW.js";import{H as x}from"./Help-3WgVEW0U.js";import{R as C}from"./RadioButton-KlS-H2Td.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Bb9tpTGK.js";import"./BaseRadioButton-ClxflWVr.js";import"./clsx-B-dksMZM.js";import"./useId-B7SJbAvb.js";import"./Label-C2w0RKgF.js";import"./SupportLabel-B_9eL8xk.js";import"./SuccessIcon-DU_oB05m.js";import"./Icon-CMvZzIhB.js";import"./WarningIcon-DDCsJM7Z.js";import"./InputPanel-DvDKuha9.js";import"./Flex-Cnx9sOOL.js";import"./SlotComponent-F8pUeNZL.js";import"./mergeRefs-RUJcd6sw.js";import"./Button-CNq415sx.js";import"./usePreviousValue-BL2phenD.js";import"./Loader-B4WhZxad.js";import"./useDelayedRender-B8OT2owa.js";import"./Title-DjDi5Nva.js";import"./Card-EbUNoRCG.js";import"./Text-BWAQSHrD.js";import"./Tag-C_I5g9S9.js";import"./ExpandablePanel-BlcVsOiH.js";import"./useAnimatedHeightBetween-GsZDvlWC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-8jiXVn5h.js";import"./Expander-vXpRQZFm.js";import"./ChevronDownIcon-B6IsvkbU.js";import"./ChevronUpIcon-BHv2bNzw.js";import"./ListItem-7ExyQSCr.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
