import{j as r}from"./iframe-WXql0yr-.js";import{H as o}from"./Help-CF_-O0e-.js";import"./Help.stories-C31Y7yvN.js";import{A as c,m as d}from"./Autosuggest.stories-CQSnWQcS.js";import g,{ComboboxStory as x}from"./Combobox.stories-MYcl9XmU.js";import H from"./FieldGroup.stories-CvUuiDyD.js";import b from"./InputGroup.stories--dlDWg_0.js";import S from"./select.stories-BeRfmDH8.js";import j from"./TextArea.stories-CxHjjPm_.js";import{C as f}from"./Combobox-D-_2OJaq.js";import{D as I}from"./DateInput-DeE0EuIP.js";import{F as T}from"./FieldGroup-CcHen7k1.js";import{I as G}from"./InputGroup-Ce5LOyVF.js";import{S as A}from"./Search-DKDLneny.js";import{S as h}from"./Select-mg1UeGPb.js";import{T as v}from"./TextArea-BSf4Z39D.js";import{T as C}from"./TextInput-xzSms7wU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-f7TxltMM.js";import"./Button-DwrG6tNE.js";import"./usePreviousValue-CTxPCBRR.js";import"./Loader-XgMfbvf_.js";import"./useDelayedRender-B7OLYskV.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-B1unaClP.js";import"./IconButton-m8GRQMqx.js";import"./CloseIcon-pYb9KGE4.js";import"./SearchIcon-B2TPDZuo.js";import"./PopupTip-X3jzvbIs.js";import"./QuestionIcon-B5fFb7KE.js";import"./TooltipTrigger-0HejAVVG.js";import"./floating-ui.react-CpYG_1iY.js";import"./index-B7B74vXT.js";import"./index-B6DWpv_b.js";import"./TooltipContent-X5Bj5F25.js";import"./useBrowserPreferences-DQDaO5cm.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-4F3WDS_y.js";import"./Checkbox-oZXdwj84.js";import"./RadioButton.stories-lQ3grzVf.js";import"./RadioButton-B4CN9Fd6.js";import"./SupportLabel-BJyxK84m.js";import"./SuccessIcon-CYOyWzav.js";import"./WarningIcon-xvstraac.js";import"./BaseRadioButton-B0G6FwpZ.js";import"./BaseRadioButton.stories-bFY4wl_m.js";import"./CheckboxPanel.stories-CG1U2vXQ.js";import"./InputPanel-BCYYyPyS.js";import"./Flex-DrRVL5BK.js";import"./SlotComponent-CkEfO3Oj.js";import"./mergeRefs-DQc1Xav2.js";import"./RadioPanel.stories-3pPhiZVu.js";import"./RadioPanel-BK9VMfrU.js";import"./Title-Cp3cgY5b.js";import"./Card-BI6ijaDt.js";import"./Text-Ci37VhlD.js";import"./Tag-BkqxlcGw.js";import"./ExpandablePanel-CCMIuGGM.js";import"./useAnimatedHeightBetween-2iB2-sxt.js";import"./tokens-CW-NfdIE.js";import"./Expander-fCdSXwpj.js";import"./ChevronUpIcon-B5oHB-7w.js";import"./ListItem-4zibw2FT.js";import"./BaseTextInput-Df40XUXw.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-JVsZfAVE.js";import"./index.esm-BagJAYb6.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DEpIMfGa.js";import"./useListNavigation-C8MCJ-Wp.js";import"./Chip-Og1l4VVe.js";import"./CheckIcon-DBOTB8b0.js";import"./ArrowVerticalAnimated-Bxvh-eSs.js";import"./ArrowDownIcon-DdcGQwPl.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-ByeRuF_x.js";import"./TableCaption-CFRwqZfi.js";import"./tableContext-CYMJYbBd.js";import"./CalendarIcon-BVgXs5dk.js";import"./Label-BwbLkrUU.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
