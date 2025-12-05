import{R as n,j as a,r as o}from"./iframe-Cc8xX6xK.js";/* empty css               */import{c as v}from"./clsx-B-dksMZM.js";import{u as w}from"./usePreviousValue-CWB2JE3l.js";import"./preload-helper-PPVm8Dsz.js";const b=n.forwardRef((e,t)=>{const l=v("jkl-tab",e.className);return a.jsx("button",{role:"tab",type:"button",ref:t,...e,className:l})});b.displayName="Tab";b.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const k=({children:e,className:t,...l})=>{const{activeIndex:c,setActiveIndex:d,tabIDs:x,tabPanelIDs:f,...T}=l,R=o.useRef(null),y=o.useRef(null),j=o.useCallback(r=>{if(r.key==="ArrowLeft"){const i=r.currentTarget,s=r.currentTarget.previousSibling;s?s.focus():(i.parentElement?.lastChild?.previousSibling).focus()}if(r.key==="ArrowRight"){const i=r.currentTarget,s=r.currentTarget.nextSibling;s&&s.nodeName==="BUTTON"?s.focus():(i.parentElement?.firstChild).focus()}},[]);return a.jsx("div",{role:"tablist",ref:R,...T,className:v("jkl-tablist",t),children:n.Children.map(e,(r,i)=>{const s=c===i;return n.isValidElement(r)?n.cloneElement(r,{onKeyDown:j,tabIndex:s?void 0:-1,ref:s?y:void 0,onClick:()=>d(i),"aria-selected":s,"aria-controls":f[i],id:x[i]}):null})})};k.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const p=({children:e,...t})=>{const l=v("jkl-tabpanel",t.className);return a.jsx("div",{role:"tabpanel",...t,className:l,children:e})};p.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let P=(e=21)=>{let t="",l=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=E[l[e]&63];return t};const A=o.createContext({density:void 0}),I=({state:e,children:t})=>a.jsx(A.Provider,{value:e,children:t});I.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const g=({onChange:e,defaultTab:t,density:l,...c})=>{const[d,x]=o.useState(t??0),f=w(d);o.useEffect(()=>{f!==void 0&&f!==d&&e&&e(d)},[e,f,d]);const[T,R]=o.useState([]),[y,j]=o.useState([]),r=o.useCallback(()=>{const m=n.Children.toArray(c.children)[0];n.isValidElement(m)&&n.Children.forEach(m.props.children,h=>{n.isValidElement(h)&&(R(u=>[...u,`jkl-tab-${P(8)}`]),j(u=>[...u,`jkl-tabpanel-${P(8)}`]))})},[c.children]),i=()=>{const m=n.Children.toArray(c.children)[0];if(n.isValidElement(m))return n.cloneElement(m,{activeIndex:d,setActiveIndex:x,tabIDs:T,tabPanelIDs:y})},s=()=>n.Children.map(c.children,(m,h)=>{if(!n.isValidElement(m)||h===0)return;const u=h-1;return u===d?n.cloneElement(m,{"aria-labelledby":T[u],id:y[u]}):null});return o.useEffect(()=>{r()},[r]),a.jsx(I,{state:{density:l},children:a.jsxs("div",{...c,className:v("jkl-tabs",c.className),"data-density":l,children:[i(),s()]})})};g.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const S={title:"Komponenter/Tabs/Tabs",component:g,subcomponents:{TabList:k,TabPanel:p,Tab:b},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}}},N={name:"Tabs",args:{children:a.jsx("p",{})},render:e=>a.jsx("div",{style:{maxWidth:"300px"},children:a.jsxs(g,{...e,children:[a.jsxs(k,{"aria-label":"Avtale-filter",children:[a.jsx(b,{children:"Alle avtaler"}),a.jsx(b,{children:"NICE"}),a.jsx(b,{children:"Prolife"}),a.jsx(b,{children:"Paris"})]}),a.jsx(p,{children:"Alle avtaler"}),a.jsx(p,{children:"NICE-avtaler"}),a.jsx(p,{children:"Prolife-avtaler"}),a.jsx(p,{children:"Paris-avtaler"})]})})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const V=["TabsStory"];export{N as TabsStory,V as __namedExportsOrder,S as default};
