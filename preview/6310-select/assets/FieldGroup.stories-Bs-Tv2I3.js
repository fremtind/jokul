import{r as p,j as i}from"./iframe-BBiGS7XK.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-7Etrb7QC.js";import l from"./Help.stories-Ve5nwT6u.js";import c from"./RadioButton.stories-rDDeugAW.js";import{F as d}from"./FieldGroup-DkVVgMR5.js";import{C as k,a as u}from"./CheckboxPanel.stories-xlClb-Gb.js";import{RadioPanel as g}from"./RadioPanel.stories-CaENeTT2.js";import{C as h}from"./Checkbox-HZ7IsmXV.js";import{R as b}from"./RadioPanel-CDXODdQv.js";import{H as x}from"./Help-Y1DW56Eb.js";import{R as C}from"./RadioButton-Bt0jGzwR.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-z89YqHZd.js";import"./BaseRadioButton-CSS_Q8hA.js";import"./clsx-B-dksMZM.js";import"./useId-Chkhrx28.js";import"./Label-MYjgANt2.js";import"./SupportLabel-hwnWOTuW.js";import"./SuccessIcon-BNydTtik.js";import"./Icon-CxWQi6sv.js";import"./WarningIcon-oI4CBlTC.js";import"./InputPanel-BQuen2Tl.js";import"./Flex-CqCsadJC.js";import"./SlotComponent-D28gtYEd.js";import"./mergeRefs-BZBUL1es.js";import"./Button-J4hzj6ox.js";import"./usePreviousValue-BjzhFL5_.js";import"./Loader-MDQxIa-D.js";import"./useDelayedRender-CVppdccX.js";import"./Title-DrtXRbUc.js";import"./Card-DyHOjbVk.js";import"./Text-D7UWbQ1H.js";import"./Tag-Bu1W366D.js";import"./ExpandablePanel-ByQE6gBJ.js";import"./useAnimatedHeightBetween-B0MaGIdd.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bo_BOqlM.js";import"./Expander-C_8dXHrD.js";import"./ChevronDownIcon-CFF4UK5y.js";import"./ChevronUpIcon-BhSQByIE.js";import"./ListItem-MA7LazUW.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
