import{r as p,j as s}from"./iframe-B-qBkfCq.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-svjPD-Kl.js";import{CheckboxStory as c}from"./Checkbox.stories-CVIYvkZ2.js";import k from"./Help.stories-Bsl834pk.js";import u from"./RadioButton.stories-BKqaLP-m.js";import{RadioPanel as g}from"./RadioPanel.stories-ojyf2UqQ.js";import{F as h}from"./FieldGroup-B2anfKiS.js";import{C as b}from"./Checkbox-yhpYtW49.js";import{R as x}from"./RadioPanel-B-l-2gm8.js";import{H as C}from"./Help-DAIqpl6U.js";import{R as G}from"./RadioButton-DddN8tqc.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Ci2Ajdl2.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-2Move65O.js";import"./SlotComponent-CZCtut2l.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-BmIGZuzD.js";import"./usePreviousValue-BlgYB4_q.js";import"./Loader-q9WjI1Ho.js";import"./useDelayedRender-Az8luba9.js";import"./useId-6QngeTvp.js";import"./Label-FyaZM2ap.js";import"./SupportLabel-KicZhfdL.js";import"./SuccessIcon-B67y1y0R.js";import"./Icon-DiaQ2NwI.js";import"./WarningIcon-DY9V69EE.js";import"./BaseRadioButton.stories-DpGZ6jbl.js";import"./BaseRadioButton-Bt3GlQ5k.js";import"./Title-eeKv8MLE.js";import"./Card-lSujkp0X.js";import"./Text-BvItiIk7.js";import"./Tag-DqtqVze5.js";import"./ExpandablePanel-DEWrTpYU.js";import"./useAnimatedHeightBetween-DRrYP7bm.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BAyPVIw1.js";import"./Expander-DZrVrx5c.js";import"./ChevronUpIcon-BTB_cryc.js";import"./ListItem-DjCLf8Z0.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
