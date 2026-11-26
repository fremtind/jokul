import{r as p,j as s}from"./iframe-CLDPu5u9.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-v9OgVPeu.js";import{CheckboxStory as c}from"./Checkbox.stories-VNd74Xxb.js";import k from"./Help.stories-CKKHZSpY.js";import u from"./RadioButton.stories-IaIMZ_wY.js";import{RadioPanel as g}from"./RadioPanel.stories-1M_eYFqt.js";import{F as h}from"./FieldGroup-BFbAcSEN.js";import{C as b}from"./Checkbox-zcOsAgYu.js";import{R as x}from"./RadioPanel-DK38cmt8.js";import{H as C}from"./Help-Dbrh1L7k.js";import{R as G}from"./RadioButton-B9e69FBE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C4kmSaq7.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CZi36Acv.js";import"./SlotComponent-1D2Py54k.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BioY7HdG.js";import"./usePreviousValue-BZpo1Syd.js";import"./Loader-BoQk4DJL.js";import"./useDelayedRender-Bwofc9Ol.js";import"./useId-BrG_CAWg.js";import"./Label-D7gaP69D.js";import"./SupportLabel-D51ULbPh.js";import"./SuccessIcon-Ct-KKGKW.js";import"./Icon-COZE6_km.js";import"./WarningIcon-C4IvNZnI.js";import"./BaseRadioButton.stories-mxOLky5_.js";import"./BaseRadioButton-DihxUPl5.js";import"./Title-DCPEnmny.js";import"./Card-DRf9QBPr.js";import"./Text-DXCjspfe.js";import"./Tag-1BdQJEGq.js";import"./ExpandablePanel-BCfN6r22.js";import"./useAnimatedHeightBetween-mbrmoloE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-X0S4MYnt.js";import"./Expander-rspzSL0x.js";import"./ChevronDownIcon-BPSmpkpF.js";import"./ChevronUpIcon-Dp1BqEy-.js";import"./ListItem-C0Z0QCr4.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
