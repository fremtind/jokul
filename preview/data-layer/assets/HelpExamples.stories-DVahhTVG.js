import{j as r}from"./iframe-CDa7pJma.js";import{H as o}from"./Help-CyktFr5w.js";import"./Help.stories-wX42COhI.js";import{A as c,m as d}from"./Autosuggest.stories-DG3MtLDG.js";import g,{ComboboxStory as x}from"./Combobox.stories-bmbMppLH.js";import H from"./FieldGroup.stories-DGGyCSL5.js";import b from"./InputGroup.stories-7d0A6kXh.js";import S from"./select.stories-BgxmX055.js";import j from"./TextArea.stories-C0vhlegU.js";import{C as f}from"./Combobox-BSkYvgya.js";import{D as I}from"./DateInput-Bx6W5py3.js";import{F as T}from"./FieldGroup-D70_83yk.js";import{I as G}from"./InputGroup-BY1VBAS9.js";import{S as A}from"./Search-C7LEdWY6.js";import{S as h}from"./Select-D7X9qkmj.js";import{T as v}from"./TextArea-BBnhNvqD.js";import{T as C}from"./TextInput-Ctg-lBd-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BFTeEGxG.js";import"./types-YjSsgwWY.js";import"./Button-CFUv8Zis.js";import"./usePreviousValue-ImjzenmM.js";import"./Loader-BworsGNj.js";import"./useDelayedRender-DVyyCK5S.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DTJ5Q7tR.js";import"./IconButton-COeOxvfA.js";import"./CloseIcon-CUNRQSXR.js";import"./SearchIcon-CejrmQb4.js";import"./PopupTip-UDU8kJBk.js";import"./QuestionIcon-CCaViDjO.js";import"./TooltipTrigger-DuwbYRUc.js";import"./floating-ui.react-GaHHcVl1.js";import"./index-RRQsNWyG.js";import"./index-CZsP7ZhP.js";import"./TooltipContent-9ovffiUY.js";import"./useBrowserPreferences-DSLMgpfy.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CaPgcRss.js";import"./InputPanel-DHuFBgOZ.js";import"./Checkbox-Dru0ngqT.js";import"./RadioButton-fdy6p1KM.js";import"./SupportLabel-DFPHlsxV.js";import"./SuccessIcon-CkajFwBn.js";import"./WarningIcon-DkyhFYvJ.js";import"./BaseRadioButton-CbjPMqMM.js";import"./Flex-CWnLdXBE.js";import"./SlotComponent-CpGAMfLY.js";import"./mergeRefs-n2brYZWD.js";import"./Checkbox.stories-CkJUkxnC.js";import"./RadioButton.stories-CEHzTUJR.js";import"./BaseRadioButton.stories-BnrBqwoA.js";import"./RadioPanel.stories-D2wffD2t.js";import"./RadioPanel-D90i4oZR.js";import"./Title-DwGKiJFo.js";import"./Card-BOqisww2.js";import"./Text-OzFw203v.js";import"./Tag-CFhadhZv.js";import"./ExpandablePanel-ofbS-imz.js";import"./useAnimatedHeightBetween-BKbjvnIV.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BQe3Taz_.js";import"./ChevronUpIcon-CsPk5-nq.js";import"./ListItem-DQP_2fOz.js";import"./BaseTextInput-Btg3irOv.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CjwZn7SR.js";import"./index.esm-Cd4VNfGY.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-QbHDf4G7.js";import"./useListNavigation-yHnR_GaO.js";import"./Chip-sq5aiZbi.js";import"./CheckIcon-CdtI7DjE.js";import"./ArrowVerticalAnimated-CbJjJuQK.js";import"./ArrowDownIcon-Mv3BK9ot.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-0S-fhaxZ.js";import"./TableCaption-EaOor7L4.js";import"./tableContext-CpgaU6WB.js";import"./CalendarIcon-Dv_Rh-03.js";import"./Label-BR6gLBM4.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
