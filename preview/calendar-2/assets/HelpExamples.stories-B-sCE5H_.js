import{j as r}from"./iframe-Nrz7JFlq.js";import{H as t}from"./Help-D7LZZj-O.js";import"./Help.stories-Dp2laDP5.js";import{A as c,m as d}from"./Autosuggest.stories-fYoIiy42.js";import g,{ComboboxStory as x}from"./Combobox.stories-B-i1vwtZ.js";import S from"./FieldGroup.stories-BgeLxcpD.js";import H from"./InputGroup.stories-DBbpRprF.js";import b,{SelectStory as j}from"./select.stories-C5r7Llp1.js";import f from"./TextArea.stories-CH53p0TS.js";import{C as I}from"./Combobox-DSIpPvu5.js";import{D as T}from"./DateInput-qSWQYzwO.js";import{F as G}from"./FieldGroup-DsWlkRQF.js";import{I as A}from"./InputGroup-BCLI-Mdr.js";import{S as h}from"./Search-Cq2KAiWs.js";import{S as v}from"./Select-HHgBfDbU.js";import{T as C}from"./TextArea-Bddmy3H_.js";import{T as F}from"./TextInput-BZg_cfxe.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CFU2ZQ2t.js";import"./Button-DAICfHSC.js";import"./usePreviousValue-d8nlzhS8.js";import"./Loader-CYxKVygT.js";import"./useDelayedRender-BkJEvx82.js";import"./index-Chjiymov.js";import"./useId-B_unQdkN.js";import"./IconButton-BVvgl6Gg.js";import"./CloseIcon-DV793s6-.js";import"./SearchIcon-B9k8ED2L.js";import"./PopupTip-vtX6_wfh.js";import"./QuestionIcon-DnAYd1Vn.js";import"./TooltipTrigger-Dix1G-Mt.js";import"./floating-ui.react-DdFnRBed.js";import"./index-CruHAzxQ.js";import"./index-CTRLT--Y.js";import"./TooltipContent-BCui4jJi.js";import"./useBrowserPreferences-Dwt7bZmx.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-C9cHWQ1v.js";import"./Checkbox-olj42TTj.js";import"./RadioButton.stories-CasMLKgB.js";import"./RadioButton-CA9_qB2N.js";import"./SupportLabel-C-cKWH7T.js";import"./SuccessIcon-57mL6tdI.js";import"./WarningIcon-Cl1L--wv.js";import"./BaseRadioButton-CkKVqtoY.js";import"./BaseRadioButton.stories-DVabDSDr.js";import"./CheckboxPanel.stories-DvzosA7e.js";import"./InputPanel-D0C0i0fa.js";import"./Flex-DPE7aN-I.js";import"./SlotComponent-D21GA8LQ.js";import"./mergeRefs-BOQTS7Bw.js";import"./RadioPanel.stories-DTT_BzsL.js";import"./RadioPanel-BRriRPYi.js";import"./Title-PP2uwACc.js";import"./Card-DjF3Ymx9.js";import"./Text-C_vP23Tv.js";import"./Tag-h5ZsOKnw.js";import"./ExpandablePanel-MmOADNuR.js";import"./useAnimatedHeightBetween-8AdO2iXa.js";import"./tokens-CW-NfdIE.js";import"./Expander-CNDLpmi_.js";import"./ChevronUpIcon-CZ3zA7Uq.js";import"./ListItem-CueGkpWZ.js";import"./BaseTextInput-CU3hHalL.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DWUTPOA5.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-CYAn4LVL.js";import"./useListNavigation-Bc6KTfsI.js";import"./Chip-BBUYvHnQ.js";import"./CheckIcon-Cbi76qVq.js";import"./ArrowVerticalAnimated-BTZkqGye.js";import"./ArrowDownIcon-c4KQ-ZeS.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-B4HBUqP8.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-BZmD4nPu.js";import"./TableCaption-BkDmNKmn.js";import"./tableContext-BQx1nlKy.js";import"./CalendarIcon-DkXpt1nt.js";import"./Label-DfCgc5hL.js";import"./Popover-D3pT5smy.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
