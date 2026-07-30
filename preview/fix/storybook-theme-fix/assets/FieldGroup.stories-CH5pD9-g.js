import{r as p,j as i}from"./iframe-D8Mx1idX.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C74lOAzB.js";import l from"./Help.stories-U_w6dxT7.js";import c from"./RadioButton.stories-ran76xt-.js";import{F as d}from"./FieldGroup-CyE2UGv4.js";import{C as k,a as u}from"./CheckboxPanel.stories-B2qfNtwA.js";import{RadioPanel as g}from"./RadioPanel.stories-XKhNuyKb.js";import{C as h}from"./Checkbox-CM3ybPAv.js";import{R as b}from"./RadioPanel-BB4v6Ka6.js";import{H as x}from"./Help-Bna4rRjl.js";import{R as C}from"./RadioButton-j1QnM8Mi.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-Cgman3Be.js";import"./BaseRadioButton-OHmJuSrd.js";import"./clsx-B-dksMZM.js";import"./useId-CnO4CdBG.js";import"./Label-Df-c3Sb5.js";import"./SupportLabel-CbsFLFo0.js";import"./SuccessIcon-BTMB6EUA.js";import"./Icon-CqGzkYJ8.js";import"./WarningIcon-Bm6i4RoG.js";import"./InputPanel-A1UGCS7S.js";import"./Flex-CSWdeZTH.js";import"./SlotComponent-DfJH0opL.js";import"./mergeRefs-D1MPdAvZ.js";import"./Button-CqF_wk2a.js";import"./usePreviousValue-BGHjpM9P.js";import"./Loader-BtJEn-_r.js";import"./useDelayedRender-Wi0bWq5D.js";import"./Title-Bj53l3Xq.js";import"./Card-CDkwvEia.js";import"./Text--VP_KaQX.js";import"./Tag-DL5K64G6.js";import"./ExpandablePanel-DlcSdYI1.js";import"./useAnimatedHeightBetween-S5MkNrpu.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-UebkEdBi.js";import"./Expander-kIv59ApS.js";import"./ChevronDownIcon-Dvd8XYVv.js";import"./ChevronUpIcon-C_r1XCZh.js";import"./ListItem-VdKxlQvU.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
