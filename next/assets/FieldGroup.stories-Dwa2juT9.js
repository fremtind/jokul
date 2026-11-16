import{r as p,j as s}from"./iframe-CvW20-Vt.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BRLp6Tmc.js";import{CheckboxStory as c}from"./Checkbox.stories-U_4eCCib.js";import k from"./Help.stories-cKE1T_ZL.js";import u from"./RadioButton.stories-CkRQHZS6.js";import{RadioPanel as g}from"./RadioPanel.stories-BWQk-7_x.js";import{F as h}from"./FieldGroup-lfcFZK5n.js";import{C as b}from"./Checkbox-CBZ_VIi5.js";import{R as x}from"./RadioPanel-ebzyum5Y.js";import{H as C}from"./Help-jYOgSYLn.js";import{R as G}from"./RadioButton-Cne1IYRT.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-NisI5L3v.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-LOJ1Je6d.js";import"./SlotComponent-CrgTxekP.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-2Ed_42L1.js";import"./usePreviousValue-BMONNKi2.js";import"./Loader-B25bEzZY.js";import"./useDelayedRender-BngMEFUo.js";import"./useId-CwmMFnP7.js";import"./Label-BI0lbtUO.js";import"./SupportLabel-BYXNe-qj.js";import"./SuccessIcon-m2Nxh-uT.js";import"./Icon-CJv7wQ8F.js";import"./WarningIcon-nx1-_aaD.js";import"./BaseRadioButton.stories-BDT9uvA_.js";import"./BaseRadioButton-CiQ1HzvD.js";import"./Title-b4PeJ5IQ.js";import"./Card-CsvsdRMY.js";import"./Text-MfXSeNNn.js";import"./Tag-DNU0ltm0.js";import"./ExpandablePanel-D1UTJysx.js";import"./useAnimatedHeightBetween-BS4RAjNc.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CUT7A-7i.js";import"./Expander-D2o3cMwq.js";import"./ChevronUpIcon-BIKRY589.js";import"./ListItem-rwIUKFy5.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
