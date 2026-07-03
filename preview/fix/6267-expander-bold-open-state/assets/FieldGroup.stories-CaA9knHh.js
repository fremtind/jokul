import{r as p,j as i}from"./iframe-CFLzMvnQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DYKT-6ie.js";import l from"./Help.stories-Bvrp_gH7.js";import c from"./RadioButton.stories-DYlesnQH.js";import{F as d}from"./FieldGroup-D4S4_4Dg.js";import{C as k,a as u}from"./CheckboxPanel.stories-CvWDZkVa.js";import{RadioPanel as g}from"./RadioPanel.stories-rRs0aOis.js";import{C as h}from"./Checkbox-xQnzU89e.js";import{R as b}from"./RadioPanel-D-sXmHRv.js";import{H as x}from"./Help-CkfzhnGz.js";import{R as C}from"./RadioButton-BsFwx7TL.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DUaMWg-P.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D8zHoiLu.js";import"./mergeRefs-hCh5jHu8.js";import"./BaseRadioButton.stories-C3KovAMh.js";import"./BaseRadioButton-BERFxRl5.js";import"./useId-e48b_PAc.js";import"./Label-DpvzhsTV.js";import"./SupportLabel-N4B_tAMA.js";import"./SuccessIcon-BCIQwI68.js";import"./Icon-LJ1R2N8I.js";import"./WarningIcon-0fhme6rt.js";import"./InputPanel-9Bp0m3WH.js";import"./Button-Dzp2par3.js";import"./usePreviousValue-CSh9vvD5.js";import"./Loader-uOUordmx.js";import"./useDelayedRender-B6VPROog.js";import"./Title-Dx1Sd_o7.js";import"./Card-4ja-yPin.js";import"./Text-Fy5ZBpW2.js";import"./Tag-ZGRb5Hsk.js";import"./ExpandablePanel-CBbfVbYt.js";import"./useAnimatedHeightBetween-CzX7jEjL.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ci0P4w6q.js";import"./Expander-CbLJmMMn.js";import"./ChevronDownIcon-OQuoOyUL.js";import"./ChevronUpIcon-Dy_X3xm5.js";import"./ListItem-DMlnTgLn.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
