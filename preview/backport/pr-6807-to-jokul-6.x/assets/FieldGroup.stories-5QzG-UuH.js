import{r as n,j as i}from"./iframe-BW5APRxH.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BvH9snMZ.js";import{CheckboxStory as c}from"./Checkbox.stories-D_4T2GtU.js";import d from"./Help.stories-CR3eqfG0.js";import k from"./RadioButton.stories-Czeie5WD.js";import{RadioPanel as u}from"./RadioPanel.stories-BUJz2zzz.js";import{F as g}from"./FieldGroup-BSzq7CkS.js";import{C as h}from"./Checkbox-CMLDgQ36.js";import{R as b}from"./RadioPanel-C5ku5NjF.js";import{H as x}from"./Help-Bd06zHOG.js";import{R as C}from"./RadioButton-mASO3NEk.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CYl-DnSF.js";import"./clsx-B-dksMZM.js";import"./Flex-Bopjjkm4.js";import"./SlotComponent-Cccoo4a4.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BPjtjFPt.js";import"./usePreviousValue-TV_jOGqh.js";import"./Loader-BleL998d.js";import"./useDelayedRender-CuBbmcXU.js";import"./useId-BfqlF7iA.js";import"./Label-BNP6rVYi.js";import"./SupportLabel-DqiUUsSq.js";import"./SuccessIcon-Dy5mHnOU.js";import"./Icon-6VarCOTW.js";import"./WarningIcon-B0qYjNgG.js";import"./BaseRadioButton.stories-n6p3AeHI.js";import"./BaseRadioButton-DgWHrsM-.js";import"./Title-oWURxoyM.js";import"./Card-jAFDDWSU.js";import"./Text-cbAlJdP0.js";import"./Tag-BM4JmV8q.js";import"./ExpandablePanel-Ci62Oxt7.js";import"./useAnimatedHeightBetween-PYm0-uxx.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DhY2m2qT.js";import"./Expander-WyCrN68U.js";import"./ChevronUpIcon-B8LdM7jG.js";import"./ListItem-DV9QjxnL.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
