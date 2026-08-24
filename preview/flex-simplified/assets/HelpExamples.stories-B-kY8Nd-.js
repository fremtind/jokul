import{j as r}from"./iframe-uPNgk1Tq.js";import{H as o}from"./Help-DY03uYwY.js";import"./Help.stories-LCNf8AGt.js";import{A as c,m as d}from"./Autosuggest.stories-DaXJsDHN.js";import g,{ComboboxStory as x}from"./Combobox.stories-CTHdy0sr.js";import H from"./FieldGroup.stories-DTfui2vd.js";import b from"./InputGroup.stories-BmF-m_Uv.js";import S from"./select.stories-BshyYlZB.js";import j from"./TextArea.stories-BbbgzBTS.js";import{C as f}from"./Combobox-D_nYNgH3.js";import{D as I}from"./DateInput-_wa8csxM.js";import{F as T}from"./FieldGroup-DA1ykIkC.js";import{I as G}from"./InputGroup-DFAys_W5.js";import{S as A}from"./Search-B0270WoQ.js";import{S as h}from"./Select-SPfJDOnX.js";import{T as v}from"./TextArea-CuP9InHd.js";import{T as C}from"./TextInput-CLaMl-UM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-NTmVKsgF.js";import"./Button-Bx7RLA4h.js";import"./usePreviousValue-iO6hNSPn.js";import"./Loader-C2HLXk7H.js";import"./useDelayedRender-DKqkDAiz.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-B891SsP4.js";import"./IconButton-CQUl3xbu.js";import"./CloseIcon-CHtdWNkd.js";import"./SearchIcon-CZ1xPGCt.js";import"./PopupTip-J3Yw2Xy8.js";import"./QuestionIcon-BjeQ6-_A.js";import"./TooltipTrigger-XvVzfhxV.js";import"./floating-ui.react-BMgfNRhP.js";import"./index-nGyVQsUp.js";import"./index-BWqy6RUB.js";import"./TooltipContent-EYsOO0EQ.js";import"./useBrowserPreferences--ZuIYUea.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-DtLgBz8s.js";import"./Checkbox-BmKKoJxz.js";import"./RadioButton.stories-Blu2Gquy.js";import"./RadioButton-CZFDns7U.js";import"./SupportLabel-B1ByXM8X.js";import"./SuccessIcon-DUyIxYqh.js";import"./WarningIcon-CaPkp4OG.js";import"./BaseRadioButton-DL0OQuj2.js";import"./BaseRadioButton.stories-CVsIhVCY.js";import"./CheckboxPanel.stories-Bnlj-kvV.js";import"./InputPanel-CR4NM6dg.js";import"./Flex-DTJ46e5r.js";import"./SlotComponent-DmXTtcAc.js";import"./mergeRefs-DnYCYYKk.js";import"./RadioPanel.stories-DZ2xTy-T.js";import"./RadioPanel-DuPLKU9_.js";import"./Title-BFrmmZ6j.js";import"./Card-DryaCtc6.js";import"./Text-DsFt4T4T.js";import"./Tag-CJCsXBx4.js";import"./ExpandablePanel-cQcSiaRe.js";import"./useAnimatedHeightBetween-BPH0ZwBp.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CgOPlukV.js";import"./ChevronUpIcon-C_Ms0VRZ.js";import"./ListItem-B1T1ToRs.js";import"./BaseTextInput-DmnMoEwW.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Bl_mMc1e.js";import"./index.esm-fBWBMYPz.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BxhFi2XF.js";import"./useListNavigation-BLO2eaT2.js";import"./Chip-D69nkC6_.js";import"./CheckIcon-Bwej_SQR.js";import"./ArrowVerticalAnimated-DYkd4LPW.js";import"./ArrowDownIcon-BoxsVFhi.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BT5zTtHu.js";import"./TableCaption-Cy1odxR0.js";import"./tableContext-ZzoBhn-k.js";import"./CalendarIcon-BAV9ygB-.js";import"./Label-DATiPrrX.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
