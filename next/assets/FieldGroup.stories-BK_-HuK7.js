import{r as p,j as i}from"./iframe-MWztzt87.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cv0479yZ.js";import l from"./Help.stories-CnM10gel.js";import c from"./RadioButton.stories-CANSdFaw.js";import{F as d}from"./FieldGroup-DfV9uBQC.js";import{C as k,a as u}from"./CheckboxPanel.stories-CrVdFh37.js";import{RadioPanel as g}from"./RadioPanel.stories-DWg6N5jB.js";import{C as h}from"./Checkbox-4296_4H3.js";import{R as b}from"./RadioPanel-BJKJ_U--.js";import{H as x}from"./Help-D6DeQbY5.js";import{R as C}from"./RadioButton-B-oLH-iE.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DwLDzxYl.js";import"./BaseRadioButton-_yUYGAQw.js";import"./clsx-B-dksMZM.js";import"./useId-DLb6HO6z.js";import"./Label-Cy3tcb6Y.js";import"./SupportLabel-DyfOc6pI.js";import"./SuccessIcon-CQDb3Kw2.js";import"./Icon-BbCHDcgb.js";import"./WarningIcon-Z2pYyN7R.js";import"./InputPanel-BGWrbdkq.js";import"./Flex-B1hdo8gz.js";import"./SlotComponent-C9lStvS6.js";import"./mergeRefs-CqyPk0Mz.js";import"./Button-BJvHggCY.js";import"./usePreviousValue-CmtGwYfk.js";import"./Loader-CjPjmI4Q.js";import"./useDelayedRender-DTk-zq9L.js";import"./Title-CBaEhysP.js";import"./Card-DCYQ007O.js";import"./Text-BJmG0CwW.js";import"./Tag-Bfsnst8n.js";import"./ExpandablePanel-DCV4nZap.js";import"./useAnimatedHeightBetween-Bw4WbkaE.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CrSz8XIn.js";import"./Expander-DKKXusrp.js";import"./ChevronDownIcon--h-vH949.js";import"./ChevronUpIcon-BQShseuU.js";import"./ListItem-kZlj7WIn.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
