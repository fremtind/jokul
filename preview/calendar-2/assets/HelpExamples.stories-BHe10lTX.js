import{j as r}from"./iframe-RCiDKOC6.js";import{H as t}from"./Help-CXtuGDKk.js";import"./Help.stories-BbHvlev7.js";import{A as c,m as d}from"./Autosuggest.stories-CSuUlWC_.js";import g,{ComboboxStory as x}from"./Combobox.stories-2fKhUH38.js";import S from"./FieldGroup.stories--R9On5ug.js";import H from"./InputGroup.stories-DY44iMkt.js";import b,{SelectStory as j}from"./select.stories-C8kp9VaN.js";import f from"./TextArea.stories--ltCBDOb.js";import{C as I}from"./Combobox-CsiwGaZD.js";import{D as T}from"./DateInput-l0QGXZOq.js";import{F as G}from"./FieldGroup-Ptof-nDD.js";import{I as A}from"./InputGroup-BLnAoGbA.js";import{S as h}from"./Search-CoQUwgHh.js";import{S as v}from"./Select-CToU0z8s.js";import{T as C}from"./TextArea-BtO8CRi-.js";import{T as F}from"./TextInput-BnTcLN92.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-CFSHu--5.js";import"./Button-Ca4KFYpr.js";import"./usePreviousValue-DpBa-jT0.js";import"./Loader-CO6-M48k.js";import"./useDelayedRender-Da28cLeW.js";import"./index-Chjiymov.js";import"./useId-D2G0PmcF.js";import"./IconButton-DhsTBqlw.js";import"./CloseIcon-CxCnCazc.js";import"./SearchIcon-DJbtthC8.js";import"./PopupTip-Drv1W4II.js";import"./QuestionIcon-sWmwiPmu.js";import"./TooltipTrigger-DF3htGVg.js";import"./floating-ui.react-ewEp8-u7.js";import"./index-wablhE8D.js";import"./index-ToM4rr6r.js";import"./TooltipContent-D_3g8vPw.js";import"./useBrowserPreferences-DLFkCLwj.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-Cxe3hpXS.js";import"./Checkbox-CjBebu_4.js";import"./RadioButton.stories-DniLCFbU.js";import"./RadioButton-COemlhNG.js";import"./SupportLabel-BIX4JRNl.js";import"./SuccessIcon-BPEts3V3.js";import"./WarningIcon-CQR7mazW.js";import"./BaseRadioButton-Bri2nj_u.js";import"./BaseRadioButton.stories-EHlx7DAW.js";import"./CheckboxPanel.stories-edoEvOs8.js";import"./InputPanel-CXS3OuK6.js";import"./Flex-DIKvoCnl.js";import"./SlotComponent-BF3J2ex6.js";import"./mergeRefs-DY0sZ88l.js";import"./RadioPanel.stories-DZxeZZ0E.js";import"./RadioPanel-D-ayXVzx.js";import"./Title-DDpZPW3j.js";import"./Card-Ub5rNWjZ.js";import"./Text-CA2oFxIY.js";import"./Tag-CeKFIKYb.js";import"./ExpandablePanel-BWYHMY1C.js";import"./useAnimatedHeightBetween-DPAuBczm.js";import"./tokens-CW-NfdIE.js";import"./Expander-CR9_GSbT.js";import"./ChevronUpIcon-Cqe6o0_1.js";import"./ListItem-BVJ4Wh_v.js";import"./BaseTextInput-C7kc90V_.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D-MEhpxh.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-C8CMAZZT.js";import"./useListNavigation-DTGTZTq4.js";import"./Chip-8JZUEy4f.js";import"./CheckIcon-BFbW43wf.js";import"./ArrowVerticalAnimated-BPXF3aTX.js";import"./ArrowDownIcon-CpgvBeRo.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-BhPCIDov.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-BNxZ5w_n.js";import"./TableCaption-CzvaobIV.js";import"./tableContext-DUWmXkkF.js";import"./CalendarIcon-Cms85Gh9.js";import"./Label-C0TO7_S4.js";import"./Popover-Dx925ymg.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
