import{r as p,j as i}from"./iframe-C6c0I4sO.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CFk_v9Sg.js";import l from"./Help.stories-WUTq924K.js";import c from"./RadioButton.stories-Bs0gSNhV.js";import{F as d}from"./FieldGroup-B7jws5X6.js";import{C as k,a as u}from"./CheckboxPanel.stories-BuSJjEfv.js";import{RadioPanel as g}from"./RadioPanel.stories-BJ9MzqUG.js";import{C as h}from"./Checkbox-_EN7JVDC.js";import{R as b}from"./RadioPanel-GqN5TifM.js";import{H as x}from"./Help-DO9jqnFY.js";import{R as C}from"./RadioButton-sIFVW4_a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CRVymwtD.js";import"./Label-CuXi5aop.js";import"./SupportLabel-DoPr4dLE.js";import"./SuccessIcon-CX0rj3xA.js";import"./Icon-DhZ_2Gun.js";import"./WarningIcon-QdUhx_bs.js";/* empty css               *//* empty css               */import"./Flex-Bca8qIcx.js";import"./SlotComponent-l5s7sPI4.js";import"./mergeRefs-B_jEu1Ue.js";import"./BaseRadioButton.stories-D2IPXmPn.js";import"./BaseRadioButton-B4m1v2rX.js";import"./InputPanel-B1xm1LIu.js";import"./Button-xRW_Iq4e.js";import"./usePreviousValue-ChSKcGrh.js";import"./Loader-BiNyratp.js";import"./useDelayedRender-DbJWureZ.js";import"./Title-CvNa2tBe.js";import"./Card-B7FKy-Q5.js";import"./Text-fRBVez0p.js";import"./Tag-BhHBTPOw.js";import"./ExpandablePanel-DLW3hPrP.js";import"./useAnimatedHeightBetween-BzfNzQUa.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BSkUnxit.js";import"./Expander-BfQrSHg3.js";import"./ChevronDownIcon-BzXdlu66.js";import"./ChevronUpIcon-tindcznc.js";import"./ListItem-DGUaeIe5.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
