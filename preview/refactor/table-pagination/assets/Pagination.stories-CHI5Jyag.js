import{j as t}from"./jsx-runtime-DqZpzl9T.js";import{r as P}from"./index-siqcju79.js";import{P as o}from"./Pagination-CBopdUZa.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./IconButton-CwYjR4Na.js";import"./ChevronLeftIcon-BDA7AAte.js";import"./Icon-DnRkF4CO.js";import"./ChevronRightIcon-DscfWr0z.js";const l={title:"Komponenter/Pagination",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{currentPage:1,numberOfPages:10,onPageChange:()=>{}},decorators:[(u,r)=>{const[s,g]=P.useState(r.args.currentPage),a=r.args.numberOfPages,m=(n,c)=>{n>0&&n<=a&&g(n)};return t.jsx("div",{children:t.jsx(o,{currentPage:s,numberOfPages:a,onPageChange:m})})}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const S=["Pagination"];export{e as Pagination,S as __namedExportsOrder,l as default};
