import{r as p,j as i}from"./iframe-BJpvCbT4.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-D6neqn8E.js";import{CheckboxStory as c}from"./Checkbox.stories-CR-kwBcf.js";import d from"./Help.stories-B6yqXC03.js";import k from"./RadioButton.stories-zwOCExTo.js";import{RadioPanel as u}from"./RadioPanel.stories-CppBm9eW.js";import{F as g}from"./FieldGroup-CEY98I38.js";import{C as h}from"./Checkbox-Dh60W6bk.js";import{R as b}from"./RadioPanel-B4jz2_zE.js";import{H as x}from"./Help-wFc24Iy0.js";import{R as C}from"./RadioButton-DbQWVSkx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BWKiIC0T.js";import"./clsx-B-dksMZM.js";import"./Flex-hpY54ayC.js";import"./SlotComponent-BeYMn6L9.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Cg-cXEMS.js";import"./usePreviousValue-CZtdumxZ.js";import"./Loader-eAnH394B.js";import"./useDelayedRender-5k7RCKJR.js";import"./BaseRadioButton.stories-CS4hbBtE.js";import"./BaseRadioButton-DP19BhoZ.js";import"./useId-BJWLu_kn.js";import"./Title-D1YgzOZt.js";import"./Card-DQvr1BZO.js";import"./Text-CQ9b-R4y.js";import"./Tag-PQrQlKZ6.js";import"./ExpandablePanel-DvtnXbVq.js";import"./useAnimatedHeightBetween-zdvfA8YW.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CGgx5L1k.js";import"./Expander-BVdFGfSg.js";import"./ChevronDownIcon-C3WhuRXh.js";import"./Icon-DPlqcyC_.js";import"./ChevronUpIcon-BZrCkg-2.js";import"./ListItem-D6FfIO8i.js";import"./Label-XAGFMfIC.js";import"./SupportLabel-BhlUzh_h.js";import"./SuccessIcon-BRq2V2pC.js";import"./WarningIcon-BepMX16y.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
