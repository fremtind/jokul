import{r as p,j as s}from"./iframe-BtenE-5J.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-8LHA6tP8.js";import{CheckboxStory as c}from"./Checkbox.stories-nkTm3M_u.js";import k from"./Help.stories-BDJ5qlif.js";import u from"./RadioButton.stories-CklbRHjC.js";import{RadioPanel as g}from"./RadioPanel.stories-CeL-wM_z.js";import{F as h}from"./FieldGroup-DfHdTqNV.js";import{C as b}from"./Checkbox-CWw9e9rj.js";import{R as x}from"./RadioPanel-CLzCaGlf.js";import{H as C}from"./Help-Fqn9HwHY.js";import{R as G}from"./RadioButton-gPHo8YUP.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BilRifeD.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-7IBLDGZj.js";import"./SlotComponent-BmNZKwdX.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BxxZs8Ak.js";import"./usePreviousValue-CNCXiHS6.js";import"./Loader-Bko915mG.js";import"./useDelayedRender-CsiHNymU.js";import"./useId-BjRT-Vwq.js";import"./Label-C3Qzc7v3.js";import"./SupportLabel-BAG3C4yP.js";import"./SuccessIcon-k2XV_5JB.js";import"./Icon-Zh3rzzgN.js";import"./WarningIcon-D1XBab0J.js";import"./BaseRadioButton.stories-DFWehIYx.js";import"./BaseRadioButton-BIiGfUlB.js";import"./Title-DNxakcAH.js";import"./Card-Cj-Wifnt.js";import"./Text-Wf_PifNZ.js";import"./Tag-AMwLaOZ2.js";import"./ExpandablePanel-FuNmI99M.js";import"./useAnimatedHeightBetween-DtlTzhGg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-w1WNOZ5Z.js";import"./Expander-DNh6bxIA.js";import"./ChevronUpIcon-DEtPW4zZ.js";import"./ListItem-DZQ334hG.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
