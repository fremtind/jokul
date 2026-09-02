import{r as n,j as i}from"./iframe-CZtxjeKl.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BJzMJHsH.js";import l from"./Help.stories-DDLSAwX2.js";import c from"./RadioButton.stories-CYdFBxp0.js";import{F as d}from"./FieldGroup-BTK3GDWB.js";import{C as k,a as u}from"./CheckboxPanel.stories-BgBZen-r.js";import{RadioPanel as g}from"./RadioPanel.stories-Buoa3_W_.js";import{C as h}from"./Checkbox-Dpekqfyu.js";import{R as b}from"./RadioPanel-Tf7x4jES.js";import{H as x}from"./Help-C53rEb_1.js";import{R as C}from"./RadioButton-CgDAujLI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BHD6E2iM.js";import"./Label-DP_NiiwF.js";import"./SupportLabel-CXH1WZ9H.js";import"./SuccessIcon-DWbb7BTo.js";import"./Icon-DxbY8yX_.js";import"./WarningIcon-D7nBnDHJ.js";import"./BaseRadioButton.stories-WANivPf5.js";import"./BaseRadioButton-DHKLgSxO.js";import"./InputPanel-D4uMh-wi.js";import"./Flex-uhikVtKm.js";import"./SlotComponent-DpzXRyCE.js";import"./mergeRefs-D5LDLQOE.js";import"./Button-CIPe8ZNx.js";import"./usePreviousValue-BRv6YdH1.js";import"./Loader-BXHYv7TG.js";import"./useDelayedRender-X2goLXvQ.js";import"./Title-B0c-G1L_.js";import"./Card-D9GsXUOD.js";import"./Text-DyJXH3bs.js";import"./Tag-eGeqw7IM.js";import"./ExpandablePanel-DLPjfErk.js";import"./useAnimatedHeightBetween-DXi0JDEv.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DRMTyZ8Y.js";import"./Expander-tO3gYjAD.js";import"./ChevronUpIcon-DVSLd7jb.js";import"./ListItem-Befrla_x.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
