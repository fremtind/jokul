import{r as p,j as i}from"./iframe-con1S-jp.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bz48SDda.js";import l from"./Help.stories-DEPiYLH9.js";import c from"./RadioButton.stories-Bj3I3dr5.js";import{F as d}from"./FieldGroup-CYKjrmjx.js";import{C as k,a as u}from"./CheckboxPanel.stories-BN5LOiU2.js";import{RadioPanel as g}from"./RadioPanel.stories-Cz6yDsYo.js";import{C as h}from"./Checkbox-DGwPrQm5.js";import{R as b}from"./RadioPanel-44JcRmhC.js";import{H as x}from"./Help-C2FNciGc.js";import{R as C}from"./RadioButton-DqRrN8uZ.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BWMMHbYC.js";import"./BaseRadioButton-vozqLlzm.js";import"./clsx-B-dksMZM.js";import"./useId-V4NCaHuO.js";import"./Label-DbHZYD_D.js";import"./SupportLabel-BjkliVsm.js";import"./SuccessIcon-BZjDr8eA.js";import"./Icon-CZRD6Hkz.js";import"./WarningIcon-7QWwgBD8.js";import"./InputPanel-ieftu2Yt.js";import"./Flex-CyRUgUno.js";import"./SlotComponent-O1JyYkyI.js";import"./mergeRefs-CSxUTEs5.js";import"./Button-BH912SQR.js";import"./usePreviousValue-A50CNAN2.js";import"./Loader-CvJA_TXx.js";import"./useDelayedRender-f5undeh0.js";import"./Title-CaVm1A9R.js";import"./Card-DJc77PUp.js";import"./Text-CBc23-Jq.js";import"./Tag-C-f0lM0r.js";import"./ExpandablePanel-CMX49XtY.js";import"./useAnimatedHeightBetween-Ceivkwkb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CMBU6KFN.js";import"./Expander-BhqBtq-J.js";import"./ChevronDownIcon-CLCF_ANj.js";import"./ChevronUpIcon-BAudeaNR.js";import"./ListItem-BqwSVno6.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
