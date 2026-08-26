import{r as n,j as i}from"./iframe-C0iG7Ac0.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DPLF219e.js";import l from"./Help.stories-Ch89kAkc.js";import c from"./RadioButton.stories-D6I3dLsY.js";import{F as d}from"./FieldGroup-DRPSXz4t.js";import{C as k,a as u}from"./CheckboxPanel.stories-DkW_XKMp.js";import{RadioPanel as g}from"./RadioPanel.stories-D16qHpKF.js";import{C as h}from"./Checkbox-CIad-6dq.js";import{R as b}from"./RadioPanel-BZ_T2emB.js";import{H as x}from"./Help-BXV_HX_k.js";import{R as C}from"./RadioButton-2RQt9OMe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CLMcdZ2I.js";import"./Label-BQbob5rz.js";import"./SupportLabel-BcXS5ewK.js";import"./SuccessIcon-BQzSF3Yq.js";import"./Icon-I5-aMHhB.js";import"./WarningIcon-DIanTeMk.js";import"./BaseRadioButton.stories-Bs3oUr-U.js";import"./BaseRadioButton-br_7s_vs.js";import"./InputPanel-BkbK8xmo.js";import"./Flex-BowKUYRJ.js";import"./SlotComponent-DVzVZPxC.js";import"./mergeRefs-HevErwgW.js";import"./Button-DF6iJKmf.js";import"./usePreviousValue-cuQDiGKM.js";import"./Loader-DiEBMh0R.js";import"./useDelayedRender-DGvB7uVR.js";import"./Title-BHJFw6AM.js";import"./Card-D-q6eiiH.js";import"./Text-BaB2d2Ju.js";import"./Tag-V-UnDKCV.js";import"./ExpandablePanel-CfuxFjXC.js";import"./useAnimatedHeightBetween-Dm6sqyDV.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CAWYau0U.js";import"./Expander-CpQaNZx_.js";import"./ChevronUpIcon-tqVV0-IB.js";import"./ListItem-DMGBOD2X.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
