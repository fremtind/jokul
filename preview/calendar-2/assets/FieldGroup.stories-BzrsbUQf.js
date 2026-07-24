import{r as p,j as i}from"./iframe-BAOkdMH2.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DYghRGzM.js";import l from"./Help.stories-CI9oG6zT.js";import c from"./RadioButton.stories-BNqAHhGF.js";import{F as d}from"./FieldGroup-Bq6bwgTZ.js";import{C as k,a as u}from"./CheckboxPanel.stories-B3PrvhuO.js";import{RadioPanel as g}from"./RadioPanel.stories-DL1Hb_k3.js";import{C as h}from"./Checkbox-Ch8y0ss3.js";import{R as b}from"./RadioPanel-Cb526ib5.js";import{H as x}from"./Help-BTqjHSFD.js";import{R as C}from"./RadioButton-osxRox-9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DxQLXUYI.js";import"./Label-CM_pvvAi.js";import"./SupportLabel-C2JxB6Gn.js";import"./SuccessIcon-D1Qj0uex.js";import"./Icon-BVz5u1ID.js";import"./WarningIcon-B3fJJsEc.js";/* empty css               *//* empty css               */import"./Flex-GWZ2c-AZ.js";import"./SlotComponent-S3s6jY_M.js";import"./mergeRefs-Bf_Kdr9a.js";import"./BaseRadioButton.stories-CTie09IA.js";import"./BaseRadioButton-CttR9pic.js";import"./InputPanel-DSgN2ULZ.js";import"./Button-D95ZRVoN.js";import"./usePreviousValue-DckVcUCL.js";import"./Loader-C8SA-SY5.js";import"./useDelayedRender-B4osJISD.js";import"./Title-Du2F2xX_.js";import"./Card-C6NcueNC.js";import"./Text-B3lUa1MH.js";import"./Tag-Yl2_RKFq.js";import"./ExpandablePanel-CTESZ5sq.js";import"./useAnimatedHeightBetween-DtPYXB6t.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CWbz9bFd.js";import"./Expander-BYsjHFtl.js";import"./ChevronUpIcon-BxfGuECQ.js";import"./ListItem-wtK_oro2.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
