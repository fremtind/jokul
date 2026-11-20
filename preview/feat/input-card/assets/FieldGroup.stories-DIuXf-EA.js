import{r as p,j as s}from"./iframe-zPrpp1R5.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Crjchkt7.js";import{CheckboxStory as c}from"./Checkbox.stories-D0rd7JpU.js";import k from"./Help.stories-CaFvpAiF.js";import u from"./RadioButton.stories-CqKmwF-U.js";import{RadioPanel as g}from"./RadioPanel.stories-C4LnBnnE.js";import{F as h}from"./FieldGroup-Ci8FjN2o.js";import{C as b}from"./Checkbox--rZE2rFR.js";import{R as x}from"./RadioPanel-COfKryUU.js";import{H as C}from"./Help-6ODqv8Pv.js";import{R as G}from"./RadioButton-DKriSwUx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DMv7OwlR.js";import"./clsx-B-dksMZM.js";import"./types-BKcj73j9.js";import"./Flex-CdebVdLk.js";import"./SlotComponent-B-Ea6QWv.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DIQ0pqUJ.js";import"./usePreviousValue-GAX2KXV7.js";import"./Loader-D3v5yjbw.js";import"./useDelayedRender-BL1S0nYJ.js";import"./useId-Dw8g-OdV.js";import"./Label-BXGwE_ae.js";import"./SupportLabel-CMhejlog.js";import"./SuccessIcon-B3ON2Sqp.js";import"./Icon-CI8V8vfn.js";import"./WarningIcon-qWm2reEH.js";import"./BaseRadioButton.stories-DGVovKQs.js";import"./BaseRadioButton-BNUasZkb.js";import"./Title-BjLpP8W_.js";import"./Card-DwCQ5_sH.js";import"./Text-CcUpV-hU.js";import"./Tag-BKDxQ0r5.js";import"./ExpandablePanel-B9GE5IyK.js";import"./useAnimatedHeightBetween-IyUtWyD-.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BY8RehFc.js";import"./Expander-B6o3m_Zp.js";import"./ChevronUpIcon-B01i2Uef.js";import"./ListItem-oC58397r.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
