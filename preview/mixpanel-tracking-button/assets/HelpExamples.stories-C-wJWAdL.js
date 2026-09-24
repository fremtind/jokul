import{j as r}from"./iframe-DNlyx_tI.js";import{H as o}from"./Help-C9GyIemZ.js";import"./Help.stories-B9CaoJNe.js";import{A as c,m as d}from"./Autosuggest.stories-CslRyKqM.js";import g,{ComboboxStory as x}from"./Combobox.stories-CJTYRhpm.js";import H from"./FieldGroup.stories-Rq6p89JF.js";import b from"./InputGroup.stories-B7IVFqwi.js";import S from"./select.stories-CZ9kmqtx.js";import j from"./TextArea.stories-BwKg1G8T.js";import{C as f}from"./Combobox-C9hf7K4C.js";import{D as I}from"./DateInput-D4khsD4H.js";import{F as T}from"./FieldGroup-C5d_OEn-.js";import{I as G}from"./InputGroup-BvDQKJBW.js";import{S as A}from"./Search-BHUtY_Nh.js";import{S as h}from"./Select-ClsrPqjg.js";import{T as v}from"./TextArea-Bxs90mLX.js";import{T as C}from"./TextInput-CbLpL3GZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-mG3k-rxp.js";import"./Button-UA6UHFtS.js";import"./usePreviousValue-mE7FR59H.js";import"./Loader-BVKwG2JH.js";import"./useDelayedRender-lJ8xtxGA.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-tFl9oDjg.js";import"./IconButton-HwlpCYEQ.js";import"./CloseIcon-CibRUJ3L.js";import"./SearchIcon-DlvxeJkI.js";import"./PopupTip-BW1WfOAf.js";import"./QuestionIcon-C6krvc12.js";import"./TooltipTrigger-DK9nwzRM.js";import"./floating-ui.react-DAvQ3CoE.js";import"./index-DjFVmayA.js";import"./index-CkECvyFS.js";import"./TooltipContent-BVEiJdg-.js";import"./useBrowserPreferences-DZRR4Vb6.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BwnojmKq.js";import"./InputPanel-BynpPrLQ.js";import"./Checkbox-BEMpU90Q.js";import"./RadioButton-ByqmrYM1.js";import"./SupportLabel-CLVd2b15.js";import"./SuccessIcon-AxeGWCG5.js";import"./WarningIcon-B78_aJnF.js";import"./BaseRadioButton-CM0FyFci.js";import"./Flex-BcMg9dmU.js";import"./SlotComponent-Bi_Gk0_T.js";import"./mergeRefs-tPSJYOlF.js";import"./Checkbox.stories-1uFmWf6A.js";import"./RadioButton.stories-DXai0Z8z.js";import"./BaseRadioButton.stories-B7xKrk-e.js";import"./RadioPanel.stories-BfrqqyH0.js";import"./RadioPanel-DxZg3KRs.js";import"./Title-F8gdRBam.js";import"./Card-QSBkgej3.js";import"./Text-egxysFS6.js";import"./Tag-dOvLivz-.js";import"./ExpandablePanel-DYSdTWK8.js";import"./useAnimatedHeightBetween-BjMWUWVc.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BM6h36du.js";import"./ChevronUpIcon-Cv9QW3hM.js";import"./ListItem-COBJaAej.js";import"./BaseTextInput-b4u6hlOc.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-puw6igBP.js";import"./index.esm-D2Rjj62H.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DZ_PyLXN.js";import"./useListNavigation-03CVwAgj.js";import"./Chip-CUPnIwcm.js";import"./CheckIcon-BxAu9zdf.js";import"./ArrowVerticalAnimated-B7Q3kIeW.js";import"./ArrowDownIcon-DtloT1e_.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Dc0zhns3.js";import"./TableCaption-HMuFsC9c.js";import"./tableContext-Dub59SZF.js";import"./CalendarIcon-DMowoDxm.js";import"./Label-BVEtrlZG.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
