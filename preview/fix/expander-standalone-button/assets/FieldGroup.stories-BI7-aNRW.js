import{r as p,j as s}from"./iframe-D6aFsJFG.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Bmwc0X9V.js";import{CheckboxStory as c}from"./Checkbox.stories-C9Mnag6O.js";import k from"./Help.stories-mCQ1TalA.js";import u from"./RadioButton.stories-CLVa4rCz.js";import{RadioPanel as g}from"./RadioPanel.stories-CdhTiuUr.js";import{F as h}from"./FieldGroup-CyYHC69o.js";import{C as b}from"./Checkbox-BnrBzmW4.js";import{R as x}from"./RadioPanel-Dczt3ETQ.js";import{H as C}from"./Help-BCDW3TI8.js";import{R as G}from"./RadioButton-4OHigBya.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CFtOGdjo.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-8A3BJYOi.js";import"./SlotComponent-So0U4zdO.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CSrFnqIG.js";import"./usePreviousValue-qx_ix9cQ.js";import"./Loader-BmaXtObr.js";import"./useDelayedRender-BUGn9rJo.js";import"./useId-dLmhdH3e.js";import"./Label-3cZW-Ll7.js";import"./SupportLabel-CmDxYM3a.js";import"./SuccessIcon-CyE0Cl7W.js";import"./Icon-DCPNNKu8.js";import"./WarningIcon-Bk7-IRuL.js";import"./BaseRadioButton.stories-BFZ8G8dO.js";import"./BaseRadioButton-D2fBL7CD.js";import"./Title-BTXEqIsF.js";import"./Card-DoF4Uewc.js";import"./Text-BXkwprk7.js";import"./Tag-ClzwAhIH.js";import"./ExpandablePanel-CMcDdZ9z.js";import"./useAnimatedHeightBetween-r6NmYKfq.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C-bBQRXY.js";import"./Expander-BajmnUtA.js";import"./ChevronDownIcon-DY4piapG.js";import"./ChevronUpIcon-CdoRzl_v.js";import"./ListItem-ClNX_TN6.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
