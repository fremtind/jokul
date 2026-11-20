import{r as p,j as s}from"./iframe-w1kGMq4Q.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-C-4DkZCD.js";import{CheckboxStory as c}from"./Checkbox.stories-DIgYHrZv.js";import k from"./Help.stories-iCuQ4tFj.js";import u from"./RadioButton.stories-Duw0HjE1.js";import{RadioPanel as g}from"./RadioPanel.stories-Dxye2E6z.js";import{F as h}from"./FieldGroup-BhSYwOjD.js";import{C as b}from"./Checkbox-B0VTlbjg.js";import{R as x}from"./RadioPanel-BelpxJcw.js";import{H as C}from"./Help-C4Dzkaec.js";import{R as G}from"./RadioButton-CG8B2Xsm.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DrlCnzZ_.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-MSAlmnC1.js";import"./SlotComponent-DFD-8-N1.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DsFodm10.js";import"./usePreviousValue-DR08Yqz1.js";import"./Loader-BOYZ0o00.js";import"./useDelayedRender-kpAa8XOO.js";import"./useId-mjQEWfl6.js";import"./Label-BbmbkGUl.js";import"./SupportLabel-B_0EJBac.js";import"./SuccessIcon-J1MKk4R2.js";import"./Icon-B4xyWW0i.js";import"./WarningIcon-Cx2sYLfs.js";import"./BaseRadioButton.stories-BAd_LJ6o.js";import"./BaseRadioButton-kH0VjXx9.js";import"./Title-BicBzg-7.js";import"./Card-DdOduXdt.js";import"./Text-CWx0EQog.js";import"./Tag-DfC65S8q.js";import"./ExpandablePanel-B5Ery9n_.js";import"./useAnimatedHeightBetween-BszUUclf.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BjrarO-V.js";import"./Expander-DJ6Ff9DY.js";import"./ChevronUpIcon-4JGKkvVN.js";import"./ListItem-cKCIEpTk.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
