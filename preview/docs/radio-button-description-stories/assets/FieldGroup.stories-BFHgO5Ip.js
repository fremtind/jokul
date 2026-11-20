import{r as p,j as s}from"./iframe-C09KBJIF.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-o34OYv17.js";import{CheckboxStory as c}from"./Checkbox.stories-B3jupQDs.js";import k from"./Help.stories-Be4bWCHW.js";import u from"./RadioButton.stories-DNq2Qicp.js";import{RadioPanel as g}from"./RadioPanel.stories-CKZ8v76D.js";import{F as h}from"./FieldGroup-BbdSVxpL.js";import{C as b}from"./Checkbox-CrzJZ-sQ.js";import{R as x}from"./RadioPanel-CDfYFIjT.js";import{H as C}from"./Help-BrHMgPPr.js";import{R as G}from"./RadioButton-BvZ01eca.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B8LJ7vtH.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-COl2qHag.js";import"./SlotComponent-BXSBsC9B.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C5oe4yBq.js";import"./usePreviousValue-DO28xxh1.js";import"./Loader-B12uXFGj.js";import"./useDelayedRender-BeGJWVdm.js";import"./useId-Bm6aGVvS.js";import"./Label-Bey1PirL.js";import"./SupportLabel-BZr2A9mK.js";import"./SuccessIcon-DIXpQ3T5.js";import"./Icon-BqTAJAaU.js";import"./WarningIcon-BlKe03sY.js";import"./BaseRadioButton.stories-DbLowy0Z.js";import"./BaseRadioButton-BccpirMj.js";import"./Title-DRkkAe2A.js";import"./Card-BtM0tlw2.js";import"./Text-BFRBqlbJ.js";import"./Tag-DOqUJXfp.js";import"./ExpandablePanel-C6c9LrFj.js";import"./useAnimatedHeightBetween-Ci1Mx2RX.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C7feMh7j.js";import"./Expander-BF31V9Gx.js";import"./ChevronUpIcon-C8Zg_roA.js";import"./ListItem-C-o2vOrg.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
