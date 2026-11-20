import{r as p,j as s}from"./iframe-Dz5ihOo-.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Bm6zn9EY.js";import{CheckboxStory as c}from"./Checkbox.stories-DZO_7VGR.js";import k from"./Help.stories-DtHNariZ.js";import u from"./RadioButton.stories-Bb_-qquY.js";import{RadioPanel as g}from"./RadioPanel.stories-D4zyqrzY.js";import{F as h}from"./FieldGroup-Des42ezE.js";import{C as b}from"./Checkbox-DWrdSsWi.js";import{R as x}from"./RadioPanel-BVBlHspr.js";import{H as C}from"./Help-C9UlmJLE.js";import{R as G}from"./RadioButton-D3CLycsb.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-KqZ6hoi9.js";import"./clsx-B-dksMZM.js";import"./types-BKcj73j9.js";import"./Flex-Chb0zNOW.js";import"./SlotComponent-BsbbrAex.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Bb2nr6Dv.js";import"./usePreviousValue-CsQFi_Z5.js";import"./Loader-bMOYDRcl.js";import"./useDelayedRender-CBpnO9Ee.js";import"./useId-DcXcHH6_.js";import"./Label-xlVdwQKG.js";import"./SupportLabel-eCyPzemx.js";import"./SuccessIcon-CVby3uL7.js";import"./Icon-nwf9eaoX.js";import"./WarningIcon-CH_sOpil.js";import"./BaseRadioButton.stories-B_k8KR8e.js";import"./BaseRadioButton-S250TaxH.js";import"./Title-BmoI6Ykb.js";import"./Card-CqKiJK7K.js";import"./Text-CKMpVL0Y.js";import"./Tag-DbFL2WkG.js";import"./ExpandablePanel-6w3XpsLm.js";import"./useAnimatedHeightBetween-Tiu96-bu.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DRC2Kdvn.js";import"./Expander-BqwqWFNc.js";import"./ChevronUpIcon-DOLPiPKf.js";import"./ListItem-ypx14rXv.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
