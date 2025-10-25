import{j as a}from"./jsx-runtime-DqZpzl9T.js";import{R as t,r as i}from"./index-siqcju79.js";/* empty css               */import{c as v}from"./clsx-B-dksMZM.js";import{u as w}from"./usePreviousValue-f0kyfTHz.js";import"./_commonjsHelpers-DaWZu8wl.js";const b=t.forwardRef((e,n)=>{const l=v("jkl-tab",e.className);return a.jsx("button",{role:"tab",type:"button",ref:n,...e,className:l})});b.displayName="Tab";b.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const g=({children:e,className:n,...l})=>{const{activeIndex:c,setActiveIndex:d,tabIDs:x,tabPanelIDs:f,...T}=l,R=i.useRef(null),y=i.useRef(null),j=i.useCallback(r=>{if(r.key==="ArrowLeft"){const o=r.currentTarget,s=r.currentTarget.previousSibling;s?s.focus():(o.parentElement?.lastChild?.previousSibling).focus()}if(r.key==="ArrowRight"){const o=r.currentTarget,s=r.currentTarget.nextSibling;s&&s.nodeName==="BUTTON"?s.focus():(o.parentElement?.firstChild).focus()}},[]);return a.jsx("div",{role:"tablist",ref:R,...T,className:v("jkl-tablist",n),children:t.Children.map(e,(r,o)=>{const s=c===o;return t.isValidElement(r)?t.cloneElement(r,{onKeyDown:j,tabIndex:s?void 0:-1,ref:s?y:void 0,onClick:()=>d(o),"aria-selected":s,"aria-controls":f[o],id:x[o]}):null})})};g.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const p=({children:e,...n})=>{const l=v("jkl-tabpanel",n.className);return a.jsx("div",{role:"tabpanel",...n,className:l,children:e})};p.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let P=(e=21)=>{let n="",l=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)n+=E[l[e]&63];return n};const A=i.createContext({density:void 0}),I=({state:e,children:n})=>a.jsx(A.Provider,{value:e,children:n});I.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const k=({onChange:e,defaultTab:n,density:l,...c})=>{const[d,x]=i.useState(n??0),f=w(d);i.useEffect(()=>{f!==void 0&&f!==d&&e&&e(d)},[e,f,d]);const[T,R]=i.useState([]),[y,j]=i.useState([]),r=i.useCallback(()=>{const m=t.Children.toArray(c.children)[0];t.isValidElement(m)&&t.Children.forEach(m.props.children,h=>{t.isValidElement(h)&&(R(u=>[...u,`jkl-tab-${P(8)}`]),j(u=>[...u,`jkl-tabpanel-${P(8)}`]))})},[c.children]),o=()=>{const m=t.Children.toArray(c.children)[0];if(t.isValidElement(m))return t.cloneElement(m,{activeIndex:d,setActiveIndex:x,tabIDs:T,tabPanelIDs:y})},s=()=>t.Children.map(c.children,(m,h)=>{if(!t.isValidElement(m)||h===0)return;const u=h-1;return u===d?t.cloneElement(m,{"aria-labelledby":T[u],id:y[u]}):null});return i.useEffect(()=>{r()},[r]),a.jsx(I,{state:{density:l},children:a.jsxs("div",{...c,className:v("jkl-tabs",c.className),"data-density":l,children:[o(),s()]})})};k.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const V={title:"Komponenter/Tabs/Tabs",component:k,subcomponents:{TabList:g,TabPanel:p,Tab:b},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}},tags:["autodocs"]},N={name:"Tabs",args:{children:a.jsx("p",{})},render:e=>a.jsx("div",{style:{maxWidth:"300px"},children:a.jsxs(k,{...e,children:[a.jsxs(g,{"aria-label":"Avtale-filter",children:[a.jsx(b,{children:"Alle avtaler"}),a.jsx(b,{children:"NICE"}),a.jsx(b,{children:"Prolife"}),a.jsx(b,{children:"Paris"})]}),a.jsx(p,{children:"Alle avtaler"}),a.jsx(p,{children:"NICE-avtaler"}),a.jsx(p,{children:"Prolife-avtaler"}),a.jsx(p,{children:"Paris-avtaler"})]})})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const K=["TabsStory"];export{N as TabsStory,K as __namedExportsOrder,V as default};
