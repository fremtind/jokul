import{r as p,j as i}from"./iframe-G-vXLJKL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Df4C7l5D.js";import{CheckboxStory as c}from"./Checkbox.stories-DD2WsrqO.js";import k from"./Help.stories-C5q83yYg.js";import u from"./RadioButton.stories-DspbwJ4o.js";import{RadioPanel as g}from"./RadioPanel.stories-iAQ8A6BE.js";import{F as h}from"./FieldGroup-CN8bKdYp.js";import{C as b}from"./Checkbox-CZakA2NN.js";import{R as x}from"./RadioPanel-D8xVS3oP.js";import{H as C}from"./Help-D1Kj1xfE.js";import{R as G}from"./RadioButton-CWtDhRyl.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DfVpDjXj.js";import"./clsx-B-dksMZM.js";import"./Flex-Dip84E7J.js";import"./SlotComponent-CqX1GQCO.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BC6OLLTE.js";import"./usePreviousValue-D-jaeRpF.js";import"./Loader-D4eONkE_.js";import"./useDelayedRender-1YF5OrAL.js";import"./useId-gu2LT7VV.js";import"./Label-D0kqDqIe.js";import"./SupportLabel-BJgy1xDL.js";import"./SuccessIcon-SWri2Mg-.js";import"./Icon-DwjEjgA-.js";import"./WarningIcon-BAOb8LA8.js";import"./BaseRadioButton.stories-CC3VnjNi.js";import"./BaseRadioButton-Cn4sGbA8.js";import"./Title-DYWqPmw7.js";import"./Card-l5R8JNdC.js";import"./Text-DV894iX0.js";import"./Tag-XRfM8avi.js";import"./ExpandablePanel-B1UEkntX.js";import"./useAnimatedHeightBetween-dJ0qW1DP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DG5W-wNC.js";import"./Expander-Dv5ncGPT.js";import"./ChevronUpIcon-BcrsWl8T.js";import"./ListItem-KG88-hlu.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
