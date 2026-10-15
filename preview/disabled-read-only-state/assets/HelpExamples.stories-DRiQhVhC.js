import{j as r}from"./iframe-zpIsUMYL.js";import{H as o}from"./Help-CANkJa_U.js";import"./Help.stories-BD9Y4MG5.js";import{A as c,m as d}from"./Autosuggest.stories-LFQ3wM96.js";import g,{ComboboxStory as x}from"./Combobox.stories-DmOrCLA7.js";import H from"./FieldGroup.stories-Dr_0grEn.js";import b from"./InputGroup.stories-DtofYNG7.js";import S from"./select.stories-F3v52fQe.js";import j from"./TextArea.stories-6O4ZJbrX.js";import{C as f}from"./Combobox-DSUAwctX.js";import{D as I}from"./DateInput-DZLiwU17.js";import{F as T}from"./FieldGroup-DEBJTo3H.js";import{I as G}from"./InputGroup-10PImMO5.js";import{S as A}from"./Search-BOJ4AxnW.js";import{S as h}from"./Select-BB6T1U2X.js";import{T as v}from"./TextArea-rhq8IgTD.js";import{T as C}from"./TextInput-Do4-4LkZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DhWlKq84.js";import"./Button-CkyzHkqu.js";import"./usePreviousValue-D0qsaQ1K.js";import"./Loader-BIWB7Xr8.js";import"./useDelayedRender-CfgF7us7.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DxELmYub.js";import"./IconButton-D_HHwSPU.js";import"./CloseIcon-D4B9m4LH.js";import"./SearchIcon-DMmpi07A.js";import"./PopupTip-B7E-U2tw.js";import"./QuestionIcon-DQ_QzJR2.js";import"./TooltipTrigger-BmgnyKzA.js";import"./floating-ui.react-Dmuxbk7-.js";import"./index-BmTFNVTr.js";import"./index-D5DBDYDB.js";import"./TooltipContent-COXJZCUb.js";import"./useBrowserPreferences-CC5_eeAJ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CjcO6H9y.js";import"./CheckboxPanel-e5iE8oJ2.js";import"./InputPanel-BqE_X7Jx.js";import"./Checkbox-DbBrlpJ7.js";import"./RadioButton-C9NdeOeD.js";import"./SupportLabel-dfQt5yi0.js";import"./SuccessIcon-CJuqG36J.js";import"./WarningIcon-BZW7TVg4.js";import"./BaseRadioButton-mJi_EkXC.js";import"./Flex-CZ44juCk.js";import"./SlotComponent-BvyvmNvi.js";import"./mergeRefs-C5B2LNbB.js";import"./Checkbox.stories-Z7XaQw1_.js";import"./RadioButton.stories-O26uMlwI.js";import"./BaseRadioButton.stories-Cb8qIN5u.js";import"./RadioPanel.stories-Du2tzG-c.js";import"./RadioPanel-CHxnbLBo.js";import"./Title-QFywjyFi.js";import"./Card-DSRF0S2C.js";import"./Text--ItatX3e.js";import"./Tag-DVPUbmgA.js";import"./ExpandablePanel-BENunNWB.js";import"./useAnimatedHeightBetween-Bz38v7IZ.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BxJcTuOJ.js";import"./ChevronUpIcon-DzsyB7zN.js";import"./ListItem-yIz4zSE6.js";import"./BaseTextInput-PSnVMgCJ.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-g4PcaGIu.js";import"./index.esm-Doa2A3kV.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-D3htIO2I.js";import"./useListNavigation-DHEqhOT0.js";import"./Chip-BiWHk3km.js";import"./CheckIcon-OPgZAgvx.js";import"./ArrowVerticalAnimated-CtPFmHjt.js";import"./ArrowDownIcon-jb1wvMDi.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-4oNbg31K.js";import"./TableCaption-rIER8hBe.js";import"./tableContext-DQuslMsQ.js";import"./CalendarIcon-qrRG4JuT.js";import"./Label-CdX-08tO.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Date Input",
  render: args => {
    return <DateInput label={"Navn"} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};
