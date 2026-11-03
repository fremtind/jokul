import{r as p,j as i}from"./iframe-B2R8C3Ik.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-ZS8LrMHL.js";import{CheckboxStory as c}from"./Checkbox.stories-Uuo0KO6H.js";import k from"./Help.stories-BmO-tHFM.js";import u from"./RadioButton.stories-a-lppo65.js";import{RadioPanel as g}from"./RadioPanel.stories-DfZ0-uSu.js";import{F as h}from"./FieldGroup-C2-zaoSk.js";import{C as b}from"./Checkbox-BUc6Qinp.js";import{R as x}from"./RadioPanel-Bc1ZLaht.js";import{H as C}from"./Help-D5sbailU.js";import{R as G}from"./RadioButton-DZE4oUrS.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BdSOXOL9.js";import"./clsx-B-dksMZM.js";import"./Flex-CXuAh9hw.js";import"./SlotComponent-BOTTEhuy.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C7_-gvQz.js";import"./usePreviousValue-BP1zdgUw.js";import"./Loader-ktAw6nNP.js";import"./useDelayedRender-oTj-W_Mh.js";import"./useId-BfC7JJtM.js";import"./Label-BQQ1yXWs.js";import"./SupportLabel-8LfaWPXx.js";import"./SuccessIcon-Bjwo7T2S.js";import"./Icon-DGqUnbzy.js";import"./WarningIcon-BrprB8mS.js";import"./BaseRadioButton.stories-Dg1XELST.js";import"./BaseRadioButton-BbJLXP83.js";import"./Title-D0PBisr7.js";import"./Card-BLpCHAEi.js";import"./Text-HAKLbDP8.js";import"./Tag-ShCabwHu.js";import"./ExpandablePanel-BENNglrH.js";import"./useAnimatedHeightBetween-Bb8GN3ok.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CkChojHy.js";import"./Expander-CkEKwjE5.js";import"./ChevronUpIcon-Ck0k39Xc.js";import"./ListItem-TkGYl6Bk.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
