import{j as r}from"./iframe-DfQU3pFC.js";import{H as o}from"./Help-D0gNU68t.js";import"./Help.stories-C8VJ8BQo.js";import{A as c,m as d}from"./Autosuggest.stories-HBjvPqQk.js";import g,{ComboboxStory as x}from"./Combobox.stories-BTF93fyG.js";import H from"./FieldGroup.stories-D7vZQRva.js";import b from"./InputGroup.stories-Uqx0O8iF.js";import S from"./select.stories-C0CraQFO.js";import j from"./TextArea.stories-GmEegX7E.js";import{C as f}from"./Combobox-B4VC7cxR.js";import{D as I}from"./DateInput-Cpw3fTcz.js";import{F as T}from"./FieldGroup-hciFdd_Z.js";import{I as G}from"./InputGroup-C81uw8P9.js";import{S as A}from"./Search-BPcgnjzA.js";import{S as h}from"./Select-BcQxpvH9.js";import{T as v}from"./TextArea-BysGcd7X.js";import{T as C}from"./TextInput-Byt-wAHl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-UBvEbjd5.js";import"./Button-6u6xSrl3.js";import"./usePreviousValue-BVkXxQ4V.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-jV6QPgiS.js";import"./useDelayedRender-DZzZ11aQ.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-IpoVIjEZ.js";import"./IconButton-Caobh-SV.js";import"./CloseIcon-DDIu3zVO.js";import"./SearchIcon-pkXylfjz.js";import"./PopupTip-h_7ReIMw.js";import"./QuestionIcon-Cu-2InOw.js";import"./TooltipTrigger-DLuohlBs.js";import"./floating-ui.react-SPYvXzEF.js";import"./index-DhJ4K0e2.js";import"./index-BzwZtKLY.js";import"./TooltipContent-fn-uk6dm.js";import"./useBrowserPreferences-B3eNFtJi.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CpbVd0AL.js";import"./InputPanel-GSJVUCxU.js";import"./Checkbox-B5qYW9vV.js";import"./RadioButton-sr5M5UXR.js";import"./SupportLabel-C1-u48DA.js";import"./SuccessIcon-DHc9mPOd.js";import"./WarningIcon-DUZD4RWo.js";import"./BaseRadioButton-2PUobWMp.js";import"./Flex-hv-q7tK3.js";import"./SlotComponent-BangIyGz.js";import"./mergeRefs-CKwrSkYv.js";import"./Checkbox.stories-DL-486y4.js";import"./RadioButton.stories-DNiaigSA.js";import"./BaseRadioButton.stories-C8XJBrfP.js";import"./RadioPanel.stories-oP3Ta7co.js";import"./RadioPanel-BWywH3Wq.js";import"./Title-Ca6FLGYv.js";import"./Card-CvKKOoBD.js";import"./Text-CM7brels.js";import"./Tag-CkEjCPmo.js";import"./ExpandablePanel-UhE7vxhL.js";import"./useAnimatedHeightBetween-DA1To1qg.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BUTlh9Ei.js";import"./ChevronUpIcon-Dp0PvlnY.js";import"./ListItem-BkbsGvg6.js";import"./BaseTextInput-BGsKT_wv.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-3XKLhSHj.js";import"./index.esm-BwpvSx-e.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-Bf1Q8eVT.js";import"./useListNavigation-DGfjbvs3.js";import"./Chip-Bk1jWVql.js";import"./CheckIcon-fDr16Gpv.js";import"./ArrowVerticalAnimated-vPFDQZ3z.js";import"./ArrowDownIcon-Y1XBbeq2.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DIx-NGih.js";import"./TableCaption-DpXQgN4a.js";import"./tableContext-COwUjKdi.js";import"./CalendarIcon-DnWpnltM.js";import"./Label-Y7nfBV5B.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
