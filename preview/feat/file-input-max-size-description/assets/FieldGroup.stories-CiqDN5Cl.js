import{r as p,j as s}from"./iframe-BHADvndi.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dqh6MV_x.js";import{CheckboxStory as c}from"./Checkbox.stories-Ce9kSCEd.js";import k from"./Help.stories-BoSe4z3I.js";import u from"./RadioButton.stories-2TQggrvO.js";import{RadioPanel as g}from"./RadioPanel.stories-DOLRSWNn.js";import{F as h}from"./FieldGroup-DPTpGBH7.js";import{C as b}from"./Checkbox-DyD8sknE.js";import{R as x}from"./RadioPanel-B44CXEhN.js";import{H as C}from"./Help-CzIcZtKd.js";import{R as G}from"./RadioButton-CC9-_oUb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DbuQx_r6.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BBde5oQY.js";import"./SlotComponent-CiLeYweY.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-0obiQhwq.js";import"./usePreviousValue-Pa9_YHPZ.js";import"./Loader-CR-48PYa.js";import"./useDelayedRender-DYMAe9Nd.js";import"./useId-D4zZq3bp.js";import"./Label-OxjBp0tI.js";import"./SupportLabel-8D0cWmh0.js";import"./SuccessIcon-88Vkx6G9.js";import"./Icon-CvrtQvf2.js";import"./WarningIcon-gsnPOr0R.js";import"./BaseRadioButton.stories-DxB1kWOq.js";import"./BaseRadioButton-BUG_9wP6.js";import"./Title-Cs_KkrG2.js";import"./Card-DtjRbcqu.js";import"./Text-8ge8OUwa.js";import"./Tag-6767f7Kh.js";import"./ExpandablePanel-iJGgl8eT.js";import"./useAnimatedHeightBetween-CRLYvFna.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BOInQhsC.js";import"./Expander-CskqMgI6.js";import"./ChevronDownIcon-CnjZit0J.js";import"./ChevronUpIcon-EhcNgSvO.js";import"./ListItem-CkuFx406.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
