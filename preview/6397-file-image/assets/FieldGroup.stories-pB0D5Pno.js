import{r as p,j as i}from"./iframe-CCWhJ-Ae.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DkYU5Zz9.js";import l from"./Help.stories-DMo4b8sx.js";import c from"./RadioButton.stories-DjING9Tm.js";import{F as d}from"./FieldGroup-CcJwVChp.js";import{C as k,a as u}from"./CheckboxPanel.stories-DCfF51cy.js";import{RadioPanel as g}from"./RadioPanel.stories-CyubowzY.js";import{C as h}from"./Checkbox-CfMNENgM.js";import{R as b}from"./RadioPanel-CLDfjRY7.js";import{H as x}from"./Help-DvW6-mwO.js";import{R as C}from"./RadioButton-DuMjq4_D.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-npZY_DxW.js";import"./BaseRadioButton-B9cGLf3y.js";import"./clsx-B-dksMZM.js";import"./useId-BNLbKKvw.js";import"./Label-CCUVVXoW.js";import"./SupportLabel-Cxyp9mnt.js";import"./SuccessIcon-B7cUmpLN.js";import"./Icon-BxgxpDZj.js";import"./WarningIcon-BIM0VGtX.js";import"./InputPanel-CeXCpZKQ.js";import"./Flex-Bo1sX-vf.js";import"./SlotComponent-CmZMJNbJ.js";import"./mergeRefs-BLHlkjdm.js";import"./Button-DzSZQ6m7.js";import"./usePreviousValue-qeERi3yg.js";import"./Loader-D8Q7A09F.js";import"./useDelayedRender-Dj9VzRAe.js";import"./Title-DYqxD_VP.js";import"./Card-Cci10NjH.js";import"./Text-Cd3tVe1V.js";import"./Tag-DAntoeN3.js";import"./ExpandablePanel-Dg5GJ3vu.js";import"./useAnimatedHeightBetween-gom7myY9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Cw0yxPe_.js";import"./Expander-CTJfBtzk.js";import"./ChevronDownIcon-DtK042vC.js";import"./ChevronUpIcon-DGUeZhW8.js";import"./ListItem-BoKN-iRC.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
