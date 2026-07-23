import{r as p,j as i}from"./iframe-BanOjaEs.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BN1D6YuE.js";import l from"./Help.stories-C53YOPkv.js";import c from"./RadioButton.stories-BTvCjy-t.js";import{F as d}from"./FieldGroup-BY2qKBmV.js";import{C as k,a as u}from"./CheckboxPanel.stories-CN3H2qVm.js";import{RadioPanel as g}from"./RadioPanel.stories-DPhO9Mg9.js";import{C as h}from"./Checkbox-DPpF57F2.js";import{R as b}from"./RadioPanel-z9kdLlzk.js";import{H as x}from"./Help-CeYQ0bbm.js";import{R as C}from"./RadioButton-BSy7L6GA.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D7Ytb0vp.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DVFIp14B.js";import"./mergeRefs-CUuohrjO.js";import"./BaseRadioButton.stories-YjD78ip6.js";import"./BaseRadioButton-BkJLG1R7.js";import"./useId-FcO9o6PO.js";import"./Label-B_vjq8Vw.js";import"./SupportLabel-B2g2JXfD.js";import"./SuccessIcon-DV2_OQ-b.js";import"./Icon-CA5u8Mvo.js";import"./WarningIcon-BEPNRUWf.js";import"./InputPanel-Df8k2elI.js";import"./Button-BLG2zX00.js";import"./usePreviousValue-DIc7_7qT.js";import"./Loader-BcqR_1wm.js";import"./useDelayedRender-Ch19V4tE.js";import"./Title-rXDr7t4k.js";import"./Card-CZLpQ-fn.js";import"./Text-Dnur5ON2.js";import"./Tag-Omi24KLT.js";import"./ExpandablePanel-yAb6cdIL.js";import"./useAnimatedHeightBetween-C7APQW3d.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CtnH3hQV.js";import"./Expander-CT7JXiWR.js";import"./ChevronUpIcon-B_eCQv9b.js";import"./ListItem-DmNFV-8d.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
