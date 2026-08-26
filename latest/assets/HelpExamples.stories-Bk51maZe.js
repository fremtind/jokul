import{j as r}from"./iframe-BsO7QsUS.js";import{H as o}from"./Help-1zHgbEaZ.js";import"./Help.stories-B1bBZfqQ.js";import{A as c,m as d}from"./Autosuggest.stories-BKqaxZNu.js";import g,{ComboboxStory as x}from"./Combobox.stories-CK6gYozV.js";import S from"./FieldGroup.stories-BqFcVe-3.js";import H from"./InputGroup.stories-BXjVc4kZ.js";import b,{SelectStory as j}from"./select.stories-BXDxq8OP.js";import f from"./TextArea.stories-CtPvZRCW.js";import{C as T}from"./Combobox-BfiJ5H6j.js";import{D as k}from"./DatePicker-rAuBi3T4.js";import{F as G}from"./FieldGroup-CwlZbvV9.js";import{I}from"./InputGroup-BYcKQ2_H.js";import{S as A}from"./Search-BDc7-83e.js";import{S as h}from"./Select-DcdFcLmm.js";import{T as v}from"./TextArea-BZeyt293.js";import{T as C}from"./TextInput-CL0ne3vG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Dts8WXqd.js";import"./Button-OXGQ-Xqb.js";import"./usePreviousValue-mqZ0KUW0.js";import"./Loader-DhmxBmW7.js";import"./useDelayedRender-DWK287du.js";import"./index-Chjiymov.js";import"./useId-OBtL-jWo.js";import"./IconButton-CIjMLXJ4.js";import"./CloseIcon-Dv4_oO_5.js";import"./SearchIcon-DKSpMFCV.js";import"./PopupTip-ClODr0cb.js";import"./QuestionIcon-DIGna7ws.js";import"./TooltipTrigger-ynsM_bwL.js";import"./floating-ui.react-C_lAU8p3.js";import"./index-DoCXe5Hm.js";import"./index-Dv7OxB7B.js";import"./TooltipContent-OjdhMAO1.js";import"./useBrowserPreferences-Cn4OVfag.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-8jMHcWgZ.js";import"./Checkbox-BT85OI2r.js";import"./RadioButton.stories-DsT7rA0D.js";import"./RadioButton-CWLvM15z.js";import"./SupportLabel-BGBLZI2B.js";import"./SuccessIcon-Cnu4Z23V.js";import"./WarningIcon-DI4egHJO.js";import"./BaseRadioButton-Bwx662BB.js";import"./BaseRadioButton.stories-CpC2Ya2g.js";import"./CheckboxPanel.stories-Da4wDg-g.js";import"./InputPanel-DV0R7bRd.js";import"./Flex-CxKEAT0M.js";import"./SlotComponent-CjC48c6E.js";import"./mergeRefs-B-2CfUwy.js";import"./RadioPanel.stories-DyMIn1P7.js";import"./RadioPanel-D0nBgW6I.js";import"./Title-C0aYOg5V.js";import"./Card-CUhjc9_0.js";import"./Text-DQka8uKo.js";import"./Tag-BVc-SL3F.js";import"./ExpandablePanel-BC5_Bvs6.js";import"./useAnimatedHeightBetween-qKgj4IVo.js";import"./tokens-CW-NfdIE.js";import"./Expander-lg5JQ31y.js";import"./ChevronDownIcon-CNFzyMP4.js";import"./ChevronUpIcon-CYHuw9Vd.js";import"./ListItem-5-K5Kx4U.js";import"./BaseTextInput-Dn24CGvf.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-B7-Dcb3T.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-BDzYN64p.js";import"./useListNavigation-DPwCrPxH.js";import"./Chip-Ccpr4ZXG.js";import"./CheckIcon-D2n2G689.js";import"./ArrowVerticalAnimated-CxoiYXSZ.js";import"./ArrowDownIcon-CQzF8Pty.js";import"./formatDate-hwqa_80k.js";import"./CalendarIcon-CyM-9XJ4.js";import"./Popover-Ddtmq97Q.js";import"./ArrowRightIcon-DO7WxTo1.js";import"./Label-C2goyqqC.js";import"./valuePair-Bn6SadUn.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Picker",render:e=>r.jsx(k,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(T,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...f.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(I,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Text Input",
  render: args => {
    return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Date Picker",
  render: args => {
    return <DatePicker label={"Navn"} tooltip={<Help {...args} />} />;
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDatePicker","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDatePicker,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};
