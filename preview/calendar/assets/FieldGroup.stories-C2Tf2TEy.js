import{r as p,j as i}from"./iframe-DpjkOQ8O.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DSUPOBMw.js";import l from"./Help.stories-CpDz0LlW.js";import c from"./RadioButton.stories-D1_lgFmJ.js";import{F as d}from"./FieldGroup-C35LZeJO.js";import{C as k,a as u}from"./CheckboxPanel.stories-p6joS_Wu.js";import{RadioPanel as g}from"./RadioPanel.stories-CUs6dDnv.js";import{C as h}from"./Checkbox-YGb1_n9t.js";import{R as b}from"./RadioPanel-CYgzfF4v.js";import{H as x}from"./Help-DeBN6NGk.js";import{R as C}from"./RadioButton-DZUH3ohH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DTRRMGag.js";import"./Label-AbhwbM_A.js";import"./SupportLabel-DMvh_9pM.js";import"./SuccessIcon-Bq1f-G08.js";import"./Icon-DoYTsjUc.js";import"./WarningIcon-7DjkdTtF.js";/* empty css               *//* empty css               */import"./Flex-CIFxqWc4.js";import"./SlotComponent-WIccmPKj.js";import"./mergeRefs-rft622dS.js";import"./BaseRadioButton.stories-qBU5Dnix.js";import"./BaseRadioButton-BnEmyIYv.js";import"./InputPanel-Dgg-SBCN.js";import"./Button-D4bZJgPx.js";import"./usePreviousValue-Cr_iwZZg.js";import"./Loader-Dgr2NoCQ.js";import"./useDelayedRender-Cl0Dx5VG.js";import"./Title-DmJU0XF-.js";import"./Card-BvQy4nwy.js";import"./Text-Fwh8Ym0b.js";import"./Tag-Esq_2Afy.js";import"./ExpandablePanel-CprEl4pU.js";import"./useAnimatedHeightBetween-D500YXPt.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bz7ttYcA.js";import"./Expander-DWOeNFTq.js";import"./ChevronDownIcon-BmTBuoRS.js";import"./ChevronUpIcon-v2zGgV2S.js";import"./ListItem-CNQai1Vy.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
