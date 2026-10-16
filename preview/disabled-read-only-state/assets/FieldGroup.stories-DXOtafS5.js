import{r as n,j as i}from"./iframe-DXRLrOxy.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-f2AmZf8p.js";import{CheckboxStory as c}from"./Checkbox.stories-BZuxIsyG.js";import d from"./Help.stories-BmML3Z-U.js";import k from"./RadioButton.stories-D_0E-6Ev.js";import{RadioPanel as u}from"./RadioPanel.stories-CfF9HPaF.js";import{F as g}from"./FieldGroup-BjPtrVR7.js";import{C as h}from"./Checkbox-BS3KxSn-.js";import{R as b}from"./RadioPanel-qHYzH-CS.js";import{H as x}from"./Help-B8N812mr.js";import{R as C}from"./RadioButton-ZzRDVCma.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D9-7-FA8.js";import"./clsx-B-dksMZM.js";import"./Flex-DqU0DOju.js";import"./SlotComponent-DjtxZz9w.js";import"./mergeRefs-B4bBR5Gz.js";import"./Button-CEYEglCk.js";import"./usePreviousValue-Bhypv1Wr.js";import"./Loader-Dqsf8iiz.js";import"./useDelayedRender-C7CvxgQq.js";import"./useId-0p61PYKC.js";import"./Label-QbC1hbI6.js";import"./SupportLabel-mJ440r0I.js";import"./SuccessIcon-hP94u6zQ.js";import"./Icon-CSRKG3LQ.js";import"./WarningIcon-B9vLvgXR.js";import"./BaseRadioButton.stories-X0eHtySX.js";import"./BaseRadioButton-ButLjcln.js";import"./Title-CJXEbXkv.js";import"./Card-BsFnDL4R.js";import"./Text-C130BQI7.js";import"./Tag-CNy66Sxu.js";import"./ExpandablePanel-D8X5dOq0.js";import"./useAnimatedHeightBetween-xz2plQnT.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DmmVDl-j.js";import"./Expander-B7XAlnz8.js";import"./ChevronUpIcon-CRoULPOE.js";import"./ListItem-D7-y61Sl.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
