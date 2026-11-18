import{r as p,j as s}from"./iframe-CeEqwVNK.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-XX7mCgL5.js";import{CheckboxStory as c}from"./Checkbox.stories-CYYruOCq.js";import k from"./Help.stories-Cep5RAoz.js";import u from"./RadioButton.stories-LrRBzd1U.js";import{RadioPanel as g}from"./RadioPanel.stories-CnAvoULh.js";import{F as h}from"./FieldGroup-Bicq8-w6.js";import{C as b}from"./Checkbox-Ctwz91pW.js";import{R as x}from"./RadioPanel-CxHwzCdS.js";import{H as C}from"./Help-C02y8OIr.js";import{R as G}from"./RadioButton-DyVQLO8p.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-1j54B2K2.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CJjyVOp4.js";import"./SlotComponent-cTsd86an.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-hohJNV33.js";import"./usePreviousValue-Df2aJlHr.js";import"./Loader-bIRvkRMv.js";import"./useDelayedRender-BUR22Joa.js";import"./useId-BHdScmxr.js";import"./Label-pmEVNenk.js";import"./SupportLabel-DfsVR_qf.js";import"./SuccessIcon-Fx2ZGRQu.js";import"./Icon-BeJWiKGe.js";import"./WarningIcon-D_ph7iv3.js";import"./BaseRadioButton.stories-BzpB2JLQ.js";import"./BaseRadioButton-CkC2--qh.js";import"./Title-MpMmZNDS.js";import"./Card-C07kPFXd.js";import"./Text-DLcY7bZh.js";import"./Tag-5KrfUnry.js";import"./ExpandablePanel-CHKeQmUB.js";import"./useAnimatedHeightBetween-DnX6eR2y.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Dm6X70EV.js";import"./Expander-CbQFjXcp.js";import"./ChevronUpIcon-DAckStim.js";import"./ListItem-HeBzPDuu.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
