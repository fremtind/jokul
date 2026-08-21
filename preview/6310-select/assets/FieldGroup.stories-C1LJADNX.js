import{r as p,j as i}from"./iframe-Cs41b2lO.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-4jy62F3U.js";import l from"./Help.stories-DoB_gu7u.js";import c from"./RadioButton.stories-DagsSnYm.js";import{F as d}from"./FieldGroup-CV_qjl0j.js";import{C as k,a as u}from"./CheckboxPanel.stories-B8lONZ2B.js";import{RadioPanel as g}from"./RadioPanel.stories-Dw1P-kPI.js";import{C as h}from"./Checkbox-Dk0Fa8XM.js";import{R as b}from"./RadioPanel-CBYEwQ68.js";import{H as x}from"./Help-cne2d-OX.js";import{R as C}from"./RadioButton-j5vQ7_Lb.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CTqB6Sno.js";import"./BaseRadioButton-BkONvRRq.js";import"./clsx-B-dksMZM.js";import"./useId-CwMe2RX3.js";import"./Label-CVOYesUO.js";import"./SupportLabel-CFeu9Vf9.js";import"./SuccessIcon-t21eX0N1.js";import"./Icon-CV1z8UdD.js";import"./WarningIcon-BRCQnbHs.js";import"./InputPanel-BSbP46u9.js";import"./Flex-DS5aRoZh.js";import"./SlotComponent-BqNWYRto.js";import"./mergeRefs-BE6K8DmV.js";import"./Button-Bmi6x2rL.js";import"./usePreviousValue-BnP7GvtB.js";import"./Loader-Dg42P0PU.js";import"./useDelayedRender-CCSKGh2x.js";import"./Title-B_tL4EGL.js";import"./Card-CG_XQagd.js";import"./Text-DME4t00G.js";import"./Tag-aE_M2mfd.js";import"./ExpandablePanel-Cx2tm6C5.js";import"./useAnimatedHeightBetween-_5A5rban.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B3jgG_OQ.js";import"./Expander-CNxrZ6NP.js";import"./ChevronDownIcon-DcCHQdh2.js";import"./ChevronUpIcon-CY_0bzcC.js";import"./ListItem-CbYnXOxr.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
