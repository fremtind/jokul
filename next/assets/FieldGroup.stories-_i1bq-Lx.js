import{r as p,j as i}from"./iframe-BJUXRtue.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DoqiKqa2.js";import l from"./Help.stories-lgI3lmDZ.js";import c from"./RadioButton.stories-DaV7CzBv.js";import{F as d}from"./FieldGroup-W3RdWpuY.js";import{C as k,a as u}from"./CheckboxPanel.stories-CFGHNwjb.js";import{RadioPanel as g}from"./RadioPanel.stories-CPTu5Qks.js";import{C as h}from"./Checkbox-BPC_iJAe.js";import{R as b}from"./RadioPanel-Dyfv7eA2.js";import{H as x}from"./Help-C4lbbtT0.js";import{R as C}from"./RadioButton-C77stl3y.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Bgz_6Irr.js";import"./BaseRadioButton-D9vWqK_x.js";import"./clsx-B-dksMZM.js";import"./useId-MQ9oGtrN.js";import"./Label-YP-y70__.js";import"./SupportLabel-C4bNv4sO.js";import"./SuccessIcon-C820Z0if.js";import"./Icon-vIsBPuub.js";import"./WarningIcon-Cy0XQRoN.js";import"./InputPanel-B4y0EQxc.js";import"./Flex-CDAoPMp_.js";import"./SlotComponent-BrDE4t6V.js";import"./mergeRefs-C6SiQ-2F.js";import"./Button-BykwSwKs.js";import"./usePreviousValue-DJHKqRwn.js";import"./Loader-Br3h_hE5.js";import"./useDelayedRender-C5depnxY.js";import"./Title-PfsKFXqb.js";import"./Card-Dria3SyW.js";import"./Text-C_t58_4c.js";import"./Tag-5cbz1yDt.js";import"./ExpandablePanel-Cu3hJ0WG.js";import"./useAnimatedHeightBetween-D7iDFgJb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DmiCgnEO.js";import"./Expander-DRWjbk4g.js";import"./ChevronDownIcon-CRYrD9EG.js";import"./ChevronUpIcon-DrO7Bsdn.js";import"./ListItem-Diu-20I2.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
