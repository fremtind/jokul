import{r as p,j as i}from"./iframe-bqvneDMF.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DszNc1yy.js";import{CheckboxStory as c}from"./Checkbox.stories-B-HkCF7_.js";import d from"./Help.stories-BTR7sZG_.js";import k from"./RadioButton.stories-rmdO8nZs.js";import{RadioPanel as u}from"./RadioPanel.stories-BMJ2M40e.js";import{F as g}from"./FieldGroup-BU5D3SYd.js";import{C as h}from"./Checkbox-BIKzcszR.js";import{R as b}from"./RadioPanel-FTBbhPlb.js";import{H as x}from"./Help-B7OJT5jM.js";import{R as C}from"./RadioButton-BTtVtsUV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C5acEtaG.js";import"./clsx-B-dksMZM.js";import"./Flex-DG-yq7PA.js";import"./SlotComponent-BntpY6Gb.js";import"./mergeRefs-C4Ox46kg.js";import"./Button-CQV04pTz.js";import"./usePreviousValue-CL-QCLtR.js";import"./Loader-C10I2iWy.js";import"./useDelayedRender-D-lUBR8Q.js";import"./BaseRadioButton.stories-Bc5HmKq5.js";import"./BaseRadioButton-CRdAhYXF.js";import"./useId-C11zgqjP.js";import"./Title-aiU2JL4V.js";import"./Card-DmRofV0U.js";import"./Text-BeO_3V3d.js";import"./Tag-CfcPfJZB.js";import"./ExpandablePanel-NxmZALxU.js";import"./useAnimatedHeightBetween-a7KLN6Nl.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DTWtKTpd.js";import"./Expander-JvCq1yOu.js";import"./ChevronDownIcon-BZFBYCBb.js";import"./Icon-CGXeI92I.js";import"./ChevronUpIcon-i4IZZAjP.js";import"./ListItem-BaAEIfXS.js";import"./Label-CYGlOzCh.js";import"./SupportLabel-D4UK8wlY.js";import"./SuccessIcon-Up4UEenE.js";import"./WarningIcon-XcWM6vMa.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
