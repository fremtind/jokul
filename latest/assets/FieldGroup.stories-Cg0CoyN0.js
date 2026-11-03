import{r as n,j as i}from"./iframe-COAiO2JM.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Dw7zkzX8.js";import{CheckboxStory as c}from"./Checkbox.stories-Ds-AiUhk.js";import d from"./Help.stories-DRD7QemF.js";import k from"./RadioButton.stories-Ct1LZIRZ.js";import{RadioPanel as u}from"./RadioPanel.stories-CRJ3rufv.js";import{F as g}from"./FieldGroup-CiOM2z6T.js";import{C as h}from"./Checkbox-C7Nz_VPf.js";import{R as b}from"./RadioPanel-DYlY9R8w.js";import{H as x}from"./Help-Dg8f_cm8.js";import{R as C}from"./RadioButton-MlxwoQg7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-MkrSClFZ.js";import"./clsx-B-dksMZM.js";import"./Flex-MyimTCxv.js";import"./SlotComponent-DIfD033u.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Cz_Qb7ee.js";import"./usePreviousValue-BwbxDr59.js";import"./Loader-CbGWq7DW.js";import"./useDelayedRender-B8WNV7sM.js";import"./useId-BZbvik_i.js";import"./Label-DlRY5hdj.js";import"./SupportLabel-D74BUBDL.js";import"./SuccessIcon-BTiTwehr.js";import"./Icon-CgwDKkS3.js";import"./WarningIcon-BaoPutcO.js";import"./BaseRadioButton.stories-huvglIJP.js";import"./BaseRadioButton-BgUk5Lng.js";import"./Title-DtPV6oNb.js";import"./Card-BSutBtpY.js";import"./Text-DpiC045K.js";import"./Tag-B65ngKU7.js";import"./ExpandablePanel-GOTbvQ4E.js";import"./useAnimatedHeightBetween-fVlil6gW.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BKVL-CGg.js";import"./Expander-C7359BwF.js";import"./ChevronUpIcon-BV_Ico1k.js";import"./ListItem-DZUn_dyw.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
