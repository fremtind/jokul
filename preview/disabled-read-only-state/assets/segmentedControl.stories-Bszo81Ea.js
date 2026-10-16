import{r as v,j as e}from"./iframe-o0m3menv.js";import{F as f}from"./FieldGroup-DYcstTN0.js";import{S as a,a as n}from"./SegmentedControlButton-DMAb1F78.js";import{F as C}from"./Flex-BSig71-C.js";import{L as u,C as c,a as g}from"./ListItem-D7z4h_5g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C2y1bl-l.js";import"./Label-CHvJ6rAQ.js";import"./SupportLabel-UFV4r9Fs.js";import"./SuccessIcon-BVVr417w.js";import"./Icon-CHP4Ujl2.js";import"./WarningIcon-YEiE9qc_.js";import"./RadioButton-qILp8xBj.js";import"./BaseRadioButton-DcXhD-2Y.js";import"./SlotComponent-CIywmpIV.js";import"./mergeRefs-CQG3iBAm.js";const p=["Dekkes","Dekkes ikke"];function d(t){const[m,k]=v.useState(p[0]);return e.jsxs(C,{direction:"column",gap:"m",style:{maxWidth:"60ch"},children:[e.jsx(a,{legend:"Dekning i reiseforsikringen",...t,children:p.map(l=>e.jsx(n,{name:"dekning",value:l,checked:m===l,onChange:S=>k(S.target.value),children:l},l))}),m==="Dekkes"?e.jsxs(u,{children:[e.jsx(c,{children:"Avbestilling ved akutt sykdom"}),e.jsx(c,{children:"Nødvendig behandling ved akutt sykdom på reisen"})]}):e.jsxs(u,{children:[e.jsx(g,{children:"Avbestilling fordi du ombestemmer deg"}),e.jsx(g,{children:"Utgifter som flyselskapet allerede har refundert"})]})]})}try{d.displayName="DekningsoversiktExample",d.__docgenInfo={description:"",displayName:"DekningsoversiktExample",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,description:"",name:"supportLabelProps",required:!1,type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},helpLabel:{defaultValue:null,description:"@deprecated Bruk heller `description`.",name:"helpLabel",required:!1,type:{name:"string"}},errorLabel:{defaultValue:null,description:"",name:"errorLabel",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},"data-testautoid":{defaultValue:null,description:"",name:"data-testautoid",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const h=`import React, { useState } from "react";
import { Flex } from "../../flex/index.js";
import { CheckListItem, CrossListItem, List } from "../../list/index.js";

import {
    SegmentedControl,
    SegmentedControlButton,
    type SegmentedControlProps,
} from "../index.js";

const coverageChoices = ["Dekkes", "Dekkes ikke"];

export function DekningsoversiktExample(props: Partial<SegmentedControlProps>) {
    const [value, setValue] = useState(coverageChoices[0]);

    return (
        <Flex direction="column" gap="m" style={{ maxWidth: "60ch" }}>
            <SegmentedControl legend="Dekning i reiseforsikringen" {...props}>
                {coverageChoices.map((choice) => (
                    <SegmentedControlButton
                        key={choice}
                        name="dekning"
                        value={choice}
                        checked={value === choice}
                        onChange={(event) => setValue(event.target.value)}
                    >
                        {choice}
                    </SegmentedControlButton>
                ))}
            </SegmentedControl>
            {value === "Dekkes" ? (
                <List>
                    <CheckListItem>Avbestilling ved akutt sykdom</CheckListItem>
                    <CheckListItem>
                        Nødvendig behandling ved akutt sykdom på reisen
                    </CheckListItem>
                </List>
            ) : (
                <List>
                    <CrossListItem>
                        Avbestilling fordi du ombestemmer deg
                    </CrossListItem>
                    <CrossListItem>
                        Utgifter som flyselskapet allerede har refundert
                    </CrossListItem>
                </List>
            )}
        </Flex>
    );
}
`,R={title:"Komponenter/SegmentedControl",component:a,subcomponents:{FieldGroup:f,SegmentedControlButton:n},args:{labelProps:{srOnly:!1,variant:"small"}}},s={name:"Segmented Control",args:{legend:"Segmented Control"},render:t=>e.jsxs(a,{...t,children:[e.jsx(n,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"basic",children:"Står"}),e.jsx(n,{value:"Sammen",name:"basic",children:"Sammen"})]})},o={args:{legend:"Hele kontrollen er disabled"},render:t=>e.jsxs(a,{...t,children:[e.jsx(n,{value:"Vi",name:"disabled",defaultChecked:!0,disabled:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"disabled",disabled:!0,children:"Står"}),e.jsx(n,{value:"Sammen",name:"disabled",disabled:!0,children:"Sammen"})]})},i={name:"Enkelt valg disabled",args:{legend:"Ett av valgene er utilgjengelig"},render:t=>e.jsxs(a,{...t,children:[e.jsx(n,{value:"Vi",name:"partial",defaultChecked:!0,children:"Vi"}),e.jsx(n,{value:"Står",name:"partial",disabled:!0,children:"Står"}),e.jsx(n,{value:"Sammen",name:"partial",children:"Sammen"})]})},r={name:"Dekningsoversikt",args:{legend:"Dekning i reiseforsikringen"},parameters:{docs:{source:{type:"code",language:"tsx",code:h.replace("../../flex/index.js","@fremtind/jokul/flex").replace("../../list/index.js","@fremtind/jokul/list").replace("../index.js","@fremtind/jokul/segmented-control")}}},render:t=>e.jsx(d,{...t})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Segmented Control",
  args: {
    legend: "Segmented Control"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="basic" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="basic">
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="basic">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: "Hele kontrollen er disabled"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="disabled" defaultChecked disabled>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="disabled" disabled>
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="disabled" disabled>
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Enkelt valg disabled",
  args: {
    legend: "Ett av valgene er utilgjengelig"
  },
  render: args => <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="partial" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="partial" disabled>
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="partial">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Dekningsoversikt",
  args: {
    legend: "Dekning i reiseforsikringen"
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: dekningsoversiktSource.replace("../../flex/index.js", "@fremtind/jokul/flex").replace("../../list/index.js", "@fremtind/jokul/list").replace("../index.js", "@fremtind/jokul/segmented-control")
      }
    }
  },
  render: args => <DekningsoversiktExample {...args} />
}`,...r.parameters?.docs?.source},description:{story:"Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten\ni takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».",...r.parameters?.docs?.description}}};const H=["Basic","Disabled","EnkeltValgDisabled","Dekningsoversikt"];export{s as Basic,r as Dekningsoversikt,o as Disabled,i as EnkeltValgDisabled,H as __namedExportsOrder,R as default};
