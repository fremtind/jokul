import{r as p,j as i}from"./iframe-BdAZA-Ef.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Bk70CWeN.js";import{CheckboxStory as c}from"./Checkbox.stories-BJym0CUS.js";import k from"./Help.stories-CGck6EKp.js";import u from"./RadioButton.stories-De9O3Tvp.js";import{RadioPanel as g}from"./RadioPanel.stories-DGndeH2H.js";import{F as h}from"./FieldGroup-CrucDK9s.js";import{C as b}from"./Checkbox-W1G2oXFh.js";import{R as x}from"./RadioPanel-DDcSwIgi.js";import{H as C}from"./Help-V3d-CmPS.js";import{R as G}from"./RadioButton-Cf8Fk1iT.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Dw3qsk8S.js";import"./clsx-B-dksMZM.js";import"./Flex-CVkmzHNS.js";import"./SlotComponent-CMCerSOk.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Cj_I9gI7.js";import"./usePreviousValue-BLRJdLFp.js";import"./Loader-DAj3fjj5.js";import"./useDelayedRender-C2c2VxEb.js";import"./useId-B3IxszE8.js";import"./Label-CeNX_kHX.js";import"./SupportLabel-B2M9Q3di.js";import"./SuccessIcon-D10ZbkNJ.js";import"./Icon-DONzNwYp.js";import"./WarningIcon-Cp2gY3xT.js";import"./BaseRadioButton.stories-qoszHB3y.js";import"./BaseRadioButton-CF96TCoH.js";import"./Title-ZyGXJzx4.js";import"./Card-CdeUW9oE.js";import"./Text-C-SA1m4b.js";import"./Tag-DbChzc74.js";import"./ExpandablePanel-D6xa6UBR.js";import"./useAnimatedHeightBetween-luZQipdQ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CdM32JaF.js";import"./Expander-k1y2Gy15.js";import"./ChevronUpIcon-DnABO1jl.js";import"./ListItem-BO0ESiWE.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
