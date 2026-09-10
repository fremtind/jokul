import{r as n,j as i}from"./iframe-BX-rw-hQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BZglzYzp.js";import{CheckboxStory as c}from"./Checkbox.stories-jPbyV1DU.js";import d from"./Help.stories-C5prgfx5.js";import k from"./RadioButton.stories-DaOeEQty.js";import{RadioPanel as u}from"./RadioPanel.stories-DI4JsW2V.js";import{F as g}from"./FieldGroup-P-zCuALR.js";import{C as h}from"./Checkbox-CVxD_WpN.js";import{R as b}from"./RadioPanel-Cr3Q-0gt.js";import{H as x}from"./Help-GZ5r5DPa.js";import{R as C}from"./RadioButton-si5cXFy6.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C40vo70u.js";import"./clsx-B-dksMZM.js";import"./Flex-BG-7qGfU.js";import"./SlotComponent-D7TnFH5f.js";import"./mergeRefs-51r8V3ab.js";import"./Button-CMbhyutW.js";import"./usePreviousValue-B4iOj-L1.js";import"./Loader-WYb7Xu6g.js";import"./useDelayedRender-CUCq3SRV.js";import"./useId-Bi3dtQ2D.js";import"./Label-DoOtU33q.js";import"./SupportLabel-CSmjuLil.js";import"./SuccessIcon-C0eFkGBW.js";import"./Icon-ax05Dd50.js";import"./WarningIcon-Ch1pqErH.js";import"./BaseRadioButton.stories-CWZtRYOf.js";import"./BaseRadioButton-BkNdyY5n.js";import"./Title-DaKU9xwX.js";import"./Card-tfwezwft.js";import"./Text-DzQDKkCj.js";import"./Tag-iFfISgLM.js";import"./ExpandablePanel-CZzjlV3s.js";import"./useAnimatedHeightBetween-G6hoixlv.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DkXPwbC6.js";import"./Expander-BNAimmnv.js";import"./ChevronUpIcon-DopuLogV.js";import"./ListItem-DoYgqf6r.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
