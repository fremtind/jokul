import{r as p,j as i}from"./iframe-vBol8UFS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DtKUf5W0.js";import l from"./Help.stories-DC-2lwq9.js";import c from"./RadioButton.stories-0BApIrpX.js";import{F as d}from"./FieldGroup-vjaiY5_0.js";import{C as k,a as u}from"./CheckboxPanel.stories-CTmYL-85.js";import{RadioPanel as g}from"./RadioPanel.stories-CmWSbkXl.js";import{C as h}from"./Checkbox-DFWrkCEY.js";import{R as b}from"./RadioPanel-Bn6dwhEF.js";import{H as x}from"./Help-mtOJ3n2r.js";import{R as C}from"./RadioButton-DcWU0rGO.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DtL0Q7sJ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BkVzM962.js";import"./mergeRefs-bmUkbjKV.js";import"./BaseRadioButton.stories-Ci7tBmtT.js";import"./BaseRadioButton-BKYf4DUZ.js";import"./useId-DFHrLyAp.js";import"./Label-DZ5uKtYy.js";import"./SupportLabel-D9c5zRbt.js";import"./SuccessIcon-B-SXXyiH.js";import"./Icon-CM-bZq8k.js";import"./WarningIcon-CiONqNL8.js";import"./InputPanel-eEu9rsMx.js";import"./Button-Bq04epRT.js";import"./usePreviousValue-Yauq_u4z.js";import"./Loader-BsMaKhpe.js";import"./useDelayedRender-VZ6gqLFy.js";import"./Title-C0La4BA8.js";import"./Card-C8eASH6g.js";import"./Text-94OA_Ufm.js";import"./Tag-n7La_nwE.js";import"./ExpandablePanel-CLFe19sa.js";import"./useAnimatedHeightBetween-CkylS-Rd.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-eXRzKyho.js";import"./Expander-58jdIV7W.js";import"./ChevronDownIcon-aNktQWwh.js";import"./ChevronUpIcon-CV6tTliw.js";import"./ListItem-DhHx9Ns2.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
