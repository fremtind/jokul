import{r as p,j as s}from"./iframe-Bbp1HzjK.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DnUkrSTA.js";import{CheckboxStory as c}from"./Checkbox.stories-Buq0-bqA.js";import k from"./Help.stories-D4wZZ23Y.js";import u from"./RadioButton.stories-Dr0WHmwZ.js";import{RadioPanel as g}from"./RadioPanel.stories-pX4GJPO1.js";import{F as h}from"./FieldGroup-zixdNXBS.js";import{C as b}from"./Checkbox-CnbP0mUV.js";import{R as x}from"./RadioPanel-CjWzhLX1.js";import{H as C}from"./Help-C9KoNYrf.js";import{R as G}from"./RadioButton-NUCcHAz4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CQXTl1bs.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Bhm9NkiF.js";import"./SlotComponent-KhcW8uvK.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-QpLiOGdR.js";import"./usePreviousValue-BKr-vM7-.js";import"./Loader-CXtjw6-m.js";import"./useDelayedRender-CTeQ4C_d.js";import"./useId-CUN0l-dr.js";import"./Label-C5kvtOtU.js";import"./SupportLabel-B73LNl5y.js";import"./SuccessIcon-DcDYezmo.js";import"./Icon-CyfkJgxQ.js";import"./WarningIcon-DLRtUc3N.js";import"./BaseRadioButton.stories-BlbZWpHj.js";import"./BaseRadioButton-1Wab1A6E.js";import"./Title-Dmp91qFe.js";import"./Card-DsIVWuWF.js";import"./Text-Ch9IA4bB.js";import"./Tag-DcFv2oEM.js";import"./ExpandablePanel-Ci8mLXOu.js";import"./useAnimatedHeightBetween-DiBmYqlX.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B5uB_1aJ.js";import"./Expander-Due1575w.js";import"./ChevronDownIcon-D14OatsH.js";import"./ChevronUpIcon-Bs-JSqPJ.js";import"./ListItem-CPs9Yeq5.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
