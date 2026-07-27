import{r as p,j as i}from"./iframe-CgZYbj6A.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DqYwEUkn.js";import l from"./Help.stories-Crs8l849.js";import c from"./RadioButton.stories-BCdDwKs6.js";import{F as d}from"./FieldGroup-DuvVFsWv.js";import{C as k,a as u}from"./CheckboxPanel.stories-LnvqOsqU.js";import{RadioPanel as g}from"./RadioPanel.stories-BYmqkVre.js";import{C as h}from"./Checkbox-BkDRGgif.js";import{R as b}from"./RadioPanel-Cj4Iip36.js";import{H as x}from"./Help-Cnyn4y71.js";import{R as C}from"./RadioButton-Cu-CxPn-.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CyvM-gxB.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BZIV9v65.js";import"./mergeRefs-B0NMVnut.js";import"./BaseRadioButton.stories-DG4C3znx.js";import"./BaseRadioButton-CYGpiQ-3.js";import"./useId-CINJQTXG.js";import"./Label-B_sOp4mv.js";import"./SupportLabel-DUJiWbVZ.js";import"./SuccessIcon-Ut6kqaCr.js";import"./Icon-ujBlsJjj.js";import"./WarningIcon-wgzmRtFN.js";import"./InputPanel-B6vJihth.js";import"./Button-IL-8uJMV.js";import"./usePreviousValue-NeoBGsB5.js";import"./Loader-CAc_2OCo.js";import"./useDelayedRender-DYthJVpm.js";import"./Title-Bg0L3RaK.js";import"./Card-CD2hLy9Q.js";import"./Text-BKbBEv4J.js";import"./Tag-BzEWAdRn.js";import"./ExpandablePanel-CZIaXGjW.js";import"./useAnimatedHeightBetween-B5mOzayq.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences--zVKGPq4.js";import"./Expander-BNhUVF-l.js";import"./ChevronDownIcon-nB35CNuV.js";import"./ChevronUpIcon-CcGtIhCS.js";import"./ListItem-DSP0w_8G.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
