import{j as r}from"./iframe-D25vO16l.js";import{H as t}from"./Help-LOegnvpX.js";import"./Help.stories-IwCTug8v.js";import{A as c,m as d}from"./Autosuggest.stories-7vRT5YvN.js";import g,{ComboboxStory as x}from"./Combobox.stories-D9oRbxCV.js";import S from"./FieldGroup.stories-BSYzy6-7.js";import H from"./InputGroup.stories-Cq5XwJqT.js";import b,{SelectStory as j}from"./select.stories-BuxzS-og.js";import f from"./TextArea.stories-DwGyXCz1.js";import{C as I}from"./Combobox-BDmH1YwF.js";import{D as T}from"./DateInput-C1n80c_6.js";import{F as G}from"./FieldGroup-d8Q1y-wt.js";import{I as A}from"./InputGroup-DySU3y9F.js";import{S as h}from"./Search-CUrkYVwW.js";import{S as v}from"./Select-CsoXilIa.js";import{T as C}from"./TextArea-DnnlLZnA.js";import{T as F}from"./TextInput-BsjBI28U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BZ6ETrRV.js";import"./Button-CLDXpBU1.js";import"./usePreviousValue-Cl6pSe9X.js";import"./Loader-DAzRxjOP.js";import"./useDelayedRender-a9c0iuDc.js";import"./index-Chjiymov.js";import"./useId-BU4_SoFw.js";import"./IconButton-Ca9OnK6W.js";import"./CloseIcon-C6m5RFTz.js";import"./SearchIcon-hTK-EA_U.js";import"./PopupTip-Ime_tZhn.js";import"./QuestionIcon-Ce44YktL.js";import"./TooltipTrigger-DNc0DP5V.js";import"./floating-ui.react-DgjS8Z2A.js";import"./index-Djn7kxY1.js";import"./index-BYAE5ROL.js";import"./TooltipContent-DIMHczdK.js";import"./useBrowserPreferences-hVTWbpKi.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-BYxxDS2O.js";import"./Checkbox-CErm9c6F.js";import"./RadioButton.stories-2Zpgcs3-.js";import"./RadioButton-Dae3G4cp.js";import"./SupportLabel-LNZhCInP.js";import"./SuccessIcon-DoNkeGsh.js";import"./WarningIcon-CKMdT3HT.js";import"./BaseRadioButton-tOer9J5G.js";import"./BaseRadioButton.stories-aHoQBcV0.js";import"./CheckboxPanel.stories-BzY2clgN.js";import"./InputPanel-CFgZLIWN.js";import"./Flex-Cayt6U-M.js";import"./SlotComponent-DR8aVp7r.js";import"./mergeRefs-CqBDJLQM.js";import"./RadioPanel.stories-C8bOCYZN.js";import"./RadioPanel-eGGV0RWk.js";import"./Title-DQaAfAwq.js";import"./Card-DSoJZR6R.js";import"./Text-BJHUvpXa.js";import"./Tag-oxyLwPpQ.js";import"./ExpandablePanel-BNeOXGtT.js";import"./useAnimatedHeightBetween-chPx9p_A.js";import"./tokens-CW-NfdIE.js";import"./Expander-CmsFOFo5.js";import"./ChevronUpIcon-ERWXgWJe.js";import"./ListItem-CwK5JyQt.js";import"./BaseTextInput-BUADZ6n9.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DeznnD0f.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-D0zGBStB.js";import"./useListNavigation-nHN4CeI2.js";import"./Chip-DWcfhd0C.js";import"./CheckIcon-CqF5Uti0.js";import"./ArrowVerticalAnimated-qPgAIete.js";import"./ArrowDownIcon-C7cgxFLs.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-N79obgrN.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-Doh3Oiw_.js";import"./TableCaption-LJn-BKxI.js";import"./tableContext-8wDApifY.js";import"./CalendarIcon-BWEsRqHa.js";import"./Label-BQyeSw3U.js";import"./Popover-4F555a0d.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <Select {...SelectStories.args} {...SelectStory.args} name="select" label="Hva jobber du som?" items={[]} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};const ue=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,o as HelpTextInput,ue as __namedExportsOrder,le as default};
