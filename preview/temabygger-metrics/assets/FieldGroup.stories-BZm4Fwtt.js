import{r as p,j as i}from"./iframe-D_fJhVbI.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-25UjBu9I.js";import{CheckboxStory as c}from"./Checkbox.stories-BXI2T_VD.js";import k from"./Help.stories-CazHByQa.js";import u from"./RadioButton.stories-eFz7FJEm.js";import{RadioPanel as g}from"./RadioPanel.stories-D7FqChuy.js";import{F as h}from"./FieldGroup-C98o6A0C.js";import{C as b}from"./Checkbox-DNwmSbeS.js";import{R as x}from"./RadioPanel-ByzVaxK3.js";import{H as C}from"./Help-CASd2WSa.js";import{R as G}from"./RadioButton-DfcoeSDW.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DXjCRXte.js";import"./clsx-B-dksMZM.js";import"./Flex-DqIAEAzw.js";import"./SlotComponent-CdkMJmYn.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C_5WDsnO.js";import"./usePreviousValue-CmpJdDrq.js";import"./Loader-CFRXKug3.js";import"./useDelayedRender-1NX7bRcp.js";import"./useId-BG1QCg7b.js";import"./Label-DOhBtLP2.js";import"./SupportLabel-rjuNUuHQ.js";import"./SuccessIcon-CcUGj-Mq.js";import"./Icon-iQ9tV23a.js";import"./WarningIcon-DNpeWaD8.js";import"./BaseRadioButton.stories-BT9k_Abd.js";import"./BaseRadioButton-BhO1i7MV.js";import"./Title-B6TEKsIr.js";import"./Card-C4OP9cDD.js";import"./Text-D9gD4xB8.js";import"./Tag-BxeImzbX.js";import"./ExpandablePanel-XfR-CUP9.js";import"./useAnimatedHeightBetween-BQPAs4my.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BSH_yhH5.js";import"./Expander-CWbT_XK6.js";import"./ChevronUpIcon-D1knY9gz.js";import"./ListItem--BS6kUvO.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
