import{r as p,j as i}from"./iframe-DWegUtH-.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DxIq0Sqz.js";import l from"./Help.stories-BdvfNKbr.js";import c from"./RadioButton.stories--dFKXFx4.js";import{F as d}from"./FieldGroup-IKGHkpAK.js";import{C as k,a as u}from"./CheckboxPanel.stories-BcPAOB7r.js";import{RadioPanel as g}from"./RadioPanel.stories-Dc6W86U9.js";import{C as h}from"./Checkbox-CVGDeRYE.js";import{R as b}from"./RadioPanel-ByJ-a9uh.js";import{H as x}from"./Help-4_S49k1q.js";import{R as C}from"./RadioButton-BuXlvlJq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C476k4y_.js";import"./Label-CijQOmlh.js";import"./SupportLabel-DA3S-Zo_.js";import"./SuccessIcon-D1tY9H-M.js";import"./Icon-D0MHEvnZ.js";import"./WarningIcon-3fxHl9vf.js";/* empty css               *//* empty css               */import"./Flex-CfCINvJS.js";import"./SlotComponent-Bo_omsBn.js";import"./mergeRefs-84hj-KYZ.js";import"./BaseRadioButton.stories-BiXisroN.js";import"./BaseRadioButton-BlbTUN6N.js";import"./InputPanel-DEbkVDFJ.js";import"./Button-CbPehrbg.js";import"./usePreviousValue-nqP0plzW.js";import"./Loader-CCm9MpZY.js";import"./useDelayedRender-40LLIMSC.js";import"./Title-9JRXLFM2.js";import"./Card-gS_VApLA.js";import"./Text-CRDupJZ_.js";import"./Tag-jFS8hEdM.js";import"./ExpandablePanel-C6wmRedN.js";import"./useAnimatedHeightBetween-e__pZCZV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ckukb_tf.js";import"./Expander-omyiEFCL.js";import"./ChevronUpIcon-D7DapznS.js";import"./ListItem-1i0dJME7.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
