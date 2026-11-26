import{r as p,j as s}from"./iframe-BdcnJvFl.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CuVhmnWn.js";import{CheckboxStory as c}from"./Checkbox.stories-ZPOBwTUS.js";import k from"./Help.stories-BqV5YBMJ.js";import u from"./RadioButton.stories-D2AIXCkK.js";import{RadioPanel as g}from"./RadioPanel.stories-5PI_hidU.js";import{F as h}from"./FieldGroup-1LH4MMcI.js";import{C as b}from"./Checkbox-CNYEKVCI.js";import{R as x}from"./RadioPanel-DuX3vzKG.js";import{H as C}from"./Help-DRxwqKWe.js";import{R as G}from"./RadioButton-CtRLvxat.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CZg4mQ_m.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CQUWBvvq.js";import"./SlotComponent-onVuAPvH.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CPBu0pSY.js";import"./usePreviousValue-Bu3jrSWf.js";import"./Loader-DkYOQJ92.js";import"./useDelayedRender-UJCyr5Yt.js";import"./useId-DQ-7Qk0K.js";import"./Label-CpJLDecP.js";import"./SupportLabel-B3fP_ntu.js";import"./SuccessIcon-DcFUZ07s.js";import"./Icon-tjEiNOfZ.js";import"./WarningIcon-B-VQ979B.js";import"./BaseRadioButton.stories-DKBLs1PM.js";import"./BaseRadioButton-DKpnYPX1.js";import"./Title-CSza6PCz.js";import"./Card-CVp6HtIr.js";import"./Text-DBT6bpeR.js";import"./Tag-BTbVArLe.js";import"./ExpandablePanel-CQ0mwTxs.js";import"./useAnimatedHeightBetween-BLR80Wem.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D2JZeiY8.js";import"./Expander-BE2LZGci.js";import"./ChevronDownIcon-BBnJ3SaJ.js";import"./ChevronUpIcon-DeRFY2US.js";import"./ListItem-D_66rF70.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
