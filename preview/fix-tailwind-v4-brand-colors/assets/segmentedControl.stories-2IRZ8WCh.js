import{r as j,j as e}from"./iframe-BdJ4G0rk.js";import{F as v}from"./FieldGroup-X67pPn91.js";import{S as r,a as t}from"./SegmentedControlButton-DvpmKq1X.js";import{F as y}from"./Flex-D0INi6bP.js";import{L as d,C as m,a as c}from"./ListItem-B6BFwNYS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CKdpnab3.js";import"./Label-LSHeZwx2.js";import"./SupportLabel-BBIdhqhc.js";import"./SuccessIcon-C9v3Dlnh.js";import"./Icon-BGiwoyRt.js";import"./types-BlFGa32c.js";import"./WarningIcon-CeyFEK26.js";import"./RadioButton-vVTayVyL.js";import"./BaseRadioButton-yVuSJHvN.js";import"./SlotComponent-C4c8gkXl.js";import"./mergeRefs-_7lZvp9j.js";const k=["Dekkes","Dekkes ikke"];function p(n){const[u,g]=j.useState(k[0]);return e.jsxs(y,{direction:"column",gap:"m",style:{maxWidth:"60ch"},children:[e.jsx(r,{legend:"Dekning i reiseforsikringen",...n,children:k.map(s=>e.jsx(t,{name:"dekning",value:s,checked:u===s,onChange:f=>g(f.target.value),children:s},s))}),u==="Dekkes"?e.jsxs(d,{children:[e.jsx(m,{children:"Avbestilling ved akutt sykdom"}),e.jsx(m,{children:"Nødvendig behandling ved akutt sykdom på reisen"})]}):e.jsxs(d,{children:[e.jsx(c,{children:"Avbestilling fordi du ombestemmer deg"}),e.jsx(c,{children:"Utgifter som flyselskapet allerede har refundert"})]})]})}try{p.displayName="DekningsoversiktExample",p.__docgenInfo={description:"",displayName:"DekningsoversiktExample",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/segmented-control/stories/DekningsoversiktExample.tsx",methods:[],props:{legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}},disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const h=`import React, { useState } from "react";
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
`;try{DekningsoversiktExample.displayName="DekningsoversiktExample",DekningsoversiktExample.__docgenInfo={description:"",displayName:"DekningsoversiktExample",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/segmented-control/stories/DekningsoversiktExample.tsx",methods:[],props:{legend:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"legend",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},labelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"labelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<LabelProps, "children">'}},supportLabelProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"supportLabelProps",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:'Omit<SupportLabelProps, "id" | "helpLabel" | "errorLabel">'}},tooltip:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"tooltip",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"ReactNode"}},className:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"className",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},helpLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"helpLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{deprecated:"Bruk heller `description`."},type:{name:"string"}},errorLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"errorLabel",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"}],description:"",name:"description",parent:{fileName:"jokul/packages/jokul/src/components/input-group/types.ts",name:"FieldGroupProps"},required:!1,tags:{},type:{name:"string"}},"data-testautoid":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"}],description:"",name:"data-testautoid",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"DataTestAutoId"},required:!1,tags:{},type:{name:"string"}},disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const W={title:"Komponenter/SegmentedControl",component:r,subcomponents:{FieldGroup:v,SegmentedControlButton:t},args:{labelProps:{srOnly:!1,variant:"small"}}},o={name:"Segmented Control",args:{legend:"Segmented Control"},render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{value:"Vi",name:"basic",defaultChecked:!0,children:"Vi"}),e.jsx(t,{value:"Står",name:"basic",children:"Står"}),e.jsx(t,{value:"Sammen",name:"basic",children:"Sammen"})]})},l={args:{legend:"Hele kontrollen er disabled"},render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{value:"Vi",name:"disabled",defaultChecked:!0,disabled:!0,children:"Vi"}),e.jsx(t,{value:"Står",name:"disabled",disabled:!0,children:"Står"}),e.jsx(t,{value:"Sammen",name:"disabled",disabled:!0,children:"Sammen"})]})},i={name:"Enkelt valg disabled",args:{legend:"Ett av valgene er utilgjengelig"},render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{value:"Vi",name:"partial",defaultChecked:!0,children:"Vi"}),e.jsx(t,{value:"Står",name:"partial",disabled:!0,children:"Står"}),e.jsx(t,{value:"Sammen",name:"partial",children:"Sammen"})]})},a={name:"Dekningsoversikt",args:{legend:"Dekning i reiseforsikringen"},parameters:{docs:{source:{type:"code",language:"tsx",code:h.replace("../../flex/index.js","@fremtind/jokul/flex").replace("../../list/index.js","@fremtind/jokul/list").replace("../index.js","@fremtind/jokul/segmented-control")}}},render:n=>e.jsx(p,{...n})},R=["Basic","Disabled","EnkeltValgDisabled","Dekningsoversikt"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten\ni takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».",...a.parameters?.docs?.description}}};export{o as Basic,a as Dekningsoversikt,l as Disabled,i as EnkeltValgDisabled,R as __namedExportsOrder,W as default};
