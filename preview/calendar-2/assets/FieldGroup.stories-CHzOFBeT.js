import{r as p,j as i}from"./iframe-CqTnkM_1.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BYiu0YKF.js";import l from"./Help.stories-C8fVUOCb.js";import c from"./RadioButton.stories-DOFa_3K2.js";import{F as d}from"./FieldGroup-C8FKVcef.js";import{C as k,a as u}from"./CheckboxPanel.stories-CrGGDGZV.js";import{RadioPanel as g}from"./RadioPanel.stories-CzQUh8rn.js";import{C as h}from"./Checkbox-CF226EJu.js";import{R as b}from"./RadioPanel-CbhRocSY.js";import{H as x}from"./Help-BgAfYlMK.js";import{R as C}from"./RadioButton-DmEBlm33.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BVoRJFWI.js";import"./Label-CJYycKf-.js";import"./SupportLabel-Cdl8nkVh.js";import"./SuccessIcon-ChRmwb7j.js";import"./Icon-CEv1qPMv.js";import"./WarningIcon-Bpdymgl6.js";/* empty css               *//* empty css               */import"./Flex-DiDA15Ok.js";import"./SlotComponent-DpRtLQa4.js";import"./mergeRefs-BXC6GWea.js";import"./BaseRadioButton.stories-CmLDkP1n.js";import"./BaseRadioButton-8w4-cyZW.js";import"./InputPanel-TeZpqu0x.js";import"./Button-CjYOHO16.js";import"./usePreviousValue-E84bz1b4.js";import"./Loader-Bg9EaNoC.js";import"./useDelayedRender-B9QkeEw9.js";import"./Title-DI2aoAX7.js";import"./Card-BMICJHQI.js";import"./Text-DkQnsTBy.js";import"./Tag-DzyDel-U.js";import"./ExpandablePanel-CwgOPSu9.js";import"./useAnimatedHeightBetween-CempjL_c.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DdDXE7oU.js";import"./Expander-ZKHYW6in.js";import"./ChevronUpIcon-B3qj1BmB.js";import"./ListItem-DwOcbCEH.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
