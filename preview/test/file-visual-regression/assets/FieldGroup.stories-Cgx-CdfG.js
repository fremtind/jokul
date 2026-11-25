import{r as p,j as s}from"./iframe-O4jgmset.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-4TngMrUr.js";import{CheckboxStory as c}from"./Checkbox.stories-RH1Hm-tC.js";import k from"./Help.stories-DggxxAYn.js";import u from"./RadioButton.stories-D4hGEg_X.js";import{RadioPanel as g}from"./RadioPanel.stories-BRSFUqvi.js";import{F as h}from"./FieldGroup-B0ZjaiJu.js";import{C as b}from"./Checkbox-DFPYBjQj.js";import{R as x}from"./RadioPanel-T-LkCMM_.js";import{H as C}from"./Help-o253AEn2.js";import{R as G}from"./RadioButton-B9BM_zaa.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-B1pzc-gr.js";import"./clsx-B-dksMZM.js";import"./types-BlFGa32c.js";import"./Flex-cB1MYXdH.js";import"./SlotComponent-DwhRj1-v.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-C_hn5yQo.js";import"./usePreviousValue-gNi9nxdc.js";import"./Loader-Dv_cNh0N.js";import"./useDelayedRender-Dq8fPMrI.js";import"./useId-BusKTqlk.js";import"./Label-ztcw5_bs.js";import"./SupportLabel-DEA7PnAs.js";import"./SuccessIcon-DvJN_ROj.js";import"./Icon-DkYVLPkK.js";import"./WarningIcon-DlBNefxy.js";import"./BaseRadioButton.stories-DiUjVP7j.js";import"./BaseRadioButton-BL2nzumB.js";import"./Title-Xh2VkiMH.js";import"./Card-C_wFZTa4.js";import"./Text-Cha6z734.js";import"./Tag-4qUzHuaZ.js";import"./ExpandablePanel-0XPsxu4M.js";import"./useAnimatedHeightBetween-XYmcHEnI.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DqubsYwW.js";import"./Expander-B9A_O7Cb.js";import"./ChevronDownIcon-CR97iF7Z.js";import"./ChevronUpIcon-gjdLpsIc.js";import"./ListItem-BB5FtmnO.js";const le={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:i.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:i.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:s.jsx(C,{...k.args})}},de=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
