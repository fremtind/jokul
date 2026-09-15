import{r as n,j as i}from"./iframe-S4b2atIM.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BuCeH0Vd.js";import{CheckboxStory as c}from"./Checkbox.stories-DAA5K7OR.js";import d from"./Help.stories-CvuA5aC8.js";import k from"./RadioButton.stories-CU8bd7T6.js";import{RadioPanel as u}from"./RadioPanel.stories-Bw9BwU29.js";import{F as g}from"./FieldGroup-CeMK_Fvn.js";import{C as h}from"./Checkbox-BlLGg1gx.js";import{R as b}from"./RadioPanel-BrJicWt8.js";import{H as x}from"./Help-BynW2XQo.js";import{R as C}from"./RadioButton-C4M1ZDSj.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CBHEwQGJ.js";import"./clsx-B-dksMZM.js";import"./Flex-CD-zFw47.js";import"./SlotComponent-COIbIqEm.js";import"./mergeRefs-Bmx4IUbL.js";import"./Button-C6hnHFE7.js";import"./usePreviousValue-DzZTtW1B.js";import"./Loader-CZo7spAp.js";import"./useDelayedRender-HHcHH8gD.js";import"./useId-YMAIXpHw.js";import"./Label-ioH_zT9p.js";import"./SupportLabel-Dld-TH6V.js";import"./SuccessIcon-DiSh9XHe.js";import"./Icon-1n65_1AZ.js";import"./WarningIcon-R63AtuIA.js";import"./BaseRadioButton.stories-Di4Kdpcx.js";import"./BaseRadioButton-DQkwwsuF.js";import"./Title-BT6sS2Hi.js";import"./Card-9oyCVw-k.js";import"./Text-CRu9ittu.js";import"./Tag-DW2rC2o1.js";import"./ExpandablePanel-CG-RiwoX.js";import"./useAnimatedHeightBetween-DxJb59lh.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DmYDVFDF.js";import"./Expander-Cr5Z_pSl.js";import"./ChevronUpIcon-DVVJ65y0.js";import"./ListItem-Du9qlW6y.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
