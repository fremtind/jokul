import{r as n,j as i}from"./iframe-BBPi0Dte.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-tpzoWbu0.js";import l from"./Help.stories-BrSQ-s6H.js";import c from"./RadioButton.stories-BtqF7akE.js";import{F as d}from"./FieldGroup-CrGmSqk0.js";import{C as k,a as u}from"./CheckboxPanel.stories-hwLrCzoq.js";import{RadioPanel as g}from"./RadioPanel.stories-C1-UvaG2.js";import{C as h}from"./Checkbox-DssGE6HT.js";import{R as b}from"./RadioPanel-D-Xlr5H1.js";import{H as x}from"./Help-BsPsdqr_.js";import{R as C}from"./RadioButton-DRoi95y6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BmVWZndz.js";import"./Label-DnJ9cxdz.js";import"./SupportLabel-DA7rNsjr.js";import"./SuccessIcon-CS-95bLf.js";import"./Icon-iE8mJiMv.js";import"./WarningIcon-BRNDcWLN.js";import"./BaseRadioButton.stories-yhqG-io5.js";import"./BaseRadioButton-BY3WfoQZ.js";import"./InputPanel-CXeQmI4G.js";import"./Flex-DcxtCX8e.js";import"./SlotComponent-BBpWOY5w.js";import"./mergeRefs-BuD0HXC4.js";import"./Button-BWK1gJoO.js";import"./usePreviousValue-CSQP7ya1.js";import"./Loader-znw4Tryh.js";import"./useDelayedRender-CqchSB5C.js";import"./Title-DH--25kP.js";import"./Card-DXEJHdTM.js";import"./Text-By5XvY7x.js";import"./Tag-BmgrKTjt.js";import"./ExpandablePanel-VqSGl5eQ.js";import"./useAnimatedHeightBetween-B-TBwoPa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ck0VP2B9.js";import"./Expander-BhyqJnNq.js";import"./ChevronUpIcon-CvkVs6J7.js";import"./ListItem-Ce6Oe7VC.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
