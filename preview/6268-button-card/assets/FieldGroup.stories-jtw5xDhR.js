import{r as p,j as i}from"./iframe-DcspcoJm.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CTeSeHO6.js";import l from"./Help.stories-BuTai_xR.js";import c from"./RadioButton.stories-ClaQNSIf.js";import{F as d}from"./FieldGroup-Mo3BAvUK.js";import{C as k,a as u}from"./CheckboxPanel.stories-DdB0qMdK.js";import{RadioPanel as g}from"./RadioPanel.stories-Cf2w41Yw.js";import{C as h}from"./Checkbox-DLC2vFPm.js";import{R as b}from"./RadioPanel-Vbw-g_bc.js";import{H as x}from"./Help-D4w72HSx.js";import{R as C}from"./RadioButton-LBztSH9_.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BrdQi7G-.js";import"./BaseRadioButton-Dfm0cFym.js";import"./clsx-B-dksMZM.js";import"./useId-DADu1_zR.js";import"./Label-DpsEGUdA.js";import"./SupportLabel-fIWJX4iE.js";import"./SuccessIcon-DRuccw52.js";import"./Icon-DsiCRD7F.js";import"./WarningIcon-bmlkTP4w.js";import"./InputPanel-D5VcvRcx.js";import"./Flex-gEDyN7lf.js";import"./SlotComponent-BVFXpfRU.js";import"./mergeRefs-CalvyaHt.js";import"./Button-BvIDvOqr.js";import"./usePreviousValue-D4Y3CaIR.js";import"./Loader-DiWfaHWd.js";import"./useDelayedRender-HNFxPPiZ.js";import"./Title--1UY0epe.js";import"./Card-ChP8NlGk.js";import"./Text-BCrrdMWk.js";import"./Tag-DPAM9vM3.js";import"./ExpandablePanel-DL5ks7U9.js";import"./useAnimatedHeightBetween-CehwyIxw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DxWGTdWx.js";import"./Expander-Dca-PaOH.js";import"./ChevronDownIcon-BSoawHCu.js";import"./ChevronUpIcon-cuoLS-f4.js";import"./ListItem-2kGOs9F9.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
