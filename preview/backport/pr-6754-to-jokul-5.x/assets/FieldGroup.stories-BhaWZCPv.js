import{r as p,j as i}from"./iframe-yJDE4o2L.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DSGlq9xV.js";import{CheckboxStory as c}from"./Checkbox.stories-OqKMV-tm.js";import d from"./Help.stories-M0Cdu6nx.js";import k from"./RadioButton.stories-CbPGN9ry.js";import{RadioPanel as u}from"./RadioPanel.stories-DbgPOHze.js";import{F as g}from"./FieldGroup-CQIc_lpP.js";import{C as h}from"./Checkbox-BI29Al01.js";import{R as b}from"./RadioPanel-Gw3vpt2h.js";import{H as x}from"./Help-BKxrwpEI.js";import{R as C}from"./RadioButton-B0oQDjCf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Jui6DCaD.js";import"./clsx-B-dksMZM.js";import"./Flex-CxqJL59I.js";import"./SlotComponent-DXJTJ-uV.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C7yLy_4o.js";import"./usePreviousValue-Cxi9UqDg.js";import"./Loader-BtUKkfQt.js";import"./useDelayedRender-BDIT9_oi.js";import"./BaseRadioButton.stories-D75Ov42W.js";import"./BaseRadioButton-I79BdPbe.js";import"./useId-Cxvb5004.js";import"./Title-B8Wa_2MD.js";import"./Card-CyDNPyFR.js";import"./Text-CK150v-H.js";import"./Tag-CiTngD1g.js";import"./ExpandablePanel-SFF8OpYP.js";import"./useAnimatedHeightBetween-AqJ4DPq_.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5qcadNL.js";import"./Expander-C-nA7cQK.js";import"./ChevronDownIcon-DNDYHQOM.js";import"./Icon-DVGCqIC2.js";import"./ChevronUpIcon-SzAUKh2Z.js";import"./ListItem-B1mC_h5G.js";import"./Label-D-j1OB6o.js";import"./SupportLabel-DzUMLR4D.js";import"./SuccessIcon-B2NR0BGv.js";import"./WarningIcon-CMMdpLw7.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
