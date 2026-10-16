import{j as r}from"./iframe-BluD2y5g.js";import{H as o}from"./Help-BI9ptKAE.js";import"./Help.stories-ymWe3OxC.js";import{A as c,m as d}from"./Autosuggest.stories-BzxwGZQ4.js";import g,{ComboboxStory as x}from"./Combobox.stories-CwiN8g73.js";import H from"./FieldGroup.stories-BHf7-PAj.js";import b from"./InputGroup.stories-MUN2__0q.js";import S from"./select.stories-D2nv5DOk.js";import j from"./TextArea.stories-D_OCpLrx.js";import{C as f}from"./Combobox-BF6ObpX5.js";import{D as I}from"./DateInput-BHo8h9yb.js";import{F as T}from"./FieldGroup-L6KxTIWe.js";import{I as G}from"./InputGroup-D7CFmTiR.js";import{S as A}from"./Search-Df_amlk7.js";import{S as h}from"./Select-Fs4Bou6o.js";import{T as v}from"./TextArea-DgpYjxHp.js";import{T as C}from"./TextInput-p3Flpm93.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-kqGXX5uY.js";import"./Button-BZjykdVU.js";import"./usePreviousValue-BbleQHP3.js";import"./Loader-Boup7Z4s.js";import"./useDelayedRender-NECEF8kA.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CqDn8-2e.js";import"./IconButton-BZ4zeUNb.js";import"./CloseIcon-Fvd7iKu-.js";import"./SearchIcon-DFcdhEVw.js";import"./PopupTip-BALPCqHe.js";import"./QuestionIcon-BSes4oaW.js";import"./TooltipTrigger-C71H4jqG.js";import"./floating-ui.react-BfYA8F-T.js";import"./index-VO3XEULM.js";import"./index-CeaZETLJ.js";import"./TooltipContent-DQ0kCxy4.js";import"./useBrowserPreferences-Bi9Y6njz.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-D9IDBi4v.js";import"./CheckboxPanel-BBzYRI-3.js";import"./InputPanel-CwcCl1TQ.js";import"./Checkbox-B637ZDxp.js";import"./RadioButton-DrqbN2PC.js";import"./SupportLabel-CuwoYV1K.js";import"./SuccessIcon-De2Rf2HP.js";import"./WarningIcon-BvUiAEtD.js";import"./BaseRadioButton-BZ89SPLB.js";import"./Flex-BEXagI8H.js";import"./SlotComponent-BhFqMO8i.js";import"./mergeRefs-CLpafj6m.js";import"./Checkbox.stories-m0T79Y74.js";import"./RadioButton.stories-e937F473.js";import"./BaseRadioButton.stories-Dh1WbZFM.js";import"./RadioPanel.stories-CnyRTzsm.js";import"./RadioPanel-DHlt5OEB.js";import"./Title-gkAEVevz.js";import"./Card-B5rNrRvr.js";import"./Text-Drke1_hS.js";import"./Tag-4mTXAzQB.js";import"./ExpandablePanel-nfD-E1iM.js";import"./useAnimatedHeightBetween-CvlW3VGU.js";import"./tokens-HKQN8Vn-.js";import"./Expander-DidleKqT.js";import"./ChevronUpIcon-BPt7C0nl.js";import"./ListItem-Cavohlkd.js";import"./BaseTextInput-3yLPs4tR.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-Dp7J9X4O.js";import"./index.esm-C78bJbDD.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-c8sxQ045.js";import"./useListNavigation-DwhTreHd.js";import"./Chip-DNauBQFT.js";import"./CheckIcon-BsRBRY0Z.js";import"./ArrowVerticalAnimated-BEDmrzL1.js";import"./ArrowDownIcon-DuwEs9a-.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-BGCXpquZ.js";import"./TableCaption-B4FTyzCs.js";import"./tableContext-CdK22oRm.js";import"./CalendarIcon-BBiXYhJN.js";import"./Label-BuBxX9pA.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ie=["HelpTextInput","HelpDateInput","HelpCombobox","HelpTextArea","HelpSearch","HelpSelect","HelpAutosuggest","HelpInputGroup","HelpFieldGroup"];export{i as HelpAutosuggest,a as HelpCombobox,p as HelpDateInput,u as HelpFieldGroup,l as HelpInputGroup,m as HelpSearch,n as HelpSelect,s as HelpTextArea,t as HelpTextInput,ie as __namedExportsOrder,ne as default};
