import{r as n,j as i}from"./iframe-CUMMJ2sT.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-5CBKZAgH.js";import{CheckboxStory as c}from"./Checkbox.stories-C64oRTD3.js";import d from"./Help.stories-t-6U-T1V.js";import k from"./RadioButton.stories-BKvDvwFv.js";import{RadioPanel as u}from"./RadioPanel.stories-Cn2DhMgI.js";import{F as g}from"./FieldGroup-szQio1Qb.js";import{C as h}from"./Checkbox-MVmDT8aS.js";import{R as b}from"./RadioPanel-CAVDsBHZ.js";import{H as x}from"./Help-CLmp-qKF.js";import{R as C}from"./RadioButton-C2ZHl2ME.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cc-g27fK.js";import"./clsx-B-dksMZM.js";import"./Flex-DOALCTQK.js";import"./SlotComponent-BWnh53aX.js";import"./mergeRefs-D4Ray8tD.js";import"./Button-Dd1l_9H2.js";import"./usePreviousValue-DnMZyJSs.js";import"./Loader-9glpqhG3.js";import"./useDelayedRender-DAV60TmP.js";import"./useId-C8eTQwT_.js";import"./Label-BkPjCNKn.js";import"./SupportLabel-BUHpCuGE.js";import"./SuccessIcon-DMY7o2BI.js";import"./Icon-BfwJbBsh.js";import"./WarningIcon-TlYw3vdU.js";import"./BaseRadioButton.stories-WJmwMVNW.js";import"./BaseRadioButton-Bow7DKRD.js";import"./Title-Cyye3LkD.js";import"./Card-BOn8EjXH.js";import"./Text-B1Nk9I-W.js";import"./Tag-CZdeDLGj.js";import"./ExpandablePanel-DsoB13Nf.js";import"./useAnimatedHeightBetween-ChQBg8wu.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-XrivaXfS.js";import"./Expander-iPz7xtib.js";import"./ChevronUpIcon-CmPDF2P4.js";import"./ListItem-CZ0ztYyp.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
