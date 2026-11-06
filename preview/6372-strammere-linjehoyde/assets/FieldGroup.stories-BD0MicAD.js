import{r as p,j as s}from"./iframe-DY_UNGw3.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-1yXv2IcN.js";import{CheckboxStory as c}from"./Checkbox.stories-BIKqcnBb.js";import k from"./Help.stories-PH1bEPcG.js";import u from"./RadioButton.stories-BI84l9xB.js";import{RadioPanel as g}from"./RadioPanel.stories-Cg49bBse.js";import{F as h}from"./FieldGroup-DnwCZlAW.js";import{C as b}from"./Checkbox-CzSb7nEm.js";import{R as x}from"./RadioPanel-DRAH2WVI.js";import{H as C}from"./Help-D5feH8Hs.js";import{R as G}from"./RadioButton-D9dX4htn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-h_vDeIk-.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-LWgvdm1W.js";import"./SlotComponent-BSWVJxFG.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CUHMnuw3.js";import"./usePreviousValue--GHruUyN.js";import"./Loader-BcJU36QW.js";import"./useDelayedRender-akJ86Vlq.js";import"./useId-We28qqTa.js";import"./Label-D4_PNRYw.js";import"./SupportLabel-DE0XmpU0.js";import"./SuccessIcon-Cjpb78co.js";import"./Icon-BDSlQZXT.js";import"./WarningIcon-Blmm6qnm.js";import"./BaseRadioButton.stories-czKqJwol.js";import"./BaseRadioButton-DEzKH1YF.js";import"./Title-E5LYu1O3.js";import"./Card-CTw3DNTm.js";import"./Text-8OigWPUs.js";import"./Tag-CcBiIV5W.js";import"./ExpandablePanel-D-3BeoHh.js";import"./useAnimatedHeightBetween-D72hXLeY.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C_2ip2qB.js";import"./Expander-BBCmgXU3.js";import"./ChevronUpIcon-DLRLZX_f.js";import"./ListItem-CoYP5Dto.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
