import{r as p,j as i}from"./iframe-qeIBcPXX.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BiETkmju.js";import{CheckboxStory as c}from"./Checkbox.stories-BHZRnG-l.js";import d from"./Help.stories-ZhJZr5c2.js";import k from"./RadioButton.stories-CcBUn3ax.js";import{RadioPanel as u}from"./RadioPanel.stories-B4mqWCRR.js";import{F as g}from"./FieldGroup-CrqRitba.js";import{C as h}from"./Checkbox-BK-8fLvz.js";import{R as b}from"./RadioPanel-C0ZXWvv9.js";import{H as x}from"./Help-BodYlnR4.js";import{R as C}from"./RadioButton-CN46boCo.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-v8hhhNgu.js";import"./clsx-B-dksMZM.js";import"./Flex-DUaguUC0.js";import"./SlotComponent-zXh6I7Ab.js";import"./mergeRefs-B6wWDRg2.js";import"./Button-QPL7RfXe.js";import"./usePreviousValue-Bb5--GxK.js";import"./Loader-BgrycnFk.js";import"./useDelayedRender-BXR0Ttec.js";import"./BaseRadioButton.stories-A-A7p4Wf.js";import"./BaseRadioButton-7y6vhpri.js";import"./useId-2dI2oHuh.js";import"./Title-BLxT0DZ8.js";import"./Card-B16KppTn.js";import"./Text-Bhrj-ckr.js";import"./Tag-CZSnoEGj.js";import"./ExpandablePanel-Dor51kct.js";import"./useAnimatedHeightBetween-B9rlptaG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BlVoPAeo.js";import"./Expander-DWfCnK66.js";import"./ChevronDownIcon-DRVTQWcw.js";import"./Icon-BCjyDvr-.js";import"./ChevronUpIcon-zBl92v-q.js";import"./ListItem-C2dJLSnl.js";import"./Label-rPugtzcA.js";import"./SupportLabel-D7eKOoeK.js";import"./SuccessIcon-B-t7fck3.js";import"./WarningIcon-D1ZyKD9s.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
