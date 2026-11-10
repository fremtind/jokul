import{r as p,j as s}from"./iframe-Pz3CvQ1w.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BkcLFVNn.js";import{CheckboxStory as c}from"./Checkbox.stories-BycIvIBr.js";import k from"./Help.stories-BEEw_CSr.js";import u from"./RadioButton.stories-PP7uSsun.js";import{RadioPanel as g}from"./RadioPanel.stories-Cx8B9oJD.js";import{F as h}from"./FieldGroup-RN6dm28r.js";import{C as b}from"./Checkbox-D782Y_WL.js";import{R as x}from"./RadioPanel-DeNCV4tM.js";import{H as C}from"./Help-Ao8IdHOb.js";import{R as G}from"./RadioButton-D_NL7ZYB.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BU57ccY7.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DlQI-SYy.js";import"./SlotComponent-3v9UArJ6.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CFxPgOyk.js";import"./usePreviousValue-zjQRGqy1.js";import"./Loader-C4UXvRMJ.js";import"./useDelayedRender-CrrBdMCB.js";import"./useId-D9xx20W4.js";import"./Label-DYyptjG4.js";import"./SupportLabel-C2Eygo69.js";import"./SuccessIcon-B0Ut6YTe.js";import"./Icon-D_klMMdD.js";import"./WarningIcon-ASdC7XCR.js";import"./BaseRadioButton.stories-CzPowb9H.js";import"./BaseRadioButton-C2BYzBVD.js";import"./Title-scu6qIXy.js";import"./Card-DsyXMcRg.js";import"./Text-DUvOdW3x.js";import"./Tag-CSi3svsJ.js";import"./ExpandablePanel-CMIwR174.js";import"./useAnimatedHeightBetween-Ch4vYYgf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-yKsxcP-l.js";import"./Expander-DKLx40Bo.js";import"./ChevronUpIcon-BYmV6Vho.js";import"./ListItem-DmqiD0G-.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
