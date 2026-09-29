import{r as n,j as i}from"./iframe-C06Lom9o.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DVcFO0h-.js";import{CheckboxStory as c}from"./Checkbox.stories-CCygc0rQ.js";import d from"./Help.stories-DWdXnq4e.js";import k from"./RadioButton.stories-TEYBo_AA.js";import{RadioPanel as u}from"./RadioPanel.stories-C1K5ahP5.js";import{F as g}from"./FieldGroup-BcHqfKlL.js";import{C as h}from"./Checkbox-CRcPSSYc.js";import{R as b}from"./RadioPanel-CN8rZ89f.js";import{H as x}from"./Help-BGt4cL4V.js";import{R as C}from"./RadioButton-BgdbXiVj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ChG149gJ.js";import"./clsx-B-dksMZM.js";import"./Flex-DTnjXge5.js";import"./SlotComponent-Ct4ozO8H.js";import"./mergeRefs-Ci3lyUEe.js";import"./Button-BjxJF6d_.js";import"./usePreviousValue-B1PixYCS.js";import"./Loader-DgpM-bwy.js";import"./useDelayedRender-uN-XxHAo.js";import"./useId-Z1RQ73e2.js";import"./Label-Do7PvgL2.js";import"./SupportLabel-BH0y_1h9.js";import"./SuccessIcon-BZ90b79J.js";import"./Icon-DE2-7qg0.js";import"./WarningIcon-CaiymGyM.js";import"./BaseRadioButton.stories-CyLks50K.js";import"./BaseRadioButton-CeaRZxFQ.js";import"./Title-CREvmPAN.js";import"./Card-B3uqDYdW.js";import"./Text-BPUGbGxX.js";import"./Tag-DttrHHE4.js";import"./ExpandablePanel-JVyRxyVs.js";import"./useAnimatedHeightBetween-CZyuSItD.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B8_aVF_Q.js";import"./Expander-B7IBiI9c.js";import"./ChevronUpIcon-iUR5KVXp.js";import"./ListItem-DKv_Lb8_.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
