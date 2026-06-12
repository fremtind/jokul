import{j as e}from"./iframe-BpZEeNb5.js";import{C as d}from"./Card-6t4ff0ed.js";import{a as m,E as c}from"./ExpandablePanel-esOd2pNi.js";import{E as u}from"./Expander-B1-UqvYe.js";import{P as p}from"./PopupTip-DI5j_bWP.js";import{S as a}from"./Select-Beym67qZ.js";/* empty css               *//* empty css               *//* empty css               */import{F as g}from"./Flex-Bx8wCHiQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DiwMqPNE.js";import"./mergeRefs-CiQ5T2Ku.js";import"./useAnimatedHeightBetween-DTmbqHSC.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-lwhxVS7Q.js";import"./usePreviousValue-DqhzpnbS.js";import"./ChevronDownIcon-Dma6N5VI.js";import"./Icon-DhmglqNl.js";import"./ChevronUpIcon-3DcuSUbx.js";import"./QuestionIcon-gQtaGS-P.js";import"./TooltipTrigger-8oBKwdc6.js";import"./floating-ui.react-goJxEAV2.js";import"./index-DC24IphW.js";import"./index-Co4F8Ilx.js";import"./TooltipContent-Cv7TpxdW.js";import"./useId-OVbAPh3N.js";import"./getThemeAndSize-CZAj3IXt.js";import"./useListNavigation-DOnrClcF.js";import"./valuePair-Bn6SadUn.js";import"./ArrowVerticalAnimated-CohMNn5r.js";import"./ArrowDownIcon-DVpFlYsF.js";import"./InputGroup-DbWe8nzN.js";import"./Label-jLKXtv_7.js";import"./SupportLabel-B1-DCGeB.js";import"./WarningIcon-DomqFSK5.js";import"./Popover-Dd9E7AFv.js";const $={title:"Komponenter/Select",component:a,subcomponents:{PopupTip:p},argTypes:{className:{table:{disable:!0}},id:{table:{disable:!0}},"data-testautoid":{table:{disable:!0}},onBlur:{table:{disable:!0}},onFocus:{table:{disable:!0}},onChange:{table:{disable:!0}},searchable:{control:"boolean"}},args:{name:"Select",label:"Hvilket merke er telefonen?",description:"Du kan kun velge ett merke",items:[{value:"Apple",label:"Apple"},{value:"Samsung",label:"Samsung"},{value:"Google",label:"Google"},{value:"OnePlus",label:"OnePlus"},{value:"Nokia",label:"Nokia"},{value:"Annet",label:"Annet"}],defaultPrompt:"Velg merke",inline:!1,invalid:!1,labelProps:{srOnly:!1,variant:"small"},maxShownOptions:12,width:"20ch",searchable:!1}},o={name:"Select"},i={args:{label:"Hva jobber du som?",items:["Frontend-utvikler","Backend-utvikler","Visuell designer","Interaksjonsdesigner","Tjenestedesigner"],inline:!0,value:"Frontend-utvikler",description:"",helpLabel:""},render:r=>e.jsxs(g,{gap:"xs",alignItems:"center",children:[e.jsx("p",{children:"Jeg jobber som"}),e.jsx(a,{...r}),e.jsx("p",{children:"hos Fremtind Forsikring."})]})},l={args:{tooltip:e.jsx(p,{content:"Er du usikker på hvilket merke du har kan du velge Annet"})}},n={name:"I et Card",parameters:{docs:{description:{story:"Tidligere ble lista klippet fordi `Card` har `overflow: clip`. Lista rendres nå i en portal og vises uavhengig av forelderens overflow."}}},render:r=>e.jsx(d,{padding:"m",style:{width:"20rem"},children:e.jsx(a,{...r})})},t={name:"I en ExpandablePanel",parameters:{docs:{description:{story:"Tidligere ble lista klippet av panelets `overflow: hidden` når innholdet i panelet var lavt. Etter endringen rendres lista i en portal og vises som forventet."}}},render:r=>e.jsx("div",{style:{width:"30rem"},children:e.jsxs(m,{children:[e.jsx(u,{children:"Velg telefonmerke"}),e.jsx(c,{children:e.jsx(a,{...r})})]})})},s={name:"Nederst på siden (flipper opp)",parameters:{docs:{description:{story:"Floating-ui-middlewaren `flip` snur listen over knappen når det ikke er plass under. Scroll Select ned mot bunnen av viewporten for å se effekten."}}},render:r=>e.jsx("div",{style:{height:"120dvh"},children:e.jsx("div",{style:{position:"absolute",bottom:"1rem",left:"1rem"},children:e.jsx(a,{...r})})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Select"
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: <PopupTip content={"Er du usikker på hvilket merke du har kan du velge Annet"} />
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Demonstrerer at nedtrekkslisten ikke lenger klippes av en\n`ExpandablePanel` (issue #4583).",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Demonstrerer auto-flip: når Select er nederst i viewporten, åpner lista
seg over knappen i stedet for under, slik at hele lista alltid er synlig
(issue #3775).`,...s.parameters?.docs?.description}}};const ee=["SelectStory","SelectInline","SelectMedTooltip","SelectIKort","SelectIExpandablePanel","SelectNederstPaSiden"];export{t as SelectIExpandablePanel,n as SelectIKort,i as SelectInline,l as SelectMedTooltip,s as SelectNederstPaSiden,o as SelectStory,ee as __namedExportsOrder,$ as default};
