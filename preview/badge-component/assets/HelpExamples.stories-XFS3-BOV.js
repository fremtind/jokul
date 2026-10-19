import{j as r}from"./iframe-BK24M5Oe.js";import{H as o}from"./Help-DY60T-OL.js";import"./Help.stories-BZQjy_Xj.js";import{A as c,m as d}from"./Autosuggest.stories-ChaSdlps.js";import g,{ComboboxStory as x}from"./Combobox.stories-CE5KfEyc.js";import H from"./FieldGroup.stories-BATLrnPd.js";import b from"./InputGroup.stories-1HafwGQt.js";import S from"./select.stories-C27dzFQd.js";import j from"./TextArea.stories-Bs0Ks2pS.js";import{C as f}from"./Combobox-DiTrLLkk.js";import{D as I}from"./DateInput-TicIgrxj.js";import{F as T}from"./FieldGroup-DXOwVK5V.js";import{I as G}from"./InputGroup-DQvRiwZt.js";import{S as A}from"./Search-COnb1nVQ.js";import{S as h}from"./Select-DG0j-TAo.js";import{T as v}from"./TextArea-BXDIm2YR.js";import{T as C}from"./TextInput-C-8Wr39X.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CW7-MYqB.js";import"./Button-BXxm3ag3.js";import"./usePreviousValue-Dm7-2-b1.js";import"./Loader-DYpw2Bm-.js";import"./useDelayedRender-BP9XK7Zk.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-JCj1BlW-.js";import"./IconButton-B9BX_vn0.js";import"./CloseIcon-DS6LVceO.js";import"./SearchIcon-toEaEMt9.js";import"./PopupTip-Cy1KXpg8.js";import"./QuestionIcon-Brs-ONkl.js";import"./TooltipTrigger-Dt-hz6Oz.js";import"./floating-ui.react-CiFWbRxl.js";import"./index-DrhQd9H2.js";import"./index-C1LyaDKF.js";import"./TooltipContent-D9QRiC0P.js";import"./useBrowserPreferences-BQpK0O4f.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CxkqCH-P.js";import"./InputPanel-C0bBjtdV.js";import"./Checkbox-cYKa5C_b.js";import"./RadioButton-CXECx3Dk.js";import"./SupportLabel-D5LsSob8.js";import"./SuccessIcon-yEJbChJp.js";import"./WarningIcon-D8VLpzqT.js";import"./BaseRadioButton-kuApLFPS.js";import"./Flex-CtmWpnaf.js";import"./SlotComponent-RKf43eom.js";import"./mergeRefs-DdPSoY4m.js";import"./Checkbox.stories-D7CxoiAb.js";import"./RadioButton.stories-CZLn3zX4.js";import"./BaseRadioButton.stories-BrbZhM_z.js";import"./RadioPanel.stories-Cxifhozn.js";import"./RadioPanel-buC1V1aZ.js";import"./Title-GEpLXO2M.js";import"./Card-CtCd9Lll.js";import"./Text-D8cXO25o.js";import"./Tag-4Y-0CDyK.js";import"./ExpandablePanel-yGT4V9m8.js";import"./useAnimatedHeightBetween-DxuHDjFP.js";import"./tokens-HKQN8Vn-.js";import"./Expander-C8ldt6qq.js";import"./ChevronUpIcon-Bpt1WRoW.js";import"./ListItem-BDXbnLl8.js";import"./BaseTextInput-BamG08i1.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-COABEwv_.js";import"./index.esm-DDhgI9_C.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CO0PEbY5.js";import"./useListNavigation-BkorCuYa.js";import"./Chip-CSJlbXoX.js";import"./CheckIcon-BL9O8ZqB.js";import"./ArrowVerticalAnimated-BehX5FVk.js";import"./ArrowDownIcon-D210lwBa.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BsKn0-pb.js";import"./TableCaption-BygnXH5T.js";import"./tableContext-CmFmgjS8.js";import"./CalendarIcon-De7Hb3Fd.js";import"./Label-D454D0nm.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
