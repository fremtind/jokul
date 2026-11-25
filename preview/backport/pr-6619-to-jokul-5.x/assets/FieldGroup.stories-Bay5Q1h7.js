import{r as p,j as i}from"./iframe-DsTuScF2.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BRbIiO6a.js";import{CheckboxStory as c}from"./Checkbox.stories-iaxyKlnA.js";import d from"./Help.stories-CR0F4wT2.js";import k from"./RadioButton.stories-OI8uFyef.js";import{RadioPanel as u}from"./RadioPanel.stories-Dt8gyj8X.js";import{F as g}from"./FieldGroup-Bewn5luT.js";import{C as h}from"./Checkbox-DRDgNeMu.js";import{R as b}from"./RadioPanel-C_TSuJzt.js";import{H as x}from"./Help-CL1Pso7k.js";import{R as C}from"./RadioButton-BkfjmE9_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DU9HTLCa.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-CHWjWwPO.js";import"./SlotComponent-CPH25iyA.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BOXpiUqq.js";import"./usePreviousValue-ko7WMQ3F.js";import"./Loader-bvMS9QwU.js";import"./useDelayedRender-DFm8zXnl.js";import"./BaseRadioButton.stories-DM6tnlrA.js";import"./BaseRadioButton-VbxUdEuB.js";import"./useId-2u9dESGf.js";import"./Title-Csd8SzZd.js";import"./Card-DvzX9wGy.js";import"./Text-Dc6H6_FN.js";import"./Tag-suKs739b.js";import"./ExpandablePanel-YYqMDKtL.js";import"./useAnimatedHeightBetween-C5OX_Lwh.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D15xDzJ4.js";import"./Expander-CKKkfpJw.js";import"./ChevronDownIcon-BS1SmfH1.js";import"./Icon-BdAFmkkd.js";import"./ChevronUpIcon-CFBXUAJK.js";import"./ListItem-kLOSongO.js";import"./Label-BTjbeN1O.js";import"./SupportLabel-Dw3FKZDp.js";import"./SuccessIcon-DHcjtxny.js";import"./WarningIcon-0V-TpBDR.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
