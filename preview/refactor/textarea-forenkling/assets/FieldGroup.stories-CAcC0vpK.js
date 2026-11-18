import{r as p,j as s}from"./iframe-CaoJHuFN.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DJpAJEqx.js";import{CheckboxStory as c}from"./Checkbox.stories-DgygvnXn.js";import k from"./Help.stories-BaVMR19w.js";import u from"./RadioButton.stories-fUD0xL_L.js";import{RadioPanel as g}from"./RadioPanel.stories-CrIFYKGK.js";import{F as h}from"./FieldGroup-BYxcmheh.js";import{C as b}from"./Checkbox-Blf-vHym.js";import{R as x}from"./RadioPanel-C1qT9cRE.js";import{H as C}from"./Help-BDhuzSxJ.js";import{R as G}from"./RadioButton-BNnqR4u0.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ClrOZVx6.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CtbNB4r1.js";import"./SlotComponent-BvN8nwUL.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BrogM6sg.js";import"./usePreviousValue-Df6f8oIb.js";import"./Loader-X78lXtcp.js";import"./useDelayedRender-DDv77BG3.js";import"./useId-BM9deANG.js";import"./Label-DCVYDYHO.js";import"./SupportLabel-CLT7COzi.js";import"./SuccessIcon-Bk8yMG2X.js";import"./Icon-BrwWpGMj.js";import"./WarningIcon-BO9Muxsf.js";import"./BaseRadioButton.stories-BNxaEfBu.js";import"./BaseRadioButton-B3Vn_sVI.js";import"./Title-DeylpG1k.js";import"./Card-CRKTuA-M.js";import"./Text-he57YJmG.js";import"./Tag-DprX9Asz.js";import"./ExpandablePanel-C4XD7Kxh.js";import"./useAnimatedHeightBetween-CPwVKCYK.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CBVDFKSt.js";import"./Expander-C9wgiHQn.js";import"./ChevronUpIcon-DdP8RB37.js";import"./ListItem-DJBWwqaJ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
