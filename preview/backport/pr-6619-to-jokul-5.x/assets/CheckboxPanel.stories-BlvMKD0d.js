import{r as g,j as e}from"./iframe-B9dYvTtQ.js";import{I as u}from"./InputPanel-CY8Fn10D.js";import{F as c}from"./Flex-Cmj8nuKq.js";import{F as k}from"./FieldGroup-B1Lpm3nX.js";import{B as m}from"./Button-BydWb-u6.js";const r=g.forwardRef(function(s,d){return e.jsx(u,{...s,ref:d,type:"checkbox"})});r.__docgenInfo={description:"",methods:[],displayName:"CheckboxPanel"};const p={title:"Komponenter/CheckboxPanel",component:r,args:{label:"Livsforsikring",description:"Gir dine etterlatte en engangsutbetaling hvis du dør. Pengene kan de for eksempel bruke til å nedbetale lån og tilpasse seg en ny livssituasjon.",amount:"xxx kr/mnd",value:"Livsforsikring",name:"Dekning",alwaysOpen:!0,"aria-invalid":!1},decorators:[n=>e.jsx("form",{name:"test",children:e.jsx(n,{})})]},a={},t={args:{disabled:!0}},i={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},o={name:"Velg dekning for reiseforsikring",render:n=>e.jsxs(c,{gap:"xs",direction:"column",as:k,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",value:"Reisegods"}),e.jsx(r,{...n,name:"dekning",label:"Avbestilling",value:"Avbestilling",description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",value:"Ulykke",description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`})]})},l={name:"Controlled",render:n=>{const[s,d]=g.useState(!0);return e.jsxs(c,{gap:"xs",direction:"column",as:k,legend:"Velg dekninger",children:[e.jsx(r,{...n,name:"dekning",label:"Reisegods",amount:"35 kr/mnd",value:"Reisegods",checked:s,description:`Gir erstatning for reiseutgifter hvis du må avbestille
                    reisen på grunn av akutt sykdom eller andre uforutsette
                    hendelser.`}),e.jsx(r,{...n,name:"dekning",label:"Ulykkesdekning",amount:"40 kr/mnd",value:"Ulykke",checked:s,description:`Gir en engangsutbetaling ved varig medisinsk invaliditet
                    eller død som følge av en ulykke på reisen.`}),e.jsx(m,{variant:"ghost",onClick:()=>d(!s),type:"button",children:"Check"})]})}},b=["CheckboxPanelStory","Disabled","DisabledAvkrysset","VelgDekningForReiseforsikring","ControlledCheckboxPanel"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Disabled og avkrysset",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const y=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPanelStory:a,ControlledCheckboxPanel:l,Disabled:t,DisabledAvkrysset:i,VelgDekningForReiseforsikring:o,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{r as C,a,y as b};
