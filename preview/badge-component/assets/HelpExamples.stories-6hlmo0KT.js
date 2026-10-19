import{j as r}from"./iframe-CrAzp6r8.js";import{H as o}from"./Help-Cds95Miu.js";import"./Help.stories-Cn3ulZu1.js";import{A as c,m as d}from"./Autosuggest.stories-YNL8-bG8.js";import g,{ComboboxStory as x}from"./Combobox.stories-DXaaeuKZ.js";import H from"./FieldGroup.stories-Ca44ibwc.js";import b from"./InputGroup.stories-CT0Pr0U1.js";import S from"./select.stories-DDaqsm3z.js";import j from"./TextArea.stories-Bb0xo3iR.js";import{C as f}from"./Combobox-BUbzi8Gl.js";import{D as I}from"./DateInput-DL67rpAF.js";import{F as T}from"./FieldGroup-BxRybavX.js";import{I as G}from"./InputGroup-UMb1FRJt.js";import{S as A}from"./Search-DwPrTQez.js";import{S as h}from"./Select-Dwot9Pz0.js";import{T as v}from"./TextArea-JV0dpuI9.js";import{T as C}from"./TextInput-CerGdTCW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CQxAKMYS.js";import"./Button-BZm2BTPO.js";import"./usePreviousValue-9Q7SSHxU.js";import"./Loader-DfXBLB89.js";import"./useDelayedRender-BASJiTPP.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DyC6VgUp.js";import"./IconButton-DvEeEa_B.js";import"./CloseIcon-BROIPZlp.js";import"./SearchIcon-C5hMX-0y.js";import"./PopupTip-Cnf4hwIg.js";import"./QuestionIcon-CystLsqS.js";import"./TooltipTrigger-zbLisY93.js";import"./floating-ui.react-CpFYwGLS.js";import"./index-dWnuaQS2.js";import"./index-C6RPJB8I.js";import"./TooltipContent-DaMExsV-.js";import"./useBrowserPreferences-DMMovZFB.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-OvtCjgOv.js";import"./InputPanel-DQ1IPeT9.js";import"./Checkbox-D-lB5YOw.js";import"./RadioButton-CmK7KNV1.js";import"./SupportLabel-NMo0P3TI.js";import"./SuccessIcon-DzWMlBSh.js";import"./WarningIcon-BHmqu_Dr.js";import"./BaseRadioButton-BJdDhmcf.js";import"./Flex-77zx4m8x.js";import"./SlotComponent-D1LATgJl.js";import"./mergeRefs-BJFBn82p.js";import"./Checkbox.stories-hoM6sT7e.js";import"./RadioButton.stories-OBRW9hZk.js";import"./BaseRadioButton.stories-D7QwcPz6.js";import"./RadioPanel.stories-CEEj6OSQ.js";import"./RadioPanel-CRBUWvkV.js";import"./Title-Cp9b4-Dr.js";import"./Card-CSGl4XtI.js";import"./Text-Bi0Ei9Ln.js";import"./Tag-Dz7os0TV.js";import"./ExpandablePanel-Cxar7oXY.js";import"./useAnimatedHeightBetween-CtGTi4gg.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DbtmW0vt.js";import"./ChevronUpIcon-aJ1JLVGa.js";import"./ListItem-fyfCW1NB.js";import"./BaseTextInput-C6IfY85Q.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-HbgIWuSD.js";import"./index.esm-Ce0zBddH.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-Bk5XEQNC.js";import"./useListNavigation-CKNx_mWv.js";import"./Chip-cqf_xSXS.js";import"./CheckIcon-CaHocxCH.js";import"./ArrowVerticalAnimated-CG3d7QK5.js";import"./ArrowDownIcon-BTf49qUu.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DHjCxgjH.js";import"./TableCaption-BgBG3cSR.js";import"./tableContext-CeLUL4ql.js";import"./CalendarIcon-CEKF-B3U.js";import"./Label-DJkKnwlU.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
