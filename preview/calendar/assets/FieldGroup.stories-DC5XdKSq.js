import{r as p,j as i}from"./iframe-DIiopNB3.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CFOkSC93.js";import l from"./Help.stories-4E0BiBn4.js";import c from"./RadioButton.stories-B1njM2Rs.js";import{F as d}from"./FieldGroup-BFT82oSp.js";import{C as k,a as u}from"./CheckboxPanel.stories-CtEqiiT_.js";import{RadioPanel as g}from"./RadioPanel.stories-BYawo0iB.js";import{C as h}from"./Checkbox-CBH4ibQp.js";import{R as b}from"./RadioPanel-BENN4Wy_.js";import{H as x}from"./Help-CabWXzfO.js";import{R as C}from"./RadioButton-upjYpwP3.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D_DPvSJY.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CcMsUyZy.js";import"./mergeRefs-CJavbxTn.js";import"./BaseRadioButton.stories-BghL69xo.js";import"./BaseRadioButton-BL1ES80I.js";import"./useId-DDaEoBWg.js";import"./Label-CaU1yhxi.js";import"./SupportLabel-CKxRMJDv.js";import"./SuccessIcon-DTlFWjBB.js";import"./Icon-BMAoUHn_.js";import"./WarningIcon-C8WoPLco.js";import"./InputPanel-DcNlo9Qd.js";import"./Button-D9Fa5Sam.js";import"./usePreviousValue-DyLCLSKA.js";import"./Loader-DCsJCkQJ.js";import"./useDelayedRender-B2eUJEBA.js";import"./Title-2P2EgiC-.js";import"./Card-CRiL4Q-V.js";import"./Text-Bj0ikm2P.js";import"./Tag-5HmI1fk5.js";import"./ExpandablePanel--LJcuGwH.js";import"./useAnimatedHeightBetween-amwx6o6g.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DfWj8ER3.js";import"./Expander-BWFmO1bD.js";import"./ChevronDownIcon-CNu9l4Gd.js";import"./ChevronUpIcon-Coa5ATpG.js";import"./ListItem-Mg3PAZYX.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
