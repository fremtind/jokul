import{r as p,j as i}from"./iframe-DEs6YADE.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CbeY1cvK.js";import{CheckboxStory as c}from"./Checkbox.stories-CMizHcUo.js";import d from"./Help.stories-DZzud51e.js";import k from"./RadioButton.stories-DrTFhu1_.js";import{RadioPanel as u}from"./RadioPanel.stories-BEP_DwkI.js";import{F as g}from"./FieldGroup-B_Bp7kU4.js";import{C as h}from"./Checkbox-BhUYwjEi.js";import{R as b}from"./RadioPanel-Cu5QVeGC.js";import{H as x}from"./Help-CfstW7X6.js";import{R as C}from"./RadioButton-CETkUQy-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-AF7hR-px.js";import"./clsx-B-dksMZM.js";import"./Flex-DU0QtDQ_.js";import"./SlotComponent-CmDioNHK.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CT1x9DUo.js";import"./usePreviousValue-5KkKKKgr.js";import"./Loader-CwJ5OFSm.js";import"./useDelayedRender-R_OYw0EE.js";import"./BaseRadioButton.stories-D_D0ykxi.js";import"./BaseRadioButton-DUqDoZgq.js";import"./useId-TnKhD2lu.js";import"./Title-Byg6S49t.js";import"./Card-3j4Ryjjo.js";import"./Text-CSFVICIo.js";import"./Tag-CH4DKNBk.js";import"./ExpandablePanel-1ZBOAfit.js";import"./useAnimatedHeightBetween-C0Z1ApW-.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B1X51dlc.js";import"./Expander-C3D36dfh.js";import"./ChevronDownIcon-g8ebhTW9.js";import"./Icon-BNZMkMg-.js";import"./ChevronUpIcon-B3fSpYeo.js";import"./ListItem-BKlNWEG3.js";import"./Label-Bq-yY8_D.js";import"./SupportLabel-CB_CLwp6.js";import"./SuccessIcon-BsHmD4L8.js";import"./WarningIcon-BqsL-VR0.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
