import{r as p,j as i}from"./iframe-CKVt722I.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D_ieDinx.js";import{CheckboxStory as c}from"./Checkbox.stories-KTJMRI7q.js";import d from"./Help.stories-0786vHWe.js";import k from"./RadioButton.stories-Cf1c4cBp.js";import{RadioPanel as u}from"./RadioPanel.stories-BE_Zegl3.js";import{F as g}from"./FieldGroup-Cn6k31-9.js";import{C as h}from"./Checkbox-38Elfahm.js";import{R as b}from"./RadioPanel-DrEU2c8c.js";import{H as x}from"./Help-C9FmEYqz.js";import{R as C}from"./RadioButton-BH26btRb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DfkmO9U4.js";import"./clsx-B-dksMZM.js";import"./Flex-DtGi11Ds.js";import"./SlotComponent-Bznce0-G.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-sqaY-zUa.js";import"./usePreviousValue-DUALEIYt.js";import"./Loader-DZD5UyAz.js";import"./useDelayedRender-Cs4WMokj.js";import"./BaseRadioButton.stories-CUBAPgvY.js";import"./BaseRadioButton-BA51dVIx.js";import"./useId-Bq5viX2P.js";import"./Title-CDIpaUwK.js";import"./Card-CnRHT6o0.js";import"./Text-CQaL9l4r.js";import"./Tag-D7XmWI_1.js";import"./ExpandablePanel-M-bAU0aT.js";import"./useAnimatedHeightBetween-tgtP0OeK.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DHptwcDD.js";import"./Expander-B8dAZ8U7.js";import"./ChevronDownIcon-DdGDEi7B.js";import"./Icon-D8CVEmzD.js";import"./ChevronUpIcon-BDEK_3Od.js";import"./ListItem-Cgymiec3.js";import"./Label-CEkw0Pdg.js";import"./SupportLabel-BRyq9M8s.js";import"./SuccessIcon-CR9l8rRS.js";import"./WarningIcon-B8zyywpE.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
