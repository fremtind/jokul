import{r as n,j as i}from"./iframe-D0mmy7KP.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-fh6mhALp.js";import{CheckboxStory as c}from"./Checkbox.stories-BxIUJfm4.js";import d from"./Help.stories-YxZe8Qm1.js";import k from"./RadioButton.stories-BYqRtoJY.js";import{RadioPanel as u}from"./RadioPanel.stories-pQykqfwA.js";import{F as g}from"./FieldGroup-BFKefgjQ.js";import{C as h}from"./Checkbox-CgnAXaJU.js";import{R as b}from"./RadioPanel-D648sGOO.js";import{H as x}from"./Help-BVbC_LJP.js";import{R as C}from"./RadioButton-Cy_p2_tT.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cz2lj9Bh.js";import"./clsx-B-dksMZM.js";import"./Flex-D8_2rblF.js";import"./SlotComponent-DmvXoY2_.js";import"./mergeRefs-ouKgVypT.js";import"./Button-D33vjP5_.js";import"./usePreviousValue-csTI7Qky.js";import"./Loader-DWUJn_Rf.js";import"./useDelayedRender-BlYWGdz5.js";import"./useId-D80U0ce-.js";import"./Label-BE1mAgeu.js";import"./SupportLabel-BZ0sGATm.js";import"./SuccessIcon-D-zb31_Q.js";import"./Icon-B-z4-92b.js";import"./WarningIcon-B8IQVrqb.js";import"./BaseRadioButton.stories-BLeb2Aab.js";import"./BaseRadioButton-BNoPytrT.js";import"./Title-DRnHnn_I.js";import"./Card-BRhvzFXj.js";import"./Text-Ds-394Hk.js";import"./Tag-Bw-_M8NN.js";import"./ExpandablePanel-C7LoFZuE.js";import"./useAnimatedHeightBetween-CEVIY85C.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bmo67CJa.js";import"./Expander-U-fWt8-a.js";import"./ChevronUpIcon-Cf0uvgvw.js";import"./ListItem-DszOO-Ny.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
