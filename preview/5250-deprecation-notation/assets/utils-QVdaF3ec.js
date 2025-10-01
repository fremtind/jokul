const l=(r,t,s)=>{const n=e=>e===r&&t==="desc"?"asc":"desc",o=e=>{const a=n(e);s(e,a)};return{getSortProps:e=>({sortable:{onClick:()=>o(e),direction:r===e?t:void 0}})}};export{l as u};
