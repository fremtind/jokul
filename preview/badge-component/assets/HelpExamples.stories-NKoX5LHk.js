import{j as r}from"./iframe-DyXZgdMt.js";import{H as o}from"./Help-D-X_c-eN.js";import"./Help.stories-1AJSEvqz.js";import{A as c,m as d}from"./Autosuggest.stories-CyYbrwW6.js";import g,{ComboboxStory as x}from"./Combobox.stories-CbyDvRIw.js";import H from"./FieldGroup.stories-D2BrfTno.js";import b from"./InputGroup.stories-6Bfm7gTP.js";import S from"./select.stories-4Qa2TdEy.js";import j from"./TextArea.stories-C4cptTPG.js";import{C as f}from"./Combobox-Cg6Mo8ZP.js";import{D as I}from"./DateInput-O5KG9wjC.js";import{F as T}from"./FieldGroup-90fpa6GZ.js";import{I as G}from"./InputGroup-CpccR7sV.js";import{S as A}from"./Search-Ds7EjZGI.js";import{S as h}from"./Select-DlYCSJD1.js";import{T as v}from"./TextArea-HTrEHJ_M.js";import{T as C}from"./TextInput-DvDvr-2f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BYJ5CBOm.js";import"./Button-Cv1XuYmk.js";import"./usePreviousValue-ou8LXt_3.js";import"./Loader-DkDBey3n.js";import"./useDelayedRender-WwNzHuBd.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-5lIUKqkD.js";import"./IconButton-gkxxtGLG.js";import"./CloseIcon-CaBYOtPu.js";import"./SearchIcon-BMF2Xx5q.js";import"./PopupTip-BT_Hf2eV.js";import"./QuestionIcon-DYMT8E2c.js";import"./TooltipTrigger-B-G5Wo-f.js";import"./floating-ui.react-D88W62K3.js";import"./index-BcYSWlPj.js";import"./index-Isy6WVpO.js";import"./TooltipContent-0c8tw9Mt.js";import"./useBrowserPreferences-BedfQHVf.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-Czj0vZG4.js";import"./InputPanel-DglxQqL4.js";import"./Checkbox-B_LJ5ljG.js";import"./RadioButton-CndTA1k_.js";import"./SupportLabel-BwuODeWr.js";import"./SuccessIcon-DN1jTQOG.js";import"./WarningIcon-O9H6woes.js";import"./BaseRadioButton-D6ZjToMB.js";import"./Flex-CakwdaM1.js";import"./SlotComponent-DQJmODQ8.js";import"./mergeRefs-D8jKCULl.js";import"./Checkbox.stories-D5HN6VRE.js";import"./RadioButton.stories-BYIQ6rOS.js";import"./BaseRadioButton.stories-8YfXigvX.js";import"./RadioPanel.stories-C26G8ASo.js";import"./RadioPanel-UuGtRqKm.js";import"./Title-DVN6Iq5h.js";import"./Card-B8wdu0x7.js";import"./Text-C3C90um3.js";import"./Tag-DrH7owgy.js";import"./ExpandablePanel-MUtvPQns.js";import"./useAnimatedHeightBetween-CW75Y7C6.js";import"./tokens-HKQN8Vn-.js";import"./Expander-uhJMLKtX.js";import"./ChevronUpIcon-Dv7vkVGc.js";import"./ListItem-DG9gAWYY.js";import"./BaseTextInput-DG5eGU96.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CkT6yzTT.js";import"./index.esm-D6_61vls.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-C2HOmwEM.js";import"./useListNavigation-DrFeWYwx.js";import"./Chip-CstjTHej.js";import"./CheckIcon-CmjdGrLi.js";import"./ArrowVerticalAnimated-BoHIWjhN.js";import"./ArrowDownIcon-CMcI9tJ2.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DVXW3Uh-.js";import"./TableCaption-DSzOEYC_.js";import"./tableContext-DI1C9aLu.js";import"./CalendarIcon-TKkUeFLY.js";import"./Label-B4E0kpuz.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
