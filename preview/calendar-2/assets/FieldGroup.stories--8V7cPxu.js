import{r as p,j as i}from"./iframe-Bs2ZEwwT.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B_rMH7G1.js";import l from"./Help.stories-2xS90iW9.js";import c from"./RadioButton.stories-DH8Ke_KO.js";import{F as d}from"./FieldGroup-CKKMdmhd.js";import{C as k,a as u}from"./CheckboxPanel.stories-Dr-5u_QM.js";import{RadioPanel as g}from"./RadioPanel.stories-C6VZ2L60.js";import{C as h}from"./Checkbox-BTgjjVNW.js";import{R as b}from"./RadioPanel-DrsMg9yq.js";import{H as x}from"./Help-I3frJ9xT.js";import{R as C}from"./RadioButton-A2EjETb4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CVc_TE9Z.js";import"./Label-BaAE2F6s.js";import"./SupportLabel-DD1h3dlP.js";import"./SuccessIcon-Gd7hNHf-.js";import"./Icon-C7s4gIxg.js";import"./WarningIcon-D--lXmJJ.js";/* empty css               *//* empty css               */import"./Flex-BRpAonZ5.js";import"./SlotComponent-C-RR4lsL.js";import"./mergeRefs-XO6I4NKo.js";import"./BaseRadioButton.stories-GsdK5aC9.js";import"./BaseRadioButton-D3gmr9Iq.js";import"./InputPanel-mTZsCaz9.js";import"./Button-BmmzBNH9.js";import"./usePreviousValue-l7ugWeuV.js";import"./Loader-D0qJ6omB.js";import"./useDelayedRender-D_khDUEd.js";import"./Title-5IAXNFIB.js";import"./Card-D7KmuBBz.js";import"./Text-Du1HvY2t.js";import"./Tag-B7xKsxEA.js";import"./ExpandablePanel-BwO37Cer.js";import"./useAnimatedHeightBetween-CttYDseL.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BVs6SHYE.js";import"./Expander-CnGDvKe0.js";import"./ChevronUpIcon-B67NyexF.js";import"./ListItem-yZXxy-IK.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
