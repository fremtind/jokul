import{r as n,j as i}from"./iframe-CRvkIFKC.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BUwD1UG2.js";import{CheckboxStory as c}from"./Checkbox.stories-D7TQtt0H.js";import d from"./Help.stories-CuOEjNLB.js";import k from"./RadioButton.stories-B1fTcMGM.js";import{RadioPanel as u}from"./RadioPanel.stories-CsK4Y6lv.js";import{F as g}from"./FieldGroup-B1-xmE9p.js";import{C as h}from"./Checkbox-Bx54DE34.js";import{R as b}from"./RadioPanel-ClXzjL2y.js";import{H as x}from"./Help-DrE-AUW7.js";import{R as C}from"./RadioButton-DqdPY7ma.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dm8YblkY.js";import"./clsx-B-dksMZM.js";import"./Flex-D9QZTrrx.js";import"./SlotComponent-DNnH9h3S.js";import"./mergeRefs-C4LTGAZt.js";import"./Button-CD9IxeG3.js";import"./usePreviousValue-Bash4jfv.js";import"./Loader-DHUXkKex.js";import"./useDelayedRender-DK1OdeJp.js";import"./useId-BtTShDE8.js";import"./Label-BKpeEVR1.js";import"./SupportLabel-c4C3yH9F.js";import"./SuccessIcon-Df8QMHwG.js";import"./Icon-CaboDrSd.js";import"./WarningIcon-kbFuaf1D.js";import"./BaseRadioButton.stories-BGlJmpf-.js";import"./BaseRadioButton-D9mqB21d.js";import"./Title-D7aJ4zLJ.js";import"./Card-Dv4mhVaI.js";import"./Text-vM6qUrMl.js";import"./Tag-T40ftLUC.js";import"./ExpandablePanel-Rjkoo0Wq.js";import"./useAnimatedHeightBetween-CqlMeCRe.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BZs9RnFj.js";import"./Expander-CyRfdBz6.js";import"./ChevronUpIcon-CjZH4F9x.js";import"./ListItem-D2_TpGcy.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
