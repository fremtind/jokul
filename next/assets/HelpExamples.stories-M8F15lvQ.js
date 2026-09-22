import{j as r}from"./iframe-C00GwemB.js";import{H as o}from"./Help-DUOZGyYd.js";import"./Help.stories-Comi__nw.js";import{A as c,m as d}from"./Autosuggest.stories-CpUEMRVK.js";import g,{ComboboxStory as x}from"./Combobox.stories-C5XwxINs.js";import H from"./FieldGroup.stories-D2HbzpGS.js";import b from"./InputGroup.stories-CAV8pj9g.js";import S from"./select.stories-CjTzToAl.js";import j from"./TextArea.stories-CJgA_um9.js";import{C as f}from"./Combobox-MjGjexKr.js";import{D as I}from"./DateInput-D5zeBWFh.js";import{F as T}from"./FieldGroup-sM4p0ZrL.js";import{I as G}from"./InputGroup-Brw-NqiQ.js";import{S as A}from"./Search-DauLsquT.js";import{S as h}from"./Select-BB1G4TNg.js";import{T as v}from"./TextArea-DdGAfCYS.js";import{T as C}from"./TextInput-CpVSBbWS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DNfHBJmy.js";import"./Button-CSBqkmS6.js";import"./usePreviousValue-Bb_zIK2m.js";import"./Loader-lZa_3UEk.js";import"./useDelayedRender-uGLhfEOo.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DepeaZtw.js";import"./IconButton-6CWcmPdG.js";import"./CloseIcon-4GlGxjIU.js";import"./SearchIcon-D_hhndy9.js";import"./PopupTip-hk5vTy1Z.js";import"./QuestionIcon-DHWbNT24.js";import"./TooltipTrigger-CIbc2_KA.js";import"./floating-ui.react-DcdCw9m-.js";import"./index-BzVCvdTF.js";import"./index-BIbijRVx.js";import"./TooltipContent-CdL-tZ5w.js";import"./useBrowserPreferences-CdeIF5Iu.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-YpxIpx0w.js";import"./InputPanel-CjRn2TLh.js";import"./Checkbox-oSsRhg17.js";import"./RadioButton-D6WiIA7l.js";import"./SupportLabel-DpzQbeZa.js";import"./SuccessIcon-CamR9-tx.js";import"./WarningIcon-CU9g0gBy.js";import"./BaseRadioButton-3C6CZwLo.js";import"./Flex-jEWe5g91.js";import"./SlotComponent-BwnTrqY2.js";import"./mergeRefs-XDVb2ZW2.js";import"./Checkbox.stories-B2LmlhEh.js";import"./RadioButton.stories-BMOgB5Kb.js";import"./BaseRadioButton.stories-CcB_dQlD.js";import"./RadioPanel.stories-vef0JUH3.js";import"./RadioPanel-s5yl-2v0.js";import"./Title-CwCu4myp.js";import"./Card-NvsKNiKs.js";import"./Text-mjMt7-ry.js";import"./Tag-BUbkYPqQ.js";import"./ExpandablePanel-DgjLzdrG.js";import"./useAnimatedHeightBetween-CoVpiY-E.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DZ2-0OJf.js";import"./ChevronUpIcon-Bp2CiW0W.js";import"./ListItem-D2VJ3R-g.js";import"./BaseTextInput-CKnhTyWN.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-C4ADYpPd.js";import"./index.esm-DDA9SDkI.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-C0FallAn.js";import"./useListNavigation-DwXiJmTT.js";import"./Chip-DuEowVby.js";import"./CheckIcon-DS594IzJ.js";import"./ArrowVerticalAnimated-CmpJgrbq.js";import"./ArrowDownIcon-D5bbkaVV.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Bf6EzHYs.js";import"./TableCaption-DZB3rT-u.js";import"./tableContext-DgVYwLll.js";import"./CalendarIcon-LTlUl81T.js";import"./Label-DGzGSd4a.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
