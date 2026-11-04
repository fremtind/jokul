import{r as p,j as i}from"./iframe-CD9j_VvR.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-IoOKs0ft.js";import{CheckboxStory as c}from"./Checkbox.stories-fgxNx17p.js";import k from"./Help.stories-Djyk_5Xn.js";import u from"./RadioButton.stories-B4ZQxDwu.js";import{RadioPanel as g}from"./RadioPanel.stories-DvrzTU5E.js";import{F as h}from"./FieldGroup-BtYGeimE.js";import{C as b}from"./Checkbox-BXW_fkBB.js";import{R as x}from"./RadioPanel-GNIKa4Xe.js";import{H as C}from"./Help-Be6i76LW.js";import{R as G}from"./RadioButton-9v42nAZl.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-sLcvHrl1.js";import"./clsx-B-dksMZM.js";import"./Flex-CVNl-yv1.js";import"./SlotComponent-Dd9S-3dU.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-tRs0uAew.js";import"./usePreviousValue-DAvaJ0gJ.js";import"./Loader-DzCWhB4m.js";import"./useDelayedRender-CbmBKRcI.js";import"./useId-B-n43V7g.js";import"./Label-BHYAU5tG.js";import"./SupportLabel-CD6SLrJc.js";import"./SuccessIcon-DJK73_6v.js";import"./Icon-GGGPU_kb.js";import"./WarningIcon-CmfMXJiV.js";import"./BaseRadioButton.stories-CJWaK_pX.js";import"./BaseRadioButton-BHIAXh5T.js";import"./Title-BvcYi_NK.js";import"./Card-DP7t9yf6.js";import"./Text-CQW0byNN.js";import"./Tag-BjvcBkX3.js";import"./ExpandablePanel-C_vvgF-b.js";import"./useAnimatedHeightBetween-CGDofswQ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DsrxyvJY.js";import"./Expander-17mfpJpy.js";import"./ChevronUpIcon-rfM8ukpC.js";import"./ListItem-D7jr3s-M.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
