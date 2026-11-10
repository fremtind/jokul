import{r as p,j as i}from"./iframe-CbWO4BlV.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dh2YVj2c.js";import{CheckboxStory as c}from"./Checkbox.stories-BJQcy6KW.js";import d from"./Help.stories-BYJZY2SL.js";import k from"./RadioButton.stories-CXblAc2-.js";import{RadioPanel as u}from"./RadioPanel.stories-Co9cjmKI.js";import{F as g}from"./FieldGroup-CZjNnhw6.js";import{C as h}from"./Checkbox-D_1Zj3in.js";import{R as b}from"./RadioPanel-BaV8FGMj.js";import{H as x}from"./Help-DCLQVRmr.js";import{R as C}from"./RadioButton-DjfLaZhd.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bx9G7MiA.js";import"./clsx-B-dksMZM.js";import"./Flex-Ci4GtMJ1.js";import"./SlotComponent-CQxa4IpN.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DYP0B_aW.js";import"./usePreviousValue-0EakzyS6.js";import"./Loader-C1L61QTg.js";import"./useDelayedRender-DImRb3pE.js";import"./BaseRadioButton.stories-CKyf7mxu.js";import"./BaseRadioButton-CRDyZmex.js";import"./useId-Bzz71Lya.js";import"./Title-Cd7oDBJy.js";import"./Card-DXdUBNd6.js";import"./Text-CaaNlVWb.js";import"./Tag-CB3kl2I_.js";import"./ExpandablePanel-CjnrUPn-.js";import"./useAnimatedHeightBetween-b_yLj3EC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DScxFsma.js";import"./Expander-vpGifBQY.js";import"./ChevronDownIcon-D_B1aJT3.js";import"./Icon-COZ4oEaf.js";import"./ChevronUpIcon-Cvl3EQuZ.js";import"./ListItem-F8cpvT8M.js";import"./Label-DJw0V_wM.js";import"./SupportLabel-jbE70mKM.js";import"./SuccessIcon-BKU8yK7R.js";import"./WarningIcon-D5nOL17D.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
