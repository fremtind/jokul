import{j as r}from"./iframe-CfUEMfU7.js";import{H as o}from"./Help-D-jm8t_W.js";import"./Help.stories-DU_B4pSl.js";import{A as c,m as d}from"./Autosuggest.stories-CZu23NOj.js";import g,{ComboboxStory as x}from"./Combobox.stories-BoF4ITGg.js";import H from"./FieldGroup.stories-CQYVqekR.js";import b from"./InputGroup.stories-_wY9FAGU.js";import S from"./select.stories-D8hHGG7s.js";import j from"./TextArea.stories-iOQLIEBq.js";import{C as f}from"./Combobox-CO99_hz8.js";import{D as I}from"./DateInput-Bh-V3N_t.js";import{F as T}from"./FieldGroup-5PK1ucT4.js";import{I as G}from"./InputGroup-BvqNOGQy.js";import{S as A}from"./Search-BuzCJFWk.js";import{S as h}from"./Select-Bgknjzey.js";import{T as v}from"./TextArea-CNzH-1B_.js";import{T as C}from"./TextInput-Bkc8q4GS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DjnECpDJ.js";import"./Button-D-vu1QAj.js";import"./usePreviousValue-C3YtWb7k.js";import"./Loader-CTGu9eW-.js";import"./useDelayedRender-CHR3nUvx.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BQjIKEU4.js";import"./IconButton-DdBgt5n_.js";import"./CloseIcon-B31aSgTh.js";import"./SearchIcon-Dz5I4Ye7.js";import"./PopupTip-BvXzYAie.js";import"./QuestionIcon-CDuT9leu.js";import"./TooltipTrigger-BNTNsXmr.js";import"./floating-ui.react-BUkADOgg.js";import"./index-BZyr4nNe.js";import"./index-BgNbWu5F.js";import"./TooltipContent-O8-U_veO.js";import"./useBrowserPreferences-DKgHN-45.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-KS2SJc9s.js";import"./InputPanel-C0mO6A5N.js";import"./Checkbox-CasuYeXO.js";import"./RadioButton-B62Yl6-z.js";import"./SupportLabel-BW3WpePu.js";import"./SuccessIcon-DtxGEnYD.js";import"./WarningIcon-CNU-DpX7.js";import"./BaseRadioButton-B8oSjWkl.js";import"./Flex-Dekyhgar.js";import"./SlotComponent-DYbDkr5T.js";import"./mergeRefs-CBI3zFGr.js";import"./Checkbox.stories-DfjPW4NH.js";import"./RadioButton.stories-yfAEDqR3.js";import"./BaseRadioButton.stories-DgB-4Lpj.js";import"./RadioPanel.stories-BigMjRHk.js";import"./RadioPanel-CrGZpVpK.js";import"./Title-DcGGqUSw.js";import"./Card-DTcY9V9E.js";import"./Text-C5QbtVX7.js";import"./Tag-G2bmyQex.js";import"./ExpandablePanel-DfNWjFq6.js";import"./useAnimatedHeightBetween-BVZshNCd.js";import"./tokens-HKQN8Vn-.js";import"./Expander-B8HWSFwL.js";import"./ChevronUpIcon-CKeywjbB.js";import"./ListItem-Ccb7WhBV.js";import"./BaseTextInput-har22rY7.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BcGw-Cc7.js";import"./index.esm-DhHJv-p5.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-BGueBopG.js";import"./useListNavigation-BmwAf9_g.js";import"./Chip-COQNIwKR.js";import"./CheckIcon-DeAnkm7O.js";import"./ArrowVerticalAnimated-Q2iMo3KP.js";import"./ArrowDownIcon-YBz0mi3m.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CElw79Mz.js";import"./TableCaption-DAireAyF.js";import"./tableContext-C1XiclhR.js";import"./CalendarIcon-BHQwZGrB.js";import"./Label-Dx5OPKjo.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
