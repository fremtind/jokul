import{r as p,j as i}from"./iframe-BdokCDMF.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-byjchzjL.js";import l from"./Help.stories-D1RZxWCT.js";import c from"./RadioButton.stories-DMFcVlk1.js";import{F as d}from"./FieldGroup-5pY28qDU.js";import{C as k,a as u}from"./CheckboxPanel.stories-BXow5tW4.js";import{RadioPanel as g}from"./RadioPanel.stories-CrSLdz8a.js";import{C as h}from"./Checkbox-yNH_8Ize.js";import{R as b}from"./RadioPanel-Dx7f3Oc_.js";import{H as x}from"./Help-Dmc054y-.js";import{R as C}from"./RadioButton-CSohgKCk.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-Ca7uWmAh.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-Zz-LTJgd.js";import"./mergeRefs-Du_rksPi.js";import"./BaseRadioButton.stories-Djprn9om.js";import"./BaseRadioButton-DBVk4CTd.js";import"./useId-CGGqZOFt.js";import"./Label-BWdwrBV5.js";import"./SupportLabel-DA-vWqP-.js";import"./SuccessIcon-G4vdVQ4r.js";import"./Icon-BgVLMwFg.js";import"./WarningIcon-BDpEpCdw.js";import"./InputPanel-C9OrN_Er.js";import"./Button-CkZ9NgHG.js";import"./usePreviousValue-BowPktbc.js";import"./Loader-DAYPexpU.js";import"./useDelayedRender-B1TZ5nF7.js";import"./Title-Vu2O3VK-.js";import"./Card-do0p5b01.js";import"./Text-PeZO3S2C.js";import"./Tag-D1jwtwHJ.js";import"./ExpandablePanel-BSAY79cy.js";import"./useAnimatedHeightBetween-D-tmnsJh.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BP6tXa68.js";import"./Expander-B3wlMZe0.js";import"./ChevronDownIcon-BY8yQzOr.js";import"./ChevronUpIcon-SE8FGEKK.js";import"./ListItem-DyfWRT2n.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
