import{r as p,j as i}from"./iframe-L5DUEs6c.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CHhZWjcw.js";import{CheckboxStory as c}from"./Checkbox.stories-DVO5tcH5.js";import d from"./Help.stories-q8gBaN37.js";import k from"./RadioButton.stories-CiyJRH33.js";import{RadioPanel as u}from"./RadioPanel.stories-CUNX_W-U.js";import{F as g}from"./FieldGroup-p6krgzvf.js";import{C as h}from"./Checkbox-lB619Ws0.js";import{R as b}from"./RadioPanel-DtPsg0Fr.js";import{H as x}from"./Help-B1tqXgmd.js";import{R as C}from"./RadioButton-BvPsGWG4.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CnEuiVu1.js";import"./clsx-B-dksMZM.js";import"./Flex-DvopUMGI.js";import"./SlotComponent-tLpWjGwG.js";import"./mergeRefs-BeNahGFX.js";import"./Button-DmBuERhC.js";import"./usePreviousValue-CRrFHmRb.js";import"./Loader-BQCmT3Sw.js";import"./useDelayedRender-t0YITvup.js";import"./BaseRadioButton.stories-ChBNN3dc.js";import"./BaseRadioButton-Ch1rQSXy.js";import"./useId-Dbe6YveO.js";import"./Title-Dj6TD6cL.js";import"./Card-QpKL7UU-.js";import"./Text-BmctJ1Qa.js";import"./Tag-D7UVcIir.js";import"./ExpandablePanel-3woAPF-z.js";import"./useAnimatedHeightBetween-Kh5QORJa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CMImMcql.js";import"./Expander-CBj72q9l.js";import"./ChevronDownIcon-CTGO9pKi.js";import"./Icon-D9dRx7zu.js";import"./ChevronUpIcon-BjS-yOkY.js";import"./ListItem-Bznucdpl.js";import"./Label-CeXgHhWr.js";import"./SupportLabel-CNEDyj-L.js";import"./SuccessIcon-FAR9aXt1.js";import"./WarningIcon-D-lcf5rj.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
