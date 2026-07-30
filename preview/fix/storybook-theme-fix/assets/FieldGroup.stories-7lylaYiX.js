import{r as p,j as i}from"./iframe-Cq7fcctY.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DF2n_KEf.js";import l from"./Help.stories-DpuHT8vW.js";import c from"./RadioButton.stories-1LtN91Jr.js";import{F as d}from"./FieldGroup-GJFATadi.js";import{C as k,a as u}from"./CheckboxPanel.stories-CQsQkKnM.js";import{RadioPanel as g}from"./RadioPanel.stories-BbDxuyd0.js";import{C as h}from"./Checkbox-C3JSPT2v.js";import{R as b}from"./RadioPanel-0Ie9qHTj.js";import{H as x}from"./Help-CRPk_aBJ.js";import{R as C}from"./RadioButton-C4t8Ne6e.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Djb0E6iJ.js";import"./BaseRadioButton-376M7sVm.js";import"./clsx-B-dksMZM.js";import"./useId-tk92opn7.js";import"./Label-D_LWr7YA.js";import"./SupportLabel-LbmnJ4SJ.js";import"./SuccessIcon-0dsY5grw.js";import"./Icon-DWC_SISw.js";import"./WarningIcon-BsegNXVV.js";import"./InputPanel-BlrvNKUR.js";import"./Flex-B5BcqTms.js";import"./SlotComponent-DCvAXVdU.js";import"./mergeRefs-CzfqKuVA.js";import"./Button-Dp8gQXkV.js";import"./usePreviousValue-DTEjn8x6.js";import"./Loader-CvPBehbB.js";import"./useDelayedRender-mtiTJzGK.js";import"./Title-CBwdrscq.js";import"./Card-C5eO-QIP.js";import"./Text--_AtYau4.js";import"./Tag-DAKrrKnG.js";import"./ExpandablePanel-C-IGWNB5.js";import"./useAnimatedHeightBetween-o9DT0bmr.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DKbD6HQK.js";import"./Expander-QbcrizuG.js";import"./ChevronDownIcon-Cqq6hJo-.js";import"./ChevronUpIcon-QxWhZiME.js";import"./ListItem-M-t0xLZd.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
