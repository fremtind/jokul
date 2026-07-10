import{r as p,j as i}from"./iframe-Nbyvhc3l.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D54rR_IC.js";import l from"./Help.stories-CF8mnBxg.js";import c from"./RadioButton.stories-Bqkg_E47.js";import{F as d}from"./FieldGroup-CxDVoz-c.js";import{C as k,a as u}from"./CheckboxPanel.stories-C_2TLm_J.js";import{RadioPanel as g}from"./RadioPanel.stories-Cgn_F8UR.js";import{C as h}from"./Checkbox-BT0xt-8J.js";import{R as b}from"./RadioPanel-DTu38Rnm.js";import{H as x}from"./Help-BMNjEp23.js";import{R as C}from"./RadioButton-CZAhlzhe.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BsMTSZUb.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CE_RbTfZ.js";import"./mergeRefs-CM-XL6lL.js";import"./BaseRadioButton.stories-BLsxYFkk.js";import"./BaseRadioButton-B1ElXtYT.js";import"./useId-CnwsCTHN.js";import"./Label-DcO4daEm.js";import"./SupportLabel-CxN7zWFO.js";import"./SuccessIcon-Cp-3Orh2.js";import"./Icon-QhbqWo3M.js";import"./WarningIcon-4n_dwfv2.js";import"./InputPanel-FrT0wtxS.js";import"./Button-CPTzXY_-.js";import"./usePreviousValue-2mt8iZo_.js";import"./Loader-BkO9M8dE.js";import"./useDelayedRender-B_YjZH0H.js";import"./Title-D1wfyoP0.js";import"./Card-DQbAJyJw.js";import"./Text-CCxV_zNi.js";import"./Tag-BaTxk23x.js";import"./ExpandablePanel-BxEx4tYd.js";import"./useAnimatedHeightBetween-txOs0DV5.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D3V7GId3.js";import"./Expander-BUHKNFRX.js";import"./ChevronDownIcon-CiNsoooU.js";import"./ChevronUpIcon-BwLoynIu.js";import"./ListItem-Dvm-Tqcz.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
