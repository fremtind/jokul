import{r as p,j as i}from"./iframe-DoSr2XR5.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-l0N657dd.js";import l from"./Help.stories-CKn2T4O0.js";import c from"./RadioButton.stories-BPZPtZt3.js";import{F as d}from"./FieldGroup-DPEB5pNw.js";import{C as k,a as u}from"./CheckboxPanel.stories-DvSDOtAc.js";import{RadioPanel as g}from"./RadioPanel.stories-AqqJEJZU.js";import{C as h}from"./Checkbox-C2i8Cj2d.js";import{R as b}from"./RadioPanel-Ck7Iw5m6.js";import{H as x}from"./Help-BlPf9u81.js";import{R as C}from"./RadioButton-DCrUKS3k.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-gJQ3XuOg.js";import"./BaseRadioButton-Chj6Otib.js";import"./clsx-B-dksMZM.js";import"./useId-CZ0vz_Ho.js";import"./Label-B2seRaRd.js";import"./SupportLabel-DpUTA-LC.js";import"./SuccessIcon-BN2v2eig.js";import"./Icon-CfhpMij7.js";import"./WarningIcon-J7NpUERY.js";import"./InputPanel-C-uvRUbo.js";import"./Flex-C8vd4_Of.js";import"./SlotComponent-eNaRQuPZ.js";import"./mergeRefs-BGw1-eqv.js";import"./Button-Cg8y8bnH.js";import"./usePreviousValue-KS5lv_JW.js";import"./Loader-DX5a6RC4.js";import"./useDelayedRender-ypu0ZYPh.js";import"./Title-Droa3A9G.js";import"./Card-B3Z-8gsB.js";import"./Text-BVosJiyI.js";import"./Tag-BkwJ3M9K.js";import"./ExpandablePanel-BTS-U0KY.js";import"./useAnimatedHeightBetween-BKs7gLY0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C3hT3IhB.js";import"./Expander-Dfrudvtl.js";import"./ChevronDownIcon-B32BWFex.js";import"./ChevronUpIcon-BheLyL4E.js";import"./ListItem-xCPEqBL7.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
