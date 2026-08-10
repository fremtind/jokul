import{r as p,j as i}from"./iframe-CtJC8Qdp.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-uzmZzNfa.js";import l from"./Help.stories-B56VUTvq.js";import c from"./RadioButton.stories--BaRtERi.js";import{F as d}from"./FieldGroup-aiYQZmTv.js";import{C as k,a as u}from"./CheckboxPanel.stories-CSc7-NL_.js";import{RadioPanel as g}from"./RadioPanel.stories-BuNcq2_1.js";import{C as h}from"./Checkbox-BI0Hin8k.js";import{R as b}from"./RadioPanel-xm1Oy2wh.js";import{H as x}from"./Help-D7QlpudF.js";import{R as C}from"./RadioButton-HjkoH7fU.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Df3V9g4I.js";import"./BaseRadioButton-Kdx0Fkop.js";import"./clsx-B-dksMZM.js";import"./useId-Xk2zoKK1.js";import"./Label-yo5noXiK.js";import"./SupportLabel-BJoXR-5q.js";import"./SuccessIcon-aqGkqHd_.js";import"./Icon-CORfUIL8.js";import"./WarningIcon-CAN6AX3N.js";import"./InputPanel-B0EK3lBS.js";import"./Flex-C0QM60b7.js";import"./SlotComponent-BxvUaIyl.js";import"./mergeRefs-B370-YqN.js";import"./Button-DUnX9S_u.js";import"./usePreviousValue-DYnC2_RG.js";import"./Loader-CTbrcYZ5.js";import"./useDelayedRender-DAn91aod.js";import"./Title-ChcDzEii.js";import"./Card-CQ_5p5sr.js";import"./Text-DF7IKLwx.js";import"./Tag-DtCXqTDf.js";import"./ExpandablePanel-DFtACjMT.js";import"./useAnimatedHeightBetween-CmdpCm1H.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CkB28NVo.js";import"./Expander-CXDI6HBv.js";import"./ChevronDownIcon-CenupxKw.js";import"./ChevronUpIcon-BZ-HMZMj.js";import"./ListItem-geAaVn3F.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
