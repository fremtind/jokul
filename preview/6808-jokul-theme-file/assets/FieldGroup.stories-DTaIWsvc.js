import{r as p,j as s}from"./iframe-ocWUqytA.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BMMSol-A.js";import{CheckboxStory as c}from"./Checkbox.stories-BWxye2Bp.js";import k from"./Help.stories-BUl5eGDL.js";import u from"./RadioButton.stories-BKBbRKZ4.js";import{RadioPanel as g}from"./RadioPanel.stories-BQxrcgnl.js";import{F as h}from"./FieldGroup-CrB6WW5j.js";import{C as b}from"./Checkbox-BmiKcLbN.js";import{R as x}from"./RadioPanel-olMasHae.js";import{H as C}from"./Help-DwxYUUrQ.js";import{R as G}from"./RadioButton-D_kADEX0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bo47WM3W.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-QS4msL-J.js";import"./SlotComponent-DqYWBsm3.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D6-UP-Rb.js";import"./usePreviousValue-CTNJwNyq.js";import"./Loader-67u_jw2z.js";import"./useDelayedRender-CebXLyeM.js";import"./useId--g32T0GW.js";import"./Label-_rjQTOZZ.js";import"./SupportLabel-CCLzhbso.js";import"./SuccessIcon-Cli6Ss7S.js";import"./Icon-CH8wQPjD.js";import"./WarningIcon-c0KI4di2.js";import"./BaseRadioButton.stories-BB8_JSBi.js";import"./BaseRadioButton-mc9MNDlG.js";import"./Title-Dzfkn7LM.js";import"./Card-D9wiV-M6.js";import"./Text-MaK0e_DB.js";import"./Tag-DmhkRHBR.js";import"./ExpandablePanel-CE7EHJFk.js";import"./useAnimatedHeightBetween-D_1Be0-P.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-tISOw7Mm.js";import"./Expander-K-N-3bDN.js";import"./ChevronUpIcon-qzN4pAye.js";import"./ListItem-I96kfEXN.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
