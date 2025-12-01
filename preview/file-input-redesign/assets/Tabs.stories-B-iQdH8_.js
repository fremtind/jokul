import{j as e}from"./jsx-runtime-BbjHj44Y.js";/* empty css               */import{c as v}from"./clsx-B-dksMZM.js";import{R as s,r as i}from"./index-C6mWTJJr.js";import{u as C}from"./usePreviousValue-ByfnePFg.js";import"./_commonjsHelpers-BosuxZz1.js";const p=s.forwardRef((a,n)=>{const t=v("jkl-tab",a.className);return e.jsx("button",{role:"tab",type:"button",ref:n,...a,className:t})});p.displayName="Tab";p.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j=({children:a,className:n,...t})=>{const{activeIndex:d,setActiveIndex:m,tabIDs:x,tabPanelIDs:T,...N}=t,g=i.useRef(null),h=i.useRef(null),R=i.useCallback(l=>{var c,u,o;if(l.key==="ArrowLeft"){const b=l.currentTarget,r=l.currentTarget.previousSibling;r?r.focus():((u=(c=b.parentElement)==null?void 0:c.lastChild)==null?void 0:u.previousSibling).focus()}if(l.key==="ArrowRight"){const b=l.currentTarget,r=l.currentTarget.nextSibling;r&&r.nodeName==="BUTTON"?r.focus():((o=b.parentElement)==null?void 0:o.firstChild).focus()}},[]);return e.jsx("div",{role:"tablist",ref:g,...N,className:v("jkl-tablist",n),children:s.Children.map(a,(l,c)=>{const u=d===c;return s.isValidElement(l)?s.cloneElement(l,{onKeyDown:R,tabIndex:u?void 0:-1,ref:u?h:void 0,onClick:()=>m(c),"aria-selected":u,"aria-controls":T[c],id:x[c]}):null})})};j.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f=({children:a,...n})=>{const t=v("jkl-tabpanel",n.className);return e.jsx("div",{role:"tabpanel",...n,className:t,children:a})};f.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};let P=(a=21)=>crypto.getRandomValues(new Uint8Array(a)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");const q=i.createContext({density:void 0}),A=({state:a,children:n})=>e.jsx(q.Provider,{value:a,children:n});A.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const k=({onChange:a,defaultTab:n,density:t,...d})=>{const[m,x]=i.useState(n??0),T=C(m);i.useEffect(()=>{T!==void 0&&T!==m&&a&&a(m)},[a,T,m]);const[N,g]=i.useState([]),[h,R]=i.useState([]),l=i.useCallback(()=>{const o=s.Children.toArray(d.children)[0];s.isValidElement(o)&&s.Children.forEach(o.props.children,b=>{s.isValidElement(b)&&(g(r=>[...r,`jkl-tab-${P(8)}`]),R(r=>[...r,`jkl-tabpanel-${P(8)}`]))})},[d.children]),c=()=>{const o=s.Children.toArray(d.children)[0];if(s.isValidElement(o))return s.cloneElement(o,{activeIndex:m,setActiveIndex:x,tabIDs:N,tabPanelIDs:h})},u=()=>s.Children.map(d.children,(o,b)=>{if(!s.isValidElement(o)||b===0)return;const r=b-1;return r===m?s.cloneElement(o,{"aria-labelledby":N[r],id:h[r]}):null});return i.useEffect(()=>{l()},[l]),e.jsx(A,{state:{density:t},children:e.jsxs("div",{...d,className:v("jkl-tabs",d.className),"data-density":t,children:[c(),u()]})})};k.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const U={title:"Komponenter/Tabs/Tabs",component:k,subcomponents:{TabList:j,TabPanel:f,Tab:p},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}},tags:["autodocs"]},y={name:"Tabs",args:{children:e.jsx("p",{})},render:a=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsxs(k,{...a,children:[e.jsxs(j,{"aria-label":"Avtale-filter",children:[e.jsx(p,{children:"Alle avtaler"}),e.jsx(p,{children:"NICE"}),e.jsx(p,{children:"Prolife"}),e.jsx(p,{children:"Paris"})]}),e.jsx(f,{children:"Alle avtaler"}),e.jsx(f,{children:"NICE-avtaler"}),e.jsx(f,{children:"Prolife-avtaler"}),e.jsx(f,{children:"Paris-avtaler"})]})})};var I,E,w;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Tabs",
  args: {
    children: <p />
  },
  render: args => <div style={{
    maxWidth: "300px"
  }}>
            <Tabs {...args}>
                <TabList aria-label="Avtale-filter">
                    <Tab>Alle avtaler</Tab>
                    <Tab>NICE</Tab>
                    <Tab>Prolife</Tab>
                    <Tab>Paris</Tab>
                </TabList>

                <TabPanel>Alle avtaler</TabPanel>

                <TabPanel>NICE-avtaler</TabPanel>

                <TabPanel>Prolife-avtaler</TabPanel>

                <TabPanel>Paris-avtaler</TabPanel>
            </Tabs>
        </div>
}`,...(w=(E=y.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const O=["TabsStory"];export{y as TabsStory,O as __namedExportsOrder,U as default};
