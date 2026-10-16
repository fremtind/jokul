import{j as r}from"./iframe-flQ69wzQ.js";import{H as o}from"./Help-C2HDqwiz.js";import"./Help.stories-4oUiFf4h.js";import{A as c,m as d}from"./Autosuggest.stories-a9_4mJxN.js";import g,{ComboboxStory as x}from"./Combobox.stories-BcMITFUo.js";import H from"./FieldGroup.stories-DgGxj38F.js";import b from"./InputGroup.stories-BfNz3rD6.js";import S from"./select.stories-CkXwG1f0.js";import j from"./TextArea.stories-DkoQtLxe.js";import{C as f}from"./Combobox-3R4fNZvb.js";import{D as I}from"./DateInput-Bg0VyIVP.js";import{F as T}from"./FieldGroup-BwcvRP5U.js";import{I as G}from"./InputGroup-CgZluk5W.js";import{S as A}from"./Search-BznLQ9rr.js";import{S as h}from"./Select-dBx8Yvmc.js";import{T as v}from"./TextArea-DdECNRbk.js";import{T as C}from"./TextInput-DonsKdRR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cmf2mBmJ.js";import"./Button-BVdSyqb7.js";import"./usePreviousValue-IfqDOTOB.js";import"./Loader-B8-oK3ak.js";import"./useDelayedRender-C-dOm6M-.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DR71Olns.js";import"./IconButton-DcNAA19S.js";import"./CloseIcon-Be9it9yQ.js";import"./SearchIcon-B4mB9Pjm.js";import"./PopupTip-CbBreH5I.js";import"./QuestionIcon-CsrPTDUl.js";import"./TooltipTrigger-CE1BMiLh.js";import"./floating-ui.react-DxmKARxX.js";import"./index-D1GG5-4u.js";import"./index-BIDDw1x-.js";import"./TooltipContent-Dl6Jx6F5.js";import"./useBrowserPreferences-Bvfn_eTv.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DLLpOtbW.js";import"./InputPanel-K6jj2Cef.js";import"./Checkbox-D8Vr8kt9.js";import"./RadioButton-CpTVcOGC.js";import"./SupportLabel-xRCqBzpt.js";import"./SuccessIcon-DtRF8wjo.js";import"./WarningIcon-kHtajMSC.js";import"./BaseRadioButton-DUbxU7ql.js";import"./Flex-C1rZ-Gx2.js";import"./SlotComponent-ESaW3yQq.js";import"./mergeRefs-CR1bJJ-Y.js";import"./Checkbox.stories-DSlKPZM0.js";import"./RadioButton.stories-Ho0JjbP6.js";import"./BaseRadioButton.stories-cnxNSqfh.js";import"./RadioPanel.stories-D1sJJGuM.js";import"./RadioPanel-BLAncANx.js";import"./Title-Bmf6HG9V.js";import"./Card-BtNGDSU5.js";import"./Text-CxnKSgxs.js";import"./Tag-XmjEnLWo.js";import"./ExpandablePanel-CGox2yjP.js";import"./useAnimatedHeightBetween-Ca8CFGvz.js";import"./tokens-HKQN8Vn-.js";import"./Expander-VAZAb4cT.js";import"./ChevronUpIcon-Bq19RV3u.js";import"./ListItem-C26MkwlS.js";import"./BaseTextInput-BG1NgGSb.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CGk_Mmj5.js";import"./index.esm-DvoX-zeW.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-Dy8L9XLc.js";import"./useListNavigation-BgKbe4ht.js";import"./Chip-BlZlJjri.js";import"./CheckIcon-Bu6SUwIl.js";import"./ArrowVerticalAnimated-OpYaiD-D.js";import"./ArrowDownIcon-BpKOwceT.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-grlZ4MZg.js";import"./TableCaption-nKf1L0g8.js";import"./tableContext-BdH7mgek.js";import"./CalendarIcon-ChAQiQUQ.js";import"./Label-qPtr7Ved.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
