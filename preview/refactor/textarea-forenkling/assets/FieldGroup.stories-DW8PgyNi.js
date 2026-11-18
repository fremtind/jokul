import{r as p,j as s}from"./iframe-B8ioCJaB.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DGxlTVqD.js";import{CheckboxStory as c}from"./Checkbox.stories-CHAnjX60.js";import k from"./Help.stories-DAQwWNPJ.js";import u from"./RadioButton.stories-CGOo06UG.js";import{RadioPanel as g}from"./RadioPanel.stories-BXqWrUsu.js";import{F as h}from"./FieldGroup-CrHV28hF.js";import{C as b}from"./Checkbox-BwzKJBO1.js";import{R as x}from"./RadioPanel-HN9gEf42.js";import{H as C}from"./Help-C_NA0mRl.js";import{R as G}from"./RadioButton-D84GwcaE.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-SHBvjMJg.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-C5JfygvD.js";import"./SlotComponent-DladVL-G.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-gOLW5UqU.js";import"./usePreviousValue-BgfAKWjA.js";import"./Loader-BjcMWTm8.js";import"./useDelayedRender-Dwgoaomy.js";import"./useId-WbFkuZeE.js";import"./Label-Cr7I-aXV.js";import"./SupportLabel-BHuie9NJ.js";import"./SuccessIcon-BHgMf80z.js";import"./Icon-DH9hur-d.js";import"./WarningIcon-CM0piK2Z.js";import"./BaseRadioButton.stories-DYct3A0R.js";import"./BaseRadioButton-D3aVRZvJ.js";import"./Title-BQq5bDnj.js";import"./Card-DFKHMcT1.js";import"./Text-DZym5hbB.js";import"./Tag-ChckAPtg.js";import"./ExpandablePanel-BhRou4qP.js";import"./useAnimatedHeightBetween-iCkXV5kx.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D80HaY--.js";import"./Expander-DbNYzxRL.js";import"./ChevronUpIcon-BAqp5Khn.js";import"./ListItem-D1q3Gtiy.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
