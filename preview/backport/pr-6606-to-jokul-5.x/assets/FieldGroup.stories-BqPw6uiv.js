import{r as p,j as i}from"./iframe-s8sUPN0e.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CuRzJaU4.js";import{CheckboxStory as c}from"./Checkbox.stories-BVLsJx5E.js";import d from"./Help.stories-pUbcl_GL.js";import k from"./RadioButton.stories-BlAOIigt.js";import{RadioPanel as u}from"./RadioPanel.stories-DkRXHfMm.js";import{F as g}from"./FieldGroup-DdUX2ZNo.js";import{C as h}from"./Checkbox-D9ZqnNT1.js";import{R as b}from"./RadioPanel-BN2uAoBg.js";import{H as x}from"./Help-IlRjUMiQ.js";import{R as C}from"./RadioButton-CNlPQKLZ.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DUni8AY1.js";import"./clsx-B-dksMZM.js";import"./types-IsTkoTmK.js";import"./Flex-CGjVaUa6.js";import"./SlotComponent-DS6vpwM2.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-LjwWOFd-.js";import"./usePreviousValue-DqmH5h8F.js";import"./Loader-DKGQG0vO.js";import"./useDelayedRender-duTHp-ll.js";import"./BaseRadioButton.stories-C5U4h5K6.js";import"./BaseRadioButton-Dr2JNFJS.js";import"./useId-D73VU2bW.js";import"./Title-B9O8ALZ_.js";import"./Card-BbeYn_fa.js";import"./Text-D5Rmy1k4.js";import"./Tag-8H3nAX4v.js";import"./ExpandablePanel-CrE9Dynd.js";import"./useAnimatedHeightBetween-Dxps_Uvb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BKVY2pWA.js";import"./Expander-CUS4T-a5.js";import"./ChevronDownIcon-DcaSnRtN.js";import"./Icon-C0IG6nDZ.js";import"./ChevronUpIcon-BqHNos2_.js";import"./ListItem-vLs9QIb2.js";import"./Label-DgncUdsw.js";import"./SupportLabel-D5Mrt71N.js";import"./SuccessIcon-DvgIXpMf.js";import"./WarningIcon-DXHopxdu.js";const se={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
