import{j as r}from"./iframe-C0iG7Ac0.js";import{H as o}from"./Help-BXV_HX_k.js";import"./Help.stories-Ch89kAkc.js";import{A as c,m as d}from"./Autosuggest.stories-DrJONvD6.js";import g,{ComboboxStory as x}from"./Combobox.stories-Bb4JdsxB.js";import H from"./FieldGroup.stories-BDedzPu3.js";import b from"./InputGroup.stories-CKFZqo2V.js";import S from"./select.stories-mW3JEW8e.js";import j from"./TextArea.stories-XkOYvFsV.js";import{C as f}from"./Combobox-Bj1fOexz.js";import{D as I}from"./DateInput-B1UAtG-Z.js";import{F as T}from"./FieldGroup-DRPSXz4t.js";import{I as G}from"./InputGroup-CsmazGDW.js";import{S as A}from"./Search-CTHRFiFK.js";import{S as h}from"./Select-CLN7FbcR.js";import{T as v}from"./TextArea-OZzvb5Hj.js";import{T as C}from"./TextInput-DsQNbLHX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-I5-aMHhB.js";import"./Button-DF6iJKmf.js";import"./usePreviousValue-cuQDiGKM.js";import"./Loader-DiEBMh0R.js";import"./useDelayedRender-DGvB7uVR.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-CLMcdZ2I.js";import"./IconButton-DnD9UjBX.js";import"./CloseIcon-BsdYln6q.js";import"./SearchIcon-BNeUjDJ3.js";import"./PopupTip-Dh54f8I3.js";import"./QuestionIcon-YM5Ah3IJ.js";import"./TooltipTrigger-BtJnX66X.js";import"./floating-ui.react-BiWRGZyr.js";import"./index-Bw1FxxfL.js";import"./index-OK0kRSG5.js";import"./TooltipContent-C75NU_oE.js";import"./useBrowserPreferences-CAWYau0U.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-DPLF219e.js";import"./Checkbox-CIad-6dq.js";import"./RadioButton.stories-D6I3dLsY.js";import"./RadioButton-2RQt9OMe.js";import"./SupportLabel-BcXS5ewK.js";import"./SuccessIcon-BQzSF3Yq.js";import"./WarningIcon-DIanTeMk.js";import"./BaseRadioButton-br_7s_vs.js";import"./BaseRadioButton.stories-Bs3oUr-U.js";import"./CheckboxPanel.stories-DkW_XKMp.js";import"./InputPanel-BkbK8xmo.js";import"./Flex-BowKUYRJ.js";import"./SlotComponent-DVzVZPxC.js";import"./mergeRefs-HevErwgW.js";import"./RadioPanel.stories-D16qHpKF.js";import"./RadioPanel-BZ_T2emB.js";import"./Title-BHJFw6AM.js";import"./Card-D-q6eiiH.js";import"./Text-BaB2d2Ju.js";import"./Tag-V-UnDKCV.js";import"./ExpandablePanel-CfuxFjXC.js";import"./useAnimatedHeightBetween-Dm6sqyDV.js";import"./tokens-CW-NfdIE.js";import"./Expander-CpQaNZx_.js";import"./ChevronUpIcon-tqVV0-IB.js";import"./ListItem-DMGBOD2X.js";import"./BaseTextInput-BmSVtgiW.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-D-msJ4z0.js";import"./index.esm-3Hpvis1T.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-B4kyxlpX.js";import"./useListNavigation-Bq3Cqh-b.js";import"./Chip-BAa-b06Y.js";import"./CheckIcon-CfVNlqOE.js";import"./ArrowVerticalAnimated-DkwuRxgw.js";import"./ArrowDownIcon-BJFEZk61.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-DdmGjzfV.js";import"./TableCaption-Brs9y29c.js";import"./tableContext-uhDh--ET.js";import"./CalendarIcon-D6BYkO-K.js";import"./Label-BQbob5rz.js";const me={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
