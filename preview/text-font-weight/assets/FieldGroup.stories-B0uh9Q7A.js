import{r as p,j as i}from"./iframe-Fogd4u-O.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BaUQi6yo.js";import l from"./Help.stories-Co4leyuL.js";import c from"./RadioButton.stories-B913NuPY.js";import{F as d}from"./FieldGroup-D1znz9k7.js";import{C as k,a as u}from"./CheckboxPanel.stories-ZEoZn5K6.js";import{RadioPanel as g}from"./RadioPanel.stories-CqB5WHzL.js";import{C as h}from"./Checkbox-Da2eJ9Gh.js";import{R as b}from"./RadioPanel-DKFGQCh0.js";import{H as x}from"./Help-Dkeec3Uj.js";import{R as C}from"./RadioButton-CUtV_SwZ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C2xwxvWh.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-L-rBhPnu.js";import"./mergeRefs-DkdPcQ14.js";import"./BaseRadioButton.stories-EamNHu7K.js";import"./BaseRadioButton-Wpbc6gu2.js";import"./useId-Byp1mMrW.js";import"./Label-CffE1AF0.js";import"./SupportLabel-nYrFsgD1.js";import"./SuccessIcon-CmaBM1fW.js";import"./Icon-CkFUtKGo.js";import"./WarningIcon-C4kBGKuD.js";import"./InputPanel-Cu5NzCUG.js";import"./Button-DL6d6_QT.js";import"./usePreviousValue-DuQkVl-H.js";import"./Loader-Dilo8TZ9.js";import"./useDelayedRender-DadnefTs.js";import"./Title-Bu8Iy6Q5.js";import"./Card-Dhg8NgU-.js";import"./Text-BEer-Lbo.js";import"./Tag-Do_-hDza.js";import"./ExpandablePanel-DahHRi6h.js";import"./useAnimatedHeightBetween-DOW-HhYU.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CDSE7wfr.js";import"./Expander-BfY33MaP.js";import"./ChevronDownIcon-er7u0YrW.js";import"./ChevronUpIcon-CNchg4b8.js";import"./ListItem-Cttk7R_y.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
