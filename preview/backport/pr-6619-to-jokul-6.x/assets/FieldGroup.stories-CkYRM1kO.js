import{r as n,j as i}from"./iframe-kAxw-ebI.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BhjYcgBH.js";import{CheckboxStory as c}from"./Checkbox.stories-Dtt53VuP.js";import d from"./Help.stories-C1fgpLs-.js";import k from"./RadioButton.stories-CxtdNPhm.js";import{RadioPanel as u}from"./RadioPanel.stories-Dk7NPPMu.js";import{F as g}from"./FieldGroup-DQ_3-UDz.js";import{C as h}from"./Checkbox-B_X9OAVB.js";import{R as b}from"./RadioPanel-CNnInD5m.js";import{H as x}from"./Help-O2i_gN8i.js";import{R as C}from"./RadioButton-SJlVDnIb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C_cJuZj8.js";import"./clsx-B-dksMZM.js";import"./Flex-w9I_PsIJ.js";import"./SlotComponent-C8cwYzMX.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C-Wl1A7Y.js";import"./usePreviousValue-CG2V8iUR.js";import"./Loader-BU-qEN8H.js";import"./useDelayedRender-BMY6sAxa.js";import"./useId-Gv9nffRc.js";import"./Label-B_pSRoAE.js";import"./SupportLabel-BKfdhgG3.js";import"./SuccessIcon-CslR5tXw.js";import"./Icon-B5Uk9OvF.js";import"./WarningIcon-BNLE9sR7.js";import"./BaseRadioButton.stories-B4buH0Hd.js";import"./BaseRadioButton-COoHpU9-.js";import"./Title-n7dIlj2d.js";import"./Card-6K3egNL7.js";import"./Text-fwu0p5uw.js";import"./Tag-CuvXJUKp.js";import"./ExpandablePanel-D0_DpwYf.js";import"./useAnimatedHeightBetween-20J8jZA2.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DoJePRLI.js";import"./Expander-CPvY56eV.js";import"./ChevronUpIcon-BpftSPsY.js";import"./ListItem-Bw3ORDqK.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
