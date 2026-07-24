import{r as p,j as i}from"./iframe-DczHPdlv.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-tgRGhH_K.js";import l from"./Help.stories-DFsMEmGe.js";import c from"./RadioButton.stories-C7Y-lbw6.js";import{F as d}from"./FieldGroup-BvvwVLpc.js";import{C as k,a as u}from"./CheckboxPanel.stories-DxuVPq0u.js";import{RadioPanel as g}from"./RadioPanel.stories-DCfB1bEg.js";import{C as h}from"./Checkbox-O5_vNldR.js";import{R as b}from"./RadioPanel-BJGvRA8l.js";import{H as x}from"./Help-GeOgc7hD.js";import{R as C}from"./RadioButton-BtOSiZZX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-pHBeU-vi.js";import"./Label-D5w0ElEA.js";import"./SupportLabel-Cv_UVzm5.js";import"./SuccessIcon-DIhEpNqE.js";import"./Icon-CbdNsX6z.js";import"./WarningIcon-nqVKxOXy.js";/* empty css               *//* empty css               */import"./Flex-CelAk_n1.js";import"./SlotComponent-B9ewTH5z.js";import"./mergeRefs-BrIAKJ7n.js";import"./BaseRadioButton.stories-CG9gzhQ9.js";import"./BaseRadioButton-a3Mfr15h.js";import"./InputPanel-CjYV1np-.js";import"./Button-BUjmE0Af.js";import"./usePreviousValue-B6GFLNtp.js";import"./Loader-BUMTEVnh.js";import"./useDelayedRender-D7mTAlPM.js";import"./Title-DRiFXbKZ.js";import"./Card-znnyU53d.js";import"./Text--wjW1_0P.js";import"./Tag-t1LLrZxN.js";import"./ExpandablePanel-CC9oBpYU.js";import"./useAnimatedHeightBetween-CwuivBdL.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BqTFsCHc.js";import"./Expander-BW5ot1nH.js";import"./ChevronUpIcon-gwCsmtow.js";import"./ListItem-CEmax-ty.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
