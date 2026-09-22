import{r as n,j as i}from"./iframe-DD_u0Py-.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Cmbd683Q.js";import{CheckboxStory as c}from"./Checkbox.stories-DqT9D8Sn.js";import d from"./Help.stories-CMb50_jv.js";import k from"./RadioButton.stories-Dibd0DHi.js";import{RadioPanel as u}from"./RadioPanel.stories-BgHs8mjD.js";import{F as g}from"./FieldGroup-Elyz766e.js";import{C as h}from"./Checkbox-BGQ04pfb.js";import{R as b}from"./RadioPanel-CIjedksH.js";import{H as x}from"./Help-HH6w43Lm.js";import{R as C}from"./RadioButton-FUCCKu6N.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BRDtQUir.js";import"./clsx-B-dksMZM.js";import"./Flex-UZByLDm1.js";import"./SlotComponent-B0Eq5Vqw.js";import"./mergeRefs-Dod-v1do.js";import"./Button-Bq1lfUrd.js";import"./usePreviousValue-DuSXpge-.js";import"./Loader-DkOzbeOq.js";import"./useDelayedRender-BdQ6AsHS.js";import"./useId-CUebtZPo.js";import"./Label-DiAnwoZJ.js";import"./SupportLabel-BJZD2vuw.js";import"./SuccessIcon-BXIOOHPC.js";import"./Icon-MyO6zWle.js";import"./WarningIcon-D9NDlOXq.js";import"./BaseRadioButton.stories-DqD_ysyH.js";import"./BaseRadioButton-CfdlJq9z.js";import"./Title-B53Wo5M-.js";import"./Card-Tnxff3NA.js";import"./Text-bgauBkvB.js";import"./Tag-51lrAilf.js";import"./ExpandablePanel-B8CpkTki.js";import"./useAnimatedHeightBetween-B42hjyrJ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cj_C6CO1.js";import"./Expander-qIKT_o7a.js";import"./ChevronUpIcon-BvFiu7B1.js";import"./ListItem-BY8dU7eI.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
