import{r as p,j as i}from"./iframe-DRgYoXf8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-D0A_V4tj.js";import{CheckboxStory as c}from"./Checkbox.stories-BjQ7LBGP.js";import k from"./Help.stories-DkJ9S46p.js";import u from"./RadioButton.stories-CcuTFx8b.js";import{RadioPanel as g}from"./RadioPanel.stories-BolDaQnD.js";import{F as h}from"./FieldGroup-CjgmL6dD.js";import{C as b}from"./Checkbox-sxxQO6qJ.js";import{R as x}from"./RadioPanel-CKQD0dZ9.js";import{H as C}from"./Help-CRdPKzNc.js";import{R as G}from"./RadioButton-BqaOsxrz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-v7Qj32hV.js";import"./clsx-B-dksMZM.js";import"./Flex-By5kwI8d.js";import"./SlotComponent-DFq-JYt9.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BMotxAgJ.js";import"./usePreviousValue-YRNFT9x8.js";import"./Loader-CRl_C6qr.js";import"./useDelayedRender-BcNwWrqm.js";import"./useId-D76u9vRd.js";import"./Label-CmpVaqKj.js";import"./SupportLabel-BjHZQavW.js";import"./SuccessIcon-DXC0nWPK.js";import"./Icon-Bu2zYpVW.js";import"./WarningIcon-jb9r1iFG.js";import"./BaseRadioButton.stories-C9Gyv9Ij.js";import"./BaseRadioButton-N0EmIrnT.js";import"./Title-DAL2BftV.js";import"./Card-DG4sTo7j.js";import"./Text-BLJvtesq.js";import"./Tag-DQSYB6tu.js";import"./ExpandablePanel-B6w2sI2c.js";import"./useAnimatedHeightBetween-BR_DQ3As.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cbcs8PH6.js";import"./Expander-b0UjM9uL.js";import"./ChevronUpIcon-DXshUnkC.js";import"./ListItem-CxHPMfA1.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
