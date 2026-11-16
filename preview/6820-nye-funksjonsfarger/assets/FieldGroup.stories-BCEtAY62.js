import{r as p,j as s}from"./iframe-BCEGqtsB.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-D9iK0oz_.js";import{CheckboxStory as c}from"./Checkbox.stories-CwPuiF_r.js";import k from"./Help.stories-BFjkhIpy.js";import u from"./RadioButton.stories-arpS2v04.js";import{RadioPanel as g}from"./RadioPanel.stories-C4pUI0N6.js";import{F as h}from"./FieldGroup-BxcnLKOu.js";import{C as b}from"./Checkbox-DZim75mX.js";import{R as x}from"./RadioPanel-xdHmn9HF.js";import{H as C}from"./Help-B33uLnaH.js";import{R as G}from"./RadioButton-D-M88Qk2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CJ1wFHKl.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CRw3Y0a1.js";import"./SlotComponent-oMKKT7so.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BWG6_SKi.js";import"./usePreviousValue-CdmvEBeA.js";import"./Loader-D_XhON4g.js";import"./useDelayedRender-39VIOqr9.js";import"./useId-y2y2tuTK.js";import"./Label-y51Hvdg2.js";import"./SupportLabel-Cwkp56LJ.js";import"./SuccessIcon-C7whmG2W.js";import"./Icon-IarpUUV-.js";import"./WarningIcon-CMBG1ZMF.js";import"./BaseRadioButton.stories-DFbLspAe.js";import"./BaseRadioButton-Dl4kmBwg.js";import"./Title-CE4X9BLg.js";import"./Card-DTCgy4c5.js";import"./Text-CMOCoFCV.js";import"./Tag-CBd-XnQv.js";import"./ExpandablePanel-WZvWJkud.js";import"./useAnimatedHeightBetween-H_31Oe_5.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D8j7DlQ1.js";import"./Expander-C2RnIFsb.js";import"./ChevronUpIcon-D9O1auwl.js";import"./ListItem-Bil9pjzl.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
