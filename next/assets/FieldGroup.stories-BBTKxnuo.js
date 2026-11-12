import{r as p,j as s}from"./iframe-n17IaoCU.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-QqSfsuu8.js";import{CheckboxStory as c}from"./Checkbox.stories-CjVkWQHK.js";import k from"./Help.stories-DuQf24-e.js";import u from"./RadioButton.stories-CErxsUiK.js";import{RadioPanel as g}from"./RadioPanel.stories-DCdsSBVj.js";import{F as h}from"./FieldGroup-BJVPm8zA.js";import{C as b}from"./Checkbox-DdSwvtcR.js";import{R as x}from"./RadioPanel-BoHT7O9_.js";import{H as C}from"./Help-Ci72d71Y.js";import{R as G}from"./RadioButton-BBrHZMw-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BdHXHSJt.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-Bm2OlnaC.js";import"./SlotComponent-D1baZmBh.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BP2pYIrN.js";import"./usePreviousValue-DXbTCoi4.js";import"./Loader-hHjL0e8P.js";import"./useDelayedRender-DHl_FwNI.js";import"./useId-DVWCK3cg.js";import"./Label-DEHGcrtp.js";import"./SupportLabel-C1PpdQYY.js";import"./SuccessIcon-DeCASDwY.js";import"./Icon-C-5rp8IK.js";import"./WarningIcon-BYYLYlEC.js";import"./BaseRadioButton.stories-DVPBba7p.js";import"./BaseRadioButton-DOFWBEY1.js";import"./Title-FG8dAE3H.js";import"./Card-WJFerEgf.js";import"./Text-BrU3VSh3.js";import"./Tag-C4NqcyA8.js";import"./ExpandablePanel-DCbP4xA_.js";import"./useAnimatedHeightBetween-B0IKhWIu.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DEUQmi5c.js";import"./Expander-B9qt0EvP.js";import"./ChevronUpIcon-5B03dgU0.js";import"./ListItem-CShCxDXV.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
