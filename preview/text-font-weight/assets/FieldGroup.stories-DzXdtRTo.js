import{r as p,j as i}from"./iframe-AR3e7Cm7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-RCHyd426.js";import l from"./Help.stories-h5cZ_2g9.js";import c from"./RadioButton.stories-D12AWhgQ.js";import{F as d}from"./FieldGroup-DtJl2qtp.js";import{C as k,a as u}from"./CheckboxPanel.stories-DIqMy95N.js";import{RadioPanel as g}from"./RadioPanel.stories-Cs6D52eF.js";import{C as h}from"./Checkbox-OkOF7HHf.js";import{R as b}from"./RadioPanel-OZKySLW_.js";import{H as x}from"./Help-CRRynsB2.js";import{R as C}from"./RadioButton-BWYzi8gJ.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CA91xXU_.js";import"./BaseRadioButton-ByGJbFyI.js";import"./clsx-B-dksMZM.js";import"./useId-B64NpeNG.js";import"./Label-BqXlFKMa.js";import"./SupportLabel-DD1RWk7H.js";import"./SuccessIcon-CR83evoX.js";import"./Icon-D3oY2bLi.js";import"./WarningIcon-BWvZwJf1.js";import"./InputPanel-CRt9S5TL.js";import"./Flex-DNFWw0gz.js";import"./SlotComponent-D1BRsXw1.js";import"./mergeRefs-BirbzMde.js";import"./Button-C1MAY8ji.js";import"./usePreviousValue-Bp9H2G2A.js";import"./Loader-BemqYOas.js";import"./useDelayedRender-BNRO0tp1.js";import"./Title-U9gBAa6w.js";import"./Card-BJji2Dre.js";import"./Text-fpsW4znk.js";import"./Tag-BWfSnYd9.js";import"./ExpandablePanel-DFBeEWyV.js";import"./useAnimatedHeightBetween-CE-yBC7W.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DEbEOR9i.js";import"./Expander-BGcnsY_n.js";import"./ChevronDownIcon-BhmPbBPl.js";import"./ChevronUpIcon-PKWEaPEl.js";import"./ListItem-Bp1TK5Uf.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
