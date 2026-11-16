import{r as p,j as s}from"./iframe-DY41vqNG.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-l9PplFAD.js";import{CheckboxStory as c}from"./Checkbox.stories-DTGgJx2y.js";import k from"./Help.stories-B6G2DeZG.js";import u from"./RadioButton.stories-S7Dx7Spz.js";import{RadioPanel as g}from"./RadioPanel.stories-CG56HpT0.js";import{F as h}from"./FieldGroup-CPIEUxt_.js";import{C as b}from"./Checkbox-DKyvrDeR.js";import{R as x}from"./RadioPanel-5QBEO1Do.js";import{H as C}from"./Help-Cjqxgp4O.js";import{R as G}from"./RadioButton--c12g6Pe.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-C_ISMLjQ.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-iDHV6cIw.js";import"./SlotComponent-CHZnwKbs.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-vTmhnsgQ.js";import"./usePreviousValue-Bx95nfmJ.js";import"./Loader-H3TPwpIK.js";import"./useDelayedRender-CRSlmVRM.js";import"./useId-fOUMNC4C.js";import"./Label-BEfDrIOP.js";import"./SupportLabel-CN7ZwRcn.js";import"./SuccessIcon-0CYOASSJ.js";import"./Icon-SJKI77PC.js";import"./WarningIcon-BDVzu6Om.js";import"./BaseRadioButton.stories-CDGs74hV.js";import"./BaseRadioButton-htMzvGUI.js";import"./Title-Cujm_wwT.js";import"./Card-DLHrSDP7.js";import"./Text-ByMZyBUX.js";import"./Tag-DY93ecD4.js";import"./ExpandablePanel-ClDgqCNi.js";import"./useAnimatedHeightBetween-BWt-sMRB.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-D2lmOAzd.js";import"./Expander-D12vW2n_.js";import"./ChevronUpIcon-UytMpTd2.js";import"./ListItem-0INuajyw.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
