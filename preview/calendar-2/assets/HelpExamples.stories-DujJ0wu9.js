import{j as r}from"./iframe-C5x4a8sr.js";import{H as t}from"./Help-BcvKxTzG.js";import"./Help.stories-BCjgSVWf.js";import{A as c,m as d}from"./Autosuggest.stories-B3h-Ppj9.js";import g,{ComboboxStory as x}from"./Combobox.stories-DxPunEeE.js";import S from"./FieldGroup.stories-DnxdsAj-.js";import H from"./InputGroup.stories-Bk_q9cdr.js";import b,{SelectStory as j}from"./select.stories-DnKicc39.js";import f from"./TextArea.stories-B10tA_X7.js";import{C as I}from"./Combobox-FP89T6uG.js";import{D as T}from"./DateInput-Cmjz3kyB.js";import{F as G}from"./FieldGroup-BnarzH0w.js";import{I as A}from"./InputGroup-CC6eZxSQ.js";import{S as h}from"./Search-DH8r6MOg.js";import{S as v}from"./Select-ONB0i8xF.js";import{T as C}from"./TextArea-B08KklaG.js";import{T as F}from"./TextInput-BM1ks4DM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-VEcP2GHv.js";import"./Button-DA2EuoPD.js";import"./usePreviousValue-Dj0SnsCF.js";import"./Loader-CFbhDpzJ.js";import"./useDelayedRender-CFqYs_3j.js";import"./index-Chjiymov.js";import"./useId-GU_Tpc7V.js";import"./IconButton-D0yB4KOO.js";import"./CloseIcon-BA2KBL34.js";import"./SearchIcon-Bgrb1JZz.js";import"./PopupTip-BpWWK0V8.js";import"./QuestionIcon-C37DzHXF.js";import"./TooltipTrigger-DbTTxSK3.js";import"./floating-ui.react-DT6ksN3n.js";import"./index-B4Px_tTm.js";import"./index-yd_HB4oX.js";import"./TooltipContent-Ckzr3gtr.js";import"./useBrowserPreferences-CHeM0U3q.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-IdFrIpGL.js";import"./Checkbox-BhWh1FP9.js";import"./RadioButton.stories-CW364XIS.js";import"./RadioButton-D7oC6Q_5.js";import"./SupportLabel-9O5Jv7Ce.js";import"./SuccessIcon-C6gQyuMX.js";import"./WarningIcon-Bfsh72YC.js";import"./BaseRadioButton-DE6eK1WG.js";import"./BaseRadioButton.stories-Cg-9lCjM.js";import"./CheckboxPanel.stories-CFm4JAY-.js";import"./InputPanel-CBqJVI65.js";import"./Flex-Dy13pLhn.js";import"./SlotComponent-BtUjIa31.js";import"./mergeRefs-D1-h816B.js";import"./RadioPanel.stories-_ZzE8Aff.js";import"./RadioPanel-CUBpvaJC.js";import"./Title-msfrYqvJ.js";import"./Card-CUzAM8eW.js";import"./Text-DCO-5_aa.js";import"./Tag-5rmF5xRX.js";import"./ExpandablePanel-CEHgaDfU.js";import"./useAnimatedHeightBetween-BUsFuGiu.js";import"./tokens-CW-NfdIE.js";import"./Expander-DGpcQeql.js";import"./ChevronUpIcon-CMoZfkgH.js";import"./ListItem-Bc6RpehW.js";import"./BaseTextInput-B8nok6MB.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DxofDh3z.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-CQx35ymy.js";import"./useListNavigation-1wZidfoI.js";import"./Chip-CXBo0j5p.js";import"./CheckIcon-BvScAEfJ.js";import"./ArrowVerticalAnimated-ByLJpQg9.js";import"./ArrowDownIcon-5iPiNAcJ.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-CvdrMLxg.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-LwyhrWU0.js";import"./TableCaption-N8P1uYQy.js";import"./tableContext-BxOi_9gz.js";import"./CalendarIcon-BcADoPZU.js";import"./Label-Tddr3uUD.js";import"./Popover-B4kEOVCF.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
