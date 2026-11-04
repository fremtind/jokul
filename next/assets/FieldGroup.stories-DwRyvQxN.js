import{r as p,j as i}from"./iframe-VEPE-gCM.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-zEO9wmP2.js";import{CheckboxStory as c}from"./Checkbox.stories-BAeHLakB.js";import k from"./Help.stories-CITlBDZ6.js";import u from"./RadioButton.stories-BiP14--V.js";import{RadioPanel as g}from"./RadioPanel.stories-DWRMtuoa.js";import{F as h}from"./FieldGroup-X4y4fp-p.js";import{C as b}from"./Checkbox-6NBvr0oA.js";import{R as x}from"./RadioPanel-Cwjeg9yC.js";import{H as C}from"./Help-BYOsmCGj.js";import{R as G}from"./RadioButton-DSc4EILL.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DGNs6feV.js";import"./clsx-B-dksMZM.js";import"./Flex-BdAjCZkv.js";import"./SlotComponent-Bv8qtwkK.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-S80U8XUy.js";import"./usePreviousValue-DuD-q01W.js";import"./Loader-JWXvdokH.js";import"./useDelayedRender-D3ukpBGc.js";import"./useId-BCWeqM0e.js";import"./Label-CjCi-K9B.js";import"./SupportLabel-CdatP24R.js";import"./SuccessIcon-Dv4vHjHn.js";import"./Icon-CN-MlVZB.js";import"./WarningIcon-E6SdyN62.js";import"./BaseRadioButton.stories-CRTR9Tik.js";import"./BaseRadioButton-C38uLexr.js";import"./Title-2czi3yn0.js";import"./Card-CTtCAS8p.js";import"./Text-vx3mdZN5.js";import"./Tag-BwztxNI8.js";import"./ExpandablePanel-DgHRpPJx.js";import"./useAnimatedHeightBetween-DDYSgUbj.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-08kwbL-S.js";import"./Expander-CZrmTpaH.js";import"./ChevronUpIcon-DHPU7K2B.js";import"./ListItem-CXraVyeG.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
