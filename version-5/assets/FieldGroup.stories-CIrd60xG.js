import{r as p,j as i}from"./iframe-GQYOqIlP.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DqV0T7e1.js";import{CheckboxStory as c}from"./Checkbox.stories-Dz40OAqq.js";import d from"./Help.stories-E_YZC9du.js";import k from"./RadioButton.stories-B31Z43Oj.js";import{RadioPanel as u}from"./RadioPanel.stories-CfjLJMpP.js";import{F as g}from"./FieldGroup-Ds6t8-Sz.js";import{C as h}from"./Checkbox-C611955c.js";import{R as b}from"./RadioPanel-C-WWGf4u.js";import{H as x}from"./Help-DD0QzZES.js";import{R as C}from"./RadioButton-j5CRRq_X.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DLjuqNoI.js";import"./clsx-B-dksMZM.js";import"./Flex-dlT4ge0C.js";import"./SlotComponent-CPvigkr5.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DIM_gdM5.js";import"./usePreviousValue-DPtRkGPm.js";import"./Loader-34SiY_0r.js";import"./useDelayedRender-RzNcwUYN.js";import"./BaseRadioButton.stories-dYvFoMAO.js";import"./BaseRadioButton-CxIUKx_N.js";import"./useId-CwKEMfR_.js";import"./Title-D2UfCNI9.js";import"./Card-BDpPVvGa.js";import"./Text-DFjG7KaS.js";import"./Tag-CZ_JxnoK.js";import"./ExpandablePanel-BJAl2ia8.js";import"./useAnimatedHeightBetween-D-h5mDFw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-k150sdO_.js";import"./Expander-CatTd1cy.js";import"./ChevronDownIcon-B8gUY7iD.js";import"./Icon-DBrhSzBz.js";import"./ChevronUpIcon-BdyvGObO.js";import"./ListItem-Zbx-gU_y.js";import"./Label-BHOyGF1D.js";import"./SupportLabel-C_b4zvCc.js";import"./SuccessIcon-CYBWqIaB.js";import"./WarningIcon-DM9R_CGj.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
