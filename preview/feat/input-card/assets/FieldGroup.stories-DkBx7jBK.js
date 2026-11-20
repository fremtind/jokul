import{r as p,j as s}from"./iframe-DGzoP9xN.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-D_Fq-dBQ.js";import{CheckboxStory as c}from"./Checkbox.stories-gZDRnhmp.js";import k from"./Help.stories-DvpTaoua.js";import u from"./RadioButton.stories-Bj1lU6Zk.js";import{RadioPanel as g}from"./RadioPanel.stories-DZikp6QS.js";import{F as h}from"./FieldGroup-DI2ItCF5.js";import{C as b}from"./Checkbox-C6evxJiE.js";import{R as x}from"./RadioPanel-DZkVpin4.js";import{H as C}from"./Help-1zB4z8nW.js";import{R as G}from"./RadioButton-krgZB8sk.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CYgDeLjI.js";import"./clsx-B-dksMZM.js";import"./types-BKcj73j9.js";import"./Flex-CDPN-DXZ.js";import"./SlotComponent-DwO7Fvzw.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-uBTkPMr3.js";import"./usePreviousValue-B_8DoUOK.js";import"./Loader-CuQtaj4r.js";import"./useDelayedRender-BRq4dOxq.js";import"./useId-DFkjgHtz.js";import"./Label-BMsrKJWp.js";import"./SupportLabel-LVzG_y9M.js";import"./SuccessIcon-BF0sRZWI.js";import"./Icon-nqQXXKDC.js";import"./WarningIcon-SGuAICGY.js";import"./BaseRadioButton.stories-CG4POpkc.js";import"./BaseRadioButton-QMEevPss.js";import"./Title-C5zs3o0p.js";import"./Card-BgMVFK3U.js";import"./Text-DpOfxMUU.js";import"./Tag-FEnIDeye.js";import"./ExpandablePanel-CszkXGCm.js";import"./useAnimatedHeightBetween-C86wpdK_.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-smo1BoHT.js";import"./Expander-l8Z-HFGo.js";import"./ChevronUpIcon-CwSNFMys.js";import"./ListItem-CxQ6a9Ky.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
