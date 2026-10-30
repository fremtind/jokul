import{r as p,j as i}from"./iframe-DiqnZ--B.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B-ttfW8e.js";import{CheckboxStory as c}from"./Checkbox.stories-nSrcAiWA.js";import d from"./Help.stories-DrnxIUnB.js";import k from"./RadioButton.stories-Dxvvwej6.js";import{RadioPanel as u}from"./RadioPanel.stories-Cb99i07r.js";import{F as g}from"./FieldGroup-B4-jw-iY.js";import{C as h}from"./Checkbox-DIx2okPY.js";import{R as b}from"./RadioPanel-CfN8J3Xn.js";import{H as x}from"./Help-Cuuhcir6.js";import{R as C}from"./RadioButton-BdVS_IWO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-JQDTH641.js";import"./clsx-B-dksMZM.js";import"./Flex-w3GjqNNx.js";import"./SlotComponent-B9uqNEpW.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-M7dTPoRT.js";import"./usePreviousValue-DColaAKG.js";import"./Loader-CPyHacAy.js";import"./useDelayedRender-C0puKm7C.js";import"./BaseRadioButton.stories-EC0HS9vB.js";import"./BaseRadioButton-KPj7vgs8.js";import"./useId-C6Nl7AXO.js";import"./Title-95_gUUdu.js";import"./Card-B5HPK0wU.js";import"./Text-B_uWSL3J.js";import"./Tag-COhD0Nun.js";import"./ExpandablePanel-plk3lALi.js";import"./useAnimatedHeightBetween-wSSDwtKy.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DuVDWqVo.js";import"./Expander-COwpJzcE.js";import"./ChevronDownIcon-B5XhRwJI.js";import"./Icon-GSHzwELV.js";import"./ChevronUpIcon-BNNC4hZM.js";import"./ListItem-Cp46uH0R.js";import"./Label-Bs3wa7xO.js";import"./SupportLabel-BB_KLtu3.js";import"./SuccessIcon-DUGFYdMq.js";import"./WarningIcon-l3pZ5Z8U.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
