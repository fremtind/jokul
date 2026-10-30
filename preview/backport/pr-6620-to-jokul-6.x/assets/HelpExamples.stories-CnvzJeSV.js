import{j as r}from"./iframe-0NfDhzIt.js";import{H as o}from"./Help-Bj7m0yqk.js";import"./Help.stories-FYFKIQL_.js";import{A as c,m as d}from"./Autosuggest.stories-DDv-a19Q.js";import g,{ComboboxStory as x}from"./Combobox.stories-CwsJVIxz.js";import H from"./FieldGroup.stories-P5dM8WMa.js";import b from"./InputGroup.stories-csKpZZad.js";import S from"./select.stories-qZfMTPns.js";import j from"./TextArea.stories-D575tfbx.js";import{C as f}from"./Combobox-CrcC-1EV.js";import{D as I}from"./DateInput-DDVIHN0Q.js";import{F as T}from"./FieldGroup-B5Ai9Mz8.js";import{I as G}from"./InputGroup-CiLw7UhE.js";import{S as A}from"./Search-AkzxWy4V.js";import{S as h}from"./Select-HmPc4-iK.js";import{T as v}from"./TextArea-EC-JWqbZ.js";import{T as C}from"./TextInput-c_2lcGjI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-doX1XryJ.js";import"./Button-DbLarB3L.js";import"./usePreviousValue-CNvPnQzV.js";import"./Loader-C8YaIjmT.js";import"./useDelayedRender-dEoSsUs4.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CYFmze6q.js";import"./IconButton-GilOT8K4.js";import"./CloseIcon-8RHUZr8M.js";import"./SearchIcon-vm1MuWyE.js";import"./PopupTip-eIyGostH.js";import"./QuestionIcon-CV3O_DDQ.js";import"./TooltipTrigger-CCc8pMbD.js";import"./floating-ui.react-DkCjz5kg.js";import"./index-BCkC6ZNO.js";import"./index-B5CqyTug.js";import"./TooltipContent-C9uftIeM.js";import"./useBrowserPreferences-tYCyXE04.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DaKIrIxP.js";import"./InputPanel-BG2Aa4WG.js";import"./Checkbox-22SMIp8m.js";import"./RadioButton-C4SvUPqB.js";import"./SupportLabel-DFOwp_1b.js";import"./SuccessIcon-B_K_3w8M.js";import"./WarningIcon-CeLtkF4T.js";import"./BaseRadioButton-_daJyphv.js";import"./Flex-CY6Ynvyq.js";import"./SlotComponent-BZMH3ofq.js";import"./mergeRefs-_7lZvp9j.js";import"./Checkbox.stories-DAV0qwtA.js";import"./RadioButton.stories-1H65GvVL.js";import"./BaseRadioButton.stories-D-_E6Yep.js";import"./RadioPanel.stories-Cvb_PDDL.js";import"./RadioPanel-BqmOBKfq.js";import"./Title-CufDkKEg.js";import"./Card-CQ0_Gi7F.js";import"./Text-SxKXfNWl.js";import"./Tag-DPpxMD-Z.js";import"./ExpandablePanel-Ipjsbh-I.js";import"./useAnimatedHeightBetween-RygXYEVw.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BqKOhoHe.js";import"./ChevronUpIcon-jM-Dnmel.js";import"./ListItem-FVQNaVFy.js";import"./BaseTextInput-DTeC7qS0.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DpAuylKs.js";import"./index.esm-Ckmf_WE9.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-NOMTbu5z.js";import"./useListNavigation-CEScDjlm.js";import"./Chip-C41OP9vE.js";import"./CheckIcon-BhTg_4sE.js";import"./ArrowVerticalAnimated-B_c5MEQD.js";import"./ArrowDownIcon-DAK39p0V.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BfaW469M.js";import"./TableCaption-CP-sWvXm.js";import"./tableContext-Cm_CHVt3.js";import"./CalendarIcon-B0fuFaHp.js";import"./Label-DxKaM3x-.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
