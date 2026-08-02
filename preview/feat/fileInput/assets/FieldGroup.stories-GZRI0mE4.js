import{r as p,j as i}from"./iframe-CtQdZqot.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-6vFFvDqe.js";import l from"./Help.stories-NyENuBcz.js";import c from"./RadioButton.stories-BU4-glQV.js";import{F as d}from"./FieldGroup-DudQfqwe.js";import{C as k,a as u}from"./CheckboxPanel.stories-zl2ZkvCS.js";import{RadioPanel as g}from"./RadioPanel.stories-CfODl15h.js";import{C as h}from"./Checkbox-Cf8uCUFk.js";import{R as b}from"./RadioPanel-BPhOav0m.js";import{H as x}from"./Help-C9vFDnPG.js";import{R as C}from"./RadioButton-CCDdXsy1.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DQjCRyRS.js";import"./BaseRadioButton-PqhkThSl.js";import"./clsx-B-dksMZM.js";import"./useId-CYCKTiFE.js";import"./Label-ooiH7olt.js";import"./SupportLabel-BX-1COTD.js";import"./SuccessIcon-Dn2gDImR.js";import"./Icon-D_Fch29L.js";import"./WarningIcon-Cd9nEYj8.js";import"./InputPanel-DZD8D9rG.js";import"./Flex-DNUxPCxj.js";import"./SlotComponent-DSjlfUCt.js";import"./mergeRefs-C5gE89Lu.js";import"./Button-DWjV5VuT.js";import"./usePreviousValue-B3DHLI9M.js";import"./Loader-Cza4OYEk.js";import"./useDelayedRender-DT40NHwD.js";import"./Title-DNgBdHZS.js";import"./Card-C_c2QY3D.js";import"./Text-UUDpa8L4.js";import"./Tag-CCF_4_lR.js";import"./ExpandablePanel-B2_iRI8P.js";import"./useAnimatedHeightBetween-C8TC1sut.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D6FqmdBb.js";import"./Expander-BOSPhj7j.js";import"./ChevronDownIcon-DUuBPiWp.js";import"./ChevronUpIcon-C7PoSdyY.js";import"./ListItem-Be17xAYe.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
