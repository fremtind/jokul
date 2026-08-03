import{r as n,j as i}from"./iframe-DQUDbCoN.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CZdKZhIh.js";import l from"./Help.stories-BYQWS_KT.js";import c from"./RadioButton.stories-BJeqo7PW.js";import{F as d}from"./FieldGroup-pjO5PstP.js";import{C as k,a as u}from"./CheckboxPanel.stories-Crbe42h9.js";import{RadioPanel as g}from"./RadioPanel.stories-CBb80s9N.js";import{C as h}from"./Checkbox-Cvy2q5yH.js";import{R as b}from"./RadioPanel-DmujoLRS.js";import{H as x}from"./Help-hkVD4QDf.js";import{R as C}from"./RadioButton-BY6KM3oJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DQ9J6z34.js";import"./Label-DR8RTLzT.js";import"./SupportLabel-Cfz-xF7B.js";import"./SuccessIcon-BO9Ft9aW.js";import"./Icon-BizY6quD.js";import"./WarningIcon-OFjcIXeu.js";import"./BaseRadioButton.stories-DKHy815Q.js";import"./BaseRadioButton-5y0Fog6R.js";import"./InputPanel-DQ4Dyo-h.js";import"./Flex-CJNaDuqK.js";import"./SlotComponent-B2GT7XWY.js";import"./mergeRefs-oT5GhjUE.js";import"./Button-CDLG3dM-.js";import"./usePreviousValue-DMkgRIJf.js";import"./Loader-jukOASqX.js";import"./useDelayedRender-DkUq9VJl.js";import"./Title-DUyaqa9s.js";import"./Card-DwwDPK-C.js";import"./Text-x3EkVC0_.js";import"./Tag-BilbDlGR.js";import"./ExpandablePanel-BYrGWPUR.js";import"./useAnimatedHeightBetween-DuG__Em0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B1Q8nB_Y.js";import"./Expander-ClvhiQon.js";import"./ChevronUpIcon-7V-u13Rx.js";import"./ListItem-w0KCigbb.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
