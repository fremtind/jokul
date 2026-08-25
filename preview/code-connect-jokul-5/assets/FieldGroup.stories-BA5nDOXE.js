import{r as n,j as i}from"./iframe-B2b8ayvw.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DIOed34h.js";import l from"./Help.stories-Dl5Qdz5Z.js";import c from"./RadioButton.stories-Cmt0IJaT.js";import{F as d}from"./FieldGroup-BLGq1jJ0.js";import{C as k,a as u}from"./CheckboxPanel.stories-B88lnIu-.js";import{RadioPanel as g}from"./RadioPanel.stories-BXjbpXhZ.js";import{C as h}from"./Checkbox-DOKYS8tX.js";import{R as b}from"./RadioPanel-DbIacZIz.js";import{H as x}from"./Help-BCkZ9iQn.js";import{R as C}from"./RadioButton-Czi6CiNG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-92lB6jSG.js";import"./Label-Dfo4wJRg.js";import"./SupportLabel-Bp-6a4RL.js";import"./SuccessIcon-BSDF1r7A.js";import"./Icon-CEKhj8Bs.js";import"./WarningIcon-zBWN69cl.js";import"./BaseRadioButton.stories-7otQflcz.js";import"./BaseRadioButton-Qn3WGWYb.js";import"./InputPanel-BmMOAAWe.js";import"./Flex-BSkhXC0K.js";import"./SlotComponent-2moCw1zr.js";import"./mergeRefs-CHP-F5hK.js";import"./Button-BY2x-rMv.js";import"./usePreviousValue-8nUuC5A6.js";import"./Loader-DKX9l2f2.js";import"./useDelayedRender-CGm_HDfj.js";import"./Title-DJGKFCNl.js";import"./Card-CFevkIex.js";import"./Text-CRFAR1z_.js";import"./Tag-Qr9BIg5t.js";import"./ExpandablePanel-D44DFqk2.js";import"./useAnimatedHeightBetween-Bb1rKZat.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C-KNKNBO.js";import"./Expander-DgPGFuZv.js";import"./ChevronUpIcon-BaVxvlga.js";import"./ListItem-Pc9hnQGs.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
