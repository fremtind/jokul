import{j as r}from"./iframe-Nok0sgRA.js";import{H as o}from"./Help-CLh4WPMe.js";import"./Help.stories-DAm1ixbM.js";import{A as c,m as d}from"./Autosuggest.stories-CLPdVsjC.js";import g,{ComboboxStory as x}from"./Combobox.stories-BUhS9o2C.js";import H from"./FieldGroup.stories-Dxa6guX0.js";import b from"./InputGroup.stories-BGrdDTSb.js";import S from"./select.stories-DnPhqSL7.js";import j from"./TextArea.stories-C0ewCOEc.js";import{C as f}from"./Combobox-BI_5XkAA.js";import{D as I}from"./DateInput-Cl2jv5au.js";import{F as T}from"./FieldGroup-5AiWS8SJ.js";import{I as G}from"./InputGroup-CFsFnneg.js";import{S as A}from"./Search-TBOVBhME.js";import{S as h}from"./Select-DMIohEk7.js";import{T as v}from"./TextArea-CiGe9Gjt.js";import{T as C}from"./TextInput-CDvnIiCQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B96PERzD.js";import"./Button-Dz5LnTjz.js";import"./usePreviousValue-wi19ux9_.js";import"./Loader-9p0sfjH1.js";import"./useDelayedRender-C3Zl3DGy.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-e35PAjvj.js";import"./IconButton-DSOu9W0P.js";import"./CloseIcon-BR5jZdTb.js";import"./SearchIcon-BogFQFRs.js";import"./PopupTip-B5Hew7U-.js";import"./QuestionIcon-Jn2n_Wtr.js";import"./TooltipTrigger-Dn7I84bi.js";import"./floating-ui.react-CvD2NMmp.js";import"./index-B5_Qdsi4.js";import"./index-DsADiTet.js";import"./TooltipContent-BGEDCgR2.js";import"./useBrowserPreferences-CTvFa2-o.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-DLA2nl0z.js";import"./Checkbox-4BKxsWYn.js";import"./RadioButton.stories-B3sBIv0D.js";import"./RadioButton-UWJFAFfT.js";import"./SupportLabel-IMgIZ6_E.js";import"./SuccessIcon-CHaV0UUM.js";import"./WarningIcon-Co_QXi7W.js";import"./BaseRadioButton-DBDWWo65.js";import"./BaseRadioButton.stories-CE-iiNCp.js";import"./CheckboxPanel.stories-DtNeoxCM.js";import"./InputPanel-CT7DW1UZ.js";import"./Flex-DMTnb7xC.js";import"./SlotComponent-YfHQb0RT.js";import"./mergeRefs-B1OG-BWN.js";import"./RadioPanel.stories-BFHh5DEo.js";import"./RadioPanel-D9FFZZRh.js";import"./Title-WKmU1QAr.js";import"./Card-Wdfzh_Bb.js";import"./Text-B-o7z1Ry.js";import"./Tag-BgDubIb3.js";import"./ExpandablePanel-BN8_TqX2.js";import"./useAnimatedHeightBetween-_oVSrwMf.js";import"./tokens-CW-NfdIE.js";import"./Expander-BEoVNdJJ.js";import"./ChevronUpIcon-CT0SZcuI.js";import"./ListItem-BcUUl37T.js";import"./BaseTextInput-CFZL8Jw-.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-kY0QV7do.js";import"./index.esm-BKElBqoL.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CyYO-BZ6.js";import"./useListNavigation-CDlwDdtf.js";import"./Chip-B79A9tcv.js";import"./CheckIcon-CmCB0Ec5.js";import"./ArrowVerticalAnimated-BDUbLVSM.js";import"./ArrowDownIcon-DoUIsAoG.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DeDppBsQ.js";import"./TableCaption-ClNfk_I5.js";import"./tableContext-CG63nKJ1.js";import"./CalendarIcon-fEvmQzjK.js";import"./Label-CvXIU6ty.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
