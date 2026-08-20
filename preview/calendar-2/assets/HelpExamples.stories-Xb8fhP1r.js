import{j as r}from"./iframe-oCbqk8A8.js";import{H as t}from"./Help-WXV2xZwt.js";import"./Help.stories-DuCPFV9Z.js";import{A as c,m as d}from"./Autosuggest.stories-DEliHaPj.js";import g,{ComboboxStory as x}from"./Combobox.stories-Q_CPk1QG.js";import S from"./FieldGroup.stories-FJ6GbDxt.js";import H from"./InputGroup.stories-BUF8v8R8.js";import b,{SelectStory as j}from"./select.stories-A3uBv5ZF.js";import f from"./TextArea.stories-BVLLsdG_.js";import{C as I}from"./Combobox-COFJfw9A.js";import{D as T}from"./DateInput-BMpVLI1d.js";import{F as G}from"./FieldGroup-CHnL49ZQ.js";import{I as A}from"./InputGroup-OuPw27TQ.js";import{S as h}from"./Search-ceIwePaz.js";import{S as v}from"./Select-Dqdrz0Qp.js";import{T as C}from"./TextArea-DvxBYvK5.js";import{T as F}from"./TextInput-DnfR0DPz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Bu38MtPI.js";import"./Button-B3cTm-am.js";import"./usePreviousValue-BZaNz6hP.js";import"./Loader-CR5MwOef.js";import"./useDelayedRender-DRr2TXUD.js";import"./index-Chjiymov.js";import"./useId-BqfSnGHp.js";import"./IconButton-DOXvMqoT.js";import"./CloseIcon-BLemx3fi.js";import"./SearchIcon-B1-00EHn.js";import"./PopupTip-DR14pzX-.js";import"./QuestionIcon-YuVhSMaK.js";import"./TooltipTrigger-zL2eJpb0.js";import"./floating-ui.react-DvtMh0ln.js";import"./index-DfB7DNW2.js";import"./index-DlyY198E.js";import"./TooltipContent-CyxJSH2C.js";import"./useBrowserPreferences-B3ncyDE5.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-DQ42STnk.js";import"./Checkbox-DlttssBm.js";import"./RadioButton.stories-yiTBNGWS.js";import"./RadioButton-DDW2hbm8.js";import"./SupportLabel-BH6i4A1e.js";import"./SuccessIcon-DCucRW9o.js";import"./WarningIcon-L8UHmrK5.js";import"./BaseRadioButton-Bn7ODCbO.js";import"./BaseRadioButton.stories-ZyB8PXGL.js";import"./CheckboxPanel.stories-DgaXGfEd.js";import"./InputPanel-B4m2Rk_1.js";import"./Flex-DFs2YWwC.js";import"./SlotComponent-B7JVnzon.js";import"./mergeRefs-IksFTnd2.js";import"./RadioPanel.stories-CxGCexh2.js";import"./RadioPanel-CA0zDFy9.js";import"./Title-BPGccfbU.js";import"./Card-Dcip0Mnt.js";import"./Text-DJRTSIIc.js";import"./Tag-Cn1MJNtu.js";import"./ExpandablePanel-B2Nrxzwo.js";import"./useAnimatedHeightBetween-C0zLCoO1.js";import"./tokens-CW-NfdIE.js";import"./Expander-Bl87jBl1.js";import"./ChevronUpIcon-CE9kuJWB.js";import"./ListItem-Csyjla4X.js";import"./BaseTextInput-DuqfahLa.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-C7cFqd1y.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-C2dGf9u0.js";import"./useListNavigation-xpxa8RgM.js";import"./Chip-BCj6OGI5.js";import"./CheckIcon-BHpg6Skl.js";import"./ArrowVerticalAnimated-CCSoJS-r.js";import"./ArrowDownIcon-I76qEb6f.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-mWd_Vif7.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-Bl0XJC0k.js";import"./TableCaption-DVXBvt6s.js";import"./tableContext-CxUK3z-U.js";import"./CalendarIcon-N2rvPkr1.js";import"./Label-BjktKBET.js";import"./Popover-CAbK7q4b.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    return <Select {...SelectStories.args} {...SelectStory.args} name="select" label="Hva jobber du som?" items={[]} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};const ue=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,o as HelpTextInput,ue as __namedExportsOrder,le as default};
