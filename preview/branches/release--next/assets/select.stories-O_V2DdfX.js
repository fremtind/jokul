import{j as e}from"./iframe-CbqnWQCq.js";import{P as o}from"./PopupTip-O3LQsVL6.js";import{S as a}from"./Select-mrmtsFpU.js";/* empty css               */import{F as s}from"./Flex-jKr-_D2d.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./QuestionIcon-DNblnLEK.js";import"./Icon-AOYEwNZO.js";import"./TooltipTrigger-C2lboIWD.js";import"./floating-ui.react-B6ni67w-.js";import"./index-BH6IwBfE.js";import"./index-D4iE6JMJ.js";import"./TooltipContent-Dd0aMBjB.js";import"./useBrowserPreferences-Cu0a8g-1.js";import"./useId-D0IiUiXu.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useAnimatedHeight-DNmnnKP7.js";import"./tokens-CW-NfdIE.js";import"./usePreviousValue-Cy3ydINE.js";import"./useListNavigation-BtmT0mpx.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-Dxh2cGEg.js";import"./ArrowDownIcon-BcgKx3OF.js";import"./InputGroup-0yAvkuFb.js";import"./Label-p04dFkAs.js";import"./SupportLabel-BxV2K5xT.js";import"./WarningIcon-VQosgwIR.js";import"./SlotComponent-Dk9WtakJ.js";import"./mergeRefs-D4mhycXU.js";const L={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:o},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},r={name:"Select"},t={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:l=>e.jsxs(s,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...l}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},n={args:{tooltip:e.jsx(o,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
