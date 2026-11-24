import{r as p,j as s}from"./iframe-BLM1xPjh.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CKoYfYFq.js";import{CheckboxStory as c}from"./Checkbox.stories-DBgiQEeD.js";import k from"./Help.stories-BdmqNElK.js";import u from"./RadioButton.stories-pmvA4RUJ.js";import{RadioPanel as g}from"./RadioPanel.stories-BNzmfLyC.js";import{F as h}from"./FieldGroup-jd2LnIJA.js";import{C as b}from"./Checkbox-nQWwgOCy.js";import{R as x}from"./RadioPanel-BRlEH_Oo.js";import{H as C}from"./Help-D_9wPee-.js";import{R as G}from"./RadioButton-D9hElBTe.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-O0p56CVA.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-1Fph96Ab.js";import"./SlotComponent-C_oKL3Wh.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CZlleNAb.js";import"./usePreviousValue-C5kxkUSU.js";import"./Loader-dDyd9csi.js";import"./useDelayedRender-BAPB6XkP.js";import"./useId-Bh2xPWaT.js";import"./Label-DWRS7Vu7.js";import"./SupportLabel-D6-INE_9.js";import"./SuccessIcon-bu7RyI5G.js";import"./Icon-B3KCKcTu.js";import"./WarningIcon-Dh7kYQb6.js";import"./Text-D8k6LJwR.js";import"./BaseRadioButton.stories-CP-J_hTw.js";import"./BaseRadioButton-C3_QquHR.js";import"./Title-DY6JtxCp.js";import"./Card-BEDW1227.js";import"./Tag-dBx8UbVv.js";import"./ExpandablePanel-DFNvWV8r.js";import"./useAnimatedHeightBetween-CjVqCWlH.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ANBR8GKd.js";import"./Expander-AsLly0Hr.js";import"./ChevronUpIcon-DmwYxUwH.js";import"./ListItem-CxNBYrfD.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
