import{r as p,j as i}from"./iframe-BDowEic7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BaT-p92h.js";import{CheckboxStory as c}from"./Checkbox.stories-CKrIXyxk.js";import d from"./Help.stories-BCyu9LY1.js";import k from"./RadioButton.stories-CQDhkaGW.js";import{RadioPanel as u}from"./RadioPanel.stories-DnuPVz2-.js";import{F as g}from"./FieldGroup-B3Askdy1.js";import{C as h}from"./Checkbox-CrkFmjzr.js";import{R as b}from"./RadioPanel-DWzJ9-K5.js";import{H as x}from"./Help-Jw--DZkn.js";import{R as C}from"./RadioButton-CA4DIPks.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-vyGoePIr.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B_rK7plR.js";import"./SlotComponent-Br4UKL9W.js";import"./mergeRefs-B096uVqN.js";import"./Button-BBWvrIJG.js";import"./usePreviousValue-DD8B2K14.js";import"./Loader-EmmA8EMs.js";import"./useDelayedRender-Ctf_GQor.js";import"./useId-DcvgQiU4.js";import"./Label-DNX1_yxp.js";import"./SupportLabel-Be6hjFK5.js";import"./SuccessIcon-BE1hrWH1.js";import"./Icon-lkR-RzAa.js";import"./WarningIcon-DK7pz7er.js";import"./BaseRadioButton.stories-BQ3qh_40.js";import"./BaseRadioButton-CsKDtvLf.js";import"./Title-C15lrfL5.js";import"./Card-Dzo4qDBq.js";import"./Text-D-FpyLbb.js";import"./Tag-DKnoMIOc.js";import"./ExpandablePanel-ByqGepsk.js";import"./useAnimatedHeightBetween-Bd2c6e2k.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BTlwmg0j.js";import"./Expander-bbRCwfcI.js";import"./ChevronUpIcon-D8I_-iBG.js";import"./ListItem-DcThhJuZ.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
