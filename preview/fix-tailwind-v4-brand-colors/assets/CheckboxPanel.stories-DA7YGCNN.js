import{r as u,j as e}from"./iframe-CX8oQmgN.js";import{I as m}from"./InputPanel-EU25622B.js";import{F as k}from"./Flex-sUWC_bHk.js";import{F as c}from"./FieldGroup-ewGWo6j6.js";import{B as p}from"./Button-B-jqDQ-W.js";const n=u.forwardRef(function(r,d){return e.jsx(m,{...r,ref:d,type:"checkbox"})});try{n.displayName="CheckboxPanel",n.__docgenInfo={description:"",displayName:"CheckboxPanel",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/checkbox-panel/CheckboxPanel.tsx",methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"}],description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"WithDisabled"},required:!1,tags:{},type:{name:"boolean"}},trackingProps:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"trackingProps",required:!1,tags:{},type:{name:"Tracking"}},"data-brand":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-brand",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"dnb" | "eika"',value:[{value:'"dnb"'},{value:'"eika"'}]}},"data-size":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-size",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "medium" | "large"',value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},"data-theme":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-theme",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"light" | "dark"',value:[{value:'"light"'},{value:'"dark"'}]}},"data-color":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-color",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"error" | "success" | "warning" | "info"',value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"label",required:!0,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"description",required:!1,tags:{},type:{name:"ReactNode"}},amount:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"Viser pris til høyre i panelet",name:"amount",required:!1,tags:{},type:{name:"string"}},alwaysOpen:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"alwaysOpen",required:!1,tags:{deprecated:"fjernet for å gi brukeren den fulle konteksten rundt valget hele tiden."},type:{name:"boolean"}},extraLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"extraLabel",required:!1,tags:{deprecated:"bruk {@link amount } for tilsvarende funksjonalitet."},type:{name:"string"}}},tags:{}}}catch{}const g={title:"Komponenter/CheckboxPanel",component:n,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[a=>e.jsx("form",{name:"test",children:e.jsx(a,{})})]},s={},l={args:{disabled:!0}},t={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},i={name:"Velg dekning for reiseforsikring",render:a=>e.jsxs(k,{gap:"xs",direction:"column",as:c,legend:"Velg dekninger",children:[e.jsx(n,{...a,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(n,{...a,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(n,{...a,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},o={name:"Controlled",render:a=>{const[r,d]=u.useState(!0);return e.jsxs(k,{gap:"xs",direction:"column",as:c,legend:"Velg dekninger",children:[e.jsx(n,{...a,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:r,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(n,{...a,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:r,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(p,{variant:"ghost",onClick:()=>d(!r),type:"button",children:"Check"})]})}},f=["CheckboxPanelStory","Disabled","DisabledAvkrysset","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Disabled og avkrysset",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Velg dekning for reiseforsikring",
  render: args => {
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger">
                <CheckboxPanelComponent {...args} name="dekning" label="Reisegods" value="Reisegods" />
                <CheckboxPanelComponent {...args} name="dekning" label="Avbestilling" value="Avbestilling" description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser." />
                <CheckboxPanelComponent {...args} name="dekning" label="Ulykkesdekning" value="Ulykke" description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen." />
            </Flex>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Controlled",
  render: args => {
    const [checked, setChecked] = useState(true);
    return <Flex gap="xs" direction="column" as={FieldGroup} legend="Velg dekninger">
                <CheckboxPanelComponent {...args} name="dekning" label="Reisegods" amount="35 kr/mnd" value="Reisegods" checked={checked} description="Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser." />
                <CheckboxPanelComponent {...args} name="dekning" label="Ulykkesdekning" amount="40 kr/mnd" value="Ulykke" checked={checked} description="Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen." />
                <Button variant="ghost" onClick={() => setChecked(!checked)} type="button">
                    Check
                </Button>
            </Flex>;
  }
}`,...o.parameters?.docs?.source}}};const j=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPanelStory:s,ControlledCheckboxPanel:o,Disabled:l,DisabledAvkrysset:t,VelgDekningForReiseforsikring:i,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{n as C,s as a,j as b};
