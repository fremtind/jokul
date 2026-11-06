import{r as p,j as s}from"./iframe-Ckso1DLj.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Cp_nBmLh.js";import{CheckboxStory as c}from"./Checkbox.stories-SHnFgqY0.js";import k from"./Help.stories-DWDVUgpx.js";import u from"./RadioButton.stories-tWxLvNwM.js";import{RadioPanel as g}from"./RadioPanel.stories-musPduPs.js";import{F as h}from"./FieldGroup-D5O7bvOs.js";import{C as b}from"./Checkbox-CiGYcfw0.js";import{R as x}from"./RadioPanel-DQhIgf6o.js";import{H as C}from"./Help-BA8liWER.js";import{R as G}from"./RadioButton-DQtBgCHD.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dh2_1fFO.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CO9dyTkX.js";import"./SlotComponent-Bk_HGcb_.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BQKxk7HP.js";import"./usePreviousValue-m0_TBFot.js";import"./Loader-BblVPJQC.js";import"./useDelayedRender-BMR4IPpV.js";import"./useId-_NOsu8Mt.js";import"./Label-BFrV4u7R.js";import"./SupportLabel-BoN_OFZM.js";import"./SuccessIcon-B36BLPih.js";import"./Icon-BrfAHOom.js";import"./WarningIcon-qNv7Y9yd.js";import"./BaseRadioButton.stories-DpEN1uVZ.js";import"./BaseRadioButton-SS7LHWeD.js";import"./Title-BYlTQWfc.js";import"./Card-CRlQwKRM.js";import"./Text-DniyLSvv.js";import"./Tag-h0NraArK.js";import"./ExpandablePanel-B2zdhuQA.js";import"./useAnimatedHeightBetween-DsTrIAb9.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C1rn-ToH.js";import"./Expander-CWsDxHCU.js";import"./ChevronUpIcon-C4-BaqKx.js";import"./ListItem-bHEJ8Fne.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
