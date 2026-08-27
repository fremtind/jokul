import{r as n,j as i}from"./iframe-CC8zZrjQ.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BQiMkIfo.js";import l from"./Help.stories-B2abtYX2.js";import c from"./RadioButton.stories-Blp9nca4.js";import{F as d}from"./FieldGroup-Bu5Abked.js";import{C as k,a as u}from"./CheckboxPanel.stories-Aw25hcOC.js";import{RadioPanel as g}from"./RadioPanel.stories-DPa60XpA.js";import{C as h}from"./Checkbox-BjEDRB01.js";import{R as b}from"./RadioPanel-DidRcf0-.js";import{H as x}from"./Help-_MO5wZrG.js";import{R as C}from"./RadioButton-6VGLiqli.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CkLuhW2t.js";import"./Label-xCk0XoJj.js";import"./SupportLabel-mBU7h_ZZ.js";import"./SuccessIcon-B4exl0E4.js";import"./Icon-C8NDwnt_.js";import"./WarningIcon-CNT-3lqA.js";import"./BaseRadioButton.stories-Bmc4vaHx.js";import"./BaseRadioButton-DTH7iwFd.js";import"./InputPanel-iZZvVNxD.js";import"./Flex-D4CT1gIN.js";import"./SlotComponent-CvT_Bm_l.js";import"./mergeRefs-CyyIlvSr.js";import"./Button-h2pgNmgO.js";import"./usePreviousValue-D43jTht-.js";import"./Loader-0sltl_0Z.js";import"./useDelayedRender-aHcpWdUV.js";import"./Title-3F7KFM35.js";import"./Card-Do8YJ0py.js";import"./Text-Cl_IoDcd.js";import"./Tag-BZJTlTzy.js";import"./ExpandablePanel-Cjzva31r.js";import"./useAnimatedHeightBetween-DYTfbQUc.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-GZVtAFRn.js";import"./Expander-zS8Lkov6.js";import"./ChevronUpIcon-yYw2EOMg.js";import"./ListItem-DgrHovDM.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
