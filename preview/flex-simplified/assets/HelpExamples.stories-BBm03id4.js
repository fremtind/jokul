import{j as r}from"./iframe-CmNYqM8v.js";import{H as o}from"./Help-DbIPM8uy.js";import"./Help.stories-DdmB_7mH.js";import{A as c,m as d}from"./Autosuggest.stories-CVJ4aP5W.js";import g,{ComboboxStory as x}from"./Combobox.stories-Ye1xVqb6.js";import H from"./FieldGroup.stories-B7GH5eeE.js";import b from"./InputGroup.stories-CQ-V2A9J.js";import S from"./select.stories-6qh19IFG.js";import j from"./TextArea.stories-CdURoFkc.js";import{C as f}from"./Combobox-BJBtr7dZ.js";import{D as I}from"./DateInput-BWfy_n03.js";import{F as T}from"./FieldGroup-BH4UXvVG.js";import{I as G}from"./InputGroup-GszzXcDx.js";import{S as A}from"./Search-2wDVC6yL.js";import{S as h}from"./Select-C5bdgJU_.js";import{T as v}from"./TextArea-CbSX3K4j.js";import{T as C}from"./TextInput-NV-Ct4qb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C7q6JHEa.js";import"./Button-DyWV3yM6.js";import"./usePreviousValue-Bsm-WdmL.js";import"./Loader-BJaewbTT.js";import"./useDelayedRender-Cg5EGmBP.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-B-TxhbV9.js";import"./IconButton-DvHOhVFW.js";import"./CloseIcon-QkPe5rjS.js";import"./SearchIcon-TW3sYYKc.js";import"./PopupTip-Cprl5gtu.js";import"./QuestionIcon-CSGsfNE7.js";import"./TooltipTrigger-DyLE5HAD.js";import"./floating-ui.react-DaNw96E5.js";import"./index-CeW3OeTx.js";import"./index-DenP0JpR.js";import"./TooltipContent-CQIv5FZF.js";import"./useBrowserPreferences-DRMSIgTQ.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BFnxS_vb.js";import"./InputPanel-CoAcdg95.js";import"./Checkbox-DGxhROFk.js";import"./RadioButton-C0XgXKmU.js";import"./SupportLabel-CH2mW8dj.js";import"./SuccessIcon-B8N-4xA8.js";import"./WarningIcon-UX-_YZoo.js";import"./BaseRadioButton-Bf7AeoLk.js";import"./Flex-Ce32Ok4X.js";import"./SlotComponent-DbvNiTyg.js";import"./mergeRefs-Cflw0eCC.js";import"./Checkbox.stories-HRswwwdi.js";import"./RadioButton.stories-Cta8HsKf.js";import"./BaseRadioButton.stories-BqnDW_Sp.js";import"./RadioPanel.stories-CSoKpAUT.js";import"./RadioPanel-B_BfL3Wx.js";import"./Title-qr2s-7sU.js";import"./Card-dkVFhQWV.js";import"./Text-2Z1R9Vl2.js";import"./Tag-Z_3nLmTo.js";import"./ExpandablePanel-CztCRFw8.js";import"./useAnimatedHeightBetween-Db799s93.js";import"./tokens-HKQN8Vn-.js";import"./Expander-0OBvZOG6.js";import"./ChevronUpIcon-CapQorMJ.js";import"./ListItem-pV40x96T.js";import"./BaseTextInput-BxB0vGSQ.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-WPGmWLRF.js";import"./index.esm-D3N8veXt.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-WlxNzeTa.js";import"./useListNavigation-DpoIlW8x.js";import"./Chip-B5VTfU9N.js";import"./CheckIcon-BI7BZfZk.js";import"./ArrowVerticalAnimated-CjcLUz_X.js";import"./ArrowDownIcon-D9ce0ST-.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-72rugET5.js";import"./TableCaption-DZMtiGMc.js";import"./tableContext-CAGaw_VI.js";import"./CalendarIcon-dSUEgcVY.js";import"./Label-Cw6Z8f1z.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
