import{r as n,j as i}from"./iframe-Co-oC5yp.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CEoI-_0k.js";import{CheckboxStory as c}from"./Checkbox.stories-Cw3GUa7x.js";import d from"./Help.stories-DBG5QWOZ.js";import k from"./RadioButton.stories-Bd1rrATZ.js";import{RadioPanel as u}from"./RadioPanel.stories-BlOSA_Sj.js";import{F as g}from"./FieldGroup-B-dh88bm.js";import{C as h}from"./Checkbox-DseXQJ3P.js";import{R as b}from"./RadioPanel-CRRTPrZp.js";import{H as x}from"./Help--kk89ikQ.js";import{R as C}from"./RadioButton-B0piFwfa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-UOXd_tWa.js";import"./clsx-B-dksMZM.js";import"./Flex-BggYix0o.js";import"./SlotComponent-C8vIL4XI.js";import"./mergeRefs-CKkm19uw.js";import"./Button-HZAh_0m3.js";import"./usePreviousValue-B6rGfAIt.js";import"./Loader-Q2QPjcn6.js";import"./useDelayedRender-9KPQG6P2.js";import"./useId-D71Lqy8y.js";import"./Label-BXw42G8D.js";import"./SupportLabel-DgObci8j.js";import"./SuccessIcon-Clc3Z9Vz.js";import"./Icon-z3A-xBe0.js";import"./WarningIcon-CB7XWajr.js";import"./BaseRadioButton.stories-BLwqrfIy.js";import"./BaseRadioButton-CwC91hTq.js";import"./Title-RNxMcT-X.js";import"./Card-BS7yGeLn.js";import"./Text-CKr9j_VD.js";import"./Tag-CFNMEiGO.js";import"./ExpandablePanel-Acl6Qvj3.js";import"./useAnimatedHeightBetween-BUtiKNrI.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D0QGW0eM.js";import"./Expander-BFZhBoDQ.js";import"./ChevronUpIcon-DCE1erN8.js";import"./ListItem-B0KGsXxW.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
