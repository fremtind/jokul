import{j as n,r as f}from"./iframe-BtPvKFLs.js";import{c as E}from"./clsx-B-dksMZM.js";import{I as c}from"./IconButton-C_CpcPTF.js";import{C}from"./ChevronLeftIcon-CiBEN-Ne.js";import{C as y}from"./ChevronRightIcon-BXOnjnr5.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BCfwUH_f.js";const o=({isActive:s,number:t,onClick:i,total:a})=>n.jsx("li",{"aria-setsize":a,"aria-posinset":t,children:n.jsx("button",{className:E("jkl-pagination-button",{"jkl-pagination-button--current":s}),"aria-current":s,type:"button",onClick:i,tabIndex:s?-1:0,"aria-disabled":s,title:`side ${t}`,children:n.jsx("span",{"aria-hidden":!0,children:t})})});o.__docgenInfo={description:"",methods:[],displayName:"PageButton",props:{isActive:{required:!0,tsType:{name:"boolean"},description:""},number:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!0,tsType:{name:"MouseEventHandler"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};function b({onPageChange:s,currentPage:t,numberOfPages:i,labels:a={previous:"Forrige side",next:"Neste side"},as:r,className:m,ref:e,...x}){const v=r||"nav";if(i<=7)return n.jsxs(v,{ref:e,...x,className:E("jkl-pagination",m),children:[n.jsx(c,{className:"jkl-pagination-button",title:a.previous,onClick:()=>s(t-1,t),"aria-disabled":t===1,tabIndex:t===1?-1:0,children:n.jsx(C,{})}),n.jsx("ol",{className:"jkl-pagination__pages",children:Array.from({length:i}).map((A,N)=>{const k=N+1;return n.jsx(o,{isActive:t===k,number:k,total:i,onClick:()=>s(k,t)},N)})}),n.jsx(c,{className:"jkl-pagination-button",title:a.next,onClick:()=>s(t+1,t),"aria-disabled":t===i,tabIndex:t===i?-1:0,children:n.jsx(y,{})})]});const I=t>4,_=t<i-3,d=Math.min(Math.max(t-2,2),i-5),l=Math.min(d+1,i-4),j=Math.min(l+1,i-3),u=Math.min(l+2,i-2),h=Math.min(l+3,i-1);return n.jsxs(v,{ref:e,...x,className:"jkl-pagination",children:[n.jsx(c,{className:"jkl-pagination-button",title:a.previous,onClick:()=>s(t-1,t),"aria-disabled":t===1,tabIndex:t===1?-1:0,children:n.jsx(C,{})}),n.jsxs("ol",{className:"jkl-pagination__pages",children:[n.jsx(o,{isActive:t===1,number:1,total:i,onClick:()=>s(1,t)}),I?n.jsx("span",{"aria-hidden":!0,className:"jkl-pagination-button--elipsis",children:"..."}):n.jsx(o,{isActive:t===d,number:d,total:i,onClick:()=>s(d,t)}),n.jsx(o,{isActive:t===l,number:l,total:i,onClick:()=>s(l,t)}),n.jsx(o,{isActive:t===j,number:j,total:i,onClick:()=>s(j,t)}),n.jsx(o,{isActive:t===u,number:u,total:i,onClick:()=>s(u,t)}),_?n.jsx("span",{"aria-hidden":!0,className:"jkl-pagination-button--elipsis",children:"..."}):n.jsx(o,{isActive:t===h,number:h,total:i,onClick:()=>s(h,t)}),n.jsx(o,{isActive:t===i,number:i,total:i,onClick:()=>s(i,t)})]}),n.jsx(c,{className:"jkl-pagination-button",title:a.next,onClick:()=>s(t+1,t),"aria-disabled":t===i,tabIndex:t===i?-1:0,children:n.jsx(y,{})})]})}b.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{as:{required:!1,tsType:{name:"DefaultElement"},description:""},labels:{defaultValue:{value:`{
    previous: "Forrige side",
    next: "Neste side",
}`,computed:!1},required:!1}}};const R={title:"Komponenter/Pagination",component:b},p={args:{currentPage:1,numberOfPages:10,onPageChange:()=>{}},decorators:[(s,t)=>{const[i,a]=f.useState(t.args.currentPage),r=t.args.numberOfPages,m=(e,x)=>{e>0&&e<=r&&a(e)};return n.jsx("div",{children:n.jsx(b,{currentPage:i,numberOfPages:r,onPageChange:m})})}]};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const $=["Pagination"];export{p as Pagination,$ as __namedExportsOrder,R as default};
