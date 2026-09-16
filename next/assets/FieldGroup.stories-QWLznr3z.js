import{r as n,j as i}from"./iframe-C2SJlguE.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bv3GikQn.js";import{CheckboxStory as c}from"./Checkbox.stories-DmNq2M0L.js";import d from"./Help.stories-PuH6Ap5b.js";import k from"./RadioButton.stories-BsjYPFq2.js";import{RadioPanel as u}from"./RadioPanel.stories-kf3QM5YK.js";import{F as g}from"./FieldGroup-BEw-gTNf.js";import{C as h}from"./Checkbox-BD8xFcD-.js";import{R as b}from"./RadioPanel-CL320A07.js";import{H as x}from"./Help-DheSbgOh.js";import{R as C}from"./RadioButton-Clm09rgO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DQ5lfGWy.js";import"./clsx-B-dksMZM.js";import"./Flex-HleeY5zx.js";import"./SlotComponent-AgYlRM8z.js";import"./mergeRefs-CRo-ke2M.js";import"./Button-By-eEPSC.js";import"./usePreviousValue-BDG4WjVg.js";import"./Loader-D01drkBx.js";import"./useDelayedRender-BNYAL_mw.js";import"./useId-Cbow8HzJ.js";import"./Label-h8v0d8Dm.js";import"./SupportLabel-DnXvgUus.js";import"./SuccessIcon-CiI8CUWl.js";import"./Icon-KG6BoLha.js";import"./WarningIcon-PI7Yx1iW.js";import"./BaseRadioButton.stories-Dk11Tfhu.js";import"./BaseRadioButton-DVyVCneB.js";import"./Title-ZxmbKvAu.js";import"./Card-CPzEIM50.js";import"./Text-dB1DCay8.js";import"./Tag-CMA79nGu.js";import"./ExpandablePanel-M-CYlQKD.js";import"./useAnimatedHeightBetween-3HFuNtwM.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-S7wPotTa.js";import"./Expander-CjCvMNOp.js";import"./ChevronUpIcon-FxT3p1B4.js";import"./ListItem-DgXVP0h-.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
