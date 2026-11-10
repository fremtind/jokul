import{r as p,j as i}from"./iframe-BQd0zWTP.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-AL6CgrFS.js";import{CheckboxStory as c}from"./Checkbox.stories-B_6NRQo_.js";import d from"./Help.stories-n3dDS_uL.js";import k from"./RadioButton.stories-D1m5IJgN.js";import{RadioPanel as u}from"./RadioPanel.stories-DFOTLnr7.js";import{F as g}from"./FieldGroup-GZ0YuEke.js";import{C as h}from"./Checkbox-CezkoVvn.js";import{R as b}from"./RadioPanel-wjIMCpzB.js";import{H as x}from"./Help-CGS5uCaK.js";import{R as C}from"./RadioButton-AxnRXg_y.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DyaUS-sv.js";import"./clsx-B-dksMZM.js";import"./Flex-B9T5eU9E.js";import"./SlotComponent-DCQfJCPf.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DiXSuT0P.js";import"./usePreviousValue-3_dJk6Cb.js";import"./Loader-RT07OGkB.js";import"./useDelayedRender-B631hTwV.js";import"./BaseRadioButton.stories-DqXO9v7v.js";import"./BaseRadioButton-BYbMs4gh.js";import"./useId-CUOj4b_y.js";import"./Title-Bm4u6Zul.js";import"./Card-qv8C2Nf0.js";import"./Text-BCkQYEJC.js";import"./Tag-DOrSsZEC.js";import"./ExpandablePanel-BfNqj09g.js";import"./useAnimatedHeightBetween-C9Yhp3rU.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bcg8VN_L.js";import"./Expander-BBm1Pv5V.js";import"./ChevronDownIcon-Cr6plQv2.js";import"./Icon-DYI0M5Td.js";import"./ChevronUpIcon-dphZqHFV.js";import"./ListItem-BrBIrt_l.js";import"./Label-Cy9qL1GZ.js";import"./SupportLabel--vg7QiaI.js";import"./SuccessIcon-CJzqvIXP.js";import"./WarningIcon-Bop46VXT.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
