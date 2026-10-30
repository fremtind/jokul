import{r as p,j as i}from"./iframe-DpX2Qt8H.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-DCGdQ68A.js";import{CheckboxStory as c}from"./Checkbox.stories-DNVHwJVO.js";import k from"./Help.stories-dFei22rW.js";import u from"./RadioButton.stories-kX1qnOeb.js";import{RadioPanel as g}from"./RadioPanel.stories-C2woaGTU.js";import{F as h}from"./FieldGroup-D7DLNgyr.js";import{C as b}from"./Checkbox-BXS7helN.js";import{R as x}from"./RadioPanel-CJVCSgSl.js";import{H as C}from"./Help-Cw7T_l7H.js";import{R as G}from"./RadioButton-C3_Lojva.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-tnV0XzcV.js";import"./clsx-B-dksMZM.js";import"./Flex-CYOJRcyo.js";import"./SlotComponent-1wSQMfiA.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-Ci11EZvI.js";import"./usePreviousValue-LBuqfrZA.js";import"./Loader-DXMN4e6Q.js";import"./useDelayedRender-CHmCzfmU.js";import"./useId-BNZiz7BJ.js";import"./Label-B9YwN9mf.js";import"./SupportLabel-BrNbJtsg.js";import"./SuccessIcon-BGYZp8Y6.js";import"./Icon-B5QPbRc4.js";import"./WarningIcon-NfqbBr7y.js";import"./BaseRadioButton.stories-BYryMupA.js";import"./BaseRadioButton-DUP1Ub-d.js";import"./Title-BPrBsTxi.js";import"./Card-GPkwwck7.js";import"./Text-CQQtr0Fg.js";import"./Tag-sQnAxhiM.js";import"./ExpandablePanel-BSSGRduY.js";import"./useAnimatedHeightBetween-B-G5UX3n.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DFS96dPD.js";import"./Expander-G4X-hAko.js";import"./ChevronUpIcon-BfuXhMyJ.js";import"./ListItem-CBfz7swr.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
