import{j as r}from"./iframe-D36FvG5n.js";import{H as o}from"./Help-4egO-1Xy.js";import"./Help.stories-D9kqwOYA.js";import{A as c,m as d}from"./Autosuggest.stories-BJex8jd5.js";import g,{ComboboxStory as x}from"./Combobox.stories-C41izMwB.js";import H from"./FieldGroup.stories-NeWnhkP5.js";import b from"./InputGroup.stories-uc-HJPrU.js";import S from"./select.stories-CyvdHhpm.js";import j from"./TextArea.stories-CLj8oeEF.js";import{C as f}from"./Combobox-BNTpFCMj.js";import{D as I}from"./DateInput-jjeCAZoK.js";import{F as T}from"./FieldGroup-Oq3HO0TX.js";import{I as G}from"./InputGroup-BVz4K_Hv.js";import{S as A}from"./Search-DTsQ1kSM.js";import{S as h}from"./Select-B08Inyge.js";import{T as v}from"./TextArea-BKx2E5YI.js";import{T as C}from"./TextInput-JVaVkeUi.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-3KhJkBgE.js";import"./Button-0j3wKZLq.js";import"./usePreviousValue-URoIRnPY.js";import"./Loader-DFJ_gXcm.js";import"./useDelayedRender-DbEqG-hc.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-C5JydwN8.js";import"./IconButton-BqnxlqGM.js";import"./CloseIcon-Deww3WIx.js";import"./SearchIcon-B7v8kfPI.js";import"./PopupTip-B5UmzYyM.js";import"./QuestionIcon-CQNYMHuF.js";import"./TooltipTrigger-Dv1T9hHT.js";import"./floating-ui.react-BZ_3xAwA.js";import"./index-DIvCLx37.js";import"./index-DsDcSAAw.js";import"./TooltipContent-Opw2-AFn.js";import"./useBrowserPreferences-CGPSmLWW.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-DxLOZis6.js";import"./InputPanel-Clrm1EdD.js";import"./Checkbox-g7B648BB.js";import"./RadioButton-CZJN2mJg.js";import"./SupportLabel-DOAt-S95.js";import"./SuccessIcon-DxCtcLK-.js";import"./WarningIcon-afqkylKB.js";import"./BaseRadioButton-3Vza_1V2.js";import"./Flex-Z99anILf.js";import"./SlotComponent-BznsLVxD.js";import"./mergeRefs-DH11Bam2.js";import"./Checkbox.stories-3FbWv_Ir.js";import"./RadioButton.stories-BGSQKLLn.js";import"./BaseRadioButton.stories-BPAaJOzU.js";import"./RadioPanel.stories-Dg-5wvL4.js";import"./RadioPanel-DElpohQm.js";import"./Title-ByE4jtsv.js";import"./Card-u02rRChd.js";import"./Text-Cqymk1Kj.js";import"./Tag-DZeZZ0VI.js";import"./ExpandablePanel-D0P8mEFw.js";import"./useAnimatedHeightBetween-D008_UDR.js";import"./tokens-HKQN8Vn-.js";import"./Expander-Dtr5Hdlz.js";import"./ChevronUpIcon-Dj1jVyX9.js";import"./ListItem-CHve7ADr.js";import"./BaseTextInput-B0-fha9J.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-ZKppM87p.js";import"./index.esm-CY7g9cMd.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-70wy6aHn.js";import"./useListNavigation-CnpGKcBi.js";import"./Chip-Cn4X4Rbs.js";import"./CheckIcon-C8_wLCyV.js";import"./ArrowVerticalAnimated-D0ofpArT.js";import"./ArrowDownIcon-B4GqSp-g.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DVU_iT3F.js";import"./TableCaption-DLKZBJ44.js";import"./tableContext-DSa2bAg2.js";import"./CalendarIcon-DAyh18gg.js";import"./Label-C4Gi40FP.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ne=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ne as __namedExportsOrder,me as default};
