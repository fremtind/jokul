import{r as o,j as e}from"./iframe-CG_7dJ_z.js";import{I as c}from"./InputPanel-DQBMGCNJ.js";import{F as d}from"./Flex-ngnD78wi.js";import{F as u}from"./FieldGroup-CRXZ_nuq.js";import{B as g}from"./Button-Drblekix.js";const r=o.forwardRef(function(a,s){return e.jsx(c,{...a,ref:s,type:"checkbox"})});try{r.displayName="CheckboxPanel",r.__docgenInfo={description:"",displayName:"CheckboxPanel",props:{children:{defaultValue:null,description:"@deprecated bruk {@link description } for tilsvarende funksjonalitet.",name:"children",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},"data-brand":{defaultValue:null,description:"",name:"data-brand",required:!1,type:{name:"undefined"}},"data-size":{defaultValue:null,description:"",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},"data-theme":{defaultValue:null,description:"",name:"data-theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},amount:{defaultValue:null,description:"Viser pris til høyre i panelet",name:"amount",required:!1,type:{name:"string"}},alwaysOpen:{defaultValue:null,description:"@deprecated fjernet for å gi brukeren den fulle konteksten rundt valget hele tiden.",name:"alwaysOpen",required:!1,type:{name:"boolean"}},extraLabel:{defaultValue:null,description:"@deprecated bruk {@link amount } for tilsvarende funksjonalitet.",name:"extraLabel",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},t={},l={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(d,{gap:"xs",direction:"column",as:u,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},i={name:"Controlled",render:n=>{const[a,s]=o.useState(!0);return e.jsxs(d,{gap:"xs",direction:"column",as:u,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:a,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:a,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(g,{variant:"ghost",onClick:()=>s(!a),type:"button",children:"Check"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const m=["CheckboxPanelStory","VelgDekningForReiseforsikring","ControlledCheckboxPanel"],x=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPanelStory:t,ControlledCheckboxPanel:i,VelgDekningForReiseforsikring:l,__namedExportsOrder:m,default:k},Symbol.toStringTag,{value:"Module"}));export{r as C,t as a,x as b};
