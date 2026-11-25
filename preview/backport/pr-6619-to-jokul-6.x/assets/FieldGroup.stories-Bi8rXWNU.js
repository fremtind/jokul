import{r as p,j as i}from"./iframe-BJSFL0jY.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-gXEmJ5lJ.js";import{CheckboxStory as c}from"./Checkbox.stories-BoRlf0dn.js";import d from"./Help.stories-57HvvpKS.js";import k from"./RadioButton.stories-DmXbJG8o.js";import{RadioPanel as u}from"./RadioPanel.stories-3ZMUx-V3.js";import{F as g}from"./FieldGroup-C_Yqpxge.js";import{C as h}from"./Checkbox-DOSFUqLB.js";import{R as b}from"./RadioPanel-g6otN-Q2.js";import{H as x}from"./Help-BySXTewb.js";import{R as C}from"./RadioButton-BLELzhkU.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CkawgQHv.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-FsTqQS53.js";import"./SlotComponent-DVZ8YOBY.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dx_wOcOG.js";import"./usePreviousValue-CKAvO2KC.js";import"./Loader-Bgw7Y4-5.js";import"./useDelayedRender-Dnvb8rsa.js";import"./useId-DFTQ_vHR.js";import"./Label-8jXvBe7O.js";import"./SupportLabel-CS6FSlss.js";import"./SuccessIcon-DislpJYr.js";import"./Icon-Bfw_sYj4.js";import"./WarningIcon-CJfPAawV.js";import"./BaseRadioButton.stories-DEiy3rdm.js";import"./BaseRadioButton-CR1Sdcd6.js";import"./Title-BNl8fUJj.js";import"./Card-B3Htk8me.js";import"./Text-C9xIYtUL.js";import"./Tag-DxijU09q.js";import"./ExpandablePanel-Bg7G9wTk.js";import"./useAnimatedHeightBetween-YPkXY_Ao.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Ef2YKs-9.js";import"./Expander-3n5b9n2I.js";import"./ChevronUpIcon-CBC5m4pP.js";import"./ListItem-DJcQ0Y79.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
