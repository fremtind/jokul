import{r as p,j as i}from"./iframe-CWlPmRQd.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CIGRL4I7.js";import{CheckboxStory as c}from"./Checkbox.stories-mC9zSxM0.js";import k from"./Help.stories-CvfJ6vZL.js";import u from"./RadioButton.stories-CetsLAN_.js";import{RadioPanel as g}from"./RadioPanel.stories-DnHDVZR_.js";import{F as h}from"./FieldGroup-809_xv_1.js";import{C as b}from"./Checkbox-BuOGNeGo.js";import{R as x}from"./RadioPanel-dOyx9wJx.js";import{H as C}from"./Help-BeFsjVr3.js";import{R as G}from"./RadioButton-BIesVJoq.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Bl5yhF05.js";import"./clsx-B-dksMZM.js";import"./Flex-CxllDsZx.js";import"./SlotComponent-CaS-ygJV.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DpTAg0g5.js";import"./usePreviousValue-DFVdlWTf.js";import"./Loader-CvVxqobi.js";import"./useDelayedRender-Du0GYYGY.js";import"./useId-DSPJ-YNN.js";import"./Label-DkCKs5Qb.js";import"./SupportLabel-BIwnbXoY.js";import"./SuccessIcon-7w4MqBwJ.js";import"./Icon-DpRevtWk.js";import"./WarningIcon-AigLNVqk.js";import"./BaseRadioButton.stories-BUH0TISw.js";import"./BaseRadioButton-DbL7BjpG.js";import"./Title-DZwFdZmX.js";import"./Card-BsJw5A7B.js";import"./Text-umXM-5NA.js";import"./Tag-D6qHmhSB.js";import"./ExpandablePanel-Xphmk-1J.js";import"./useAnimatedHeightBetween-CFeKOgee.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ncYc-8dv.js";import"./Expander-C95DUOZ0.js";import"./ChevronUpIcon-CIx4bVh2.js";import"./ListItem-DakWPYQ2.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
