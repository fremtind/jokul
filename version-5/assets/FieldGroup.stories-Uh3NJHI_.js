import{r as p,j as i}from"./iframe-BdWmaviw.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BKOmnt74.js";import{CheckboxStory as c}from"./Checkbox.stories-DQY-eHTX.js";import d from"./Help.stories-L4kpVj8H.js";import k from"./RadioButton.stories-DpusWH0q.js";import{RadioPanel as u}from"./RadioPanel.stories-CX5kpM0x.js";import{F as g}from"./FieldGroup-DHj2Xgem.js";import{C as h}from"./Checkbox-olK8XUyS.js";import{R as b}from"./RadioPanel-nOQLVPgZ.js";import{H as x}from"./Help-DNi9WI0m.js";import{R as C}from"./RadioButton-DPFTDGs4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DBaxw0_I.js";import"./clsx-B-dksMZM.js";import"./Flex-ChkY58m5.js";import"./SlotComponent-DMOx9ldc.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DJVizwlV.js";import"./usePreviousValue-DQoBJoDW.js";import"./Loader-B7V-oGq7.js";import"./useDelayedRender-DRrerbGe.js";import"./BaseRadioButton.stories-BzzFXnfG.js";import"./BaseRadioButton-jP-fIfoG.js";import"./useId-BGFSioNm.js";import"./Title-Bq4J3yAv.js";import"./Card-BDkCfC04.js";import"./Text-DF_BlR1D.js";import"./Tag-B5Klcgu6.js";import"./ExpandablePanel-DVr7nKyz.js";import"./useAnimatedHeightBetween-BYNuMqX2.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BHw4uWQ4.js";import"./Expander-Bbv5EgY1.js";import"./ChevronDownIcon-DkOG8azH.js";import"./Icon-sSaK8IzC.js";import"./ChevronUpIcon-D8MmVtVP.js";import"./ListItem-CUDLe_4w.js";import"./Label-Cas5GloD.js";import"./SupportLabel-BWjbr9vi.js";import"./SuccessIcon-OwGyIUk1.js";import"./WarningIcon-DHpGBjh7.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
