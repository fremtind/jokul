import{r as p,j as s}from"./iframe-DzEFgUnG.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CNQBaLDS.js";import{CheckboxStory as c}from"./Checkbox.stories-B3hq0L68.js";import k from"./Help.stories-BQH5Ukp2.js";import u from"./RadioButton.stories-Btosi4aO.js";import{RadioPanel as g}from"./RadioPanel.stories-DnSiLK1o.js";import{F as h}from"./FieldGroup-DA_LGZvW.js";import{C as b}from"./Checkbox-WHiDHQg4.js";import{R as x}from"./RadioPanel-O_43FDVY.js";import{H as C}from"./Help-DgZVGlzC.js";import{R as G}from"./RadioButton-4qzK8noe.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Cl0IRUxo.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-zUCcA0Qd.js";import"./SlotComponent-Bm-RVOen.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-OjJsKt5W.js";import"./usePreviousValue-BlVmHVLq.js";import"./Loader-E78CgjPI.js";import"./useDelayedRender-BgwyPjOa.js";import"./useId-CJtcKg1u.js";import"./Label-CdlRMt5Q.js";import"./SupportLabel-Cl3i-d7k.js";import"./SuccessIcon-Cjz1Iqs4.js";import"./Icon-C3AtQ1s0.js";import"./WarningIcon-DF7eCEIy.js";import"./BaseRadioButton.stories-Boe8-Amf.js";import"./BaseRadioButton-BOAzP8NM.js";import"./Title-BXi0SijQ.js";import"./Card-B3wJDzWF.js";import"./Text-C4EYEipQ.js";import"./Tag-fw44GsBq.js";import"./ExpandablePanel-CMAPlvvY.js";import"./useAnimatedHeightBetween-5mRQi4Ia.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BvpHUBS9.js";import"./Expander-D6Ruubsj.js";import"./ChevronUpIcon-CFmTp3-v.js";import"./ListItem-DZAH0cPy.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
