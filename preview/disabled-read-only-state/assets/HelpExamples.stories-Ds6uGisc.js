import{j as r}from"./iframe-Un4u8ble.js";import{H as o}from"./Help-CPgGLsTz.js";import"./Help.stories-Cw09XayS.js";import{A as c,m as d}from"./Autosuggest.stories-Bnjox84Z.js";import g,{ComboboxStory as x}from"./Combobox.stories-BuOIV16Q.js";import H from"./FieldGroup.stories-DEfiNAdW.js";import b from"./InputGroup.stories-U9Pjhbgf.js";import S from"./select.stories-BPyHoapx.js";import j from"./TextArea.stories-C7_qJ6b1.js";import{C as f}from"./Combobox-B-FW9G84.js";import{D as I}from"./DateInput-mtDO1wdd.js";import{F as T}from"./FieldGroup-DhlgmweU.js";import{I as G}from"./InputGroup-B_gwCkjB.js";import{S as A}from"./Search-UmrtH6uf.js";import{S as h}from"./Select-BhZeNmQd.js";import{T as v}from"./TextArea-DEGMYaok.js";import{T as C}from"./TextInput-Ds7RDi01.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BE-Nj4c-.js";import"./Button-DL4BfSDz.js";import"./usePreviousValue-BWvpykeN.js";import"./Loader-ExVESAM3.js";import"./useDelayedRender-DG4FG95-.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Cg3o3FDR.js";import"./IconButton-B_2NK8JL.js";import"./CloseIcon-5xCbpV1k.js";import"./SearchIcon-CBmXyWL_.js";import"./PopupTip-D_LstZpu.js";import"./QuestionIcon-DidVhAvY.js";import"./TooltipTrigger-Bhbvqe55.js";import"./floating-ui.react-BrU6Tx_R.js";import"./index-DQuwD8Ww.js";import"./index-DuCfJzL-.js";import"./TooltipContent-DBopdQpl.js";import"./useBrowserPreferences-BKxb1R-J.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Byy9h55W.js";import"./CheckboxPanel-B46HHMtV.js";import"./InputPanel-CeZqfVFi.js";import"./Checkbox-DVaNyjav.js";import"./RadioButton-DoO7Hp1h.js";import"./SupportLabel-DmnibL6V.js";import"./SuccessIcon-ln5l7J5u.js";import"./WarningIcon-RsipP120.js";import"./BaseRadioButton-XBmJenV6.js";import"./Flex-Ci-ipJ53.js";import"./SlotComponent-ZyiHHNUf.js";import"./mergeRefs-C9durSYX.js";import"./Checkbox.stories-DvVFEoCw.js";import"./RadioButton.stories-B5RwxzIL.js";import"./BaseRadioButton.stories-DKXoFdXH.js";import"./RadioPanel.stories-Ba-RjDZm.js";import"./RadioPanel-DLGd0sQr.js";import"./Title-BnR39vfn.js";import"./Card-D7IAV-Ys.js";import"./Text-BmkQkz6M.js";import"./Tag-C804_4hY.js";import"./ExpandablePanel-CX1rYp2F.js";import"./useAnimatedHeightBetween-CV3db30s.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CykEFhdF.js";import"./ChevronUpIcon-C0XML8nK.js";import"./ListItem-BoGvAQip.js";import"./BaseTextInput-xlu0or7S.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CSLi7UyO.js";import"./index.esm-C_UixtVl.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-C3YofKvk.js";import"./useListNavigation-BlcgE5MD.js";import"./Chip-vNaGg5VQ.js";import"./CheckIcon-FPUFa3ft.js";import"./ArrowVerticalAnimated-CEBgFygD.js";import"./ArrowDownIcon-BR-fSFCv.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B9poHXl4.js";import"./TableCaption-A4t1WPHL.js";import"./tableContext-DeZA-TpR.js";import"./CalendarIcon-B92tWJK2.js";import"./Label-WTHz9bAK.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};
