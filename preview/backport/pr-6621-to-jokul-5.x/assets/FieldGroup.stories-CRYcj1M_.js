import{r as p,j as s}from"./iframe-faZ-BQ5s.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-B39aWlfW.js";import{CheckboxStory as c}from"./Checkbox.stories-CTC6FaXy.js";import k from"./Help.stories-CMz6tenH.js";import u from"./RadioButton.stories-Cxjf1ngh.js";import{RadioPanel as g}from"./RadioPanel.stories-CvUUkcuq.js";import{F as h}from"./FieldGroup-BBK7tgAA.js";import{C as b}from"./Checkbox-C4nq_4uc.js";import{R as x}from"./RadioPanel-COb6OZre.js";import{H as C}from"./Help-DmyG0pvn.js";import{R as G}from"./RadioButton-7JHCqy-H.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-7gyPEX6k.js";import"./clsx-B-dksMZM.js";import"./Flex-bce93z0l.js";import"./SlotComponent-C_OlWr_o.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-1B4HKHN8.js";import"./usePreviousValue-Dyi6XRoa.js";import"./Loader-DB_mlgWO.js";import"./useDelayedRender-C8qam8Xc.js";import"./BaseRadioButton.stories-D1cim2g-.js";import"./BaseRadioButton-C-ks-QxM.js";import"./useId-BZ_ER28T.js";import"./Title-Dhw-QXp6.js";import"./Card-BKOH0pOe.js";import"./Text-nyyUL0RB.js";import"./Tag-DebtBNlV.js";import"./ExpandablePanel-DFrjR9Io.js";import"./useAnimatedHeightBetween-J3bYtF6J.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Wg_Pjz-R.js";import"./Expander-BWjlAyWb.js";import"./ChevronDownIcon-DC-GOqwp.js";import"./Icon-XvUqTLNT.js";import"./ChevronUpIcon-BZRhXBaq.js";import"./ListItem-uznPDL7r.js";import"./Label-B_AWcEof.js";import"./SupportLabel-DlnRrjQF.js";import"./SuccessIcon-8SbR0fHE.js";import"./WarningIcon-C1ge9Raq.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
