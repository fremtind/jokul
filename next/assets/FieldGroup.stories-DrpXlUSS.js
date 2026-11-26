import{r as p,j as s}from"./iframe-BwGIRt3I.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-BYSmIwTU.js";import{CheckboxStory as c}from"./Checkbox.stories-Bo-nqzCo.js";import k from"./Help.stories-DyKU81OD.js";import u from"./RadioButton.stories-BkjhL2O7.js";import{RadioPanel as g}from"./RadioPanel.stories-BLZdHMN3.js";import{F as h}from"./FieldGroup-B8Lqu3eW.js";import{C as b}from"./Checkbox-DwnnLIz1.js";import{R as x}from"./RadioPanel-BWs458yk.js";import{H as C}from"./Help-J9C8-jXa.js";import{R as G}from"./RadioButton-CsI0Y1CV.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-xBjU_FWS.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-DnIxf5sH.js";import"./SlotComponent-BEHZmZlc.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-DV3DAWFY.js";import"./usePreviousValue-ChSKhBHa.js";import"./Loader-DdH418kD.js";import"./useDelayedRender-BKZhsfyh.js";import"./useId-GHPEswet.js";import"./Label-BBfDLdTg.js";import"./SupportLabel-D_LZBgva.js";import"./SuccessIcon-Crpf0IIT.js";import"./Icon-CtGxRi6e.js";import"./WarningIcon-Bsbaw1Rl.js";import"./BaseRadioButton.stories-BV18k8gU.js";import"./BaseRadioButton-BHo52vwx.js";import"./Title-CEWq56Sm.js";import"./Card-2paeArkk.js";import"./Text-BHGtvqUr.js";import"./Tag-BClAb_Uj.js";import"./ExpandablePanel-DnPJtj3m.js";import"./useAnimatedHeightBetween-D9NcBF8X.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B7Z07mI-.js";import"./Expander-G_JLDmC6.js";import"./ChevronDownIcon-DqhNzHLP.js";import"./ChevronUpIcon-Dgd9Eow1.js";import"./ListItem-CzC8hrpU.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
