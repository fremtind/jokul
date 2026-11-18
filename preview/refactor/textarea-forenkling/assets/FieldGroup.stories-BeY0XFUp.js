import{r as p,j as s}from"./iframe-Cv39jH-u.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-D2Dl7U_Q.js";import{CheckboxStory as c}from"./Checkbox.stories-DkvSAOyz.js";import k from"./Help.stories-X9jlwk7j.js";import u from"./RadioButton.stories-CjbB91k9.js";import{RadioPanel as g}from"./RadioPanel.stories-MsPsMOdW.js";import{F as h}from"./FieldGroup-BBcGyo6d.js";import{C as b}from"./Checkbox-BQNTq1WP.js";import{R as x}from"./RadioPanel-Bw3Mx4wn.js";import{H as C}from"./Help-LMXgSZBz.js";import{R as G}from"./RadioButton-ttJ_LWP9.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CCjD7qQT.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DJ5EJlSd.js";import"./SlotComponent-b8dMSr25.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-RgrEB0Qp.js";import"./usePreviousValue-DvQL0mTc.js";import"./Loader-dl8Q7qv2.js";import"./useDelayedRender-D9XKqQlY.js";import"./useId-B72gQf-c.js";import"./Label-CxCDnD-q.js";import"./SupportLabel-mRHwtWeY.js";import"./SuccessIcon-BTonYAiZ.js";import"./Icon-UboWMXkj.js";import"./WarningIcon-C9Z_SkBo.js";import"./BaseRadioButton.stories-CCQnZ_6e.js";import"./BaseRadioButton-w69WkQTm.js";import"./Title-Dln90IVt.js";import"./Card-vTNbzwLt.js";import"./Text-Mj41nybs.js";import"./Tag-H7U74zBs.js";import"./ExpandablePanel-Csk04Mf3.js";import"./useAnimatedHeightBetween-B1oaZQGF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Bn2offi0.js";import"./Expander-CkbXJGMv.js";import"./ChevronUpIcon-B4MhKARm.js";import"./ListItem-B7R_tXtQ.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
