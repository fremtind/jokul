import{j as r}from"./iframe-BZtx7Gpq.js";import{H as t}from"./Help-FQhFOCn1.js";import"./Help.stories-CpdK00Il.js";import{A as c,m as d}from"./Autosuggest.stories-CNg-8kiP.js";import g,{ComboboxStory as x}from"./Combobox.stories-CM26uQzq.js";import S from"./FieldGroup.stories-BeRdhWuX.js";import H from"./InputGroup.stories-COPpBH0L.js";import b,{SelectStory as j}from"./select.stories-CMm_7oOS.js";import f from"./TextArea.stories-DXKA0ziJ.js";import{C as I}from"./Combobox-BSBz-lFI.js";import{D as T}from"./DateInput-Bp3TEN_n.js";import{F as G}from"./FieldGroup-CfaF5gOk.js";import{I as A}from"./InputGroup-CPTlKaxn.js";import{S as h}from"./Search-Pv9xEbmL.js";import{S as v}from"./Select-DQf6HFW_.js";import{T as C}from"./TextArea-BEKIFqXu.js";import{T as F}from"./TextInput-KD4cPibZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Dkw04KCU.js";import"./Button-pg6Wkd6S.js";import"./usePreviousValue-DTBbVS2I.js";import"./Loader-C4VPlMkU.js";import"./useDelayedRender-D7umlP13.js";import"./index-Chjiymov.js";import"./useId--nZMxYEd.js";import"./IconButton-BWDWAZfg.js";import"./CloseIcon-Dr80fbV_.js";import"./SearchIcon-CFdVAgyo.js";import"./PopupTip-CvHi6p3e.js";import"./QuestionIcon-BywmrEIC.js";import"./TooltipTrigger-DXYH6Fbm.js";import"./floating-ui.react-9UQLrM5M.js";import"./index-B7799oJd.js";import"./index-Cr_bZG8e.js";import"./TooltipContent-CRCFaICE.js";import"./useBrowserPreferences-MkQ74kca.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-B2t-b__q.js";import"./Checkbox-De1b80na.js";import"./RadioButton.stories-C__K9xRa.js";import"./RadioButton-Ce5lw0jX.js";import"./SupportLabel-B2snNPHG.js";import"./SuccessIcon-YUQFTxEn.js";import"./WarningIcon-wEkZsFNg.js";import"./BaseRadioButton-gJxT-lk_.js";import"./BaseRadioButton.stories-CL_K2k7u.js";import"./CheckboxPanel.stories-DqP9U8kG.js";import"./InputPanel-BTGuJBda.js";import"./Flex-D3dfnJLb.js";import"./SlotComponent-fnNZSVoA.js";import"./mergeRefs-BBNjyEGN.js";import"./RadioPanel.stories-DlZHA4U3.js";import"./RadioPanel-DJ_X-k3j.js";import"./Title-C03TSALK.js";import"./Card-BaVcdQ0_.js";import"./Text-eK0-_dAR.js";import"./Tag-C57PuBL1.js";import"./ExpandablePanel-CnCiiqMb.js";import"./useAnimatedHeightBetween-B9UNVxYV.js";import"./tokens-CW-NfdIE.js";import"./Expander-DADmp2hM.js";import"./ChevronUpIcon-8z2fXPan.js";import"./ListItem-Cj_8IUbP.js";import"./BaseTextInput-BKAyIEl1.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-QtHTnYSL.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-BwQ4cpo4.js";import"./useListNavigation-CRRVj-o_.js";import"./Chip-CBe0YcEW.js";import"./CheckIcon-At_Mn5kP.js";import"./ArrowVerticalAnimated-CJ33c7np.js";import"./ArrowDownIcon-Dtuql7Y3.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-Coc3EEa2.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-CCpOtVGP.js";import"./TableCaption-BSUpUeh_.js";import"./tableContext-Dtqaman7.js";import"./CalendarIcon-DlyiyC-a.js";import"./Label-COez3Dy4.js";import"./Popover-BnSlH7Sd.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
