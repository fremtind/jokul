import{r as n,j as i}from"./iframe-Ddit-vK8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-o68TVC_Y.js";import{CheckboxStory as c}from"./Checkbox.stories-Dbdu2zfc.js";import d from"./Help.stories-fv4VrgEy.js";import k from"./RadioButton.stories-CaZeXqyt.js";import{RadioPanel as u}from"./RadioPanel.stories-B_rvAmLH.js";import{F as g}from"./FieldGroup-F7jn2LE1.js";import{C as h}from"./Checkbox-Dp5W8tXE.js";import{R as b}from"./RadioPanel-CzyINPOw.js";import{H as x}from"./Help-CilB_Vgz.js";import{R as C}from"./RadioButton-C4hFztIM.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CsoXelwE.js";import"./clsx-B-dksMZM.js";import"./Flex-CKhVkDlN.js";import"./SlotComponent-Cu_U1xIm.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B_IjTYo9.js";import"./usePreviousValue-BhaUTtSH.js";import"./Loader-znrDSxaN.js";import"./useDelayedRender-M3SpSr1d.js";import"./useId-rJrHacUc.js";import"./Label-6KqrvbyU.js";import"./SupportLabel-BiNW2_Zf.js";import"./SuccessIcon-Bg6qGM7h.js";import"./Icon-BdwloHPe.js";import"./WarningIcon-B0dUoRr0.js";import"./BaseRadioButton.stories-v5YV_FJX.js";import"./BaseRadioButton-BoBhzZ_U.js";import"./Title-C4We_lF1.js";import"./Card-JLH6RZa-.js";import"./Text-P53YpOcH.js";import"./Tag-BMiRB97h.js";import"./ExpandablePanel-Ba84thKW.js";import"./useAnimatedHeightBetween-Ac2hwM_V.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CLfdHDS7.js";import"./Expander-B3ztMa9N.js";import"./ChevronUpIcon-BZ45xlUk.js";import"./ListItem-TfZ9nLQN.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
