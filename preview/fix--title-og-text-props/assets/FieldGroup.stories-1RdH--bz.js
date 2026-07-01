import{r as p,j as i}from"./iframe-DWTb4ktk.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-lG-NpMmh.js";import l from"./Help.stories-BCla7Ifv.js";import c from"./RadioButton.stories-aYGL8q8-.js";import{F as d}from"./FieldGroup-kHMPCiXK.js";import{C as k,a as u}from"./CheckboxPanel.stories-COm5wXD2.js";import{RadioPanel as g}from"./RadioPanel.stories-D80-UU0f.js";import{C as h}from"./Checkbox-BqOaFkNu.js";import{R as b}from"./RadioPanel-OpFTxhce.js";import{H as x}from"./Help-DwE0IBbG.js";import{R as C}from"./RadioButton-DgiiMeco.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-eECsOKZI.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B89YaeQZ.js";import"./mergeRefs-Bpmintzt.js";import"./BaseRadioButton.stories-BqAtLX6D.js";import"./BaseRadioButton-DjNEJDaL.js";import"./useId-CxIMAt84.js";import"./Label-BjfBwpPJ.js";import"./SupportLabel-DFaKB2pJ.js";import"./SuccessIcon-BtV1t-j1.js";import"./Icon-CZwIt2wW.js";import"./WarningIcon-DBcz8G7O.js";import"./InputPanel-BK_P3Wrq.js";import"./Button-QdXUkQAa.js";import"./usePreviousValue-sRIuXVUb.js";import"./Loader-D6-21hqa.js";import"./useDelayedRender-De6hHjJe.js";import"./Title-CHqYHgdH.js";import"./Card-Cg5kVZeU.js";import"./Text-DSTmBfzp.js";import"./Tag-B5-zaoxj.js";import"./ExpandablePanel-V7tWgcZU.js";import"./useAnimatedHeightBetween-CZTM_Ab7.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CEdyipn0.js";import"./Expander-CiEoeYb8.js";import"./ChevronDownIcon-OfCvw2JW.js";import"./ChevronUpIcon-DGpRd4Xh.js";import"./ListItem-Cy2w0xof.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
