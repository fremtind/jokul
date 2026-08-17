import{r as n,j as i}from"./iframe-C5x4a8sr.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-IdFrIpGL.js";import l from"./Help.stories-BCjgSVWf.js";import c from"./RadioButton.stories-CW364XIS.js";import{F as d}from"./FieldGroup-BnarzH0w.js";import{C as k,a as u}from"./CheckboxPanel.stories-CFm4JAY-.js";import{RadioPanel as g}from"./RadioPanel.stories-_ZzE8Aff.js";import{C as h}from"./Checkbox-BhWh1FP9.js";import{R as b}from"./RadioPanel-CUBpvaJC.js";import{H as x}from"./Help-BcvKxTzG.js";import{R as C}from"./RadioButton-D7oC6Q_5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-GU_Tpc7V.js";import"./Label-Tddr3uUD.js";import"./SupportLabel-9O5Jv7Ce.js";import"./SuccessIcon-C6gQyuMX.js";import"./Icon-VEcP2GHv.js";import"./WarningIcon-Bfsh72YC.js";import"./BaseRadioButton.stories-Cg-9lCjM.js";import"./BaseRadioButton-DE6eK1WG.js";import"./InputPanel-CBqJVI65.js";import"./Flex-Dy13pLhn.js";import"./SlotComponent-BtUjIa31.js";import"./mergeRefs-D1-h816B.js";import"./Button-DA2EuoPD.js";import"./usePreviousValue-Dj0SnsCF.js";import"./Loader-CFbhDpzJ.js";import"./useDelayedRender-CFqYs_3j.js";import"./Title-msfrYqvJ.js";import"./Card-CUzAM8eW.js";import"./Text-DCO-5_aa.js";import"./Tag-5rmF5xRX.js";import"./ExpandablePanel-CEHgaDfU.js";import"./useAnimatedHeightBetween-BUsFuGiu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CHeM0U3q.js";import"./Expander-DGpcQeql.js";import"./ChevronUpIcon-CMoZfkgH.js";import"./ListItem-Bc6RpehW.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
