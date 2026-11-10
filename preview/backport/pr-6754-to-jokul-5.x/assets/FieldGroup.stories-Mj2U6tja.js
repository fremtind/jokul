import{r as p,j as i}from"./iframe-bCUf2OfU.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-mSyTzx81.js";import{CheckboxStory as c}from"./Checkbox.stories-C-FhfOW9.js";import d from"./Help.stories-0u4wHbn7.js";import k from"./RadioButton.stories-DQkJVgOt.js";import{RadioPanel as u}from"./RadioPanel.stories-0Pbe3iyW.js";import{F as g}from"./FieldGroup-CS0gl-sz.js";import{C as h}from"./Checkbox-mEfTLbgs.js";import{R as b}from"./RadioPanel-Dl1EGXLo.js";import{H as x}from"./Help-ByVw8UZd.js";import{R as C}from"./RadioButton-BLI76-FX.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CxqNGVFe.js";import"./clsx-B-dksMZM.js";import"./Flex-C0tZLdf_.js";import"./SlotComponent-DkVpOQsv.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C4ooq5vs.js";import"./usePreviousValue-O4z0SYjD.js";import"./Loader-Du5VdcSX.js";import"./useDelayedRender-DwMJxoUl.js";import"./BaseRadioButton.stories-tCwaKrdU.js";import"./BaseRadioButton-DdKP6Ggu.js";import"./useId-Bjl7GtrT.js";import"./Title-B7t-gv1I.js";import"./Card-Do_i3LpW.js";import"./Text-_X7IsBaD.js";import"./Tag-1o8qJfkj.js";import"./ExpandablePanel-DShhjd1Q.js";import"./useAnimatedHeightBetween-CK7Mf_3n.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-vN-5IIwz.js";import"./Expander-DThHPWUn.js";import"./ChevronDownIcon-BxHWZ_e2.js";import"./Icon-C0Cd-m8f.js";import"./ChevronUpIcon-C7FpMioh.js";import"./ListItem-CRosAE6t.js";import"./Label-DIYmu1jv.js";import"./SupportLabel-CDWX2L3I.js";import"./SuccessIcon-Cl6fOcyF.js";import"./WarningIcon-CUHj7Bsz.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
