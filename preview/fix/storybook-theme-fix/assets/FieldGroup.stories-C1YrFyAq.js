import{r as p,j as i}from"./iframe-DCDlZb6L.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CLMBnAer.js";import l from"./Help.stories-BVfe7a3I.js";import c from"./RadioButton.stories-cw6CIuJC.js";import{F as d}from"./FieldGroup-ylAUIB4d.js";import{C as k,a as u}from"./CheckboxPanel.stories-BNLOoCgT.js";import{RadioPanel as g}from"./RadioPanel.stories-CNejWvRi.js";import{C as h}from"./Checkbox-BjjIZgzU.js";import{R as b}from"./RadioPanel-DZrmwPVg.js";import{H as x}from"./Help-DxuUC7Q3.js";import{R as C}from"./RadioButton-o6soy3og.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BrZdKSfu.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D1TmIRoD.js";import"./mergeRefs-C3NyHOXB.js";import"./BaseRadioButton.stories-CbMXqgiV.js";import"./BaseRadioButton-O60BlB4-.js";import"./useId-Bq75RZ4u.js";import"./Label-1fzz-MMP.js";import"./SupportLabel-Br5uGGIM.js";import"./SuccessIcon-CmUqIKhI.js";import"./Icon-66mQvxtN.js";import"./WarningIcon-Dq-Rs-8S.js";import"./InputPanel-B8PQ6SXS.js";import"./Button-OD7IJThp.js";import"./usePreviousValue-Bm5X3TyC.js";import"./Loader-BTxH8v_r.js";import"./useDelayedRender-qmFvmIUH.js";import"./Title-DCHf2NvT.js";import"./Card-BYbNtbUg.js";import"./Text-CM1sfLYc.js";import"./Tag-B4Wb3L2C.js";import"./ExpandablePanel-yw2qgRt_.js";import"./useAnimatedHeightBetween-enrP1qDC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BXhsgE5S.js";import"./Expander-C9DlQhlW.js";import"./ChevronDownIcon-CW6U5d3U.js";import"./ChevronUpIcon-Cv7qPEDE.js";import"./ListItem-DW2-ZR6P.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
