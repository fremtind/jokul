import{r as p,j as s}from"./iframe-CRNAPKsH.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CD_U608w.js";import{CheckboxStory as c}from"./Checkbox.stories-CN8JjhTk.js";import k from"./Help.stories-BiXELFD4.js";import u from"./RadioButton.stories-vLQWxMFM.js";import{RadioPanel as g}from"./RadioPanel.stories-Dnrldl_U.js";import{F as h}from"./FieldGroup-CHAoL6To.js";import{C as b}from"./Checkbox-Byt2J6m7.js";import{R as x}from"./RadioPanel-D1kMour7.js";import{H as C}from"./Help-CBA5CtHb.js";import{R as G}from"./RadioButton-DATqBgmr.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CF3zo5CO.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Bw0NSRxn.js";import"./SlotComponent-D5Z2xWEj.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BZptX8kR.js";import"./usePreviousValue-VUZtjKQs.js";import"./Loader-oS6ugrQc.js";import"./useDelayedRender-C2Z-haG3.js";import"./useId-BF6EzYqB.js";import"./Label-PTICYO9L.js";import"./SupportLabel-CDOxl8SG.js";import"./SuccessIcon-BBFTvmM1.js";import"./Icon-sdAy8Z8b.js";import"./WarningIcon-DVlJpyOD.js";import"./BaseRadioButton.stories-BIlDhJ6q.js";import"./BaseRadioButton-Dpgpmxtl.js";import"./Title-CzU6OXCs.js";import"./Card-DZBqMsec.js";import"./Text-B7PUDRTA.js";import"./Tag-DTXD-VRO.js";import"./ExpandablePanel-DdewCjlC.js";import"./useAnimatedHeightBetween-91JDNOTF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DZUImMeB.js";import"./Expander-B7HG6fPQ.js";import"./ChevronUpIcon-C6MAbD3_.js";import"./ListItem-XAI5Kl5F.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
