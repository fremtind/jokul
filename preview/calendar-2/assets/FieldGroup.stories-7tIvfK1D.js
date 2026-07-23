import{r as p,j as i}from"./iframe-CoW--EkS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Bk-tGdmf.js";import l from"./Help.stories-C06qm9La.js";import c from"./RadioButton.stories-B7YlHqF2.js";import{F as d}from"./FieldGroup-ImESbl6T.js";import{C as k,a as u}from"./CheckboxPanel.stories-DVHnlqrx.js";import{RadioPanel as g}from"./RadioPanel.stories-DpbfTAhs.js";import{C as h}from"./Checkbox-CsQgCr16.js";import{R as b}from"./RadioPanel-CbJRzbfE.js";import{H as x}from"./Help-EOH0MZ6Q.js";import{R as C}from"./RadioButton-B0ZKm25i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DzyH_aNV.js";import"./Label-DrfxShLH.js";import"./SupportLabel-CW-yiuaL.js";import"./SuccessIcon-BI8pqagt.js";import"./Icon-kbo-3oi0.js";import"./WarningIcon-B6wGOzoV.js";/* empty css               *//* empty css               */import"./Flex-Dm_53I22.js";import"./SlotComponent-_ZN0yv-3.js";import"./mergeRefs-CaHfFmdf.js";import"./BaseRadioButton.stories-CmgKjxci.js";import"./BaseRadioButton-DTXB3d-d.js";import"./InputPanel-JsM-VsBd.js";import"./Button-B9uJfvKP.js";import"./usePreviousValue-DYEnE7Ib.js";import"./Loader-BwEgdT3o.js";import"./useDelayedRender-CQbZp11g.js";import"./Title-CX8G6IoB.js";import"./Card-DZ3ZirID.js";import"./Text-Ct9EUA-V.js";import"./Tag-4zkt-AIY.js";import"./ExpandablePanel-BMbGiWZ6.js";import"./useAnimatedHeightBetween-XckSMx3l.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-8PiV1F9X.js";import"./Expander-Btd2T-IQ.js";import"./ChevronUpIcon-r06_atfd.js";import"./ListItem-CY0Gxsxv.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
