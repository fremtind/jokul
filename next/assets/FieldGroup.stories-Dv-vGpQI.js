import{r as p,j as s}from"./iframe-CmYfz_uG.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-GzJkN55M.js";import{CheckboxStory as c}from"./Checkbox.stories-CREXYqZG.js";import k from"./Help.stories-DGFNxd3z.js";import u from"./RadioButton.stories-Ou12gVyH.js";import{RadioPanel as g}from"./RadioPanel.stories-1HLzCYDx.js";import{F as h}from"./FieldGroup-nN-1t9LX.js";import{C as b}from"./Checkbox-DbzIV2OI.js";import{R as x}from"./RadioPanel-B2lrD2_D.js";import{H as C}from"./Help-C-zNetJA.js";import{R as G}from"./RadioButton-CRic0IoW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Tc9h1bE4.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BFD9XtOp.js";import"./SlotComponent-BROd5bpi.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-hXgk9sKE.js";import"./usePreviousValue-DYq5xjtN.js";import"./Loader-CGyCzeFr.js";import"./useDelayedRender-CngsW9X-.js";import"./useId-L6WXYOF8.js";import"./Label-Mq3NVLyR.js";import"./SupportLabel-DsdZ-mAm.js";import"./SuccessIcon-B61UvubX.js";import"./Icon-54q_5_Ym.js";import"./WarningIcon-DJXpKmnQ.js";import"./BaseRadioButton.stories-es74fIMm.js";import"./BaseRadioButton--96mMEG4.js";import"./Title-DuEnWwJd.js";import"./Card-BjJXgtaq.js";import"./Text-DFAf3wO5.js";import"./Tag-DFsiipZU.js";import"./ExpandablePanel-B_PCI8ea.js";import"./useAnimatedHeightBetween-BsZ2nXQt.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CbQ2BalL.js";import"./Expander-Dm6p24jk.js";import"./ChevronUpIcon-BDUgxeIA.js";import"./ListItem-DSFJkYaQ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
