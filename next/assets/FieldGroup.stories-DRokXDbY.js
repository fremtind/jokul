import{r as p,j as s}from"./iframe-CwXaE7e6.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-C1bctAMR.js";import{CheckboxStory as c}from"./Checkbox.stories-dySvy1Kf.js";import k from"./Help.stories-DD7fuVk7.js";import u from"./RadioButton.stories-rJfniSOm.js";import{RadioPanel as g}from"./RadioPanel.stories-CPnhnfBF.js";import{F as h}from"./FieldGroup-D5YJaYK7.js";import{C as b}from"./Checkbox-5wJ6cz5C.js";import{R as x}from"./RadioPanel-DdcYtBv2.js";import{H as C}from"./Help-DeoT5iSy.js";import{R as G}from"./RadioButton-D_9k4Xs6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DNpJNw9s.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CNX9p9mR.js";import"./SlotComponent-Dfo3Gke3.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-TGRYUGnl.js";import"./usePreviousValue-CHE7E-G_.js";import"./Loader-D4Ox_-1A.js";import"./useDelayedRender-ntloVuh3.js";import"./useId-DrJH2bhK.js";import"./Label-agkDk9R4.js";import"./SupportLabel-BERh53o_.js";import"./SuccessIcon-suDHySTc.js";import"./Icon-pJxJDtgr.js";import"./WarningIcon-E1c3Mq4X.js";import"./BaseRadioButton.stories-BcQFC0Rb.js";import"./BaseRadioButton-DlrkVwbx.js";import"./Title-CZF3O1jc.js";import"./Card-Dr-YgOfl.js";import"./Text-CJidPZBr.js";import"./Tag-l2FfobPy.js";import"./ExpandablePanel-CHMwn-hc.js";import"./useAnimatedHeightBetween-DZXODPfh.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CDKVhsiN.js";import"./Expander-uXsWCEVK.js";import"./ChevronUpIcon-D9DsAB35.js";import"./ListItem-Cfbi-qTG.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
