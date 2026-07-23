import{r as p,j as i}from"./iframe-BLfSbMip.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C_xDtsJo.js";import l from"./Help.stories-DF--UDSz.js";import c from"./RadioButton.stories-tm7wIVFR.js";import{F as d}from"./FieldGroup-B5EXEUEg.js";import{C as k,a as u}from"./CheckboxPanel.stories-xNz-8fy1.js";import{RadioPanel as g}from"./RadioPanel.stories-STD7cjSD.js";import{C as h}from"./Checkbox-Dc8Juuoh.js";import{R as b}from"./RadioPanel-CtIZxuHR.js";import{H as x}from"./Help-BiyZpZSP.js";import{R as C}from"./RadioButton-BIug2ECd.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BfX0C04c.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Bw2ZBOOb.js";import"./mergeRefs-BkbtBOxs.js";import"./BaseRadioButton.stories-HqLZdvod.js";import"./BaseRadioButton-Dml1vA1P.js";import"./useId-CUhDxd68.js";import"./Label-htxqXN36.js";import"./SupportLabel-C5Vpvx_O.js";import"./SuccessIcon-CbIOa2po.js";import"./Icon-B1Vvpv6j.js";import"./WarningIcon-eUf4iAe5.js";import"./InputPanel-BWeoCJXp.js";import"./Button-WheCa2XA.js";import"./usePreviousValue-DDDQYDyI.js";import"./Loader-DaIlVznZ.js";import"./useDelayedRender-5ykCYusz.js";import"./Title-C3Pq--X-.js";import"./Card-DIyciptq.js";import"./Text-DXvCmFah.js";import"./Tag-C2ZjGnHV.js";import"./ExpandablePanel-Bf4Wk9jn.js";import"./useAnimatedHeightBetween-J7fGn_Zp.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DWPxxyYK.js";import"./Expander-DgriJhvB.js";import"./ChevronUpIcon-Ck2DXwVr.js";import"./ListItem-CyH8vl6b.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
