import{r as p,j as i}from"./iframe-CuEuuiCJ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-QGYfcz3X.js";import l from"./Help.stories-CDNgIGV0.js";import c from"./RadioButton.stories-C64cLj79.js";import{F as d}from"./FieldGroup-BB_6BiWP.js";import{C as k,a as u}from"./CheckboxPanel.stories-CP_rjw-y.js";import{RadioPanel as g}from"./RadioPanel.stories-DLpBwHmT.js";import{C as h}from"./Checkbox-4f1SsDje.js";import{R as b}from"./RadioPanel-CkMWO_pw.js";import{H as x}from"./Help-C5MxFtei.js";import{R as C}from"./RadioButton-3IaZVhzb.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BVXWOevz.js";import"./BaseRadioButton-BZuSGMB-.js";import"./clsx-B-dksMZM.js";import"./useId-UyaluhAR.js";import"./Label-ZUdy5C8M.js";import"./SupportLabel-BVTHh71m.js";import"./SuccessIcon-kI5O6Wt9.js";import"./Icon-kQc3XQaT.js";import"./WarningIcon-ortRa7ts.js";import"./InputPanel-C1-wOeQp.js";import"./Flex-DyhclK_l.js";import"./SlotComponent-BODqq7JS.js";import"./mergeRefs-CbLlRxLV.js";import"./Button-x9jyjnco.js";import"./usePreviousValue-CXnzDVCN.js";import"./Loader-DVN9NNv2.js";import"./useDelayedRender-BXby0-8W.js";import"./Title-CCPOgpSo.js";import"./Card-CyYuWYjY.js";import"./Text-CwHa4gZW.js";import"./Tag-BV8MlpS3.js";import"./ExpandablePanel-Bq3z_1fs.js";import"./useAnimatedHeightBetween-cS4m-OeF.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5hH74Yr.js";import"./Expander-0dWbdjqS.js";import"./ChevronDownIcon-CvUMG9fI.js";import"./ChevronUpIcon-DVXSZAMg.js";import"./ListItem-B65xk0mR.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
