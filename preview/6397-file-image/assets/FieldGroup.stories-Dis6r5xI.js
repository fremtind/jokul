import{r as p,j as i}from"./iframe-BYxVp0b0.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-B85OxkNw.js";import l from"./Help.stories-BSSEsGeC.js";import c from"./RadioButton.stories-C5wHfYTt.js";import{F as d}from"./FieldGroup-BQkc6iqi.js";import{C as k,a as u}from"./CheckboxPanel.stories-D_u2HBld.js";import{RadioPanel as g}from"./RadioPanel.stories-USID7qPT.js";import{C as h}from"./Checkbox-FNRmEXdM.js";import{R as b}from"./RadioPanel-C5MaAeVO.js";import{H as x}from"./Help-D4ZoRKsH.js";import{R as C}from"./RadioButton-DRgaNILL.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-HGjli408.js";import"./BaseRadioButton-D29gstYi.js";import"./clsx-B-dksMZM.js";import"./useId-CXflub2o.js";import"./Label-CCGlmmxF.js";import"./SupportLabel-CgIOeWSr.js";import"./SuccessIcon-BCCZFwlP.js";import"./Icon-CCfapyRU.js";import"./WarningIcon-Ba6UTYU1.js";import"./InputPanel-CVd7uIlz.js";import"./Flex-BPbij7Qw.js";import"./SlotComponent-Czgt1PaX.js";import"./mergeRefs-DxJvcoIF.js";import"./Button-CQudjhWp.js";import"./usePreviousValue-BloJ7xp6.js";import"./Loader-D8ezZ92C.js";import"./useDelayedRender-zpoXo9Wq.js";import"./Title-Dk1HZmna.js";import"./Card-CCrHrX8M.js";import"./Text-BAPk5PfD.js";import"./Tag-Ba45DhAI.js";import"./ExpandablePanel-8Yg2CKFY.js";import"./useAnimatedHeightBetween-Cll-uY4s.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-ltz_7Glu.js";import"./Expander-C5M2EI5K.js";import"./ChevronDownIcon-DrPeuSP6.js";import"./ChevronUpIcon-oyam0W6E.js";import"./ListItem-5rHJkeD0.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
