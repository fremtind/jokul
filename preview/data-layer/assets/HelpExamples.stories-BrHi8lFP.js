import{j as r}from"./iframe-C5mqiCLF.js";import{H as o}from"./Help-BgB-j4wH.js";import"./Help.stories-CjyJQi3W.js";import{A as c,m as d}from"./Autosuggest.stories-HYXSeoCW.js";import g,{ComboboxStory as x}from"./Combobox.stories-DnISpEFL.js";import H from"./FieldGroup.stories-D5Vmbr9-.js";import b from"./InputGroup.stories-CNmy1Q9l.js";import S from"./select.stories-CX04Akeg.js";import j from"./TextArea.stories-CxurtKOA.js";import{C as f}from"./Combobox-B39EvWKY.js";import{D as I}from"./DateInput-ChNPG0Ij.js";import{F as T}from"./FieldGroup-pac7nFRV.js";import{I as G}from"./InputGroup-CpDKZ0xn.js";import{S as A}from"./Search-hv9kQwM7.js";import{S as h}from"./Select-1NBfjAon.js";import{T as v}from"./TextArea-DMGvbClf.js";import{T as C}from"./TextInput-BYWOdvbO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CSRiLZ8e.js";import"./types-YjSsgwWY.js";import"./Button-1LkMbjoO.js";import"./usePreviousValue-Sh4cdfzP.js";import"./Loader-CnOMqVGx.js";import"./useDelayedRender-D1D5cNNG.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DtC_nmmh.js";import"./IconButton-C2-BmvVf.js";import"./CloseIcon-D8wNCwty.js";import"./SearchIcon-CmTKKADa.js";import"./PopupTip-B4wDMpIb.js";import"./QuestionIcon-BlQjRBOD.js";import"./TooltipTrigger-DWQwnVNy.js";import"./floating-ui.react-DDvKbtNN.js";import"./index-CnpRsDMl.js";import"./index-BaYpuSPS.js";import"./TooltipContent-Cfa7GXdE.js";import"./useBrowserPreferences-mvg8hUrc.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-CTXqUXkz.js";import"./InputPanel-NNxfpLZI.js";import"./Checkbox-DxUc4ZJj.js";import"./RadioButton-D7JKxMgD.js";import"./SupportLabel-IUODpl5q.js";import"./SuccessIcon-CWAgkxzi.js";import"./WarningIcon-CXvAnsoL.js";import"./BaseRadioButton-D2VGNGUO.js";import"./Flex-CZmtP9Dk.js";import"./SlotComponent-caqVP8EM.js";import"./mergeRefs-BlpLjbDu.js";import"./Checkbox.stories-BODzjht3.js";import"./RadioButton.stories-aQJKGG0X.js";import"./BaseRadioButton.stories-Cnd2txMj.js";import"./RadioPanel.stories-DSoHj9Ea.js";import"./RadioPanel-BO7D4-hL.js";import"./Title-BSfyVm1A.js";import"./Card-qMNgFN3O.js";import"./Text-C-WU8Dzm.js";import"./Tag-CjEeSHPe.js";import"./ExpandablePanel-ebRSUUQy.js";import"./useAnimatedHeightBetween-BQGvBq7Q.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DRf-X8XJ.js";import"./ChevronUpIcon-DrJpYg2N.js";import"./ListItem-CwIMf6tF.js";import"./BaseTextInput-C9xQ_wTk.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D_VTv9-F.js";import"./index.esm-HVaHCfo5.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BdNYJOcF.js";import"./useListNavigation-xeyvy71G.js";import"./Chip-CcOtj1FM.js";import"./CheckIcon-ROmbvRco.js";import"./ArrowVerticalAnimated-CaxQC1Q-.js";import"./ArrowDownIcon-CRyvQc2T.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B5gzudmq.js";import"./TableCaption-5cP-i1xY.js";import"./tableContext-BZ2OH7bo.js";import"./CalendarIcon-CSGwCmKP.js";import"./Label-XUot8IJ4.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
