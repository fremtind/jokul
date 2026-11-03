import{r as p,j as i}from"./iframe-DJDS5Wb7.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-iZ0m43bO.js";import{CheckboxStory as c}from"./Checkbox.stories-CCIQVmns.js";import k from"./Help.stories-DvCuKUWO.js";import u from"./RadioButton.stories-DqDBa7Nt.js";import{RadioPanel as g}from"./RadioPanel.stories-YhnJb-pP.js";import{F as h}from"./FieldGroup-BmzPBJbf.js";import{C as b}from"./Checkbox-BuL6nJPg.js";import{R as x}from"./RadioPanel-KPa7xd1u.js";import{H as C}from"./Help-C87GvuYJ.js";import{R as G}from"./RadioButton-niPkIcqB.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DBbh-j1B.js";import"./clsx-B-dksMZM.js";import"./Flex-DlEDuZ8l.js";import"./SlotComponent-FhtfniMO.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DSzJcKmU.js";import"./usePreviousValue-CYRDOt_A.js";import"./Loader-jVLCrPG-.js";import"./useDelayedRender-BY3H4Kpa.js";import"./useId-B7ypxmtD.js";import"./Label-QCojN2NV.js";import"./SupportLabel-D1TT9jgR.js";import"./SuccessIcon-B0jzzEaH.js";import"./Icon-CCqWF8ue.js";import"./WarningIcon-DUMYN4tw.js";import"./BaseRadioButton.stories-C9kwQCoZ.js";import"./BaseRadioButton-BXIJ89Nr.js";import"./Title-DCFNHaG4.js";import"./Card-CAciAPVd.js";import"./Text-CCX4xBNX.js";import"./Tag-C_brgo-m.js";import"./ExpandablePanel-C09d1jq2.js";import"./useAnimatedHeightBetween-B76WV0ry.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-F_18S9p2.js";import"./Expander-BVbka375.js";import"./ChevronUpIcon-CP-1OZ1H.js";import"./ListItem-RHTkSTdZ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
