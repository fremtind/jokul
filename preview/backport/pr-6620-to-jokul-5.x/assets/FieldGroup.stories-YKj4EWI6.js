import{r as p,j as i}from"./iframe-DshwNvE6.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D_TQ25Zu.js";import{CheckboxStory as c}from"./Checkbox.stories-Mr23fkEh.js";import d from"./Help.stories-DGrdaEX6.js";import k from"./RadioButton.stories-mI6cNjEo.js";import{RadioPanel as u}from"./RadioPanel.stories-BkzUIhiX.js";import{F as g}from"./FieldGroup-DJg_bFBb.js";import{C as h}from"./Checkbox-C9CxVlue.js";import{R as b}from"./RadioPanel-Bot5Xh6Q.js";import{H as x}from"./Help-OTsX51YG.js";import{R as C}from"./RadioButton-BQFbFv7_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-l4KRosaK.js";import"./clsx-B-dksMZM.js";import"./Flex-CiCXHsfp.js";import"./SlotComponent-BzfQUGTI.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-xQAX5hEc.js";import"./usePreviousValue-gs0uk53P.js";import"./Loader-Co2KO35-.js";import"./useDelayedRender-BYywS-pI.js";import"./useId-ClTx5IJY.js";import"./Label-BOIH65me.js";import"./SupportLabel-CX8uXQG3.js";import"./SuccessIcon-ZIC8QSXb.js";import"./Icon-CDXsLfPY.js";import"./WarningIcon-Dj-46zVZ.js";import"./BaseRadioButton.stories-BkRZa5Lw.js";import"./BaseRadioButton-2W1I9RlA.js";import"./Title-Dq1ehzYb.js";import"./Card-D4mhJ9MT.js";import"./Text-7FzkGxXj.js";import"./Tag-D6MddpEt.js";import"./ExpandablePanel-DcjkDW7W.js";import"./useAnimatedHeightBetween-DFPUqXQt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CeE7-MOL.js";import"./Expander-Drb0n2oW.js";import"./ChevronDownIcon-DwAmbeSU.js";import"./ChevronUpIcon-T2pnb9d7.js";import"./ListItem-Dv31GtU2.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
