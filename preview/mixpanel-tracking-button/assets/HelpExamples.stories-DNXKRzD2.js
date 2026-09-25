import{j as r}from"./iframe-C6yd7wbC.js";import{H as o}from"./Help-D6Pgy4qf.js";import"./Help.stories-B7gZrnBs.js";import{A as c,m as d}from"./Autosuggest.stories-DICYnudI.js";import g,{ComboboxStory as x}from"./Combobox.stories-Cszhz4P0.js";import H from"./FieldGroup.stories-CxW2OIjO.js";import b from"./InputGroup.stories-B23U6oj2.js";import S from"./select.stories-NfEIZZAv.js";import j from"./TextArea.stories-DJBlcXu7.js";import{C as f}from"./Combobox-DlpFL1uB.js";import{D as I}from"./DateInput-C8NBoH2w.js";import{F as T}from"./FieldGroup-n16gAgWa.js";import{I as G}from"./InputGroup-DJ3sQYfi.js";import{S as A}from"./Search-CkB4sCUj.js";import{S as h}from"./Select-BJCkceyO.js";import{T as v}from"./TextArea-BvJCdjVn.js";import{T as C}from"./TextInput-DEDyH3UG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B9sJ9tr5.js";import"./Button-aKeTMTOY.js";import"./usePreviousValue-CO8Qazqk.js";import"./Loader-CXSm39Nt.js";import"./useDelayedRender-C9D06tPZ.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CbDQIIZJ.js";import"./IconButton-BI5djOgo.js";import"./CloseIcon-BgNAGbXn.js";import"./SearchIcon-CSvFIpSl.js";import"./PopupTip-B9Qk9JUh.js";import"./QuestionIcon-CD7dJocq.js";import"./TooltipTrigger-B4ZZhoFy.js";import"./floating-ui.react-y2gm5Dbz.js";import"./index-ebgq9w7a.js";import"./index-CvvRMPbc.js";import"./TooltipContent-CLvtEkaE.js";import"./useBrowserPreferences-BL6XU22y.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-B04KpxaR.js";import"./InputPanel-DcDcbwDV.js";import"./Checkbox-MQ50wbE4.js";import"./RadioButton-YQy_GWFS.js";import"./SupportLabel-Dcd179jo.js";import"./SuccessIcon-ztngF9uq.js";import"./WarningIcon-BH4-OqVB.js";import"./BaseRadioButton-Cd7KHD7t.js";import"./Flex-BNGGqoSq.js";import"./SlotComponent-DPcXtM_q.js";import"./mergeRefs-eiyGaSzV.js";import"./Checkbox.stories-CuT_akXX.js";import"./RadioButton.stories-HxlasvWC.js";import"./BaseRadioButton.stories-hM_dcllT.js";import"./RadioPanel.stories-BZ7Gyym7.js";import"./RadioPanel-BDBhZ04F.js";import"./Title-C-KezT3E.js";import"./Card-DYsnTnfh.js";import"./Text-CzVVx7u0.js";import"./Tag-ClrooaBN.js";import"./ExpandablePanel-BZks7LXU.js";import"./useAnimatedHeightBetween-aQyf3eWj.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DgSmUAV2.js";import"./ChevronUpIcon-a935TX8P.js";import"./ListItem-sXq57s2y.js";import"./BaseTextInput-DmV_xqVS.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Dv1bMbmZ.js";import"./index.esm-f3uXAcS9.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BnLIFXBY.js";import"./useListNavigation-B7uZFRPN.js";import"./Chip-nGa8VMmF.js";import"./CheckIcon-DYc9ZCW3.js";import"./ArrowVerticalAnimated-B3MrxxXF.js";import"./ArrowDownIcon-BmKEnz2h.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BybSVeNB.js";import"./TableCaption-YG0lxiTm.js";import"./tableContext-D7nWzchi.js";import"./CalendarIcon-D8HgKBjY.js";import"./Label-CrozHtQX.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
