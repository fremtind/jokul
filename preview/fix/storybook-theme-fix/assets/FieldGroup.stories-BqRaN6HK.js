import{r as p,j as i}from"./iframe-CeDTOySA.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B2EnB9_A.js";import l from"./Help.stories-CiW1SaQ5.js";import c from"./RadioButton.stories-DVtZ-87y.js";import{F as d}from"./FieldGroup-hUSQU2Pr.js";import{C as k,a as u}from"./CheckboxPanel.stories-CGZ1wc98.js";import{RadioPanel as g}from"./RadioPanel.stories-aWnjtDQD.js";import{C as h}from"./Checkbox-4OMv5uOj.js";import{R as b}from"./RadioPanel-DM4v33uQ.js";import{H as x}from"./Help-DP4pZPrR.js";import{R as C}from"./RadioButton-1iE07D_0.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DTpm26_g.js";import"./BaseRadioButton-KH6T39w5.js";import"./clsx-B-dksMZM.js";import"./useId-3gM9UmNr.js";import"./Label-CQrSDD8d.js";import"./SupportLabel-BldxnoLh.js";import"./SuccessIcon-DsUxl2FE.js";import"./Icon-DCW0X8Ah.js";import"./WarningIcon-HaLITINC.js";import"./InputPanel-BJLinbSe.js";import"./Flex-BEWDciuz.js";import"./SlotComponent-8V5PhH7D.js";import"./mergeRefs-Ge3-1vSb.js";import"./Button-CMp-UkYq.js";import"./usePreviousValue-SFvcq2WM.js";import"./Loader-BYB5m_JL.js";import"./useDelayedRender-Dlzqn-1N.js";import"./Title-DnTYR3QI.js";import"./Card-OLJA65TX.js";import"./Text-ShVK2cB4.js";import"./Tag-m9vji4O8.js";import"./ExpandablePanel-BgcqA4mo.js";import"./useAnimatedHeightBetween-Cf3AtFFx.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-RmTVV3jE.js";import"./Expander-nkAaAFAa.js";import"./ChevronDownIcon-CZZbAQQl.js";import"./ChevronUpIcon-D-5mGxC4.js";import"./ListItem-Fe0VSgpK.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
