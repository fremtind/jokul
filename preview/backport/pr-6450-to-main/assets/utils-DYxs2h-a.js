const u=(n,r,o)=>({getSortProps:e=>{const t=n===e?r:"none",s={asc:"desc",desc:"none",none:"asc"}[t]??"asc";return{sortable:{onClick:()=>o(e,s),direction:t}}}});export{u};
