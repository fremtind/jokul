import{j as r}from"./iframe-CHf12XfP.js";import{H as o}from"./Help-B7_emSJN.js";import"./Help.stories-DPab9w92.js";import{A as c,m as d}from"./Autosuggest.stories-DXU7UMrX.js";import g,{ComboboxStory as x}from"./Combobox.stories-oSrQPVoW.js";import H from"./FieldGroup.stories-BN2CzzJ0.js";import b from"./InputGroup.stories-DFbBIzR3.js";import S from"./select.stories-ir1x5XaC.js";import j from"./TextArea.stories-jpYabn_V.js";import{C as f}from"./Combobox-CuGPLWda.js";import{D as T}from"./DatePicker-DLvSSff_.js";import{F as k}from"./FieldGroup-D3AQ3QSd.js";import{I as G}from"./InputGroup-DuShokcC.js";import{S as I}from"./Search-Dw75L0Ke.js";import{S as A}from"./Select-C5W-lvNa.js";import{T as h}from"./TextArea-C0Op_EJO.js";import{T as v}from"./TextInput-D7WNj2iU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DVa1JWUW.js";import"./Button-DSV0r9UW.js";import"./usePreviousValue-DyeAyLsO.js";import"./Loader-Dr-JXS95.js";import"./useDelayedRender-CD2OmAOd.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BVFiF4SG.js";import"./IconButton-CL3TgXVn.js";import"./CloseIcon-nHr1ZxPp.js";import"./SearchIcon-BNkEQU49.js";import"./PopupTip-B2vYb-6M.js";import"./QuestionIcon-CILqkwfa.js";import"./TooltipTrigger-C1zKG_PV.js";import"./floating-ui.react-CoSrrMLI.js";import"./index-Cr0dHAr1.js";import"./index-rVT8Yn93.js";import"./TooltipContent-D9kYqz6P.js";import"./useBrowserPreferences-CyI1G-cr.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-CuqU_ZtM.js";import"./Checkbox-I7UDFvrM.js";import"./RadioButton.stories-C4jE6izT.js";import"./RadioButton-DUUoHgSL.js";import"./SupportLabel-Ce1x4-jy.js";import"./SuccessIcon-BpIC86U3.js";import"./WarningIcon-_8OXw8sw.js";import"./BaseRadioButton-E0E1RkkB.js";import"./BaseRadioButton.stories-MmRxHKlH.js";import"./CheckboxPanel.stories-sehVWW2D.js";import"./InputPanel-CUwUZdAa.js";import"./Flex-Blj6Fu3J.js";import"./SlotComponent-BQ1Z-J2J.js";import"./mergeRefs-LxvLBkOE.js";import"./RadioPanel.stories-BOd5Yavl.js";import"./RadioPanel-DFOC-cas.js";import"./Title-PCyUj0t9.js";import"./Card-Cc2JNyd0.js";import"./Text-EbEDjkGm.js";import"./Tag-DPm-wAYD.js";import"./ExpandablePanel-CkFMcuio.js";import"./useAnimatedHeightBetween-BtnFy2em.js";import"./tokens-CW-NfdIE.js";import"./Expander-DmAP5riX.js";import"./ChevronDownIcon-BgrgO3eZ.js";import"./ChevronUpIcon-Ch8_zhcI.js";import"./ListItem-GzeDxH3s.js";import"./BaseTextInput-BDaE0ZUH.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D7VOAhmR.js";import"./cow-CdXr5BwN.js";/* empty css               */import"./index.esm-DhkVWA8C.js";/* empty css               */import"./useAnimatedHeight-B7V1Nw9I.js";import"./useListNavigation-BHHqtXPJ.js";import"./Chip-COryQE6b.js";import"./CheckIcon-CPodCilz.js";import"./ArrowVerticalAnimated-DOkgYeN6.js";import"./ArrowDownIcon-CXMzIuL1.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-Ce0u6mo0.js";import"./Popover-D7HAMwlO.js";import"./ArrowRightIcon-B65EL7h7.js";import"./Label-CbeJTgVG.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(v,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(h,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(I,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(A,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(k,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Date Picker",
  render: args => {
    return <DatePicker label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Combobox",
  render: args => {
    return <Combobox {...ComboboxStories.args} {...ComboboxStory.args} width="300px" tooltip={<Help {...args} />} />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Text area",
  render: args => {
    return <TextArea {...TextAreaStories.args} tooltip={<Help {...args} />} />;
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Search",
  render: args => {
    return <Search labelProps={{
      srOnly: false
    }} tooltip={<Help {...args} />} />;
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Select",
  render: args => {
    return <Select name="select" label="Hva jobber du som?" items={[]} {...SelectStories.args} tooltip={<Help {...args} />} />;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Autosuggest",
  render: args => {
    return <Autosuggest {...AutosuggestStories.args} tooltip={<Help {...args} />} />;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Input Group",
  render: args => {
    return <InputGroup {...InputGroupStories.args} label="Fødselsnummer" tooltip={<Help {...args} />} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Field Group",
  render: args => {
    return <FieldGroup {...FieldGroupStories.args} legend="Hvordan kan vi kontakte deg?" tooltip={<Help {...args} />} />;
  }
}`,...u.parameters?.docs?.source}}};const ne=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDatePicker,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ne as __namedExportsOrder,me as default};
