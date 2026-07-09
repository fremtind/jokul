import{r as p,j as i}from"./iframe-2eq7dxMt.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-qrUBsyzi.js";import l from"./Help.stories-u_kmeavw.js";import c from"./RadioButton.stories-TIC2i4w_.js";import{F as d}from"./FieldGroup-B7Dc7gsk.js";import{C as k,a as u}from"./CheckboxPanel.stories-Djce49do.js";import{RadioPanel as g}from"./RadioPanel.stories-CMMDQhPV.js";import{C as h}from"./Checkbox-DCAbD5bg.js";import{R as b}from"./RadioPanel-7oF8ztlK.js";import{H as x}from"./Help-6p3526bD.js";import{R as C}from"./RadioButton-C23OcgdJ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-mnXjkx-C.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-s0OaJqQy.js";import"./mergeRefs-D37E1fhM.js";import"./BaseRadioButton.stories-B-fhMjuA.js";import"./BaseRadioButton-DYtJbBFg.js";import"./useId-DR2Fonnl.js";import"./Label-CwzdVmol.js";import"./SupportLabel-BN31JeVw.js";import"./SuccessIcon-CQhEMLAs.js";import"./Icon-OaEwrs1I.js";import"./WarningIcon-CpjqqR4r.js";import"./InputPanel-BXHH5lWU.js";import"./Button-qe3YeZJf.js";import"./usePreviousValue-CLO4n3r5.js";import"./Loader-DtkrDOrb.js";import"./useDelayedRender-BIwVIM7W.js";import"./Title-l2yVhuIN.js";import"./Card-DhdX5QXl.js";import"./Text-DW_qJObA.js";import"./Tag-nL4UvIuf.js";import"./ExpandablePanel-AJEZF-mb.js";import"./useAnimatedHeightBetween-CcTi6mqz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DFN1D2Y2.js";import"./Expander-DXfEaSaX.js";import"./ChevronDownIcon-BKzS983r.js";import"./ChevronUpIcon-UkDia4Eb.js";import"./ListItem-CFD5q4X5.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
