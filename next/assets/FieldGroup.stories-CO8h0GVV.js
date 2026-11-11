import{r as p,j as s}from"./iframe-Cs-BUai-.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DYqryJP_.js";import{CheckboxStory as c}from"./Checkbox.stories-OzsMy3iI.js";import k from"./Help.stories-7xZ_xVdO.js";import u from"./RadioButton.stories-BX_6BHDa.js";import{RadioPanel as g}from"./RadioPanel.stories-Dgq6HAbc.js";import{F as h}from"./FieldGroup-CkEoBRgz.js";import{C as b}from"./Checkbox-Bt-jeeTI.js";import{R as x}from"./RadioPanel-C6PWRyzV.js";import{H as C}from"./Help-DdRerLOj.js";import{R as G}from"./RadioButton-D0dLJdou.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C8rL2Z-0.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B5wdiFi1.js";import"./SlotComponent-i5lghHO-.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Zjmrc2Mn.js";import"./usePreviousValue-CQpdUIfi.js";import"./Loader-y0gUuN00.js";import"./useDelayedRender-Ck0ymmk1.js";import"./useId-BKFjm6-h.js";import"./Label-CaW7OA3f.js";import"./SupportLabel-CodqVDiK.js";import"./SuccessIcon-C4GOLS9m.js";import"./Icon-C7Wb9G4-.js";import"./WarningIcon-BTj68vFe.js";import"./BaseRadioButton.stories-Dn6KNQGN.js";import"./BaseRadioButton-2Mq6rjh-.js";import"./Title-DOPkyPTp.js";import"./Card-DrO3OKXF.js";import"./Text-C2hYbVXg.js";import"./Tag-D2-wrZAe.js";import"./ExpandablePanel-Dmb1_B1k.js";import"./useAnimatedHeightBetween-CO9NxZvB.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CXaqoepC.js";import"./Expander-D_YWKfKr.js";import"./ChevronUpIcon-0GV_E42e.js";import"./ListItem-CpWv22Fw.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
