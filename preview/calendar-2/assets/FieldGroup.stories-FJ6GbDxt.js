import{r as n,j as i}from"./iframe-oCbqk8A8.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DQ42STnk.js";import l from"./Help.stories-DuCPFV9Z.js";import c from"./RadioButton.stories-yiTBNGWS.js";import{F as d}from"./FieldGroup-CHnL49ZQ.js";import{C as k,a as u}from"./CheckboxPanel.stories-DgaXGfEd.js";import{RadioPanel as g}from"./RadioPanel.stories-CxGCexh2.js";import{C as h}from"./Checkbox-DlttssBm.js";import{R as b}from"./RadioPanel-CA0zDFy9.js";import{H as x}from"./Help-WXV2xZwt.js";import{R as C}from"./RadioButton-DDW2hbm8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BqfSnGHp.js";import"./Label-BjktKBET.js";import"./SupportLabel-BH6i4A1e.js";import"./SuccessIcon-DCucRW9o.js";import"./Icon-Bu38MtPI.js";import"./WarningIcon-L8UHmrK5.js";import"./BaseRadioButton.stories-ZyB8PXGL.js";import"./BaseRadioButton-Bn7ODCbO.js";import"./InputPanel-B4m2Rk_1.js";import"./Flex-DFs2YWwC.js";import"./SlotComponent-B7JVnzon.js";import"./mergeRefs-IksFTnd2.js";import"./Button-B3cTm-am.js";import"./usePreviousValue-BZaNz6hP.js";import"./Loader-CR5MwOef.js";import"./useDelayedRender-DRr2TXUD.js";import"./Title-BPGccfbU.js";import"./Card-Dcip0Mnt.js";import"./Text-DJRTSIIc.js";import"./Tag-Cn1MJNtu.js";import"./ExpandablePanel-B2Nrxzwo.js";import"./useAnimatedHeightBetween-C0zLCoO1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B3ncyDE5.js";import"./Expander-Bl87jBl1.js";import"./ChevronUpIcon-CE9kuJWB.js";import"./ListItem-Csyjla4X.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
