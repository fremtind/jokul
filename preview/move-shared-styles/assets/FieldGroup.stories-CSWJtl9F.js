import{r as p,j as i}from"./iframe-DMeItWK-.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CSw-dKnK.js";import l from"./Help.stories-BFFB1SpF.js";import c from"./RadioButton.stories-B1VzGlP7.js";import{F as d}from"./FieldGroup-BP9h85MB.js";import{C as k,a as u}from"./CheckboxPanel.stories-B2q0qInU.js";import{RadioPanel as g}from"./RadioPanel.stories-BRdWexft.js";import{C as h}from"./Checkbox-CRxwL4sJ.js";import{R as b}from"./RadioPanel-DWR-cYiH.js";import{H as x}from"./Help-Cn_u0kIF.js";import{R as C}from"./RadioButton-CwWzu1Fv.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BTxCGMxd.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-hIfuRX7S.js";import"./mergeRefs-CbMhaD3v.js";import"./BaseRadioButton.stories-CgBOfEyi.js";import"./BaseRadioButton-D66a2A6X.js";import"./useId-BlQXgFvA.js";import"./Label-BVRUiQuL.js";import"./SupportLabel-ehsFyLK1.js";import"./SuccessIcon-BkGcH5Y8.js";import"./Icon-D-ETMkDu.js";import"./WarningIcon-BKb1q2w2.js";import"./InputPanel-BPIF-V-y.js";import"./Button-84SWh97G.js";import"./usePreviousValue-CwHvoOf3.js";import"./Loader-lQhIjq16.js";import"./useDelayedRender-B23mlrEc.js";import"./Title-Dl_SSbgU.js";import"./Card-Bgl1WGS9.js";import"./Text-CzsXo9B1.js";import"./Tag-DF7B0UxO.js";import"./ExpandablePanel-B404dX4G.js";import"./useAnimatedHeightBetween-hf8aKVwJ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CvsxJl21.js";import"./Expander-DlBTaC2x.js";import"./ChevronDownIcon-BEgGUTIv.js";import"./ChevronUpIcon-C-H0Qz1Q.js";import"./ListItem-TtiPjG23.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
