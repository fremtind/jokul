import{r as p,j as i}from"./iframe-pIaEvMYA.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BMCWI3Wq.js";import{CheckboxStory as c}from"./Checkbox.stories-DPe-EO4q.js";import d from"./Help.stories-DEgXoFDc.js";import k from"./RadioButton.stories-9u8xSGz1.js";import{RadioPanel as u}from"./RadioPanel.stories-0LlfPefR.js";import{F as g}from"./FieldGroup-u_cm-oca.js";import{C as h}from"./Checkbox-De85krxa.js";import{R as b}from"./RadioPanel-BDL1LANz.js";import{H as x}from"./Help-Cp6GjsRB.js";import{R as C}from"./RadioButton-CbGHd-Ul.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D_dY1NtQ.js";import"./clsx-B-dksMZM.js";import"./Flex-BJZ6cqlT.js";import"./SlotComponent-Cky8Rk33.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Bx9ljmnX.js";import"./usePreviousValue-DJ57IVXW.js";import"./Loader-CmS15ifg.js";import"./useDelayedRender-DrDdw3ub.js";import"./BaseRadioButton.stories-DtFGdsuO.js";import"./BaseRadioButton-BcVuw4QB.js";import"./useId-CbusGo3T.js";import"./Title-BBVSg8nC.js";import"./Card-BMx7iuxL.js";import"./Text-D1g5oF91.js";import"./Tag-CLsMSoZZ.js";import"./ExpandablePanel-4uhZ7h-9.js";import"./useAnimatedHeightBetween-BScK79ie.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bnh4xWGK.js";import"./Expander-fhO3RPXL.js";import"./ChevronDownIcon-BYaq15XZ.js";import"./Icon-DRR7JOws.js";import"./ChevronUpIcon-D0efGtLh.js";import"./ListItem-DnF--s_J.js";import"./Label-D5Mjglxh.js";import"./SupportLabel-BzxplZxd.js";import"./SuccessIcon-BmGg_ahI.js";import"./WarningIcon-CvUEOClx.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
