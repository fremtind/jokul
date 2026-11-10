import{r as p,j as s}from"./iframe-D0GiTUun.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-dcburp8L.js";import{CheckboxStory as c}from"./Checkbox.stories-CJYni8Pf.js";import k from"./Help.stories-BJxh_rd4.js";import u from"./RadioButton.stories-B5JakvN2.js";import{RadioPanel as g}from"./RadioPanel.stories-uRobsJXL.js";import{F as h}from"./FieldGroup-DAWlTc4C.js";import{C as b}from"./Checkbox-B7GLz1Hq.js";import{R as x}from"./RadioPanel-CBNqXc9J.js";import{H as C}from"./Help-DxDkTfKN.js";import{R as G}from"./RadioButton-C5xMAKcF.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Ccsz7ZMb.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DFGVx0MK.js";import"./SlotComponent-CFJ8fLnL.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BlvdOQwS.js";import"./usePreviousValue-BK0kAUA0.js";import"./Loader-BFooyPHA.js";import"./useDelayedRender-D1RIqRHx.js";import"./useId-CNwTlfN6.js";import"./Label-DJOHoAbW.js";import"./SupportLabel-BlqthqI0.js";import"./SuccessIcon-BW6R4n7V.js";import"./Icon-BUpmMndA.js";import"./WarningIcon-CbGsFGyr.js";import"./BaseRadioButton.stories-DRO5T72b.js";import"./BaseRadioButton-NWBlltE9.js";import"./Title-vLtnWoiI.js";import"./Card-mFFY7AxW.js";import"./Text-Cyn02iEB.js";import"./Tag-DRRcroZ3.js";import"./ExpandablePanel-dT0ZDFdo.js";import"./useAnimatedHeightBetween-C6LXZ19e.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C0bEu2Ch.js";import"./Expander-BYlm1-WW.js";import"./ChevronUpIcon-CsrMWgpA.js";import"./ListItem-DNtHlePm.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
