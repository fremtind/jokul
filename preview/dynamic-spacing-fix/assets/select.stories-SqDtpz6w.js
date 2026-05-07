import{j as e}from"./iframe-BRpS3s-k.js";import{P as o}from"./PopupTip-BiQr1mwN.js";import{S as a}from"./Select-BDbCzYbA.js";/* empty css               */import{F as s}from"./Flex-CaVXIqi3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-iMg0zkOa.js";import"./Icon-DOB_92r_.js";import"./TooltipTrigger-DDb2sKY1.js";import"./floating-ui.react-_MnxkG2X.js";import"./index-ovyqRn2z.js";import"./index-BYUfk8kU.js";import"./TooltipContent-fcHq_Wbx.js";import"./useBrowserPreferences-Ce1dP6O6.js";import"./useId-qKbigmD7.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CcOTAEg2.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-mkTKdss3.js";import"./useListNavigation-Dy-ibQls.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-D_HZL75b.js";import"./ArrowDownIcon-Dg4L_8j2.js";import"./InputGroup-D_SHvIHp.js";import"./Label-NaxYQnFe.js";import"./SupportLabel-LcuDXQMV.js";import"./WarningIcon-CuniiuPA.js";import"./SlotComponent-CGbOK7br.js";import"./mergeRefs-myM-JpbJ.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hva jobber du som?",
    items: ["Frontend-utvikler", "Backend-utvikler", "Visuell designer", "Interaksjonsdesigner", "Tjenestedesigner"],
    inline: true,
    value: "Frontend-utvikler",
    description: "",
    helpLabel: ""
  },
  render: args => {
    return <Flex gap="xs" alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...n.parameters?.docs?.source}}};const M=["SelectStory","SelectInline","SelectMedTooltip"];export{t as SelectInline,n as SelectMedTooltip,r as SelectStory,M as __namedExportsOrder,L as default};
