import{r as p,j as i}from"./iframe-S3TuoZJc.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-ltunwn1s.js";import{CheckboxStory as c}from"./Checkbox.stories-CSO-W2Vp.js";import d from"./Help.stories-BqjSRQOF.js";import k from"./RadioButton.stories-DPzlYDc0.js";import{RadioPanel as u}from"./RadioPanel.stories-BpRm5loA.js";import{F as g}from"./FieldGroup-Cr6TL_2L.js";import{C as h}from"./Checkbox-DSNBMzVw.js";import{R as b}from"./RadioPanel-pRio1IBR.js";import{H as x}from"./Help-jdQ8q8MC.js";import{R as C}from"./RadioButton-DAd-RvSP.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dethh_lh.js";import"./clsx-B-dksMZM.js";import"./Flex-BFg6-qRW.js";import"./SlotComponent-py48sQw2.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DK14sm7y.js";import"./usePreviousValue-CV1mnbzM.js";import"./Loader-CE4quH8D.js";import"./useDelayedRender-5YPJGdp-.js";import"./BaseRadioButton.stories-D_WUtvEC.js";import"./BaseRadioButton-BwLkHVI1.js";import"./useId-BTS48DD2.js";import"./Title-C1DrXrdq.js";import"./Card-CKTFCXEo.js";import"./Text-K6MkEeKF.js";import"./Tag-CE0OzTtN.js";import"./ExpandablePanel-D3eoXTVc.js";import"./useAnimatedHeightBetween-Bv95w67N.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5oFBmhf.js";import"./Expander-DGiNeqsP.js";import"./ChevronDownIcon-BuU7T7aD.js";import"./Icon-DUi3_-pZ.js";import"./ChevronUpIcon-1HJVLDZQ.js";import"./ListItem-CnKiWeEJ.js";import"./Label-BE4S6MpH.js";import"./SupportLabel-B22_uXn1.js";import"./SuccessIcon-DtKEhiUo.js";import"./WarningIcon-BwrY7u46.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
