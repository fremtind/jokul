import{r as p,j as i}from"./iframe-hmKqKoj2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Cfh7quVU.js";import{CheckboxStory as c}from"./Checkbox.stories-BqWVbvnK.js";import k from"./Help.stories-C9tGcaVD.js";import u from"./RadioButton.stories-Bpr-sn-g.js";import{RadioPanel as g}from"./RadioPanel.stories-klnwrmdP.js";import{F as h}from"./FieldGroup-Bgea3nHm.js";import{C as b}from"./Checkbox-BWQTjszv.js";import{R as x}from"./RadioPanel-CRLJuq93.js";import{H as C}from"./Help-DgQ1gcP0.js";import{R as G}from"./RadioButton-vBPlRDiy.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Y3kPRf6j.js";import"./clsx-B-dksMZM.js";import"./Flex-C0hb6Vfu.js";import"./SlotComponent-B5PPv9T9.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-_4tHR8LW.js";import"./usePreviousValue-C0LKI-CD.js";import"./Loader-KbwPmhqx.js";import"./useDelayedRender-CRKjR1hX.js";import"./useId-UDvA70ek.js";import"./Label-DDtnkwj9.js";import"./SupportLabel-C4Ijdv7u.js";import"./SuccessIcon-CDwIndzD.js";import"./Icon-CKLjmjM8.js";import"./WarningIcon-CN6-cY1V.js";import"./BaseRadioButton.stories-jcWpgiFm.js";import"./BaseRadioButton-gds0FH-Y.js";import"./Title-BwMzYdNL.js";import"./Card-CRNZtlnn.js";import"./Text-XxedFpoO.js";import"./Tag-C4rXeslu.js";import"./ExpandablePanel-ITNkz234.js";import"./useAnimatedHeightBetween-D-ggHqXW.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B5SsBApu.js";import"./Expander-DgJ8fl18.js";import"./ChevronUpIcon-Br4_xf3k.js";import"./ListItem-Cn0YVBdp.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
