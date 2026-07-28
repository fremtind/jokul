import{r as p,j as i}from"./iframe-DJ3yUryf.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CPFbIkaX.js";import l from"./Help.stories-Cp-Rrn5C.js";import c from"./RadioButton.stories-vH12HCKp.js";import{F as d}from"./FieldGroup-CQd2BprY.js";import{C as k,a as u}from"./CheckboxPanel.stories-Bge_-TrY.js";import{RadioPanel as g}from"./RadioPanel.stories-Gv0Atsvw.js";import{C as h}from"./Checkbox-g4L8hUb7.js";import{R as b}from"./RadioPanel-CWGCtt3r.js";import{H as x}from"./Help-BYjgaTzD.js";import{R as C}from"./RadioButton-CQQrSOVp.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-svHkdEs1.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B3kwbLEx.js";import"./mergeRefs-iyQ19r9l.js";import"./BaseRadioButton.stories-DL9ZBbZf.js";import"./BaseRadioButton-8gW0wrHI.js";import"./useId-BkwzAYY6.js";import"./Label-BFOBiW0m.js";import"./SupportLabel-DFsLqUSv.js";import"./SuccessIcon-hQ6Zr2S-.js";import"./Icon-DpYUYKAx.js";import"./WarningIcon-aPGTcivv.js";import"./InputPanel-Cc17kuZM.js";import"./Button-BBoojbDm.js";import"./usePreviousValue-DWj0ivfA.js";import"./Loader-CecacENQ.js";import"./useDelayedRender-Cmea3ecr.js";import"./Title-BoGvfVdG.js";import"./Card-DwgKpteP.js";import"./Text-Bt_iRazO.js";import"./Tag-RJtwJTjH.js";import"./ExpandablePanel-DRo8UlTo.js";import"./useAnimatedHeightBetween-CeCUnWr4.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-CmOdVLbC.js";import"./Expander-C9EWpY9s.js";import"./ChevronDownIcon-CIIN2JRb.js";import"./ChevronUpIcon-BVjRDOEc.js";import"./ListItem-BHg2P6B3.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
