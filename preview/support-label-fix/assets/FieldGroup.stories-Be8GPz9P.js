import{r as p,j as s}from"./iframe-hSS_WXnS.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DuJrYsh2.js";import{CheckboxStory as c}from"./Checkbox.stories-CPuJbm3e.js";import k from"./Help.stories-cz-AZxvl.js";import u from"./RadioButton.stories-efASqfA8.js";import{RadioPanel as g}from"./RadioPanel.stories-B9NosOYz.js";import{F as h}from"./FieldGroup-CZUBUOtl.js";import{C as b}from"./Checkbox-CLpcJXmx.js";import{R as x}from"./RadioPanel-C85IHSE3.js";import{H as C}from"./Help-CKAkiC02.js";import{R as G}from"./RadioButton-O1fQKYzi.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-REWhWswB.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-e2INAVcD.js";import"./SlotComponent-DY_TbiVU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BTArsye9.js";import"./usePreviousValue-B_1qJTaP.js";import"./Loader-DqXwpZ5g.js";import"./useDelayedRender-WV3MhNuf.js";import"./useId-Bf-XDhg4.js";import"./Label-DEpp-RhL.js";import"./SupportLabel-BbXZpbcO.js";import"./SuccessIcon-BeSkaq0s.js";import"./Icon-BuFaYyJU.js";import"./WarningIcon-B1-7Dyux.js";import"./Text-1wwFMnrK.js";import"./BaseRadioButton.stories-puhB63zj.js";import"./BaseRadioButton-CERFyl9C.js";import"./Title-B_ryOCB9.js";import"./Card-agOx_WdN.js";import"./Tag-DrmjjZtw.js";import"./ExpandablePanel-DiDmurnN.js";import"./useAnimatedHeightBetween-DCAs9oHt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Ddos5X5H.js";import"./Expander-5KxuTtom.js";import"./ChevronUpIcon-CbTKNCsN.js";import"./ListItem-FDyZ5fiq.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
