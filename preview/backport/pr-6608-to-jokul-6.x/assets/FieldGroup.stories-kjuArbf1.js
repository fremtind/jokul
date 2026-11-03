import{r as n,j as i}from"./iframe-cUEJAGQV.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Niiydaai.js";import{CheckboxStory as c}from"./Checkbox.stories-gSmR9Quo.js";import d from"./Help.stories-DVZ1GDFt.js";import k from"./RadioButton.stories-Bsz-VLVf.js";import{RadioPanel as u}from"./RadioPanel.stories-C8O5d3A1.js";import{F as g}from"./FieldGroup-BiQxlpPr.js";import{C as h}from"./Checkbox-Dvrxj_a9.js";import{R as b}from"./RadioPanel-DKWj5kNK.js";import{H as x}from"./Help-C3Penq0n.js";import{R as C}from"./RadioButton-Cv9pPKFY.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Ct3FuEMp.js";import"./clsx-B-dksMZM.js";import"./Flex-CUHjFaTY.js";import"./SlotComponent-DqCAcmJy.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CYy1HeAD.js";import"./usePreviousValue-Y0nyN8AY.js";import"./Loader-D3liyKee.js";import"./useDelayedRender-7dw2tKve.js";import"./useId-C9k8ZGyv.js";import"./Label-DmmrjKba.js";import"./SupportLabel-D4BRyd2K.js";import"./SuccessIcon-DS62q5YX.js";import"./Icon-DZEkoCUB.js";import"./WarningIcon-BlHIFFUJ.js";import"./BaseRadioButton.stories-BuUGjq3O.js";import"./BaseRadioButton-CjIjfhpC.js";import"./Title-Y23wBg4Y.js";import"./Card-BZkuJt76.js";import"./Text-BVzdXTv8.js";import"./Tag-CRR2jPQb.js";import"./ExpandablePanel-DY0drSrn.js";import"./useAnimatedHeightBetween-ocjRky70.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CNom10n1.js";import"./Expander-DMhMNLZj.js";import"./ChevronUpIcon-D9yYVYst.js";import"./ListItem-Bq4TDlpI.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
