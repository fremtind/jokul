import{j as r}from"./iframe-B5-EsWES.js";import{H as t}from"./Help-BVf53uwB.js";import"./Help.stories-BUEKcvm-.js";import{A as c,m as d}from"./Autosuggest.stories-C4JGCbiK.js";import g,{ComboboxStory as x}from"./Combobox.stories-CtIPJxF7.js";import S from"./FieldGroup.stories-DVbZGF-u.js";import H from"./InputGroup.stories-B0ghpXwd.js";import b,{SelectStory as j}from"./select.stories-Bfmvzre9.js";import f from"./TextArea.stories-BF2SmVM5.js";import{C as I}from"./Combobox-C8hm6bbp.js";import{D as T}from"./DateInput-DV-zusNY.js";import{F as G}from"./FieldGroup-KMVqODXy.js";import{I as A}from"./InputGroup-Cpr2X7lZ.js";import{S as h}from"./Search-Dj9jJjeq.js";import{S as v}from"./Select-CCrQABtw.js";import{T as C}from"./TextArea-BJoQSNpQ.js";import{T as F}from"./TextInput-BTeH__y5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C_9kVWMg.js";import"./Button-D4GpVjwL.js";import"./usePreviousValue-FlBPtRjV.js";import"./Loader-BBo2pDju.js";import"./useDelayedRender-CNX_gqWk.js";import"./index-Chjiymov.js";import"./useId-DLNMEdKy.js";import"./IconButton-Ch_Lym4W.js";import"./CloseIcon-Cdq6MZzA.js";import"./SearchIcon-B3BIap6N.js";import"./PopupTip-CtGNTZuc.js";import"./QuestionIcon-PefVN3pg.js";import"./TooltipTrigger-DDRjzbma.js";import"./floating-ui.react-B4x5IJ7_.js";import"./index-DC0kZXFP.js";import"./index-Db7JcfOx.js";import"./TooltipContent-B9-Njnyu.js";import"./useBrowserPreferences-DiusfrSb.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-BjjMWErA.js";import"./Checkbox-Bg1i5h15.js";import"./RadioButton.stories-DHXuEGSF.js";import"./RadioButton-DIup8ibj.js";import"./SupportLabel-gbYwLygJ.js";import"./SuccessIcon-CMZwq4Ft.js";import"./WarningIcon-BQzW7-bU.js";import"./BaseRadioButton-BUZ2qd6C.js";import"./BaseRadioButton.stories-C5EULP6z.js";import"./CheckboxPanel.stories-CGxCdTE8.js";import"./InputPanel-Tc9GlJCA.js";import"./Flex-D3RdLEEE.js";import"./SlotComponent-pSW6PkUz.js";import"./mergeRefs-U2pP82X_.js";import"./RadioPanel.stories-Cms8PN1Z.js";import"./RadioPanel-BUKEWev7.js";import"./Title-MRT-7fKD.js";import"./Card-BERLQOLq.js";import"./Text-AjyFVD_x.js";import"./Tag-c3zfhV6g.js";import"./ExpandablePanel-BoI2nnzh.js";import"./useAnimatedHeightBetween-B-_xTxQr.js";import"./tokens-CW-NfdIE.js";import"./Expander-ClC-QPN5.js";import"./ChevronUpIcon-CvkqMsJ4.js";import"./ListItem-BNf_fQRK.js";import"./BaseTextInput-DB4a9TtB.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BiHE3kmm.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-DVjIlpWj.js";import"./useListNavigation-BbutZE5U.js";import"./Chip-C9MP5t54.js";import"./CheckIcon-D63jOviT.js";import"./ArrowVerticalAnimated-B5CL9ZsG.js";import"./ArrowDownIcon-BWKAU2NK.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-CNXNY25W.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-CrXscTHc.js";import"./TableCaption-Dq4PPMv3.js";import"./tableContext-CSYZfejD.js";import"./CalendarIcon-CTD8cKra.js";import"./Label-BVenPMYm.js";import"./Popover-BqrYXHHS.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
