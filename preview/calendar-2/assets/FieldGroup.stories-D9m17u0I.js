import{r as p,j as i}from"./iframe-DarWBN5d.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DNnQfH-O.js";import l from"./Help.stories-DD-b2OfM.js";import c from"./RadioButton.stories-BI3UMK2J.js";import{F as d}from"./FieldGroup-Bk7i1MD7.js";import{C as k,a as u}from"./CheckboxPanel.stories-CYt8N3_V.js";import{RadioPanel as g}from"./RadioPanel.stories-Bh7j-eOH.js";import{C as h}from"./Checkbox-rAT4A8Wy.js";import{R as b}from"./RadioPanel-CvhLwe51.js";import{H as x}from"./Help-B5aTKVPa.js";import{R as C}from"./RadioButton-BJJHYJJW.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BoCcgND2.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DvF9RFlP.js";import"./mergeRefs-Be0jPi6E.js";import"./BaseRadioButton.stories-Wyoa8-DS.js";import"./BaseRadioButton-0iGO3OsA.js";import"./useId-BpJf4wXY.js";import"./Label-DVtXELzE.js";import"./SupportLabel-DIfi0VSP.js";import"./SuccessIcon-tCuuDXkp.js";import"./Icon-BjQr04ax.js";import"./WarningIcon-Df_pdorf.js";import"./InputPanel-DUDCIyTu.js";import"./Button-BxnfNHUp.js";import"./usePreviousValue-Df2vQ4ME.js";import"./Loader-DPS1KJ24.js";import"./useDelayedRender-DfwQAglt.js";import"./Title-CQC_VHWD.js";import"./Card-DFg2YoKT.js";import"./Text-BeCkajf2.js";import"./Tag-BSZS9Yyf.js";import"./ExpandablePanel-DvfQ68xl.js";import"./useAnimatedHeightBetween-BZxFo3_1.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bs_qINU8.js";import"./Expander-Cunmqc6U.js";import"./ChevronUpIcon-D-9isks6.js";import"./ListItem-CzoMeXqQ.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
