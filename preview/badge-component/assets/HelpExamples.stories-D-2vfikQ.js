import{j as r}from"./iframe-B9t7Bhvf.js";import{H as o}from"./Help-BRGhNLjN.js";import"./Help.stories-WYpUoleJ.js";import{A as c,m as d}from"./Autosuggest.stories-9QHyC3g3.js";import g,{ComboboxStory as x}from"./Combobox.stories-BLyTtKLz.js";import H from"./FieldGroup.stories-JhFNPbR3.js";import b from"./InputGroup.stories-BO28LHQn.js";import S from"./select.stories-BFcZjsK3.js";import j from"./TextArea.stories-Cp_w0Cxb.js";import{C as f}from"./Combobox-B64-UaNF.js";import{D as I}from"./DateInput-y8yWBcWz.js";import{F as T}from"./FieldGroup-XXg4kgZ7.js";import{I as G}from"./InputGroup-DZpdc1Og.js";import{S as A}from"./Search-CsLkxdSP.js";import{S as h}from"./Select-_Ca-6IkB.js";import{T as v}from"./TextArea-CkV1D_XZ.js";import{T as C}from"./TextInput-BZxbB9uk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-nVkRfvR3.js";import"./Button-CIuG_DyP.js";import"./usePreviousValue-frJSzea1.js";import"./Loader-HKpL63cn.js";import"./useDelayedRender-n5gDXwGO.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DPsHlg8A.js";import"./IconButton-CmthE9pJ.js";import"./CloseIcon-DAIDCE2B.js";import"./SearchIcon-CO5yLWX6.js";import"./PopupTip-DkhKAvIO.js";import"./QuestionIcon-B6o5i6cR.js";import"./TooltipTrigger-DTq0RqsI.js";import"./floating-ui.react-opHjrpO2.js";import"./index-Y-Vr-Udm.js";import"./index-Di2OzfRS.js";import"./TooltipContent-B9mV_U9A.js";import"./useBrowserPreferences-C4OF_QZZ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-oKB8Z4JZ.js";import"./InputPanel-DhrQsWTM.js";import"./Checkbox-6pLklRc3.js";import"./RadioButton-FDDBIZ9E.js";import"./SupportLabel-CkjAD-AF.js";import"./SuccessIcon-Dg8CLSfn.js";import"./WarningIcon-BsTpSXEd.js";import"./BaseRadioButton-CqmngWXI.js";import"./Flex-CzOInPaH.js";import"./SlotComponent-DZcjTUgQ.js";import"./mergeRefs-DssYOP80.js";import"./Checkbox.stories-CDjRtesK.js";import"./RadioButton.stories-IhzLTJQv.js";import"./BaseRadioButton.stories-ri6LpaTR.js";import"./RadioPanel.stories-CN0ceXGu.js";import"./RadioPanel-JL7iCLy5.js";import"./Title-7xhv_JbT.js";import"./Card-t4iguzZq.js";import"./Text-COskSFJl.js";import"./Tag-PdQ42umT.js";import"./ExpandablePanel-C5zEs77I.js";import"./useAnimatedHeightBetween-Cu0qy5HE.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CKTwiF2O.js";import"./ChevronUpIcon-SUsVkQBk.js";import"./ListItem-B4Og7CBJ.js";import"./BaseTextInput-BABKlqGp.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DA8tMpU1.js";import"./index.esm-hUXI3cfH.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CzxgPpnM.js";import"./useListNavigation-Ccb10R0E.js";import"./Chip-PiGVE5lp.js";import"./CheckIcon-CphpyGO-.js";import"./ArrowVerticalAnimated-BoVeoADL.js";import"./ArrowDownIcon-C5R7r9gn.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-v00vmNt9.js";import"./TableCaption-DYWmy5iL.js";import"./tableContext-BZvhy7cK.js";import"./CalendarIcon-3BFaNC0K.js";import"./Label-DI69Owzo.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ne=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ne as __namedExportsOrder,me as default};
