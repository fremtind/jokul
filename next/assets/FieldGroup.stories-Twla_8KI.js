import{r as p,j as s}from"./iframe-DbScAG7Q.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CR5D7nxV.js";import{CheckboxStory as c}from"./Checkbox.stories-DJ97Oucd.js";import k from"./Help.stories-CDKIrpz7.js";import u from"./RadioButton.stories-CYihrDhE.js";import{RadioPanel as g}from"./RadioPanel.stories-D2h4y79X.js";import{F as h}from"./FieldGroup-kS_aJWSH.js";import{C as b}from"./Checkbox-BHVZsfSH.js";import{R as x}from"./RadioPanel-Bs76sRsA.js";import{H as C}from"./Help-BD3S69fw.js";import{R as G}from"./RadioButton-o5bgYKWy.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BBVxcRFy.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-haBEl174.js";import"./SlotComponent-CGFAbbI9.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CRitS-qX.js";import"./usePreviousValue-CW87VggH.js";import"./Loader-CBtrPWnG.js";import"./useDelayedRender-C4kEsOez.js";import"./useId-Bx5acElt.js";import"./Label-DWc77KBV.js";import"./SupportLabel-DH-YrIBz.js";import"./SuccessIcon-DnecWdOQ.js";import"./Icon-S3hN5Ng3.js";import"./WarningIcon-Dwb6ZloA.js";import"./BaseRadioButton.stories-Cdrp3C-z.js";import"./BaseRadioButton-Dm9_Jbpa.js";import"./Title-31Sg6ZVS.js";import"./Card-DsnuZZUS.js";import"./Text-D32Jp3C0.js";import"./Tag-z18waNFD.js";import"./ExpandablePanel-DdnbsQNE.js";import"./useAnimatedHeightBetween-Dqx11iKf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DUDMWe5_.js";import"./Expander-aKJ4Avjj.js";import"./ChevronUpIcon-CNIT61Yz.js";import"./ListItem-B_OmLlg2.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
