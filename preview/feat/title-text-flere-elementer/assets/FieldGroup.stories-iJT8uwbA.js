import{r as p,j as s}from"./iframe-DNetpv_c.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-3gnnsguF.js";import{CheckboxStory as c}from"./Checkbox.stories-C2b1QyFz.js";import k from"./Help.stories--n6StVuw.js";import u from"./RadioButton.stories-Cltm3GPS.js";import{RadioPanel as g}from"./RadioPanel.stories-dKYnnIjw.js";import{F as h}from"./FieldGroup-C4tkhQYS.js";import{C as b}from"./Checkbox-BO7dJcQq.js";import{R as x}from"./RadioPanel-Bn1HmOv6.js";import{H as C}from"./Help-CY-Vu3Vm.js";import{R as G}from"./RadioButton-S4tLAF7o.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CEaMlBeU.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-jLa8p72m.js";import"./SlotComponent-CSpBG_xk.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DIMgujk-.js";import"./usePreviousValue-CIHRTYsG.js";import"./Loader-BjjDVxl8.js";import"./useDelayedRender-CuTD7glQ.js";import"./useId-Wuvh8ws5.js";import"./Label-DgjNEcO0.js";import"./SupportLabel-25OsDIfn.js";import"./SuccessIcon-DCR1OXNN.js";import"./Icon-DAowPIoX.js";import"./WarningIcon-BIUgiQvY.js";import"./BaseRadioButton.stories-BFcvuc5N.js";import"./BaseRadioButton-DlhpoOqy.js";import"./Title-B6HqtfJO.js";import"./Card-Png3T6GA.js";import"./Text-Kf2UFpyp.js";import"./Tag-CiBRfj2W.js";import"./ExpandablePanel-B1PRehCM.js";import"./useAnimatedHeightBetween-DeHOUHq3.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DIS7qGNJ.js";import"./Expander-BEFwKCvY.js";import"./ChevronDownIcon-D1oceyVC.js";import"./ChevronUpIcon-CEKEAnSX.js";import"./ListItem-BXkVmslp.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
