(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function v(){}function D(e){return e()}function I(){return Object.create(null)}function L(e){e.forEach(D)}function F(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function R(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function w(){return W(" ")}function P(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function X(e){return function(t){return t.preventDefault(),e.call(this,t)}}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Y(e){return Array.from(e.childNodes)}function C(e,t){e.value=t??""}let q;function E(e){q=e}const b=[],M=[];let x=[];const k=[],Z=Promise.resolve();let S=!1;function ee(){S||(S=!0,Z.then(U))}function j(e){x.push(e)}const A=new Set;let $=0;function U(){if($!==0)return;const e=q;do{try{for(;$<b.length;){const t=b[$];$++,E(t),te(t.$$)}}catch(t){throw b.length=0,$=0,t}for(E(null),b.length=0,$=0;M.length;)M.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];A.has(n)||(A.add(n),n())}x.length=0}while(b.length);for(;k.length;)k.pop()();S=!1,A.clear(),E(e)}function te(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function ne(e){const t=[],n=[];x.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),x=t}const N=new Set;let re;function z(e,t){e&&e.i&&(N.delete(e),e.i(t))}function oe(e,t,n,o){if(e&&e.o){if(N.has(e))return;N.add(e),re.c.push(()=>{N.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function se(e){e&&e.c()}function G(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||j(()=>{const l=e.$$.on_mount.map(D).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...l):L(l),e.$$.on_mount=[]}),s.forEach(j)}function H(e,t){const n=e.$$;n.fragment!==null&&(ne(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(b.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,o,r,s,l,c=[-1]){const a=q;E(e);const i=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:t.target||a.$$.root};l&&l(i.root);let g=!1;if(i.ctx=n?n(e,t.props||{},(u,_,...d)=>{const y=d.length?d[0]:_;return i.ctx&&r(i.ctx[u],i.ctx[u]=y)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](y),g&&ie(e,u)),_}):[],i.update(),g=!0,L(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const u=Y(t.target);i.fragment&&i.fragment.l(u),u.forEach(T)}else i.fragment&&i.fragment.c();t.intro&&z(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),U()}E(a)}class Q{$destroy(){H(this,1),this.$destroy=v}$on(t,n){if(!F(n))return v;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!R(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t,n,o,r,s,l,c,a,i,g,u,_,d,y,B;return{c(){t=h("main"),n=h("h1"),n.textContent="Login",o=w(),r=h("form"),s=h("label"),s.textContent="Username:",l=w(),c=h("input"),a=w(),i=h("label"),i.textContent="Password:",g=w(),u=h("input"),_=w(),d=h("button"),d.textContent="Login",m(n,"class","svelte-x2ybtr"),m(s,"for","username"),m(c,"type","text"),m(c,"id","username"),m(i,"for","password"),m(u,"type","password"),m(u,"id","password"),m(t,"class","svelte-x2ybtr")},m(p,O){V(p,t,O),f(t,n),f(t,o),f(t,r),f(r,s),f(r,l),f(r,c),C(c,e[0]),f(r,a),f(r,i),f(r,g),f(r,u),C(u,e[1]),f(r,_),f(r,d),y||(B=[P(c,"input",e[4]),P(u,"input",e[5]),P(d,"click",e[2]),P(r,"submit",X(handleSubmit))],y=!0)},p(p,[O]){O&1&&c.value!==p[0]&&C(c,p[0]),O&2&&u.value!==p[1]&&C(u,p[1])},i:v,o:v,d(p){p&&T(t),y=!1,L(B)}}}function le(e,t,n){let o="",r="";async function s({request:i,resolve:g}){try{const u=await fetch("users.txt"),[_,d]=u.split(":");o===_.trim()&&r===d.trim()?console.log("Login successful!"):console.log("Invalid login credentials. Please try again.")}catch(u){console.error("Error reading file:",u.message)}return g(i)}function l(){console.log("Button clicked!"),s()}function c(){o=this.value,n(0,o)}function a(){r=this.value,n(1,r)}return[o,r,l,s,c,a]}class ce extends Q{constructor(t){super(),J(this,t,le,ue,K,{handle:3})}get handle(){return this.$$.ctx[3]}}function fe(e){let t,n;return t=new ce({}),{c(){se(t.$$.fragment)},m(o,r){G(t,o,r),n=!0},p:v,i(o){n||(z(t.$$.fragment,o),n=!0)},o(o){oe(t.$$.fragment,o),n=!1},d(o){H(t,o)}}}class ae extends Q{constructor(t){super(),J(this,t,null,fe,K,{})}}new ae({target:document.querySelector("#app")});
