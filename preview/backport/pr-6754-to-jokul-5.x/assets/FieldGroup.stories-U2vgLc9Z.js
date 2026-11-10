import{r as p,j as i}from"./iframe-DtIGcVlb.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-dOqTfaGn.js";import{CheckboxStory as c}from"./Checkbox.stories-Bth_u2K1.js";import d from"./Help.stories-CjKv7eH8.js";import k from"./RadioButton.stories-YGpR0Z2D.js";import{RadioPanel as u}from"./RadioPanel.stories-CENcgGYM.js";import{F as g}from"./FieldGroup-CYzTWjkn.js";import{C as h}from"./Checkbox-B9ahVsXE.js";import{R as b}from"./RadioPanel-CV6H4tsh.js";import{H as x}from"./Help-BPvYLizX.js";import{R as C}from"./RadioButton-C8Xu60-z.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D2lHqJjs.js";import"./clsx-B-dksMZM.js";import"./Flex-RTTtFyH8.js";import"./SlotComponent-BDwrT3og.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-D6jfXXri.js";import"./usePreviousValue-CFrWySuN.js";import"./Loader-E2gPgdbW.js";import"./useDelayedRender-DQvm5M1-.js";import"./BaseRadioButton.stories-DCgA0sH8.js";import"./BaseRadioButton-DwNrK-Yk.js";import"./useId-B6z3ogTm.js";import"./Title-BGosvQf-.js";import"./Card-C3Dbojqu.js";import"./Text-BeKc90SC.js";import"./Tag-Cey6_-Vx.js";import"./ExpandablePanel-DYWnyz1P.js";import"./useAnimatedHeightBetween-B6t0TRlC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-HCQeooN6.js";import"./Expander-DQ6G93Nv.js";import"./ChevronDownIcon-DCQffhDs.js";import"./Icon-lKtp1ETD.js";import"./ChevronUpIcon-C8A02HD8.js";import"./ListItem-BcmoqiLa.js";import"./Label-DhIS9vte.js";import"./SupportLabel-zs6GYa-h.js";import"./SuccessIcon-C0TEddrR.js";import"./WarningIcon-DFnUaSLc.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
