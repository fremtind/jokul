import{r as p,j as i}from"./iframe-EVh4-ZHk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-CxiH-i3l.js";import{CheckboxStory as c}from"./Checkbox.stories-Dmyr1Otg.js";import k from"./Help.stories-B7Le6onT.js";import u from"./RadioButton.stories-DxwCzXbF.js";import{RadioPanel as g}from"./RadioPanel.stories-BYP0rVKp.js";import{F as h}from"./FieldGroup-BPFWzxEg.js";import{C as b}from"./Checkbox-BY-DESF9.js";import{R as x}from"./RadioPanel-DS5AZFxA.js";import{H as C}from"./Help-CMKo7DsX.js";import{R as G}from"./RadioButton-DGQCbda_.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-ByZvzZmy.js";import"./clsx-B-dksMZM.js";import"./Flex-DXb8rWx3.js";import"./SlotComponent-DJYhcZUo.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-ByYzbC9E.js";import"./usePreviousValue-Cp_mu6-R.js";import"./Loader-ztf0LKe9.js";import"./useDelayedRender-Bw2Qy-QB.js";import"./useId-DZLyYaK3.js";import"./Label-DbmPu22I.js";import"./SupportLabel-Ba7pFx6B.js";import"./SuccessIcon-BpWO4-kD.js";import"./Icon-a17Csy1w.js";import"./WarningIcon-CtoiD3ZC.js";import"./BaseRadioButton.stories-BtI89Bzs.js";import"./BaseRadioButton-N-0eLEah.js";import"./Title-DndGOtSG.js";import"./Card-C6FlzWWL.js";import"./Text-CwKxdbxn.js";import"./Tag-MWYUgtL5.js";import"./ExpandablePanel-C8Q29xDX.js";import"./useAnimatedHeightBetween-Bk81xQIn.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-JLi2XxlI.js";import"./Expander-D6Ihz1d_.js";import"./ChevronUpIcon-DqrmR258.js";import"./ListItem-Dki-L-Bd.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
