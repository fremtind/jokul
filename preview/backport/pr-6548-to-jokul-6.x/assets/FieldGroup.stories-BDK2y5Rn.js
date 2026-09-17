import{r as n,j as i}from"./iframe-n7A6R-H_.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Di8U41aV.js";import{CheckboxStory as c}from"./Checkbox.stories-BmIcjU98.js";import d from"./Help.stories-DDeixteo.js";import k from"./RadioButton.stories-BwgNfvi9.js";import{RadioPanel as u}from"./RadioPanel.stories-CVfadobJ.js";import{F as g}from"./FieldGroup-Qoou7buZ.js";import{C as h}from"./Checkbox-BGhZzIuf.js";import{R as b}from"./RadioPanel-DC8-CPw1.js";import{H as x}from"./Help-DKCL_jeI.js";import{R as C}from"./RadioButton-HnHm5sLQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dy1lZeP6.js";import"./clsx-B-dksMZM.js";import"./Flex-ivR3m6YF.js";import"./SlotComponent-DatqAuN4.js";import"./mergeRefs-D9TCc3_-.js";import"./Button-BVZqMG44.js";import"./usePreviousValue-DTe2KEf7.js";import"./Loader-CuU9NuUd.js";import"./useDelayedRender-C3vog9TC.js";import"./useId-sw9ozzrw.js";import"./Label-Cc9kxnwm.js";import"./SupportLabel-BPjAi-Zw.js";import"./SuccessIcon-BlaJI0Zq.js";import"./Icon-CndsemqE.js";import"./WarningIcon-PgK1B3Hh.js";import"./BaseRadioButton.stories-DVXsvrke.js";import"./BaseRadioButton-Cqk0DRFo.js";import"./Title-wQFQUHdI.js";import"./Card-2oLaWryO.js";import"./Text-BZF5pG_e.js";import"./Tag-CPFNyYjw.js";import"./ExpandablePanel-DBCpe0M-.js";import"./useAnimatedHeightBetween-DEG5kPkC.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CSh4z50E.js";import"./Expander-CrVAC_GX.js";import"./ChevronUpIcon-Wkkv-Y1G.js";import"./ListItem-B9qwakc0.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
