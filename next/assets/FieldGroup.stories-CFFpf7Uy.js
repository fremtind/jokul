import{r as n,j as i}from"./iframe-gWDdLe78.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-ClOipBa-.js";import{CheckboxStory as c}from"./Checkbox.stories-Bg_XdKmv.js";import d from"./Help.stories-BA8EY-Q8.js";import k from"./RadioButton.stories-BuM8L95g.js";import{RadioPanel as u}from"./RadioPanel.stories-BwR6vV2f.js";import{F as g}from"./FieldGroup-BEg0N_bX.js";import{C as h}from"./Checkbox-ClVdemg9.js";import{R as b}from"./RadioPanel-DesTSBUg.js";import{H as x}from"./Help-BesVYAxc.js";import{R as C}from"./RadioButton-BvceYwWa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cu9vJsr7.js";import"./clsx-B-dksMZM.js";import"./Flex-CENVz_Js.js";import"./SlotComponent-DHnB_M_Y.js";import"./mergeRefs-CvG5pZY3.js";import"./Button-BgHjem9_.js";import"./usePreviousValue-R2aNYS6H.js";import"./Loader-C_ze89xw.js";import"./useDelayedRender-SYRoHAFL.js";import"./useId-2tM9YNnS.js";import"./Label-B_3Jfh2z.js";import"./SupportLabel-Cqzy_5Vs.js";import"./SuccessIcon-BoF8PRK0.js";import"./Icon-BFUSwwMY.js";import"./WarningIcon-BWr-04hP.js";import"./BaseRadioButton.stories-DrZQgPKB.js";import"./BaseRadioButton-CFp5f_sb.js";import"./Title-2P8sozkc.js";import"./Card-Ce__pged.js";import"./Text-CZ5eHkS2.js";import"./Tag-upvHKKX1.js";import"./ExpandablePanel-DYsBfKA0.js";import"./useAnimatedHeightBetween-CYs-y_i0.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CesqO4J1.js";import"./Expander-CPpJT4_S.js";import"./ChevronUpIcon-MvdYRQ6g.js";import"./ListItem-DgeXN3Uf.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
