import{r as p,j as i}from"./iframe-75v6xoDJ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-qs6IYC8k.js";import l from"./Help.stories-D6y3s_OC.js";import c from"./RadioButton.stories-BQGnaGpV.js";import{F as d}from"./FieldGroup-BvvaXiWM.js";import{C as k,a as u}from"./CheckboxPanel.stories-Cmh5tFip.js";import{RadioPanel as g}from"./RadioPanel.stories-Cw-7wXzh.js";import{C as h}from"./Checkbox-DzlkoevZ.js";import{R as b}from"./RadioPanel-IPbDOZKT.js";import{H as x}from"./Help-DzZdSYbT.js";import{R as C}from"./RadioButton-d8JrlDgt.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D_OuQwyn.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B08ZMOev.js";import"./mergeRefs-DwYM4wYf.js";import"./BaseRadioButton.stories-B6Pp4_Dq.js";import"./BaseRadioButton-DdwiMajN.js";import"./useId-Dn7uxmpv.js";import"./Label-Df8HANgF.js";import"./SupportLabel-QZrIr_DR.js";import"./SuccessIcon-CrOeIq3e.js";import"./Icon-BfZ-U6A0.js";import"./WarningIcon-B44G4rz2.js";import"./InputPanel-DOT7OeMj.js";import"./Button-DTw6ZHpt.js";import"./usePreviousValue-Cb2FxBuh.js";import"./Loader-Bt84KDOI.js";import"./useDelayedRender-CqQW37tL.js";import"./Title-D42CAqsr.js";import"./Card-Jy3u_czh.js";import"./Text-B8oB52H2.js";import"./Tag-D93CdQyS.js";import"./ExpandablePanel-DcFiI7Xh.js";import"./useAnimatedHeightBetween-Homsnbkb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-COAQ-LW3.js";import"./Expander-DOvolcX9.js";import"./ChevronDownIcon-CnoB2a1o.js";import"./ChevronUpIcon-yW9soo2U.js";import"./ListItem-Ck89qhzH.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
