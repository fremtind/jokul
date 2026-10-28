import{r as p,j as i}from"./iframe-CwSNRyjS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-B8TWGElR.js";import{CheckboxStory as c}from"./Checkbox.stories-DUO9oq5j.js";import d from"./Help.stories-901ZaPh2.js";import k from"./RadioButton.stories-Cquh2jTe.js";import{RadioPanel as u}from"./RadioPanel.stories-5qDB_LF0.js";import{F as g}from"./FieldGroup-C6QrNPS6.js";import{C as h}from"./Checkbox-BYOXwT5C.js";import{R as b}from"./RadioPanel-BWS697ya.js";import{H as x}from"./Help-CVTM_Hk8.js";import{R as C}from"./RadioButton-BAX4KHHC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-vZN2znDu.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BGYYA4HZ.js";import"./SlotComponent-C49D0S1d.js";import"./mergeRefs-D1wV3Qlu.js";import"./Button-cI7a6IFJ.js";import"./usePreviousValue-B2TOc4W3.js";import"./Loader-DDN_TS1J.js";import"./useDelayedRender-C36acf6_.js";import"./useId-D59ROXkP.js";import"./Label-gm9EXROs.js";import"./SupportLabel-7fWB7vbh.js";import"./SuccessIcon-CHXogH1G.js";import"./Icon-BCU2RSZD.js";import"./WarningIcon-DlhFPOfT.js";import"./BaseRadioButton.stories-Bf14SI0d.js";import"./BaseRadioButton-LMg5UEbp.js";import"./Title-DOq_Hx1w.js";import"./Card-Cl75OTZb.js";import"./Text-csd_AusN.js";import"./Tag-CS34g-8Z.js";import"./ExpandablePanel-kcg7VhIa.js";import"./useAnimatedHeightBetween-C5GRNZWm.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BPShw_c0.js";import"./Expander-CFzqMwfB.js";import"./ChevronUpIcon-BvsAuW9p.js";import"./ListItem-mnUq9MNJ.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
