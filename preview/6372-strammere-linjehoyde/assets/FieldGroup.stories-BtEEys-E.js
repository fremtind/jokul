import{r as p,j as s}from"./iframe-ufHHIAkF.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BcGRtrz1.js";import{CheckboxStory as c}from"./Checkbox.stories-dL0ni03n.js";import k from"./Help.stories-Cmm7cmxl.js";import u from"./RadioButton.stories-BXf5vUmc.js";import{RadioPanel as g}from"./RadioPanel.stories-p9iZs9sq.js";import{F as h}from"./FieldGroup-CzmB-nZM.js";import{C as b}from"./Checkbox-DQLpCr1J.js";import{R as x}from"./RadioPanel-BxOPZ-G0.js";import{H as C}from"./Help-CrRvkh6p.js";import{R as G}from"./RadioButton-CbcrKhiD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BPn36l3M.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CxGY_1q8.js";import"./SlotComponent-BEFKswia.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BtKnG7Zv.js";import"./usePreviousValue-CiDMQj5i.js";import"./Loader-Dt6-KTTK.js";import"./useDelayedRender-BKCv9C8v.js";import"./useId-D-4XTEwL.js";import"./Label-C-uVO7Wd.js";import"./SupportLabel-BwGvdZ3p.js";import"./SuccessIcon-DYxNULKz.js";import"./Icon-ElfouUtx.js";import"./WarningIcon-yEj-Z5p7.js";import"./BaseRadioButton.stories-B0dAaC2A.js";import"./BaseRadioButton-C8VGvvk5.js";import"./Title-zEuWSQQv.js";import"./Card-CK0zyxsv.js";import"./Text-BPZ5BlG0.js";import"./Tag-7TqRTMc0.js";import"./ExpandablePanel-B4nQcMyk.js";import"./useAnimatedHeightBetween-C5DKocsd.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BeQ4K4q1.js";import"./Expander-J6V00kuV.js";import"./ChevronUpIcon-BArKHmpF.js";import"./ListItem-BfvN1gIQ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
