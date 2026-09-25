import{j as r}from"./iframe-BBQ_8FxR.js";import{H as o}from"./Help-D6oIXff0.js";import"./Help.stories-Cpb7CCHU.js";import{A as c,m as d}from"./Autosuggest.stories-v7Jg5eVl.js";import g,{ComboboxStory as x}from"./Combobox.stories-DUzLtycw.js";import H from"./FieldGroup.stories-DLPhF1TU.js";import b from"./InputGroup.stories-DX56toms.js";import S from"./select.stories-pgEtS6lC.js";import j from"./TextArea.stories-nzcDhbCu.js";import{C as f}from"./Combobox-DNLmSdpZ.js";import{D as I}from"./DateInput-Q5NpPXX0.js";import{F as T}from"./FieldGroup-SEZUIA5P.js";import{I as G}from"./InputGroup-Dz0izBUm.js";import{S as A}from"./Search-eq-v_r0Q.js";import{S as h}from"./Select-DN1LHKlL.js";import{T as v}from"./TextArea-DvkljWp3.js";import{T as C}from"./TextInput-CUw_Acab.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-PfIlFl4q.js";import"./Button-CycWb-4D.js";import"./usePreviousValue-DqFrnf_p.js";import"./Loader-DPjWdjdn.js";import"./useDelayedRender-D9lBpN70.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DIXol0A3.js";import"./IconButton-BhQEeWPU.js";import"./CloseIcon-BwY83nmp.js";import"./SearchIcon-Brip3G7U.js";import"./PopupTip-LRiyjecb.js";import"./QuestionIcon-CfKRXT57.js";import"./TooltipTrigger-BdlAjTXu.js";import"./floating-ui.react-B_tu_qmQ.js";import"./index-D6p4YvHY.js";import"./index-CdZKMnxg.js";import"./TooltipContent-B5uMiNfw.js";import"./useBrowserPreferences-BtDI1g6o.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BpDSKvcR.js";import"./InputPanel-CV8aPiwO.js";import"./Checkbox-BiSYFBYP.js";import"./RadioButton-DPoPptAs.js";import"./SupportLabel-BUdnrLLA.js";import"./SuccessIcon-Ca5m4NCE.js";import"./WarningIcon-C5fVS7Qy.js";import"./BaseRadioButton-Dug0ZHey.js";import"./Flex-C--ZzOFS.js";import"./SlotComponent-Bbh2VytA.js";import"./mergeRefs-CJYIewL-.js";import"./Checkbox.stories-BBx6nnhD.js";import"./RadioButton.stories-u87aH-WA.js";import"./BaseRadioButton.stories-D4sglGru.js";import"./RadioPanel.stories-BT_toKAa.js";import"./RadioPanel-flUuwJkL.js";import"./Title-CmyvkLL6.js";import"./Card-Bg1186HF.js";import"./Text-D7Yv_EgN.js";import"./Tag-Dq3MOsnq.js";import"./ExpandablePanel-DYiVhU05.js";import"./useAnimatedHeightBetween-YxPsP4vK.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DQyz05ac.js";import"./ChevronUpIcon-DrOEKaZn.js";import"./ListItem-OcRRLDKH.js";import"./BaseTextInput-Xt2nPqTi.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-C6-IZiLe.js";import"./index.esm-BjdcPhUe.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-ClTZdco3.js";import"./useListNavigation-DWe3dB4v.js";import"./Chip-BMLE5ZVd.js";import"./CheckIcon-DjvqFmrI.js";import"./ArrowVerticalAnimated-Ctg8z40N.js";import"./ArrowDownIcon-BVFM2znk.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-C-dDMHU9.js";import"./TableCaption-CwJlM559.js";import"./tableContext-BBd3-xMg.js";import"./CalendarIcon-BKYIkOVN.js";import"./Label-9hYeBLUz.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
