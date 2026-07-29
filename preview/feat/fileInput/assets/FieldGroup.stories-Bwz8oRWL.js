import{r as p,j as i}from"./iframe-B6x1XYmx.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-NhESbvZw.js";import l from"./Help.stories-DuNhDU0w.js";import c from"./RadioButton.stories-BOONdOlq.js";import{F as d}from"./FieldGroup-LOWdTBc1.js";import{C as k,a as u}from"./CheckboxPanel.stories-Ds80MA8K.js";import{RadioPanel as g}from"./RadioPanel.stories-CwxFrgf9.js";import{C as h}from"./Checkbox-sLRcusCV.js";import{R as b}from"./RadioPanel-QAQccVEv.js";import{H as x}from"./Help-B28dPYUW.js";import{R as C}from"./RadioButton-D8EX9a5l.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CRAVfXSQ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-fEI8cWwl.js";import"./mergeRefs-ypQMJXlL.js";import"./BaseRadioButton.stories-CAqudYsa.js";import"./BaseRadioButton-COsz1ZXT.js";import"./useId-D1gxQ_bV.js";import"./Label-CaAqp9cl.js";import"./SupportLabel-BF4RN0IW.js";import"./SuccessIcon-D7lf9DYS.js";import"./Icon-D4K1M1lv.js";import"./WarningIcon-C94l5-IQ.js";import"./InputPanel-Cs0DyjiZ.js";import"./Button-JTxCzsQW.js";import"./usePreviousValue-DPrPvbnX.js";import"./Loader-BegR2D8p.js";import"./useDelayedRender-BwT8R6l7.js";import"./Title-CnMfpeHs.js";import"./Card-BMro9sIu.js";import"./Text-gUkH2tf1.js";import"./Tag-BzsIRlrA.js";import"./ExpandablePanel-CSZvnALN.js";import"./useAnimatedHeightBetween-B3Npgl-A.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DJBOg0qe.js";import"./Expander-gb_CeDFp.js";import"./ChevronDownIcon-Cl5qQYOo.js";import"./ChevronUpIcon-mys01aiP.js";import"./ListItem-BWlAklOs.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
