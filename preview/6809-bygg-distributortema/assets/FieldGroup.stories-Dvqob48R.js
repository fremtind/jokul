import{r as p,j as s}from"./iframe-w-EvBDd3.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CDvSDXIS.js";import{CheckboxStory as c}from"./Checkbox.stories-DtfXIwAi.js";import k from"./Help.stories-Cdaq1SjS.js";import u from"./RadioButton.stories-DBwKLdMg.js";import{RadioPanel as g}from"./RadioPanel.stories-Dq7T5swd.js";import{F as h}from"./FieldGroup-pKBJrrZZ.js";import{C as b}from"./Checkbox-BM94S6FZ.js";import{R as x}from"./RadioPanel-CDS7a8-H.js";import{H as C}from"./Help-CWTXvHd1.js";import{R as G}from"./RadioButton-raoWk6tm.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bznfrw4L.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BLmATpsZ.js";import"./SlotComponent-0Sawcpag.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C4Ikda8j.js";import"./usePreviousValue-BSGQUuCo.js";import"./Loader-Cuz5AIjy.js";import"./useDelayedRender-DX-QLkzf.js";import"./useId-CcNQ4e0r.js";import"./Label-D5ojEoWI.js";import"./SupportLabel-B_GKysWS.js";import"./SuccessIcon-BgiIcGhL.js";import"./Icon-Cg5s5pDA.js";import"./WarningIcon-CXkzsPDy.js";import"./BaseRadioButton.stories-BF1paW_T.js";import"./BaseRadioButton-CDyeoEEF.js";import"./Title-HJvfBTk6.js";import"./Card-BTVEQigF.js";import"./Text-WV-bGsgb.js";import"./Tag-Duw00uA2.js";import"./ExpandablePanel-DeAKQiFi.js";import"./useAnimatedHeightBetween-2F2HY9FD.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BJRb-aYH.js";import"./Expander-BQvx_-Ac.js";import"./ChevronUpIcon-BGoiiWdY.js";import"./ListItem-COK3ZG2Y.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
