import{R as e,r as o}from"./index-siqcju79.js";/* empty css               */import{c as v}from"./clsx-B-dksMZM.js";import{u as w}from"./usePreviousValue-f0kyfTHz.js";import"./_commonjsHelpers-DaWZu8wl.js";const u=e.forwardRef((t,a)=>{const s=v("jkl-tab",t.className);return e.createElement("button",{role:"tab",type:"button",ref:a,...t,className:s})});u.displayName="Tab";u.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const g=({children:t,className:a,...s})=>{const{activeIndex:i,setActiveIndex:c,tabIDs:E,tabPanelIDs:p,...f}=s,h=o.useRef(null),T=o.useRef(null),R=o.useCallback(n=>{if(n.key==="ArrowLeft"){const l=n.currentTarget,r=n.currentTarget.previousSibling;r?r.focus():(l.parentElement?.lastChild?.previousSibling).focus()}if(n.key==="ArrowRight"){const l=n.currentTarget,r=n.currentTarget.nextSibling;r&&r.nodeName==="BUTTON"?r.focus():(l.parentElement?.firstChild).focus()}},[]);return e.createElement("div",{role:"tablist",ref:h,...f,className:v("jkl-tablist",a)},e.Children.map(t,(n,l)=>{const r=i===l;return e.isValidElement(n)?e.cloneElement(n,{onKeyDown:R,tabIndex:r?void 0:-1,ref:r?T:void 0,onClick:()=>c(l),"aria-selected":r,"aria-controls":p[l],id:E[l]}):null}))};g.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const b=({children:t,...a})=>{const s=v("jkl-tabpanel",a.className);return e.createElement("div",{role:"tabpanel",...a,className:s},t)};b.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let P=(t=21)=>{let a="",s=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)a+=A[s[t]&63];return a};const x=o.createContext({density:void 0}),I=({state:t,children:a})=>e.createElement(x.Provider,{value:t},a);I.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const k=({onChange:t,defaultTab:a,density:s,...i})=>{const[c,E]=o.useState(a??0),p=w(c);o.useEffect(()=>{p!==void 0&&p!==c&&t&&t(c)},[t,p,c]);const[f,h]=o.useState([]),[T,R]=o.useState([]),n=o.useCallback(()=>{const d=e.Children.toArray(i.children)[0];e.isValidElement(d)&&e.Children.forEach(d.props.children,y=>{e.isValidElement(y)&&(h(m=>[...m,`jkl-tab-${P(8)}`]),R(m=>[...m,`jkl-tabpanel-${P(8)}`]))})},[i.children]),l=()=>{const d=e.Children.toArray(i.children)[0];if(e.isValidElement(d))return e.cloneElement(d,{activeIndex:c,setActiveIndex:E,tabIDs:f,tabPanelIDs:T})},r=()=>e.Children.map(i.children,(d,y)=>{if(!e.isValidElement(d)||y===0)return;const m=y-1;return m===c?e.cloneElement(d,{"aria-labelledby":f[m],id:T[m]}):null});return o.useEffect(()=>{n()},[n]),e.createElement(I,{state:{density:s}},e.createElement("div",{...i,className:v("jkl-tabs",i.className),"data-density":s},l(),r()))};k.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const L={title:"Komponenter/Tabs/Tabs",component:k,subcomponents:{TabList:g,TabPanel:b,Tab:u},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}},tags:["autodocs"]},N={name:"Tabs",args:{children:e.createElement("p",null)},render:t=>e.createElement("div",{style:{maxWidth:"300px"}},e.createElement(k,{...t},e.createElement(g,{"aria-label":"Avtale-filter"},e.createElement(u,null,"Alle avtaler"),e.createElement(u,null,"NICE"),e.createElement(u,null,"Prolife"),e.createElement(u,null,"Paris")),e.createElement(b,null,"Alle avtaler"),e.createElement(b,null,"NICE-avtaler"),e.createElement(b,null,"Prolife-avtaler"),e.createElement(b,null,"Paris-avtaler")))};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const S=["TabsStory"];export{N as TabsStory,S as __namedExportsOrder,L as default};
