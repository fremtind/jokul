import{j as a}from"./jsx-runtime-BOJBhsC5.js";import{R as n,r as l}from"./index-Bv6P490N.js";import{c as g}from"./clsx-B-dksMZM.js";import{u as w}from"./usePreviousValue-CFxVqUaX.js";/* empty css               */import{C as R}from"./Card-DRTpCu7t.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";const b=n.forwardRef((e,t)=>{const i=g("jkl-tab",e.className);return a.jsx("button",{role:"tab",type:"button",ref:t,...e,className:i})});b.displayName="Tab";b.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const k=({children:e,className:t,...i})=>{const{activeIndex:d,setActiveIndex:c,tabIDs:x,tabPanelIDs:p,...T}=i,v=l.useRef(null),y=l.useRef(null),j=l.useCallback(r=>{if(r.key==="ArrowLeft"){const o=r.currentTarget,s=r.currentTarget.previousSibling;s?s.focus():(o.parentElement?.lastChild?.previousSibling).focus()}if(r.key==="ArrowRight"){const o=r.currentTarget,s=r.currentTarget.nextSibling;s&&s.nodeName==="BUTTON"?s.focus():(o.parentElement?.firstChild).focus()}},[]);return a.jsx("div",{role:"tablist",ref:v,...T,className:g("jkl-tablist",t),children:n.Children.map(e,(r,o)=>{const s=d===o;return n.isValidElement(r)?n.cloneElement(r,{onKeyDown:j,tabIndex:s?void 0:-1,ref:s?y:void 0,onClick:()=>c(o),"aria-selected":s,"aria-controls":p[o],id:x[o]}):null})})};k.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f=({children:e,...t})=>{const i=g("jkl-tabpanel",t.className);return a.jsx("div",{role:"tabpanel",...t,className:i,children:e})};f.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let C=(e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=E[i[e]&63];return t};const A=l.createContext({density:void 0}),I=({state:e,children:t})=>a.jsx(A.Provider,{value:e,children:t});I.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const P=({onChange:e,defaultTab:t,density:i,...d})=>{const[c,x]=l.useState(t??0),p=w(c);l.useEffect(()=>{p!==void 0&&p!==c&&e&&e(c)},[e,p,c]);const[T,v]=l.useState([]),[y,j]=l.useState([]),r=l.useCallback(()=>{const m=n.Children.toArray(d.children)[0];n.isValidElement(m)&&n.Children.forEach(m.props.children,h=>{n.isValidElement(h)&&(v(u=>[...u,`jkl-tab-${C(8)}`]),j(u=>[...u,`jkl-tabpanel-${C(8)}`]))})},[d.children]),o=()=>{const m=n.Children.toArray(d.children)[0];if(n.isValidElement(m))return n.cloneElement(m,{activeIndex:c,setActiveIndex:x,tabIDs:T,tabPanelIDs:y})},s=()=>n.Children.map(d.children,(m,h)=>{if(!n.isValidElement(m)||h===0)return;const u=h-1;return u===c?n.cloneElement(m,{"aria-labelledby":T[u],id:y[u]}):null});return l.useEffect(()=>{r()},[r]),a.jsx(I,{state:{density:i},children:a.jsxs("div",{...d,className:g("jkl-tabs",d.className),"data-density":i,children:[o(),s()]})})};P.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const B={title:"Komponenter/Tabs/Tabs",component:P,subcomponents:{TabList:k,TabPanel:f,Tab:b},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}},decorators:e=>a.jsx("div",{style:{maxWidth:"300px"},children:a.jsx(e,{})}),tags:["autodocs"]},N={name:"Tabs",args:{children:a.jsx("p",{})},render:e=>a.jsxs(P,{...e,children:[a.jsxs(k,{"aria-label":"Avtale-filter",children:[a.jsx(b,{children:"NICE"}),a.jsx(b,{children:"Prolife"}),a.jsx(b,{children:"Paris"})]}),a.jsx(f,{children:a.jsx(R,{padding:"l",children:"NICE-avtaler"})}),a.jsx(f,{children:a.jsx(R,{padding:"l",children:"Prolife-avtaler"})}),a.jsx(f,{children:a.jsx(R,{padding:"l",children:"Paris-avtaler"})})]})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Tabs",
  args: {
    children: <p />
  },
  render: args => <Tabs {...args}>
            <TabList aria-label="Avtale-filter">
                <Tab>NICE</Tab>
                <Tab>Prolife</Tab>
                <Tab>Paris</Tab>
            </TabList>

            <TabPanel>
                <Card padding="l">NICE-avtaler</Card>
            </TabPanel>

            <TabPanel>
                <Card padding="l">Prolife-avtaler</Card>
            </TabPanel>

            <TabPanel>
                <Card padding="l">Paris-avtaler</Card>
            </TabPanel>
        </Tabs>
}`,...N.parameters?.docs?.source}}};const H=["TabsStory"];export{N as TabsStory,H as __namedExportsOrder,B as default};
