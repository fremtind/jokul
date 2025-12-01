import{j as e}from"./jsx-runtime-BOJBhsC5.js";import{R as a,r as o}from"./index-Bv6P490N.js";import{c as N}from"./clsx-B-dksMZM.js";import{u as w}from"./usePreviousValue-CFxVqUaX.js";/* empty css               */import{C as R}from"./Card-DRTpCu7t.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./SlotComponent-CgJtPkTS.js";import"./mergeRefs-BP-F_O_W.js";const u=a.forwardRef((n,t)=>{const i=N("jkl-tab",n.className);return e.jsx("button",{role:"tab",type:"button",ref:t,...n,className:i})});u.displayName="Tab";u.__docgenInfo={description:`En Tab til bruk som element i TabList. Ikke funksjonell utenfor et TabList element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const k=({children:n,className:t,...i})=>{const{activeIndex:d,setActiveIndex:c,tabIDs:v,tabPanelIDs:b,...T}=i,g=o.useRef(null),h=o.useRef(null),j=o.useCallback(r=>{if(r.key==="ArrowLeft"){const l=r.currentTarget,s=r.currentTarget.previousSibling;s?s.focus():(l.parentElement?.lastChild?.previousSibling).focus()}if(r.key==="ArrowRight"){const l=r.currentTarget,s=r.currentTarget.nextSibling;s&&s.nodeName==="BUTTON"?s.focus():(l.parentElement?.firstChild).focus()}},[]);return e.jsx("div",{role:"tablist",ref:g,...T,className:N("jkl-tablist",t),children:a.Children.map(n,(r,l)=>{const s=d===l;return a.isValidElement(r)?a.cloneElement(r,{onKeyDown:j,tabIndex:s?void 0:-1,ref:s?h:void 0,onClick:()=>c(l),"aria-selected":s,"aria-controls":b[l],id:v[l]}):null})})};k.__docgenInfo={description:`Konteiner for elementer av typen Tab. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f=({children:n,...t})=>{const i=N("jkl-tabpanel",t.className);return e.jsx("div",{role:"tabpanel",...t,className:i,children:n})};f.__docgenInfo={description:`Konteiner for innhold i et tabbet brukergrensesnitt. Ikke funksjonell utenfor et Tabs element.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"TabPanel",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let C=(n=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(n|=0));for(;n--;)t+=E[i[n]&63];return t};const A=o.createContext({density:void 0}),I=({state:n,children:t})=>e.jsx(A.Provider,{value:n,children:t});I.__docgenInfo={description:"",methods:[],displayName:"TabsContextProvider",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    density?: Density;
}`,signature:{properties:[{key:"density",value:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}],required:!1}}]}},description:""}}};const P=({onChange:n,defaultTab:t,density:i,...d})=>{const[c,v]=o.useState(t??0),b=w(c);o.useEffect(()=>{b!==void 0&&b!==c&&n&&n(c)},[n,b,c]);const[T,g]=o.useState([]),[h,j]=o.useState([]),r=o.useCallback(()=>{const m=a.Children.toArray(d.children)[0];a.isValidElement(m)&&a.Children.forEach(m.props.children,y=>{a.isValidElement(y)&&(g(p=>[...p,`jkl-tab-${C(8)}`]),j(p=>[...p,`jkl-tabpanel-${C(8)}`]))})},[d.children]),l=()=>{const m=a.Children.toArray(d.children)[0];if(a.isValidElement(m))return a.cloneElement(m,{activeIndex:c,setActiveIndex:v,tabIDs:T,tabPanelIDs:h})},s=()=>a.Children.map(d.children,(m,y)=>{if(!a.isValidElement(m)||y===0)return;const p=y-1;return p===c?a.cloneElement(m,{"aria-labelledby":T[p],id:h[p]}):null});return o.useEffect(()=>{r()},[r]),e.jsx(I,{state:{density:i},children:e.jsxs("div",{...d,className:N("jkl-tabs",d.className),"data-density":i,children:[l(),s()]})})};P.__docgenInfo={description:`Konteiner for et grensesnitt hvor man kan tabbe mellom innhold.
Må inneholde en TabList etterfulgt av en eller flere TabPanel.

Docs: https://jokul.fremtind.no/komponenter/tabs`,methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"tabIndex"}],return:{name:"void"}}},description:""},defaultTab:{required:!1,tsType:{name:"number"},description:""}}};const B={title:"Komponenter/Tabs/Tabs",component:P,subcomponents:{TabList:k,TabPanel:f,Tab:u},argTypes:{defaultTab:{control:"number",table:{defaultValue:{summary:void 0}}}},decorators:n=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(n,{})}),tags:["autodocs"]},x={name:"Tabs",args:{children:e.jsx("p",{})},render:n=>e.jsxs(P,{...n,children:[e.jsxs(k,{"aria-label":"Avtale-filter",children:[e.jsx(u,{children:"NICE"}),e.jsx(u,{children:"Prolife"}),e.jsx(u,{children:"Paris"})]}),e.jsx(f,{children:e.jsx(R,{padding:"l",children:e.jsx("div",{style:{border:"1px dashed purple",padding:"1em"},children:"NICE-avtaler her"})})}),e.jsx(f,{children:e.jsx(R,{padding:"l",children:e.jsx("div",{style:{border:"1px dashed purple",padding:"1em"},children:"Prolife-avtaler her"})})}),e.jsx(f,{children:e.jsx(R,{padding:"l",children:e.jsx("div",{style:{border:"1px dashed purple",padding:"1em"},children:"Paris-avtaler her"})})})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
                <Card padding="l">
                    <div style={{
          border: "1px dashed purple",
          padding: "1em"
        }}>
                        NICE-avtaler her
                    </div>
                </Card>
            </TabPanel>

            <TabPanel>
                <Card padding="l">
                    <div style={{
          border: "1px dashed purple",
          padding: "1em"
        }}>
                        Prolife-avtaler her
                    </div>
                </Card>
            </TabPanel>

            <TabPanel>
                <Card padding="l">
                    <div style={{
          border: "1px dashed purple",
          padding: "1em"
        }}>
                        Paris-avtaler her
                    </div>
                </Card>
            </TabPanel>
        </Tabs>
}`,...x.parameters?.docs?.source}}};const H=["TabsStory"];export{x as TabsStory,H as __namedExportsOrder,B as default};
