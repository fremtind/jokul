import{j as e}from"./iframe-B9dYvTtQ.js";import{C as m}from"./Card-s2xvNgSt.js";import{E as c,a as u}from"./ExpandablePanel-ZCZ-9ckP.js";import{E as g}from"./Expander-N-EZqv_h.js";import{P as p}from"./PopupTip-IDhss7L7.js";import{S as s}from"./Select-DZUD_Er7.js";/* empty css               *//* empty css               *//* empty css               */import{F as v}from"./Flex-Cmj8nuKq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-D9wXaQ8f.js";import"./mergeRefs-_7lZvp9j.js";import"./useAnimatedHeightBetween-DQP5TgyT.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D5IZRstg.js";import"./usePreviousValue-Corn-zfT.js";import"./ChevronDownIcon-BAsycL08.js";import"./Icon-BZwC4-W-.js";import"./ChevronUpIcon-DwCtohtW.js";import"./QuestionIcon-BPVKFCEY.js";import"./TooltipTrigger-BjxuFy0l.js";import"./floating-ui.react-DmQp7t8D.js";import"./index-ClI6gOqC.js";import"./index-kAvh9uJW.js";import"./TooltipContent-DnhT4r1A.js";import"./useId-Cq40KW5t.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useListNavigation-CoXKlsvx.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CMvq-5Vy.js";import"./ArrowDownIcon-BqqU5kPG.js";import"./InputGroup-BTU0Uj_3.js";import"./Label-VvKg_kjk.js";import"./SupportLabel-CzyV5qEm.js";import"./SuccessIcon-DHnwXWmg.js";import"./WarningIcon-D293PPJT.js";import"./Popover-q-nGv30g.js";const re={title:"Komponenter/Select",component:s,subcomponents:{PopupTip:p},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},o={name:"Select"},l={args:{disabled:!0,defaultValue:telefonprodusenter[0]?.value}},i={name:"Select med mange valg",args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:r=>e.jsxs(v,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(s,{...r}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},d={args:{tooltip:e.jsx(p,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}},n={name:"I et Card",parameters:{docs:{description:{story:"Tidligere ble lista klippet fordi `Card` har `overflow: clip`. Lista rendres nå i en portal og vises uavhengig av forelderens overflow."}}},render:r=>e.jsx(m,{padding:"m",style:{width:"20rem"},children:e.jsx(s,{...r})})},t={name:"I en ExpandablePanel",parameters:{docs:{description:{story:"Tidligere ble lista klippet av panelets `overflow: hidden` når innholdet i panelet var lavt. Etter endringen rendres lista i en portal og vises som forventet."}}},render:r=>e.jsx("div",{style:{width:"30rem"},children:e.jsxs(c,{children:[e.jsx(g,{children:"Velg telefonmerke"}),e.jsx(u,{children:e.jsx(s,{...r})})]})})},a={name:"Nederst på siden (flipper opp)",parameters:{docs:{description:{story:"Floating-ui-middlewaren `flip` snur listen over knappen når det ikke er plass under. Scroll Select ned mot bunnen av viewporten for å se effekten."}}},render:r=>e.jsx("div",{style:{height:"120dvh"},children:e.jsx("div",{style:{position:"absolute",bottom:"1rem",left:"1rem"},children:e.jsx(s,{...r})})})},ne=["SelectStory","Disabled","ManyOptions","SelectMedTooltip","SelectIKort","SelectIExpandablePanel","SelectNederstPaSiden"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: telefonprodusenter[0]?.value
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Select med mange valg",
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "I et Card",
  parameters: {
    docs: {
      description: {
        story: "Tidligere ble lista klippet fordi \`Card\` har " + "\`overflow: clip\`. Lista rendres nå i en portal og " + "vises uavhengig av forelderens overflow."
      }
    }
  },
  render: args => <Card padding="m" style={{
    width: "20rem"
  }}>
            <Select {...args} />
        </Card>
}`,...n.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en `Card` med\nbegrenset høyde (issue #5976).",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "I en ExpandablePanel",
  parameters: {
    docs: {
      description: {
        story: "Tidligere ble lista klippet av panelets \`overflow: " + "hidden\` når innholdet i panelet var lavt. Etter " + "endringen rendres lista i en portal og vises som forventet."
      }
    }
  },
  render: args => <div style={{
    width: "30rem"
  }}>
            <ExpandablePanel>
                <Expander>Velg telefonmerke</Expander>
                <ExpandablePanelContent>
                    <Select {...args} />
                </ExpandablePanelContent>
            </ExpandablePanel>
        </div>
}`,...t.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en\n`ExpandablePanel` (issue #4583).",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Nederst på siden (flipper opp)",
  parameters: {
    docs: {
      description: {
        story: "Floating-ui-middlewaren \`flip\` snur listen over " + "knappen når det ikke er plass under. Scroll Select " + "ned mot bunnen av viewporten for å se effekten."
      }
    }
  },
  render: args => <div style={{
    height: "120dvh"
  }}>
            <div style={{
      position: "absolute",
      bottom: "1rem",
      left: "1rem"
    }}>
                <Select {...args} />
            </div>
        </div>
}`,...a.parameters?.docs?.source},description:{story:`Demonstrerer auto-flip: når Select er nederst i viewporten, åpner lista
seg over knappen i stedet for under, slik at hele lista alltid er synlig
(issue #3775).`,...a.parameters?.docs?.description}}};export{l as Disabled,i as ManyOptions,t as SelectIExpandablePanel,n as SelectIKort,d as SelectMedTooltip,a as SelectNederstPaSiden,o as SelectStory,ne as __namedExportsOrder,re as default};
