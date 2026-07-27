import{r as p,j as i}from"./iframe-DUdM8bfa.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B-ZfM_lo.js";import l from"./Help.stories-xn69GDeY.js";import c from"./RadioButton.stories-CcZ3dIir.js";import{F as d}from"./FieldGroup-DT1oK4VR.js";import{C as k,a as u}from"./CheckboxPanel.stories-CYTJzTNI.js";import{RadioPanel as g}from"./RadioPanel.stories-DRvp3DZF.js";import{C as h}from"./Checkbox-CznIzG9D.js";import{R as b}from"./RadioPanel-CP4z2C-F.js";import{H as x}from"./Help-C4bxrx7c.js";import{R as C}from"./RadioButton-b_SY5XWn.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-B-SaBnK6.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C4RwZi-9.js";import"./mergeRefs-1Bt0E_SY.js";import"./BaseRadioButton.stories-DfzwE0ZA.js";import"./BaseRadioButton-DVXU4v1d.js";import"./useId-CXNx6Z2h.js";import"./Label-zPx2PsUy.js";import"./SupportLabel-CjPo2AgO.js";import"./SuccessIcon-CXkk0Xy5.js";import"./Icon-CqDP0AtM.js";import"./WarningIcon-Cucei4Fr.js";import"./InputPanel-CftjJX2m.js";import"./Button-BRzYabYL.js";import"./usePreviousValue-BO6Td5No.js";import"./Loader-CRhriID8.js";import"./useDelayedRender-Dh-murym.js";import"./Title-B2qNdVFk.js";import"./Card-DdhO3L2P.js";import"./Text-ez1J0eX9.js";import"./Tag-CYZBhv5c.js";import"./ExpandablePanel-BWTmZ-5f.js";import"./useAnimatedHeightBetween-mWA0-Lkc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CBdnHopW.js";import"./Expander-BM02QGax.js";import"./ChevronDownIcon-Y5r0DxWT.js";import"./ChevronUpIcon-freC9lER.js";import"./ListItem-dkeCA2Pt.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
