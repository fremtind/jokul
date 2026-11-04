import{r as p,j as i}from"./iframe-TUFFED0e.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-C0M7gxOP.js";import{CheckboxStory as c}from"./Checkbox.stories-s1Vdqsft.js";import d from"./Help.stories-C-IwHUSM.js";import k from"./RadioButton.stories-CG_Pt-w_.js";import{RadioPanel as u}from"./RadioPanel.stories-do9M1Jco.js";import{F as g}from"./FieldGroup-DMa1Ydqo.js";import{C as h}from"./Checkbox-B8ZZWV8D.js";import{R as b}from"./RadioPanel-C0n9vwxX.js";import{H as x}from"./Help-B6E_9GaH.js";import{R as C}from"./RadioButton-_8NLiyPU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DLJCwb-8.js";import"./clsx-B-dksMZM.js";import"./Flex-DmU6KHKa.js";import"./SlotComponent-BFhEIOd8.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BMwsfj35.js";import"./usePreviousValue-CdpZGkcy.js";import"./Loader-Hc-h0ntx.js";import"./useDelayedRender-B8WUMm3L.js";import"./BaseRadioButton.stories-BHZUKGel.js";import"./BaseRadioButton-Bk8FdQaJ.js";import"./useId-BEX5oMcu.js";import"./Title-CU0TFMvp.js";import"./Card-DZ0ZPxvp.js";import"./Text-NhTT9-9v.js";import"./Tag-Be8qoHFZ.js";import"./ExpandablePanel-DUog3sHC.js";import"./useAnimatedHeightBetween-B2J5mpZe.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CGzS1_8c.js";import"./Expander-BvAmkhp_.js";import"./ChevronDownIcon-BJc0AiAb.js";import"./Icon-C6PoB_Jc.js";import"./ChevronUpIcon-pDHwrMGI.js";import"./ListItem-DJeHE4rV.js";import"./Label-BFvJnnTY.js";import"./SupportLabel-BBdm4Kql.js";import"./SuccessIcon-D_230-UA.js";import"./WarningIcon-6-22iNhZ.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
