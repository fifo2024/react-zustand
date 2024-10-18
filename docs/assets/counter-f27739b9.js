import{r as g,g as O,R as j}from"./index-8ed7bea8.js";const m=t=>{let e;const n=new Set,o=(s,d)=>{const c=typeof s=="function"?s(e):s;if(!Object.is(c,e)){const i=e;e=d??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(a=>a(e,i))}},r=()=>e,p={setState:o,getState:r,getInitialState:()=>E,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}},E=e=t(o,r,p);return p},A=t=>t?m(t):m;var D={exports:{}},b={},w={exports:{}},R={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=g;function V(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var q=typeof Object.is=="function"?Object.is:V,F=f.useState,I=f.useEffect,P=f.useLayoutEffect,W=f.useDebugValue;function _(t,e){var n=e(),o=F({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return P(function(){r.value=n,r.getSnapshot=e,y(r)&&u({inst:r})},[t,n,e]),I(function(){return y(r)&&u({inst:r}),t(function(){y(r)&&u({inst:r})})},[t]),W(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!q(t,n)}catch{return!0}}function $(t,e){return e()}var z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$:_;R.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:z;w.exports=R;var C=w.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=g,T=C;function B(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var L=typeof Object.is=="function"?Object.is:B,M=T.useSyncExternalStore,U=v.useRef,k=v.useEffect,G=v.useMemo,H=v.useDebugValue;b.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=U(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=G(function(){function p(i){if(!E){if(E=!0,s=i,i=o(i),r!==void 0&&l.hasValue){var a=l.value;if(r(a,i))return d=a}return d=i}if(a=d,L(s,i))return a;var h=o(i);return r!==void 0&&r(a,h)?a:(s=i,d=h)}var E=!1,s,d,c=n===void 0?null:n;return[function(){return p(e())},c===null?void 0:function(){return p(c())}]},[e,n,o,r]);var S=M(t,u[0],u[1]);return k(function(){l.hasValue=!0,l.value=S},[S]),H(S),S};D.exports=b;var J=D.exports;const K=O(J),{useDebugValue:N}=j,{useSyncExternalStoreWithSelector:Q}=K;const X=t=>t;function Y(t,e=X,n){const o=Q(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return N(o),o}const x=t=>{const e=typeof t=="function"?A(t):t,n=(o,r)=>Y(e,o,r);return Object.assign(n,e),n},Z=t=>t?x(t):x,et=Z()(t=>({counter:0,increase:e=>t(n=>({counter:n.counter+e}))}));export{et as u};
