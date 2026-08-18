import{j as r}from"./iframe-CC3izaGk.js";import{H as t}from"./Help-BWt8HecG.js";import"./Help.stories-B0CbsCwc.js";import{A as c,m as d}from"./Autosuggest.stories-vKxtNq-r.js";import g,{ComboboxStory as x}from"./Combobox.stories-DppvsSPg.js";import S from"./FieldGroup.stories-hepOU5tc.js";import H from"./InputGroup.stories-Czp_UdyR.js";import b,{SelectStory as j}from"./select.stories-fgqLLGW-.js";import f from"./TextArea.stories-BuGuGowj.js";import{C as I}from"./Combobox-Ix5U0y9d.js";import{D as T}from"./DateInput-qaGQ3JZq.js";import{F as G}from"./FieldGroup-CrKc8Ja8.js";import{I as A}from"./InputGroup-NP4yAxbY.js";import{S as h}from"./Search-CwWIBuPl.js";import{S as v}from"./Select-fooEGiz-.js";import{T as C}from"./TextArea-DpOEGaOR.js";import{T as F}from"./TextInput-DG4AgbNG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BRsCuCtu.js";import"./Button--5-UMYqW.js";import"./usePreviousValue-asAx-_tR.js";import"./Loader-BG7vXCae.js";import"./useDelayedRender-C6NJ_Yg3.js";import"./index-Chjiymov.js";import"./useId-v4beBf7V.js";import"./IconButton-CQLXFCNN.js";import"./CloseIcon-DaPzJ5gy.js";import"./SearchIcon-fNgW2wFa.js";import"./PopupTip-IYw-soYF.js";import"./QuestionIcon-ByPSSRo5.js";import"./TooltipTrigger-CtwcWyqe.js";import"./floating-ui.react-BihXiUGw.js";import"./index-fizjfq6B.js";import"./index-CnNNDPkB.js";import"./TooltipContent-DvuAMZfr.js";import"./useBrowserPreferences-Du2mQXWz.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-BVrzc_0w.js";import"./Checkbox-BI32cwAu.js";import"./RadioButton.stories-CDSZN5W9.js";import"./RadioButton-DiA3odCT.js";import"./SupportLabel-BXgDqbw9.js";import"./SuccessIcon-Bhb_kLkn.js";import"./WarningIcon-B9Oytaek.js";import"./BaseRadioButton-CMn1YJS-.js";import"./BaseRadioButton.stories-c_treIl5.js";import"./CheckboxPanel.stories-Dli3jYVT.js";import"./InputPanel-RQ-oxY--.js";import"./Flex-DM1rmxjn.js";import"./SlotComponent-D_gigiSR.js";import"./mergeRefs-C2tZ3Qfq.js";import"./RadioPanel.stories-BeJLz2Hd.js";import"./RadioPanel-Ta7icJgt.js";import"./Title-khXO4pqj.js";import"./Card-DH0iQTYn.js";import"./Text-Ct7JaVdq.js";import"./Tag-CHEqBels.js";import"./ExpandablePanel-BwSdWFBB.js";import"./useAnimatedHeightBetween-ClNxv7GG.js";import"./tokens-CW-NfdIE.js";import"./Expander-CqUnvuT9.js";import"./ChevronUpIcon-D_5fwB3J.js";import"./ListItem-BZYiS5yv.js";import"./BaseTextInput-B8md-D5C.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-CVyux8yn.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-B52-rH5c.js";import"./useListNavigation-DVftvpYz.js";import"./Chip-_Qdlxlk-.js";import"./CheckIcon-BjWjhoWA.js";import"./ArrowVerticalAnimated-DULX4Tdy.js";import"./ArrowDownIcon-DqW25wrh.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-BW3rllc-.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-CDvG_kVw.js";import"./TableCaption-XpPKwZGd.js";import"./tableContext-XRCxbLUP.js";import"./CalendarIcon-dQcoduFi.js";import"./Label-SuODc9vh.js";import"./Popover-BgixCrXz.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
