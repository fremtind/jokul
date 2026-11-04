import{r as p,j as i}from"./iframe-CdEQOSA2.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DnDXGBTq.js";import{CheckboxStory as c}from"./Checkbox.stories-DNLl69Vn.js";import d from"./Help.stories-DVD3oUBo.js";import k from"./RadioButton.stories-CEWtjk1L.js";import{RadioPanel as u}from"./RadioPanel.stories-CmuEas2k.js";import{F as g}from"./FieldGroup-B7796ihv.js";import{C as h}from"./Checkbox-BQuG_UAL.js";import{R as b}from"./RadioPanel-CQJZhqxt.js";import{H as x}from"./Help-DLhPAilt.js";import{R as C}from"./RadioButton-CGnMir94.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D5Gcmfne.js";import"./clsx-B-dksMZM.js";import"./Flex-H_vq4pp7.js";import"./SlotComponent-CVP1pHBc.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BG3-TGuZ.js";import"./usePreviousValue-Dv0EM5Ik.js";import"./Loader-BG20KqwW.js";import"./useDelayedRender-C-lxZI6l.js";import"./BaseRadioButton.stories-BpitnoV6.js";import"./BaseRadioButton-Cnj2JLed.js";import"./useId-D5dgWlEn.js";import"./Title-CbiwMfvY.js";import"./Card-CbUo7ZSr.js";import"./Text-DpFeq42V.js";import"./Tag-BF6moGMM.js";import"./ExpandablePanel-C-KnKpk8.js";import"./useAnimatedHeightBetween-Cli0cAq8.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DiYUTBgS.js";import"./Expander-CT8HCD1d.js";import"./ChevronDownIcon-C1x8mYKS.js";import"./Icon-CWH6pvSV.js";import"./ChevronUpIcon-CU96weLu.js";import"./ListItem-CJKGY-jA.js";import"./Label-C_scYUkU.js";import"./SupportLabel-RKvCazXH.js";import"./SuccessIcon-1KEw82OO.js";import"./WarningIcon-BChZwBQr.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
