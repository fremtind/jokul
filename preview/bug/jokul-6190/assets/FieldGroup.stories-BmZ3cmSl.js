import{r as p,j as i}from"./iframe-DLASCRXM.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CjDC8umo.js";import l from"./Help.stories-Cok1Zh1j.js";import c from"./RadioButton.stories-MjJNtEWg.js";import{F as d}from"./FieldGroup-D0KiWCjn.js";import{C as k,a as u}from"./CheckboxPanel.stories-DT6OslGu.js";import{RadioPanel as g}from"./RadioPanel.stories-BHqfpQ8D.js";import{C as h}from"./Checkbox-D9sPbgJ1.js";import{R as b}from"./RadioPanel-Cq6OVW2a.js";import{H as x}from"./Help-C5R_CrUL.js";import{R as C}from"./RadioButton-CeyAY0j6.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-B0Gnn5E1.js";import"./BaseRadioButton-Q5qmFFPA.js";import"./clsx-B-dksMZM.js";import"./useId-BUOtCf2r.js";import"./Label-5zOc9AT2.js";import"./SupportLabel-CmY09AAm.js";import"./SuccessIcon-taHTxMr9.js";import"./Icon-CHj1gaHv.js";import"./WarningIcon-DICfkoO4.js";import"./InputPanel-CJL0N6GN.js";import"./Flex-sgfmBxkT.js";import"./SlotComponent-vzxvuLfP.js";import"./mergeRefs-Bk4E5DA6.js";import"./Button-A1C0ORur.js";import"./usePreviousValue-RDhatIo0.js";import"./Loader-BOKK2qPd.js";import"./useDelayedRender-BgLyoQQ4.js";import"./Title-kT6ntJ8r.js";import"./Card-V6bGabxv.js";import"./Text-D2txWV0i.js";import"./Tag-75pHZE6A.js";import"./ExpandablePanel-DjnaFmLo.js";import"./useAnimatedHeightBetween-Cpk6tYSx.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-C2h6J01G.js";import"./Expander-CTLvatkc.js";import"./ChevronDownIcon-BcAIGgbl.js";import"./ChevronUpIcon-xK4fc5Uk.js";import"./ListItem-CMLzch8c.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
