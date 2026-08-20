import{j as r}from"./iframe-CFpyWcZO.js";import{H as t}from"./Help-BBkuuPve.js";import"./Help.stories-BONODr-M.js";import{A as c,m as d}from"./Autosuggest.stories-Bp13pL3Z.js";import g,{ComboboxStory as x}from"./Combobox.stories-CijvaHSA.js";import S from"./FieldGroup.stories-CskHixnh.js";import H from"./InputGroup.stories-Bqf34n9X.js";import b,{SelectStory as j}from"./select.stories-CSiiy2XF.js";import f from"./TextArea.stories-dIA0Mw1e.js";import{C as I}from"./Combobox-BwvIQun0.js";import{D as T}from"./DateInput-C8eCbm5G.js";import{F as G}from"./FieldGroup-BeeoPQaH.js";import{I as A}from"./InputGroup-CSwyUOK-.js";import{S as h}from"./Search-DUd6pI8U.js";import{S as v}from"./Select-D1ucKqPa.js";import{T as C}from"./TextArea-CzgvOTjJ.js";import{T as F}from"./TextInput-DAsa9prt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DsczttUB.js";import"./Button-BnGrkcCb.js";import"./usePreviousValue-gmcPI170.js";import"./Loader-Da2q4OXK.js";import"./useDelayedRender-cLVI01gf.js";import"./index-Chjiymov.js";import"./useId-o1urWYOd.js";import"./IconButton-DDGYsLRv.js";import"./CloseIcon-H0YyEnpw.js";import"./SearchIcon-DvlBrURx.js";import"./PopupTip-CcQV6aQK.js";import"./QuestionIcon-D2anI57R.js";import"./TooltipTrigger-Bklu-5TQ.js";import"./floating-ui.react-1_4eCI6l.js";import"./index-C6YbIzjE.js";import"./index-BZLB_YL4.js";import"./TooltipContent-DSgrn-B8.js";import"./useBrowserPreferences-DCMcfi6G.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-Bbkg1h0i.js";import"./Checkbox-C-QYojri.js";import"./RadioButton.stories-bsElQNof.js";import"./RadioButton-DRrlObqR.js";import"./SupportLabel-aeWJzMQ8.js";import"./SuccessIcon-B1r_Q0Et.js";import"./WarningIcon-DLGgcFEu.js";import"./BaseRadioButton-C9AMf1tk.js";import"./BaseRadioButton.stories-fl-TyT9q.js";import"./CheckboxPanel.stories-CECgeVyr.js";import"./InputPanel-DWwcDVJ5.js";import"./Flex-v3ieCz0Q.js";import"./SlotComponent-BwJbg2S0.js";import"./mergeRefs-CemUoRzq.js";import"./RadioPanel.stories-CIhXuut9.js";import"./RadioPanel-UbD69vpj.js";import"./Title-Ct12JViq.js";import"./Card-CpON7Dxf.js";import"./Text-BipEZytG.js";import"./Tag-DMWP1spM.js";import"./ExpandablePanel-DhHPcyIT.js";import"./useAnimatedHeightBetween-DvbYzABz.js";import"./tokens-CW-NfdIE.js";import"./Expander-BXdcwkEj.js";import"./ChevronUpIcon-Bfd3G3lJ.js";import"./ListItem-CEc4sMB0.js";import"./BaseTextInput-BJHa2ZhT.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-DF9N8rLH.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-DJ8aQZO8.js";import"./useListNavigation-_YdarKe0.js";import"./Chip-BBCg5jza.js";import"./CheckIcon-gu5wgYfL.js";import"./ArrowVerticalAnimated-D3yiD1VQ.js";import"./ArrowDownIcon-BVAoGpVk.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-LGdSRFGR.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-BkrlbmE5.js";import"./TableCaption-C987uWD5.js";import"./tableContext-BZppgnmi.js";import"./CalendarIcon-BKzV-y-t.js";import"./Label-Qf3_QM92.js";import"./Popover-v0WkaV6m.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
