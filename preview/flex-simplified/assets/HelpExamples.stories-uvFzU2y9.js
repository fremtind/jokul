import{j as r}from"./iframe-wvx-g-2V.js";import{H as o}from"./Help-DKrcGnRz.js";import"./Help.stories-CjIVEW8I.js";import{A as c,m as d}from"./Autosuggest.stories-DfogCJrI.js";import g,{ComboboxStory as x}from"./Combobox.stories-CyRfTRtY.js";import H from"./FieldGroup.stories-FHFm-KVP.js";import b from"./InputGroup.stories-V2QKJlRF.js";import S from"./select.stories-DZhVyTak.js";import j from"./TextArea.stories-BT4DLvHf.js";import{C as f}from"./Combobox-BfyT7l_p.js";import{D as I}from"./DateInput-BTQtlqwz.js";import{F as T}from"./FieldGroup-DOZ4lOTy.js";import{I as G}from"./InputGroup-B11dOxHr.js";import{S as A}from"./Search-JIe7ulzd.js";import{S as h}from"./Select-Dy2aoBaj.js";import{T as v}from"./TextArea-DaJvIkZi.js";import{T as C}from"./TextInput-CmBIeb2a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DgFrHBJl.js";import"./Button-CgvcJsGI.js";import"./usePreviousValue-BeG1KQq1.js";import"./Loader-B3sordg9.js";import"./useDelayedRender-Dbc4-Cyt.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Dw6jVryZ.js";import"./IconButton-DlMJt0AR.js";import"./CloseIcon-CCqh5ZUT.js";import"./SearchIcon-PtGK9nLL.js";import"./PopupTip-BrjGi3ru.js";import"./QuestionIcon-Dh3KS43a.js";import"./TooltipTrigger-B57rtye0.js";import"./floating-ui.react-B1VeTiYV.js";import"./index-BupZOjDn.js";import"./index-DuKyoBf1.js";import"./TooltipContent-DyVp56Ch.js";import"./useBrowserPreferences-R__Cd6VD.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-ApvoGiN5.js";import"./InputPanel-BiV8r7mi.js";import"./Checkbox-DgHbqGq7.js";import"./RadioButton-xs3Q9jtY.js";import"./SupportLabel-C3WFf-t9.js";import"./SuccessIcon-CrlzhAVs.js";import"./WarningIcon-CrwdHGeU.js";import"./BaseRadioButton-CHA4wp8i.js";import"./Flex-tyU_G5s2.js";import"./SlotComponent-CUBrCo6X.js";import"./mergeRefs-BbhurGMX.js";import"./Checkbox.stories-DChFEtXa.js";import"./RadioButton.stories-Dahm4o4g.js";import"./BaseRadioButton.stories-BRL8jkdH.js";import"./RadioPanel.stories-DbBW0Gws.js";import"./RadioPanel-B1oLcOG4.js";import"./Title-zwPjz-KD.js";import"./Card-ByjLVOdn.js";import"./Text-DyaVk3pq.js";import"./Tag-CCQzNMc1.js";import"./ExpandablePanel-RgeTXL3l.js";import"./useAnimatedHeightBetween-DZYS4Dkg.js";import"./tokens-HKQN8Vn-.js";import"./Expander-c36Onlhj.js";import"./ChevronUpIcon-ZiUckB6m.js";import"./ListItem-z1P9W5Bd.js";import"./BaseTextInput-yV5SsQZZ.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CsOdn0B4.js";import"./index.esm-CAQlf75a.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DRdE3E1s.js";import"./useListNavigation-Cj0ULMNz.js";import"./Chip-CtP8OW5M.js";import"./CheckIcon-Czwi-G_p.js";import"./ArrowVerticalAnimated-IIpYnsVu.js";import"./ArrowDownIcon-BZylKjbe.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-fZrc37Tw.js";import"./TableCaption-ChgmsAa3.js";import"./tableContext-CXcKdx6_.js";import"./CalendarIcon-BqtbHwPQ.js";import"./Label-B5rSYA0u.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
