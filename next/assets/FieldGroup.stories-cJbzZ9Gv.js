import{r as p,j as s}from"./iframe-CxRpv3as.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CrnTUSpQ.js";import{CheckboxStory as c}from"./Checkbox.stories-B6M66aI9.js";import k from"./Help.stories-BOauYjMU.js";import u from"./RadioButton.stories-k13tXiFB.js";import{RadioPanel as g}from"./RadioPanel.stories-gD2EUdRS.js";import{F as h}from"./FieldGroup-CxkJ1CaT.js";import{C as b}from"./Checkbox-CpW50VQP.js";import{R as x}from"./RadioPanel-ZlteFzKC.js";import{H as C}from"./Help-CcgT9UZk.js";import{R as G}from"./RadioButton-CWKF70Mx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BMhGDgKA.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BHViUaet.js";import"./SlotComponent-B_bQ-27a.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dykm-tdT.js";import"./usePreviousValue-De7wUqWG.js";import"./Loader-B7pWHfzR.js";import"./useDelayedRender-Bt5djxo4.js";import"./useId-QKZvvSgu.js";import"./Label-D6ynrUpl.js";import"./SupportLabel-DVvwjDyM.js";import"./SuccessIcon-CnJcQtB4.js";import"./Icon-BO5U9wuA.js";import"./WarningIcon-BicDBjZu.js";import"./BaseRadioButton.stories-CV1_wYvH.js";import"./BaseRadioButton-BTEagMWO.js";import"./Title-CE1LZQ6g.js";import"./Card-CVZ4WU_h.js";import"./Text-BzuDFSQg.js";import"./Tag-BYGFjqZi.js";import"./ExpandablePanel-DZZDUF_3.js";import"./useAnimatedHeightBetween-nw3vrmFV.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-PQO4DqE6.js";import"./Expander-C8WUxa2V.js";import"./ChevronUpIcon-9AV2didu.js";import"./ListItem-BNb-35fu.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
