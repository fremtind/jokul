import{r as p,j as s}from"./iframe-BgSCV_4B.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CqkJ7Dud.js";import{CheckboxStory as c}from"./Checkbox.stories-TwSjDdJu.js";import k from"./Help.stories-DELIgf-n.js";import u from"./RadioButton.stories-BMkR3Yno.js";import{RadioPanel as g}from"./RadioPanel.stories-XymL8cKh.js";import{F as h}from"./FieldGroup-C61oYG_A.js";import{C as b}from"./Checkbox-BFoNFXzW.js";import{R as x}from"./RadioPanel-Dl0bmvdj.js";import{H as C}from"./Help-DtHyu7fx.js";import{R as G}from"./RadioButton-CEwWZQma.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CNaK6N6Y.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-BFLMlXYp.js";import"./SlotComponent-CGgoWe2F.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-CT9EMjNj.js";import"./usePreviousValue-D4TrSTgL.js";import"./Loader-C0__BrJF.js";import"./useDelayedRender-CF6LNHhV.js";import"./useId-Bim-OKN8.js";import"./Label-CHHmjcYg.js";import"./SupportLabel-CslSwDZy.js";import"./SuccessIcon-D4vxle0s.js";import"./Icon-ByeJluuC.js";import"./WarningIcon-BFanwWHe.js";import"./BaseRadioButton.stories-CqNV83YX.js";import"./BaseRadioButton-D1q2BNBc.js";import"./Title-CDrwH5oH.js";import"./Card-BFN_y195.js";import"./Text-BNRy8-6S.js";import"./Tag-EQ3I6DNn.js";import"./ExpandablePanel-DonMIqGt.js";import"./useAnimatedHeightBetween-OrgSjl8p.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CeXECZhL.js";import"./Expander-DxlY65Hl.js";import"./ChevronUpIcon-73qkdf_h.js";import"./ListItem-Bs8oAl7C.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
