import{j as r}from"./iframe-B4-Bf8Sf.js";import{H as o}from"./Help-YDkk3Zbn.js";import"./Help.stories-CZTUa_13.js";import{A as c,m as d}from"./Autosuggest.stories-B0P0F6o0.js";import g,{ComboboxStory as x}from"./Combobox.stories-CBTCdj3G.js";import H from"./FieldGroup.stories-Dyvnnyob.js";import b from"./InputGroup.stories-BWs5YF0G.js";import S from"./select.stories-C1TkMy8m.js";import j from"./TextArea.stories-XuBwlw1n.js";import{C as f}from"./Combobox-BN6AP4IG.js";import{D as I}from"./DateInput-BosgW7dF.js";import{F as T}from"./FieldGroup-CVKYtJuU.js";import{I as G}from"./InputGroup-IjnyvaEx.js";import{S as A}from"./Search-BgkUe9-p.js";import{S as h}from"./Select-DJWYYr_O.js";import{T as v}from"./TextArea-Dt8G1_wZ.js";import{T as C}from"./TextInput-CsqeTlQC.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CBlYyegk.js";import"./Button-Bu5k_HCC.js";import"./usePreviousValue-Dxv_9tF8.js";import"./Loader-B2iExmj3.js";import"./useDelayedRender-DuXzXcbJ.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BTla-bcl.js";import"./IconButton-BsOcfSJt.js";import"./CloseIcon-DKvn0_zp.js";import"./SearchIcon-k_RHSX4-.js";import"./PopupTip-NRaMK-6f.js";import"./QuestionIcon-CnpKZTPe.js";import"./TooltipTrigger-DBQ-YMp4.js";import"./floating-ui.react-BQ76GITv.js";import"./index-D6q-_wiw.js";import"./index-pM1tX1vj.js";import"./TooltipContent-D7I4UJnE.js";import"./useBrowserPreferences-BkhfaOl8.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DT5W7D-r.js";import"./InputPanel-HV1RCFBB.js";import"./Checkbox-D9bFTEQj.js";import"./RadioButton-QAojXAFT.js";import"./SupportLabel-uyVkHLfb.js";import"./SuccessIcon-_dIrcqSp.js";import"./WarningIcon-CXE8RrxD.js";import"./BaseRadioButton-B5ISjxwP.js";import"./Flex-C9EeLMUQ.js";import"./SlotComponent-BrDWWW6n.js";import"./mergeRefs-BGi3Thox.js";import"./Checkbox.stories-C1dd8U5r.js";import"./RadioButton.stories-CZhTDydz.js";import"./BaseRadioButton.stories-C9G9Tk6b.js";import"./RadioPanel.stories-DBC6GuXl.js";import"./RadioPanel-5udxdFc8.js";import"./Title-DXqYK0VS.js";import"./Card-C66irQjn.js";import"./Text-C-I-0KgQ.js";import"./Tag-ES29D9mB.js";import"./ExpandablePanel-TsaPLMpb.js";import"./useAnimatedHeightBetween-RnpiewQw.js";import"./tokens-HKQN8Vn-.js";import"./Expander--N0XTlDv.js";import"./ChevronUpIcon-B6tBkkRc.js";import"./ListItem-kpoGByMz.js";import"./BaseTextInput-Bxg0fCgk.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CeVgmkZy.js";import"./index.esm-Cnd0UsvM.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-D7Qf4Nf-.js";import"./useListNavigation-Hs9-Uojb.js";import"./Chip-CG7z_6F-.js";import"./CheckIcon-B-5N-Quc.js";import"./ArrowVerticalAnimated-D81N8_aG.js";import"./ArrowDownIcon-2FXhsezP.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BEQZvZyd.js";import"./TableCaption-Clhevuuo.js";import"./tableContext-CmT4Xsum.js";import"./CalendarIcon-DKs44k4D.js";import"./Label-BBjrQwHa.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
