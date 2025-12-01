import{j as t}from"./jsx-runtime-BOJBhsC5.js";import{r as P}from"./index-Bv6P490N.js";import{P as o}from"./Pagination-jxtGHhws.js";import"./_commonjsHelpers-DaWZu8wl.js";import"./clsx-B-dksMZM.js";import"./IconButton-9XUYZjY_.js";import"./ChevronLeftIcon-9oYStCk-.js";import"./Icon-DYEEOjBa.js";import"./ChevronRightIcon-B1bQ5uAI.js";const h={title:"Komponenter/Pagination",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{currentPage:1,numberOfPages:10,onPageChange:()=>{}},decorators:[(u,r)=>{const[s,g]=P.useState(r.args.currentPage),a=r.args.numberOfPages,m=n=>{n>0&&n<=a&&g(n)};return t.jsx("div",{children:t.jsx(o,{currentPage:s,numberOfPages:a,onPageChange:m})})}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    numberOfPages: 10,
    onPageChange: () => {}
  },
  decorators: [(_, context) => {
    const [currentPage, setCurrentPage] = useState<number>(context.args.currentPage);
    const numberOfPages = context.args.numberOfPages;
    const onPageChange = (newPage: number) => {
      if (newPage > 0 && newPage <= numberOfPages) {
        setCurrentPage(newPage);
      }
    };
    return <div>
                    <PaginationComponent currentPage={currentPage} numberOfPages={numberOfPages} onPageChange={onPageChange} />
                </div>;
  }]
}`,...e.parameters?.docs?.source}}};const l=["Pagination"];export{e as Pagination,l as __namedExportsOrder,h as default};
