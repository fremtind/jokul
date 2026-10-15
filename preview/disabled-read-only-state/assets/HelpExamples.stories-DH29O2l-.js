import{j as r}from"./iframe-Cc0lsbEP.js";import{H as o}from"./Help-Um9qD44z.js";import"./Help.stories-OlW2ZjT1.js";import{A as c,m as d}from"./Autosuggest.stories-9gPaSnPA.js";import g,{ComboboxStory as x}from"./Combobox.stories-CKgpRrwG.js";import H from"./FieldGroup.stories-BgM3BA3p.js";import b from"./InputGroup.stories-DFAlSAEP.js";import S from"./select.stories-B-DnKLLi.js";import j from"./TextArea.stories-C7r1_pZx.js";import{C as f}from"./Combobox-P30mh6Pt.js";import{D as I}from"./DateInput-Cr1qf_bz.js";import{F as T}from"./FieldGroup-C3vgeZbo.js";import{I as G}from"./InputGroup-D_D3ATR0.js";import{S as A}from"./Search-Dh3t1laJ.js";import{S as h}from"./Select-BzIBLSoB.js";import{T as v}from"./TextArea-BpWGyxn0.js";import{T as C}from"./TextInput-DIPorO9T.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BPBN9EvZ.js";import"./Button-qZbBNQgb.js";import"./usePreviousValue-CRmLqYMP.js";import"./Loader-BMORs4ha.js";import"./useDelayedRender-AVQE6CwH.js";import"./landkoder-DlcCquOp.js";import"./index-Chjiymov.js";import"./useId-BEqUuJdd.js";import"./IconButton-CqyOWVdO.js";import"./CloseIcon-BtH6ewFd.js";import"./SearchIcon-BzaKg0HP.js";import"./PopupTip-C5wng4zV.js";import"./QuestionIcon-BDd0UunQ.js";import"./TooltipTrigger-D1py6hit.js";import"./floating-ui.react-BnsvDAFd.js";import"./index-A--01PpQ.js";import"./index-C18oHvl0.js";import"./TooltipContent-DZ4QKHV-.js";import"./useBrowserPreferences-Bsl7Vz_o.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./CheckboxPanel.stories-BaY0Uytf.js";import"./CheckboxPanel-DVj51Xgl.js";import"./InputPanel-VPNiShX8.js";import"./Checkbox-VJMAcHiI.js";import"./RadioButton-C_pE1xJB.js";import"./SupportLabel-D8Vv-TW6.js";import"./SuccessIcon-CM5mryur.js";import"./WarningIcon-C3tmYzoj.js";import"./BaseRadioButton-DZ53ihvM.js";import"./Flex-BcrmyNfa.js";import"./SlotComponent-CrToIbEs.js";import"./mergeRefs--gaMb34L.js";import"./Checkbox.stories-DQD51RNZ.js";import"./RadioButton.stories-CW9Od8i7.js";import"./BaseRadioButton.stories-BnqMQ-rz.js";import"./RadioPanel.stories-0FV3Qo3d.js";import"./RadioPanel-VAvu496e.js";import"./Title-CEikqLt6.js";import"./Card-BJb3te5Y.js";import"./Text-CuHi8qQB.js";import"./Tag-DfuHuSFb.js";import"./ExpandablePanel-C8HEf7hk.js";import"./useAnimatedHeightBetween-CYrZok_G.js";import"./tokens-HKQN8Vn-.js";import"./Expander-CywJdhAG.js";import"./ChevronUpIcon-Cb2y_e_M.js";import"./ListItem-nL5BTVKl.js";import"./BaseTextInput-BfRaZv-4.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-BRt5r8Kx.js";import"./index.esm-Cmub8uin.js";import"./cow-CdXr5BwN.js";/* empty css               *//* empty css               */import"./useAnimatedHeight-CH-qb0_m.js";import"./useListNavigation-BLkRVnbV.js";import"./Chip-CPp2TyxG.js";import"./CheckIcon-UfmWcfCZ.js";import"./ArrowVerticalAnimated-DiXsI2Of.js";import"./ArrowDownIcon-D_2o2-RY.js";import"./formatDate-Dke5WO_s.js";import"./ArrowRightIcon-CCa9taZh.js";import"./TableCaption-BFWm4cA6.js";import"./tableContext-ApevwKAj.js";import"./CalendarIcon-CMxTPRQ5.js";import"./Label-8650UV_r.js";const ne={title:"Komponenter/Help/Eksempler",component:o,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},t={name:"Text Input",render:e=>r.jsx(C,{label:"Navn",tooltip:r.jsx(o,{...e})})},p={name:"Date Input",render:e=>r.jsx(I,{label:"Navn",tooltip:r.jsx(o,{...e})})},a={name:"Combobox",render:e=>r.jsx(f,{...g.args,...x.args,width:"300px",tooltip:r.jsx(o,{...e})})},s={name:"Text area",render:e=>r.jsx(v,{...j.args,tooltip:r.jsx(o,{...e})})},m={name:"Search",render:e=>r.jsx(A,{labelProps:{srOnly:!1},tooltip:r.jsx(o,{...e})})},n={name:"Select",render:e=>r.jsx(h,{name:"select",label:"Hva jobber du som?",items:[],...S.args,tooltip:r.jsx(o,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(o,{...e})})},l={name:"Input Group",render:e=>r.jsx(G,{...b.args,label:"Fødselsnummer",tooltip:r.jsx(o,{...e})})},u={name:"Field Group",render:e=>r.jsx(T,{...H.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(o,{...e})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
