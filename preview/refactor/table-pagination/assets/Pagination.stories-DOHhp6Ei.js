import{j as t}from"./jsx-runtime-DqZpzl9T.js";import{r as m}from"./index-siqcju79.js";import{P as o}from"./Pagination-CBopdUZa.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./IconButton-CwYjR4Na.js";import"./ChevronLeftIcon-BDA7AAte.js";import"./Icon-DnRkF4CO.js";import"./ChevronRightIcon-DscfWr0z.js";const _={title:"Komponenter/Pagination",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{currentPage:1,numberOfPages:10,onPageChange:()=>{}},decorators:[(P,r)=>{const[s,g]=m.useState(r.args.currentPage),a=r.args.numberOfPages,c=(u,n)=>{n>0&&n<=a&&g(n)};return t.jsx("div",{children:t.jsx(o,{currentPage:s,numberOfPages:a,onPageChange:c})})}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    numberOfPages: 10,
    onPageChange: () => {}
  },
  decorators: [(_, context) => {
    const [currentPage, setCurrentPage] = useState<number>(context.args.currentPage);
    const numberOfPages = context.args.numberOfPages;
    const onPageChange = (_: React.SyntheticEvent, newPage: number) => {
      if (newPage > 0 && newPage <= numberOfPages) {
        setCurrentPage(newPage);
      }
    };
    return <div>
                    <PaginationComponent currentPage={currentPage} numberOfPages={numberOfPages} onPageChange={onPageChange} />
                </div>;
  }]
}`,...e.parameters?.docs?.source}}};const l=["Pagination"];export{e as Pagination,l as __namedExportsOrder,_ as default};
