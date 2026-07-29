import{r as p,j as i}from"./iframe-DGbg-ens.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-COfhU_QC.js";import l from"./Help.stories-DLN0ZOVb.js";import c from"./RadioButton.stories-DqOFbTL2.js";import{F as d}from"./FieldGroup-BRz0cPXo.js";import{C as k,a as u}from"./CheckboxPanel.stories-DbVrJvrT.js";import{RadioPanel as g}from"./RadioPanel.stories-DGZiWUcK.js";import{C as h}from"./Checkbox-BwajgjEB.js";import{R as b}from"./RadioPanel-BJwC5F3D.js";import{H as x}from"./Help-DJM_jndQ.js";import{R as C}from"./RadioButton-C0-RkYKl.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BmQAGk_E.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-b1Fb5AAS.js";import"./mergeRefs-C4KHvr2G.js";import"./BaseRadioButton.stories-0Kdt_SZx.js";import"./BaseRadioButton-Z1jAoXLQ.js";import"./useId-BcFB0y72.js";import"./Label-DFKl9d8L.js";import"./SupportLabel-xkRrUmD_.js";import"./SuccessIcon-CpYfYRi4.js";import"./Icon-C9oAsKmZ.js";import"./WarningIcon-9Xmxpt-H.js";import"./InputPanel-CJsmotyy.js";import"./Button-Cjrljpkn.js";import"./usePreviousValue-CaDSAnNb.js";import"./Loader-BvgE8xlY.js";import"./useDelayedRender-DCSNLyEE.js";import"./Title-oTAPJNBe.js";import"./Card-2OET67ew.js";import"./Text-7B5Y3hfs.js";import"./Tag-CmdUsMn1.js";import"./ExpandablePanel-Di_McGEi.js";import"./useAnimatedHeightBetween-BxVQtrDS.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DxyjX-cy.js";import"./Expander-B2G0NPVM.js";import"./ChevronUpIcon-BqmzW88a.js";import"./ListItem-BL4uTKWu.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
