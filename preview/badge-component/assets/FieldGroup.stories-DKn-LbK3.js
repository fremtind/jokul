import{r as p,j as i}from"./iframe-BMcbZFRK.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BcreA_ti.js";import{CheckboxStory as c}from"./Checkbox.stories-B_9pQE8L.js";import k from"./Help.stories-BJCQ5XZp.js";import u from"./RadioButton.stories-CRq2sgke.js";import{RadioPanel as g}from"./RadioPanel.stories-BzFY-ha2.js";import{F as h}from"./FieldGroup-BltYmj4p.js";import{C as b}from"./Checkbox-TNm43cae.js";import{R as x}from"./RadioPanel-_a-T7t46.js";import{H as C}from"./Help-BBhti97u.js";import{R as G}from"./RadioButton-C4EUCV8D.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DGp_8nmD.js";import"./clsx-B-dksMZM.js";import"./Flex-CN2mbWqg.js";import"./SlotComponent-CPigxWX7.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-MWMlfgqt.js";import"./usePreviousValue-GJEWoVtT.js";import"./Loader-kiFstNrj.js";import"./useDelayedRender-LxMiNHk-.js";import"./useId-Deh9Tok_.js";import"./Label-ttLof0MM.js";import"./SupportLabel-kY2cjEpi.js";import"./SuccessIcon-CvDfpDZk.js";import"./Icon-DKT90-_y.js";import"./WarningIcon-OXJF_bDH.js";import"./BaseRadioButton.stories-BYj40hub.js";import"./BaseRadioButton-WO8YA6yo.js";import"./Title-BxzqrCCy.js";import"./Card-CbxZvMJj.js";import"./Text-r94iz1gx.js";import"./Tag-Ckcx8nBM.js";import"./ExpandablePanel-SrPncMKg.js";import"./useAnimatedHeightBetween-BpM6aEx3.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-6gfrtT52.js";import"./Expander-DsR_Bz3E.js";import"./ChevronUpIcon-BqUdIJ0x.js";import"./ListItem-CCxRPeva.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
