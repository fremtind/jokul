import{r as p,j as i}from"./iframe-C4VUIY3M.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cbikc4Bj.js";import l from"./Help.stories-B2Soa0ky.js";import c from"./RadioButton.stories-GNcGMdPa.js";import{F as d}from"./FieldGroup-B56FSZ4E.js";import{C as k,a as u}from"./CheckboxPanel.stories-CmLlplZy.js";import{RadioPanel as g}from"./RadioPanel.stories-yIJUp6I1.js";import{C as h}from"./Checkbox-B8m4vTjB.js";import{R as b}from"./RadioPanel-BFtrd4KO.js";import{H as x}from"./Help-ykzptyNi.js";import{R as C}from"./RadioButton-BFF9iaoN.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DBaTDk_L.js";import"./BaseRadioButton-CbL8QpDz.js";import"./clsx-B-dksMZM.js";import"./useId-77KiF-pW.js";import"./Label-BP2RbqSv.js";import"./SupportLabel-DKU3eDL6.js";import"./SuccessIcon-D7S14r_X.js";import"./Icon-DdJLE8LI.js";import"./WarningIcon-YsTIyEhF.js";import"./InputPanel-BGVj-yj8.js";import"./Flex-nMHADAZ8.js";import"./SlotComponent-Cl_hXayX.js";import"./mergeRefs-BrQBc_kG.js";import"./Button-Cs0CZDVm.js";import"./usePreviousValue-DaI9bDP3.js";import"./Loader-DVicvMze.js";import"./useDelayedRender-msrUyFQL.js";import"./Title-BV6xbQeN.js";import"./Card-CD8bwo55.js";import"./Text-EhQKczc1.js";import"./Tag-DziU8utp.js";import"./ExpandablePanel-RMSVRMlu.js";import"./useAnimatedHeightBetween-2seH1f3H.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DIQJUQxL.js";import"./Expander-l0pbvyuQ.js";import"./ChevronDownIcon-CXKnFp-2.js";import"./ChevronUpIcon-BFb522i9.js";import"./ListItem-DLxbBL9_.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
