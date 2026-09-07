import{r as n,j as i}from"./iframe-BXo3axTj.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-uMmBv-TH.js";import{CheckboxStory as c}from"./Checkbox.stories-D0cI70oF.js";import d from"./Help.stories-CP130UpW.js";import k from"./RadioButton.stories-YSX0bkqy.js";import{RadioPanel as u}from"./RadioPanel.stories-CLLbm1YJ.js";import{F as g}from"./FieldGroup-BrrYsz-e.js";import{C as h}from"./Checkbox-ChSX5ADS.js";import{R as b}from"./RadioPanel-BhVJkfR1.js";import{H as x}from"./Help-i8SyBLO8.js";import{R as C}from"./RadioButton-a2IC6bFw.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bzi5Lyut.js";import"./clsx-B-dksMZM.js";import"./Flex-D7UZvTHJ.js";import"./SlotComponent-FF344ZXF.js";import"./mergeRefs-QyskOXO3.js";import"./Button-BmvcjpA0.js";import"./usePreviousValue-Dw1VHpYd.js";import"./Loader-HQ4RrwGR.js";import"./useDelayedRender-Q4e2wRxQ.js";import"./useId-D5akchpY.js";import"./Label-DL96_w0E.js";import"./SupportLabel-D54Hdxq7.js";import"./SuccessIcon-DYm8P-W_.js";import"./Icon-D1qumIKY.js";import"./WarningIcon-BN3HDFv8.js";import"./BaseRadioButton.stories-Zjycie1c.js";import"./BaseRadioButton-Cu2wFZlZ.js";import"./Title-B6LCoBDe.js";import"./Card-CiBCA5ED.js";import"./Text-BUmgISur.js";import"./Tag-cTclZrNM.js";import"./ExpandablePanel-a7l0PTkr.js";import"./useAnimatedHeightBetween-Bj7PRgZu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CdQNdhcP.js";import"./Expander-CbYPISPz.js";import"./ChevronUpIcon-BLpW9RdR.js";import"./ListItem-CITPFxcX.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
