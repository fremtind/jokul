import{r as p,j as i}from"./iframe-B5mfZ-Bz.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BQiwFuww.js";import l from"./Help.stories-BGyboemL.js";import c from"./RadioButton.stories-CuTJGlnK.js";import{F as d}from"./FieldGroup-10t2r6RA.js";import{C as k,a as u}from"./CheckboxPanel.stories-5QkBQ5P3.js";import{RadioPanel as g}from"./RadioPanel.stories-COohciTK.js";import{C as h}from"./Checkbox-zCs97K0S.js";import{R as b}from"./RadioPanel-BDAfxXaV.js";import{H as x}from"./Help-CxUxjgG2.js";import{R as C}from"./RadioButton-Bnq1yT3o.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-LfftjOOQ.js";import"./BaseRadioButton-or6gxxmS.js";import"./clsx-B-dksMZM.js";import"./useId-r-KKINOU.js";import"./Label-SSgplOrD.js";import"./SupportLabel-CJajXsO3.js";import"./SuccessIcon--CeXJ96w.js";import"./Icon-CvT2WxaM.js";import"./WarningIcon-BXZ6v2RX.js";import"./InputPanel-BmSn4M4V.js";import"./Flex-CdezvkD0.js";import"./SlotComponent-CLBl2BZ4.js";import"./mergeRefs-BhpV0NH0.js";import"./Button-CJyUTkcQ.js";import"./usePreviousValue-C5p1cZKY.js";import"./Loader-CdYfPcZw.js";import"./useDelayedRender-BGO2DKHE.js";import"./Title-CnuiHD1b.js";import"./Card-BB7zqnYt.js";import"./Text-Ei5F-VG7.js";import"./Tag-CcIHnW7e.js";import"./ExpandablePanel-rPpL420e.js";import"./useAnimatedHeightBetween-Dne0to0w.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BcIJtoGK.js";import"./Expander-B5RESIwp.js";import"./ChevronDownIcon-nZV-kPPX.js";import"./ChevronUpIcon-C7TG6T_a.js";import"./ListItem-CQYD1Jo0.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
