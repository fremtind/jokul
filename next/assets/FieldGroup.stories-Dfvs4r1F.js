import{r as n,j as i}from"./iframe-B6D1yXsi.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Do22xlf9.js";import{CheckboxStory as c}from"./Checkbox.stories-DJQbMAlT.js";import d from"./Help.stories-B2u4cADO.js";import k from"./RadioButton.stories-BOuHkCmc.js";import{RadioPanel as u}from"./RadioPanel.stories-BKcXSyTr.js";import{F as g}from"./FieldGroup-C-1n5BFU.js";import{C as h}from"./Checkbox-BQhuEzt0.js";import{R as b}from"./RadioPanel-Dvwz8PcJ.js";import{H as x}from"./Help-Cgo7EvlM.js";import{R as C}from"./RadioButton-dgJP_JAx.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-4GTr1dU1.js";import"./clsx-B-dksMZM.js";import"./Flex-Dq7uFRmR.js";import"./SlotComponent-Beq2NkDS.js";import"./mergeRefs-CG-rsvec.js";import"./Button-CuMSJ-aL.js";import"./usePreviousValue-D6bVIWs2.js";import"./Loader-DdC-N2gx.js";import"./useDelayedRender-BdQx3PA4.js";import"./useId-CD-jh8rz.js";import"./Label-CBt3XE9N.js";import"./SupportLabel-C8GqWlVD.js";import"./SuccessIcon-i8VPjMpa.js";import"./Icon-BjW8M-wg.js";import"./WarningIcon-BkyEAjhL.js";import"./BaseRadioButton.stories-BhyzkOj5.js";import"./BaseRadioButton-D9Qf2Ern.js";import"./Title-C7VCP8Uj.js";import"./Card-BOHp2Qdt.js";import"./Text-DRxEvVuC.js";import"./Tag-DIhnL10g.js";import"./ExpandablePanel-dYwnwPYT.js";import"./useAnimatedHeightBetween-DL2Z5IBX.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-yG6l8Hlb.js";import"./Expander-r0e7jcOa.js";import"./ChevronUpIcon-C74JDZSg.js";import"./ListItem-CWmdNC-Z.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
