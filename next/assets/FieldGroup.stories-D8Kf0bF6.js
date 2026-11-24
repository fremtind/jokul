import{r as p,j as s}from"./iframe-eQlqFw_Z.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DAouRK0r.js";import{CheckboxStory as c}from"./Checkbox.stories-DcPIqZzV.js";import k from"./Help.stories-CNLjFnZx.js";import u from"./RadioButton.stories-NWFXeRQi.js";import{RadioPanel as g}from"./RadioPanel.stories-D-d_JtXO.js";import{F as h}from"./FieldGroup-D0JP5E_F.js";import{C as b}from"./Checkbox-C3s6YOBe.js";import{R as x}from"./RadioPanel-Do_iv1GJ.js";import{H as C}from"./Help-Cj8VEzGe.js";import{R as G}from"./RadioButton-CgIfH4Fe.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D-sMW-ZL.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BjNh9uHh.js";import"./SlotComponent-Br6y2VBU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-5YQ8nBXS.js";import"./usePreviousValue-DfmlSIeS.js";import"./Loader-CYP2svp7.js";import"./useDelayedRender-CqAyvoA9.js";import"./useId-B3Bd0elA.js";import"./Label-DHBerVIp.js";import"./SupportLabel-CsHpRy8d.js";import"./SuccessIcon-BHlYI0Ib.js";import"./Icon-BEdS1r3C.js";import"./WarningIcon-CGpN0814.js";import"./BaseRadioButton.stories-5dAZ3vAM.js";import"./BaseRadioButton-CynhhN4B.js";import"./Title-C7rwlQRy.js";import"./Card-CnuZn0MT.js";import"./Text-Ag5e3FwX.js";import"./Tag-bb35Kmgp.js";import"./ExpandablePanel-CnudLmwB.js";import"./useAnimatedHeightBetween-BW2e23yt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CSqWkwgV.js";import"./Expander-25Zo_W0d.js";import"./ChevronUpIcon-BB3yhmYL.js";import"./ListItem-BumXfCpf.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
