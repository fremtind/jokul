import{r as p,j as i}from"./iframe-RvZfn1q1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-jC1etzeA.js";import{CheckboxStory as c}from"./Checkbox.stories-YuxPPLwb.js";import k from"./Help.stories-DixRGvG3.js";import u from"./RadioButton.stories-BPA98kwc.js";import{RadioPanel as g}from"./RadioPanel.stories-CxVX5_V3.js";import{F as h}from"./FieldGroup-CDiR0DqP.js";import{C as b}from"./Checkbox-CXo27gkv.js";import{R as x}from"./RadioPanel-BPpyWwHw.js";import{H as C}from"./Help-CVaZX_jo.js";import{R as G}from"./RadioButton-BeiJCF9F.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ChIzcT9B.js";import"./clsx-B-dksMZM.js";import"./Flex-D2iKDE7L.js";import"./SlotComponent-CzrBaKuh.js";import"./mergeRefs-BGE43XZE.js";import"./Button-BcGKwTFX.js";import"./usePreviousValue-myeBlhdi.js";import"./Loader-BMWU8TzI.js";import"./useDelayedRender-CTFh1S-s.js";import"./useId-Ch1X8nij.js";import"./Label-ULociDTI.js";import"./SupportLabel-OVQ0cGXh.js";import"./SuccessIcon-BDBwG57D.js";import"./Icon-C5TKyNa-.js";import"./WarningIcon-Dwsu9Vor.js";import"./BaseRadioButton.stories-5bec1eYP.js";import"./BaseRadioButton-CISgIrRV.js";import"./Title-PtFRdslS.js";import"./Card-4DgBrDue.js";import"./Text-CpD10my7.js";import"./Tag-m10g-Cgn.js";import"./ExpandablePanel-BinQfZ-a.js";import"./useAnimatedHeightBetween-CmMdKfXQ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D6nbSv6J.js";import"./Expander-DnV0GoB3.js";import"./ChevronUpIcon-CqM_fAwW.js";import"./ListItem-B4i0v4F5.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
