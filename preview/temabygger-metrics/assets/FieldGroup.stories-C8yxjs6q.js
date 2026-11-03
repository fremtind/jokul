import{r as p,j as i}from"./iframe-CwMi-LWz.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-UM8Iegpp.js";import{CheckboxStory as c}from"./Checkbox.stories-ByDvSq-m.js";import k from"./Help.stories-Cfhw5cjH.js";import u from"./RadioButton.stories-C5Uqbglb.js";import{RadioPanel as g}from"./RadioPanel.stories-BJOJw1jB.js";import{F as h}from"./FieldGroup-BK7FAZMy.js";import{C as b}from"./Checkbox-BkFfrOE4.js";import{R as x}from"./RadioPanel-De2VMvpV.js";import{H as C}from"./Help-D6HRz8k3.js";import{R as G}from"./RadioButton-CILwWs1V.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-9ksaEN2_.js";import"./clsx-B-dksMZM.js";import"./Flex-DgC4nmpN.js";import"./SlotComponent-CxIPYH_Z.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Hwu3rwx4.js";import"./usePreviousValue-nl71D9aC.js";import"./Loader-BrJXCABa.js";import"./useDelayedRender-Da1oD5U7.js";import"./useId-baGuwUQf.js";import"./Label-KW6JEFw5.js";import"./SupportLabel-CEFx3_QF.js";import"./SuccessIcon-DAFx1k_d.js";import"./Icon-Cfb6jpTd.js";import"./WarningIcon-BM9lb_MD.js";import"./BaseRadioButton.stories-DzWd1yuh.js";import"./BaseRadioButton-B_KE8PnT.js";import"./Title-Bjl8xo79.js";import"./Card-CIvAD5B0.js";import"./Text-B6C0g4mw.js";import"./Tag-B01T0xyV.js";import"./ExpandablePanel-C7-TKiH3.js";import"./useAnimatedHeightBetween-DOEECNXj.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Nh5WgE-d.js";import"./Expander-C4QzeIHY.js";import"./ChevronUpIcon-mYcvxg7p.js";import"./ListItem-B1r3vqkJ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
