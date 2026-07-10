import{r as p,j as i}from"./iframe-HSZlmcjQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B1DEDSnC.js";import l from"./Help.stories-CABY8Aq4.js";import c from"./RadioButton.stories-BGcD9Z6c.js";import{F as d}from"./FieldGroup-CBzvA9dn.js";import{C as k,a as u}from"./CheckboxPanel.stories-DBTDVOjE.js";import{RadioPanel as g}from"./RadioPanel.stories-CeoMfg7O.js";import{C as h}from"./Checkbox-BM5JWQfH.js";import{R as b}from"./RadioPanel-BVBFG858.js";import{H as x}from"./Help-CGtiNff-.js";import{R as C}from"./RadioButton-CfaFfm_c.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DZLRLwnJ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BbL6_PCT.js";import"./mergeRefs-BoRUoAcc.js";import"./BaseRadioButton.stories-CTUgTP1D.js";import"./BaseRadioButton-DaTAkVRO.js";import"./useId-C42Ay4rR.js";import"./Label-Cild8Iih.js";import"./SupportLabel-Bb9vuiph.js";import"./SuccessIcon-BCMXaDEY.js";import"./Icon-DFDocwAP.js";import"./WarningIcon-BmDRcLt7.js";import"./InputPanel-C7k86yxz.js";import"./Button-CMGOE9FH.js";import"./usePreviousValue-BOkjGPeC.js";import"./Loader-CE8d43RE.js";import"./useDelayedRender-DNujRAxT.js";import"./Title-B0UfB5Xw.js";import"./Card-D1E_pxec.js";import"./Text-DoOUwgQT.js";import"./Tag-u1AY39tt.js";import"./ExpandablePanel-ChG8oLrB.js";import"./useAnimatedHeightBetween-CNlmCdZM.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D_-doF2o.js";import"./Expander-BIF_J1iy.js";import"./ChevronDownIcon-D-b7iojR.js";import"./ChevronUpIcon-vONnGup-.js";import"./ListItem-CU1QW6BU.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
