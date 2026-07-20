import{r as p,j as i}from"./iframe-CswJdHoL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BdvKT-Ge.js";import l from"./Help.stories-27UdDTHp.js";import c from"./RadioButton.stories-DU67C1tP.js";import{F as d}from"./FieldGroup-YS3IqEYz.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bi_AUZ9h.js";import{RadioPanel as g}from"./RadioPanel.stories-DjVUczxp.js";import{C as h}from"./Checkbox-B6EdpZ_S.js";import{R as b}from"./RadioPanel-DomU8mVL.js";import{H as x}from"./Help-v5l-GIqD.js";import{R as C}from"./RadioButton-BwXv9GF7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-zFwYfsKj.js";import"./Label-BOGjeVSR.js";import"./SupportLabel-Dichk-h1.js";import"./SuccessIcon-CG_ZgPT0.js";import"./Icon-C4qNn6QA.js";import"./WarningIcon-j3kdEPVE.js";/* empty css               *//* empty css               */import"./Flex-Ceg6UlC3.js";import"./SlotComponent-DiJRa4Sv.js";import"./mergeRefs-NuAicsML.js";import"./BaseRadioButton.stories-l1qQ8lL6.js";import"./BaseRadioButton-ByQvZ5KJ.js";import"./InputPanel-BeZvaYCZ.js";import"./Button-Cr4mlBRr.js";import"./usePreviousValue-BKeIzBbH.js";import"./Loader-Cqzin9GM.js";import"./useDelayedRender-BkqMRa9g.js";import"./Title-DeLZ4Upf.js";import"./Card-CNqj82zM.js";import"./Text-CwyG1IEG.js";import"./Tag-CRIBZ-G8.js";import"./ExpandablePanel-DRbotNLv.js";import"./useAnimatedHeightBetween-qZxpHadj.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DgCPNz4w.js";import"./Expander-DMX-4u8E.js";import"./ChevronDownIcon-FADApPVi.js";import"./ChevronUpIcon-Dc4qV0Fk.js";import"./ListItem-CMaLiyK3.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
