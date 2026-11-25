import{r as p,j as s}from"./iframe-Co7xebiz.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-D1BPTGT_.js";import{CheckboxStory as c}from"./Checkbox.stories-BMvPYY0j.js";import k from"./Help.stories-Blni8X1q.js";import u from"./RadioButton.stories-Be2KedjD.js";import{RadioPanel as g}from"./RadioPanel.stories-RYTbvuK8.js";import{F as h}from"./FieldGroup-Be1ZefWK.js";import{C as b}from"./Checkbox-Byx41HGj.js";import{R as x}from"./RadioPanel-Dax1ug6n.js";import{H as C}from"./Help-DoahENs5.js";import{R as G}from"./RadioButton-DsvsKZzA.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B_uQ6ylV.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-D8MeuxW8.js";import"./SlotComponent-Bw3dweNH.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-zcI0RNef.js";import"./usePreviousValue-DO5Tp5_u.js";import"./Loader-DjRk0f9v.js";import"./useDelayedRender-DfCg5QMB.js";import"./useId-K20ZR9-m.js";import"./Label-C9bQ094V.js";import"./SupportLabel-BCtF8ZFj.js";import"./SuccessIcon-C8T5GQOf.js";import"./Icon-u71L468A.js";import"./WarningIcon-XoC6Usa8.js";import"./BaseRadioButton.stories-BGhjkYgK.js";import"./BaseRadioButton-CwgtrqZp.js";import"./Title-BfR1AXSd.js";import"./Card-IStWAiML.js";import"./Text-C928r1Ml.js";import"./Tag-DpUOM5ke.js";import"./ExpandablePanel-Ck4RXW1D.js";import"./useAnimatedHeightBetween-CnjMUvMS.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DH_7NZf0.js";import"./Expander-CRoh7Zv5.js";import"./ChevronUpIcon-Bg7ABhSp.js";import"./ListItem-F03z0zuO.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
