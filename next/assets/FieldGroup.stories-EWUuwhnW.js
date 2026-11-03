import{r as p,j as i}from"./iframe-TxGS3kWb.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-FXp10Q6N.js";import{CheckboxStory as c}from"./Checkbox.stories-CPSw-QIM.js";import k from"./Help.stories-DasMwE4a.js";import u from"./RadioButton.stories-ChViS-hb.js";import{RadioPanel as g}from"./RadioPanel.stories-Brpq0qnY.js";import{F as h}from"./FieldGroup-D34kpdBI.js";import{C as b}from"./Checkbox-DfTE0rwT.js";import{R as x}from"./RadioPanel-BpkVMnjU.js";import{H as C}from"./Help-BoFyg_D8.js";import{R as G}from"./RadioButton-CgK3J3kx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C5KglqNw.js";import"./clsx-B-dksMZM.js";import"./Flex-MTufPaHp.js";import"./SlotComponent-eDh04AsO.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CwMyuU5M.js";import"./usePreviousValue-Bab2cl0s.js";import"./Loader-uC9mYSiI.js";import"./useDelayedRender-CmDrWK9s.js";import"./useId-B0ZqxNe9.js";import"./Label-DPzPeXAm.js";import"./SupportLabel-CEbqVGww.js";import"./SuccessIcon-CLn8DsAl.js";import"./Icon-DbPOiTpX.js";import"./WarningIcon-DZvhnaTT.js";import"./BaseRadioButton.stories-CCojuQo5.js";import"./BaseRadioButton-Dx1jYiK2.js";import"./Title-CMBKT-2T.js";import"./Card-DpNeJIns.js";import"./Text-CsGtjUya.js";import"./Tag-kLoi6Qpr.js";import"./ExpandablePanel-DmoAtYhh.js";import"./useAnimatedHeightBetween-W8EkmGT3.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ya6Eggwa.js";import"./Expander-BUjELISR.js";import"./ChevronUpIcon-CcCiVg7A.js";import"./ListItem-DzUodCr7.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
