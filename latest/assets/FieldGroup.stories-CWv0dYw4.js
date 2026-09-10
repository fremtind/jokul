import{r as p,j as i}from"./iframe-C7_rDRyt.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-kP8i0Pzd.js";import{CheckboxStory as c}from"./Checkbox.stories-DVFUpDel.js";import d from"./Help.stories-jW9-GFgE.js";import k from"./RadioButton.stories-N6bq_Goj.js";import{RadioPanel as u}from"./RadioPanel.stories-DytpGEwJ.js";import{F as g}from"./FieldGroup-Cn_jfW1e.js";import{C as h}from"./Checkbox-Dkrr41jf.js";import{R as b}from"./RadioPanel-Cqd2TL_U.js";import{H as x}from"./Help-CEszsxaN.js";import{R as C}from"./RadioButton-C_X6mMbf.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CrbY3J7h.js";import"./clsx-B-dksMZM.js";import"./Flex-CZ5l-lBx.js";import"./SlotComponent-8JCkmNqX.js";import"./mergeRefs-BIGI6HP-.js";import"./Button-BAvub3Mw.js";import"./usePreviousValue-BC1zgU4k.js";import"./Loader-e3tp9O1H.js";import"./useDelayedRender-D5kXQMJp.js";import"./BaseRadioButton.stories-CLJn0xOf.js";import"./BaseRadioButton-DJ_Yh17h.js";import"./useId-Du8IB49y.js";import"./Title-CFxJVyLe.js";import"./Card-C5Mf3JC3.js";import"./Text-fdpw86uV.js";import"./Tag-JYqthTPJ.js";import"./ExpandablePanel-Dspbum-A.js";import"./useAnimatedHeightBetween-BkdGtxMV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CB5gnEsn.js";import"./Expander-DQ1eGS0c.js";import"./ChevronDownIcon-DgbbEaOG.js";import"./Icon-CR5RoihS.js";import"./ChevronUpIcon-D5XUW-4h.js";import"./ListItem-BThzYafU.js";import"./Label-Cwy4_LJf.js";import"./SupportLabel-BHmf9cHu.js";import"./SuccessIcon-Ch7sFzki.js";import"./WarningIcon-CaCV-Cod.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
