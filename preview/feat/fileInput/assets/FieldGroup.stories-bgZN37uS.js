import{r as p,j as i}from"./iframe-CRaXpHkT.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DxYejNma.js";import l from"./Help.stories-BUqg1F7Y.js";import c from"./RadioButton.stories-CzuPt0jP.js";import{F as d}from"./FieldGroup-DTeaXBJW.js";import{C as k,a as u}from"./CheckboxPanel.stories-KU-UK6Lr.js";import{RadioPanel as g}from"./RadioPanel.stories-D0VuWkk4.js";import{C as h}from"./Checkbox-DCY-uhcC.js";import{R as b}from"./RadioPanel-C3z09MrA.js";import{H as x}from"./Help-D7x6zatc.js";import{R as C}from"./RadioButton-Dk8CRChI.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-8pj5X0v5.js";import"./BaseRadioButton-BMfFXaXZ.js";import"./clsx-B-dksMZM.js";import"./useId-LQSbAgNg.js";import"./Label-DnW3F5hA.js";import"./SupportLabel-Dttbqcxv.js";import"./SuccessIcon-1MvWaD6D.js";import"./Icon-DKN65L04.js";import"./WarningIcon-BiZOQpS8.js";import"./InputPanel-DRydOBTD.js";import"./Flex-BdJfajAn.js";import"./SlotComponent-la3PtC3Z.js";import"./mergeRefs-vPMqFTO4.js";import"./Button-ZsJ7SbcJ.js";import"./usePreviousValue-B2VWPyxH.js";import"./Loader-B_ZZlG_T.js";import"./useDelayedRender-CAcRMp8_.js";import"./Title-DJ71qmvE.js";import"./Card-DDB2VCo_.js";import"./Text-_QLN5D1h.js";import"./Tag-hab13CwK.js";import"./ExpandablePanel-D74u8qLy.js";import"./useAnimatedHeightBetween-CWrZy9an.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CTzAwisX.js";import"./Expander-DE9hsMx1.js";import"./ChevronDownIcon-D1fCukhn.js";import"./ChevronUpIcon-C_0T_WG0.js";import"./ListItem-CqAJ7VFz.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
