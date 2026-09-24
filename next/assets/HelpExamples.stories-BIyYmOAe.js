import{j as r}from"./iframe-BVjcNEb5.js";import{H as o}from"./Help-DnM1vzHJ.js";import"./Help.stories-8k27Qfi5.js";import{A as c,m as d}from"./Autosuggest.stories-Ep6jRdEk.js";import g,{ComboboxStory as x}from"./Combobox.stories-u-zcGv_X.js";import H from"./FieldGroup.stories-DBGMB4yD.js";import b from"./InputGroup.stories-up3GZXB8.js";import S from"./select.stories-C9-yktKV.js";import j from"./TextArea.stories-HhPUJsvW.js";import{C as f}from"./Combobox-CuBX_1MW.js";import{D as I}from"./DateInput-C7iZX23X.js";import{F as T}from"./FieldGroup-CVM5qaV_.js";import{I as G}from"./InputGroup-DQaYEDmY.js";import{S as A}from"./Search-CjC3fYkt.js";import{S as h}from"./Select-DVD_Gc7v.js";import{T as v}from"./TextArea-DVHhY5_q.js";import{T as C}from"./TextInput-B5CBwryK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B3sdwb9P.js";import"./Button-DVb5w0_4.js";import"./usePreviousValue-R_hTfSVA.js";import"./Loader-zDHmrHSM.js";import"./useDelayedRender-C5YOVWfc.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Bb1ExcvL.js";import"./IconButton-DLr_PefC.js";import"./CloseIcon-CW5FVWNj.js";import"./SearchIcon-Dg54jd3k.js";import"./PopupTip-DHS2n2lN.js";import"./QuestionIcon-CsjiL3PX.js";import"./TooltipTrigger-CxuZQL7w.js";import"./floating-ui.react-Dw6n8gJk.js";import"./index-BKPEBx7w.js";import"./index-B8EqBI-B.js";import"./TooltipContent-b5slAsPR.js";import"./useBrowserPreferences-DFYV_k9K.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BgOf1H13.js";import"./InputPanel-DudbFeZE.js";import"./Checkbox-Yybni-zH.js";import"./RadioButton-C4iCbq47.js";import"./SupportLabel-D2Al2d6H.js";import"./SuccessIcon-CSCJCthT.js";import"./WarningIcon-CTeCv8lS.js";import"./BaseRadioButton-CQvakRD_.js";import"./Flex-CVp3I_Ov.js";import"./SlotComponent-BXXifoRO.js";import"./mergeRefs-Cvk7N3yF.js";import"./Checkbox.stories-OaCP09O4.js";import"./RadioButton.stories-DYQUxzZI.js";import"./BaseRadioButton.stories-8og_VUy-.js";import"./RadioPanel.stories-BOm_Lo3U.js";import"./RadioPanel-BIt6Sj8H.js";import"./Title-BHd9shnx.js";import"./Card-BtsrUqFO.js";import"./Text-C0vve26g.js";import"./Tag-BOuEGo48.js";import"./ExpandablePanel-CDyPwlOB.js";import"./useAnimatedHeightBetween-DgBsqvGL.js";import"./tokens-HKQN8Vn-.js";import"./Expander-xZUQXcwz.js";import"./ChevronUpIcon-PZpKHAKr.js";import"./ListItem-Cv2vzE2t.js";import"./BaseTextInput-B08f94a8.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Bwn13QWB.js";import"./index.esm-DAa0acx5.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DAoM9tZn.js";import"./useListNavigation-Dlkoy5o0.js";import"./Chip-D8pmg4sB.js";import"./CheckIcon-C7ic4wWA.js";import"./ArrowVerticalAnimated-Dpu3DEI4.js";import"./ArrowDownIcon-BrHMcCsu.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CnElP_uC.js";import"./TableCaption-C1ms3OdV.js";import"./tableContext-JMkfIlWS.js";import"./CalendarIcon-C_oG1Kin.js";import"./Label-B0GIa1Yp.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
