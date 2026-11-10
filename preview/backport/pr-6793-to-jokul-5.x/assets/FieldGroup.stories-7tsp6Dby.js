import{r as p,j as i}from"./iframe-DpOopYBx.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DfP0oC9O.js";import{CheckboxStory as c}from"./Checkbox.stories-EjTHd0LV.js";import d from"./Help.stories-BVAMHXlD.js";import k from"./RadioButton.stories-BQMCqhGG.js";import{RadioPanel as u}from"./RadioPanel.stories-ChzB2N34.js";import{F as g}from"./FieldGroup-Czfrkb5b.js";import{C as h}from"./Checkbox-CEnJ6kFA.js";import{R as b}from"./RadioPanel-Wrw8BbxE.js";import{H as x}from"./Help-Bsjb8WNq.js";import{R as C}from"./RadioButton-BKO_vId-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CsKC9xRP.js";import"./clsx-B-dksMZM.js";import"./Flex-CwUvEZaD.js";import"./SlotComponent-CWLpde7W.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DQk82cqn.js";import"./usePreviousValue-CybcF_Xs.js";import"./Loader-CvHWE2co.js";import"./useDelayedRender-CR_J3Tey.js";import"./BaseRadioButton.stories-BHUVrhDN.js";import"./BaseRadioButton-cP1l4Sik.js";import"./useId-Ba09VEeH.js";import"./Title-BE5a3qn-.js";import"./Card-CGZ1wVXx.js";import"./Text-Cyqqy-Hi.js";import"./Tag-CgY5HoAx.js";import"./ExpandablePanel-C3SyvpY1.js";import"./useAnimatedHeightBetween-H8rQfvN2.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B3h3L4V2.js";import"./Expander-Bg0qIaFV.js";import"./ChevronDownIcon-CFK3FB-b.js";import"./Icon-C6lyw9qh.js";import"./ChevronUpIcon-CqIpf-rT.js";import"./ListItem-xGWgjRL7.js";import"./Label-DuPATFLf.js";import"./SupportLabel-IHAv7VKR.js";import"./SuccessIcon-DvhJVtxg.js";import"./WarningIcon-D4MtvMjY.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
