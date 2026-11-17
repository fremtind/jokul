import{r as n,j as i}from"./iframe-zqt1OK4q.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BF81qITW.js";import{CheckboxStory as c}from"./Checkbox.stories-B1AEHuSS.js";import d from"./Help.stories-Dc9J9lRt.js";import k from"./RadioButton.stories-PuR4i0lQ.js";import{RadioPanel as u}from"./RadioPanel.stories-aOTSI1C7.js";import{F as g}from"./FieldGroup-CimUzwY4.js";import{C as h}from"./Checkbox-Dw2Z-ulU.js";import{R as b}from"./RadioPanel-BhEHUSln.js";import{H as x}from"./Help-BEnoVGir.js";import{R as C}from"./RadioButton-D00SXkUb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BoVuqgeR.js";import"./clsx-B-dksMZM.js";import"./Flex-BQWls5yN.js";import"./SlotComponent-cBmpFH4R.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-YdsOUcyc.js";import"./usePreviousValue-BMKs-sgk.js";import"./Loader-BUlhiTG6.js";import"./useDelayedRender-D7t5a8jm.js";import"./useId-hgiT-BiI.js";import"./Label-ZHFh2c50.js";import"./SupportLabel-8imy5GFl.js";import"./SuccessIcon-B6j_mzHK.js";import"./Icon-DFccgpfz.js";import"./WarningIcon-DfaW3xq1.js";import"./BaseRadioButton.stories-9QSsfB42.js";import"./BaseRadioButton-Cp2ugtc0.js";import"./Title-BjtmhVr2.js";import"./Card-BkKp6a6J.js";import"./Text-CmKVleqA.js";import"./Tag-D-H-HgIm.js";import"./ExpandablePanel-DSa4BeC7.js";import"./useAnimatedHeightBetween-Z9r3eJ6f.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BTXQ6Ef8.js";import"./Expander-iNMudVKz.js";import"./ChevronUpIcon-Cm8oioq5.js";import"./ListItem-CIE4OzOP.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
