import{r as p,j as i}from"./iframe-DXmxd_y0.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C5iMxq-I.js";import l from"./Help.stories-CC6rnYQz.js";import c from"./RadioButton.stories-6CFTYXID.js";import{F as d}from"./FieldGroup-BIx56AU8.js";import{C as k,a as u}from"./CheckboxPanel.stories-CSZ1TkJw.js";import{RadioPanel as g}from"./RadioPanel.stories-DEyZlOqR.js";import{C as h}from"./Checkbox-BlwgCcuU.js";import{R as b}from"./RadioPanel-DDBZJg7Q.js";import{H as x}from"./Help-CEnW3qr4.js";import{R as C}from"./RadioButton-Cry7F8Co.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CYpuDxJZ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BjQUKYMC.js";import"./mergeRefs-D3yO6uyu.js";import"./BaseRadioButton.stories-dsB_xfyo.js";import"./BaseRadioButton-ECwzRyBB.js";import"./useId-TdKZOOCS.js";import"./Label-ByK2DaKk.js";import"./SupportLabel-CiJyRhpW.js";import"./SuccessIcon-BrM_3dxT.js";import"./Icon-DGZU5bVl.js";import"./WarningIcon-CPDstyYC.js";import"./InputPanel-Ce6f0TIQ.js";import"./Button-Qq0cWUcS.js";import"./usePreviousValue-DvPVIu60.js";import"./Loader-6Rc0PDVY.js";import"./useDelayedRender-DcHF7lCb.js";import"./Title-DvrXxjP0.js";import"./Card-CmJIAnYl.js";import"./Text-Bq-F5rpb.js";import"./Tag-DcIZzYma.js";import"./ExpandablePanel-DMaW1z-W.js";import"./useAnimatedHeightBetween-BN9coOuq.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-MlbwRwl7.js";import"./Expander-BosU4VgA.js";import"./ChevronUpIcon-DwJUaeS_.js";import"./ListItem-Dpu2vSn9.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
