import{r as p,j as s}from"./iframe-D9aQxqxc.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DRuIIhOi.js";import{CheckboxStory as c}from"./Checkbox.stories-DeIEiP5l.js";import k from"./Help.stories-NHyskdOm.js";import u from"./RadioButton.stories-BzWZjDby.js";import{RadioPanel as g}from"./RadioPanel.stories-6sZ9c4m8.js";import{F as h}from"./FieldGroup-DdXOhhfQ.js";import{C as b}from"./Checkbox-CAMV5KTI.js";import{R as x}from"./RadioPanel-C1Y0czNv.js";import{H as C}from"./Help-CYheim6Z.js";import{R as G}from"./RadioButton-B5Qka8L4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dr4wEoJd.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CBOb-qLr.js";import"./SlotComponent-ClOiarDh.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DPrxc4XH.js";import"./usePreviousValue-BYJCpTEJ.js";import"./Loader-0lDZm4Rl.js";import"./useDelayedRender-CRk8n29E.js";import"./useId-Cu8Py5k1.js";import"./Label-BwoEiZlS.js";import"./SupportLabel-DuSLxEkh.js";import"./SuccessIcon-B9zv-ukp.js";import"./Icon-DV8CQwLO.js";import"./WarningIcon-DcPwRTcK.js";import"./BaseRadioButton.stories-D9mp_elt.js";import"./BaseRadioButton-D6Wivbl4.js";import"./Title-CDsnu8Sg.js";import"./Card-CAWhon1C.js";import"./Text-CUONfCIE.js";import"./Tag-BVfwU_o4.js";import"./ExpandablePanel-i_2Lj0FV.js";import"./useAnimatedHeightBetween-DQ8vZ0E6.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BAOpgUah.js";import"./Expander-DfxZhmDE.js";import"./ChevronUpIcon-B9Iu3jz5.js";import"./ListItem-ZG5vLcLb.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
