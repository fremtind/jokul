import{r as n,j as i}from"./iframe-DC6cBja5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-kg1VnDNv.js";import{CheckboxStory as c}from"./Checkbox.stories-DVVdppKW.js";import d from"./Help.stories-ZfLAL-wE.js";import k from"./RadioButton.stories-B7YP44II.js";import{RadioPanel as u}from"./RadioPanel.stories-BUOw4Umo.js";import{F as g}from"./FieldGroup-DYbB7S-9.js";import{C as h}from"./Checkbox-B4b9AXM_.js";import{R as b}from"./RadioPanel-ywNTjsSS.js";import{H as x}from"./Help-CqY98BrR.js";import{R as C}from"./RadioButton-CTKQLHlP.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dv8ClrTr.js";import"./clsx-B-dksMZM.js";import"./Flex-CYDC5D--.js";import"./SlotComponent-BYRA1x_q.js";import"./mergeRefs-CVwc-Bmy.js";import"./Button-Cp9wF8Hh.js";import"./usePreviousValue-ComZU5HZ.js";import"./Loader-CBkkGY0q.js";import"./useDelayedRender-DEzBly7p.js";import"./useId-BaReGjjG.js";import"./Label-BcrHEqG0.js";import"./SupportLabel-L6EBewtO.js";import"./SuccessIcon-CvcP1Z7L.js";import"./Icon-DpabRZ5n.js";import"./WarningIcon-D5GfoqKs.js";import"./BaseRadioButton.stories-kMcWutNW.js";import"./BaseRadioButton-C93osdG-.js";import"./Title-41brzi8x.js";import"./Card-B8NXYRla.js";import"./Text-DuKttQcO.js";import"./Tag-DesR_1ka.js";import"./ExpandablePanel-MTX_CSHm.js";import"./useAnimatedHeightBetween-DqHqmeEd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CX8kjxzK.js";import"./Expander-DK2sq_Wy.js";import"./ChevronUpIcon-DxpmytD1.js";import"./ListItem-CSNMm-TJ.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
