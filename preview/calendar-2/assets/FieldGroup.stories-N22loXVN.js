import{r as p,j as i}from"./iframe-DsFvwtmB.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CXZu8DZk.js";import l from"./Help.stories-CauSKKPy.js";import c from"./RadioButton.stories-BdiUeRqM.js";import{F as d}from"./FieldGroup-CqU3oYdY.js";import{C as k,a as u}from"./CheckboxPanel.stories-8ZRyp6Yz.js";import{RadioPanel as g}from"./RadioPanel.stories-DJ85R8dh.js";import{C as h}from"./Checkbox-BWgQTflu.js";import{R as b}from"./RadioPanel-Clg-wUef.js";import{H as x}from"./Help-BSLReSHt.js";import{R as C}from"./RadioButton-BRM72L1G.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-GzztkmiE.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-8hobiRci.js";import"./mergeRefs-BteIhjc7.js";import"./BaseRadioButton.stories-DPe4BqHp.js";import"./BaseRadioButton-DmtNy3hC.js";import"./useId-D0ansuuF.js";import"./Label-Ca8MWNgF.js";import"./SupportLabel-Bso0QtMV.js";import"./SuccessIcon-C49mgmjy.js";import"./Icon-BwiYdpf_.js";import"./WarningIcon-CT0Gh7HA.js";import"./InputPanel-D5qWvMp3.js";import"./Button-Dj1rZNtL.js";import"./usePreviousValue-BPPJV1uR.js";import"./Loader-CewrsiEx.js";import"./useDelayedRender-Dq1HltyD.js";import"./Title-Y_Fvsg4e.js";import"./Card-D8tlw1HB.js";import"./Text-rRlRsHwm.js";import"./Tag-CvNbJOe2.js";import"./ExpandablePanel-p4839pdO.js";import"./useAnimatedHeightBetween-CXWHxHIL.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-5dicJMRV.js";import"./Expander-D4fC-S1p.js";import"./ChevronUpIcon-Da91zgdf.js";import"./ListItem-14Jsj7IB.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
