import{r as p,j as i}from"./iframe-eV1AYNLw.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CyKAS3_S.js";import{CheckboxStory as c}from"./Checkbox.stories-DxHBhCCS.js";import k from"./Help.stories-CgdpqjV1.js";import u from"./RadioButton.stories-BkGjKNuN.js";import{RadioPanel as g}from"./RadioPanel.stories-sZ5qNqzl.js";import{F as h}from"./FieldGroup-B4QIo7aR.js";import{C as b}from"./Checkbox-BIYVmdfe.js";import{R as x}from"./RadioPanel-BfIHjYVN.js";import{H as C}from"./Help-JYwqMBKC.js";import{R as G}from"./RadioButton-CfOQePme.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BFgTypOm.js";import"./clsx-B-dksMZM.js";import"./Flex-Bvc5wx7w.js";import"./SlotComponent-BWWS27Cm.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-WcPxdhoq.js";import"./usePreviousValue-D8pxqFAz.js";import"./Loader-DpOinsys.js";import"./useDelayedRender-PitrJJZN.js";import"./useId-Bx9Er8LW.js";import"./Label-CN4Ha-FT.js";import"./SupportLabel-vs5iy7QP.js";import"./SuccessIcon-ClZKIpcA.js";import"./Icon-CD2qqvSG.js";import"./WarningIcon-Bw9tpiu-.js";import"./BaseRadioButton.stories-CFw7_Sma.js";import"./BaseRadioButton-BU2-i2eF.js";import"./Title-C5BxrWKj.js";import"./Card-DwLxBQzx.js";import"./Text-24V8qzdB.js";import"./Tag-C-8_TsML.js";import"./ExpandablePanel-DnJy60Ww.js";import"./useAnimatedHeightBetween-Ce9gSqmF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-7VOCVjdS.js";import"./Expander-BfqoNW48.js";import"./ChevronUpIcon-BVjo5K5X.js";import"./ListItem-BO7RgHox.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
