import{r as p,j as i}from"./iframe-DgPY-3PA.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Ca0bxZLS.js";import l from"./Help.stories-BK6-sopq.js";import c from"./RadioButton.stories-aevTnW_6.js";import{F as d}from"./FieldGroup-9NLIz5Qx.js";import{C as k,a as u}from"./CheckboxPanel.stories-OHCvgdjX.js";import{RadioPanel as g}from"./RadioPanel.stories-CFTOc_uD.js";import{C as h}from"./Checkbox-HnWsWQOS.js";import{R as b}from"./RadioPanel-Hf_g6oSA.js";import{H as x}from"./Help-B69AnkUV.js";import{R as C}from"./RadioButton-Y-W_wypn.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CJMjvD7Y.js";import"./BaseRadioButton-CWuR3bj7.js";import"./clsx-B-dksMZM.js";import"./useId-VwJS_MMz.js";import"./Label-D8INFCHD.js";import"./SupportLabel-m9x77q0Z.js";import"./SuccessIcon-SHx9kLVE.js";import"./Icon-DGzGWfyk.js";import"./WarningIcon-DQnoDSWO.js";import"./InputPanel-BrSRGGuC.js";import"./Flex-MHjS-1Lb.js";import"./SlotComponent-5XtzTcdG.js";import"./mergeRefs-DTYlHnn_.js";import"./Button-Dm_oaNhu.js";import"./usePreviousValue-B9l9wH1y.js";import"./Loader-gY1dpUGE.js";import"./useDelayedRender-DuJn2qOh.js";import"./Title-nQ-q_0EH.js";import"./Card-B5WU7Slc.js";import"./Text-DG7DadgP.js";import"./Tag-iNcKYKYz.js";import"./ExpandablePanel-ao0Bk3BF.js";import"./useAnimatedHeightBetween-CRNG2cGz.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DEzfyXhQ.js";import"./Expander-BvfaBhdr.js";import"./ChevronDownIcon-CyDRAKuD.js";import"./ChevronUpIcon-D-YbCRiY.js";import"./ListItem-DAEiCqKV.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
