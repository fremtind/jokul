import{r as p,j as i}from"./iframe-DCXAhuRy.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-Cq5UCbfp.js";import l from"./Help.stories-YzU-yGp2.js";import c from"./RadioButton.stories-BIbMRcbj.js";import{F as d}from"./FieldGroup-CVvYWhXP.js";import{C as k,a as u}from"./CheckboxPanel.stories-jT7BEmGD.js";import{RadioPanel as g}from"./RadioPanel.stories-YUeNxf9t.js";import{C as h}from"./Checkbox-I6IC1C3l.js";import{R as b}from"./RadioPanel-CqDPx0lp.js";import{H as x}from"./Help-DB-vUoYo.js";import{R as C}from"./RadioButton-CTXlpf3f.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CMs7V8PL.js";import"./BaseRadioButton-BBWxrgr1.js";import"./clsx-B-dksMZM.js";import"./useId-FaBSEY2Q.js";import"./Label-BJSCStQj.js";import"./SupportLabel-CJMi1dxc.js";import"./SuccessIcon-JOXGa2lG.js";import"./Icon-CG6DKFD0.js";import"./WarningIcon-DyYtsQiP.js";import"./InputPanel-DXfpIp5m.js";import"./Flex-USZvkEB4.js";import"./SlotComponent-eGvUL9_D.js";import"./mergeRefs-Bpj00c_m.js";import"./Button-B2NDZw9V.js";import"./usePreviousValue-CM0qoEjy.js";import"./Loader-Bh3VKdou.js";import"./useDelayedRender-DRdwnRQp.js";import"./Title-Dgw8kljH.js";import"./Card-3T65yQTf.js";import"./Text-D7nhXK4-.js";import"./Tag-CyfUkipp.js";import"./ExpandablePanel-Bd6rWI7d.js";import"./useAnimatedHeightBetween-Dk_OqKgS.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-h6sC5NjD.js";import"./Expander-BPID9juU.js";import"./ChevronDownIcon-C82mryUP.js";import"./ChevronUpIcon-D7py7pbR.js";import"./ListItem-Cach6iEP.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
