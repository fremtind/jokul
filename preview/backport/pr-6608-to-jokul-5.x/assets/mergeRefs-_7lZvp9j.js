function r(...n){return function(f){for(const e of n)e&&(typeof e=="function"?e(f):e&&(e.current=f))}}export{r as m};
