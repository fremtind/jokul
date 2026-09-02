import{j as r}from"./iframe-ctCUr1dU.js";import{H as o}from"./Help-CQwwFjFL.js";import"./Help.stories-B7-YzAEG.js";import{A as c,m as d}from"./Autosuggest.stories-BdKN_NwS.js";import g,{ComboboxStory as x}from"./Combobox.stories-BPVm9Oqn.js";import H from"./FieldGroup.stories-BR-WZ4XB.js";import b from"./InputGroup.stories-Dfs3lPu6.js";import S from"./select.stories-yne0xq2X.js";import j from"./TextArea.stories-CqcnMFAq.js";import{C as f}from"./Combobox-f4SBgNle.js";import{D as I}from"./DateInput-2kUZFr0c.js";import{F as T}from"./FieldGroup-BOTt8BVZ.js";import{I as G}from"./InputGroup-BP0DrF4A.js";import{S as A}from"./Search-BZ-o3kql.js";import{S as h}from"./Select-BwyeNn5S.js";import{T as v}from"./TextArea-BueCg4TO.js";import{T as C}from"./TextInput-G0mB6e1M.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C9UxPlIN.js";import"./Button-DRXZTY8j.js";import"./usePreviousValue-EKFw11i8.js";import"./Loader-BSlP3Zil.js";import"./useDelayedRender-DMgw_bOA.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-Cr31zXjN.js";import"./IconButton-Ba3JsvtL.js";import"./CloseIcon-Bsv1HUHA.js";import"./SearchIcon-B6k_q52s.js";import"./PopupTip-6ey--m5f.js";import"./QuestionIcon-C5WHyQOS.js";import"./TooltipTrigger-NizYlA4D.js";import"./floating-ui.react-2wLRDxXX.js";import"./index-RQxh6zvu.js";import"./index-ozChu3oK.js";import"./TooltipContent-CVFZoLQu.js";import"./useBrowserPreferences-Bu42Al17.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-BduCNyHR.js";import"./Checkbox-BrSo1WXa.js";import"./RadioButton.stories-qRYu5IbA.js";import"./RadioButton-BDPGYSAb.js";import"./SupportLabel-CU5Ixuht.js";import"./SuccessIcon-kRyEJpks.js";import"./WarningIcon-BhQqkk1u.js";import"./BaseRadioButton-CZP41jJV.js";import"./BaseRadioButton.stories-DVEWrl2t.js";import"./CheckboxPanel.stories-VaLfRHRU.js";import"./InputPanel-B7kGxxg4.js";import"./Flex-DDk4fDsT.js";import"./SlotComponent-BLov-DsE.js";import"./mergeRefs-DWWtGrDH.js";import"./RadioPanel.stories-DSYpgXRx.js";import"./RadioPanel-Cg8XLWy0.js";import"./Title-DGJ-OF1A.js";import"./Card-D4JU4UTb.js";import"./Text-BIZAcXjS.js";import"./Tag-BuJqW_tv.js";import"./ExpandablePanel-DRnXMN5w.js";import"./useAnimatedHeightBetween-CrbZcnw7.js";import"./tokens-CW-NfdIE.js";import"./Expander-CI4YDpCr.js";import"./ChevronUpIcon-BKJN3I0J.js";import"./ListItem-WNS9cQfR.js";import"./BaseTextInput-CsKlwiid.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-C2Bn3vK6.js";import"./index.esm-CXyoKlS9.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-SFlNV82o.js";import"./useListNavigation-Cg3I122c.js";import"./Chip-C_TACBZg.js";import"./CheckIcon-CQy0W0I-.js";import"./ArrowVerticalAnimated-C9o4paeU.js";import"./ArrowDownIcon-Db5GgwVe.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-Cjr32f9Z.js";import"./TableCaption-VrWslp0U.js";import"./tableContext-C8x4mIGy.js";import"./CalendarIcon-BKkcSjrc.js";import"./Label-BKY0mSgP.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
