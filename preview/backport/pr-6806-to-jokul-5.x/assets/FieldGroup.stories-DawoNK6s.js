import{r as p,j as i}from"./iframe-B57beeJR.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BpVrTLtM.js";import{CheckboxStory as c}from"./Checkbox.stories-NTb0Usnm.js";import d from"./Help.stories-Dn0__ji3.js";import k from"./RadioButton.stories-Dz1BQurA.js";import{RadioPanel as u}from"./RadioPanel.stories-Diosz7VS.js";import{F as g}from"./FieldGroup-Tn_2yODE.js";import{C as h}from"./Checkbox-DcxsLBqi.js";import{R as b}from"./RadioPanel-vUnzURxo.js";import{H as x}from"./Help-B96fRhBY.js";import{R as C}from"./RadioButton-Cbig_FvQ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Iwnm5lNQ.js";import"./clsx-B-dksMZM.js";import"./Flex-v55b1tJ6.js";import"./SlotComponent-bNNbalmZ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D31vvR3O.js";import"./usePreviousValue-Bhrrwszq.js";import"./Loader-B9r3CH90.js";import"./useDelayedRender-CdeF4sWY.js";import"./BaseRadioButton.stories-8wCNR5tq.js";import"./BaseRadioButton-XikfF6Oq.js";import"./useId-qP_8rBAS.js";import"./Title-Cn8sCjbC.js";import"./Card-0M5Oarpd.js";import"./Text-sfvE2Slk.js";import"./Tag-BllMBhw_.js";import"./ExpandablePanel-CKc0M0RM.js";import"./useAnimatedHeightBetween-C2KAI3kG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-4lgcPRvl.js";import"./Expander-CCEb7E2o.js";import"./ChevronDownIcon-DD7BChQx.js";import"./Icon-DrAerO0w.js";import"./ChevronUpIcon-8EXlamRS.js";import"./ListItem-Zf7xxwym.js";import"./Label-CM8VJYH2.js";import"./SupportLabel-DjBPc0QP.js";import"./SuccessIcon-CFN2p_5G.js";import"./WarningIcon-DzWIQ0ih.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
