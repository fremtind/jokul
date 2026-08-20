import{j as r}from"./iframe-BfMzzhNF.js";import{H as t}from"./Help-DS96weiY.js";import"./Help.stories-VkbCZ1GM.js";import{A as c,m as d}from"./Autosuggest.stories-aDjZa2OF.js";import g,{ComboboxStory as x}from"./Combobox.stories-CGmBjWfA.js";import S from"./FieldGroup.stories-pfXAguW5.js";import H from"./InputGroup.stories-GGJoyoxP.js";import b,{SelectStory as j}from"./select.stories-Dwl-FIA_.js";import f from"./TextArea.stories-BNbuA0xN.js";import{C as I}from"./Combobox-B8dn9f4s.js";import{D as T}from"./DateInput-BKa-oMfy.js";import{F as G}from"./FieldGroup-CUIMsSo8.js";import{I as A}from"./InputGroup-CyJjwUQl.js";import{S as h}from"./Search-D3sKZayS.js";import{S as v}from"./Select-CRSbFtdz.js";import{T as C}from"./TextArea-CRhvV2ah.js";import{T as F}from"./TextInput-D-3QvTqZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-D-bnl050.js";import"./Button-DEyzL-FJ.js";import"./usePreviousValue-BhTjqn26.js";import"./Loader-CBjE8XMU.js";import"./useDelayedRender-B7w7UEMD.js";import"./index-Chjiymov.js";import"./useId-Bq0BzCWF.js";import"./IconButton-Dcm_Pi4S.js";import"./CloseIcon-D9nCRRAJ.js";import"./SearchIcon-QvYxaicv.js";import"./PopupTip-DtYyCGLA.js";import"./QuestionIcon-DjjVGq7w.js";import"./TooltipTrigger-5wEX2LeN.js";import"./floating-ui.react-B0QhCjdC.js";import"./index-CfI99grE.js";import"./index-B1mc6f9v.js";import"./TooltipContent-1l4w8cJS.js";import"./useBrowserPreferences-M04MXndY.js";import"./getThemeAndSize-CZAj3IXt.js";/* empty css               */import"./contactChoices-BqDGeJnV.js";import"./Checkbox.stories-B5YCsgmy.js";import"./Checkbox-BAeb9_YN.js";import"./RadioButton.stories-BafyVwxG.js";import"./RadioButton-CCTdDccK.js";import"./SupportLabel-DckJDHhG.js";import"./SuccessIcon--XVU_6uy.js";import"./WarningIcon-CDNQYf6z.js";import"./BaseRadioButton-DsV_7tzP.js";import"./BaseRadioButton.stories-y3Ylh-nJ.js";import"./CheckboxPanel.stories-DzaxqCfF.js";import"./InputPanel-BPMJMJWN.js";import"./Flex-UpAfpYbj.js";import"./SlotComponent-B5j9QGec.js";import"./mergeRefs-CmuMbZVL.js";import"./RadioPanel.stories-BE6J9zCX.js";import"./RadioPanel-CjcOPt7B.js";import"./Title-CsT5av84.js";import"./Card-CR7UdcEa.js";import"./Text-CRKO0s2E.js";import"./Tag-DbpoJIF8.js";import"./ExpandablePanel-DuRncnT0.js";import"./useAnimatedHeightBetween-Cjx4YaOX.js";import"./tokens-CW-NfdIE.js";import"./Expander-IAlloHXF.js";import"./ChevronUpIcon-CH5-mV_q.js";import"./ListItem-CCHjq5ky.js";import"./BaseTextInput-DD3BcS11.js";/* empty css               *//* empty css               */import"./BaseTextInput.stories-0yEWH6Bb.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               */import"./useAnimatedHeight-DvgNeVkY.js";import"./useListNavigation-DovIoj9Y.js";import"./Chip-Dn1DVaO9.js";import"./CheckIcon-BD0DcM60.js";import"./ArrowVerticalAnimated-D2kHdBwS.js";import"./ArrowDownIcon-08mHbpK-.js";import"./formatDate-Dke5WO_s.js";import"./NativeSelect-DTKxADxT.js";import"./valuePair-Bn6SadUn.js";import"./ArrowRightIcon-B4hNVObX.js";import"./TableCaption-CEOIwzQn.js";import"./tableContext-CZP8ZB3c.js";import"./CalendarIcon-Brg9htv-.js";import"./Label-C52aC3Ya.js";import"./Popover-C4d8ueFi.js";const le={title:"Komponenter/Help/Eksempler",component:t,args:{showButtonText:!1,position:"top",buttonText:"Hjelp",children:"Jeg er en hjelpetekst"},tags:["!autodocs"]},o={name:"Text Input",render:e=>r.jsx(F,{label:"Navn",tooltip:r.jsx(t,{...e})})},p={name:"Date Input",render:e=>r.jsx(T,{label:"Navn",tooltip:r.jsx(t,{...e})})},a={name:"Combobox",render:e=>r.jsx(I,{...g.args,...x.args,width:"300px",tooltip:r.jsx(t,{...e})})},s={name:"Text area",render:e=>r.jsx(C,{...f.args,tooltip:r.jsx(t,{...e})})},m={name:"Search",render:e=>r.jsx(h,{labelProps:{srOnly:!1},tooltip:r.jsx(t,{...e})})},n={name:"Select",render:e=>r.jsx(v,{...b.args,...j.args,name:"select",label:"Hva jobber du som?",items:[],tooltip:r.jsx(t,{...e})})},i={name:"Autosuggest",render:e=>r.jsx(c,{...d.args,tooltip:r.jsx(t,{...e})})},l={name:"Input Group",render:e=>r.jsx(A,{...H.args,label:"Fødselsnummer",tooltip:r.jsx(t,{...e})})},u={name:"Field Group",render:e=>r.jsx(G,{...S.args,legend:"Hvordan kan vi kontakte deg?",tooltip:r.jsx(t,{...e})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
