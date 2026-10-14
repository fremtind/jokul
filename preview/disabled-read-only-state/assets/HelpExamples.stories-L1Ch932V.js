import{j as r}from"./iframe-DdycUQEW.js";import{H as o}from"./Help-B18b8dKh.js";import"./Help.stories-BceAkOse.js";import{A as c,m as d}from"./Autosuggest.stories-B_2-qubM.js";import g,{ComboboxStory as x}from"./Combobox.stories-pRHGHmEw.js";import H from"./FieldGroup.stories-HdihqR4x.js";import b from"./InputGroup.stories-D5WRBYkv.js";import S from"./select.stories-CMfAoF2-.js";import j from"./TextArea.stories-fM14lckZ.js";import{C as f}from"./Combobox-oy2qem9G.js";import{D as I}from"./DateInput-u4zluuuh.js";import{F as T}from"./FieldGroup-5B0t5B9Q.js";import{I as G}from"./InputGroup-BsawQSXU.js";import{S as A}from"./Search-Bonwih1y.js";import{S as h}from"./Select-B_evNnmW.js";import{T as v}from"./TextArea-CTqW6Jw1.js";import{T as C}from"./TextInput-qrTLrwf_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-X8VmP_1W.js";import"./Button-C5wT-ByB.js";import"./usePreviousValue-Dj-1dFzG.js";import"./Loader-CjrQ5HtM.js";import"./useDelayedRender-DmIhXOYf.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CzcTekdj.js";import"./IconButton-Cr4Y1kaj.js";import"./CloseIcon-BGmAW8nV.js";import"./SearchIcon-DYzlWE1v.js";import"./PopupTip-i8YJC0Im.js";import"./QuestionIcon-DvbGlLqC.js";import"./TooltipTrigger-Xupdvu-N.js";import"./floating-ui.react-DwOq9aX5.js";import"./index-B5CEXCJB.js";import"./index-n79OLxq8.js";import"./TooltipContent-Bh1UD38c.js";import"./useBrowserPreferences-edqLlbkR.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DaV08O-I.js";import"./CheckboxPanel-CVC1So9Q.js";import"./InputPanel-CE4zwon0.js";import"./Checkbox-ByhgU5UN.js";import"./RadioButton-COSjj3rx.js";import"./SupportLabel-9_yhGTCA.js";import"./SuccessIcon-CNL63iIh.js";import"./WarningIcon-Y6DXZI_L.js";import"./BaseRadioButton-BlabL8XM.js";import"./Flex-BHPjVPiP.js";import"./SlotComponent-B7fL7Arh.js";import"./mergeRefs-xuJ_pz0X.js";import"./Checkbox.stories-DNjTh57W.js";import"./RadioButton.stories-D_mLH2vT.js";import"./BaseRadioButton.stories-D5-dgafK.js";import"./RadioPanel.stories-DMv5CrxC.js";import"./RadioPanel-BGa0blh2.js";import"./Title-CBawnwBw.js";import"./Card-Dji96J5a.js";import"./Text-Dbo5sqn4.js";import"./Tag-BK6eJx6U.js";import"./ExpandablePanel-DyIHshKY.js";import"./useAnimatedHeightBetween-DX42eOxL.js";import"./tokens-HKQN8Vn-.js";import"./Expander-TrQvrIru.js";import"./ChevronUpIcon-CbpXYvMi.js";import"./ListItem-BcWCzikm.js";import"./BaseTextInput-jYelrnbF.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BK2F3Jv5.js";import"./index.esm-H9h_0bUl.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DgMeQkJM.js";import"./useListNavigation-D17hmE-H.js";import"./Chip-CZx3EAu_.js";import"./CheckIcon-BhVHwPVr.js";import"./ArrowVerticalAnimated-C1nURCLs.js";import"./ArrowDownIcon-BfJGvEkv.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B7UaST11.js";import"./TableCaption-Yz4iD22_.js";import"./tableContext-CEdbClM2.js";import"./CalendarIcon-DaD1LUXM.js";import"./Label-Bgc9Mwk7.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};
