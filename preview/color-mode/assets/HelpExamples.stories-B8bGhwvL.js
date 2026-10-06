import{j as r}from"./iframe-M28fAQO8.js";import{H as o}from"./Help-BGJ-xCJ_.js";import"./Help.stories-DCy_AB6G.js";import{A as c,m as d}from"./Autosuggest.stories-Bf8i11fd.js";import g,{ComboboxStory as x}from"./Combobox.stories-B4Cs9JBm.js";import H from"./FieldGroup.stories-BGdoACcu.js";import b from"./InputGroup.stories-IhKfjF_O.js";import S from"./select.stories-CIfdf3BO.js";import j from"./TextArea.stories-IW7EPI5_.js";import{C as f}from"./Combobox-D6b2Xupw.js";import{D as I}from"./DateInput-5TraBuDp.js";import{F as T}from"./FieldGroup-DygvHtGT.js";import{I as G}from"./InputGroup-_h7iBxj_.js";import{S as A}from"./Search-D4yzhQid.js";import{S as h}from"./Select-JiJULtf_.js";import{T as v}from"./TextArea-WSp-g2-k.js";import{T as C}from"./TextInput-DClTAo4H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Ch69uN6a.js";import"./Button-CSV7he_1.js";import"./usePreviousValue-CIXLTasH.js";import"./Loader-Dg9JdDsG.js";import"./useDelayedRender-DYA-IVAU.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-s_og3R5Z.js";import"./IconButton-XFzQ-1LR.js";import"./CloseIcon-Cn5s_FLP.js";import"./SearchIcon-D7lMb3zL.js";import"./PopupTip-CkQofmTA.js";import"./QuestionIcon-DpYOTSFC.js";import"./TooltipTrigger-DD7Jk-qw.js";import"./floating-ui.react-Dn7-s3JQ.js";import"./index-BdylFTgf.js";import"./index-CsBjPhR_.js";import"./TooltipContent-CCUoJ_h1.js";import"./useBrowserPreferences-CBCU7UCj.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DFnCm1u1.js";import"./InputPanel-Dp9zr0Rj.js";import"./Checkbox-B3hsKtNf.js";import"./RadioButton-hXc9XNXo.js";import"./SupportLabel--15flQmh.js";import"./SuccessIcon-BX4fIYTv.js";import"./WarningIcon-C9ODLQ99.js";import"./BaseRadioButton-CTG-kTAc.js";import"./Flex-ww8IgNKS.js";import"./SlotComponent-Cxzp4jH2.js";import"./mergeRefs-CtZRn9yY.js";import"./Checkbox.stories-DcMQTUy-.js";import"./RadioButton.stories-AXZk78Sz.js";import"./BaseRadioButton.stories-CA2Yw76M.js";import"./RadioPanel.stories-B_IKL9Dw.js";import"./RadioPanel-Deoq9c2G.js";import"./Title-DGGRw7sC.js";import"./Card-C7PNI5bH.js";import"./Text-B76mLyZO.js";import"./Tag-5pBwfz2p.js";import"./ExpandablePanel-V1-VIMhd.js";import"./useAnimatedHeightBetween-Bd0JWzya.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BJkPPRka.js";import"./ChevronUpIcon-BbJcV64X.js";import"./ListItem-B5zGfUTV.js";import"./BaseTextInput-DCMWNUsk.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D8DFkQDU.js";import"./index.esm-D-5BLaGq.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CrqabwGJ.js";import"./useListNavigation-DU5A-ShM.js";import"./Chip-8ld4LeHR.js";import"./CheckIcon-9-IsIC0W.js";import"./ArrowVerticalAnimated-D1oVi_ZH.js";import"./ArrowDownIcon-CvjRgadn.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DwXzMD0k.js";import"./TableCaption-BRcgUxva.js";import"./tableContext-B9Snxb1z.js";import"./CalendarIcon-DbAcCgMi.js";import"./Label-BgqujSL9.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
