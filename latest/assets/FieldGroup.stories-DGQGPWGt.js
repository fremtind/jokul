import{r as p,j as i}from"./iframe-C19fRVAQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CoiEVyBP.js";import{CheckboxStory as c}from"./Checkbox.stories-DOtcg6t6.js";import d from"./Help.stories-DeP8DagD.js";import k from"./RadioButton.stories-qnFer5rQ.js";import{RadioPanel as u}from"./RadioPanel.stories-BcnIPciZ.js";import{F as g}from"./FieldGroup-KdmL8Rcy.js";import{C as h}from"./Checkbox-Bq6noTqT.js";import{R as b}from"./RadioPanel-DWmVpa38.js";import{H as x}from"./Help-c1SCgMZ2.js";import{R as C}from"./RadioButton-BEQ3AsGH.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D8soYOhE.js";import"./clsx-B-dksMZM.js";import"./Flex-Buo9Bq3m.js";import"./SlotComponent-C_0CSrh-.js";import"./mergeRefs-BvZqxbeV.js";import"./Button-DTzSBX9Z.js";import"./usePreviousValue-D81MBb7G.js";import"./Loader-CCv8TJsU.js";import"./useDelayedRender-z9UxPtNP.js";import"./BaseRadioButton.stories-BzSrn8bl.js";import"./BaseRadioButton-CgM3nzFY.js";import"./useId-C-4Z8DGm.js";import"./Title-DuQVNu_P.js";import"./Card-CDvTk1Jy.js";import"./Text-DdhzDs9G.js";import"./Tag-YbUOMW-E.js";import"./ExpandablePanel-Bwbxiwzk.js";import"./useAnimatedHeightBetween-DOcz97ZS.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CPehTvqo.js";import"./Expander-AC_wweri.js";import"./ChevronDownIcon-C5tdvvoy.js";import"./Icon-DQrFyHzm.js";import"./ChevronUpIcon-WJ2JUrUM.js";import"./ListItem-DVbdd9E0.js";import"./Label-D4nqg-7I.js";import"./SupportLabel-DsDnVJcW.js";import"./SuccessIcon-GWaVWk2k.js";import"./WarningIcon-D3_bEIol.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
