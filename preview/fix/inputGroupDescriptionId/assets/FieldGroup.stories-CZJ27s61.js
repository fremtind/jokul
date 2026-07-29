import{r as p,j as i}from"./iframe-CXbEdO1B.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CZR4pwQ3.js";import l from"./Help.stories-DGbVQmzC.js";import c from"./RadioButton.stories-BSwX3gia.js";import{F as d}from"./FieldGroup-Csk8e5yJ.js";import{C as k,a as u}from"./CheckboxPanel.stories-dNDOpEDx.js";import{RadioPanel as g}from"./RadioPanel.stories-Cg7B4m3H.js";import{C as h}from"./Checkbox-D_a-rcUg.js";import{R as b}from"./RadioPanel-Drd6EI0O.js";import{H as x}from"./Help-BTV60FOh.js";import{R as C}from"./RadioButton-BF2NxS52.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BfKNIgy4.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DqKs99tw.js";import"./mergeRefs-TNXN9vrA.js";import"./BaseRadioButton.stories-CP9ByGj4.js";import"./BaseRadioButton-B8kjrgi4.js";import"./useId-DUiuu6Sb.js";import"./Label-rDUoY7Vq.js";import"./SupportLabel-BN8RoPYf.js";import"./SuccessIcon-B9Tyskft.js";import"./Icon-kTxURkV4.js";import"./WarningIcon-BldD50S6.js";import"./InputPanel-ZbnSVstW.js";import"./Button-B81RarQ9.js";import"./usePreviousValue-CcZZ_J9P.js";import"./Loader-C3yVaWCF.js";import"./useDelayedRender-D5EcKGqO.js";import"./Title-DRmXktyb.js";import"./Card-C-qclqNw.js";import"./Text-CdifkbeP.js";import"./Tag-C7iUbmuY.js";import"./ExpandablePanel-y3lXu7qk.js";import"./useAnimatedHeightBetween-CsEBCHKs.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DO5l-u2_.js";import"./Expander-BJ8eHjDM.js";import"./ChevronDownIcon-GsUJC8bZ.js";import"./ChevronUpIcon-BD5pPVz5.js";import"./ListItem-C5_HEzhe.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
