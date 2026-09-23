import{j as r}from"./iframe-BNLLeI2Q.js";import{H as o}from"./Help-CjmL34J0.js";import"./Help.stories-B2OWwy3a.js";import{A as c,m as d}from"./Autosuggest.stories-BwhmDLhe.js";import g,{ComboboxStory as x}from"./Combobox.stories-BZFs5Xke.js";import H from"./FieldGroup.stories-RnpiPTx4.js";import b from"./InputGroup.stories-CjcGOMaO.js";import S from"./select.stories-SpVwTxHC.js";import j from"./TextArea.stories-wbn6JJZT.js";import{C as f}from"./Combobox-D8XCYLaq.js";import{D as I}from"./DateInput-Bqfy1vau.js";import{F as T}from"./FieldGroup-CeavsZV-.js";import{I as G}from"./InputGroup-DShWnIxX.js";import{S as A}from"./Search-Bq9mqUvM.js";import{S as h}from"./Select-BxA14m6j.js";import{T as v}from"./TextArea-Dw32-8Z0.js";import{T as C}from"./TextInput-bXQK1sej.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Dd9zFDph.js";import"./Button-BX0Myvzq.js";import"./usePreviousValue-Ds7-Yqad.js";import"./Loader-D1ee-sQn.js";import"./useDelayedRender-gnodWg6M.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-SG3cudKF.js";import"./IconButton-BREa-1mG.js";import"./CloseIcon-CzQhq9Wr.js";import"./SearchIcon-DHd0w7zi.js";import"./PopupTip-QThxOOKP.js";import"./QuestionIcon-Dqbve41m.js";import"./TooltipTrigger-CerbE4Eq.js";import"./floating-ui.react-DoTe784d.js";import"./index-DacmXVvU.js";import"./index-CZPOqLJd.js";import"./TooltipContent-CIKzC3Og.js";import"./useBrowserPreferences-D7dksoA4.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Jy_3yuUw.js";import"./InputPanel-CTdB5QdD.js";import"./Checkbox-DHSu_eQP.js";import"./RadioButton-PlntGqfF.js";import"./SupportLabel-C3Dei40O.js";import"./SuccessIcon-C9bHzhjX.js";import"./WarningIcon-CXzlr4oB.js";import"./BaseRadioButton-BVfXCkmh.js";import"./Flex-D0Jvg7Tq.js";import"./SlotComponent-D8xNZ-21.js";import"./mergeRefs-BEQTiVYf.js";import"./Checkbox.stories-CVt8dBBA.js";import"./RadioButton.stories-Bjgxhy4C.js";import"./BaseRadioButton.stories-BGI5ZfU8.js";import"./RadioPanel.stories-CElP37w3.js";import"./RadioPanel-DUdS_Yha.js";import"./Title-Detw7aFk.js";import"./Card-BG2j7A8n.js";import"./Text-BMAhrNm1.js";import"./Tag-BN_YWV-3.js";import"./ExpandablePanel-C3U0lMF_.js";import"./useAnimatedHeightBetween-q24D2ZkL.js";import"./tokens-HKQN8Vn-.js";import"./Expander-WVr-ckv2.js";import"./ChevronUpIcon-CxL1FfFt.js";import"./ListItem-CYFAg2c3.js";import"./BaseTextInput-Dj5hbb2t.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Ts-Ky5e3.js";import"./index.esm-DbMlwbPm.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DnvQMrRJ.js";import"./useListNavigation-BXdzp5ye.js";import"./Chip-BbVByw6g.js";import"./CheckIcon-CDNHiOgx.js";import"./ArrowVerticalAnimated-DYT68Trs.js";import"./ArrowDownIcon-CrjLE5oR.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DQsumw7I.js";import"./TableCaption-CD9QhUo_.js";import"./tableContext-DptPmMmf.js";import"./CalendarIcon-B_vtrqR9.js";import"./Label-Dtd_t9YQ.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
