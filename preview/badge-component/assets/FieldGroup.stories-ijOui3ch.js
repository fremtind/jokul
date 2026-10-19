import{r as n,j as i}from"./iframe-auPq4eww.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BqMGuFHM.js";import{CheckboxStory as c}from"./Checkbox.stories-bbixstAQ.js";import d from"./Help.stories-CUyY-q4P.js";import k from"./RadioButton.stories-BivEd8tS.js";import{RadioPanel as u}from"./RadioPanel.stories-DOtOGaVO.js";import{F as g}from"./FieldGroup-BcoUs3Dr.js";import{C as h}from"./Checkbox-Cz3ZQ_Kl.js";import{R as b}from"./RadioPanel-B5EGR72n.js";import{H as x}from"./Help-BRL1GlNf.js";import{R as C}from"./RadioButton-m5z2tFX7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DmeGxbRN.js";import"./clsx-B-dksMZM.js";import"./Flex-BKtrL2aI.js";import"./SlotComponent-DcPqF1Tn.js";import"./mergeRefs-B-my7ChD.js";import"./Button-DwhRarIl.js";import"./usePreviousValue-BHQyiaAg.js";import"./Loader-g1tCquug.js";import"./useDelayedRender-Bzazq5B9.js";import"./useId-cNq4WhzD.js";import"./Label-BjdU1JP4.js";import"./SupportLabel-CjSg7RMu.js";import"./SuccessIcon-K1xg5WER.js";import"./Icon-CgQ1I1gE.js";import"./WarningIcon-DjKnIp6i.js";import"./BaseRadioButton.stories-B8GFV9yl.js";import"./BaseRadioButton-DcvlZPYu.js";import"./Title-Rn9THs9e.js";import"./Card-BHx2OTKW.js";import"./Text-D7FjjcHk.js";import"./Tag-BIbx-i1g.js";import"./ExpandablePanel-HVXDieqH.js";import"./useAnimatedHeightBetween-tisPmJDh.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Xs06kiCm.js";import"./Expander-BgBB2S5G.js";import"./ChevronUpIcon-nVITavkE.js";import"./ListItem-Bu9EEoLw.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
