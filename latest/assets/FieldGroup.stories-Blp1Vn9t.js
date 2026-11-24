import{r as p,j as i}from"./iframe-Wm_sJeYn.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DzCIPz8g.js";import{CheckboxStory as c}from"./Checkbox.stories-DOkAMv_h.js";import d from"./Help.stories-DsjRg6lE.js";import k from"./RadioButton.stories-ISW1JoHu.js";import{RadioPanel as u}from"./RadioPanel.stories-iPgRMsnx.js";import{F as g}from"./FieldGroup-BTxG38kS.js";import{C as h}from"./Checkbox-C53KmlYP.js";import{R as b}from"./RadioPanel-BvuhON9D.js";import{H as x}from"./Help-DlAQtjqM.js";import{R as C}from"./RadioButton-BhYH2l-u.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-6uzYTt-v.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CKudtBUy.js";import"./SlotComponent-fiKQrrgE.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CVBE6Mck.js";import"./usePreviousValue-DTA4HUin.js";import"./Loader-CafcqHaz.js";import"./useDelayedRender-BjwBJfGg.js";import"./useId-B1cfVyRh.js";import"./Label-CnvaV-Pf.js";import"./SupportLabel-XCt3ykTb.js";import"./SuccessIcon-DQHn3n4y.js";import"./Icon-pVh8A5FQ.js";import"./WarningIcon-ByUcgAWA.js";import"./BaseRadioButton.stories-CysR4VA7.js";import"./BaseRadioButton-D0fIl_dc.js";import"./Title-CUIjTwA2.js";import"./Card-f2p3vfL6.js";import"./Text-C-oGSkNp.js";import"./Tag-C4x1BoMi.js";import"./ExpandablePanel-BNpHgCwg.js";import"./useAnimatedHeightBetween-RZFrUf9U.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CKKPE_Hc.js";import"./Expander-DO4B766V.js";import"./ChevronUpIcon-DmWP8RwQ.js";import"./ListItem-C0JZWSFC.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
