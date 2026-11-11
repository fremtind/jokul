import{r as p,j as s}from"./iframe-D2RE8z0n.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-C7OuTSoK.js";import{CheckboxStory as c}from"./Checkbox.stories-CCJwUwRB.js";import k from"./Help.stories-Cuc3BAFE.js";import u from"./RadioButton.stories-BoGL0lVC.js";import{RadioPanel as g}from"./RadioPanel.stories-uqyaz7c6.js";import{F as h}from"./FieldGroup-D0-89pqQ.js";import{C as b}from"./Checkbox-VjwNbsrY.js";import{R as x}from"./RadioPanel-BWA4FAWj.js";import{H as C}from"./Help-CacK4wur.js";import{R as G}from"./RadioButton-DFTv_I5R.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CvHfRns5.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-D4PBYlX8.js";import"./SlotComponent-B4GM3I52.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Ct9Hr_WM.js";import"./usePreviousValue-D14UfbsP.js";import"./Loader-DDScX56y.js";import"./useDelayedRender-CidqixZN.js";import"./useId-D-LqsbKC.js";import"./Label-DONfRDsX.js";import"./SupportLabel-B_o8EOyk.js";import"./SuccessIcon-DNjV6av9.js";import"./Icon-DuWJR4Mk.js";import"./WarningIcon-CKzaX-JY.js";import"./BaseRadioButton.stories-CEaIOzyH.js";import"./BaseRadioButton-B0Wqrr_x.js";import"./Title-DpDy2Jkg.js";import"./Card-DwXH10P6.js";import"./Text-Cc_P78Q-.js";import"./Tag-CDYB7rZN.js";import"./ExpandablePanel-C74WIa_f.js";import"./useAnimatedHeightBetween-DdDip0Cv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-OZaALYRd.js";import"./Expander-DD6T_xed.js";import"./ChevronUpIcon-Wh_9PMd4.js";import"./ListItem-BRlz0UWL.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
