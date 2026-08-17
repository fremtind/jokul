import{r as p,j as i}from"./iframe-BCKlvBPi.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cl-4M0K5.js";import l from"./Help.stories-D0cguGHR.js";import c from"./RadioButton.stories-Dy-Ei0Le.js";import{F as d}from"./FieldGroup-M4mz4gKp.js";import{C as k,a as u}from"./CheckboxPanel.stories-DjR2JZVc.js";import{RadioPanel as g}from"./RadioPanel.stories-C4e2VOG9.js";import{C as h}from"./Checkbox-BOB8_40c.js";import{R as b}from"./RadioPanel-Cz4Dqugq.js";import{H as x}from"./Help-0sLYGMr_.js";import{R as C}from"./RadioButton-CdNdhXxn.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D33zh3VW.js";import"./BaseRadioButton-BPjf9e09.js";import"./clsx-B-dksMZM.js";import"./useId-CAe3LYCj.js";import"./Label-DIbL7KmW.js";import"./SupportLabel-CivR48Gm.js";import"./SuccessIcon-D3-abZ34.js";import"./Icon-TUraWuCa.js";import"./WarningIcon-TRRTzBpJ.js";import"./InputPanel-BanNsJqy.js";import"./Flex-CcVc7sJq.js";import"./SlotComponent-C4aPm5at.js";import"./mergeRefs-D2_3sc7r.js";import"./Button-6uBJ59Bi.js";import"./usePreviousValue-DmHWiPtR.js";import"./Loader-BDwZ_B_u.js";import"./useDelayedRender-BfQl4Z3L.js";import"./Title-C-hp3dwJ.js";import"./Card-a25eHcV4.js";import"./Text-qYO1l4W5.js";import"./Tag-BHA52DZp.js";import"./ExpandablePanel-CU9tmd0b.js";import"./useAnimatedHeightBetween-CokJ_kYu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-dS7ssY4J.js";import"./Expander-BmLaCkik.js";import"./ChevronDownIcon-CApHGw2w.js";import"./ChevronUpIcon-DLcGbrGv.js";import"./ListItem-B9vdExhe.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
