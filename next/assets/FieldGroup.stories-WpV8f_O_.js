import{r as p,j as i}from"./iframe-BzzPiORQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Xf3IGrNg.js";import{CheckboxStory as c}from"./Checkbox.stories-C1DJ8HWy.js";import k from"./Help.stories-Cq4VtHGZ.js";import u from"./RadioButton.stories-DuOoUVta.js";import{RadioPanel as g}from"./RadioPanel.stories-CVPFgywf.js";import{F as h}from"./FieldGroup-CXasvwzF.js";import{C as b}from"./Checkbox-D0GHEAvc.js";import{R as x}from"./RadioPanel-jg3ct3rl.js";import{H as C}from"./Help-C7u72BU5.js";import{R as G}from"./RadioButton-CLtIs2Kf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C7Yq96Ly.js";import"./clsx-B-dksMZM.js";import"./Flex-UKFrAiyI.js";import"./SlotComponent-DFuhMNfK.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DW2hKJRw.js";import"./usePreviousValue-plo8bqmN.js";import"./Loader-DGkWZY4Y.js";import"./useDelayedRender-ChmDjwhP.js";import"./useId-D4E-SCiG.js";import"./Label-CXSGQo4b.js";import"./SupportLabel-BxW-gGJm.js";import"./SuccessIcon-B8pk1cLn.js";import"./Icon-D4THeVd9.js";import"./WarningIcon-CD2KpMJJ.js";import"./BaseRadioButton.stories-DFf8aq4c.js";import"./BaseRadioButton-7Y5rVyBn.js";import"./Title-H73gg1qQ.js";import"./Card-DXMujlis.js";import"./Text-DVFsr7bn.js";import"./Tag-D-TH4_EH.js";import"./ExpandablePanel-CfsLaX_T.js";import"./useAnimatedHeightBetween-BznNhABm.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CV6zdybO.js";import"./Expander-C7Ww7wan.js";import"./ChevronUpIcon-CQwRSAJV.js";import"./ListItem-Da8xEGH7.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
