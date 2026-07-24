import{r as p,j as i}from"./iframe-D6wjgZiV.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bjfkh7o6.js";import l from"./Help.stories-C7bwFWGr.js";import c from"./RadioButton.stories-DFWU6edZ.js";import{F as d}from"./FieldGroup-CpK5joG9.js";import{C as k,a as u}from"./CheckboxPanel.stories-CxGyJNl1.js";import{RadioPanel as g}from"./RadioPanel.stories-BcdvGD8M.js";import{C as h}from"./Checkbox-BqqTG0JU.js";import{R as b}from"./RadioPanel-QQ_9zfN_.js";import{H as x}from"./Help-COkHr3WM.js";import{R as C}from"./RadioButton-D21REnKS.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DuPJlgpC.js";import"./BaseRadioButton-DKFwg6aT.js";import"./clsx-B-dksMZM.js";import"./useId-1QuqvVI6.js";import"./Label-gTmXpDsw.js";import"./SupportLabel-Buidbufu.js";import"./SuccessIcon-CaAMbeTe.js";import"./Icon-DFqm04xw.js";import"./WarningIcon-CVyj7mE4.js";import"./InputPanel-BixQN0Mf.js";import"./Flex-Cz5glitG.js";import"./SlotComponent-Di2Z6Tfk.js";import"./mergeRefs-lB2D19Jx.js";import"./Button-BiiQ9Xw-.js";import"./usePreviousValue-DPM3HHAB.js";import"./Loader-DauR4Ebg.js";import"./useDelayedRender-DXGk6HV8.js";import"./Title-BzfndHcv.js";import"./Card-KjV-OLtR.js";import"./Text-Bvhtogtu.js";import"./Tag-B7ZwAx4T.js";import"./ExpandablePanel-CfMqTmbU.js";import"./useAnimatedHeightBetween-CHDkK9fG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BJ4WDwfc.js";import"./Expander-BhqzUPXN.js";import"./ChevronDownIcon-FcOZO9Wf.js";import"./ChevronUpIcon-B8OfkxKn.js";import"./ListItem-CjhfCJgS.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
