import{r as p,j as i}from"./iframe-BfR9NbKK.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BqwebOBI.js";import l from"./Help.stories-DluPJb--.js";import c from"./RadioButton.stories-DwqQFkZR.js";import{F as d}from"./FieldGroup-CYWsLVPG.js";import{C as k,a as u}from"./CheckboxPanel.stories-BDl6Ydpk.js";import{RadioPanel as g}from"./RadioPanel.stories-BBMghJaC.js";import{C as h}from"./Checkbox-D2_eNa2d.js";import{R as b}from"./RadioPanel-DMFFOU_6.js";import{H as x}from"./Help-BxhP7UOx.js";import{R as C}from"./RadioButton-BIcO9pas.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BttXqTMK.js";import"./Label-klYfu7sg.js";import"./SupportLabel-47eNgv_G.js";import"./SuccessIcon-LuNM0v2k.js";import"./Icon-DC4OOp0H.js";import"./WarningIcon-Drkn0AOx.js";/* empty css               *//* empty css               */import"./Flex-DZXhSDeM.js";import"./SlotComponent-B1PdOdrc.js";import"./mergeRefs-CJBsRbfA.js";import"./BaseRadioButton.stories-Bw2fAEhu.js";import"./BaseRadioButton-enncSwRI.js";import"./InputPanel-DP6dla4q.js";import"./Button-CcOEx2NX.js";import"./usePreviousValue-DxfEukvp.js";import"./Loader-z-cE-fqQ.js";import"./useDelayedRender-Cr4_I6RD.js";import"./Title-Cc4XrEtP.js";import"./Card-DObBG3-2.js";import"./Text-BaFs7SMg.js";import"./Tag-Bdr3cSYf.js";import"./ExpandablePanel-Ca40m3hh.js";import"./useAnimatedHeightBetween-0uoC1N1F.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D4QbncOH.js";import"./Expander-Cp6PDZRt.js";import"./ChevronDownIcon-B-amI_oE.js";import"./ChevronUpIcon-BFxrzDax.js";import"./ListItem-B0mO1Abv.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
