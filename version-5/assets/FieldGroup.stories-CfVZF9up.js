import{r as p,j as i}from"./iframe-BxNf55fj.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DlUivkSn.js";import{CheckboxStory as c}from"./Checkbox.stories-DJuNLLpF.js";import d from"./Help.stories-B9rVxF6K.js";import k from"./RadioButton.stories-DSyLZcRM.js";import{RadioPanel as u}from"./RadioPanel.stories-s4vIDEM9.js";import{F as g}from"./FieldGroup-t2G64Hdf.js";import{C as h}from"./Checkbox-CiRLvAtr.js";import{R as b}from"./RadioPanel-BZ7-B2Ka.js";import{H as x}from"./Help-Cq2d0XAP.js";import{R as C}from"./RadioButton-BMDVY1Qt.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D77f6UOs.js";import"./clsx-B-dksMZM.js";import"./Flex-CNbXd28Y.js";import"./SlotComponent-gbWQOMdm.js";import"./mergeRefs-amzd0a7o.js";import"./Button-bBUQErMg.js";import"./usePreviousValue-B9PEUke_.js";import"./Loader-Cls6MAqq.js";import"./useDelayedRender-Cceaoe6p.js";import"./BaseRadioButton.stories-BsxfsQuC.js";import"./BaseRadioButton-p6WZJ71k.js";import"./useId-0Qu1KV2B.js";import"./Title-Cy7m4XCK.js";import"./Card-CPW8p2R7.js";import"./Text-CUO3i0em.js";import"./Tag-DQZ0ge5N.js";import"./ExpandablePanel-Cu4LO_0P.js";import"./useAnimatedHeightBetween-CpDdlQfa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-RJOeAmtt.js";import"./Expander--2HEChoA.js";import"./ChevronDownIcon-BeSEY6wf.js";import"./Icon-jJxukI8m.js";import"./ChevronUpIcon-C0zMMw9S.js";import"./ListItem-DU65_qAi.js";import"./Label-DIngfPpM.js";import"./SupportLabel-Jr3XF-sj.js";import"./SuccessIcon-CnKnWfK-.js";import"./WarningIcon-B45_DJgy.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
