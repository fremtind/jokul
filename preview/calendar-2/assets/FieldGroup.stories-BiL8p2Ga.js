import{r as p,j as i}from"./iframe-DSmbHPAN.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B4Xi0eLe.js";import l from"./Help.stories-CwiXF75j.js";import c from"./RadioButton.stories-CzFrLl6v.js";import{F as d}from"./FieldGroup-BcCrUovy.js";import{C as k,a as u}from"./CheckboxPanel.stories-BqyKokjH.js";import{RadioPanel as g}from"./RadioPanel.stories-CBKwxksx.js";import{C as h}from"./Checkbox-D1SOvikP.js";import{R as b}from"./RadioPanel-Bbj_PdiB.js";import{H as x}from"./Help-C0EgqGQU.js";import{R as C}from"./RadioButton-0eaABasP.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DSSWQ7S6.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-hSV_d9WT.js";import"./mergeRefs-Bi2dp4Z7.js";import"./BaseRadioButton.stories-dz2CuJDT.js";import"./BaseRadioButton-Cpr_8XgD.js";import"./useId-BqnN0Zcx.js";import"./Label-jurifqgh.js";import"./SupportLabel-Cdbif_TY.js";import"./SuccessIcon-XM7XfDyy.js";import"./Icon-CXGEY-5-.js";import"./WarningIcon-E1iDheLx.js";import"./InputPanel-eTmBzYW9.js";import"./Button-Dqdjp27D.js";import"./usePreviousValue-DCUFEM92.js";import"./Loader-Dbs6ORoh.js";import"./useDelayedRender-Cr07E68K.js";import"./Title-Bwa8Mz_b.js";import"./Card-BhipzCtf.js";import"./Text-u9lwYaSA.js";import"./Tag-v6FzBNjr.js";import"./ExpandablePanel-Bq83T417.js";import"./useAnimatedHeightBetween-BgTvXNAe.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BVUf6Ynm.js";import"./Expander-Ddl0n2UE.js";import"./ChevronUpIcon-C2HVgK5d.js";import"./ListItem-a7HYvSJX.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
