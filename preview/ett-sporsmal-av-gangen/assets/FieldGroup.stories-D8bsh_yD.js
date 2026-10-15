import{r as p,j as i}from"./iframe-Dj_0KXfL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-GhPCyM70.js";import{CheckboxStory as c}from"./Checkbox.stories-Dx8D3bb2.js";import k from"./Help.stories-B75kipka.js";import u from"./RadioButton.stories-BCDi90V6.js";import{RadioPanel as g}from"./RadioPanel.stories-DNygTJ1P.js";import{F as h}from"./FieldGroup-DvEf42vL.js";import{C as b}from"./Checkbox-B-D_oc7C.js";import{R as x}from"./RadioPanel-BulBqllF.js";import{H as C}from"./Help-CK9iv4p-.js";import{R as G}from"./RadioButton-mzfJxH-2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BvJY87b5.js";import"./clsx-B-dksMZM.js";import"./Flex-BJYSQ6HE.js";import"./SlotComponent-DuxdfH2W.js";import"./mergeRefs-BU0ZDFNS.js";import"./Button-DV1CoMY_.js";import"./usePreviousValue-Bqh6uB5l.js";import"./Loader-DX-kpcKZ.js";import"./useDelayedRender-Cve8I8gR.js";import"./useId-CiF6n8vQ.js";import"./Label-BW7pe0Q6.js";import"./Title-Dw6GHWGe.js";import"./SupportLabel-GwdTy8cu.js";import"./SuccessIcon-08BHLgdl.js";import"./Icon-DQ2KKCVA.js";import"./WarningIcon-BOII7UWe.js";import"./BaseRadioButton.stories-B5uaFQ60.js";import"./BaseRadioButton-vNCRnSBc.js";import"./Card-D5dElDX1.js";import"./Text-BHB0IZjA.js";import"./Tag-DJkdVHcH.js";import"./ExpandablePanel-B_2SNN29.js";import"./useAnimatedHeightBetween-CVd0yepl.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-10jcxfdA.js";import"./Expander-CAbyirPF.js";import"./ChevronUpIcon-Bg23iDyh.js";import"./ListItem-Ch00Y7fJ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
