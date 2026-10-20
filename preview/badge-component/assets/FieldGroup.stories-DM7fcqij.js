import{r as n,j as i}from"./iframe-HeAoTjxL.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DMvpYdtO.js";import{CheckboxStory as c}from"./Checkbox.stories-DQzT8gAw.js";import d from"./Help.stories-h5VZfWJ2.js";import k from"./RadioButton.stories-Cvechldc.js";import{RadioPanel as u}from"./RadioPanel.stories-Dlr2b8yd.js";import{F as g}from"./FieldGroup-TMRgACZ-.js";import{C as h}from"./Checkbox-DJoIHEUN.js";import{R as b}from"./RadioPanel-B0eD8eaT.js";import{H as x}from"./Help-D6DZCjIG.js";import{R as C}from"./RadioButton-BeWj0IML.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cv8uOa98.js";import"./clsx-B-dksMZM.js";import"./Flex-BDAcP-Ps.js";import"./SlotComponent--_2OLCEg.js";import"./mergeRefs-BhjjjFeI.js";import"./Button-4JZBiw3Y.js";import"./usePreviousValue-9zwt1B82.js";import"./Loader-C0ursb12.js";import"./useDelayedRender-DC0HOzfO.js";import"./useId-BoxdugIC.js";import"./Label-vcJA-5Il.js";import"./SupportLabel-FEPVEkgO.js";import"./SuccessIcon-C5pm6VBK.js";import"./Icon-CkrVP4zP.js";import"./WarningIcon-CXT5xtR5.js";import"./BaseRadioButton.stories-DKAI8rHs.js";import"./BaseRadioButton-B1dybcjh.js";import"./Title-X6UOTdFN.js";import"./Card-DYAQ4q43.js";import"./Text-DfWb3iWO.js";import"./Tag-DfnuUXtJ.js";import"./ExpandablePanel-GE0LcPMr.js";import"./useAnimatedHeightBetween-B1QLd7QX.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BVZYOZ5D.js";import"./Expander-D8qJBWdc.js";import"./ChevronUpIcon-C0_pzQGs.js";import"./ListItem-CIW6yPsW.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
