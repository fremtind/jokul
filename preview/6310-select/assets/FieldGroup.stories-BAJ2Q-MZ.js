import{r as p,j as i}from"./iframe-CJhAm7ux.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Dq2GDQVo.js";import l from"./Help.stories-CgUGMuTE.js";import c from"./RadioButton.stories-CtAuAO8v.js";import{F as d}from"./FieldGroup-B-Iszmpj.js";import{C as k,a as u}from"./CheckboxPanel.stories-BqMAndOE.js";import{RadioPanel as g}from"./RadioPanel.stories-BcksOdNd.js";import{C as h}from"./Checkbox-BWhafq2V.js";import{R as b}from"./RadioPanel-kJM67qf2.js";import{H as x}from"./Help-BUyqerzQ.js";import{R as C}from"./RadioButton-DlSK25as.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Ct41hrcc.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DhhUQp0s.js";import"./mergeRefs-CILGslL8.js";import"./BaseRadioButton.stories-GeLK557z.js";import"./BaseRadioButton-vHiLSmJk.js";import"./useId-C_uwXuEQ.js";import"./Label-BoiptumS.js";import"./SupportLabel-SQx4v4Qw.js";import"./SuccessIcon-BtvuemZ7.js";import"./Icon-DQ-Lbc87.js";import"./WarningIcon-BcWC5qZo.js";import"./InputPanel-DWsejlxE.js";import"./Button-BNAqLX0E.js";import"./usePreviousValue-B0vP2QCt.js";import"./Loader-BRjBHYS4.js";import"./useDelayedRender-BcEg2awG.js";import"./Title-D-HJypb3.js";import"./Card-CgIHV1vG.js";import"./Text-C9lDA6V8.js";import"./Tag-C2pPWamy.js";import"./ExpandablePanel-_3esOeNt.js";import"./useAnimatedHeightBetween-BgIsqZ5l.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CrqMZokU.js";import"./Expander-CER09krM.js";import"./ChevronDownIcon-D37BFGZ5.js";import"./ChevronUpIcon-QI0xn8Rz.js";import"./ListItem-BqKzb51M.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
