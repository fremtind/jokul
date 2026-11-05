import{r as p,j as i}from"./iframe-C5GAKXa9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BJ5QYsu8.js";import{CheckboxStory as c}from"./Checkbox.stories-DYTfLKBN.js";import k from"./Help.stories-CT0NGqnI.js";import u from"./RadioButton.stories-BkiAlrZa.js";import{RadioPanel as g}from"./RadioPanel.stories-BCgZif16.js";import{F as h}from"./FieldGroup-BnRIxWnh.js";import{C as b}from"./Checkbox-BCgTBtNQ.js";import{R as x}from"./RadioPanel-DdjJVP-9.js";import{H as C}from"./Help-Cqiqawn7.js";import{R as G}from"./RadioButton-CY8AG8ZN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DzYL7QEc.js";import"./clsx-B-dksMZM.js";import"./Flex-BKS0lXw9.js";import"./SlotComponent-RL9gAutU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C-PfuO9z.js";import"./usePreviousValue-5ZN5WndJ.js";import"./Loader-BNYDxbaO.js";import"./useDelayedRender-BsHA4Lmg.js";import"./useId-DEXhCBAt.js";import"./Label-DX8xpIf6.js";import"./SupportLabel-Bva8BE-R.js";import"./SuccessIcon-CStkFEn5.js";import"./Icon-C6DmseDa.js";import"./WarningIcon-Dg6iZwcr.js";import"./BaseRadioButton.stories-B-c56C8X.js";import"./BaseRadioButton-DSikm8Uf.js";import"./Title-CWQ8BZE4.js";import"./Card-B2Qo7aqz.js";import"./Text-bafc3nva.js";import"./Tag-C1PWeRjB.js";import"./ExpandablePanel-C23xAWCT.js";import"./useAnimatedHeightBetween-BoW1mcoU.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CIp8bJxQ.js";import"./Expander-BoWUW2Ub.js";import"./ChevronUpIcon-Dj3-TEvZ.js";import"./ListItem-mFUEI6jT.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
