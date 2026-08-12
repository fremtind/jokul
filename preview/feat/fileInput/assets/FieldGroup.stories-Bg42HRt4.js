import{r as p,j as i}from"./iframe-CCkNp658.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-IWw4Cppr.js";import l from"./Help.stories-B6rPXcg6.js";import c from"./RadioButton.stories-B689-1Ao.js";import{F as d}from"./FieldGroup-BB4TyzJP.js";import{C as k,a as u}from"./CheckboxPanel.stories-CUhifrZM.js";import{RadioPanel as g}from"./RadioPanel.stories-DHwInyqR.js";import{C as h}from"./Checkbox-VlBMSJ0I.js";import{R as b}from"./RadioPanel-Bd_4RqDH.js";import{H as x}from"./Help-DQ-onIg3.js";import{R as C}from"./RadioButton-C_vq5BqE.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BO1CG2_y.js";import"./BaseRadioButton-Dh2DbPlR.js";import"./clsx-B-dksMZM.js";import"./useId-CvfFh10d.js";import"./Label-DBoOzlKV.js";import"./SupportLabel-1_pVOlld.js";import"./SuccessIcon-CNJG27Ac.js";import"./Icon--GwmWcAC.js";import"./WarningIcon-Bq3K-S47.js";import"./InputPanel-DzZdTHg6.js";import"./Flex-D9Jm5E74.js";import"./SlotComponent-BWCRzL7i.js";import"./mergeRefs-BVBjSUoU.js";import"./Button-T7iXTdfk.js";import"./usePreviousValue-XD6UuWhm.js";import"./Loader-4v9OqASn.js";import"./useDelayedRender-CRcjLB_t.js";import"./Title-CWQ44-Gu.js";import"./Card-DrXypIVl.js";import"./Text-Dq6SC0an.js";import"./Tag-Bj0Uf6dQ.js";import"./ExpandablePanel-Cc2YBpdZ.js";import"./useAnimatedHeightBetween-B1pNkSZ0.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CYaGX7f9.js";import"./Expander-BGxmyvU0.js";import"./ChevronDownIcon-BhmaWgFk.js";import"./ChevronUpIcon-BmQZSqnj.js";import"./ListItem-CCEHLVGW.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
