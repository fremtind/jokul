import{r as p,j as s}from"./iframe-CyZt68Cb.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Hz9MtkKN.js";import{CheckboxStory as c}from"./Checkbox.stories-BLd5zLqz.js";import k from"./Help.stories-BiEoejuL.js";import u from"./RadioButton.stories-BKGz17jV.js";import{RadioPanel as g}from"./RadioPanel.stories-BGSFf0p3.js";import{F as h}from"./FieldGroup-DFRT5vRf.js";import{C as b}from"./Checkbox-Oe5GJGY4.js";import{R as x}from"./RadioPanel-DxmShOm4.js";import{H as C}from"./Help-BgBry0rC.js";import{R as G}from"./RadioButton-DrPOj7Z2.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CmVRmcg-.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CmyoT1p4.js";import"./SlotComponent-qfYoY-0d.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DUihIcex.js";import"./usePreviousValue-BYA0q3eY.js";import"./Loader-CjaX7HtT.js";import"./useDelayedRender-CXAsV25o.js";import"./useId-C86xha4J.js";import"./Label-D0WMzdoW.js";import"./SupportLabel-DnJNswT-.js";import"./SuccessIcon-D__WDc9V.js";import"./Icon-CCjS3LuR.js";import"./WarningIcon-BU32-oLZ.js";import"./BaseRadioButton.stories-Dfk0VQ05.js";import"./BaseRadioButton-FVagXhak.js";import"./Title-DAV1OzLF.js";import"./Card-QfNGavvd.js";import"./Text-Bt3Wk31A.js";import"./Tag-BDz9t4iw.js";import"./ExpandablePanel-CPu1WkQs.js";import"./useAnimatedHeightBetween-CFlPqLq_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cq3Ls_cU.js";import"./Expander-DUxHz6Ur.js";import"./ChevronUpIcon-DrfEW4mz.js";import"./ListItem-Du5KrVgv.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
