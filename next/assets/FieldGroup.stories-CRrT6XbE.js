import{r as p,j as s}from"./iframe-BIX3szCr.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DfL0WUaB.js";import{CheckboxStory as c}from"./Checkbox.stories-D56nXe8Y.js";import k from"./Help.stories-E2nIfAKL.js";import u from"./RadioButton.stories-biIpqyax.js";import{RadioPanel as g}from"./RadioPanel.stories-CD1taXrf.js";import{F as h}from"./FieldGroup-CIyTx-jC.js";import{C as b}from"./Checkbox-wFcpGujp.js";import{R as x}from"./RadioPanel-B64226hr.js";import{H as C}from"./Help-DQXaOIA2.js";import{R as G}from"./RadioButton-Dt4ZJV47.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dkc-tHs9.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BEevuXQf.js";import"./SlotComponent-Dt_gRpo_.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Crb-0MpT.js";import"./usePreviousValue-DX4gtYnt.js";import"./Loader-CPmxCbVu.js";import"./useDelayedRender-RBwg6a2S.js";import"./useId-Sp4HBomR.js";import"./Label-B0RHW8Vn.js";import"./SupportLabel-BnHpTW_q.js";import"./SuccessIcon-D_7uiWho.js";import"./Icon-CtniAAR9.js";import"./WarningIcon-B5nAdG5K.js";import"./BaseRadioButton.stories-BKXYAMH6.js";import"./BaseRadioButton-q2osjwTj.js";import"./Title-BcfeSyEv.js";import"./Card-DFwE5SJX.js";import"./Text-DrhrmhmY.js";import"./Tag-BMQ5lCuq.js";import"./ExpandablePanel-CKPCmtI9.js";import"./useAnimatedHeightBetween-CiyAEWlD.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CNmvcHV7.js";import"./Expander-CY0ozIQv.js";import"./ChevronUpIcon-BPQ2PEd3.js";import"./ListItem-BdyXjTrd.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
