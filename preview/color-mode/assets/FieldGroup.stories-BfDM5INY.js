import{r as n,j as i}from"./iframe-CzG5Snpm.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BQfIEzx5.js";import{CheckboxStory as c}from"./Checkbox.stories-B5kjjWWL.js";import d from"./Help.stories-CXRoxAvP.js";import k from"./RadioButton.stories-c8fjXTiQ.js";import{RadioPanel as u}from"./RadioPanel.stories-jU77uRQH.js";import{F as g}from"./FieldGroup-D6ip77Fq.js";import{C as h}from"./Checkbox-v5FGGcGT.js";import{R as b}from"./RadioPanel-CzF6Seds.js";import{H as x}from"./Help-BH3UKp8l.js";import{R as C}from"./RadioButton-CRlqxmXX.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DiLTT8vY.js";import"./clsx-B-dksMZM.js";import"./Flex-BvK9qEqs.js";import"./SlotComponent-BBL6AVxu.js";import"./mergeRefs-CMVoDBwk.js";import"./Button-D4n83r1O.js";import"./usePreviousValue-BaqXxSWL.js";import"./Loader-CwKobcp5.js";import"./useDelayedRender-D5r6MVEp.js";import"./useId-pL56pOKe.js";import"./Label-DRL294PN.js";import"./SupportLabel-Bo5LZrVQ.js";import"./SuccessIcon-DlqWt41c.js";import"./Icon-DD6kNOun.js";import"./WarningIcon-DFcTqTrg.js";import"./BaseRadioButton.stories-DLea_3wI.js";import"./BaseRadioButton-ByvW-ssA.js";import"./Title-zklA_jy7.js";import"./Card-B6UEwW1R.js";import"./Text-DAPXimoC.js";import"./Tag-Bws0MC4W.js";import"./ExpandablePanel-Bw-2XD7P.js";import"./useAnimatedHeightBetween-jtA7w_jP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CwHihXBi.js";import"./Expander-DhV44Hpm.js";import"./ChevronUpIcon-Bg9goF3I.js";import"./ListItem-fMHMz_i0.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
