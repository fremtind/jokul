import{r as p,j as s}from"./iframe-Et2WV6aB.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CIqNfsPA.js";import{CheckboxStory as c}from"./Checkbox.stories-B2Tuxm36.js";import k from"./Help.stories-CVEJ1haO.js";import u from"./RadioButton.stories-BjTvSKQ8.js";import{RadioPanel as g}from"./RadioPanel.stories-Cp07_FE5.js";import{F as h}from"./FieldGroup-CJj6KWj1.js";import{C as b}from"./Checkbox-DaOwKiBj.js";import{R as x}from"./RadioPanel-D6jho6d3.js";import{H as C}from"./Help-CleOxZXR.js";import{R as G}from"./RadioButton-D6bhlsth.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C5VEJVpP.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-C1QjxZQt.js";import"./SlotComponent-C9Em50xw.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BUiz6gRo.js";import"./usePreviousValue-BC6Tdpad.js";import"./Loader-yEQOM5cG.js";import"./useDelayedRender-CHWufaa9.js";import"./useId-BdrES44_.js";import"./Label-Cir1Hllg.js";import"./SupportLabel-DiFZb4D3.js";import"./SuccessIcon-B6JSWvUF.js";import"./Icon-DCryJJU8.js";import"./WarningIcon-C5GrpSFj.js";import"./BaseRadioButton.stories-DKLRiL5w.js";import"./BaseRadioButton-CP6VCMC6.js";import"./Title-DHe6_ylb.js";import"./Card-CzlEhJMT.js";import"./Text-CLX29PyJ.js";import"./Tag-D6klylfo.js";import"./ExpandablePanel-B0fp55VW.js";import"./useAnimatedHeightBetween-D5pMKOKG.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-lmI3zZIQ.js";import"./Expander-BvRNMgj9.js";import"./ChevronDownIcon-CBltXBGW.js";import"./ChevronUpIcon-BcrMRjrT.js";import"./ListItem-g4DGVsfB.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
