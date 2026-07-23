import{r as p,j as i}from"./iframe-Cwc-6VXE.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Beg6JEmW.js";import l from"./Help.stories-BX9b6lt2.js";import c from"./RadioButton.stories-BjpErtpU.js";import{F as d}from"./FieldGroup-DD2awwdW.js";import{C as k,a as u}from"./CheckboxPanel.stories-DtVugqN1.js";import{RadioPanel as g}from"./RadioPanel.stories-BCuXzzA9.js";import{C as h}from"./Checkbox-DjyXXQ8K.js";import{R as b}from"./RadioPanel-DtaDfOfp.js";import{H as x}from"./Help-BgPxNyBr.js";import{R as C}from"./RadioButton-NCXYiY6M.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CICXvqNs.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-ZeAGNLNQ.js";import"./mergeRefs-BEmLTIOw.js";import"./BaseRadioButton.stories-BUpPutEn.js";import"./BaseRadioButton-C-zCCblX.js";import"./useId-C9SbrvJj.js";import"./Label-C6LEfVxu.js";import"./SupportLabel-BJYcqK2S.js";import"./SuccessIcon-BCYaqfcj.js";import"./Icon-BkdH1r15.js";import"./WarningIcon-CvQLlBDK.js";import"./InputPanel-zli6q2xy.js";import"./Button-QEdW5VW7.js";import"./usePreviousValue-dFVuayYA.js";import"./Loader-B6AXpeVj.js";import"./useDelayedRender-BgqLqed0.js";import"./Title-db6Hl8u4.js";import"./Card-DTGZN9iY.js";import"./Text-GI7blYLk.js";import"./Tag-Bg0dwFbn.js";import"./ExpandablePanel-BJ2MBzj1.js";import"./useAnimatedHeightBetween-mX_k2kZv.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DZKIZrEZ.js";import"./Expander-ezhHyMWL.js";import"./ChevronUpIcon-OvWB_hNT.js";import"./ListItem-DPA8-5Xg.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
