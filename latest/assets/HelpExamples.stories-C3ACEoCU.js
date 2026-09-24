import{j as r}from"./iframe-bRmfUjI8.js";import{H as o}from"./Help-CLQYhc4l.js";import"./Help.stories-L49WnxF-.js";import{A as c,m as d}from"./Autosuggest.stories-Cl-NvNsz.js";import g,{ComboboxStory as x}from"./Combobox.stories-v93wQUzV.js";import H from"./FieldGroup.stories-B11nDwo-.js";import b from"./InputGroup.stories-C0zlom2V.js";import S from"./select.stories-BUWGebvC.js";import j from"./TextArea.stories-7HDSzuPy.js";import{C as f}from"./Combobox-CLVfuBqR.js";import{D as I}from"./DateInput-CkMwDxpw.js";import{F as T}from"./FieldGroup-CjXHiz82.js";import{I as G}from"./InputGroup-CZTK-fHq.js";import{S as A}from"./Search-DgQnAq5b.js";import{S as h}from"./Select-5qbBU2mH.js";import{T as v}from"./TextArea-CUYnsyu0.js";import{T as C}from"./TextInput-Ckbmr_Tn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-wPLJOhF6.js";import"./Button-CULWB18q.js";import"./usePreviousValue-C3m_e4w0.js";import"./Loader-B0DpnGw9.js";import"./useDelayedRender-C2GZHRs3.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BGZUki8m.js";import"./IconButton-CdX0neJb.js";import"./CloseIcon-C_5iK3Ix.js";import"./SearchIcon-BHFBkAKy.js";import"./PopupTip-kq5-k59C.js";import"./QuestionIcon-Cww6i0XP.js";import"./TooltipTrigger-ZdooTdPH.js";import"./floating-ui.react-DF4ovucU.js";import"./index-BiEuC_iQ.js";import"./index-BR6RfPnx.js";import"./TooltipContent-CD_TXPJG.js";import"./useBrowserPreferences-DVDV00k2.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BQlH8o7G.js";import"./InputPanel-Cz9OzjZQ.js";import"./Checkbox-EIsT3X5B.js";import"./RadioButton-D8fCS3kV.js";import"./SupportLabel-DWmYDJXK.js";import"./SuccessIcon-DSI_2ZR7.js";import"./WarningIcon-Cvg1hCra.js";import"./BaseRadioButton-D6FujvxC.js";import"./Flex-BTSFqLp2.js";import"./SlotComponent-Dxpit7vj.js";import"./mergeRefs-8eyz8xhK.js";import"./Checkbox.stories-OpZTaEkD.js";import"./RadioButton.stories-Nxy7PzJr.js";import"./BaseRadioButton.stories-j0fdGc-K.js";import"./RadioPanel.stories-fnZrCBxb.js";import"./RadioPanel-BcHXH-mU.js";import"./Title-DgLvHDDk.js";import"./Card-BtN0fReS.js";import"./Text-DySIZE_Y.js";import"./Tag-Dg18o3y3.js";import"./ExpandablePanel-qg2ad7Ou.js";import"./useAnimatedHeightBetween-CcCHftWC.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DwN_S_X9.js";import"./ChevronUpIcon-Bqx1NrxY.js";import"./ListItem-DRxeqF0O.js";import"./BaseTextInput-ByfNry9d.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DtyVuvru.js";import"./index.esm-LYJbrV5V.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CPe3h_Ch.js";import"./useListNavigation-zrZFrIt_.js";import"./Chip-BPXjU52d.js";import"./CheckIcon-C65_tH8c.js";import"./ArrowVerticalAnimated-CGYISW4N.js";import"./ArrowDownIcon-BEfPAuZo.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DYSWf4VG.js";import"./TableCaption-DcGXBXRE.js";import"./tableContext-DkBMBiRM.js";import"./CalendarIcon-Dt1YRfmr.js";import"./Label-Ce12ZJ2X.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
