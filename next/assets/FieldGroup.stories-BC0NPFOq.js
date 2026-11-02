import{r as p,j as i}from"./iframe-C1x_O7GQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dzj0CheW.js";import{CheckboxStory as c}from"./Checkbox.stories-eHxZw5d6.js";import k from"./Help.stories-CrOksm8T.js";import u from"./RadioButton.stories-cXIxQ0w8.js";import{RadioPanel as g}from"./RadioPanel.stories-048u1pUm.js";import{F as h}from"./FieldGroup-BxXJLI3a.js";import{C as b}from"./Checkbox-DZIoSjZ3.js";import{R as x}from"./RadioPanel-C6VsLcWf.js";import{H as C}from"./Help-DteHJlPD.js";import{R as G}from"./RadioButton-gECA9rrh.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-De2WFXo1.js";import"./clsx-B-dksMZM.js";import"./Flex-BD5Pk0X5.js";import"./SlotComponent-jX8P7y_e.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DXXs1_1k.js";import"./usePreviousValue-COnGLuVz.js";import"./Loader-DKf6cmKf.js";import"./useDelayedRender-CYXohODo.js";import"./useId-C4R4fvas.js";import"./Label-DMnTm03d.js";import"./SupportLabel-BgIerNnQ.js";import"./SuccessIcon-B2WglTI4.js";import"./Icon-BJfzl0Yo.js";import"./WarningIcon-pm80caIq.js";import"./BaseRadioButton.stories-B5-SQ7LJ.js";import"./BaseRadioButton-BvDii85_.js";import"./Title-BJdYsrya.js";import"./Card-Dum8JngT.js";import"./Text-BF8NtdWP.js";import"./Tag-C22cCVAw.js";import"./ExpandablePanel-Cp9QHIr0.js";import"./useAnimatedHeightBetween-DjJLGAbJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CZYBlnni.js";import"./Expander-C8bsWDo9.js";import"./ChevronUpIcon-DukGfmmN.js";import"./ListItem-Bc45ORHC.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
