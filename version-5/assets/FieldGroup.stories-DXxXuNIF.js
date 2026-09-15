import{r as p,j as i}from"./iframe-CUwqmEnQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CwxAh2rM.js";import{CheckboxStory as c}from"./Checkbox.stories-XN_DLjlT.js";import d from"./Help.stories-C-ay0HPX.js";import k from"./RadioButton.stories-BAtiiweb.js";import{RadioPanel as u}from"./RadioPanel.stories-BZNV6R-C.js";import{F as g}from"./FieldGroup-CrmxNDe0.js";import{C as h}from"./Checkbox-B-gOVkZ9.js";import{R as b}from"./RadioPanel-kAohnKV5.js";import{H as x}from"./Help-BXvwn45Q.js";import{R as C}from"./RadioButton-Dm1-AWa1.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CGw8Mdog.js";import"./clsx-B-dksMZM.js";import"./Flex-BrL97pxi.js";import"./SlotComponent-DOLDY2fW.js";import"./mergeRefs-BnmGO913.js";import"./Button-DcN5QWlT.js";import"./usePreviousValue-CM3GsGTc.js";import"./Loader-DFtMX-Te.js";import"./useDelayedRender-C3r4hBQv.js";import"./BaseRadioButton.stories-msgP2U6J.js";import"./BaseRadioButton-G52EXNxF.js";import"./useId-BizCkHwh.js";import"./Title-CsgWbnx8.js";import"./Card-D-QewQvt.js";import"./Text-CSWz7CUN.js";import"./Tag-B7inIsBu.js";import"./ExpandablePanel-CCOAVKNV.js";import"./useAnimatedHeightBetween-D9L_5mXN.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-WrGNLL4W.js";import"./Expander-D5xChSQU.js";import"./ChevronDownIcon-Ckrb7LX1.js";import"./Icon-BDO-KqGu.js";import"./ChevronUpIcon-q8nKK1TX.js";import"./ListItem-DvFKf0PR.js";import"./Label-CrFfvbgP.js";import"./SupportLabel-DQZlqA6I.js";import"./SuccessIcon-D__b-h9X.js";import"./WarningIcon-TJOsZ16D.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
