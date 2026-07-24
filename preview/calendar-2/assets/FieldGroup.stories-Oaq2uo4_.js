import{r as p,j as i}from"./iframe-DYWdyUxL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Tjs80DYG.js";import l from"./Help.stories-33RINEjA.js";import c from"./RadioButton.stories-CZK1D16K.js";import{F as d}from"./FieldGroup-CfC7YfgY.js";import{C as k,a as u}from"./CheckboxPanel.stories-B8ppkVd8.js";import{RadioPanel as g}from"./RadioPanel.stories-DFxYocoa.js";import{C as h}from"./Checkbox-_adWI6zJ.js";import{R as b}from"./RadioPanel-CGycrViT.js";import{H as x}from"./Help-CnVTCZN8.js";import{R as C}from"./RadioButton-CocuqW4k.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BOzEIjuC.js";import"./Label-C_9a0mP0.js";import"./SupportLabel-CetoG6I3.js";import"./SuccessIcon-Dw5XGk7M.js";import"./Icon-DdnKr8pm.js";import"./WarningIcon-xab_nx70.js";/* empty css               *//* empty css               */import"./Flex-B6x7hKNj.js";import"./SlotComponent-5FM_70NU.js";import"./mergeRefs-DaEXLW6U.js";import"./BaseRadioButton.stories-Dl_3YyXx.js";import"./BaseRadioButton-6cIcPQIg.js";import"./InputPanel-DzUIGYJL.js";import"./Button-Cdj6mRlf.js";import"./usePreviousValue-CB25HRsc.js";import"./Loader-Dup7Vdtm.js";import"./useDelayedRender-DiAgrzgK.js";import"./Title-oL-EOyLm.js";import"./Card-CsN_ShNe.js";import"./Text-C7ULA8C5.js";import"./Tag-BqstaGf8.js";import"./ExpandablePanel-CuYC-HAT.js";import"./useAnimatedHeightBetween-vz5j5f4o.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CI9Kslf_.js";import"./Expander-nLJ3RWKk.js";import"./ChevronUpIcon-COTIsffM.js";import"./ListItem-BrIdOI9I.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
