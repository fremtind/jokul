import{r as p,j as i}from"./iframe-BaeIsfXD.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Df2DSFhA.js";import l from"./Help.stories-DXpImiAj.js";import c from"./RadioButton.stories-CFfgS7h4.js";import{F as d}from"./FieldGroup-CJstKT1P.js";import{C as k,a as u}from"./CheckboxPanel.stories-C3gsJgbJ.js";import{RadioPanel as g}from"./RadioPanel.stories-zIfNEzr4.js";import{C as h}from"./Checkbox-ByycO6g6.js";import{R as b}from"./RadioPanel-Bd6RM85R.js";import{H as x}from"./Help-BU3ycN-2.js";import{R as C}from"./RadioButton-N9Ky4Ail.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CVVuxryf.js";import"./Label-C1IMJ2Ou.js";import"./SupportLabel-D8QTtzMm.js";import"./SuccessIcon-2pd3aG7q.js";import"./Icon-D1VP7FbD.js";import"./WarningIcon-C98j5mof.js";/* empty css               *//* empty css               */import"./Flex-DE-oH1xi.js";import"./SlotComponent-CMy4RUFr.js";import"./mergeRefs-BdwY0niU.js";import"./BaseRadioButton.stories-xK6ykkOA.js";import"./BaseRadioButton-BoT2vOh0.js";import"./InputPanel-DImsDaFl.js";import"./Button-C5gP_j7-.js";import"./usePreviousValue-D9WD-Fq4.js";import"./Loader-C_8hyXER.js";import"./useDelayedRender-C0owDi99.js";import"./Title-1qg5mkG2.js";import"./Card-D1D9KPIa.js";import"./Text-BbtymVt4.js";import"./Tag-C9enWvVa.js";import"./ExpandablePanel-_6aZq-Of.js";import"./useAnimatedHeightBetween-DU7Q1nuc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DTc55mBE.js";import"./Expander-DPp1ybbt.js";import"./ChevronUpIcon-Dh_Z87qX.js";import"./ListItem-dsEQkQ7H.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
