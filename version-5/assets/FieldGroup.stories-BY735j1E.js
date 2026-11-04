import{r as p,j as i}from"./iframe-BLABJ3iD.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-_EemcLwV.js";import{CheckboxStory as c}from"./Checkbox.stories-CEO4fX1h.js";import d from"./Help.stories-Xvz2jYFs.js";import k from"./RadioButton.stories-ByFAxJ8D.js";import{RadioPanel as u}from"./RadioPanel.stories-DBWCdgFZ.js";import{F as g}from"./FieldGroup-Cmkj36s5.js";import{C as h}from"./Checkbox-TCpNDMEW.js";import{R as b}from"./RadioPanel-B_FISOi9.js";import{H as x}from"./Help-C7Q42FF3.js";import{R as C}from"./RadioButton-B__QtOwH.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-3v73h5X4.js";import"./clsx-B-dksMZM.js";import"./Flex-BYwY84qO.js";import"./SlotComponent-lFNk34b4.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BJxOhhJD.js";import"./usePreviousValue-CcUaPHlR.js";import"./Loader-Cuyz55I5.js";import"./useDelayedRender-CLCUedrq.js";import"./BaseRadioButton.stories-DkuhARJI.js";import"./BaseRadioButton-D9e5pcDN.js";import"./useId-NvNCEdLm.js";import"./Title-B34-l2Nb.js";import"./Card-CD6V5QGP.js";import"./Text-BYzh2cav.js";import"./Tag-KMDhZbxF.js";import"./ExpandablePanel-CkvAur29.js";import"./useAnimatedHeightBetween-BY59Jv8f.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-fDr6ELdn.js";import"./Expander-D--Gu_u-.js";import"./ChevronDownIcon-CMe4KqJh.js";import"./Icon-D8XFtDiR.js";import"./ChevronUpIcon-BAzj7pfc.js";import"./ListItem-BWhwR-nJ.js";import"./Label-D-2eToUe.js";import"./SupportLabel-MrAnXVUt.js";import"./SuccessIcon-BgtLAz9o.js";import"./WarningIcon-EM5ZCrHi.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
