import{j as r}from"./iframe-D2AmJwBk.js";import{H as o}from"./Help-DJrOkG5h.js";import"./Help.stories-BHoNKz_x.js";import{A as c,m as d}from"./Autosuggest.stories-DlGMh4iG.js";import g,{ComboboxStory as x}from"./Combobox.stories-BKDjmYe4.js";import H from"./FieldGroup.stories-D9nzeUH5.js";import b from"./InputGroup.stories-Bskt_dYW.js";import S from"./select.stories-4UuHS1eq.js";import j from"./TextArea.stories-D-5tmWMW.js";import{C as f}from"./Combobox-C8EYPOfX.js";import{D as I}from"./DateInput-2E7H47x5.js";import{F as T}from"./FieldGroup-D3ElSacT.js";import{I as G}from"./InputGroup-DnJO-BXP.js";import{S as A}from"./Search-sJNGzHmQ.js";import{S as h}from"./Select-B_d4qsd5.js";import{T as v}from"./TextArea-8PP9D2to.js";import{T as C}from"./TextInput-D0FECyoX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-ZyWmcKC_.js";import"./Button-vRuMKsFo.js";import"./usePreviousValue-D8qpCKtL.js";import"./Loader-58iLoPg4.js";import"./useDelayedRender-BQg5Tbk0.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-C6uhcE7a.js";import"./IconButton-CBacPeE8.js";import"./CloseIcon-CBVFl-p0.js";import"./SearchIcon-DpY96jPY.js";import"./PopupTip-CC3yp1hW.js";import"./QuestionIcon-DX0dnK8P.js";import"./TooltipTrigger-BGlATKvC.js";import"./floating-ui.react-DARZ7cLy.js";import"./index-CO-cCMCQ.js";import"./index-BU5kTxSR.js";import"./TooltipContent-D2_Wyyh7.js";import"./useBrowserPreferences-DRNesszb.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-WnMOx8uX.js";import"./Checkbox-DsZSPz6o.js";import"./RadioButton.stories-CQFouwy6.js";import"./RadioButton-5-bGQxAF.js";import"./SupportLabel-DncnRvae.js";import"./SuccessIcon-Pfu4BAaV.js";import"./WarningIcon-BgtgQxqE.js";import"./BaseRadioButton-C7VcBdY2.js";import"./BaseRadioButton.stories-CiNHBiCQ.js";import"./CheckboxPanel.stories-KH2dcyxB.js";import"./InputPanel-Wuzprcbg.js";import"./Flex-bhmIZK7r.js";import"./SlotComponent-DE-y9Qp-.js";import"./mergeRefs-BdHmJysb.js";import"./RadioPanel.stories-B9OX6QLb.js";import"./RadioPanel-AWH0H_wo.js";import"./Title-C_KTMN_b.js";import"./Card-DsVyAU4V.js";import"./Text-CPwVkWAA.js";import"./Tag-BqUkOO0s.js";import"./ExpandablePanel-CHSnQ7j9.js";import"./useAnimatedHeightBetween-CEHr7A06.js";import"./tokens-CW-NfdIE.js";import"./Expander-B_i5AVCs.js";import"./ChevronUpIcon-DzLymyvm.js";import"./ListItem-DWfpUryZ.js";import"./BaseTextInput-DiL0ZaZi.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DaUgOwBl.js";import"./index.esm-C8lg47LL.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CRimEoiB.js";import"./useListNavigation-BvZoly61.js";import"./Chip-RrgwXngV.js";import"./CheckIcon-DN2Dz3Jo.js";import"./ArrowVerticalAnimated-BJ8qcMwN.js";import"./ArrowDownIcon-C8bPQRkE.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B0IXvAd9.js";import"./TableCaption-B-9DGR2N.js";import"./tableContext-CCMC34Mx.js";import"./CalendarIcon-CDHrQw9c.js";import"./Label-DEAINvVt.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
