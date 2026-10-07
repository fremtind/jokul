import{r as n,j as i}from"./iframe-DS5UNYwm.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-HT7uqXyW.js";import{CheckboxStory as c}from"./Checkbox.stories-oSR2EB5b.js";import d from"./Help.stories-Cg_pKDlG.js";import k from"./RadioButton.stories-Dbp7d2el.js";import{RadioPanel as u}from"./RadioPanel.stories-DFbSF4F7.js";import{F as g}from"./FieldGroup-CeFOEgek.js";import{C as h}from"./Checkbox-Cz10e57e.js";import{R as b}from"./RadioPanel-A3j4XYsr.js";import{H as x}from"./Help-C4SbQCMF.js";import{R as C}from"./RadioButton-YiHRhuKn.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BhUZ9kUJ.js";import"./clsx-B-dksMZM.js";import"./Flex-CXH4jvpR.js";import"./SlotComponent-BKx59lWr.js";import"./mergeRefs-BaNvZ5Vr.js";import"./Button-DYzg0rXo.js";import"./usePreviousValue-DbEhdZ11.js";import"./Loader-Clw2DDhO.js";import"./useDelayedRender-CtBwmW9j.js";import"./useId-Pat_snki.js";import"./Label-Cy6XPrmp.js";import"./SupportLabel-BN9ZFyHc.js";import"./SuccessIcon-DDG6QlMR.js";import"./Icon-BzfeVETs.js";import"./WarningIcon-D8hjqlOC.js";import"./BaseRadioButton.stories-BDSncYZW.js";import"./BaseRadioButton-DND_EK0o.js";import"./Title-DkbS5h8J.js";import"./Card-DHK_FBd_.js";import"./Text-Cr-o_jWT.js";import"./Tag-BEofXexn.js";import"./ExpandablePanel-YQ6kkydQ.js";import"./useAnimatedHeightBetween-DMXsPOBG.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BeBIDGP6.js";import"./Expander-0dl03gC4.js";import"./ChevronUpIcon-BGBaD4mE.js";import"./ListItem-D9kGCbIY.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
