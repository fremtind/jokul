import{j as a}from"./jsx-runtime-D9p_MChh.js";import{R as n,r as i}from"./index-CRL2yuNo.js";/* empty css               */import{c as v}from"./clsx-B-dksMZM.js";import{u as C}from"./usePreviousValue-B4HAJZS8.js";import"./_commonjsHelpers-gnU0ypJ3.js";const p=n.forwardRef((e,r)=>{const o=v("jkl-tab",e.className);return a.jsx("button",{role:"tab",type:"button",ref:r,...e,className:o})});p.displayName="Tab";p.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const g=({children:e,className:r,...o})=>{const{activeIndex:d,setActiveIndex:m,tabIDs:x,tabPanelIDs:T,...y}=o,R=i.useRef(null),h=i.useRef(null),j=i.useCallback(s=>{var c,u,l;if(s.key==="ArrowLeft"){const b=s.currentTarget,t=s.currentTarget.previousSibling;t?t.focus():((u=(c=b.parentElement)==null?void 0:c.lastChild)==null?void 0:u.previousSibling).focus()}if(s.key==="ArrowRight"){const b=s.currentTarget,t=s.currentTarget.nextSibling;t&&t.nodeName==="BUTTON"?t.focus():((l=b.parentElement)==null?void 0:l.firstChild).focus()}},[]);return a.jsx("div",{role:"tablist",ref:R,...y,className:v("jkl-tablist",r),children:n.Children.map(e,(s,c)=>{const u=d===c;return n.isValidElement(s)?n.cloneElement(s,{onKeyDown:j,tabIndex:u?void 0:-1,ref:u?h:void 0,onClick:()=>m(c),"aria-selected":u,"aria-controls":T[c],id:x[c]}):null})})};g.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f=({children:e,...r})=>{const o=v("jkl-tabpanel",r.className);return a.jsx("div",{role:"tabpanel",...r,className:o,children:e})};f.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const q="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let P=(e=21)=>{let r="",o=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)r+=q[o[e]&63];return r};const D=i.createContext({density:void 0}),A=({state:e,children:r})=>a.jsx(D.Provider,{value:e,children:r});A.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const k=({onChange:e,defaultTab:r,density:o,...d})=>{const[m,x]=i.useState(r??0),T=C(m);i.useEffect(()=>{T!==void 0&&T!==m&&e&&e(m)},[e,T,m]);const[y,R]=i.useState([]),[h,j]=i.useState([]),s=i.useCallback(()=>{const l=n.Children.toArray(d.children)[0];n.isValidElement(l)&&n.Children.forEach(l.props.children,b=>{n.isValidElement(b)&&(R(t=>[...t,`jkl-tab-${P(8)}`]),j(t=>[...t,`jkl-tabpanel-${P(8)}`]))})},[d.children]),c=()=>{const l=n.Children.toArray(d.children)[0];if(n.isValidElement(l))return n.cloneElement(l,{activeIndex:m,setActiveIndex:x,tabIDs:y,tabPanelIDs:h})},u=()=>n.Children.map(d.children,(l,b)=>{if(!n.isValidElement(l)||b===0)return;const t=b-1;return t===m?n.cloneElement(l,{"aria-labelledby":y[t],id:h[t]}):null});return i.useEffect(()=>{s()},[s]),a.jsx(A,{state:{density:o},children:a.jsxs("div",{...d,className:v("jkl-tabs",d.className),"data-density":o,children:[c(),u()]})})};k.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const U={title:"Komponenter/Tabs/Tabs",component:k,subcomponents:{TabList:g,TabPanel:f,Tab:p},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}},tags:["autodocs"]},N={name:"Tabs",args:{children:a.jsx("p",{})},render:e=>a.jsx("div",{style:{maxWidth:"300px"},children:a.jsxs(k,{...e,children:[a.jsxs(g,{"aria-label":"Avtale-filter",children:[a.jsx(p,{children:"Alle avtaler"}),a.jsx(p,{children:"NICE"}),a.jsx(p,{children:"Prolife"}),a.jsx(p,{children:"Paris"})]}),a.jsx(f,{children:"Alle avtaler"}),a.jsx(f,{children:"NICE-avtaler"}),a.jsx(f,{children:"Prolife-avtaler"}),a.jsx(f,{children:"Paris-avtaler"})]})})};var I,w,E;N.parameters={...N.parameters,docs:{...(I=N.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(w=N.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const W=["TabsStory"];export{N as TabsStory,W as __namedExportsOrder,U as default};
