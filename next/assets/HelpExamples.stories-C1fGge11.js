import{j as r}from"./iframe-C8PavQ4S.js";import{H as o}from"./Help-DN7IZOP_.js";import"./Help.stories-L3J-tKfU.js";import{A as c,m as d}from"./Autosuggest.stories-e3aroYsw.js";import g,{ComboboxStory as x}from"./Combobox.stories-BRO_rpzA.js";import H from"./FieldGroup.stories-BZFoJO_2.js";import b from"./InputGroup.stories-B_QI2Hf3.js";import S from"./select.stories-YxlJK0mP.js";import j from"./TextArea.stories-D3bWyOtH.js";import{C as f}from"./Combobox-I3mx6uwh.js";import{D as I}from"./DateInput-D-l1sL3I.js";import{F as T}from"./FieldGroup-Cs7H3xfM.js";import{I as G}from"./InputGroup-Dvapxj8i.js";import{S as A}from"./Search-DHnsiLRO.js";import{S as h}from"./Select-CTg8xJHO.js";import{T as v}from"./TextArea-DkDvpVwR.js";import{T as C}from"./TextInput-Cj9dS4pG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BRgDz6hB.js";import"./Button-BPEp9hi5.js";import"./usePreviousValue-CUBG5K1v.js";import"./Loader-Cr9KBCHE.js";import"./useDelayedRender-EI2KQwCd.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-B2WbXKAM.js";import"./IconButton-bIEh7qz0.js";import"./CloseIcon-CA7za998.js";import"./SearchIcon-gd3xBcoa.js";import"./PopupTip-CwMAgnh-.js";import"./QuestionIcon-dfeMIX5k.js";import"./TooltipTrigger-LKQ0ggjL.js";import"./floating-ui.react-DiNzNoUZ.js";import"./index-BbzDqO2S.js";import"./index-B4BwsJHt.js";import"./TooltipContent-CI3Dhi4-.js";import"./useBrowserPreferences-DSWFztIp.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-B89IZBwG.js";import"./Checkbox-DKmSzsWO.js";import"./RadioButton.stories-BF-5kgsX.js";import"./RadioButton-BNra6VSm.js";import"./SupportLabel-BhQFbHLq.js";import"./SuccessIcon-BPzNRhCY.js";import"./WarningIcon-GWxwhnWP.js";import"./BaseRadioButton-Dp6Kz20r.js";import"./BaseRadioButton.stories-B6wo80Dh.js";import"./CheckboxPanel.stories-DJCgeImU.js";import"./InputPanel-BcZ4FUHb.js";import"./Flex-DASr2a6t.js";import"./SlotComponent-BkKa7HSh.js";import"./mergeRefs-B7F_cWf9.js";import"./RadioPanel.stories-DgzEJK7m.js";import"./RadioPanel-B7vQ8XrH.js";import"./Title-hqXB-Jhh.js";import"./Card-DXMx_ZjK.js";import"./Text-DI-Z24Us.js";import"./Tag-B9XUkew2.js";import"./ExpandablePanel-C6BCdeHC.js";import"./useAnimatedHeightBetween-xfcnGhDi.js";import"./tokens-CW-NfdIE.js";import"./Expander-D4g7bqlI.js";import"./ChevronUpIcon-DJWcpOHW.js";import"./ListItem-Do5nmICw.js";import"./BaseTextInput-CIHjoWpy.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D-h0w2DF.js";import"./index.esm-DmCWiTNf.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-Ce2RdgAF.js";import"./useListNavigation-CwPKoYTB.js";import"./Chip-CZp8NDkq.js";import"./CheckIcon-CfKPyEPI.js";import"./ArrowVerticalAnimated-DPLGSykG.js";import"./ArrowDownIcon-CU8H_hyL.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BCKFdwZd.js";import"./TableCaption-Ckmc3vT9.js";import"./tableContext-BYMvy5qV.js";import"./CalendarIcon-Dh_Nh3yE.js";import"./Label-BlWHP-iF.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
