import{r as n,j as i}from"./iframe-BmEqDtt1.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-DeE1mpJ9.js";import{CheckboxStory as c}from"./Checkbox.stories-BENcA2Gf.js";import d from"./Help.stories-CiLNPh-0.js";import k from"./RadioButton.stories-CYRPU7G8.js";import{RadioPanel as u}from"./RadioPanel.stories-DF-UUm8Q.js";import{F as g}from"./FieldGroup-4Td8h6cL.js";import{C as h}from"./Checkbox-DI__xkFS.js";import{R as b}from"./RadioPanel-BQeHGY6Y.js";import{H as x}from"./Help-D8ZN_Z3Y.js";import{R as C}from"./RadioButton-DajaxdXO.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dab2yNRW.js";import"./clsx-B-dksMZM.js";import"./Flex-C8FM1V-o.js";import"./SlotComponent-DmWEyEKu.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CX1JxCjn.js";import"./usePreviousValue-Bh7S4WNq.js";import"./Loader-D6fNijUu.js";import"./useDelayedRender-Buw4m1xu.js";import"./useId-CKeWHb7U.js";import"./Label-DC9Pi_PK.js";import"./SupportLabel-CkOWlRS4.js";import"./SuccessIcon-C3uiQXjy.js";import"./Icon-CKi6uDZb.js";import"./WarningIcon-BA9RCtWB.js";import"./BaseRadioButton.stories-nF5muewP.js";import"./BaseRadioButton-Dz0oqzd3.js";import"./Title-BXkYTpx9.js";import"./Card-CV4Ewijz.js";import"./Text-C0Ht6d9g.js";import"./Tag-B5elNflx.js";import"./ExpandablePanel-DwGnmexi.js";import"./useAnimatedHeightBetween-DDfwWJYE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BmWPe8Wc.js";import"./Expander-DQ4jcHRB.js";import"./ChevronUpIcon-C1JCmqVN.js";import"./ListItem-UlXwlErk.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
