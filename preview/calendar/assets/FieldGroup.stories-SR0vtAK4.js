import{r as p,j as i}from"./iframe-BHUqeWkC.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bh5g75R7.js";import l from"./Help.stories-NBDmzYjA.js";import c from"./RadioButton.stories-CLnUUowK.js";import{F as d}from"./FieldGroup-DOG0EK2x.js";import{C as k,a as u}from"./CheckboxPanel.stories-DkxMm0Ul.js";import{RadioPanel as g}from"./RadioPanel.stories-RZ2qyalx.js";import{C as h}from"./Checkbox-DEnrRYKi.js";import{R as b}from"./RadioPanel-COoMRyNI.js";import{H as x}from"./Help-DT_4x_XS.js";import{R as C}from"./RadioButton-DNX87BJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DOOtjp30.js";import"./Label-Cwa_0Yyr.js";import"./SupportLabel-DjpV8O8d.js";import"./SuccessIcon-DQzjzMMI.js";import"./Icon-CvhnRJgX.js";import"./WarningIcon-BsFHRMKL.js";/* empty css               *//* empty css               */import"./Flex-B3EUgeyT.js";import"./SlotComponent-CCgHegiO.js";import"./mergeRefs-BspG3kwc.js";import"./BaseRadioButton.stories-DYuhXyPF.js";import"./BaseRadioButton-CPKr2uk_.js";import"./InputPanel-DsTYVFZk.js";import"./Button-CN4gIY5k.js";import"./usePreviousValue-BEiqzHLS.js";import"./Loader-Dh9KFd-I.js";import"./useDelayedRender-DEoVvsVh.js";import"./Title-D67VnXSW.js";import"./Card-1xQeaG_3.js";import"./Text-DiBV1ovu.js";import"./Tag-CyZDuC99.js";import"./ExpandablePanel-C-bMMXbC.js";import"./useAnimatedHeightBetween-DkwgbvOK.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B0PzJISJ.js";import"./Expander-Dz6TrjTH.js";import"./ChevronDownIcon-FbUtMSdU.js";import"./ChevronUpIcon-B9dvqpOG.js";import"./ListItem-BmAO9wVm.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
