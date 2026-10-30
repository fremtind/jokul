import{j as r}from"./iframe-F9HQqlwx.js";import{H as o}from"./Help-cgNy2LVO.js";import"./Help.stories-D41aI3jt.js";import{A as c,m as d}from"./Autosuggest.stories-NnKHvYMH.js";import g,{ComboboxStory as x}from"./Combobox.stories-VYk5O2Gv.js";import H from"./FieldGroup.stories-CPuSbyfp.js";import b from"./InputGroup.stories-B_RaIoGB.js";import S from"./select.stories-Dz0USeh0.js";import j from"./TextArea.stories-CXvqgP7n.js";import{C as f}from"./Combobox-Dlxrmzt_.js";import{D as I}from"./DateInput-CdWQMSxM.js";import{F as T}from"./FieldGroup-BJkwNcth.js";import{I as G}from"./InputGroup-dHuccdt7.js";import{S as A}from"./Search-CVKVr5rQ.js";import{S as h}from"./Select-DbM-YMyW.js";import{T as v}from"./TextArea-w-SqAhiM.js";import{T as C}from"./TextInput-CRFzAoKy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-e1t1AzPi.js";import"./Button-CfEtt67d.js";import"./usePreviousValue-CyJplb8U.js";import"./Loader-DzCUgEW0.js";import"./useDelayedRender-C5B76KoS.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId--C4d5KQ6.js";import"./IconButton-CbWP0xIt.js";import"./CloseIcon-D_oUkZEk.js";import"./SearchIcon-Cfn91wxY.js";import"./PopupTip-BvmeCXx4.js";import"./QuestionIcon-D0ak_Jvl.js";import"./TooltipTrigger-DcfY0_VL.js";import"./floating-ui.react-BwtIrVUc.js";import"./index-Dk-phOlJ.js";import"./index-D56dSJPS.js";import"./TooltipContent-DPzXQGBh.js";import"./useBrowserPreferences-bRIoQua_.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DLv5M3Lm.js";import"./InputPanel-Bf6xw7a0.js";import"./Checkbox-B8KZo68C.js";import"./RadioButton-B5f_s05b.js";import"./SupportLabel-BydfHROK.js";import"./SuccessIcon-CfDi0b1U.js";import"./WarningIcon-DNR-VrVC.js";import"./BaseRadioButton-BknUqynM.js";import"./Flex-Cw7y-IC9.js";import"./SlotComponent-BBuwCuXi.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-h1tWA3X7.js";import"./RadioButton.stories-CxwNlTbv.js";import"./BaseRadioButton.stories-DhRHJzEW.js";import"./RadioPanel.stories-Cdxp_XCv.js";import"./RadioPanel-D-wDD3pS.js";import"./Title-C7W1NR8x.js";import"./Card-CfC1XkUw.js";import"./Text-DoRaOJO4.js";import"./Tag-CyCBAuNN.js";import"./ExpandablePanel-DUPHSf7d.js";import"./useAnimatedHeightBetween-BPnTObNv.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DWnBjmgV.js";import"./ChevronUpIcon-Dl5EhheJ.js";import"./ListItem-C4QZY73f.js";import"./BaseTextInput-s_LbsOi1.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DULdFgdb.js";import"./index.esm-C_IAL-eF.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BThqwfod.js";import"./useListNavigation-BMdTcCHu.js";import"./Chip-OAC8b8ra.js";import"./CheckIcon-euKYPyZK.js";import"./ArrowVerticalAnimated-BVPxms7-.js";import"./ArrowDownIcon-CKLXhdum.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CQ62adlG.js";import"./TableCaption-AE53jm-X.js";import"./tableContext-C3u4wvqq.js";import"./CalendarIcon-CIz7_HTn.js";import"./Label-DM8Yn6PZ.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
