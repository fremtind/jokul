import{r as p,j as i}from"./iframe-BYvTgBBu.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-XF29sGU4.js";import l from"./Help.stories-DHvWl239.js";import c from"./RadioButton.stories-i8wvEZf5.js";import{F as d}from"./FieldGroup-CkRaiHum.js";import{C as k,a as u}from"./CheckboxPanel.stories-pelnRfvG.js";import{RadioPanel as g}from"./RadioPanel.stories-BUkqBGl7.js";import{C as h}from"./Checkbox-CbhjpQG5.js";import{R as b}from"./RadioPanel-DDvs0Tcc.js";import{H as x}from"./Help-BiiI9Dye.js";import{R as C}from"./RadioButton-CoqiHApu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BbVpqg2d.js";import"./Label-dy41CeVm.js";import"./SupportLabel-k6dufWar.js";import"./SuccessIcon-DFO9_1h_.js";import"./Icon-0Jb3Piq-.js";import"./WarningIcon-BJo-5HN-.js";/* empty css               *//* empty css               */import"./Flex-BzvxBo0z.js";import"./SlotComponent-DRJv2ekZ.js";import"./mergeRefs-B6mBjI57.js";import"./BaseRadioButton.stories-BfyWTku7.js";import"./BaseRadioButton-De6obMDQ.js";import"./InputPanel-D8OYBqyI.js";import"./Button-BreAdbS4.js";import"./usePreviousValue-wXmKBa77.js";import"./Loader-CZIUazSK.js";import"./useDelayedRender-C1F7K_wL.js";import"./Title-BZ0UkalP.js";import"./Card-Cf4BGoRA.js";import"./Text-DbHWw9sa.js";import"./Tag-DVFcmCci.js";import"./ExpandablePanel-C3-XZeO5.js";import"./useAnimatedHeightBetween-D1biD_fH.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BHQlwVFk.js";import"./Expander-Cj0TiMkz.js";import"./ChevronDownIcon-iAlCyfH-.js";import"./ChevronUpIcon-Ce17Y1Tn.js";import"./ListItem-De31R4jM.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
