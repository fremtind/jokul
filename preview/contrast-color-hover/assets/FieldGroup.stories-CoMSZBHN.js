import{r as p,j as i}from"./iframe-BsPziH6Q.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DRx3p-Zh.js";import{CheckboxStory as c}from"./Checkbox.stories-BFt2qK55.js";import k from"./Help.stories-CX0nJFrf.js";import u from"./RadioButton.stories-B_vS9vin.js";import{RadioPanel as g}from"./RadioPanel.stories-Bwd5-XY1.js";import{F as h}from"./FieldGroup-DG-zqxM0.js";import{C as b}from"./Checkbox-DRTVExba.js";import{R as x}from"./RadioPanel-CWZnYd3D.js";import{H as C}from"./Help-B6PAukYi.js";import{R as G}from"./RadioButton-Bn5xDWKb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D1BGt4lq.js";import"./clsx-B-dksMZM.js";import"./Flex-B--qTG0G.js";import"./SlotComponent-FyU2fxkV.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-kStMfmsS.js";import"./usePreviousValue-ziuVqnYA.js";import"./Loader-B3cdSKDn.js";import"./useDelayedRender-CLjzaVWi.js";import"./useId-B8mKrpqT.js";import"./Label--kEZRLgF.js";import"./SupportLabel-CFoOb7cl.js";import"./SuccessIcon-D740UtWV.js";import"./Icon-CtF_vN_8.js";import"./WarningIcon-C_15yUL3.js";import"./BaseRadioButton.stories-CJHCyMvf.js";import"./BaseRadioButton-_f89DnWQ.js";import"./Title-DfopNUyK.js";import"./Card-56UxBEub.js";import"./Text-WZhAxAZr.js";import"./Tag-DBEkk3Z9.js";import"./ExpandablePanel-DsgOZORd.js";import"./useAnimatedHeightBetween-BM2uMDvN.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CQgCcqYb.js";import"./Expander-DgTf9V5s.js";import"./ChevronUpIcon-Dmzqj8NO.js";import"./ListItem-Cl5uYBlp.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
