import{r as p,j as s}from"./iframe-CX8oQmgN.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DA7YGCNN.js";import{CheckboxStory as c}from"./Checkbox.stories-fRm4bdVX.js";import k from"./Help.stories-ipRmTxQ6.js";import u from"./RadioButton.stories-BBqRFhrs.js";import{RadioPanel as g}from"./RadioPanel.stories-C958z2te.js";import{F as h}from"./FieldGroup-ewGWo6j6.js";import{C as b}from"./Checkbox-CZz0chXe.js";import{R as x}from"./RadioPanel-C_UtmFeN.js";import{H as C}from"./Help-CFtfaa2h.js";import{R as G}from"./RadioButton-vD_6Zzll.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-EU25622B.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-sUWC_bHk.js";import"./SlotComponent-B4hrVc7h.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B-jqDQ-W.js";import"./usePreviousValue-BjannV_i.js";import"./Loader-F1DNrGvV.js";import"./useDelayedRender-CRW8LDz1.js";import"./useId-05XA5hm5.js";import"./Label-BHbX_1MX.js";import"./SupportLabel-CaAQ5JFd.js";import"./SuccessIcon-C_6Jrx8B.js";import"./Icon-DbSSjMO_.js";import"./WarningIcon-DrcYFwwS.js";import"./BaseRadioButton.stories-CrXGJZpZ.js";import"./BaseRadioButton-46w3w7Tt.js";import"./Title-BRKQscMO.js";import"./Card-ClPcjOJ6.js";import"./Text-oqQjqO-s.js";import"./Tag-Bt7PnNtW.js";import"./ExpandablePanel-ZI9WvnYx.js";import"./useAnimatedHeightBetween-uAAa7nHx.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-0nBXMMzL.js";import"./Expander-DA27OD75.js";import"./ChevronUpIcon-BfLiQhCB.js";import"./ListItem-BpzFU17o.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
