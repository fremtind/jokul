import{j as r}from"./iframe-Dj_0KXfL.js";import{H as o}from"./Help-CK9iv4p-.js";import"./Help.stories-B75kipka.js";import{A as c,m as d}from"./Autosuggest.stories-DKO3dvkz.js";import g,{ComboboxStory as x}from"./Combobox.stories-D8ZtBhjQ.js";import H from"./FieldGroup.stories-D8bsh_yD.js";import b from"./InputGroup.stories-DnPJt8mF.js";import S from"./select.stories-CFT5O434.js";import j from"./TextArea.stories-DVGMcRhn.js";import{C as f}from"./Combobox-Ctpk_IcB.js";import{D as I}from"./DateInput-CIWqesAn.js";import{F as T}from"./FieldGroup-DvEf42vL.js";import{I as G}from"./InputGroup-B9zm6vBm.js";import{S as A}from"./Search-C-8epfJQ.js";import{S as h}from"./Select-DvhnC8dF.js";import{T as v}from"./TextArea-D_m8RQ2B.js";import{T as C}from"./TextInput-CMqWLZgQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DQ2KKCVA.js";import"./Button-DV1CoMY_.js";import"./usePreviousValue-Bqh6uB5l.js";import"./Loader-DX-kpcKZ.js";import"./useDelayedRender-Cve8I8gR.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CiF6n8vQ.js";import"./IconButton-BDZjc3_b.js";import"./CloseIcon-DlYk0M7Z.js";import"./SearchIcon-Bm7AeTyI.js";import"./PopupTip-DCafBJrH.js";import"./QuestionIcon-DM4YYiXF.js";import"./TooltipTrigger-DgTvGEPs.js";import"./floating-ui.react-DO0xnAKn.js";import"./index-C0RX7T4f.js";import"./index-mZKTmXK-.js";import"./TooltipContent-DkC_0V_N.js";import"./useBrowserPreferences-10jcxfdA.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-GhPCyM70.js";import"./InputPanel-BvJY87b5.js";import"./Checkbox-B-D_oc7C.js";import"./RadioButton-mzfJxH-2.js";import"./SupportLabel-GwdTy8cu.js";import"./SuccessIcon-08BHLgdl.js";import"./WarningIcon-BOII7UWe.js";import"./BaseRadioButton-vNCRnSBc.js";import"./Flex-BJYSQ6HE.js";import"./SlotComponent-DuxdfH2W.js";import"./mergeRefs-BU0ZDFNS.js";import"./Checkbox.stories-Dx8D3bb2.js";import"./RadioButton.stories-BCDi90V6.js";import"./BaseRadioButton.stories-B5uaFQ60.js";import"./RadioPanel.stories-DNygTJ1P.js";import"./RadioPanel-BulBqllF.js";import"./Title-Dw6GHWGe.js";import"./Card-D5dElDX1.js";import"./Text-BHB0IZjA.js";import"./Tag-DJkdVHcH.js";import"./ExpandablePanel-B_2SNN29.js";import"./useAnimatedHeightBetween-CVd0yepl.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CAbyirPF.js";import"./ChevronUpIcon-Bg23iDyh.js";import"./ListItem-Ch00Y7fJ.js";import"./BaseTextInput-D8GNXmYq.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D76RPjs7.js";import"./index.esm-DXoEDEK5.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-uePZxa2v.js";import"./useListNavigation-BSm5gVq-.js";import"./Chip-UW-sl_sL.js";import"./CheckIcon-oicuQoOm.js";import"./ArrowVerticalAnimated-CZFigiTn.js";import"./ArrowDownIcon-CoU6t5KW.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-C6EVaXev.js";import"./TableCaption-CZpTOJ0I.js";import"./tableContext-7IZtm9iC.js";import"./CalendarIcon-D5zxwcJe.js";import"./Label-BW7pe0Q6.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
