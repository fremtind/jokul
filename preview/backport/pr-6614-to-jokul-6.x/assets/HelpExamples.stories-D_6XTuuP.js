import{j as r}from"./iframe-C6vUXWdd.js";import{H as o}from"./Help-B3U707fe.js";import"./Help.stories-CE6aQ32O.js";import{A as c,m as d}from"./Autosuggest.stories-kfvtmbMY.js";import g,{ComboboxStory as x}from"./Combobox.stories-Z2hhq-AK.js";import H from"./FieldGroup.stories-BrjZl5Ae.js";import b from"./InputGroup.stories-CcR1FvCI.js";import S from"./select.stories-DVxHy54V.js";import j from"./TextArea.stories-BJdZktmu.js";import{C as f}from"./Combobox-1CyVZQVJ.js";import{D as I}from"./DateInput-refIs_1a.js";import{F as T}from"./FieldGroup-DqPfz4BC.js";import{I as G}from"./InputGroup-Cr2cZkC6.js";import{S as A}from"./Search-KRHetKo1.js";import{S as h}from"./Select-CLS0L-Zg.js";import{T as v}from"./TextArea-DKH499YC.js";import{T as C}from"./TextInput-BgvGwGaG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Dtsh_FZJ.js";import"./Button-SF_y_AnO.js";import"./usePreviousValue-DX45YL0a.js";import"./Loader-C3Mh_U6S.js";import"./useDelayedRender-HLaGqrZ9.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Cwi9pEX_.js";import"./IconButton-BNNbOra5.js";import"./CloseIcon-Bca99fRz.js";import"./SearchIcon-DXGTHluE.js";import"./PopupTip-Cp9FllBE.js";import"./QuestionIcon-DfdLVzSB.js";import"./TooltipTrigger-CZt51UA7.js";import"./floating-ui.react-B8qRyl11.js";import"./index-Dfk3Lmgr.js";import"./index-BnWFEtBj.js";import"./TooltipContent-BU2Q06Pp.js";import"./useBrowserPreferences-D3wvWFSz.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Ce3YKT8x.js";import"./InputPanel-DxJv8jyl.js";import"./Checkbox-SG1ag79S.js";import"./RadioButton-DLdqpedi.js";import"./SupportLabel-DWb0bMrq.js";import"./SuccessIcon-CDUlgAuX.js";import"./WarningIcon-CW5JYLRm.js";import"./BaseRadioButton-Hzn2q5c6.js";import"./Flex-DYxvG5PN.js";import"./SlotComponent-CVRafasF.js";import"./mergeRefs-CYgKi7gL.js";import"./Checkbox.stories-Cj3KKhkW.js";import"./RadioButton.stories-FTdMAuS3.js";import"./BaseRadioButton.stories-DRNP-ybs.js";import"./RadioPanel.stories-Dw1byTBO.js";import"./RadioPanel-bCCP9mdg.js";import"./Title-CeMEfZeP.js";import"./Card-CsnkLBBY.js";import"./Text-SU-S9p2H.js";import"./Tag-BbWevtB3.js";import"./ExpandablePanel-BVrh1szc.js";import"./useAnimatedHeightBetween-BpfZcMQ8.js";import"./tokens-HKQN8Vn-.js";import"./Expander-yRtvoTVi.js";import"./ChevronUpIcon-NqtLRrM9.js";import"./ListItem-CIWbTEZi.js";import"./BaseTextInput-B8tOy874.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DPAYdPn2.js";import"./index.esm-C6x2bDPl.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-dpGotKta.js";import"./useListNavigation-CClL6JcT.js";import"./Chip-DdbFKjpb.js";import"./CheckIcon-DflT4t2j.js";import"./ArrowVerticalAnimated-C0p8Lc7n.js";import"./ArrowDownIcon-DyxA7dW-.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BVebFdW4.js";import"./TableCaption-CJQYC3sd.js";import"./tableContext-CChbRolM.js";import"./CalendarIcon-3v6nG1Yc.js";import"./Label-O__kI-U6.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
