import{r as p,j as i}from"./iframe-xFzxGJuA.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-DHng6FSD.js";import{CheckboxStory as l}from"./Checkbox.stories-D7dXejh_.js";import c from"./Help.stories-BtuQ1iCz.js";import d from"./RadioButton.stories-Cr0QwUhu.js";import{RadioPanel as k}from"./RadioPanel.stories-4F8leK8J.js";import{F as u}from"./FieldGroup-eP327Lxy.js";import{C as g}from"./Checkbox-7_z0if65.js";import{C as h}from"./CheckboxPanel-DXsBTq7f.js";import{R as b}from"./RadioPanel-Cn9B-AkT.js";import{H as x}from"./Help-BGaJt0bX.js";import{R as C}from"./RadioButton-DLA5GOmz.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-jDZKcJzS.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-HSu7YYMa.js";import"./mergeRefs-DJCELRQP.js";import"./Button-BE9Wz1Cz.js";import"./usePreviousValue-OUOSn3IJ.js";import"./Loader-Dlvn3au6.js";import"./useDelayedRender-n02M0N1x.js";import"./InputPanel-DbSxKlid.js";import"./useId-D2HnEEmX.js";import"./SupportLabel-Bbxo7RHU.js";import"./SuccessIcon-CDGUBnyO.js";import"./Icon-DWkRB6cU.js";import"./WarningIcon-9NgwH5GR.js";import"./BaseRadioButton-BSzHmGXY.js";import"./Label-C8itzepE.js";import"./BaseRadioButton.stories-C6Y6cNBf.js";import"./Title-Br-Igskv.js";import"./Card-BDgIdw3P.js";import"./Text-DwH47f0E.js";import"./Tag-BW7ExnLY.js";import"./ExpandablePanel-DQ1UV4bX.js";import"./useAnimatedHeightBetween-BpKZyEMo.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-9z8qRXoA.js";import"./Expander-DJYS0iJI.js";import"./ChevronUpIcon-7O_VyNyn.js";import"./ListItem-BVwMwAAI.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
