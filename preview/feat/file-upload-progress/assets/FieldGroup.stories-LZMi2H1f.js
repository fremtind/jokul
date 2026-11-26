import{r as p,j as s}from"./iframe-Cgl1Z5NR.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-A-DJbeNn.js";import{CheckboxStory as c}from"./Checkbox.stories-BUPS68-f.js";import k from"./Help.stories-DwnbhfeA.js";import u from"./RadioButton.stories-1xhcDVm2.js";import{RadioPanel as g}from"./RadioPanel.stories-Dc0fFNd1.js";import{F as h}from"./FieldGroup-CAIUo67o.js";import{C as b}from"./Checkbox-BgId34V3.js";import{R as x}from"./RadioPanel-CTBLTrGD.js";import{H as C}from"./Help-CqTNloT5.js";import{R as G}from"./RadioButton-CQXs4HlF.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CDBSq3ow.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BK-bFFRo.js";import"./SlotComponent-BHRR37h_.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BlCgy4Gt.js";import"./usePreviousValue-HJj4A-dP.js";import"./Loader-CJXPn9_y.js";import"./useDelayedRender-CBIGszV0.js";import"./useId-GbcN4_7A.js";import"./Label-BiK5GbNo.js";import"./SupportLabel-J4jZz12X.js";import"./SuccessIcon-CtUP0yHF.js";import"./Icon-CwTF9V-p.js";import"./WarningIcon-uqhtjl1H.js";import"./BaseRadioButton.stories-Bm1wgrnA.js";import"./BaseRadioButton-RkwAWDGU.js";import"./Title-CIeAYrZq.js";import"./Card-BXri8kX_.js";import"./Text-CpH7dZdL.js";import"./Tag-CCTAlQWq.js";import"./ExpandablePanel-Dkwu3NS_.js";import"./useAnimatedHeightBetween-BayO0rWf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CG5rXiYe.js";import"./Expander-bOWx0Wgy.js";import"./ChevronDownIcon-DHyj_Ylz.js";import"./ChevronUpIcon-D8YZ2dPn.js";import"./ListItem-sTxBjiqx.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
