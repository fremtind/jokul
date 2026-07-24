import{r as p,j as i}from"./iframe-DJsDf6Xw.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-s3_WM6kw.js";import l from"./Help.stories-BKEufLA8.js";import c from"./RadioButton.stories-BBL02qlC.js";import{F as d}from"./FieldGroup-CBSfZSBo.js";import{C as k,a as u}from"./CheckboxPanel.stories-D43NNIn6.js";import{RadioPanel as g}from"./RadioPanel.stories-DfN6jYeO.js";import{C as h}from"./Checkbox-qsVUN5Ng.js";import{R as b}from"./RadioPanel-C7lEZwwM.js";import{H as x}from"./Help-DegZvWG2.js";import{R as C}from"./RadioButton-D81km0F-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bjx1lglR.js";import"./Label-DQhT3wiH.js";import"./SupportLabel-DDjCeNrh.js";import"./SuccessIcon-CwIMaXBK.js";import"./Icon-feTOB1bx.js";import"./WarningIcon-GiNYF8mV.js";/* empty css               *//* empty css               */import"./Flex-CEZ93GMw.js";import"./SlotComponent-DAi5HQ9p.js";import"./mergeRefs-CxGsQqwz.js";import"./BaseRadioButton.stories-DV5Jd6No.js";import"./BaseRadioButton-1PmCPKwn.js";import"./InputPanel-kToCMzKT.js";import"./Button-DrA5m4LC.js";import"./usePreviousValue-C01OkxUe.js";import"./Loader-CKCe4m_t.js";import"./useDelayedRender-DrJX0D0K.js";import"./Title-CNzPnp4l.js";import"./Card-BmvEZ9id.js";import"./Text-CMaExNKF.js";import"./Tag-Cm9i9dZf.js";import"./ExpandablePanel-D3OKSrGj.js";import"./useAnimatedHeightBetween-CPFeVGoA.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D0sNBekT.js";import"./Expander-DD2WxaN6.js";import"./ChevronUpIcon-BZ3Hy8KC.js";import"./ListItem-D_wVlC6z.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
