import{r as n,j as i}from"./iframe-BamTC7FG.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BZyR5Bzx.js";import{CheckboxStory as c}from"./Checkbox.stories-mI5VgcI1.js";import d from"./Help.stories-DyIB4eSr.js";import k from"./RadioButton.stories-BtOJAMtX.js";import{RadioPanel as u}from"./RadioPanel.stories-Bwne8piO.js";import{F as g}from"./FieldGroup-NfCw71yk.js";import{C as h}from"./Checkbox-Cgo0tIlm.js";import{R as b}from"./RadioPanel-DFwu9uDG.js";import{H as x}from"./Help-CWkJvWMW.js";import{R as C}from"./RadioButton-KLNRc_j-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CuHb32Z8.js";import"./clsx-B-dksMZM.js";import"./Flex-KeVAkZ0H.js";import"./SlotComponent-CRy83-ff.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D6qhwj1m.js";import"./usePreviousValue-T5GAo4U_.js";import"./Loader-BbCsPJxb.js";import"./useDelayedRender-pb8FFufB.js";import"./useId-CG2-l4br.js";import"./Label-BnFHQvFG.js";import"./SupportLabel-B9Yq56Hv.js";import"./SuccessIcon-iBMigMqQ.js";import"./Icon-PIhtXbR_.js";import"./WarningIcon-1g6eVoHQ.js";import"./BaseRadioButton.stories-GVAvcHcL.js";import"./BaseRadioButton-DFEJhZuA.js";import"./Title-BTa1qEQ_.js";import"./Card-yR7X4-32.js";import"./Text-C0Ri509f.js";import"./Tag-C_1eQX2Z.js";import"./ExpandablePanel-CZcDdl_k.js";import"./useAnimatedHeightBetween-vKQ5gYd0.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BVEOqxi_.js";import"./Expander-DW2GL-EW.js";import"./ChevronUpIcon-CAlIBAjC.js";import"./ListItem-DMDKer3M.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
