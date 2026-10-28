import{r as u,j as e}from"./iframe-BtDSgjSo.js";import{I as g}from"./InputPanel-6KGbnAT4.js";import{F as k}from"./Flex-LppjuD0Y.js";import{F as c}from"./FieldGroup-C6Qsr8DC.js";import{B as m}from"./Button-C2-vtRAI.js";const r=u.forwardRef(function(a,o){return e.jsx(g,{...a,ref:o,type:"checkbox"})});try{r.displayName="CheckboxPanel",r.__docgenInfo={description:"",displayName:"CheckboxPanel",props:{disabled:{defaultValue:null,description:`Deaktiverer kontrollen.

Bruk den bare i interne verktøy, aldri i kundeflyter. En deaktivert kontroll
forklarer ikke hvorfor den er låst eller hva som må til for å låse den opp,
og den dempede kontrasten gjør den vanskelig å lese. Skal et valg ikke være
tilgjengelig for kunden, la det heller være ute av skjemaet, eller forklar
kravet med \`description\` eller \`errorLabel\`.`,name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"@deprecated bruk {@link description } for tilsvarende funksjonalitet.",name:"children",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},"data-brand":{defaultValue:null,description:"",name:"data-brand",required:!1,type:{name:"enum",value:[{value:'"dnb"'}]}},"data-size":{defaultValue:null,description:"",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},"data-theme":{defaultValue:null,description:"",name:"data-theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},amount:{defaultValue:null,description:"Viser pris til høyre i panelet",name:"amount",required:!1,type:{name:"string"}},alwaysOpen:{defaultValue:null,description:"@deprecated fjernet for å gi brukeren den fulle konteksten rundt valget hele tiden.",name:"alwaysOpen",required:!1,type:{name:"boolean"}},extraLabel:{defaultValue:null,description:"@deprecated bruk {@link amount } for tilsvarende funksjonalitet.",name:"extraLabel",required:!1,type:{name:"string"}}}}}catch{}const p={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},l={},t={args:{disabled:!0}},s={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},i={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(k,{gap:"xs",direction:"column",as:c,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},d={name:"Controlled",render:n=>{const[a,o]=u.useState(!0);return e.jsxs(k,{gap:"xs",direction:"column",as:c,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:a,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:a,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(m,{variant:"ghost",onClick:()=>o(!a),type:"button",children:"Check"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Disabled og avkrysset",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const v=["CheckboxPanelStory","Disabled","DisabledAvkrysset","VelgDekningForReiseforsikring","ControlledCheckboxPanel"],C=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPanelStory:l,ControlledCheckboxPanel:d,Disabled:t,DisabledAvkrysset:s,VelgDekningForReiseforsikring:i,__namedExportsOrder:v,default:p},Symbol.toStringTag,{value:"Module"}));export{r as C,l as a,C as b};
