import{r as n,j as i}from"./iframe-BhEenHwl.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DtVtdmVj.js";import{CheckboxStory as c}from"./Checkbox.stories-B01RFzlE.js";import d from"./Help.stories-t9iMl7vO.js";import k from"./RadioButton.stories-BOlrSfit.js";import{RadioPanel as u}from"./RadioPanel.stories-DzX84lvg.js";import{F as g}from"./FieldGroup-C0R36fxh.js";import{C as h}from"./Checkbox-DuWe_H3C.js";import{R as b}from"./RadioPanel-DZ_W4teG.js";import{H as x}from"./Help-DbNKmWkL.js";import{R as C}from"./RadioButton-B5qxa2Xz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-0bLShi2f.js";import"./clsx-B-dksMZM.js";import"./Flex-X4XMU3D0.js";import"./SlotComponent-CKYYrAkA.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CUBqUgLl.js";import"./usePreviousValue-kg4svs6s.js";import"./Loader-BHP8tbbT.js";import"./useDelayedRender-De93zIIa.js";import"./useId-Hgvfjld3.js";import"./Label--n0EXK3k.js";import"./SupportLabel-BpaNtbE-.js";import"./SuccessIcon-D3tYiAs0.js";import"./Icon-B2ULfsxr.js";import"./WarningIcon-CHOYZveH.js";import"./BaseRadioButton.stories-peYaMaxE.js";import"./BaseRadioButton-DGiWLrY8.js";import"./Title-DxG-FMzX.js";import"./Card-Cep2jBYc.js";import"./Text-BDwBtSOG.js";import"./Tag-C56lE3AP.js";import"./ExpandablePanel-Ddv2dRT2.js";import"./useAnimatedHeightBetween-BunKf8zP.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CkRzPQuV.js";import"./Expander-fMMbRR6o.js";import"./ChevronUpIcon-CWREkW91.js";import"./ListItem-9A-d1NoE.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
