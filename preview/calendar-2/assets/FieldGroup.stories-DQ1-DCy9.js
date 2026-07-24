import{r as p,j as i}from"./iframe-Cjf1vOlA.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-mnGkfE21.js";import l from"./Help.stories-1HqhT6ab.js";import c from"./RadioButton.stories-CXD4aE40.js";import{F as d}from"./FieldGroup-Dz3O5_NR.js";import{C as k,a as u}from"./CheckboxPanel.stories-1ZiPEd70.js";import{RadioPanel as g}from"./RadioPanel.stories-BD0oMySo.js";import{C as h}from"./Checkbox-CvsL99Sx.js";import{R as b}from"./RadioPanel-DnqwO9uU.js";import{H as x}from"./Help-vIKwNevJ.js";import{R as C}from"./RadioButton-C0dLrXBc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-a6xwJViz.js";import"./Label-Bfk6YG8_.js";import"./SupportLabel-DsCm1aTr.js";import"./SuccessIcon-U9pdly8B.js";import"./Icon-DMgurLya.js";import"./WarningIcon-BNk8XuXd.js";/* empty css               *//* empty css               */import"./Flex-DEOA1wg7.js";import"./SlotComponent-C7398424.js";import"./mergeRefs-P1HhVlzr.js";import"./BaseRadioButton.stories-BgP147L6.js";import"./BaseRadioButton-CpQzUrnu.js";import"./InputPanel-Cs8ql0yw.js";import"./Button-BQLmPI1c.js";import"./usePreviousValue-u8QMjaAz.js";import"./Loader-BcjsLjHU.js";import"./useDelayedRender-ChRcOpRS.js";import"./Title-CX_Lqnju.js";import"./Card-B1Am3eRq.js";import"./Text--uI88Nrz.js";import"./Tag-D6DvOycv.js";import"./ExpandablePanel-DTnFBux8.js";import"./useAnimatedHeightBetween-Djzl7F8U.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BtC1F1PC.js";import"./Expander-lKFgaB4u.js";import"./ChevronUpIcon-zQ1IuVKy.js";import"./ListItem-gEnCy70f.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
