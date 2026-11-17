import{r as p,j as s}from"./iframe-NNAgkt0_.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-ClXYZc09.js";import{CheckboxStory as c}from"./Checkbox.stories-DDlfxf7T.js";import k from"./Help.stories-CcQ51zWy.js";import u from"./RadioButton.stories-CRnCSwFY.js";import{RadioPanel as g}from"./RadioPanel.stories-C3glVWCN.js";import{F as h}from"./FieldGroup-BfurimKd.js";import{C as b}from"./Checkbox-FwQsPPez.js";import{R as x}from"./RadioPanel-ux54Mx2K.js";import{H as C}from"./Help-BM-TPbI2.js";import{R as G}from"./RadioButton-BWsZzxKC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cs8bXsf7.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-99X555ZE.js";import"./SlotComponent-BTpt3VST.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CDdwpNzi.js";import"./usePreviousValue-B0BsU-NV.js";import"./Loader-B3V-LcS2.js";import"./useDelayedRender-CZuna3nL.js";import"./useId-Dpk71Icc.js";import"./Label-Cn98drqW.js";import"./SupportLabel-DgrMPoIk.js";import"./SuccessIcon-NDdGiO3E.js";import"./Icon-y4llfFAg.js";import"./WarningIcon-CQk8POXJ.js";import"./BaseRadioButton.stories-C5F9Q_ct.js";import"./BaseRadioButton-CZmJ_fxn.js";import"./Title-C1YXtf_r.js";import"./Card--iYu6fi9.js";import"./Text-BOTRYwbC.js";import"./Tag-CQcRokva.js";import"./ExpandablePanel-CqfDlbhc.js";import"./useAnimatedHeightBetween-DG9ykiRh.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BeXorHGP.js";import"./Expander-CiH4SR9V.js";import"./ChevronUpIcon-CLKXzo7B.js";import"./ListItem-Dv1EW_xI.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
