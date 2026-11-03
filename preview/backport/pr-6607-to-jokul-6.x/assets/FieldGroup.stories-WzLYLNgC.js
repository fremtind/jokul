import{r as n,j as i}from"./iframe-DmVrXLVh.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CzXZ-CcZ.js";import{CheckboxStory as c}from"./Checkbox.stories-DwcpnApN.js";import d from"./Help.stories-BtVp00LA.js";import k from"./RadioButton.stories-S39vc7gU.js";import{RadioPanel as u}from"./RadioPanel.stories-5wzrCC3y.js";import{F as g}from"./FieldGroup-Bp90UEB0.js";import{C as h}from"./Checkbox-C3Fr7sFk.js";import{R as b}from"./RadioPanel-Cs6zFWkI.js";import{H as x}from"./Help-DiDhjXyc.js";import{R as C}from"./RadioButton-DcBtdJEV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DnOM827s.js";import"./clsx-B-dksMZM.js";import"./Flex-Wq8FJ-1K.js";import"./SlotComponent-B2UDQDOZ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B3OlPFnc.js";import"./usePreviousValue-BUPcE4AV.js";import"./Loader-ZAsHl5GI.js";import"./useDelayedRender-0MhL3gJq.js";import"./useId-CzZrvlH_.js";import"./Label-Dw7sySHS.js";import"./SupportLabel-DmvlkU4B.js";import"./SuccessIcon-DycpKMUX.js";import"./Icon-CXSAUWXH.js";import"./WarningIcon-Bopq_vFO.js";import"./BaseRadioButton.stories-CQUCrC7q.js";import"./BaseRadioButton-BLnepPe4.js";import"./Title-DKPIbxYE.js";import"./Card-C09eseLF.js";import"./Text-DE4L_G54.js";import"./Tag-Dzs6ArEC.js";import"./ExpandablePanel-8zyhJcfT.js";import"./useAnimatedHeightBetween-64VwGP3Q.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-s_4KJs37.js";import"./Expander-C12EE4qa.js";import"./ChevronUpIcon-DKh66r0p.js";import"./ListItem-DHpvHnDe.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
