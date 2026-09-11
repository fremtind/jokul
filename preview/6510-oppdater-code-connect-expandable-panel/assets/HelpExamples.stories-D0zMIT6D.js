import{j as r}from"./iframe-8yqxqoJu.js";import{H as o}from"./Help-DGFiOJ7i.js";import"./Help.stories-Cf0H42mC.js";import{A as c,m as d}from"./Autosuggest.stories-D9onnU4q.js";import g,{ComboboxStory as x}from"./Combobox.stories-BIRkOqy9.js";import H from"./FieldGroup.stories-9wt9IjKt.js";import b from"./InputGroup.stories-BlhWZQnr.js";import S from"./select.stories-BaAnBFwN.js";import j from"./TextArea.stories-Bn4TVSph.js";import{C as f}from"./Combobox-r4LcTRzX.js";import{D as I}from"./DateInput-CS8DFdmk.js";import{F as T}from"./FieldGroup-Dzbk9HMR.js";import{I as G}from"./InputGroup-BuqnzTOf.js";import{S as A}from"./Search-Duy4u8bM.js";import{S as h}from"./Select-D0Z2NoSA.js";import{T as v}from"./TextArea-pQVrRV7T.js";import{T as C}from"./TextInput-C0CER_ON.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-UdeEzISX.js";import"./Button-B2y9WQeJ.js";import"./usePreviousValue-CtkpFxNY.js";import"./Loader-B-Qr4oeA.js";import"./useDelayedRender-d-VZSjxQ.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-SNAhZQ4f.js";import"./IconButton-Cj1FthZn.js";import"./CloseIcon-Dg5fhBkm.js";import"./SearchIcon-B29bSmyD.js";import"./PopupTip-BFl5gftu.js";import"./QuestionIcon-MmMtO7L1.js";import"./TooltipTrigger-xjqO_JYe.js";import"./floating-ui.react-6hcoJaHo.js";import"./index-D-QhnaSX.js";import"./index-CpoLrh0f.js";import"./TooltipContent-CE7J0c2V.js";import"./useBrowserPreferences-DDB4gBD2.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-D5O2Euko.js";import"./InputPanel-CpsTWcBs.js";import"./Checkbox-CTAL557r.js";import"./RadioButton-Sixg8mEi.js";import"./SupportLabel-KqOYX_HJ.js";import"./SuccessIcon-CB9pjdbn.js";import"./WarningIcon-Cango9VG.js";import"./BaseRadioButton-DucVn98T.js";import"./Flex-D6ZJTViC.js";import"./SlotComponent-CW0N-GUs.js";import"./mergeRefs-yvyCsg5J.js";import"./Checkbox.stories-RwgFIHpq.js";import"./RadioButton.stories-DYz80ROx.js";import"./BaseRadioButton.stories-Ch8g_MS3.js";import"./RadioPanel.stories-DI16lbw-.js";import"./RadioPanel-CXF_KGaZ.js";import"./Title-LKDMyQdd.js";import"./Card-Bbhm_Thc.js";import"./Text-CnxtV-Mz.js";import"./Tag-Be4QY6Yj.js";import"./ExpandablePanel-DZacARCy.js";import"./useAnimatedHeightBetween-Rm9gowfS.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DMd4b8zS.js";import"./ChevronUpIcon-DcIkiViK.js";import"./ListItem-CVpy2luB.js";import"./BaseTextInput-D6ViJxzm.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CbtGwGVM.js";import"./index.esm-C01mhY2Q.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DioJVYUB.js";import"./useListNavigation-BLuMZYs3.js";import"./Chip-BWRlszoO.js";import"./CheckIcon-Dlw0dE-N.js";import"./ArrowVerticalAnimated-DgnvjB_M.js";import"./ArrowDownIcon-B9VJk179.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-aKbhA8L5.js";import"./TableCaption-DPak88Zx.js";import"./tableContext-x3osOHKk.js";import"./CalendarIcon-Cxid3pW3.js";import"./Label-LUJ6oK87.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
