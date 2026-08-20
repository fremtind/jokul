import{r as p,j as i}from"./iframe-BKJaW5yO.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DCpeyh18.js";import l from"./Help.stories-B8GIJfn4.js";import c from"./RadioButton.stories-DQ80auQe.js";import{F as d}from"./FieldGroup-n1_kEx-P.js";import{C as k,a as u}from"./CheckboxPanel.stories-BcOupdXm.js";import{RadioPanel as g}from"./RadioPanel.stories-Bojm5z_0.js";import{C as h}from"./Checkbox-DvQCirqD.js";import{R as b}from"./RadioPanel-BC-MdM6i.js";import{H as x}from"./Help-D7jD98Vo.js";import{R as C}from"./RadioButton-A6TuUmoQ.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D0piH8VI.js";import"./BaseRadioButton-BoDCBSqo.js";import"./clsx-B-dksMZM.js";import"./useId-DQExpYGw.js";import"./Label-CNy5kL04.js";import"./SupportLabel-BTTinkTH.js";import"./SuccessIcon-CgmLsmVU.js";import"./Icon-DvSbO2i2.js";import"./WarningIcon-0n-tLGMq.js";import"./InputPanel-B4_Q2pTi.js";import"./Flex-CW008HS_.js";import"./SlotComponent-Bplm-FNo.js";import"./mergeRefs-Bp7u9T_4.js";import"./Button-CDKn_7P0.js";import"./usePreviousValue-v43KXZkJ.js";import"./Loader-DkW6peM1.js";import"./useDelayedRender-B4xPzaPJ.js";import"./Title-DNWknqaq.js";import"./Card-DhOKcuvT.js";import"./Text-uJmo4JOG.js";import"./Tag-DN6wFbJN.js";import"./ExpandablePanel-YKcR7oxT.js";import"./useAnimatedHeightBetween-CJ2TVUYC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CUcvim1n.js";import"./Expander-DYPX8vsS.js";import"./ChevronDownIcon-DNUaBmOR.js";import"./ChevronUpIcon-DQzQrRvl.js";import"./ListItem-ieZ2pmzi.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
