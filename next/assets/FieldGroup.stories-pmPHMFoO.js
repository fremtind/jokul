import{r as p,j as i}from"./iframe-CMTplqJo.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CVzcfHwz.js";import{CheckboxStory as c}from"./Checkbox.stories-Dsr1vri-.js";import k from"./Help.stories-B8bCjUwU.js";import u from"./RadioButton.stories-BrsxIYJQ.js";import{RadioPanel as g}from"./RadioPanel.stories-ChYSUCc8.js";import{F as h}from"./FieldGroup-sV6qPmcD.js";import{C as b}from"./Checkbox-BMzEGNhi.js";import{R as x}from"./RadioPanel-94GLTJGI.js";import{H as C}from"./Help-eTRDYwAs.js";import{R as G}from"./RadioButton-CPmwn0I-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CgWMGr6P.js";import"./clsx-B-dksMZM.js";import"./Flex-Cozbiuh3.js";import"./SlotComponent-96B6i1N2.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-lWktbHFr.js";import"./usePreviousValue-1pSTm4ys.js";import"./Loader-D3c14EZC.js";import"./useDelayedRender-Dttd8YNS.js";import"./useId-C3tVUgss.js";import"./Label-CQVW3tcM.js";import"./SupportLabel-Dpb6ooSZ.js";import"./SuccessIcon-DonR_IWg.js";import"./Icon-DTiJGJJd.js";import"./WarningIcon-C22n8rPH.js";import"./BaseRadioButton.stories-Dw_GRdiz.js";import"./BaseRadioButton-BfmhTbcL.js";import"./Title-D7nbWypj.js";import"./Card-D_2P39nt.js";import"./Text-D3m7GFAe.js";import"./Tag-kycEQg5z.js";import"./ExpandablePanel-BUvyqUcR.js";import"./useAnimatedHeightBetween-D_rsKRBb.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bxew7vzK.js";import"./Expander-BEdE8BO8.js";import"./ChevronUpIcon-Dw1GrJUi.js";import"./ListItem-C_nLn-1T.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
