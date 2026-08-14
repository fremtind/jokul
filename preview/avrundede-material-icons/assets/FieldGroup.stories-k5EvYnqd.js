import{r as p,j as i}from"./iframe-CPCvHwW9.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-vwfroWbs.js";import l from"./Help.stories-D0ieUplX.js";import c from"./RadioButton.stories-BTaNc2DP.js";import{F as d}from"./FieldGroup-D7AqZed3.js";import{C as k,a as u}from"./CheckboxPanel.stories-fp1mci8P.js";import{RadioPanel as g}from"./RadioPanel.stories-DBYeCVDk.js";import{C as h}from"./Checkbox-CvDFdU1r.js";import{R as b}from"./RadioPanel-DtG4cU8o.js";import{H as x}from"./Help-D3T5toIC.js";import{R as C}from"./RadioButton-BmbhzDGV.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CH7PAz0V.js";import"./BaseRadioButton-ClUSciDy.js";import"./clsx-B-dksMZM.js";import"./useId-nuaNjdin.js";import"./Label-DoMcuh9I.js";import"./SupportLabel-BLrmjw13.js";import"./SuccessIcon-Bu69SZzL.js";import"./Icon-DH34iQR3.js";import"./WarningIcon-Dw5dwANg.js";import"./InputPanel-Bjli5rQ9.js";import"./Flex-Crp6K8j_.js";import"./SlotComponent-D_x-A63C.js";import"./mergeRefs-DECCSGtE.js";import"./Button-Cc28hh6y.js";import"./usePreviousValue-CqsmefGj.js";import"./Loader-k3Jwbv92.js";import"./useDelayedRender-BRhwbnFB.js";import"./Title-fub5qj4H.js";import"./Card-DEK1HpmU.js";import"./Text-BCu5vyA2.js";import"./Tag-Df3mzOn-.js";import"./ExpandablePanel-DsfpK226.js";import"./useAnimatedHeightBetween-CiyyhDRG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BmulHPlX.js";import"./Expander-B1eSu7vO.js";import"./ChevronDownIcon-C3V8UiSC.js";import"./ChevronUpIcon-pg_yVS9a.js";import"./ListItem-Cs8vfxvy.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
