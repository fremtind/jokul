import{r as p,j as i}from"./iframe-Df3-SZZN.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C725yHXO.js";import l from"./Help.stories-BQqySfw0.js";import c from"./RadioButton.stories-B8y-lnVb.js";import{F as d}from"./FieldGroup-D7zKWNpA.js";import{C as k,a as u}from"./CheckboxPanel.stories-BCyRW77y.js";import{RadioPanel as g}from"./RadioPanel.stories-COeogOxD.js";import{C as h}from"./Checkbox-CB7HZUnp.js";import{R as b}from"./RadioPanel-DgPIpUgg.js";import{H as x}from"./Help-BXaJiSvr.js";import{R as C}from"./RadioButton-CCmyZT_2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CdYWG57o.js";import"./Label-D8Z_zxio.js";import"./SupportLabel-Dqv2IqMs.js";import"./SuccessIcon-6-jd-tAK.js";import"./Icon-D_Zu3gAc.js";import"./WarningIcon-BoTlvNOr.js";/* empty css               *//* empty css               */import"./Flex-luB5rIst.js";import"./SlotComponent-Cr4FM-Qh.js";import"./mergeRefs-Du0_XA87.js";import"./BaseRadioButton.stories-BqK3BNi6.js";import"./BaseRadioButton-DOXPHIhj.js";import"./InputPanel-d3WB2Y33.js";import"./Button-7oohLKYd.js";import"./usePreviousValue-BPeNfDXH.js";import"./Loader-Dyu-aOhZ.js";import"./useDelayedRender-CWfaSCKC.js";import"./Title-CTwz2c29.js";import"./Card-D2VZXw9i.js";import"./Text-z9cYakUc.js";import"./Tag-BpLltCw6.js";import"./ExpandablePanel-DBmBrkGd.js";import"./useAnimatedHeightBetween-Bm8BIQGz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DhdqIzpD.js";import"./Expander-BqKizlji.js";import"./ChevronUpIcon-D8ZM8x4n.js";import"./ListItem-DyQiknue.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
