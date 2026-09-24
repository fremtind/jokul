import{j as r}from"./iframe-C3kYsIHh.js";import{H as o}from"./Help-Ds8rvauV.js";import"./Help.stories-BS7Ha2wY.js";import{A as c,m as d}from"./Autosuggest.stories-BkVpUACj.js";import g,{ComboboxStory as x}from"./Combobox.stories-Cv0ZSklT.js";import H from"./FieldGroup.stories-0Vi4Hg18.js";import b from"./InputGroup.stories-CKN5zBNo.js";import S from"./select.stories-BFPIPDLO.js";import j from"./TextArea.stories-DuNj1ubd.js";import{C as f}from"./Combobox-DA_mYlqM.js";import{D as I}from"./DateInput-j1mYYoLI.js";import{F as T}from"./FieldGroup-DLXXAhAA.js";import{I as G}from"./InputGroup-D0Omn60s.js";import{S as A}from"./Search-BCXio2tY.js";import{S as h}from"./Select-BjT0B5wb.js";import{T as v}from"./TextArea-q4SvV9H-.js";import{T as C}from"./TextInput-D29gIlx-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cy3VvqMK.js";import"./Button-CcXsQf0F.js";import"./usePreviousValue-_4YImjm6.js";import"./Loader-DVCTo6Rw.js";import"./useDelayedRender-BV2M65IW.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-2r5NKHv8.js";import"./IconButton-BMSjviuA.js";import"./CloseIcon-BoVwDha2.js";import"./SearchIcon-C4Jir8AN.js";import"./PopupTip-CKmmB0t5.js";import"./QuestionIcon-z8LOqMoR.js";import"./TooltipTrigger-CUApdUKc.js";import"./floating-ui.react-DzMBX7sD.js";import"./index-IyH0BijH.js";import"./index-BjoZQ2N5.js";import"./TooltipContent-CZk1yK6X.js";import"./useBrowserPreferences-q9VB7tPK.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DYeNKF-W.js";import"./InputPanel-OBjAvpST.js";import"./Checkbox-DM7BBQVb.js";import"./RadioButton-BrHcAIeS.js";import"./SupportLabel-BG1Lbt55.js";import"./SuccessIcon-C11QbNIe.js";import"./WarningIcon-Dmp1vMvv.js";import"./BaseRadioButton-yb4OSqft.js";import"./Flex--nuDi5CB.js";import"./SlotComponent-CBrmqtKM.js";import"./mergeRefs-DpWGkHBw.js";import"./Checkbox.stories-qVAOSxZN.js";import"./RadioButton.stories-CHvM2Q9d.js";import"./BaseRadioButton.stories-Cqch6f6e.js";import"./RadioPanel.stories-BFtwUGhd.js";import"./RadioPanel-CkuwrLmD.js";import"./Title-gx4pqkja.js";import"./Card-QLIiUBhd.js";import"./Text-BRbO15mb.js";import"./Tag-BMlr4imk.js";import"./ExpandablePanel-Cp2rz9Vd.js";import"./useAnimatedHeightBetween-Y0W3Glbz.js";import"./tokens-HKQN8Vn-.js";import"./Expander-k161I6cB.js";import"./ChevronUpIcon-WwF5YQbw.js";import"./ListItem-DttFkodo.js";import"./BaseTextInput-6YCWCJ4d.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DGX0vStQ.js";import"./index.esm-CbUrBYVZ.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-D6Oqxo_f.js";import"./useListNavigation-B5zDtzsf.js";import"./Chip-3xv6r8Al.js";import"./CheckIcon-B2e8GeCy.js";import"./ArrowVerticalAnimated-BUE1uu9s.js";import"./ArrowDownIcon-BVCQjxFN.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-lTs41Amp.js";import"./TableCaption-DlnjaaqS.js";import"./tableContext-BdF9Ju65.js";import"./CalendarIcon-SKrKBsAf.js";import"./Label-CU6Y_UTG.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
