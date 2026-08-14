import{r as p,j as i}from"./iframe-shjuzphI.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DP8RrwMw.js";import l from"./Help.stories-gfs3J1Z2.js";import c from"./RadioButton.stories-nxNWCoHP.js";import{F as d}from"./FieldGroup-LXOXrJaX.js";import{C as k,a as u}from"./CheckboxPanel.stories-D9N75-ta.js";import{RadioPanel as g}from"./RadioPanel.stories-PuzVvERH.js";import{C as h}from"./Checkbox-D2fU3YLh.js";import{R as b}from"./RadioPanel-TIlcv6ZK.js";import{H as x}from"./Help-Dnyxy7fb.js";import{R as C}from"./RadioButton-7kBalw07.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BC1WpcsO.js";import"./BaseRadioButton-DRSPafrh.js";import"./clsx-B-dksMZM.js";import"./useId-BLbmkSPN.js";import"./Label-Cedupr0L.js";import"./SupportLabel-PpR-i2RS.js";import"./SuccessIcon-dmfGTGND.js";import"./Icon-D_ol0ehL.js";import"./WarningIcon-BofbIPGh.js";import"./InputPanel-DBZ5FHsl.js";import"./Flex-GuRj3jl6.js";import"./SlotComponent-DcDkvVOU.js";import"./mergeRefs-CuaUJnET.js";import"./Button-CGoU7IK0.js";import"./usePreviousValue-9UpmZwut.js";import"./Loader-BMma58hv.js";import"./useDelayedRender-BPSnGOAe.js";import"./Title-D94WScGi.js";import"./Card-C8axSdBu.js";import"./Text-DKdZxPPP.js";import"./Tag-DJwikOxb.js";import"./ExpandablePanel-CbZUUAfH.js";import"./useAnimatedHeightBetween-DfsmX2gD.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-kGn11mZ0.js";import"./Expander-Bs60sQIX.js";import"./ChevronDownIcon-DTTCMdCe.js";import"./ChevronUpIcon-C13ve-LW.js";import"./ListItem-CvvqhMlc.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
