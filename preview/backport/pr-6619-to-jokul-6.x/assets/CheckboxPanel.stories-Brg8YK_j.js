import{r as u,j as e}from"./iframe-BsCurwi4.js";import{I as m}from"./InputPanel-BNSEybxH.js";import{F as c}from"./Flex-BDjab_iD.js";import{F as k}from"./FieldGroup-DOA9t90_.js";import{B as p}from"./Button-CuB-R2hM.js";const n=u.forwardRef(function(s,d){return e.jsx(m,{...s,ref:d,type:"checkbox"})});try{n.displayName="CheckboxPanel",n.__docgenInfo={description:"",displayName:"CheckboxPanel",filePath:"/home/runner/work/jokul/jokul/packages/jokul/src/components/checkbox-panel/CheckboxPanel.tsx",methods:[],props:{label:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"label",required:!0,tags:{},type:{name:"string"}},"data-size":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-size",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"small" | "medium" | "large"',value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},description:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"description",required:!1,tags:{},type:{name:"ReactNode"}},"data-brand":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-brand",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"dnb" | "eika" | "sparebank1"',value:[{value:'"dnb"'},{value:'"eika"'},{value:'"sparebank1"'}]}},"data-theme":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-theme",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"light" | "dark"',value:[{value:'"light"'},{value:'"dark"'}]}},"data-color":{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"}],description:"",name:"data-color",parent:{fileName:"jokul/packages/jokul/src/utilities/types.ts",name:"JokulModes"},required:!1,tags:{},type:{name:"enum",raw:'"error" | "success" | "warning" | "info"',value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},amount:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"Viser pris til høyre i panelet",name:"amount",required:!1,tags:{},type:{name:"string"}},alwaysOpen:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"alwaysOpen",required:!1,tags:{deprecated:"fjernet for å gi brukeren den fulle konteksten rundt valget hele tiden."},type:{name:"boolean"}},extraLabel:{defaultValue:null,declarations:[{fileName:"jokul/packages/jokul/src/components/input-panel/types.ts",name:"TypeLiteral"}],description:"",name:"extraLabel",required:!1,tags:{deprecated:"bruk {@link amount } for tilsvarende funksjonalitet."},type:{name:"string"}}},tags:{}}}catch{}const g={title:"Komponenter/CheckboxPanel",component:n,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[a=>e.jsx("form",{name:"test",children:e.jsx(a,{})})]},r={},t={args:{disabled:!0}},l={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},i={name:"Velg dekning for reiseforsikring",render:a=>e.jsxs(c,{gap:"xs",direction:"column",as:k,legend:"Velg dekninger",children:[e.jsx(n,{...a,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(n,{...a,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(n,{...a,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},o={name:"Controlled",render:a=>{const[s,d]=u.useState(!0);return e.jsxs(c,{gap:"xs",direction:"column",as:k,legend:"Velg dekninger",children:[e.jsx(n,{...a,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:s,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(n,{...a,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:s,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(p,{variant:"ghost",onClick:()=>d(!s),type:"button",children:"Check"})]})}},f=["CheckboxPanelStory","Disabled","DisabledAvkrysset","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Disabled og avkrysset",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPanelStory:r,ControlledCheckboxPanel:o,Disabled:t,DisabledAvkrysset:l,VelgDekningForReiseforsikring:i,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{n as C,r as a,j as b};
