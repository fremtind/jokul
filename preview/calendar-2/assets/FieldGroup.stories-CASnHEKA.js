import{r as n,j as i}from"./iframe-Cx2puDxY.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-D1Sb-GZ2.js";import l from"./Help.stories-BqCirts8.js";import c from"./RadioButton.stories-aisb9-iQ.js";import{F as d}from"./FieldGroup-BDjqHVUb.js";import{C as k,a as u}from"./CheckboxPanel.stories-x-0ya1ec.js";import{RadioPanel as g}from"./RadioPanel.stories-DV02XV9s.js";import{C as h}from"./Checkbox-ZOE_4-Y9.js";import{R as b}from"./RadioPanel-BvXCd3pf.js";import{H as x}from"./Help-mipq-9u2.js";import{R as C}from"./RadioButton-C2A1f-Ie.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B792nJEZ.js";import"./Label-BzkdpbzT.js";import"./SupportLabel-idFLCV_F.js";import"./SuccessIcon-FqA8rrZg.js";import"./Icon-0kZV7_q4.js";import"./WarningIcon-Bop1YTmK.js";import"./BaseRadioButton.stories-Cjodvtn_.js";import"./BaseRadioButton-70OATN_F.js";import"./InputPanel-BnKm0iS_.js";import"./Flex-BPxlvJx3.js";import"./SlotComponent-CqeTzNrl.js";import"./mergeRefs-BtiArGuu.js";import"./Button-BNQwGDOo.js";import"./usePreviousValue-BnbhsTq4.js";import"./Loader-B6ollIUW.js";import"./useDelayedRender-BCXwAFeQ.js";import"./Title-CK6TbJZ5.js";import"./Card-IOvBNQ5i.js";import"./Text-sEbx4Bnl.js";import"./Tag-BHOd4MOy.js";import"./ExpandablePanel-I3GDCFEd.js";import"./useAnimatedHeightBetween-DbefmDGV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DihGS9nJ.js";import"./Expander-CZ--K4xs.js";import"./ChevronUpIcon-DRJGrhoV.js";import"./ListItem-DswuzGEw.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
