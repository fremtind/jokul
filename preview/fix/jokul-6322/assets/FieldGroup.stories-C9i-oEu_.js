import{r as p,j as i}from"./iframe-Dh9PGa5f.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BbfVfc2y.js";import l from"./Help.stories-XHGYCdH9.js";import c from"./RadioButton.stories-4vukTfpJ.js";import{F as d}from"./FieldGroup-BipmBtlE.js";import{C as k,a as u}from"./CheckboxPanel.stories-mS1WFXZS.js";import{RadioPanel as g}from"./RadioPanel.stories-yumIgOFu.js";import{C as h}from"./Checkbox-VHfRTK2d.js";import{R as b}from"./RadioPanel-JKjtFLKE.js";import{H as x}from"./Help-DIQ44N7p.js";import{R as C}from"./RadioButton-BJayesVJ.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BIIn41-D.js";import"./BaseRadioButton-nuXinYXF.js";import"./clsx-B-dksMZM.js";import"./useId-Bm2ghA4j.js";import"./Label-Tg3_mEI_.js";import"./SupportLabel-B3EF7YEz.js";import"./SuccessIcon-dO48cnfq.js";import"./Icon-Bf_UiLRx.js";import"./WarningIcon-_xSqMxtR.js";import"./InputPanel-BUu1hmtF.js";import"./Flex-DzywpIDl.js";import"./SlotComponent-C3kU1bJi.js";import"./mergeRefs-ZFtThC0V.js";import"./Button-DduedD6W.js";import"./usePreviousValue-BNkB_l5K.js";import"./Loader-C6hbyF-R.js";import"./useDelayedRender-B7GdtzF_.js";import"./Title-D2GSwLlu.js";import"./Card-C3a_FnRK.js";import"./Text-BOtHiUo7.js";import"./Tag-DGmWSR7s.js";import"./ExpandablePanel-PU6kFpke.js";import"./useAnimatedHeightBetween-DqJWY8qO.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-nr-e6_ch.js";import"./Expander-C6s3516V.js";import"./ChevronDownIcon-L_JRT5AH.js";import"./ChevronUpIcon-C8UccaDB.js";import"./ListItem-CDdihqUk.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
