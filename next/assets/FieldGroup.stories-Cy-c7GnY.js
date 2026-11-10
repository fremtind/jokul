import{r as p,j as s}from"./iframe-CUUpl65k.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-lPS2RsP-.js";import{CheckboxStory as c}from"./Checkbox.stories-z1pfZco1.js";import k from"./Help.stories-WABR8OWB.js";import u from"./RadioButton.stories-Cypj8Jyi.js";import{RadioPanel as g}from"./RadioPanel.stories-BPdvoa03.js";import{F as h}from"./FieldGroup-udhJbc42.js";import{C as b}from"./Checkbox-CpE5pSoH.js";import{R as x}from"./RadioPanel-DdHCvxGY.js";import{H as C}from"./Help-D73CrQmJ.js";import{R as G}from"./RadioButton-BY4afhIO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Rkj4Md3D.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Cb2Of_Of.js";import"./SlotComponent-CiRs8K78.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CU20BbSq.js";import"./usePreviousValue-Ba5aKztj.js";import"./Loader-kygaTeqI.js";import"./useDelayedRender-nGmVc8Am.js";import"./useId-BdpGRGh2.js";import"./Label-BpUT13Vi.js";import"./SupportLabel-ChH7WQH5.js";import"./SuccessIcon-C4-KQZak.js";import"./Icon-ZApYREO0.js";import"./WarningIcon-B_FedbZI.js";import"./BaseRadioButton.stories-C1ZbzVN6.js";import"./BaseRadioButton-CQqEb1AR.js";import"./Title-BI48lQ1h.js";import"./Card-Du2kc4_Y.js";import"./Text-BIYG4kon.js";import"./Tag-DDfbvQPp.js";import"./ExpandablePanel-D9f-R9HJ.js";import"./useAnimatedHeightBetween-D9mT9vLo.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BnFwn25e.js";import"./Expander-D25rWf7L.js";import"./ChevronUpIcon-zC4tAOAN.js";import"./ListItem-UfMqEZht.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
