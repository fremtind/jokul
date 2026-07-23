import{r as p,j as i}from"./iframe-1P0v6r39.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-By4QFUBG.js";import l from"./Help.stories-D9byarV0.js";import c from"./RadioButton.stories-CTpX0if2.js";import{F as d}from"./FieldGroup-D0QAl1i1.js";import{C as k,a as u}from"./CheckboxPanel.stories-apcEFQzC.js";import{RadioPanel as g}from"./RadioPanel.stories-Ctj-425Y.js";import{C as h}from"./Checkbox-DChdd1_U.js";import{R as b}from"./RadioPanel-DCX_XQgs.js";import{H as x}from"./Help-Dej19IK3.js";import{R as C}from"./RadioButton-DfRRC7tC.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-vBIa5ViZ.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C4sVb3oF.js";import"./mergeRefs-EaP4YK-6.js";import"./BaseRadioButton.stories-oLLsvRtf.js";import"./BaseRadioButton-BwobfD5N.js";import"./useId-D1hy5zeW.js";import"./Label-gFgBaCtP.js";import"./SupportLabel-BMeqVcYX.js";import"./SuccessIcon-C3e5AFLg.js";import"./Icon-D_uGLux1.js";import"./WarningIcon-uyCANl96.js";import"./InputPanel-BeOKOpD6.js";import"./Button-BsTTJoEe.js";import"./usePreviousValue-DHKIFQSW.js";import"./Loader-Dau7yegm.js";import"./useDelayedRender--OFbxPF4.js";import"./Title-C8NdJLzm.js";import"./Card-Csl2k1Hm.js";import"./Text-C5MmSy8m.js";import"./Tag-C9h8RgIm.js";import"./ExpandablePanel-CA1OxyOG.js";import"./useAnimatedHeightBetween-Cjisar3o.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DcYmI5dr.js";import"./Expander-D822faNB.js";import"./ChevronUpIcon-BWcxLntV.js";import"./ListItem-D_tBbGEh.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
