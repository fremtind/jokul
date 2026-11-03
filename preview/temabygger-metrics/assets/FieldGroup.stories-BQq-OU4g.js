import{r as p,j as i}from"./iframe-CiJ8GGEc.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CLYQKzhq.js";import{CheckboxStory as c}from"./Checkbox.stories-BdNMQMX8.js";import k from"./Help.stories-BGOArJ_t.js";import u from"./RadioButton.stories-lCcrYVpO.js";import{RadioPanel as g}from"./RadioPanel.stories-DIDDl-iS.js";import{F as h}from"./FieldGroup-CwR6uLvS.js";import{C as b}from"./Checkbox-BRLfL3zk.js";import{R as x}from"./RadioPanel-CqAqL2xt.js";import{H as C}from"./Help-D9gHqpwz.js";import{R as G}from"./RadioButton-PH-u7yBn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BnJ5CmSl.js";import"./clsx-B-dksMZM.js";import"./Flex-5BQLI9fz.js";import"./SlotComponent-D-QZUXmB.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B-OpAmgz.js";import"./usePreviousValue-jrTDKNiY.js";import"./Loader-DZipQdCd.js";import"./useDelayedRender-BmmzBc-h.js";import"./useId-FwDBDePl.js";import"./Label-D8pBaGvN.js";import"./SupportLabel-DxahUncI.js";import"./SuccessIcon-Cf0LxzXt.js";import"./Icon-BIWR4yky.js";import"./WarningIcon-BjlKmUS6.js";import"./BaseRadioButton.stories-Dd_cjifm.js";import"./BaseRadioButton-DBea6yPS.js";import"./Title-CuWHT1If.js";import"./Card-D4uxmUvn.js";import"./Text-9wRmI5Ok.js";import"./Tag-DThPmNVn.js";import"./ExpandablePanel-Dea7ALxZ.js";import"./useAnimatedHeightBetween-BAc05uR_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BhN4Wj29.js";import"./Expander-Cly_X9MU.js";import"./ChevronUpIcon-DZ0R68fc.js";import"./ListItem-Bvo7uEtk.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
