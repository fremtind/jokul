import{j as r}from"./iframe-BdIrVqzM.js";import{H as o}from"./Help-WuMhGizq.js";import"./Help.stories-1XFICs7M.js";import{A as c,m as d}from"./Autosuggest.stories-BtvHLiQb.js";import g,{ComboboxStory as x}from"./Combobox.stories-BNAhbaqb.js";import H from"./FieldGroup.stories-DCJoHEYV.js";import b from"./InputGroup.stories-BEsm7g2h.js";import S from"./select.stories-DYzlGxgi.js";import j from"./TextArea.stories-DxNO1zMJ.js";import{C as f}from"./Combobox-CbR9tRJK.js";import{D as I}from"./DateInput-DmmxqZjc.js";import{F as T}from"./FieldGroup-CKefhOaB.js";import{I as G}from"./InputGroup-C_NnEtMQ.js";import{S as A}from"./Search-CeK6tkSq.js";import{S as h}from"./Select-DsP5VOHT.js";import{T as v}from"./TextArea-BE_-jJ8d.js";import{T as C}from"./TextInput-_PPFAf4J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-0_MgDjGX.js";import"./Button-BPC6G1WC.js";import"./usePreviousValue-DGJSs1hO.js";import"./Loader-CqN9cLY8.js";import"./useDelayedRender-BRspF-oz.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Dj2Mq57t.js";import"./IconButton-D4FyPTtY.js";import"./CloseIcon-CMZbK-Id.js";import"./SearchIcon-DWVk3P-o.js";import"./PopupTip-DVIjimdz.js";import"./QuestionIcon-D2_48Icm.js";import"./TooltipTrigger-Bfie5b7A.js";import"./floating-ui.react-Dkt5ISoJ.js";import"./index-CbqR-b6w.js";import"./index-G8ZkATiA.js";import"./TooltipContent-CK4sD98i.js";import"./useBrowserPreferences-D2zgUPg5.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-9-JM3Ziw.js";import"./InputPanel-Jgol4XBb.js";import"./Checkbox-DtkebIqu.js";import"./RadioButton-DId2Knsz.js";import"./SupportLabel-GEYR-FPx.js";import"./SuccessIcon-BoeK-BMG.js";import"./WarningIcon-C1iwehkN.js";import"./BaseRadioButton-B3GSLbMb.js";import"./Flex-CX_PdECB.js";import"./SlotComponent-D_y_e60b.js";import"./mergeRefs-_TUaWtbm.js";import"./Checkbox.stories-seLZHMIl.js";import"./RadioButton.stories-BC5md0Rz.js";import"./BaseRadioButton.stories-BClA-PAJ.js";import"./RadioPanel.stories-DRf1Qx0G.js";import"./RadioPanel-CUIGys93.js";import"./Title-C1GNvED-.js";import"./Card-DLp1oTZ9.js";import"./Text-DC6YJeu8.js";import"./Tag--a3Oxp3z.js";import"./ExpandablePanel-D4hIL8qe.js";import"./useAnimatedHeightBetween-CrmBVIiP.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BBAb-sJs.js";import"./ChevronUpIcon-BH2KbJJ9.js";import"./ListItem-qwd91b_t.js";import"./BaseTextInput-BNzHGhYu.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CbHlQAJb.js";import"./index.esm-ZyRG3p8j.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-B97EFTpE.js";import"./useListNavigation-DN5wAo-O.js";import"./Chip-pIJcW_25.js";import"./CheckIcon-DZVuLQh1.js";import"./ArrowVerticalAnimated-CUNpoK78.js";import"./ArrowDownIcon-SAOFKl-4.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-D7lk_A5_.js";import"./TableCaption-C3OSE3Ig.js";import"./tableContext-CpdA-xUd.js";import"./CalendarIcon-Duww1Nt6.js";import"./Label-DQDtwM1k.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
