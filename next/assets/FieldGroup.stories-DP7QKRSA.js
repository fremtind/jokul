import{r as p,j as i}from"./iframe-U_bfD-vz.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Dk-fef2e.js";import{CheckboxStory as c}from"./Checkbox.stories-B_3hgCjA.js";import k from"./Help.stories-D-PGoe2U.js";import u from"./RadioButton.stories-DKjzs49y.js";import{RadioPanel as g}from"./RadioPanel.stories-CyZ1rC3I.js";import{F as h}from"./FieldGroup-BgAYO-Ac.js";import{C as b}from"./Checkbox-DYNQQ19v.js";import{R as x}from"./RadioPanel-BxQVeRiw.js";import{H as C}from"./Help-CvYl7RIU.js";import{R as G}from"./RadioButton-BwFVaeH_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-vSnQc43y.js";import"./clsx-B-dksMZM.js";import"./Flex-x-LWPJrw.js";import"./SlotComponent-CRPUYxYB.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CoDKX3Lz.js";import"./usePreviousValue-DxkAZtoL.js";import"./Loader-1kSfjfT3.js";import"./useDelayedRender-BdFI4hCa.js";import"./useId-BHvPmunK.js";import"./Label-BxXjVMqy.js";import"./SupportLabel-CCcWmwCn.js";import"./SuccessIcon-Dtk71qB5.js";import"./Icon-bW-47p_G.js";import"./WarningIcon-DtjcIgfp.js";import"./BaseRadioButton.stories-Pt8nw8fv.js";import"./BaseRadioButton-CGIViTaM.js";import"./Title-JSAJ3k2x.js";import"./Card-CE7dYs9n.js";import"./Text-CV3hVylK.js";import"./Tag-BFgqVtW-.js";import"./ExpandablePanel-BNGxctK2.js";import"./useAnimatedHeightBetween-DUm5H9bZ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-rp1Ucb-2.js";import"./Expander-CnvwqoFI.js";import"./ChevronUpIcon-tfdC_AHq.js";import"./ListItem-L01rU7b9.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
