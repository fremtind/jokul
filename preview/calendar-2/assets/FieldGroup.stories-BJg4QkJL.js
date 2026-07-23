import{r as p,j as i}from"./iframe-DNahjSPM.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BKq7c9D4.js";import l from"./Help.stories-BxmeWEVt.js";import c from"./RadioButton.stories-EhbHMdQ4.js";import{F as d}from"./FieldGroup-BQowecnL.js";import{C as k,a as u}from"./CheckboxPanel.stories-BS1V51_3.js";import{RadioPanel as g}from"./RadioPanel.stories-0YRDXmYi.js";import{C as h}from"./Checkbox-C9D9OJuC.js";import{R as b}from"./RadioPanel-y452JCcO.js";import{H as x}from"./Help-D7qDif4h.js";import{R as C}from"./RadioButton-ZxBCfWEG.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-ecyLc3BO.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BKlsXEdz.js";import"./mergeRefs-D9X7gLQw.js";import"./BaseRadioButton.stories-ga2MtoVi.js";import"./BaseRadioButton-DVxDkvQg.js";import"./useId-B4kgALxq.js";import"./Label-Cktc1ykF.js";import"./SupportLabel-CRlKg2AJ.js";import"./SuccessIcon-Bys_aSKR.js";import"./Icon-CmlxtFEB.js";import"./WarningIcon-Dj_rySZ9.js";import"./InputPanel-Dqytv2nj.js";import"./Button-Ce6Z8z1o.js";import"./usePreviousValue-C0t-Cy-6.js";import"./Loader-D2JQwdui.js";import"./useDelayedRender-bUd0MxQw.js";import"./Title-DNoY56dL.js";import"./Card-DQ6ZDuZB.js";import"./Text-BwaSTAVm.js";import"./Tag-BuI1pdw3.js";import"./ExpandablePanel-CPwK5wc1.js";import"./useAnimatedHeightBetween-BD-J-b-L.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-u2nJpbbl.js";import"./Expander-DKxwLVV7.js";import"./ChevronUpIcon-CZn9Bvu-.js";import"./ListItem-rBzieT21.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
