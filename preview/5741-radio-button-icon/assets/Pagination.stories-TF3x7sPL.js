import{j as i,R as A,r as E}from"./iframe-65_53G2O.js";import{c as I}from"./clsx-B-dksMZM.js";import{I as p}from"./IconButton-C7LpxpSP.js";import{C as N}from"./ChevronLeftIcon-Do2Ua7pU.js";import{C as y}from"./ChevronRightIcon-B9JZx04d.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DB-f0CiP.js";const s=({isActive:a,number:o,onClick:t,total:n})=>i.jsx("li",{"aria-setsize":n,"aria-posinset":o,children:i.jsx("button",{className:I("jkl-pagination-button",{"jkl-pagination-button--current":a}),"aria-current":a,type:"button",onClick:t,tabIndex:a?-1:0,"aria-disabled":a,title:`side ${o}`,children:i.jsx("span",{"aria-hidden":!0,children:o})})});s.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},number:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!0,tsType:{name:"MouseEventHandler"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};const v=A.forwardRef(function({onPageChange:o,currentPage:t,numberOfPages:n,labels:e={previous:"Forrige side",next:"Neste side"},as:m,className:l,...x},b){E.useEffect(()=>{t<1&&console.error("[Pagination]: currentPage prop should be set to a value larger than 0"),t>n&&console.error("[Pagination]: currentPage prop should not be set to a value larger than numberOfPages")},[t,n]);const f=m||"nav";if(n<=7)return i.jsxs(f,{ref:b,...x,className:I("jkl-pagination",l),children:[i.jsx(p,{className:"jkl-pagination-button",title:e.previous,onClick:()=>o(t-1,t),"aria-disabled":t===1,tabIndex:t===1?-1:0,children:i.jsx(N,{})}),i.jsx("ol",{className:"jkl-pagination__pages",children:Array.from({length:n}).map((M,C)=>{const k=C+1;return i.jsx(s,{isActive:t===k,number:k,total:n,onClick:()=>o(k,t)},C)})}),i.jsx(p,{className:"jkl-pagination-button",title:e.next,onClick:()=>o(t+1,t),"aria-disabled":t===n,tabIndex:t===n?-1:0,children:i.jsx(y,{})})]});const _=t>4,R=t<n-3,d=Math.min(Math.max(t-2,2),n-5),r=Math.min(d+1,n-4),j=Math.min(r+1,n-3),u=Math.min(r+2,n-2),h=Math.min(r+3,n-1);return i.jsxs(f,{ref:b,...x,className:"jkl-pagination",children:[i.jsx(p,{className:"jkl-pagination-button",title:e.previous,onClick:()=>o(t-1,t),"aria-disabled":t===1,tabIndex:t===1?-1:0,children:i.jsx(N,{})}),i.jsxs("ol",{className:"jkl-pagination__pages",children:[i.jsx(s,{isActive:t===1,number:1,total:n,onClick:()=>o(1,t)}),_?i.jsx("span",{"aria-hidden":!0,className:"jkl-pagination-button--elipsis",children:"..."}):i.jsx(s,{isActive:t===d,number:d,total:n,onClick:()=>o(d,t)}),i.jsx(s,{isActive:t===r,number:r,total:n,onClick:()=>o(r,t)}),i.jsx(s,{isActive:t===j,number:j,total:n,onClick:()=>o(j,t)}),i.jsx(s,{isActive:t===u,number:u,total:n,onClick:()=>o(u,t)}),R?i.jsx("span",{"aria-hidden":!0,className:"jkl-pagination-button--elipsis",children:"..."}):i.jsx(s,{isActive:t===h,number:h,total:n,onClick:()=>o(h,t)}),i.jsx(s,{isActive:t===n,number:n,total:n,onClick:()=>o(n,t)})]}),i.jsx(p,{className:"jkl-pagination-button",title:e.next,onClick:()=>o(t+1,t),"aria-disabled":t===n,tabIndex:t===n?-1:0,children:i.jsx(y,{})})]})});v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Her kan du angi hva slags element komponenten skal rendres
som. Det kan enten være en string for native HTML elementer
eller en komponent (som Link fra react-router og lignende).`},ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<As>["ref"]'},description:""},labels:{defaultValue:{value:`{
    previous: "Forrige side",
    next: "Neste side",
}`,computed:!1},required:!1}}};const L={title:"Komponenter/Pagination",component:v},c={args:{currentPage:1,numberOfPages:10,onPageChange:()=>{}},decorators:[(a,o)=>{const[t,n]=E.useState(o.args.currentPage),e=o.args.numberOfPages,m=(l,x)=>{l>0&&l<=e&&n(l)};return i.jsx("div",{children:i.jsx(v,{currentPage:t,numberOfPages:e,onPageChange:m})})}]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    numberOfPages: 10,
    onPageChange: () => {}
  },
  decorators: [(Story, context) => {
    const [currentPage, setCurrentPage] = useState<number>(context.args.currentPage);
    const numberOfPages = context.args.numberOfPages;
    const onPageChange = (newPage: number, fromPage: number) => {
      if (newPage > 0 && newPage <= numberOfPages) {
        setCurrentPage(newPage);
      }
    };
    return <div>
                    <PaginationComponent currentPage={currentPage} numberOfPages={numberOfPages} onPageChange={onPageChange} />
                </div>;
  }]
}`,...c.parameters?.docs?.source}}};const F=["Pagination"];export{c as Pagination,F as __namedExportsOrder,L as default};
