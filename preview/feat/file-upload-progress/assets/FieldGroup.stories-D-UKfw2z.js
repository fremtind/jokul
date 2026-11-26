import{r as p,j as s}from"./iframe-i0kFdft2.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BAmfjSMs.js";import{CheckboxStory as c}from"./Checkbox.stories-B_Ug9u_Y.js";import k from"./Help.stories-CbA3upG5.js";import u from"./RadioButton.stories-B9dFk-rK.js";import{RadioPanel as g}from"./RadioPanel.stories-B-Ju09n_.js";import{F as h}from"./FieldGroup-DxbMqxq9.js";import{C as b}from"./Checkbox-C4aJGSL-.js";import{R as x}from"./RadioPanel-De7DfNdW.js";import{H as C}from"./Help-DwMg8PBa.js";import{R as G}from"./RadioButton-BlDDEYow.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BZxQ6PLB.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CtO2pZsN.js";import"./SlotComponent-BRAre0Bt.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-rpdpVNXw.js";import"./usePreviousValue-DjzF1Xve.js";import"./Loader-BQojbPsJ.js";import"./useDelayedRender-BCKOXC_t.js";import"./useId-BXs5LawJ.js";import"./Label-nqxiCZSM.js";import"./SupportLabel-Qtx6sRmp.js";import"./SuccessIcon-DT1bm3Mg.js";import"./Icon-DiZEyqGh.js";import"./WarningIcon-BtXd7VGB.js";import"./BaseRadioButton.stories-BbihbGIP.js";import"./BaseRadioButton-vFpZSdgJ.js";import"./Title-B3aTTCLx.js";import"./Card-AGakkDhc.js";import"./Text-CeSWzBYq.js";import"./Tag-Bh5_Badn.js";import"./ExpandablePanel-905wULmb.js";import"./useAnimatedHeightBetween-DSNHh7BP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B1Ej1lmB.js";import"./Expander-CId_gzES.js";import"./ChevronDownIcon-CxuEmYFZ.js";import"./ChevronUpIcon-BHkP1xPL.js";import"./ListItem-DqBc_Th7.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
