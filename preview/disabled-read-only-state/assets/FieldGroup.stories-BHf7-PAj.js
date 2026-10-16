import{r as p,j as i}from"./iframe-BluD2y5g.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxPanelStory as s}from"./CheckboxPanel.stories-D9IDBi4v.js";import{CheckboxStory as l}from"./Checkbox.stories-m0T79Y74.js";import c from"./Help.stories-ymWe3OxC.js";import d from"./RadioButton.stories-e937F473.js";import{RadioPanel as k}from"./RadioPanel.stories-CnyRTzsm.js";import{F as u}from"./FieldGroup-L6KxTIWe.js";import{C as g}from"./Checkbox-B637ZDxp.js";import{C as h}from"./CheckboxPanel-BBzYRI-3.js";import{R as b}from"./RadioPanel-DHlt5OEB.js";import{H as x}from"./Help-BI9ptKAE.js";import{R as C}from"./RadioButton-DrqbN2PC.js";import"./preload-helper-PPVm8Dsz.js";import"./Flex-BEXagI8H.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BhFqMO8i.js";import"./mergeRefs-CLpafj6m.js";import"./Button-BZjykdVU.js";import"./usePreviousValue-BbleQHP3.js";import"./Loader-Boup7Z4s.js";import"./useDelayedRender-NECEF8kA.js";import"./InputPanel-CwcCl1TQ.js";import"./useId-CqDn8-2e.js";import"./SupportLabel-CuwoYV1K.js";import"./SuccessIcon-De2Rf2HP.js";import"./Icon-kqGXX5uY.js";import"./WarningIcon-BvUiAEtD.js";import"./BaseRadioButton-BZ89SPLB.js";import"./Label-BuBxX9pA.js";import"./BaseRadioButton.stories-Dh1WbZFM.js";import"./Title-gkAEVevz.js";import"./Card-B5rNrRvr.js";import"./Text-Drke1_hS.js";import"./Tag-4mTXAzQB.js";import"./ExpandablePanel-nfD-E1iM.js";import"./useAnimatedHeightBetween-CvlW3VGU.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bi9Y6njz.js";import"./Expander-DidleKqT.js";import"./ChevronUpIcon-BPt7C0nl.js";import"./ListItem-Cavohlkd.js";const ie={title:"Komponenter/Field Group",component:u,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...d.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(g,{...l.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...k.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...c.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
