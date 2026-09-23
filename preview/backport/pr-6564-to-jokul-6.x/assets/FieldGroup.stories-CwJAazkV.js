import{r as n,j as i}from"./iframe-BNvEWJCz.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DU7lXota.js";import{CheckboxStory as c}from"./Checkbox.stories-LODdya8e.js";import d from"./Help.stories-Btx1Dali.js";import k from"./RadioButton.stories-Dy_72oxT.js";import{RadioPanel as u}from"./RadioPanel.stories-CzYdR5DA.js";import{F as g}from"./FieldGroup-CIW1XqFB.js";import{C as h}from"./Checkbox-DWKi-7Su.js";import{R as b}from"./RadioPanel-CM6TBoi6.js";import{H as x}from"./Help-qy3NmuUE.js";import{R as C}from"./RadioButton-BZzO4qzC.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BlzLZURk.js";import"./clsx-B-dksMZM.js";import"./Flex-BiTKFhCM.js";import"./SlotComponent-B7VqUdFk.js";import"./mergeRefs-NK-eC5Lm.js";import"./Button-DTNErJRI.js";import"./usePreviousValue-D7BQDUK9.js";import"./Loader-BOuJAIlI.js";import"./useDelayedRender-FGRGASki.js";import"./useId-C4JCSxzX.js";import"./Label-BIXd43zr.js";import"./SupportLabel-GXVONAQS.js";import"./SuccessIcon-cdcOraRR.js";import"./Icon-CliG63Jg.js";import"./WarningIcon-ByRsna-L.js";import"./BaseRadioButton.stories-CT3K1Uk5.js";import"./BaseRadioButton-ARxU7i5S.js";import"./Title-CzDq7tIo.js";import"./Card-DLHpDF1V.js";import"./Text-kS7sVsVW.js";import"./Tag-DCX-Ptm7.js";import"./ExpandablePanel-BFtTRN7Q.js";import"./useAnimatedHeightBetween-CPKGK5ut.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D-tWsFAt.js";import"./Expander-CKUsn5pA.js";import"./ChevronUpIcon-CkxqRo-V.js";import"./ListItem-DDfH3Yec.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
