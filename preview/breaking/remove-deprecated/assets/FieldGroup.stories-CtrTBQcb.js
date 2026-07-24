import{r as p,j as i}from"./iframe-Rw3mIGFx.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CDv6dgZx.js";import l from"./Help.stories-DLTrzgo7.js";import c from"./RadioButton.stories-C_KQsW7D.js";import{F as d}from"./FieldGroup-Dtw1-2Xs.js";import{C as k,a as u}from"./CheckboxPanel.stories-BYoMuFXx.js";import{RadioPanel as g}from"./RadioPanel.stories-TNsLj5-K.js";import{C as h}from"./Checkbox-B2NMd_u7.js";import{R as b}from"./RadioPanel-DTMLtfio.js";import{H as x}from"./Help-CLYvhnBY.js";import{R as C}from"./RadioButton-COJwAndT.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BrB7_4eE.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-fwCFNGqO.js";import"./mergeRefs-BWiGXB_E.js";import"./BaseRadioButton.stories-BD1P5zJn.js";import"./BaseRadioButton-cC05IiK1.js";import"./useId-BwvMQ2s9.js";import"./Label-DCyT1h49.js";import"./SupportLabel-BE76ZHVf.js";import"./SuccessIcon-BpobXr9N.js";import"./Icon-qPN9F97A.js";import"./WarningIcon-Bo1jy9N8.js";import"./InputPanel-ZEEAUtbq.js";import"./Button-cLEU6Gig.js";import"./usePreviousValue-QrGcEZcy.js";import"./Loader-DFX9syJf.js";import"./useDelayedRender-x-84xQVF.js";import"./Title-DR79tn7q.js";import"./Card-BSckn1iJ.js";import"./Text-Ch-xw0UG.js";import"./Tag-1a0b5wKo.js";import"./ExpandablePanel-D4Qm1hVS.js";import"./useAnimatedHeightBetween-DbAQeVqk.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DGPsWZ08.js";import"./Expander-CNzkv3TR.js";import"./ChevronDownIcon-DGwmMpH7.js";import"./ChevronUpIcon-D4upVszP.js";import"./ListItem-XbUNvcdU.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
