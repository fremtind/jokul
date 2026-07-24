import{r as p,j as i}from"./iframe-BELzo5jQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BGeXDoVf.js";import l from"./Help.stories-UEUMPRkV.js";import c from"./RadioButton.stories-dgeGh_Cu.js";import{F as d}from"./FieldGroup-BcWb4D5x.js";import{C as k,a as u}from"./CheckboxPanel.stories-B_BK0JGA.js";import{RadioPanel as g}from"./RadioPanel.stories-Dl58DcDb.js";import{C as h}from"./Checkbox-Hu0VDZET.js";import{R as b}from"./RadioPanel-BqfV_7wo.js";import{H as x}from"./Help-BqtW1aqB.js";import{R as C}from"./RadioButton-CBEDfEq0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-V0PEyoa6.js";import"./Label-tZDkTdl2.js";import"./SupportLabel-BTAbZyJJ.js";import"./SuccessIcon-Cb8O67fh.js";import"./Icon-DhocsGnY.js";import"./WarningIcon-kCAmoZg1.js";/* empty css               *//* empty css               */import"./Flex-eyfV_MjD.js";import"./SlotComponent-qhBa_G8i.js";import"./mergeRefs-CLhL7P9s.js";import"./BaseRadioButton.stories-D31mbt4n.js";import"./BaseRadioButton-a2Rc_iFL.js";import"./InputPanel-CkY1Ap6V.js";import"./Button-B8gPkXHA.js";import"./usePreviousValue-Cpq2RwFz.js";import"./Loader-ce1EiKjc.js";import"./useDelayedRender-BwEpNWwT.js";import"./Title-0M6MGX-y.js";import"./Card-kFt9uPMB.js";import"./Text-Bxec4ddL.js";import"./Tag-C6pidR7e.js";import"./ExpandablePanel-oQdPigcq.js";import"./useAnimatedHeightBetween-AaOF-PjU.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D6N-B2yn.js";import"./Expander-DIkmiXuN.js";import"./ChevronUpIcon-COfyW8Pt.js";import"./ListItem-CAL0kAtt.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
