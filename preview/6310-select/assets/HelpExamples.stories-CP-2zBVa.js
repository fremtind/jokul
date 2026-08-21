import{j as r}from"./iframe-D3_Hxfmq.js";import{H as o}from"./Help-CBYebLvk.js";import"./Help.stories-9VUa2DcN.js";import{A as c,m as d}from"./Autosuggest.stories-BupAJUKx.js";import g,{ComboboxStory as x}from"./Combobox.stories-Cg86TLTk.js";import H from"./FieldGroup.stories-5_IE5XFG.js";import b from"./InputGroup.stories-BnZT09Zr.js";import S from"./select.stories-B64eYYTi.js";import j from"./TextArea.stories-BoB3q9Zy.js";import{C as f}from"./Combobox-BxZMX7F7.js";import{D as I}from"./DateInput-DDjAlgs5.js";import{F as T}from"./FieldGroup-o4sCqdG9.js";import{I as G}from"./InputGroup-CFQFu2Pr.js";import{S as A}from"./Search-DwBY0uUx.js";import{S as h}from"./Select-COiy2who.js";import{T as v}from"./TextArea-B4M4k15x.js";import{T as C}from"./TextInput-D9kKKRED.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Df93gP2G.js";import"./Button-BkcGn1Gw.js";import"./usePreviousValue-B9SyUwTZ.js";import"./Loader-1g9nIVYT.js";import"./useDelayedRender-BThGcMUK.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-wWWU7FH2.js";import"./IconButton-DkW4nFGf.js";import"./CloseIcon-CPR9M0Ks.js";import"./SearchIcon-DC1FPYI2.js";import"./PopupTip-Buu-ng8V.js";import"./QuestionIcon-q8eOUgzO.js";import"./TooltipTrigger-DpmIFeVx.js";import"./floating-ui.react-CNXRi0wV.js";import"./index-BrjV1G22.js";import"./index-RSPaRSXP.js";import"./TooltipContent-Dvt9c5JE.js";import"./useBrowserPreferences-DTAEQ8X5.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-BNrjPfyi.js";import"./Checkbox-Blnpu-KL.js";import"./RadioButton.stories-BP_zN5ct.js";import"./RadioButton-PeGbqlg3.js";import"./SupportLabel-BWMr0VjH.js";import"./SuccessIcon-DD25IuJ2.js";import"./WarningIcon-DsILXr21.js";import"./BaseRadioButton-CC5Nvk2j.js";import"./BaseRadioButton.stories-y4_ka1Cb.js";import"./CheckboxPanel.stories-C5dQ4iZE.js";import"./InputPanel-Bf1gM5YH.js";import"./Flex-BVcRspdC.js";import"./SlotComponent-QVXCAeiS.js";import"./mergeRefs-COR7TRTK.js";import"./RadioPanel.stories-D14q5Wlg.js";import"./RadioPanel-PF8CgJAF.js";import"./Title-CG0xQQDR.js";import"./Card-CQWo2YcJ.js";import"./Text-B1T0i-08.js";import"./Tag-CTY0pYpA.js";import"./ExpandablePanel-BAY_iIg3.js";import"./useAnimatedHeightBetween-jRmQpEZr.js";import"./tokens-CW-NfdIE.js";import"./Expander-B8lCTPtN.js";import"./ChevronUpIcon-CfFI5Viv.js";import"./ListItem-DL9r4LIk.js";import"./BaseTextInput-BF6hxSp6.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CFFcZwze.js";import"./index.esm-4V9KDkxf.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-D2I_OgsY.js";import"./useListNavigation-D6tqHUER.js";import"./Chip-DsGh6Zuj.js";import"./CheckIcon-CUB0Trov.js";import"./ArrowVerticalAnimated-C_7Z-waX.js";import"./ArrowDownIcon-zB0wLpxV.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CMvHv-12.js";import"./TableCaption-CO_I4n43.js";import"./tableContext-BkLQHTNz.js";import"./CalendarIcon-Nwx05YB8.js";import"./Label-BPZzypY8.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
