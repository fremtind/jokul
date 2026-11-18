import{r as p,j as s}from"./iframe-BJ-Z_Cjo.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BANm8fKS.js";import{CheckboxStory as c}from"./Checkbox.stories-DmZmTw4f.js";import k from"./Help.stories-QJKLSb-C.js";import u from"./RadioButton.stories-Dkie3syV.js";import{RadioPanel as g}from"./RadioPanel.stories-BqRzG7yQ.js";import{F as h}from"./FieldGroup-IPQPpgol.js";import{C as b}from"./Checkbox-nma0ks4j.js";import{R as x}from"./RadioPanel-8Y3p3Q6S.js";import{H as C}from"./Help-BE5P-0mb.js";import{R as G}from"./RadioButton-DZN3TpSE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-lBSQ-E6g.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-IGnbjIWM.js";import"./SlotComponent-B4D0qB84.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CPbyi7ar.js";import"./usePreviousValue-D4RYUxRN.js";import"./Loader-CxxmfuY-.js";import"./useDelayedRender-_u_ZjWg4.js";import"./useId-37GC0E8t.js";import"./Label-CIuZ6ANC.js";import"./SupportLabel-7UNTNFvJ.js";import"./SuccessIcon-CnIOOGtD.js";import"./Icon-BJ9LRX6a.js";import"./WarningIcon-CJGiKuPC.js";import"./BaseRadioButton.stories-qAUh5Nin.js";import"./BaseRadioButton-CYtpHXO3.js";import"./Title-N2zbgtH6.js";import"./Card-CT3tctFR.js";import"./Text-D-dpxPOP.js";import"./Tag-Crv1p7NJ.js";import"./ExpandablePanel-s82G-CTv.js";import"./useAnimatedHeightBetween-BwEMM43m.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-sj0m0yDJ.js";import"./Expander-CsaMtU1t.js";import"./ChevronUpIcon-BIQaHf2m.js";import"./ListItem-CmInJ4Q-.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
