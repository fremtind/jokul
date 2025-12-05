import{r as m,j as t}from"./iframe-01dd3rVd.js";import{P as o}from"./Pagination-VZu62q72.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconButton-BP5Rz98P.js";import"./ChevronLeftIcon-rtcRAEXq.js";import"./Icon-CuPpdcnC.js";import"./ChevronRightIcon-B_m9LN-R.js";const x={title:"Komponenter/Pagination",component:o},e={args:{currentPage:1,numberOfPages:10,onPageChange:()=>{}},decorators:[(u,r)=>{const[s,g]=m.useState(r.args.currentPage),a=r.args.numberOfPages,P=n=>{n>0&&n<=a&&g(n)};return t.jsx("div",{children:t.jsx(o,{currentPage:s,numberOfPages:a,onPageChange:P})})}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const h=["Pagination"];export{e as Pagination,h as __namedExportsOrder,x as default};
