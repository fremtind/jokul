import{r as p,j as i}from"./iframe-DBOX4npm.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BdK5ZqIC.js";import l from"./Help.stories-B3ToNZnQ.js";import c from"./RadioButton.stories-DG5AgNn7.js";import{F as d}from"./FieldGroup-Doq-XN6J.js";import{C as k,a as u}from"./CheckboxPanel.stories-BSfIhD6t.js";import{RadioPanel as g}from"./RadioPanel.stories-BtpgA1ih.js";import{C as h}from"./Checkbox-BmBmFKS1.js";import{R as b}from"./RadioPanel-Bvgd-cYv.js";import{H as x}from"./Help-Dy2JepMJ.js";import{R as C}from"./RadioButton-D9lm-Cxe.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CzuCouWw.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B3Yrisxs.js";import"./mergeRefs-BF4WNyQd.js";import"./BaseRadioButton.stories-Dkgvg_cl.js";import"./BaseRadioButton-CHl18vt3.js";import"./useId-DPOGVVSZ.js";import"./Label-Caao2mPN.js";import"./SupportLabel-B4BKRvxt.js";import"./SuccessIcon-CBK7Ec6Y.js";import"./Icon-wECCRuo5.js";import"./WarningIcon-BqdHMACm.js";import"./InputPanel-DdXuW1jX.js";import"./Button-PhtY_tv5.js";import"./usePreviousValue-vNMJZgc9.js";import"./Loader-DHHufDdd.js";import"./useDelayedRender-DJxlgyMu.js";import"./Title-CQUm0gBI.js";import"./Card-C48wlsCG.js";import"./Text-DhyYs0uF.js";import"./Tag-CRKM0R6n.js";import"./ExpandablePanel-DONamx0o.js";import"./useAnimatedHeightBetween-BazTYB8a.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DeRGbJgt.js";import"./Expander-U58e17fy.js";import"./ChevronUpIcon-DuenAhH2.js";import"./ListItem-SuZGf3oV.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
