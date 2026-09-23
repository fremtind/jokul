import{j as r}from"./iframe-C_gPa2a-.js";import{H as o}from"./Help-Bz0v6x9C.js";import"./Help.stories-BoTb07rM.js";import{A as c,m as d}from"./Autosuggest.stories-C3vzNRj6.js";import g,{ComboboxStory as x}from"./Combobox.stories-CX4Xs3e1.js";import H from"./FieldGroup.stories-D8TOnmuJ.js";import b from"./InputGroup.stories-f-5smdMk.js";import S from"./select.stories-DwGDubFK.js";import j from"./TextArea.stories-CfgZc8qR.js";import{C as f}from"./Combobox-Ct7m32iM.js";import{D as I}from"./DateInput-DphSPjgU.js";import{F as T}from"./FieldGroup-Q4ObfK8i.js";import{I as G}from"./InputGroup-0rcMpVDl.js";import{S as A}from"./Search-CJl03Rrq.js";import{S as h}from"./Select-CcLHrj1M.js";import{T as v}from"./TextArea-DFzCQmIF.js";import{T as C}from"./TextInput-BbAb6Hul.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BnmCUyIH.js";import"./Button-y1yhpkAk.js";import"./usePreviousValue-CyklFK7f.js";import"./Loader-BGqfN_pX.js";import"./useDelayedRender-DY3Kz2qU.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CZ8Yd14n.js";import"./IconButton-B_ZZZxjR.js";import"./CloseIcon-C6I9VTM6.js";import"./SearchIcon-DHigT9B9.js";import"./PopupTip-Cz-CuKTj.js";import"./QuestionIcon-8NZKIeu9.js";import"./TooltipTrigger-CtYtaR-7.js";import"./floating-ui.react-CDqCAbXo.js";import"./index-DHQuEpd2.js";import"./index-zb3hwpjX.js";import"./TooltipContent-CQMAMsWt.js";import"./useBrowserPreferences-97azXTw-.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-doWYAzA-.js";import"./InputPanel-BOOBQgDv.js";import"./Checkbox-_7nUDBav.js";import"./RadioButton-CDAYqgX7.js";import"./SupportLabel-kQDgtVWY.js";import"./SuccessIcon-wnv8wmNK.js";import"./WarningIcon-BrpW_yp3.js";import"./BaseRadioButton-C9MkUmr-.js";import"./Flex-B3aJWO1e.js";import"./SlotComponent-DFrSdkVh.js";import"./mergeRefs-DSovm8c1.js";import"./Checkbox.stories-3hyyLyzc.js";import"./RadioButton.stories-CxKDNB5J.js";import"./BaseRadioButton.stories-B0ufg_Ot.js";import"./RadioPanel.stories-Ms3cejRC.js";import"./RadioPanel-BI_RN9f0.js";import"./Title-DxYjkmWB.js";import"./Card-CbKqc5Ea.js";import"./Text-CrGDXxqb.js";import"./Tag-znD3vK1s.js";import"./ExpandablePanel-Bzv9RlD-.js";import"./useAnimatedHeightBetween-CkcBBfpv.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CSkXweet.js";import"./ChevronUpIcon-s3nSBzBK.js";import"./ListItem-BPNtDhJW.js";import"./BaseTextInput-eDntcbw-.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-5Ff2PVfB.js";import"./index.esm-1ac3qf5U.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-B3iB2oel.js";import"./useListNavigation-BYd63zRT.js";import"./Chip-CeL_aIpA.js";import"./CheckIcon-DcPAXkj8.js";import"./ArrowVerticalAnimated-DZFfpwH1.js";import"./ArrowDownIcon-BFghVLZz.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-D0006fdj.js";import"./TableCaption-acT1r-X8.js";import"./tableContext-Csi9va2i.js";import"./CalendarIcon-BhmqHJ7E.js";import"./Label-wuKeOAHQ.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
