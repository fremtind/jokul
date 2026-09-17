import{j as r}from"./iframe-Df0WoxEb.js";import{H as o}from"./Help-DGzixLNu.js";import"./Help.stories-DxS-6ci8.js";import{A as c,m as d}from"./Autosuggest.stories-CsckzImQ.js";import g,{ComboboxStory as x}from"./Combobox.stories-DbHk98fG.js";import H from"./FieldGroup.stories-CfAuElnT.js";import b from"./InputGroup.stories-CpS_spmY.js";import S from"./select.stories-CVz8gQw1.js";import j from"./TextArea.stories-DFrLxsM-.js";import{C as f}from"./Combobox-CjDj0HxM.js";import{D as I}from"./DateInput-FQwODbm-.js";import{F as T}from"./FieldGroup-CjFYQJNn.js";import{I as G}from"./InputGroup-D8F-B5tc.js";import{S as A}from"./Search-cP1knwwE.js";import{S as h}from"./Select-BVIbufyr.js";import{T as v}from"./TextArea-Du3O816y.js";import{T as C}from"./TextInput-BkGHi_cn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C7AKMIm4.js";import"./Button-C3XdJwD6.js";import"./usePreviousValue-CUdtqOlY.js";import"./Loader-DMUjPhkT.js";import"./useDelayedRender-Da8iRlsE.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DouWwT9e.js";import"./IconButton-CyjlzSa2.js";import"./CloseIcon-DZaDNWIX.js";import"./SearchIcon-lz8qJcdR.js";import"./PopupTip-BxjXv5w3.js";import"./QuestionIcon-DYd92T2F.js";import"./TooltipTrigger-DlGG8d0C.js";import"./floating-ui.react-B0TnbJS8.js";import"./index-DNCgf8h8.js";import"./index-Dnz7pLwV.js";import"./TooltipContent-Yl2SZgP-.js";import"./useBrowserPreferences-DW1c7grk.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BoSCnPVT.js";import"./InputPanel-D3r2jRgG.js";import"./Checkbox-kRRdEf64.js";import"./RadioButton-MmrseKlZ.js";import"./SupportLabel-aAzmmvy1.js";import"./SuccessIcon-CmRMfRMs.js";import"./WarningIcon-D53WkteZ.js";import"./BaseRadioButton-D098ZuID.js";import"./Flex-Ddk7vrj4.js";import"./SlotComponent-DaN2v_Um.js";import"./mergeRefs-BF6_YvgP.js";import"./Checkbox.stories-CyAvyVmA.js";import"./RadioButton.stories-C9t9tkSX.js";import"./BaseRadioButton.stories-vdEj8po8.js";import"./RadioPanel.stories-D9TDYgAI.js";import"./RadioPanel-CH5i8nwI.js";import"./Title-DbYHWZ_0.js";import"./Card-D8VNY2MZ.js";import"./Text-D2iNMRX9.js";import"./Tag-CvsJsetP.js";import"./ExpandablePanel-CujHTdRM.js";import"./useAnimatedHeightBetween-DuYh-1V1.js";import"./tokens-HKQN8Vn-.js";import"./Expander-hVJfsNRn.js";import"./ChevronUpIcon-CUlLpflj.js";import"./ListItem-C_XnsHWd.js";import"./BaseTextInput-Cm-8ilpf.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-55uNFzIg.js";import"./index.esm-CEqJAH5h.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-eyPI1r8K.js";import"./useListNavigation-8EoTtz9_.js";import"./Chip-DcX2wZLg.js";import"./CheckIcon-g6wRWCgI.js";import"./ArrowVerticalAnimated-h5DQbx7P.js";import"./ArrowDownIcon-DggBF8VO.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-C3wS3QbM.js";import"./TableCaption-BRLi5M7h.js";import"./tableContext-DzuQ73dk.js";import"./CalendarIcon-Dx_cjV-O.js";import"./Label-QC-494Ye.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
