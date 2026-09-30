import{j as r}from"./iframe-BXWrlVlI.js";import{H as o}from"./Help-DzQpHB5g.js";import"./Help.stories-DAybzIW-.js";import{A as c,m as d}from"./Autosuggest.stories-CIJpP-sJ.js";import g,{ComboboxStory as x}from"./Combobox.stories-TdFsJ2mV.js";import H from"./FieldGroup.stories-BnQ570Ac.js";import b from"./InputGroup.stories-CqXtx50s.js";import S from"./select.stories-BX0XOwx0.js";import j from"./TextArea.stories-BUVlGJxY.js";import{C as f}from"./Combobox-Dz4egspF.js";import{D as I}from"./DateInput-DS1Ub5qm.js";import{F as T}from"./FieldGroup-CEx9vRwZ.js";import{I as G}from"./InputGroup-BXF5qIlw.js";import{S as A}from"./Search-b6dtejoP.js";import{S as h}from"./Select-BmrYwvWX.js";import{T as v}from"./TextArea-DK-PN0qg.js";import{T as C}from"./TextInput-Pw5pEozk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DdhlFq55.js";import"./Button-CdmiKSHU.js";import"./usePreviousValue-C9cpV-hp.js";import"./Loader-BjHzknqX.js";import"./useDelayedRender-hhGyoOGj.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CQmYeihF.js";import"./IconButton-HUmvEh79.js";import"./CloseIcon-CjFhN1AN.js";import"./SearchIcon-I6C2AvY2.js";import"./PopupTip-edUHjJeT.js";import"./QuestionIcon-BskO5_E7.js";import"./TooltipTrigger-BHH-tv9Y.js";import"./floating-ui.react-CJ79Nyl7.js";import"./index-Cb0vKrjN.js";import"./index-DzQkHBqd.js";import"./TooltipContent-DWN8ksgV.js";import"./useBrowserPreferences-DE4ceQyO.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BBRhn_Mf.js";import"./InputPanel-Bpc5Q00U.js";import"./Checkbox-BpLTfxIo.js";import"./RadioButton-Bhu5MR6i.js";import"./SupportLabel-BM7QAHSH.js";import"./SuccessIcon-CJlBFfAi.js";import"./WarningIcon-DMWtTbxl.js";import"./BaseRadioButton--wr1ltmr.js";import"./Flex-CuMd-ZBK.js";import"./SlotComponent-Bc9XaC7c.js";import"./mergeRefs-D6Xijx8p.js";import"./Checkbox.stories-DYoRMBDo.js";import"./RadioButton.stories-CnT0NV9t.js";import"./BaseRadioButton.stories-LlhY7e2g.js";import"./RadioPanel.stories-DDv8_apS.js";import"./RadioPanel-Cg5czlaX.js";import"./Title-mKO6QM0N.js";import"./Card-DQTLaggN.js";import"./Text-B6c7zLWJ.js";import"./Tag-BecjAfOR.js";import"./ExpandablePanel-C4_-aTyM.js";import"./useAnimatedHeightBetween-C6U68zC9.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DIgMqfMm.js";import"./ChevronUpIcon-VvC_Ip9l.js";import"./ListItem-Q1tgHug_.js";import"./BaseTextInput-CglvrNfC.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-akGDr7sY.js";import"./index.esm-DvBAotet.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DI8CI1Su.js";import"./useListNavigation-DkpshF0h.js";import"./Chip-mzJiPgcP.js";import"./CheckIcon-THE1w3av.js";import"./ArrowVerticalAnimated-B_0QAFyr.js";import"./ArrowDownIcon-DQUB83og.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CQ-v5epO.js";import"./TableCaption-DmSP0R76.js";import"./tableContext-DrflNaql.js";import"./CalendarIcon-CSowuU8h.js";import"./Label-CwnkRybq.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
