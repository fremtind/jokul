import{r as p,j as s}from"./iframe-CsKQaf9X.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-cOhNOtAD.js";import{CheckboxStory as c}from"./Checkbox.stories-DXD1GP4w.js";import k from"./Help.stories-DtfxLGMe.js";import u from"./RadioButton.stories-z4hFsToT.js";import{RadioPanel as g}from"./RadioPanel.stories-D852T8v7.js";import{F as h}from"./FieldGroup-CipTeyUn.js";import{C as b}from"./Checkbox-BpG-uKWn.js";import{R as x}from"./RadioPanel-CXUoZRmp.js";import{H as C}from"./Help-Cjhh_FLa.js";import{R as G}from"./RadioButton-D26Q-UID.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DXFB82qL.js";import"./clsx-B-dksMZM.js";import"./Flex-CBvRzQGX.js";import"./SlotComponent-BSNnSKK-.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-_GY0R5JZ.js";import"./usePreviousValue-D7y7UGJp.js";import"./Loader-Cwl-zey1.js";import"./useDelayedRender-CbIwPEyv.js";import"./BaseRadioButton.stories-DCcyRNmO.js";import"./BaseRadioButton-DdgH0jls.js";import"./useId-vhp9621b.js";import"./Title-B0DSGzB8.js";import"./Card-BsHgf0hh.js";import"./Text-Fhz3om7y.js";import"./Tag-Bl01Lm9V.js";import"./ExpandablePanel-DAdtIkGy.js";import"./useAnimatedHeightBetween-CqYMLgDs.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BeZSUbEN.js";import"./Expander-D8-t95ie.js";import"./ChevronDownIcon-CKeLylVx.js";import"./Icon-LMmyhCz5.js";import"./ChevronUpIcon-qAS52I29.js";import"./ListItem-BQQaHi_T.js";import"./Label-BOsOpdwY.js";import"./SupportLabel-BDUw8UMX.js";import"./SuccessIcon-C4uUBWrZ.js";import"./WarningIcon-DwDqjRi5.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
