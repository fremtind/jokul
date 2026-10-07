import{r as o,j as e}from"./iframe-DS5UNYwm.js";import{I as c}from"./InputPanel-BhUZ9kUJ.js";import{F as d}from"./Flex-CXH4jvpR.js";import{F as u}from"./FieldGroup-CeFOEgek.js";import{B as g}from"./Button-DYzg0rXo.js";const a=o.forwardRef(function(r,s){return e.jsx(c,{...r,ref:s,type:"checkbox"})});try{a.displayName="CheckboxPanel",a.__docgenInfo={description:"",displayName:"CheckboxPanel",props:{children:{defaultValue:null,description:"@deprecated bruk {@link description } for tilsvarende funksjonalitet.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},"data-size":{defaultValue:null,description:"",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},"data-brand":{defaultValue:null,description:"",name:"data-brand",required:!1,type:{name:"enum",value:[{value:'"dnb"'}]}},"data-theme":{defaultValue:null,description:"",name:"data-theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},"data-color":{defaultValue:null,description:"",name:"data-color",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},amount:{defaultValue:null,description:"Viser pris til høyre i panelet",name:"amount",required:!1,type:{name:"string"}},alwaysOpen:{defaultValue:null,description:"@deprecated fjernet for å gi brukeren den fulle konteksten rundt valget hele tiden.",name:"alwaysOpen",required:!1,type:{name:"boolean"}},extraLabel:{defaultValue:null,description:"@deprecated bruk {@link amount } for tilsvarende funksjonalitet.",name:"extraLabel",required:!1,type:{name:"string"}}}}}catch{}const m={title:"Komponenter/CheckboxPanel",component:a,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},l={},t={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(d,{gap:"xs",direction:"column",as:u,legend:"Velg dekninger",children:[e.jsx(a,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(a,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(a,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},i={name:"Controlled",render:n=>{const[r,s]=o.useState(!0);return e.jsxs(d,{gap:"xs",direction:"column",as:u,legend:"Velg dekninger",children:[e.jsx(a,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:r,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(a,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:r,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(g,{variant:"ghost",onClick:()=>s(!r),type:"button",children:"Check"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const k=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"],x=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPanelStory:l,ControlledCheckboxPanel:i,VelgDekningForReiseforsikring:t,__namedExportsOrder:k,default:m},Symbol.toStringTag,{value:"Module"}));export{a as C,l as a,x as b};
