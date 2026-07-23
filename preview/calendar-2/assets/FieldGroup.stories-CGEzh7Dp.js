import{r as p,j as i}from"./iframe-B0Kr074j.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BQGEoEQu.js";import l from"./Help.stories-DcA8UvhA.js";import c from"./RadioButton.stories-H609Xh1J.js";import{F as d}from"./FieldGroup-Bed-70lg.js";import{C as k,a as u}from"./CheckboxPanel.stories-DtmL1rNr.js";import{RadioPanel as g}from"./RadioPanel.stories-P13ilpGZ.js";import{C as h}from"./Checkbox-DiA-fod8.js";import{R as b}from"./RadioPanel-Cg7denTP.js";import{H as x}from"./Help-Dmj3aKgh.js";import{R as C}from"./RadioButton-BrL2_pju.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BCAOrAo2.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-By1-k6ne.js";import"./mergeRefs-AGUMaxBe.js";import"./BaseRadioButton.stories-21s8uII-.js";import"./BaseRadioButton-Pm3rVs1M.js";import"./useId-EVF01UfS.js";import"./Label-BgjVgtFb.js";import"./SupportLabel-oWOVe8Gf.js";import"./SuccessIcon-Bz-gAu-M.js";import"./Icon-BERwx20O.js";import"./WarningIcon-kPtZuz2C.js";import"./InputPanel-C05jVdvi.js";import"./Button-CwzLL4pp.js";import"./usePreviousValue-Cxpws-cS.js";import"./Loader-BQ6Dn9I3.js";import"./useDelayedRender-cZCxUvLc.js";import"./Title-CHB21xBI.js";import"./Card-C_q2sBQ2.js";import"./Text-xyPIEdET.js";import"./Tag-Dntg4ce-.js";import"./ExpandablePanel-DFMPcNwr.js";import"./useAnimatedHeightBetween-CptEvG1s.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BwTf_G1R.js";import"./Expander-DTdifmjb.js";import"./ChevronUpIcon-DjtPRuPr.js";import"./ListItem-D2Xa9rAS.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
