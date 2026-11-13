import{r as p,j as s}from"./iframe-DzTuKauP.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-COn8Kc84.js";import{CheckboxStory as c}from"./Checkbox.stories-CbnkM9Vh.js";import k from"./Help.stories-DaLQOvWt.js";import u from"./RadioButton.stories-QBXyB5W8.js";import{RadioPanel as g}from"./RadioPanel.stories-C6I0yEQd.js";import{F as h}from"./FieldGroup-BKIONSFo.js";import{C as b}from"./Checkbox-jlcro5F5.js";import{R as x}from"./RadioPanel-BeIdm6AL.js";import{H as C}from"./Help-D646Cow6.js";import{R as G}from"./RadioButton-MGuFqiO7.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BBRi8WC1.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BHIXJgvw.js";import"./SlotComponent-DDNy9mTL.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DZxDP31h.js";import"./usePreviousValue-DrSSzRLW.js";import"./Loader-D1V0dnho.js";import"./useDelayedRender-ZfEtHh0C.js";import"./useId-BMkVc4Wk.js";import"./Label-DhCxIqh_.js";import"./SupportLabel-ClfhNeRx.js";import"./SuccessIcon-CqguTowU.js";import"./Icon-QQfnwt3Z.js";import"./WarningIcon-B9daxtNv.js";import"./BaseRadioButton.stories-DLKeHV2A.js";import"./BaseRadioButton-DCDGZ17i.js";import"./Title-8VTIr__D.js";import"./Card-CVRivvC6.js";import"./Text-D7bRhh46.js";import"./Tag-DYEjKQyv.js";import"./ExpandablePanel-BNUFnwAZ.js";import"./useAnimatedHeightBetween-D63xYZCk.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D0IHOVKM.js";import"./Expander-C8b0fmMd.js";import"./ChevronUpIcon-9F7O6Qdr.js";import"./ListItem-DHTDUkcl.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,le as __namedExportsOrder,se as default};
