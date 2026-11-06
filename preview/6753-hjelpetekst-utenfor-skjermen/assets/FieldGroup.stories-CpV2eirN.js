import{r as p,j as s}from"./iframe-_jTDLtbz.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dm2uaaOx.js";import{CheckboxStory as c}from"./Checkbox.stories-B78cmbuB.js";import k from"./Help.stories-C-SlX8BR.js";import u from"./RadioButton.stories-DflKAMUI.js";import{RadioPanel as g}from"./RadioPanel.stories-DcO4GIRe.js";import{F as h}from"./FieldGroup-BjJaw_cK.js";import{C as b}from"./Checkbox-BdvmF8Q4.js";import{R as x}from"./RadioPanel-5Nha7Nul.js";import{H as C}from"./Help-cl4CXvRr.js";import{R as G}from"./RadioButton-sOrvCCgE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-thdSrpTH.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-xq95hGRb.js";import"./SlotComponent-M3NL_f8X.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Dy6-EIGO.js";import"./usePreviousValue-CQpm1WPi.js";import"./Loader-D0Cc1ezW.js";import"./useDelayedRender-87sQYHJ3.js";import"./useId-rIlMmaMg.js";import"./Label-qGO-tBnu.js";import"./SupportLabel-Di2mMbf9.js";import"./SuccessIcon-C2tYwnWr.js";import"./Icon-BgojQp1r.js";import"./WarningIcon-C83ZxaLh.js";import"./BaseRadioButton.stories-B5xEB0B-.js";import"./BaseRadioButton-B85JBxoJ.js";import"./Title-KrI35o_h.js";import"./Card-BLZiY4Wh.js";import"./Text-DNYYrvV4.js";import"./Tag-B-iXJ96d.js";import"./ExpandablePanel-CVS606aq.js";import"./useAnimatedHeightBetween-D0rswVla.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CG24ArpW.js";import"./Expander-DqjO2WvH.js";import"./ChevronUpIcon-kikgOKrF.js";import"./ListItem-CTjD3k6A.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
