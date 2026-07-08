import{r as p,j as i}from"./iframe-C_mNNbVC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-47_44HB0.js";import l from"./Help.stories-iZmkqQxS.js";import c from"./RadioButton.stories-CTC5w-ta.js";import{F as d}from"./FieldGroup-D-Uj0edf.js";import{C as k,a as u}from"./CheckboxPanel.stories-BlgCT8Y4.js";import{RadioPanel as g}from"./RadioPanel.stories-Dqq8-l90.js";import{C as h}from"./Checkbox-C947rhZo.js";import{R as b}from"./RadioPanel-qfqf_CWj.js";import{H as x}from"./Help-Cu532Y9c.js";import{R as C}from"./RadioButton-ftSy71mn.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-v1UMQU1r.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-jbWkIGbR.js";import"./mergeRefs-MlqCn0HQ.js";import"./BaseRadioButton.stories-BhyeOq_9.js";import"./BaseRadioButton-C30u4P6L.js";import"./useId-CyVNNBJ_.js";import"./Label-wwd07eAA.js";import"./SupportLabel-C55F_toD.js";import"./SuccessIcon-CbTpC7D7.js";import"./Icon-CyHgbs3A.js";import"./WarningIcon-D-0CesMg.js";import"./InputPanel-Th0eJqh7.js";import"./Button-DHZZVyst.js";import"./usePreviousValue-BFGqypZa.js";import"./Loader-CsIu-ztK.js";import"./useDelayedRender-C0QvuPYY.js";import"./Title-0yQ2s0PJ.js";import"./Card-D-pyrEmw.js";import"./Text-DevAcfSI.js";import"./Tag-Cy_cHt5x.js";import"./ExpandablePanel-Ckcr93ZG.js";import"./useAnimatedHeightBetween-BvJJxlqm.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DiL36uHX.js";import"./Expander-C3-gcVP2.js";import"./ChevronDownIcon-CvccFgCt.js";import"./ChevronUpIcon-BFZiirPC.js";import"./ListItem-B4qVJDtT.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
