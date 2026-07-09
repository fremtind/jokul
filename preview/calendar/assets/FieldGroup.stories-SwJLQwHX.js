import{r as p,j as i}from"./iframe-B64LIQks.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B_0SdP-j.js";import l from"./Help.stories-DB2hyEoD.js";import c from"./RadioButton.stories-Djzw1U4u.js";import{F as d}from"./FieldGroup-Bg1k34Pa.js";import{C as k,a as u}from"./CheckboxPanel.stories-Dyz9kr3j.js";import{RadioPanel as g}from"./RadioPanel.stories-BVsFNp5y.js";import{C as h}from"./Checkbox-Dtpwpx-f.js";import{R as b}from"./RadioPanel-B8ThmkzE.js";import{H as x}from"./Help-BJoa8Kj4.js";import{R as C}from"./RadioButton-5cnw48bG.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DmtWzuU2.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-aEuW4fb4.js";import"./mergeRefs-BS4ztGGM.js";import"./BaseRadioButton.stories-CZbY28wx.js";import"./BaseRadioButton-CLD_kVTA.js";import"./useId-CuroFdcW.js";import"./Label-CKdFdN1P.js";import"./SupportLabel-blEwRc9i.js";import"./SuccessIcon-T_ijIvth.js";import"./Icon-B1zqtEiJ.js";import"./WarningIcon-mHS0aChM.js";import"./InputPanel-CmWZPmjp.js";import"./Button-Dq6leH4O.js";import"./usePreviousValue-CAwqDShk.js";import"./Loader-HgHdSHHW.js";import"./useDelayedRender-BV9upIDG.js";import"./Title-BrQeI2o4.js";import"./Card-BJW-VMAy.js";import"./Text-DI_TYDmf.js";import"./Tag-D8ljvAEy.js";import"./ExpandablePanel-41wB_yEe.js";import"./useAnimatedHeightBetween-CA0EI3d7.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-xHVNYK3Q.js";import"./Expander-DRc9DEHs.js";import"./ChevronDownIcon-Co3vkNDI.js";import"./ChevronUpIcon-DfLjt5G2.js";import"./ListItem-e9_xtB17.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
