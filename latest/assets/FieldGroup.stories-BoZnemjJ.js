import{r as p,j as i}from"./iframe-CvCfSXV7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-o1jfGQzx.js";import l from"./Help.stories-ppgy_XWf.js";import c from"./RadioButton.stories-BV-G5IkQ.js";import{F as d}from"./FieldGroup-Csia6tUs.js";import{C as k,a as u}from"./CheckboxPanel.stories-BCBxK1xP.js";import{RadioPanel as g}from"./RadioPanel.stories-BX-1k1_p.js";import{C as h}from"./Checkbox-BLGyfnX-.js";import{R as b}from"./RadioPanel-DLcUMie8.js";import{H as x}from"./Help-BGbkJmEY.js";import{R as C}from"./RadioButton-DM6qu5um.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CqYcl4MN.js";import"./BaseRadioButton-DKEhqKLz.js";import"./clsx-B-dksMZM.js";import"./useId-C2cC0QW8.js";import"./Label-DSEH2ixs.js";import"./SupportLabel-Cu234D6r.js";import"./SuccessIcon-2h-ibJkd.js";import"./Icon-cdYI0D3D.js";import"./WarningIcon--bLPSh1R.js";import"./InputPanel-B0PMf7fU.js";import"./Flex-C5_WMSPj.js";import"./SlotComponent-DhOVjjVA.js";import"./mergeRefs-BRKWGaer.js";import"./Button-DeiH3Yba.js";import"./usePreviousValue-C-xmkHjQ.js";import"./Loader-DzM3EMUO.js";import"./useDelayedRender-DUOSiiux.js";import"./Title-Dyth0TSJ.js";import"./Card-BOzq6-ew.js";import"./Text-BjyLv0j-.js";import"./Tag-C9zhOWEH.js";import"./ExpandablePanel-CMvdhLiX.js";import"./useAnimatedHeightBetween-BL5pPfPt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BCHOP7uK.js";import"./Expander-8WY1DGoB.js";import"./ChevronDownIcon-D7h7kNqn.js";import"./ChevronUpIcon-DsXWPdOP.js";import"./ListItem-C2a5hIcp.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
