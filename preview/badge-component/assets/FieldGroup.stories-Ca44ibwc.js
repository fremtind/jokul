import{r as n,j as i}from"./iframe-CrAzp6r8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-OvtCjgOv.js";import{CheckboxStory as c}from"./Checkbox.stories-hoM6sT7e.js";import d from"./Help.stories-Cn3ulZu1.js";import k from"./RadioButton.stories-OBRW9hZk.js";import{RadioPanel as u}from"./RadioPanel.stories-CEEj6OSQ.js";import{F as g}from"./FieldGroup-BxRybavX.js";import{C as h}from"./Checkbox-D-lB5YOw.js";import{R as b}from"./RadioPanel-CRBUWvkV.js";import{H as x}from"./Help-Cds95Miu.js";import{R as C}from"./RadioButton-CmK7KNV1.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DQ1IPeT9.js";import"./clsx-B-dksMZM.js";import"./Flex-77zx4m8x.js";import"./SlotComponent-D1LATgJl.js";import"./mergeRefs-BJFBn82p.js";import"./Button-BZm2BTPO.js";import"./usePreviousValue-9Q7SSHxU.js";import"./Loader-DfXBLB89.js";import"./useDelayedRender-BASJiTPP.js";import"./useId-DyC6VgUp.js";import"./Label-DJkKnwlU.js";import"./SupportLabel-NMo0P3TI.js";import"./SuccessIcon-DzWMlBSh.js";import"./Icon-CQxAKMYS.js";import"./WarningIcon-BHmqu_Dr.js";import"./BaseRadioButton.stories-D7QwcPz6.js";import"./BaseRadioButton-BJdDhmcf.js";import"./Title-Cp9b4-Dr.js";import"./Card-CSGl4XtI.js";import"./Text-Bi0Ei9Ln.js";import"./Tag-Dz7os0TV.js";import"./ExpandablePanel-Cxar7oXY.js";import"./useAnimatedHeightBetween-CtGTi4gg.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DMMovZFB.js";import"./Expander-DbtmW0vt.js";import"./ChevronUpIcon-aJ1JLVGa.js";import"./ListItem-fyfCW1NB.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
