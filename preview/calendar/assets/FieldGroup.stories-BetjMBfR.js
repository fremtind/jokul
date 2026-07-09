import{r as p,j as i}from"./iframe-TirhJbSW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-izRvU5EV.js";import l from"./Help.stories--nsTpeRd.js";import c from"./RadioButton.stories-DknCumA7.js";import{F as d}from"./FieldGroup-BeovVEJz.js";import{C as k,a as u}from"./CheckboxPanel.stories-B3OYEYBi.js";import{RadioPanel as g}from"./RadioPanel.stories-p9edWk-9.js";import{C as h}from"./Checkbox-4U3EAJs-.js";import{R as b}from"./RadioPanel-D_QgXQcg.js";import{H as x}from"./Help-_38b2W5z.js";import{R as C}from"./RadioButton-BM_UyBZT.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Dv6qtLvD.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CmvdpNs1.js";import"./mergeRefs-BrMB4OX7.js";import"./BaseRadioButton.stories-CC4YLh-V.js";import"./BaseRadioButton-D_N16sqF.js";import"./useId-Jjyuk6Yz.js";import"./Label-NNnuo_UT.js";import"./SupportLabel-Dx3qAdvB.js";import"./SuccessIcon-DfD0tC_q.js";import"./Icon-LJazCaxb.js";import"./WarningIcon-DfeydsMU.js";import"./InputPanel-HYwExfVq.js";import"./Button-Bmq2Ed_p.js";import"./usePreviousValue-slWkE54U.js";import"./Loader-DgyhH3zx.js";import"./useDelayedRender-C4dkKoPF.js";import"./Title-BtgZxTUI.js";import"./Card-BVZoArGg.js";import"./Text-CxDqZ0Xw.js";import"./Tag-Cuuy9f6K.js";import"./ExpandablePanel-mZJEq8du.js";import"./useAnimatedHeightBetween-385gWZSF.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-ByUVkB-Z.js";import"./Expander-dAMmHvXs.js";import"./ChevronDownIcon-D8jZB7HO.js";import"./ChevronUpIcon-BLHX4wPX.js";import"./ListItem-DeXL-GMH.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
