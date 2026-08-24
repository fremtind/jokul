import{r as n,j as i}from"./iframe-QtBp4egp.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CsXpFlw_.js";import l from"./Help.stories-2awkLfd7.js";import c from"./RadioButton.stories-Bw_0JNNG.js";import{F as d}from"./FieldGroup-Dc_5STtq.js";import{C as k,a as u}from"./CheckboxPanel.stories-Cb2-aSiP.js";import{RadioPanel as g}from"./RadioPanel.stories-ojNpEMWx.js";import{C as h}from"./Checkbox-DUQXG0Kt.js";import{R as b}from"./RadioPanel-oXmcXE7u.js";import{H as x}from"./Help-C4i05UIw.js";import{R as C}from"./RadioButton-JhQfjcpo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dc_xERX8.js";import"./Label-48hlu1bR.js";import"./SupportLabel-DtQH7vY0.js";import"./SuccessIcon-BKunpZaE.js";import"./Icon-DJQmj-nB.js";import"./WarningIcon-K3CJmTRp.js";import"./BaseRadioButton.stories-DYXOA9ai.js";import"./BaseRadioButton-DxywBm7I.js";import"./InputPanel-DVcwHPCC.js";import"./Flex-BS-Hvl3j.js";import"./SlotComponent-D8hBxJlv.js";import"./mergeRefs-ciCz3-9q.js";import"./Button-HThwQfSQ.js";import"./usePreviousValue-BKHZpGds.js";import"./Loader-CcqSFiRF.js";import"./useDelayedRender-Vr_PMH5J.js";import"./Title-DxPU80s9.js";import"./Card-DfrTphrL.js";import"./Text-Bgzezs4W.js";import"./Tag-BsZwwfOS.js";import"./ExpandablePanel-CM8StYeE.js";import"./useAnimatedHeightBetween-KDcRw96X.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C6Iur4k4.js";import"./Expander-C0Py_xF-.js";import"./ChevronUpIcon-Cm5jznr5.js";import"./ListItem-eHmF6pq3.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
