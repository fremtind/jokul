import{r as n,j as i}from"./iframe-DnyE-E3F.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CNyzlUiP.js";import l from"./Help.stories-CHFEB2tT.js";import c from"./RadioButton.stories-DFnI3j8p.js";import{F as d}from"./FieldGroup-Ba7R5HUJ.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bp-Q11pM.js";import{RadioPanel as g}from"./RadioPanel.stories-DA1MxZ9v.js";import{C as h}from"./Checkbox-B0Irc7xm.js";import{R as b}from"./RadioPanel-Bd9r0GTu.js";import{H as x}from"./Help-DwCz1lT8.js";import{R as C}from"./RadioButton-BjBVU2ol.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId--OEKCC-C.js";import"./Label-DYRf7KLv.js";import"./SupportLabel-Ts8wCra6.js";import"./SuccessIcon-BHM2S5Yo.js";import"./Icon-D8fC03lV.js";import"./WarningIcon-CIbovJPt.js";import"./BaseRadioButton.stories-CeNOFqmg.js";import"./BaseRadioButton-D-Yv77vR.js";import"./InputPanel-CmMT0lZK.js";import"./Flex-_tPsJH3M.js";import"./SlotComponent-C68-B9_7.js";import"./mergeRefs-CEbuAoVT.js";import"./Button-da672nX6.js";import"./usePreviousValue-B6lO-IAr.js";import"./Loader-DFcca0RR.js";import"./useDelayedRender-B7rkWtaq.js";import"./Title-Xp9RB5c1.js";import"./Card-DqoFgPRb.js";import"./Text-C4osHSPB.js";import"./Tag-CK5gbhxA.js";import"./ExpandablePanel-CQl6HMd5.js";import"./useAnimatedHeightBetween-CkEKKwTc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cfe2OezA.js";import"./Expander-C-xf84FG.js";import"./ChevronUpIcon-Cp4__aq5.js";import"./ListItem-BvrlzhEq.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
