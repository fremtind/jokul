import{r as p,j as s}from"./iframe-CR912okS.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-Be_vN6Zu.js";import{CheckboxStory as c}from"./Checkbox.stories-H5jtEMaF.js";import k from"./Help.stories-Bch905WH.js";import u from"./RadioButton.stories-ByWVFSNa.js";import{RadioPanel as g}from"./RadioPanel.stories-B82rZxD_.js";import{F as h}from"./FieldGroup-DovEol_O.js";import{C as b}from"./Checkbox-D1j13AUp.js";import{R as x}from"./RadioPanel-PyHfvY-U.js";import{H as C}from"./Help-gzixHbd5.js";import{R as G}from"./RadioButton-DhCtNFWg.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel--KFgiuqz.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-B3pPWuBE.js";import"./SlotComponent-Dxxw-b_9.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-B6Kd_6sx.js";import"./usePreviousValue-B2xPCzPJ.js";import"./Loader-B2S1q2QB.js";import"./useDelayedRender-BOK5dspv.js";import"./useId-Y2nOOaD-.js";import"./Label-BMypN0n3.js";import"./SupportLabel-BBALUj7U.js";import"./SuccessIcon-DDeC0TNA.js";import"./Icon-DwpGIx9d.js";import"./WarningIcon-CSHLWSLG.js";import"./BaseRadioButton.stories-CNK83iae.js";import"./BaseRadioButton-CZB80iiJ.js";import"./Title-COSrozqs.js";import"./Card-Dkd0NEC-.js";import"./Text-Tu-HBwSM.js";import"./Tag-Vfk1beD0.js";import"./ExpandablePanel-DBuDiXlu.js";import"./useAnimatedHeightBetween-BlkaRbIi.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-87U2mnLY.js";import"./Expander-DgHmWRgE.js";import"./ChevronUpIcon-C1rc-_E4.js";import"./ListItem-CLny5-Nv.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
