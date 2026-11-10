import{r as n,j as i}from"./iframe-BDcbhYCr.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BrMrCjrt.js";import{CheckboxStory as c}from"./Checkbox.stories-CNdafGT7.js";import d from"./Help.stories-Dtlc35CG.js";import k from"./RadioButton.stories-Dsyn037t.js";import{RadioPanel as u}from"./RadioPanel.stories-udLfslAM.js";import{F as g}from"./FieldGroup-CYR_LocQ.js";import{C as h}from"./Checkbox-NsCnaa0b.js";import{R as b}from"./RadioPanel-DRFt_SRr.js";import{H as x}from"./Help-DEiROeDx.js";import{R as C}from"./RadioButton-tOXK8Syz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-a4yPVE2f.js";import"./clsx-B-dksMZM.js";import"./Flex-B2GJ-uWq.js";import"./SlotComponent-CwbHMHVD.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DTdoEajg.js";import"./usePreviousValue-CPqU4MQH.js";import"./Loader-MfGyibIy.js";import"./useDelayedRender-Dlm7AVeK.js";import"./useId-B90AG0Mz.js";import"./Label-CaSwVA32.js";import"./SupportLabel-7Ghv-gEi.js";import"./SuccessIcon-DXnHbuJF.js";import"./Icon-Dis1nrdP.js";import"./WarningIcon-CTcdaRgl.js";import"./BaseRadioButton.stories-DdxBe_Hs.js";import"./BaseRadioButton-0rWp_tK6.js";import"./Title-BOcJdohN.js";import"./Card-V9SdGWlR.js";import"./Text-MZdce8ek.js";import"./Tag-CMxrxKly.js";import"./ExpandablePanel-DZbgLYR6.js";import"./useAnimatedHeightBetween-DoWJgnH3.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CWmBpqiY.js";import"./Expander-Da-gFp-V.js";import"./ChevronUpIcon-CbjXfBe6.js";import"./ListItem-Gi3NyFit.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
