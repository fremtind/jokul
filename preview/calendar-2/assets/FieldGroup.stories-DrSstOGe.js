import{r as p,j as i}from"./iframe-e2zLSOxq.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-dZGbRvft.js";import l from"./Help.stories-75IpMPo0.js";import c from"./RadioButton.stories-CHT8ZM-9.js";import{F as d}from"./FieldGroup-r9NZjhuC.js";import{C as k,a as u}from"./CheckboxPanel.stories-BqD3OjU3.js";import{RadioPanel as g}from"./RadioPanel.stories-BmeaL32e.js";import{C as h}from"./Checkbox-DcBmoxWu.js";import{R as b}from"./RadioPanel-DKCgD-Gf.js";import{H as x}from"./Help-CI9kT5ZH.js";import{R as C}from"./RadioButton-Bj-vcjeO.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-D5jzCgAD.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C2Bnb50H.js";import"./mergeRefs-DQvja3sh.js";import"./BaseRadioButton.stories-BWTlqt1O.js";import"./BaseRadioButton-DCa3jvgK.js";import"./useId-Bs_ZDihn.js";import"./Label-CqXXG26D.js";import"./SupportLabel-DAyT_rWa.js";import"./SuccessIcon-5mWPYXSc.js";import"./Icon-CEgxKMcZ.js";import"./WarningIcon-COHbmbIq.js";import"./InputPanel-DULFE7Kc.js";import"./Button-CiCMg6as.js";import"./usePreviousValue-CATS8D4c.js";import"./Loader-C0Du0khY.js";import"./useDelayedRender-D7CaKDVe.js";import"./Title-DXn000Yu.js";import"./Card-DtXLPYpS.js";import"./Text-C0TpU2SD.js";import"./Tag-Bi8xc9yV.js";import"./ExpandablePanel-AxizdDww.js";import"./useAnimatedHeightBetween-CiGgMIvw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bs7yzmyu.js";import"./Expander-BEjADqeT.js";import"./ChevronUpIcon-C5Tb1yDx.js";import"./ListItem-BZlSKftB.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
