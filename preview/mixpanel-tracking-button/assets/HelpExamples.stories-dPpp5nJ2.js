import{j as r}from"./iframe-CWbURapE.js";import{H as o}from"./Help-g_iIsGRr.js";import"./Help.stories-B0gcJTpI.js";import{A as c,m as d}from"./Autosuggest.stories-BKjxEIgl.js";import g,{ComboboxStory as x}from"./Combobox.stories-CKqTaUET.js";import H from"./FieldGroup.stories-G7zleXv5.js";import b from"./InputGroup.stories-1cs9rmLC.js";import S from"./select.stories-CEbch6BI.js";import j from"./TextArea.stories-DmNv2NY3.js";import{C as f}from"./Combobox-Bo_b5LwQ.js";import{D as I}from"./DateInput-D3ItZQZn.js";import{F as T}from"./FieldGroup-D0_JpfVa.js";import{I as G}from"./InputGroup-CQukCQ0K.js";import{S as A}from"./Search-D4d7l1aC.js";import{S as h}from"./Select-BRUzb-tq.js";import{T as v}from"./TextArea-QQ151lYj.js";import{T as C}from"./TextInput-BpjoKId8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Cb0otd3z.js";import"./Button-BZcstn-s.js";import"./usePreviousValue-CknlO7_W.js";import"./Loader-CEtuCIjp.js";import"./useDelayedRender-Dp8zVklj.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-DfyXXT_I.js";import"./IconButton-CR9kRmr4.js";import"./CloseIcon-mtxwnbmg.js";import"./SearchIcon-v_4rBZvM.js";import"./PopupTip-DqdrB_Hy.js";import"./QuestionIcon-Dkl9N_Eu.js";import"./TooltipTrigger-CFYg7Li0.js";import"./floating-ui.react-98qIrZY8.js";import"./index-DUrZhZWF.js";import"./index-BKqdTJuT.js";import"./TooltipContent-vFZk8O7Z.js";import"./useBrowserPreferences-Cn8VVqwP.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-cuF5yvXf.js";import"./InputPanel-BVsMfzxh.js";import"./Checkbox-tcCz3_5G.js";import"./RadioButton-BMYnoEBf.js";import"./SupportLabel-C3zAzX1I.js";import"./SuccessIcon-DrGcsT3w.js";import"./WarningIcon-BCcwKm7i.js";import"./BaseRadioButton-CJyh_-KT.js";import"./Flex-iotPtusY.js";import"./SlotComponent-BZwoj8oo.js";import"./mergeRefs-SwaaYz9g.js";import"./Checkbox.stories-DXdgQXWo.js";import"./RadioButton.stories-DAyp3Xu5.js";import"./BaseRadioButton.stories-CpocpQhz.js";import"./RadioPanel.stories-B-KtVWcG.js";import"./RadioPanel-0x0PNFSS.js";import"./Title-BBuVqJPk.js";import"./Card-CWbeQTRu.js";import"./Text-GXdSGlzO.js";import"./Tag-CHUGPtbJ.js";import"./ExpandablePanel-BxVGY2DS.js";import"./useAnimatedHeightBetween-eg8GHf5e.js";import"./tokens-HKQN8Vn-.js";import"./Expander-BMQgGSWe.js";import"./ChevronUpIcon-wNA_q8Dt.js";import"./ListItem-Bpqk9OF1.js";import"./BaseTextInput-BNxQVmSY.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BlA9h-B7.js";import"./index.esm-BfyFd-l1.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-DPa4b8qc.js";import"./useListNavigation-CxW9NgM_.js";import"./Chip-Dtk-8tD7.js";import"./CheckIcon-CtgaR0Tc.js";import"./ArrowVerticalAnimated-BpU7zUEC.js";import"./ArrowDownIcon-B_u2ixQm.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-B9e7Yfpu.js";import"./TableCaption-skIGdW-Y.js";import"./tableContext-BX7fWslj.js";import"./CalendarIcon-Cfn0pjIi.js";import"./Label-eSPAk_8J.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
