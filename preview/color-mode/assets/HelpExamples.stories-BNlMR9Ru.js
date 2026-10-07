import{j as r}from"./iframe-DUChWzSY.js";import{H as o}from"./Help-Xj3YE0a5.js";import"./Help.stories-BsROM--1.js";import{A as c,m as d}from"./Autosuggest.stories-B0aFUZT7.js";import g,{ComboboxStory as x}from"./Combobox.stories-a-rTw8ch.js";import H from"./FieldGroup.stories-DXShUHhf.js";import b from"./InputGroup.stories-o_exuvor.js";import S from"./select.stories-CyO1bkgs.js";import j from"./TextArea.stories-Dj7cmqT3.js";import{C as f}from"./Combobox-DfiBOPo_.js";import{D as I}from"./DateInput-BYahgvkC.js";import{F as T}from"./FieldGroup-CSZCC-vj.js";import{I as G}from"./InputGroup-DwqfyHFi.js";import{S as A}from"./Search-BqVb6h5b.js";import{S as h}from"./Select-D3W3KtJQ.js";import{T as v}from"./TextArea-Cq2oZOce.js";import{T as C}from"./TextInput-CU2u2ayM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CmLcQq9R.js";import"./Button-B2BeHdt4.js";import"./usePreviousValue-TC_il9gX.js";import"./Loader-4i-sn_HJ.js";import"./useDelayedRender-DUtu6wYS.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BK1d0HEG.js";import"./IconButton-FPM02sLR.js";import"./CloseIcon-D8qs2l9U.js";import"./SearchIcon-yk6J56ey.js";import"./PopupTip-BEu-bQqB.js";import"./QuestionIcon-DHMEFVKY.js";import"./TooltipTrigger-CpMGe446.js";import"./floating-ui.react-CFAM-k6k.js";import"./index-CRC9HcwE.js";import"./index-Ia97YcUi.js";import"./TooltipContent-DJXXjoww.js";import"./useBrowserPreferences-C2PI9o7a.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BqjQv2y6.js";import"./InputPanel-Cq9ObEI6.js";import"./Checkbox-DDz-xwmS.js";import"./RadioButton-CZtCwDaD.js";import"./SupportLabel-CNeNC5yH.js";import"./SuccessIcon-BsyFJdVS.js";import"./WarningIcon-Ba9j6T87.js";import"./BaseRadioButton-DN5PUkmP.js";import"./Flex-CF5TD8u1.js";import"./SlotComponent-Cn1sbSXZ.js";import"./mergeRefs-CBMT3meS.js";import"./Checkbox.stories-M8PvEf5M.js";import"./RadioButton.stories-DTNgNhE1.js";import"./BaseRadioButton.stories-DG3jN8v8.js";import"./RadioPanel.stories-Z11H4AXE.js";import"./RadioPanel-C5v3C4Qo.js";import"./Title-BtftFppl.js";import"./Card-8yNV5p8x.js";import"./Text-C4RjgscP.js";import"./Tag-CEl8CzPV.js";import"./ExpandablePanel-BT6YtHGQ.js";import"./useAnimatedHeightBetween-byNNkqdJ.js";import"./tokens-HKQN8Vn-.js";import"./Expander-B_aQ2iQR.js";import"./ChevronUpIcon-CcvbZ6-w.js";import"./ListItem-DBlAEdBA.js";import"./BaseTextInput-C781Ebfp.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Cka7IDXr.js";import"./index.esm-DzGkTFar.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CFE_QJ_Z.js";import"./useListNavigation-DoKjUkhu.js";import"./Chip-DWu_nI3K.js";import"./CheckIcon-BPimLczO.js";import"./ArrowVerticalAnimated-DRR5fjEt.js";import"./ArrowDownIcon-CDhcXGz6.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CkvFIGNa.js";import"./TableCaption-CzEkRYhw.js";import"./tableContext-K0B-E6Rk.js";import"./CalendarIcon-DINs4qJl.js";import"./Label-DewuWoLp.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
