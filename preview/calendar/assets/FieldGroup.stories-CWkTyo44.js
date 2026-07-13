import{r as p,j as i}from"./iframe-DKXds6Bc.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BCuCCP5v.js";import l from"./Help.stories-DBEt_mMB.js";import c from"./RadioButton.stories-E_pkcnJ2.js";import{F as d}from"./FieldGroup-dlpehogg.js";import{C as k,a as u}from"./CheckboxPanel.stories-BnHETEYL.js";import{RadioPanel as g}from"./RadioPanel.stories-CJSToAPI.js";import{C as h}from"./Checkbox-D1FGXdHk.js";import{R as b}from"./RadioPanel-0eEgQhlm.js";import{H as x}from"./Help-Ds3kVWN_.js";import{R as C}from"./RadioButton--nnkdWyJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-VjUiN0FY.js";import"./Label-C3HLdcuY.js";import"./SupportLabel-q5UaxbFK.js";import"./SuccessIcon-BYeiP-dj.js";import"./Icon-6Q63kTk8.js";import"./WarningIcon-DU6aghug.js";/* empty css               *//* empty css               */import"./Flex-C4OanvC7.js";import"./SlotComponent-q8dHA5KV.js";import"./mergeRefs-COSqbnyz.js";import"./BaseRadioButton.stories-CZSbkGMV.js";import"./BaseRadioButton-Bc7Kednp.js";import"./InputPanel-DGwcsvqA.js";import"./Button-DU0dVGg8.js";import"./usePreviousValue-DcO24_s3.js";import"./Loader-D0OnpI4b.js";import"./useDelayedRender-ByXoHYiA.js";import"./Title-B1x1Hpnm.js";import"./Card-DWpywDb6.js";import"./Text-Cv24Vd_p.js";import"./Tag-BoCwTX9G.js";import"./ExpandablePanel-BIdI-zDJ.js";import"./useAnimatedHeightBetween-ujfeTxYS.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C4qDuq8o.js";import"./Expander-yxQl2e-z.js";import"./ChevronDownIcon-DTRGMoEE.js";import"./ChevronUpIcon-DSdJc9Li.js";import"./ListItem-7_heedsn.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
