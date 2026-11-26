import{r as p,j as s}from"./iframe-5iWNMmdE.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CL8RITx-.js";import{CheckboxStory as c}from"./Checkbox.stories-DtkZjojj.js";import k from"./Help.stories-DPP7pIsF.js";import u from"./RadioButton.stories-BYg7a9X6.js";import{RadioPanel as g}from"./RadioPanel.stories-DVKGRdmC.js";import{F as h}from"./FieldGroup-DfsvHLBs.js";import{C as b}from"./Checkbox-CEzzJFfT.js";import{R as x}from"./RadioPanel-CZnLRAnL.js";import{H as C}from"./Help-DVUiLbCM.js";import{R as G}from"./RadioButton-BQRIDb5o.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D5gUMJkO.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DVD-VGrG.js";import"./SlotComponent-DjH8Ar4b.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CSWcfjjI.js";import"./usePreviousValue-43RCATs1.js";import"./Loader-C2mlFNbZ.js";import"./useDelayedRender-BBaCbzLN.js";import"./useId-BoB8DB50.js";import"./Label-B70o0WVM.js";import"./SupportLabel-BHpz05v6.js";import"./SuccessIcon-7ekygOoi.js";import"./Icon-C9SeG1q2.js";import"./WarningIcon-Bop6NhHW.js";import"./BaseRadioButton.stories-CzWlXtcl.js";import"./BaseRadioButton-BRa6FLoI.js";import"./Title-D4_JZFkC.js";import"./Card-D2VgWKvi.js";import"./Text-Cc1Qt1Ew.js";import"./Tag-MtL5mnfx.js";import"./ExpandablePanel-DGYoyvrJ.js";import"./useAnimatedHeightBetween-Ccudl4Tl.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CTkJz0mN.js";import"./Expander-Bm2a8krt.js";import"./ChevronDownIcon-BL7sv-Tz.js";import"./ChevronUpIcon-C0UAmKyk.js";import"./ListItem-Y52jAjM2.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
