"use strict";var react=require("react");const initialOptions={root:null,rootMargin:"0px",threshold:[.05,.3,.6,.95]},useImpression=(e,r)=>{const t=react.useRef(!1),n=react.useRef(),c=react.useRef(null),u=r||initialOptions,s=react.useCallback(r=>{(r[0]&&r[0].isIntersecting||!1)&&(e(),!t.current&&c.current&&(c.current.disconnect(),c.current=null,t.current=!0))},[e,c,t]);return react.useEffect(()=>(t.current||c.current||(c.current=new IntersectionObserver(s,u),c.current.observe(n.current)),()=>{c.current&&(c.current.disconnect(),c.current=null)}),[s,u,n]),n};module.exports=useImpression;
