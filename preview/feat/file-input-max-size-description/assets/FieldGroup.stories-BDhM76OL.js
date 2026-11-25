import{r as p,j as s}from"./iframe-C7vuNym9.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-9cwcS551.js";import{CheckboxStory as c}from"./Checkbox.stories-DW5H_NxU.js";import k from"./Help.stories-DYAiLqlt.js";import u from"./RadioButton.stories-BnojFzwE.js";import{RadioPanel as g}from"./RadioPanel.stories-Dg1n24Ii.js";import{F as h}from"./FieldGroup-Ldptp3iB.js";import{C as b}from"./Checkbox-BUjn5TFR.js";import{R as x}from"./RadioPanel-DspwZSRx.js";import{H as C}from"./Help-CcQA71vW.js";import{R as G}from"./RadioButton-Bb8b8L_P.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DMNKZx6b.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-CMyoNhA0.js";import"./SlotComponent-Bm3Liv_z.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-q_mGXu8g.js";import"./usePreviousValue-BLPhi4iO.js";import"./Loader-C2rqurQM.js";import"./useDelayedRender-Y0b9w_6T.js";import"./useId-CdoOAbJS.js";import"./Label-C9zkWfJq.js";import"./SupportLabel-Ctb4xZoJ.js";import"./SuccessIcon-D6aR0bZi.js";import"./Icon-BCQIP9yk.js";import"./WarningIcon-BZkLk4FS.js";import"./BaseRadioButton.stories-DnKKAZvh.js";import"./BaseRadioButton---Hlpgms.js";import"./Title-DGa04nW2.js";import"./Card-CwISXw7f.js";import"./Text-BqeX-s65.js";import"./Tag-DzRdqbMD.js";import"./ExpandablePanel-DspQfKdk.js";import"./useAnimatedHeightBetween-CdfCSDkz.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-C60OORG4.js";import"./Expander-CkenGqlr.js";import"./ChevronDownIcon-Dj4k8xwz.js";import"./ChevronUpIcon-hfOv0dnL.js";import"./ListItem-BwjiEt-K.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,de as __namedExportsOrder,le as default};
