import{r as p,j as i}from"./iframe-BKapNlwk.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DBCJQUvj.js";import l from"./Help.stories-BqIF00ea.js";import c from"./RadioButton.stories-DOXMdBw6.js";import{F as d}from"./FieldGroup-CuK9GN6M.js";import{C as k,a as u}from"./CheckboxPanel.stories-eoCpf6W5.js";import{RadioPanel as g}from"./RadioPanel.stories-L-dORcd9.js";import{C as h}from"./Checkbox-yqgzr0kv.js";import{R as b}from"./RadioPanel-Bc7u0XpB.js";import{H as x}from"./Help-BBgVuha-.js";import{R as C}from"./RadioButton-BgKTZxaC.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-B_7D9jDw.js";import"./BaseRadioButton-Baa6hSkK.js";import"./clsx-B-dksMZM.js";import"./useId-CkrH1w3r.js";import"./Label-B-RkLtZp.js";import"./SupportLabel-CNTgslNG.js";import"./SuccessIcon-RMbvCidx.js";import"./Icon-DKTpCZ-c.js";import"./WarningIcon-UPBixir2.js";import"./InputPanel-BrtJeRgE.js";import"./Flex-CY2UFan4.js";import"./SlotComponent-B8zH0ro9.js";import"./mergeRefs-Be7PWCg_.js";import"./Button-v6YpKr_P.js";import"./usePreviousValue-Daormz15.js";import"./Loader-Cofsd0ul.js";import"./useDelayedRender-rHn4GN-z.js";import"./Title-YTVV3AyF.js";import"./Card-DoqwgzOS.js";import"./Text-BHF9lmP2.js";import"./Tag-CejWRpUt.js";import"./ExpandablePanel-BI8ixarh.js";import"./useAnimatedHeightBetween-D7ZX4_mD.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-0B4afUjo.js";import"./Expander-DJ6-dG-2.js";import"./ChevronDownIcon-BXN-AlN5.js";import"./ChevronUpIcon-B-ibUWS7.js";import"./ListItem-OgPGOdRk.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
