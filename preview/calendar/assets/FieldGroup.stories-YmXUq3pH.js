import{r as p,j as i}from"./iframe-BxU30nKT.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BmoEt4i4.js";import l from"./Help.stories-ChA19oi1.js";import c from"./RadioButton.stories-CJtJ7h_M.js";import{F as d}from"./FieldGroup-ChIS5fxq.js";import{C as k,a as u}from"./CheckboxPanel.stories-DygzCmmK.js";import{RadioPanel as g}from"./RadioPanel.stories-BWV4Aib9.js";import{C as h}from"./Checkbox-JLG0VphT.js";import{R as b}from"./RadioPanel-D6csrCdf.js";import{H as x}from"./Help-B09syNPq.js";import{R as C}from"./RadioButton-Ce9Xlv4Y.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DdU2AJ0V.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CGN8-xP2.js";import"./mergeRefs-Bk2r5Cxf.js";import"./BaseRadioButton.stories-Cj6TUKXa.js";import"./BaseRadioButton-DOSsIe8f.js";import"./useId-C8bFMrit.js";import"./Label-Dr7SwXea.js";import"./SupportLabel-Ec8UeccQ.js";import"./SuccessIcon-BeDUoldl.js";import"./Icon-Caq3QdbJ.js";import"./WarningIcon-DrD_niNx.js";import"./InputPanel-CHzkeT98.js";import"./Button-CtJ4wOsb.js";import"./usePreviousValue-DdRcIJOU.js";import"./Loader-qpiUfDR8.js";import"./useDelayedRender-BBBBZP2i.js";import"./Title-DjyvDs_H.js";import"./Card-BfoiXLM3.js";import"./Text-BpfsJL-F.js";import"./Tag-DJgBVfaE.js";import"./ExpandablePanel-DrxquXqT.js";import"./useAnimatedHeightBetween-DF_T5Wld.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CYBX9oE1.js";import"./Expander-BbqTWp3C.js";import"./ChevronDownIcon-BkLof0pp.js";import"./ChevronUpIcon-D5Wp7V1s.js";import"./ListItem-ucbGB_qV.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
