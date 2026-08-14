import{r as p,j as i}from"./iframe-DQjgGy3g.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BN4Ix8T2.js";import l from"./Help.stories-CrqGgs5W.js";import c from"./RadioButton.stories-DY7lyOlF.js";import{F as d}from"./FieldGroup-YAv8Qig4.js";import{C as k,a as u}from"./CheckboxPanel.stories-UUEmR09U.js";import{RadioPanel as g}from"./RadioPanel.stories-CIsDtq31.js";import{C as h}from"./Checkbox-DlPBPyzp.js";import{R as b}from"./RadioPanel-TAjfbBB6.js";import{H as x}from"./Help-atAnNYhU.js";import{R as C}from"./RadioButton-CMh9cmPX.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-DGaNMB13.js";import"./BaseRadioButton-B7EUXdgr.js";import"./clsx-B-dksMZM.js";import"./useId-BJ9l4j2H.js";import"./Label-HvIAyWgH.js";import"./SupportLabel-DvlymRlE.js";import"./SuccessIcon-CQhE3qpm.js";import"./Icon-UROKWZdp.js";import"./WarningIcon-C3YqVB8y.js";import"./InputPanel-BJXWqqra.js";import"./Flex-BmO3F82e.js";import"./SlotComponent-CWfX_OmG.js";import"./mergeRefs-DTM6i-Xc.js";import"./Button-BR2k-e-U.js";import"./usePreviousValue-_lulVUpG.js";import"./Loader-CAQyQRZt.js";import"./useDelayedRender-BrGgwpGL.js";import"./Title-BzNJ5qfJ.js";import"./Card-Ci8ZU1nt.js";import"./Text-Bv-6hMhb.js";import"./Tag-DTHdvwt1.js";import"./ExpandablePanel-Cj_26RzY.js";import"./useAnimatedHeightBetween-yX3kPIZX.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bl_KiId0.js";import"./Expander-BpzlD3Me.js";import"./ChevronDownIcon-eRauxSoD.js";import"./ChevronUpIcon-Sb7hR57E.js";import"./ListItem-Bqn-IWm-.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
