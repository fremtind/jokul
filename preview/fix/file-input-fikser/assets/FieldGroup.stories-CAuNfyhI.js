import{r as p,j as s}from"./iframe-BhtIFy6P.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-NRJk5Al4.js";import{CheckboxStory as c}from"./Checkbox.stories-DuyYGLxR.js";import k from"./Help.stories-DTqcPeA5.js";import u from"./RadioButton.stories-C7HqJs9E.js";import{RadioPanel as g}from"./RadioPanel.stories-GMH5ln13.js";import{F as h}from"./FieldGroup-QQITtHlB.js";import{C as b}from"./Checkbox-dxrOxonn.js";import{R as x}from"./RadioPanel-Cv3zJhHc.js";import{H as C}from"./Help-C_GDRM_i.js";import{R as G}from"./RadioButton-DXaPpZqN.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BenAipjo.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-IGWhBq2Z.js";import"./SlotComponent-Bw3vZ-Fh.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D0nqxGUr.js";import"./usePreviousValue-DCV0HzZ3.js";import"./Loader-Bx8Hr9NU.js";import"./useDelayedRender-BE-t27RM.js";import"./useId-B6OCNSlV.js";import"./Label-CaBmuHg6.js";import"./SupportLabel-BW4UHwY3.js";import"./SuccessIcon-DG1yzQDE.js";import"./Icon-r3Xp2Bi8.js";import"./WarningIcon-Cd028WH3.js";import"./BaseRadioButton.stories-Bx-MiBQI.js";import"./BaseRadioButton-D7QgoA9C.js";import"./Title-BlW4Orm9.js";import"./Card-D81lZAHi.js";import"./Text-CxiI8HcJ.js";import"./Tag-DBGAh9MB.js";import"./ExpandablePanel-B1vt-2AH.js";import"./useAnimatedHeightBetween-7JPSW2rB.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-By7ivkPh.js";import"./Expander-CPywVIwC.js";import"./ChevronDownIcon-DFqwYYm-.js";import"./ChevronUpIcon-BSKE48GX.js";import"./ListItem-yBleDV8v.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
