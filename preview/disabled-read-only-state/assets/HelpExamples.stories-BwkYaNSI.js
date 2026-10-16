import{j as r}from"./iframe-o0m3menv.js";import{H as o}from"./Help-DHLU39Xe.js";import"./Help.stories-DZfi1P9B.js";import{A as c,m as d}from"./Autosuggest.stories-B60-1mTP.js";import g,{ComboboxStory as x}from"./Combobox.stories-B4oh1Tw2.js";import H from"./FieldGroup.stories-D2qoWQD8.js";import b from"./InputGroup.stories-q41Y4Pv8.js";import S from"./select.stories-DPsWSPHM.js";import j from"./TextArea.stories-BeN_W1O8.js";import{C as f}from"./Combobox-HZfiO1qJ.js";import{D as I}from"./DateInput-zVgXVINM.js";import{F as T}from"./FieldGroup-DYcstTN0.js";import{I as G}from"./InputGroup-BnzT-4hK.js";import{S as A}from"./Search-BtVm4yPs.js";import{S as h}from"./Select-B6BFhgt6.js";import{T as v}from"./TextArea-DuTDzWDV.js";import{T as C}from"./TextInput-DYCiYIFW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CHP4Ujl2.js";import"./Button-CXl0APQ6.js";import"./usePreviousValue-D7lSvtf5.js";import"./Loader-DbQQV1aU.js";import"./useDelayedRender-D9Ar9ZMn.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-C2y1bl-l.js";import"./IconButton-Dgvf4KGu.js";import"./CloseIcon-Dt_UxK-V.js";import"./SearchIcon-D1wsjrfZ.js";import"./PopupTip-ClzskHhG.js";import"./QuestionIcon-inB8Mt_C.js";import"./TooltipTrigger-CZCdfpEH.js";import"./floating-ui.react-LOhKyHrT.js";import"./index-DjBKJpZC.js";import"./index-CMbJ3DRT.js";import"./TooltipContent-DRVD5TGh.js";import"./useBrowserPreferences-D874WqxX.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BSBKfOal.js";import"./CheckboxPanel-CpzsNEvx.js";import"./InputPanel-C_KH8Z-E.js";import"./Checkbox-Cj-nkzpL.js";import"./RadioButton-qILp8xBj.js";import"./SupportLabel-UFV4r9Fs.js";import"./SuccessIcon-BVVr417w.js";import"./WarningIcon-YEiE9qc_.js";import"./BaseRadioButton-DcXhD-2Y.js";import"./Flex-BSig71-C.js";import"./SlotComponent-CIywmpIV.js";import"./mergeRefs-CQG3iBAm.js";import"./Checkbox.stories-DpEsbk_w.js";import"./RadioButton.stories-CPd2zL64.js";import"./BaseRadioButton.stories-e05yMAl4.js";import"./RadioPanel.stories-CAazqyA7.js";import"./RadioPanel-DGDu_Fg0.js";import"./Title-Cq5i8qLj.js";import"./Card-CB0e7bMh.js";import"./Text-C8cj1umF.js";import"./Tag-D73Srnl9.js";import"./ExpandablePanel-DfZkh3Eq.js";import"./useAnimatedHeightBetween-D_OGESyC.js";import"./tokens-HKQN8Vn-.js";import"./Expander-GvZFzxEa.js";import"./ChevronUpIcon-ViW49Dt6.js";import"./ListItem-D7z4h_5g.js";import"./BaseTextInput-X2bDNN7j.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-5SlgzD3G.js";import"./index.esm-CiO5hRzt.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CDmwnCgr.js";import"./useListNavigation-p6G5y1g2.js";import"./Chip-DOetS4b9.js";import"./CheckIcon-D0BXE_uF.js";import"./ArrowVerticalAnimated-BieT63D5.js";import"./ArrowDownIcon-vNthQ3DG.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Bk01h7ls.js";import"./TableCaption-BdPFLiZO.js";import"./tableContext-B6O0Y-Id.js";import"./CalendarIcon-C4htLuFa.js";import"./Label-CHvJ6rAQ.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};
