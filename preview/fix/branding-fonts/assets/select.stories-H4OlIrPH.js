import{j as e}from"./iframe-C9auSC1D.js";import{P as o}from"./PopupTip-CwDKM8k3.js";import{S as a}from"./Select-B0fCpTCi.js";/* empty css               */import{F as s}from"./Flex-BLOmNiep.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-Bj75Q_DO.js";import"./Icon-DKGrAUD8.js";import"./TooltipTrigger-J1b22wyU.js";import"./floating-ui.react-BssvAr5s.js";import"./index-Bk1SY1-R.js";import"./index-CFql59D1.js";import"./TooltipContent-tedaCLnW.js";import"./useBrowserPreferences-C7-Ct46I.js";import"./useId-S6HvOhy3.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-CMAzoTXt.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-B0opCcuR.js";import"./useListNavigation-rRiZr0e5.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-C_wGQg47.js";import"./ArrowDownIcon-etRKAKCy.js";import"./InputGroup-C6iF_JLN.js";import"./Label-BDBjBnNg.js";import"./SupportLabel-DU_GX9kp.js";import"./WarningIcon-CbY24pID.js";import"./SlotComponent-CShTz1QX.js";import"./mergeRefs-D3JOCwp2.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
