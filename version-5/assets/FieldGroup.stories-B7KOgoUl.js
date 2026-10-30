import{r as p,j as i}from"./iframe-BGyPcFpU.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BEUAka-p.js";import{CheckboxStory as c}from"./Checkbox.stories-CW0tFcfv.js";import d from"./Help.stories-BCUuQ_Mq.js";import k from"./RadioButton.stories-DFrAGcm-.js";import{RadioPanel as u}from"./RadioPanel.stories-BKSgdt7x.js";import{F as g}from"./FieldGroup-BaknJ3OI.js";import{C as h}from"./Checkbox-BWVSNzFg.js";import{R as b}from"./RadioPanel-DkhJn8as.js";import{H as x}from"./Help-BqP2w3tD.js";import{R as C}from"./RadioButton-aaHPhH5x.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C46gyoXe.js";import"./clsx-B-dksMZM.js";import"./Flex-DgRzzAks.js";import"./SlotComponent-tmaTa8wh.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BsLLjWuy.js";import"./usePreviousValue-S78UHWj6.js";import"./Loader-B8ZtGYCk.js";import"./useDelayedRender-B4LFU3Ly.js";import"./BaseRadioButton.stories-BVqBQVPo.js";import"./BaseRadioButton-Bklxvuet.js";import"./useId-DwY2lp_I.js";import"./Title-B2tCu76r.js";import"./Card-BfqQVu9O.js";import"./Text-CQSeT3v2.js";import"./Tag-Bn-5JE8Z.js";import"./ExpandablePanel-DFuIJumR.js";import"./useAnimatedHeightBetween-Ba8XC-lz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BkQR2r3K.js";import"./Expander-Cq9_PwOX.js";import"./ChevronDownIcon-Cvj8731T.js";import"./Icon-DAm4WRRl.js";import"./ChevronUpIcon-BGB9Rk9c.js";import"./ListItem-ssqt9OgT.js";import"./Label-Dgv2WG-Q.js";import"./SupportLabel-DijOcyQu.js";import"./SuccessIcon-Bq8EmE0x.js";import"./WarningIcon-xD1awhiu.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
