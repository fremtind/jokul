import{r as p,j as i}from"./iframe-BqwTl-nT.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CCLpoeqJ.js";import{CheckboxStory as c}from"./Checkbox.stories-C_uwTGaq.js";import d from"./Help.stories-C6se8oIO.js";import k from"./RadioButton.stories-Cv_2k0jW.js";import{RadioPanel as u}from"./RadioPanel.stories-C3794Pev.js";import{F as g}from"./FieldGroup-BnkxrnKi.js";import{C as h}from"./Checkbox-MVn0M-WQ.js";import{R as b}from"./RadioPanel-CP9d96Ui.js";import{H as x}from"./Help-BfAyDwf6.js";import{R as C}from"./RadioButton-OfyreLGV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C9WoVrVs.js";import"./clsx-B-dksMZM.js";import"./Flex-BVSdFwd4.js";import"./SlotComponent-CdQHmb2K.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B4aGZR8q.js";import"./usePreviousValue-BtaJANp4.js";import"./Loader-B02BFOWH.js";import"./useDelayedRender-wmEsB-Ya.js";import"./BaseRadioButton.stories-DnZBopcl.js";import"./BaseRadioButton-Cjz00Bzm.js";import"./useId-CuONxRoQ.js";import"./Title-Bb9ujYto.js";import"./Card-C3G65YvI.js";import"./Text-23FzOsdc.js";import"./Tag--XCD6kKe.js";import"./ExpandablePanel-BAdxv-jg.js";import"./useAnimatedHeightBetween-DOUwXWWu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CAgISJH9.js";import"./Expander-BH730V1C.js";import"./ChevronDownIcon-BU6znT69.js";import"./Icon-BoAx-Ogl.js";import"./ChevronUpIcon-D6g-akhv.js";import"./ListItem-DoBsU2D0.js";import"./Label-CIr-j1IW.js";import"./SupportLabel-DloRbX1Z.js";import"./SuccessIcon-C6Ur4gcP.js";import"./WarningIcon-B1JZRA2a.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
