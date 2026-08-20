import{r as n,j as i}from"./iframe-BfMzzhNF.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B5YCsgmy.js";import l from"./Help.stories-VkbCZ1GM.js";import c from"./RadioButton.stories-BafyVwxG.js";import{F as d}from"./FieldGroup-CUIMsSo8.js";import{C as k,a as u}from"./CheckboxPanel.stories-DzaxqCfF.js";import{RadioPanel as g}from"./RadioPanel.stories-BE6J9zCX.js";import{C as h}from"./Checkbox-BAeb9_YN.js";import{R as b}from"./RadioPanel-CjcOPt7B.js";import{H as x}from"./Help-DS96weiY.js";import{R as C}from"./RadioButton-CCTdDccK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bq0BzCWF.js";import"./Label-C52aC3Ya.js";import"./SupportLabel-DckJDHhG.js";import"./SuccessIcon--XVU_6uy.js";import"./Icon-D-bnl050.js";import"./WarningIcon-CDNQYf6z.js";import"./BaseRadioButton.stories-y3Ylh-nJ.js";import"./BaseRadioButton-DsV_7tzP.js";import"./InputPanel-BPMJMJWN.js";import"./Flex-UpAfpYbj.js";import"./SlotComponent-B5j9QGec.js";import"./mergeRefs-CmuMbZVL.js";import"./Button-DEyzL-FJ.js";import"./usePreviousValue-BhTjqn26.js";import"./Loader-CBjE8XMU.js";import"./useDelayedRender-B7w7UEMD.js";import"./Title-CsT5av84.js";import"./Card-CR7UdcEa.js";import"./Text-CRKO0s2E.js";import"./Tag-DbpoJIF8.js";import"./ExpandablePanel-DuRncnT0.js";import"./useAnimatedHeightBetween-Cjx4YaOX.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-M04MXndY.js";import"./Expander-IAlloHXF.js";import"./ChevronUpIcon-CH5-mV_q.js";import"./ListItem-CCHjq5ky.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
