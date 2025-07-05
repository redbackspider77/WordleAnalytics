const rr=()=>{};var Ai={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=function(s){const e=[];let i=0;for(let o=0;o<s.length;o++){let h=s.charCodeAt(o);h<128?e[i++]=h:h<2048?(e[i++]=h>>6|192,e[i++]=h&63|128):(h&64512)===55296&&o+1<s.length&&(s.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(s.charCodeAt(++o)&1023),e[i++]=h>>18|240,e[i++]=h>>12&63|128,e[i++]=h>>6&63|128,e[i++]=h&63|128):(e[i++]=h>>12|224,e[i++]=h>>6&63|128,e[i++]=h&63|128)}return e},or=function(s){const e=[];let i=0,o=0;for(;i<s.length;){const h=s[i++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const p=s[i++];e[o++]=String.fromCharCode((h&31)<<6|p&63)}else if(h>239&&h<365){const p=s[i++],v=s[i++],w=s[i++],A=((h&7)<<18|(p&63)<<12|(v&63)<<6|w&63)-65536;e[o++]=String.fromCharCode(55296+(A>>10)),e[o++]=String.fromCharCode(56320+(A&1023))}else{const p=s[i++],v=s[i++];e[o++]=String.fromCharCode((h&15)<<12|(p&63)<<6|v&63)}}return e.join("")},ts={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<s.length;h+=3){const p=s[h],v=h+1<s.length,w=v?s[h+1]:0,A=h+2<s.length,S=A?s[h+2]:0,x=p>>2,M=(p&3)<<4|w>>4;let I=(w&15)<<2|S>>6,B=S&63;A||(B=64,v||(I=64)),o.push(i[x],i[M],i[I],i[B])}return o.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Qi(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):or(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<s.length;){const p=i[s.charAt(h++)],w=h<s.length?i[s.charAt(h)]:0;++h;const S=h<s.length?i[s.charAt(h)]:64;++h;const M=h<s.length?i[s.charAt(h)]:64;if(++h,p==null||w==null||S==null||M==null)throw new ar;const I=p<<2|w>>4;if(o.push(I),S!==64){const B=w<<4&240|S>>2;if(o.push(B),M!==64){const D=S<<6&192|M;o.push(D)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class ar extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hr=function(s){const e=Qi(s);return ts.encodeByteArray(e,!0)},De=function(s){return hr(s).replace(/\./g,"")},lr=function(s){try{return ts.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=()=>cr().__FIREBASE_DEFAULTS__,fr=()=>{if(typeof process>"u"||typeof Ai>"u")return;const s=Ai.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},dr=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&lr(s[1]);return e&&JSON.parse(e)},es=()=>{try{return rr()||ur()||fr()||dr()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},pr=s=>{var e,i;return(i=(e=es())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[s]},gr=s=>{const e=pr(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),o]:[e.substring(0,i),o]},ns=()=>{var s;return(s=es())===null||s===void 0?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yr(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},o=e||"demo-project",h=s.iat||0,p=s.sub||s.user_id;if(!p)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const v=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:h,exp:h+3600,auth_time:h,sub:p,user_id:p,firebase:{sign_in_provider:"custom",identities:{}}},s);return[De(JSON.stringify(i)),De(JSON.stringify(v)),""].join(".")}const Qt={};function vr(){const s={prod:[],emulator:[]};for(const e of Object.keys(Qt))Qt[e]?s.emulator.push(e):s.prod.push(e);return s}function wr(s){let e=document.getElementById(s),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),i=!0),{created:i,element:e}}let Ii=!1;function Er(s,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Qt[s]===e||Qt[s]||Ii)return;Qt[s]=e;function i(I){return`__firebase__banner__${I}`}const o="__firebase__banner",p=vr().prod.length>0;function v(){const I=document.getElementById(o);I&&I.remove()}function w(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function A(I,B){I.setAttribute("width","24"),I.setAttribute("id",B),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function S(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ii=!0,v()},I}function x(I,B){I.setAttribute("id",B),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function M(){const I=wr(o),B=i("text"),D=document.getElementById(B)||document.createElement("span"),V=i("learnmore"),k=document.getElementById(V)||document.createElement("a"),ot=i("preprendIcon"),W=document.getElementById(ot)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const U=I.element;w(U),x(k,V);const et=S();A(W,ot),U.append(W,D,k,et),document.body.appendChild(U)}p?(D.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",M):M()}function Ar(){try{return typeof indexedDB=="object"}catch{return!1}}function Ir(){return new Promise((s,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),i||self.indexedDB.deleteDatabase(o),s(!0)},h.onupgradeneeded=()=>{i=!1},h.onerror=()=>{var p;e(((p=h.error)===null||p===void 0?void 0:p.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="FirebaseError";class Lt extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=Sr,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},h=`${this.service}/${e}`,p=this.errors[e],v=p?Tr(p,o):"Error",w=`${this.serviceName}: ${v} (${h}).`;return new Lt(h,w,o)}}function Tr(s,e){return s.replace(br,(i,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const br=/\{\$([^}]+)}/g;function Pe(s,e){if(s===e)return!0;const i=Object.keys(s),o=Object.keys(e);for(const h of i){if(!o.includes(h))return!1;const p=s[h],v=e[h];if(Si(p)&&Si(v)){if(!Pe(p,v))return!1}else if(p!==v)return!1}for(const h of o)if(!i.includes(h))return!1;return!0}function Si(s){return s!==null&&typeof s=="object"}class ie{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const o=new mr;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:i});h&&o.resolve(h)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const o=this.normalizeInstanceIdentifier(e?.identifier),h=(i=e?.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(p){if(h)return null;throw p}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pr(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(i);try{const p=this.getOrInitializeService({instanceIdentifier:h});o.resolve(p)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[p,v]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(p);o===w&&v.resolve(h)}return h}onInit(e,i){var o;const h=this.normalizeInstanceIdentifier(i),p=(o=this.onInitCallbacks.get(h))!==null&&o!==void 0?o:new Set;p.add(e),this.onInitCallbacks.set(h,p);const v=this.instances.get(h);return v&&e(v,h),()=>{p.delete(e)}}invokeOnInitCallbacks(e,i){const o=this.onInitCallbacks.get(i);if(o)for(const h of o)try{h(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Dr(e),options:i}),this.instances.set(e,o),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dr(s){return s===Et?void 0:s}function Pr(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Cr(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(R||(R={}));const Nr={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Or=R.INFO,kr={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Mr=(s,e,...i)=>{if(e<s.logLevel)return;const o=new Date().toISOString(),h=kr[e];if(h)console[h](`[${o}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rs{constructor(e){this.name=e,this._logLevel=Or,this._logHandler=Mr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const Lr=(s,e)=>e.some(i=>s instanceof i);let Ti,bi;function xr(){return Ti||(Ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jr(){return bi||(bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const os=new WeakMap,fn=new WeakMap,as=new WeakMap,an=new WeakMap,_n=new WeakMap;function Br(s){const e=new Promise((i,o)=>{const h=()=>{s.removeEventListener("success",p),s.removeEventListener("error",v)},p=()=>{i(mt(s.result)),h()},v=()=>{o(s.error),h()};s.addEventListener("success",p),s.addEventListener("error",v)});return e.then(i=>{i instanceof IDBCursor&&os.set(i,s)}).catch(()=>{}),_n.set(e,s),e}function Vr(s){if(fn.has(s))return;const e=new Promise((i,o)=>{const h=()=>{s.removeEventListener("complete",p),s.removeEventListener("error",v),s.removeEventListener("abort",v)},p=()=>{i(),h()},v=()=>{o(s.error||new DOMException("AbortError","AbortError")),h()};s.addEventListener("complete",p),s.addEventListener("error",v),s.addEventListener("abort",v)});fn.set(s,e)}let dn={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return fn.get(s);if(e==="objectStoreNames")return s.objectStoreNames||as.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return mt(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function Fr(s){dn=s(dn)}function Ur(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=s.call(hn(this),e,...i);return as.set(o,e.sort?e.sort():[e]),mt(o)}:jr().includes(s)?function(...e){return s.apply(hn(this),e),mt(os.get(this))}:function(...e){return mt(s.apply(hn(this),e))}}function Hr(s){return typeof s=="function"?Ur(s):(s instanceof IDBTransaction&&Vr(s),Lr(s,xr())?new Proxy(s,dn):s)}function mt(s){if(s instanceof IDBRequest)return Br(s);if(an.has(s))return an.get(s);const e=Hr(s);return e!==s&&(an.set(s,e),_n.set(e,s)),e}const hn=s=>_n.get(s);function $r(s,e,{blocked:i,upgrade:o,blocking:h,terminated:p}={}){const v=indexedDB.open(s,e),w=mt(v);return o&&v.addEventListener("upgradeneeded",A=>{o(mt(v.result),A.oldVersion,A.newVersion,mt(v.transaction),A)}),i&&v.addEventListener("blocked",A=>i(A.oldVersion,A.newVersion,A)),w.then(A=>{p&&A.addEventListener("close",()=>p()),h&&A.addEventListener("versionchange",S=>h(S.oldVersion,S.newVersion,S))}).catch(()=>{}),w}const zr=["get","getKey","getAll","getAllKeys","count"],Gr=["put","add","delete","clear"],ln=new Map;function Ci(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(ln.get(e))return ln.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,h=Gr.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(h||zr.includes(i)))return;const p=async function(v,...w){const A=this.transaction(v,h?"readwrite":"readonly");let S=A.store;return o&&(S=S.index(w.shift())),(await Promise.all([S[i](...w),h&&A.done]))[0]};return ln.set(e,p),p}Fr(s=>({...s,get:(e,i,o)=>Ci(e,i)||s.get(e,i,o),has:(e,i)=>!!Ci(e,i)||s.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(qr(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function qr(s){const e=s.getComponent();return e?.type==="VERSION"}const pn="@firebase/app",Di="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new rs("@firebase/app"),Xr="@firebase/app-compat",Jr="@firebase/analytics-compat",Kr="@firebase/analytics",Yr="@firebase/app-check-compat",Zr="@firebase/app-check",Qr="@firebase/auth",to="@firebase/auth-compat",eo="@firebase/database",no="@firebase/data-connect",io="@firebase/database-compat",so="@firebase/functions",ro="@firebase/functions-compat",oo="@firebase/installations",ao="@firebase/installations-compat",ho="@firebase/messaging",lo="@firebase/messaging-compat",co="@firebase/performance",uo="@firebase/performance-compat",fo="@firebase/remote-config",po="@firebase/remote-config-compat",go="@firebase/storage",mo="@firebase/storage-compat",yo="@firebase/firestore",_o="@firebase/ai",vo="@firebase/firestore-compat",wo="firebase",Eo="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]",Ao={[pn]:"fire-core",[Xr]:"fire-core-compat",[Kr]:"fire-analytics",[Jr]:"fire-analytics-compat",[Zr]:"fire-app-check",[Yr]:"fire-app-check-compat",[Qr]:"fire-auth",[to]:"fire-auth-compat",[eo]:"fire-rtdb",[no]:"fire-data-connect",[io]:"fire-rtdb-compat",[so]:"fire-fn",[ro]:"fire-fn-compat",[oo]:"fire-iid",[ao]:"fire-iid-compat",[ho]:"fire-fcm",[lo]:"fire-fcm-compat",[co]:"fire-perf",[uo]:"fire-perf-compat",[fo]:"fire-rc",[po]:"fire-rc-compat",[go]:"fire-gcs",[mo]:"fire-gcs-compat",[yo]:"fire-fst",[vo]:"fire-fst-compat",[_o]:"fire-vertex","fire-js":"fire-js",[wo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new Map,Io=new Map,mn=new Map;function Pi(s,e){try{s.container.addComponent(e)}catch(i){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function Ne(s){const e=s.name;if(mn.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;mn.set(e,s);for(const i of Re.values())Pi(i,s);for(const i of Io.values())Pi(i,s);return!0}function So(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function To(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new ss("app","Firebase",bo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,i,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=Eo;function hs(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const o=Object.assign({name:gn,automaticDataCollectionEnabled:!0},e),h=o.name;if(typeof h!="string"||!h)throw yt.create("bad-app-name",{appName:String(h)});if(i||(i=ns()),!i)throw yt.create("no-options");const p=Re.get(h);if(p){if(Pe(i,p.options)&&Pe(o,p.config))return p;throw yt.create("duplicate-app",{appName:h})}const v=new Rr(h);for(const A of mn.values())v.addComponent(A);const w=new Co(i,o,v);return Re.set(h,w),w}function Po(s=gn){const e=Re.get(s);if(!e&&s===gn&&ns())return hs();if(!e)throw yt.create("no-app",{appName:s});return e}function Ot(s,e,i){var o;let h=(o=Ao[s])!==null&&o!==void 0?o:s;i&&(h+=`-${i}`);const p=h.match(/\s|\//),v=e.match(/\s|\//);if(p||v){const w=[`Unable to register library "${h}" with version "${e}":`];p&&w.push(`library name "${h}" contains illegal characters (whitespace or "/")`),p&&v&&w.push("and"),v&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(w.join(" "));return}Ne(new ie(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="firebase-heartbeat-database",No=1,se="firebase-heartbeat-store";let cn=null;function ls(){return cn||(cn=$r(Ro,No,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(se)}catch(i){console.warn(i)}}}}).catch(s=>{throw yt.create("idb-open",{originalErrorMessage:s.message})})),cn}async function Oo(s){try{const i=(await ls()).transaction(se),o=await i.objectStore(se).get(cs(s));return await i.done,o}catch(e){if(e instanceof Lt)ut.warn(e.message);else{const i=yt.create("idb-get",{originalErrorMessage:e?.message});ut.warn(i.message)}}}async function Ri(s,e){try{const o=(await ls()).transaction(se,"readwrite");await o.objectStore(se).put(e,cs(s)),await o.done}catch(i){if(i instanceof Lt)ut.warn(i.message);else{const o=yt.create("idb-set",{originalErrorMessage:i?.message});ut.warn(o.message)}}}function cs(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=1024,Mo=30;class Lo{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new jo(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,i;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),p=Ni();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===p||this._heartbeatsCache.heartbeats.some(v=>v.date===p))return;if(this._heartbeatsCache.heartbeats.push({date:p,agent:h}),this._heartbeatsCache.heartbeats.length>Mo){const v=Bo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(v,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ut.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Ni(),{heartbeatsToSend:o,unsentEntries:h}=xo(this._heartbeatsCache.heartbeats),p=De(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=i,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),p}catch(i){return ut.warn(i),""}}}function Ni(){return new Date().toISOString().substring(0,10)}function xo(s,e=ko){const i=[];let o=s.slice();for(const h of s){const p=i.find(v=>v.agent===h.agent);if(p){if(p.dates.push(h.date),Oi(i)>e){p.dates.pop();break}}else if(i.push({agent:h.agent,dates:[h.date]}),Oi(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class jo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ar()?Ir().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Oo(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const h=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const h=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function Oi(s){return De(JSON.stringify({version:2,heartbeats:s})).length}function Bo(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let o=1;o<s.length;o++)s[o].date<i&&(i=s[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(s){Ne(new ie("platform-logger",e=>new Wr(e),"PRIVATE")),Ne(new ie("heartbeat",e=>new Lo(e),"PRIVATE")),Ot(pn,Di,s),Ot(pn,Di,"esm2017"),Ot("fire-js","")}Vo("");var Fo="firebase",Uo="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(Fo,Uo,"app");var ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vn;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function u(){}u.prototype=l.prototype,g.D=l.prototype,g.prototype=new u,g.prototype.constructor=g,g.C=function(f,d,y){for(var c=Array(arguments.length-2),at=2;at<arguments.length;at++)c[at-2]=arguments[at];return l.prototype[d].apply(f,c)}}function i(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,i),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(g,l,u){u||(u=0);var f=Array(16);if(typeof l=="string")for(var d=0;16>d;++d)f[d]=l.charCodeAt(u++)|l.charCodeAt(u++)<<8|l.charCodeAt(u++)<<16|l.charCodeAt(u++)<<24;else for(d=0;16>d;++d)f[d]=l[u++]|l[u++]<<8|l[u++]<<16|l[u++]<<24;l=g.g[0],u=g.g[1],d=g.g[2];var y=g.g[3],c=l+(y^u&(d^y))+f[0]+3614090360&4294967295;l=u+(c<<7&4294967295|c>>>25),c=y+(d^l&(u^d))+f[1]+3905402710&4294967295,y=l+(c<<12&4294967295|c>>>20),c=d+(u^y&(l^u))+f[2]+606105819&4294967295,d=y+(c<<17&4294967295|c>>>15),c=u+(l^d&(y^l))+f[3]+3250441966&4294967295,u=d+(c<<22&4294967295|c>>>10),c=l+(y^u&(d^y))+f[4]+4118548399&4294967295,l=u+(c<<7&4294967295|c>>>25),c=y+(d^l&(u^d))+f[5]+1200080426&4294967295,y=l+(c<<12&4294967295|c>>>20),c=d+(u^y&(l^u))+f[6]+2821735955&4294967295,d=y+(c<<17&4294967295|c>>>15),c=u+(l^d&(y^l))+f[7]+4249261313&4294967295,u=d+(c<<22&4294967295|c>>>10),c=l+(y^u&(d^y))+f[8]+1770035416&4294967295,l=u+(c<<7&4294967295|c>>>25),c=y+(d^l&(u^d))+f[9]+2336552879&4294967295,y=l+(c<<12&4294967295|c>>>20),c=d+(u^y&(l^u))+f[10]+4294925233&4294967295,d=y+(c<<17&4294967295|c>>>15),c=u+(l^d&(y^l))+f[11]+2304563134&4294967295,u=d+(c<<22&4294967295|c>>>10),c=l+(y^u&(d^y))+f[12]+1804603682&4294967295,l=u+(c<<7&4294967295|c>>>25),c=y+(d^l&(u^d))+f[13]+4254626195&4294967295,y=l+(c<<12&4294967295|c>>>20),c=d+(u^y&(l^u))+f[14]+2792965006&4294967295,d=y+(c<<17&4294967295|c>>>15),c=u+(l^d&(y^l))+f[15]+1236535329&4294967295,u=d+(c<<22&4294967295|c>>>10),c=l+(d^y&(u^d))+f[1]+4129170786&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^d&(l^u))+f[6]+3225465664&4294967295,y=l+(c<<9&4294967295|c>>>23),c=d+(l^u&(y^l))+f[11]+643717713&4294967295,d=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(d^y))+f[0]+3921069994&4294967295,u=d+(c<<20&4294967295|c>>>12),c=l+(d^y&(u^d))+f[5]+3593408605&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^d&(l^u))+f[10]+38016083&4294967295,y=l+(c<<9&4294967295|c>>>23),c=d+(l^u&(y^l))+f[15]+3634488961&4294967295,d=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(d^y))+f[4]+3889429448&4294967295,u=d+(c<<20&4294967295|c>>>12),c=l+(d^y&(u^d))+f[9]+568446438&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^d&(l^u))+f[14]+3275163606&4294967295,y=l+(c<<9&4294967295|c>>>23),c=d+(l^u&(y^l))+f[3]+4107603335&4294967295,d=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(d^y))+f[8]+1163531501&4294967295,u=d+(c<<20&4294967295|c>>>12),c=l+(d^y&(u^d))+f[13]+2850285829&4294967295,l=u+(c<<5&4294967295|c>>>27),c=y+(u^d&(l^u))+f[2]+4243563512&4294967295,y=l+(c<<9&4294967295|c>>>23),c=d+(l^u&(y^l))+f[7]+1735328473&4294967295,d=y+(c<<14&4294967295|c>>>18),c=u+(y^l&(d^y))+f[12]+2368359562&4294967295,u=d+(c<<20&4294967295|c>>>12),c=l+(u^d^y)+f[5]+4294588738&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^d)+f[8]+2272392833&4294967295,y=l+(c<<11&4294967295|c>>>21),c=d+(y^l^u)+f[11]+1839030562&4294967295,d=y+(c<<16&4294967295|c>>>16),c=u+(d^y^l)+f[14]+4259657740&4294967295,u=d+(c<<23&4294967295|c>>>9),c=l+(u^d^y)+f[1]+2763975236&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^d)+f[4]+1272893353&4294967295,y=l+(c<<11&4294967295|c>>>21),c=d+(y^l^u)+f[7]+4139469664&4294967295,d=y+(c<<16&4294967295|c>>>16),c=u+(d^y^l)+f[10]+3200236656&4294967295,u=d+(c<<23&4294967295|c>>>9),c=l+(u^d^y)+f[13]+681279174&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^d)+f[0]+3936430074&4294967295,y=l+(c<<11&4294967295|c>>>21),c=d+(y^l^u)+f[3]+3572445317&4294967295,d=y+(c<<16&4294967295|c>>>16),c=u+(d^y^l)+f[6]+76029189&4294967295,u=d+(c<<23&4294967295|c>>>9),c=l+(u^d^y)+f[9]+3654602809&4294967295,l=u+(c<<4&4294967295|c>>>28),c=y+(l^u^d)+f[12]+3873151461&4294967295,y=l+(c<<11&4294967295|c>>>21),c=d+(y^l^u)+f[15]+530742520&4294967295,d=y+(c<<16&4294967295|c>>>16),c=u+(d^y^l)+f[2]+3299628645&4294967295,u=d+(c<<23&4294967295|c>>>9),c=l+(d^(u|~y))+f[0]+4096336452&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~d))+f[7]+1126891415&4294967295,y=l+(c<<10&4294967295|c>>>22),c=d+(l^(y|~u))+f[14]+2878612391&4294967295,d=y+(c<<15&4294967295|c>>>17),c=u+(y^(d|~l))+f[5]+4237533241&4294967295,u=d+(c<<21&4294967295|c>>>11),c=l+(d^(u|~y))+f[12]+1700485571&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~d))+f[3]+2399980690&4294967295,y=l+(c<<10&4294967295|c>>>22),c=d+(l^(y|~u))+f[10]+4293915773&4294967295,d=y+(c<<15&4294967295|c>>>17),c=u+(y^(d|~l))+f[1]+2240044497&4294967295,u=d+(c<<21&4294967295|c>>>11),c=l+(d^(u|~y))+f[8]+1873313359&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~d))+f[15]+4264355552&4294967295,y=l+(c<<10&4294967295|c>>>22),c=d+(l^(y|~u))+f[6]+2734768916&4294967295,d=y+(c<<15&4294967295|c>>>17),c=u+(y^(d|~l))+f[13]+1309151649&4294967295,u=d+(c<<21&4294967295|c>>>11),c=l+(d^(u|~y))+f[4]+4149444226&4294967295,l=u+(c<<6&4294967295|c>>>26),c=y+(u^(l|~d))+f[11]+3174756917&4294967295,y=l+(c<<10&4294967295|c>>>22),c=d+(l^(y|~u))+f[2]+718787259&4294967295,d=y+(c<<15&4294967295|c>>>17),c=u+(y^(d|~l))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(d+(c<<21&4294967295|c>>>11))&4294967295,g.g[2]=g.g[2]+d&4294967295,g.g[3]=g.g[3]+y&4294967295}o.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var u=l-this.blockSize,f=this.B,d=this.h,y=0;y<l;){if(d==0)for(;y<=u;)h(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<l;)if(f[d++]=g.charCodeAt(y++),d==this.blockSize){h(this,f),d=0;break}}else for(;y<l;)if(f[d++]=g[y++],d==this.blockSize){h(this,f),d=0;break}}this.h=d,this.o+=l},o.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var u=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=u&255,u/=256;for(this.u(g),g=Array(16),l=u=0;4>l;++l)for(var f=0;32>f;f+=8)g[u++]=this.g[l]>>>f&255;return g};function p(g,l){var u=w;return Object.prototype.hasOwnProperty.call(u,g)?u[g]:u[g]=l(g)}function v(g,l){this.h=l;for(var u=[],f=!0,d=g.length-1;0<=d;d--){var y=g[d]|0;f&&y==l||(u[d]=y,f=!1)}this.g=u}var w={};function A(g){return-128<=g&&128>g?p(g,function(l){return new v([l|0],0>l?-1:0)}):new v([g|0],0>g?-1:0)}function S(g){if(isNaN(g)||!isFinite(g))return M;if(0>g)return k(S(-g));for(var l=[],u=1,f=0;g>=u;f++)l[f]=g/u|0,u*=4294967296;return new v(l,0)}function x(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return k(x(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=S(Math.pow(l,8)),f=M,d=0;d<g.length;d+=8){var y=Math.min(8,g.length-d),c=parseInt(g.substring(d,d+y),l);8>y?(y=S(Math.pow(l,y)),f=f.j(y).add(S(c))):(f=f.j(u),f=f.add(S(c)))}return f}var M=A(0),I=A(1),B=A(16777216);s=v.prototype,s.m=function(){if(V(this))return-k(this).m();for(var g=0,l=1,u=0;u<this.g.length;u++){var f=this.i(u);g+=(0<=f?f:4294967296+f)*l,l*=4294967296}return g},s.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(D(this))return"0";if(V(this))return"-"+k(this).toString(g);for(var l=S(Math.pow(g,6)),u=this,f="";;){var d=et(u,l).g;u=ot(u,d.j(l));var y=((0<u.g.length?u.g[0]:u.h)>>>0).toString(g);if(u=d,D(u))return y+f;for(;6>y.length;)y="0"+y;f=y+f}},s.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function D(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function V(g){return g.h==-1}s.l=function(g){return g=ot(this,g),V(g)?-1:D(g)?0:1};function k(g){for(var l=g.g.length,u=[],f=0;f<l;f++)u[f]=~g.g[f];return new v(u,~g.h).add(I)}s.abs=function(){return V(this)?k(this):this},s.add=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0,d=0;d<=l;d++){var y=f+(this.i(d)&65535)+(g.i(d)&65535),c=(y>>>16)+(this.i(d)>>>16)+(g.i(d)>>>16);f=c>>>16,y&=65535,c&=65535,u[d]=c<<16|y}return new v(u,u[u.length-1]&-2147483648?-1:0)};function ot(g,l){return g.add(k(l))}s.j=function(g){if(D(this)||D(g))return M;if(V(this))return V(g)?k(this).j(k(g)):k(k(this).j(g));if(V(g))return k(this.j(k(g)));if(0>this.l(B)&&0>g.l(B))return S(this.m()*g.m());for(var l=this.g.length+g.g.length,u=[],f=0;f<2*l;f++)u[f]=0;for(f=0;f<this.g.length;f++)for(var d=0;d<g.g.length;d++){var y=this.i(f)>>>16,c=this.i(f)&65535,at=g.i(d)>>>16,xt=g.i(d)&65535;u[2*f+2*d]+=c*xt,W(u,2*f+2*d),u[2*f+2*d+1]+=y*xt,W(u,2*f+2*d+1),u[2*f+2*d+1]+=c*at,W(u,2*f+2*d+1),u[2*f+2*d+2]+=y*at,W(u,2*f+2*d+2)}for(f=0;f<l;f++)u[f]=u[2*f+1]<<16|u[2*f];for(f=l;f<2*l;f++)u[f]=0;return new v(u,0)};function W(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function U(g,l){this.g=g,this.h=l}function et(g,l){if(D(l))throw Error("division by zero");if(D(g))return new U(M,M);if(V(g))return l=et(k(g),l),new U(k(l.g),k(l.h));if(V(l))return l=et(g,k(l)),new U(k(l.g),l.h);if(30<g.g.length){if(V(g)||V(l))throw Error("slowDivide_ only works with positive integers.");for(var u=I,f=l;0>=f.l(g);)u=he(u),f=he(f);var d=nt(u,1),y=nt(f,1);for(f=nt(f,2),u=nt(u,2);!D(f);){var c=y.add(f);0>=c.l(g)&&(d=d.add(u),y=c),f=nt(f,1),u=nt(u,1)}return l=ot(g,d.j(l)),new U(d,l)}for(d=M;0<=g.l(l);){for(u=Math.max(1,Math.floor(g.m()/l.m())),f=Math.ceil(Math.log(u)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),y=S(u),c=y.j(l);V(c)||0<c.l(g);)u-=f,y=S(u),c=y.j(l);D(y)&&(y=I),d=d.add(y),g=ot(g,c)}return new U(d,g)}s.A=function(g){return et(this,g).h},s.and=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0;f<l;f++)u[f]=this.i(f)&g.i(f);return new v(u,this.h&g.h)},s.or=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0;f<l;f++)u[f]=this.i(f)|g.i(f);return new v(u,this.h|g.h)},s.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],f=0;f<l;f++)u[f]=this.i(f)^g.i(f);return new v(u,this.h^g.h)};function he(g){for(var l=g.g.length+1,u=[],f=0;f<l;f++)u[f]=g.i(f)<<1|g.i(f-1)>>>31;return new v(u,g.h)}function nt(g,l){var u=l>>5;l%=32;for(var f=g.g.length-u,d=[],y=0;y<f;y++)d[y]=0<l?g.i(y+u)>>>l|g.i(y+u+1)<<32-l:g.i(y+u);return new v(d,g.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,v.prototype.add=v.prototype.add,v.prototype.multiply=v.prototype.j,v.prototype.modulo=v.prototype.A,v.prototype.compare=v.prototype.l,v.prototype.toNumber=v.prototype.m,v.prototype.toString=v.prototype.toString,v.prototype.getBits=v.prototype.i,v.fromNumber=S,v.fromString=x,vn=v}).apply(typeof ki<"u"?ki:typeof self<"u"?self:typeof window<"u"?window:{});var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,n,r){return t==Array.prototype||t==Object.prototype||(t[n]=r.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Te=="object"&&Te];for(var n=0;n<t.length;++n){var r=t[n];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var o=i(this);function h(t,n){if(n)t:{var r=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var m=t[a];if(!(m in r))break t;r=r[m]}t=t[t.length-1],a=r[t],n=n(a),n!=a&&n!=null&&e(r,t,{configurable:!0,writable:!0,value:n})}}function p(t,n){t instanceof String&&(t+="");var r=0,a=!1,m={next:function(){if(!a&&r<t.length){var _=r++;return{value:n(_,t[_]),done:!1}}return a=!0,{done:!0,value:void 0}}};return m[Symbol.iterator]=function(){return m},m}h("Array.prototype.values",function(t){return t||function(){return p(this,function(n,r){return r})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var v=v||{},w=this||self;function A(t){var n=typeof t;return n=n!="object"?n:t?Array.isArray(t)?"array":n:"null",n=="array"||n=="object"&&typeof t.length=="number"}function S(t){var n=typeof t;return n=="object"&&t!=null||n=="function"}function x(t,n,r){return t.call.apply(t.bind,arguments)}function M(t,n,r){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var m=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(m,a),t.apply(n,m)}}return function(){return t.apply(n,arguments)}}function I(t,n,r){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x:M,I.apply(null,arguments)}function B(t,n){var r=Array.prototype.slice.call(arguments,1);return function(){var a=r.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function D(t,n){function r(){}r.prototype=n.prototype,t.aa=n.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(a,m,_){for(var E=Array(arguments.length-2),N=2;N<arguments.length;N++)E[N-2]=arguments[N];return n.prototype[m].apply(a,E)}}function V(t){const n=t.length;if(0<n){const r=Array(n);for(let a=0;a<n;a++)r[a]=t[a];return r}return[]}function k(t,n){for(let r=1;r<arguments.length;r++){const a=arguments[r];if(A(a)){const m=t.length||0,_=a.length||0;t.length=m+_;for(let E=0;E<_;E++)t[m+E]=a[E]}else t.push(a)}}class ot{constructor(n,r){this.i=n,this.j=r,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function W(t){return/^[\s\xa0]*$/.test(t)}function U(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function et(t){return et[" "](t),t}et[" "]=function(){};var he=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function nt(t,n,r){for(const a in t)n.call(r,t[a],a,t)}function g(t,n){for(const r in t)n.call(void 0,t[r],r,t)}function l(t){const n={};for(const r in t)n[r]=t[r];return n}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,n){let r,a;for(let m=1;m<arguments.length;m++){a=arguments[m];for(r in a)t[r]=a[r];for(let _=0;_<u.length;_++)r=u[_],Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}}function d(t){var n=1;t=t.split(":");const r=[];for(;0<n&&t.length;)r.push(t.shift()),n--;return t.length&&r.push(t.join(":")),r}function y(t){w.setTimeout(()=>{throw t},0)}function c(){var t=Me;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}class at{constructor(){this.h=this.g=null}add(n,r){const a=xt.get();a.set(n,r),this.h?this.h.next=a:this.g=a,this.h=a}}var xt=new ot(()=>new As,t=>t.reset());class As{constructor(){this.next=this.g=this.h=null}set(n,r){this.h=n,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let jt,Bt=!1,Me=new at,Sn=()=>{const t=w.Promise.resolve(void 0);jt=()=>{t.then(Is)}};var Is=()=>{for(var t;t=c();){try{t.h.call(t.g)}catch(r){y(r)}var n=xt;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}Bt=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var Ss=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};w.addEventListener("test",r,n),w.removeEventListener("test",r,n)}catch{}return t}();function Vt(t,n){if(H.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(he){t:{try{et(n.nodeName);var m=!0;break t}catch{}m=!1}m||(n=null)}}else r=="mouseover"?n=t.fromElement:r=="mouseout"&&(n=t.toElement);this.relatedTarget=n,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ts[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Vt.aa.h.call(this)}}D(Vt,H);var Ts={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),bs=0;function Cs(t,n,r,a,m){this.listener=t,this.proxy=null,this.src=n,this.type=r,this.capture=!!a,this.ha=m,this.key=++bs,this.da=this.fa=!1}function ce(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ue(t){this.src=t,this.g={},this.h=0}ue.prototype.add=function(t,n,r,a,m){var _=t.toString();t=this.g[_],t||(t=this.g[_]=[],this.h++);var E=xe(t,n,a,m);return-1<E?(n=t[E],r||(n.fa=!1)):(n=new Cs(n,this.src,_,!!a,m),n.fa=r,t.push(n)),n};function Le(t,n){var r=n.type;if(r in t.g){var a=t.g[r],m=Array.prototype.indexOf.call(a,n,void 0),_;(_=0<=m)&&Array.prototype.splice.call(a,m,1),_&&(ce(n),t.g[r].length==0&&(delete t.g[r],t.h--))}}function xe(t,n,r,a){for(var m=0;m<t.length;++m){var _=t[m];if(!_.da&&_.listener==n&&_.capture==!!r&&_.ha==a)return m}return-1}var je="closure_lm_"+(1e6*Math.random()|0),Be={};function Tn(t,n,r,a,m){if(Array.isArray(n)){for(var _=0;_<n.length;_++)Tn(t,n[_],r,a,m);return null}return r=Dn(r),t&&t[le]?t.K(n,r,S(a)?!!a.capture:!1,m):Ds(t,n,r,!1,a,m)}function Ds(t,n,r,a,m,_){if(!n)throw Error("Invalid event type");var E=S(m)?!!m.capture:!!m,N=Fe(t);if(N||(t[je]=N=new ue(t)),r=N.add(n,r,a,E,_),r.proxy)return r;if(a=Ps(),r.proxy=a,a.src=t,a.listener=r,t.addEventListener)Ss||(m=E),m===void 0&&(m=!1),t.addEventListener(n.toString(),a,m);else if(t.attachEvent)t.attachEvent(Cn(n.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Ps(){function t(r){return n.call(t.src,t.listener,r)}const n=Rs;return t}function bn(t,n,r,a,m){if(Array.isArray(n))for(var _=0;_<n.length;_++)bn(t,n[_],r,a,m);else a=S(a)?!!a.capture:!!a,r=Dn(r),t&&t[le]?(t=t.i,n=String(n).toString(),n in t.g&&(_=t.g[n],r=xe(_,r,a,m),-1<r&&(ce(_[r]),Array.prototype.splice.call(_,r,1),_.length==0&&(delete t.g[n],t.h--)))):t&&(t=Fe(t))&&(n=t.g[n.toString()],t=-1,n&&(t=xe(n,r,a,m)),(r=-1<t?n[t]:null)&&Ve(r))}function Ve(t){if(typeof t!="number"&&t&&!t.da){var n=t.src;if(n&&n[le])Le(n.i,t);else{var r=t.type,a=t.proxy;n.removeEventListener?n.removeEventListener(r,a,t.capture):n.detachEvent?n.detachEvent(Cn(r),a):n.addListener&&n.removeListener&&n.removeListener(a),(r=Fe(n))?(Le(r,t),r.h==0&&(r.src=null,n[je]=null)):ce(t)}}}function Cn(t){return t in Be?Be[t]:Be[t]="on"+t}function Rs(t,n){if(t.da)t=!0;else{n=new Vt(n,this);var r=t.listener,a=t.ha||t.src;t.fa&&Ve(t),t=r.call(a,n)}return t}function Fe(t){return t=t[je],t instanceof ue?t:null}var Ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dn(t){return typeof t=="function"?t:(t[Ue]||(t[Ue]=function(n){return t.handleEvent(n)}),t[Ue])}function $(){ft.call(this),this.i=new ue(this),this.M=this,this.F=null}D($,ft),$.prototype[le]=!0,$.prototype.removeEventListener=function(t,n,r,a){bn(this,t,n,r,a)};function q(t,n){var r,a=t.F;if(a)for(r=[];a;a=a.F)r.push(a);if(t=t.M,a=n.type||n,typeof n=="string")n=new H(n,t);else if(n instanceof H)n.target=n.target||t;else{var m=n;n=new H(a,t),f(n,m)}if(m=!0,r)for(var _=r.length-1;0<=_;_--){var E=n.g=r[_];m=fe(E,a,!0,n)&&m}if(E=n.g=t,m=fe(E,a,!0,n)&&m,m=fe(E,a,!1,n)&&m,r)for(_=0;_<r.length;_++)E=n.g=r[_],m=fe(E,a,!1,n)&&m}$.prototype.N=function(){if($.aa.N.call(this),this.i){var t=this.i,n;for(n in t.g){for(var r=t.g[n],a=0;a<r.length;a++)ce(r[a]);delete t.g[n],t.h--}}this.F=null},$.prototype.K=function(t,n,r,a){return this.i.add(String(t),n,!1,r,a)},$.prototype.L=function(t,n,r,a){return this.i.add(String(t),n,!0,r,a)};function fe(t,n,r,a){if(n=t.i.g[String(n)],!n)return!0;n=n.concat();for(var m=!0,_=0;_<n.length;++_){var E=n[_];if(E&&!E.da&&E.capture==r){var N=E.listener,F=E.ha||E.src;E.fa&&Le(t.i,E),m=N.call(F,a)!==!1&&m}}return m&&!a.defaultPrevented}function Pn(t,n,r){if(typeof t=="function")r&&(t=I(t,r));else if(t&&typeof t.handleEvent=="function")t=I(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(n)?-1:w.setTimeout(t,n||0)}function Rn(t){t.g=Pn(()=>{t.g=null,t.i&&(t.i=!1,Rn(t))},t.l);const n=t.h;t.h=null,t.m.apply(null,n)}class Ns extends ft{constructor(n,r){super(),this.m=n,this.l=r,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:Rn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(t){ft.call(this),this.h=t,this.g={}}D(Ft,ft);var Nn=[];function On(t){nt(t.g,function(n,r){this.g.hasOwnProperty(r)&&Ve(n)},t),t.g={}}Ft.prototype.N=function(){Ft.aa.N.call(this),On(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var He=w.JSON.stringify,Os=w.JSON.parse,ks=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function $e(){}$e.prototype.h=null;function kn(t){return t.h||(t.h=t.i())}function Ms(){}var Ut={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ze(){H.call(this,"d")}D(ze,H);function Ge(){H.call(this,"c")}D(Ge,H);var Ct={},Mn=null;function We(){return Mn=Mn||new $}Ct.La="serverreachability";function Ln(t){H.call(this,Ct.La,t)}D(Ln,H);function Ht(t){const n=We();q(n,new Ln(n))}Ct.STAT_EVENT="statevent";function xn(t,n){H.call(this,Ct.STAT_EVENT,t),this.stat=n}D(xn,H);function X(t){const n=We();q(n,new xn(n,t))}Ct.Ma="timingevent";function jn(t,n){H.call(this,Ct.Ma,t),this.size=n}D(jn,H);function $t(t,n){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},n)}function zt(){this.g=!0}zt.prototype.xa=function(){this.g=!1};function Ls(t,n,r,a,m,_){t.info(function(){if(t.g)if(_)for(var E="",N=_.split("&"),F=0;F<N.length;F++){var P=N[F].split("=");if(1<P.length){var z=P[0];P=P[1];var G=z.split("_");E=2<=G.length&&G[1]=="type"?E+(z+"="+P+"&"):E+(z+"=redacted&")}}else E=null;else E=_;return"XMLHTTP REQ ("+a+") [attempt "+m+"]: "+n+`
`+r+`
`+E})}function xs(t,n,r,a,m,_,E){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+m+"]: "+n+`
`+r+`
`+_+" "+E})}function Dt(t,n,r,a){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+Bs(t,r)+(a?" "+a:"")})}function js(t,n){t.info(function(){return"TIMEOUT: "+n})}zt.prototype.info=function(){};function Bs(t,n){if(!t.g)return n;if(!n)return null;try{var r=JSON.parse(n);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var a=r[t];if(!(2>a.length)){var m=a[1];if(Array.isArray(m)&&!(1>m.length)){var _=m[0];if(_!="noop"&&_!="stop"&&_!="close")for(var E=1;E<m.length;E++)m[E]=""}}}}return He(r)}catch{return n}}var qe={NO_ERROR:0,TIMEOUT:8},Vs={},Xe;function de(){}D(de,$e),de.prototype.g=function(){return new XMLHttpRequest},de.prototype.i=function(){return{}},Xe=new de;function dt(t,n,r,a){this.j=t,this.i=n,this.l=r,this.R=a||1,this.U=new Ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bn}function Bn(){this.i=null,this.g="",this.h=!1}var Vn={},Je={};function Ke(t,n,r){t.L=1,t.v=ye(ht(n)),t.m=r,t.P=!0,Fn(t,null)}function Fn(t,n){t.F=Date.now(),pe(t),t.A=ht(t.v);var r=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),ti(r.i,"t",a),t.C=0,r=t.j.J,t.h=new Bn,t.g=_i(t.j,r?n:null,!t.m),0<t.O&&(t.M=new Ns(I(t.Y,t,t.g),t.O)),n=t.U,r=t.g,a=t.ca;var m="readystatechange";Array.isArray(m)||(m&&(Nn[0]=m.toString()),m=Nn);for(var _=0;_<m.length;_++){var E=Tn(r,m[_],a||n.handleEvent,!1,n.h||n);if(!E)break;n.g[E.key]=E}n=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),Ht(),Ls(t.i,t.u,t.A,t.l,t.R,t.m)}dt.prototype.ca=function(t){t=t.target;const n=this.M;n&&lt(t)==3?n.j():this.Y(t)},dt.prototype.Y=function(t){try{if(t==this.g)t:{const G=lt(this.g);var n=this.g.Ba();const Nt=this.g.Z();if(!(3>G)&&(G!=3||this.g&&(this.h.h||this.g.oa()||ai(this.g)))){this.J||G!=4||n==7||(n==8||0>=Nt?Ht(3):Ht(2)),Ye(this);var r=this.g.Z();this.X=r;e:if(Un(this)){var a=ai(this.g);t="";var m=a.length,_=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_t(this),Gt(this);var E="";break e}this.h.i=new w.TextDecoder}for(n=0;n<m;n++)this.h.h=!0,t+=this.h.i.decode(a[n],{stream:!(_&&n==m-1)});a.length=0,this.h.g+=t,this.C=0,E=this.h.g}else E=this.g.oa();if(this.o=r==200,xs(this.i,this.u,this.A,this.l,this.R,G,r),this.o){if(this.T&&!this.K){e:{if(this.g){var N,F=this.g;if((N=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(N)){var P=N;break e}}P=null}if(r=P)Dt(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ze(this,r);else{this.o=!1,this.s=3,X(12),_t(this),Gt(this);break t}}if(this.P){r=!0;let Y;for(;!this.J&&this.C<E.length;)if(Y=Fs(this,E),Y==Je){G==4&&(this.s=4,X(14),r=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}else if(Y==Vn){this.s=4,X(15),Dt(this.i,this.l,E,"[Invalid Chunk]"),r=!1;break}else Dt(this.i,this.l,Y,null),Ze(this,Y);if(Un(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||E.length!=0||this.h.h||(this.s=1,X(16),r=!1),this.o=this.o&&r,!r)Dt(this.i,this.l,E,"[Invalid Chunked Response]"),_t(this),Gt(this);else if(0<E.length&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.ba&&!z.M&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),rn(z),z.M=!0,X(11))}}else Dt(this.i,this.l,E,null),Ze(this,E);G==4&&_t(this),this.o&&!this.J&&(G==4?pi(this.j,this):(this.o=!1,pe(this)))}else ir(this.g),r==400&&0<E.indexOf("Unknown SID")?(this.s=3,X(12)):(this.s=0,X(13)),_t(this),Gt(this)}}}catch{}finally{}};function Un(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Fs(t,n){var r=t.C,a=n.indexOf(`
`,r);return a==-1?Je:(r=Number(n.substring(r,a)),isNaN(r)?Vn:(a+=1,a+r>n.length?Je:(n=n.slice(a,a+r),t.C=a+r,n)))}dt.prototype.cancel=function(){this.J=!0,_t(this)};function pe(t){t.S=Date.now()+t.I,Hn(t,t.I)}function Hn(t,n){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$t(I(t.ba,t),n)}function Ye(t){t.B&&(w.clearTimeout(t.B),t.B=null)}dt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(js(this.i,this.A),this.L!=2&&(Ht(),X(17)),_t(this),this.s=2,Gt(this)):Hn(this,this.S-t)};function Gt(t){t.j.G==0||t.J||pi(t.j,t)}function _t(t){Ye(t);var n=t.M;n&&typeof n.ma=="function"&&n.ma(),t.M=null,On(t.U),t.g&&(n=t.g,t.g=null,n.abort(),n.ma())}function Ze(t,n){try{var r=t.j;if(r.G!=0&&(r.g==t||Qe(r.h,t))){if(!t.K&&Qe(r.h,t)&&r.G==3){try{var a=r.Da.g.parse(n)}catch{a=null}if(Array.isArray(a)&&a.length==3){var m=a;if(m[0]==0){t:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)Ie(r),Ee(r);else break t;sn(r),X(18)}}else r.za=m[1],0<r.za-r.T&&37500>m[2]&&r.F&&r.v==0&&!r.C&&(r.C=$t(I(r.Za,r),6e3));if(1>=Gn(r.h)&&r.ca){try{r.ca()}catch{}r.ca=void 0}}else wt(r,11)}else if((t.K||r.g==t)&&Ie(r),!W(n))for(m=r.Da.g.parse(n),n=0;n<m.length;n++){let P=m[n];if(r.T=P[0],P=P[1],r.G==2)if(P[0]=="c"){r.K=P[1],r.ia=P[2];const z=P[3];z!=null&&(r.la=z,r.j.info("VER="+r.la));const G=P[4];G!=null&&(r.Aa=G,r.j.info("SVER="+r.Aa));const Nt=P[5];Nt!=null&&typeof Nt=="number"&&0<Nt&&(a=1.5*Nt,r.L=a,r.j.info("backChannelRequestTimeoutMs_="+a)),a=r;const Y=t.g;if(Y){const Se=Y.g?Y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Se){var _=a.h;_.g||Se.indexOf("spdy")==-1&&Se.indexOf("quic")==-1&&Se.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(tn(_,_.h),_.h=null))}if(a.D){const on=Y.g?Y.g.getResponseHeader("X-HTTP-Session-Id"):null;on&&(a.ya=on,O(a.I,a.D,on))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),a=r;var E=t;if(a.qa=yi(a,a.J?a.ia:null,a.W),E.K){Wn(a.h,E);var N=E,F=a.L;F&&(N.I=F),N.B&&(Ye(N),pe(N)),a.g=E}else fi(a);0<r.i.length&&Ae(r)}else P[0]!="stop"&&P[0]!="close"||wt(r,7);else r.G==3&&(P[0]=="stop"||P[0]=="close"?P[0]=="stop"?wt(r,7):nn(r):P[0]!="noop"&&r.l&&r.l.ta(P),r.v=0)}}Ht(4)}catch{}}var Us=class{constructor(t,n){this.g=t,this.map=n}};function $n(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gn(t){return t.h?1:t.g?t.g.size:0}function Qe(t,n){return t.h?t.h==n:t.g?t.g.has(n):!1}function tn(t,n){t.g?t.g.add(n):t.h=n}function Wn(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}$n.prototype.cancel=function(){if(this.i=qn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let n=t.i;for(const r of t.g.values())n=n.concat(r.D);return n}return V(t.i)}function Hs(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(A(t)){for(var n=[],r=t.length,a=0;a<r;a++)n.push(t[a]);return n}n=[],r=0;for(a in t)n[r++]=t[a];return n}function $s(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(A(t)||typeof t=="string"){var n=[];t=t.length;for(var r=0;r<t;r++)n.push(r);return n}n=[],r=0;for(const a in t)n[r++]=a;return n}}}function Xn(t,n){if(t.forEach&&typeof t.forEach=="function")t.forEach(n,void 0);else if(A(t)||typeof t=="string")Array.prototype.forEach.call(t,n,void 0);else for(var r=$s(t),a=Hs(t),m=a.length,_=0;_<m;_++)n.call(void 0,a[_],r&&r[_],t)}var Jn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zs(t,n){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var a=t[r].indexOf("="),m=null;if(0<=a){var _=t[r].substring(0,a);m=t[r].substring(a+1)}else _=t[r];n(_,m?decodeURIComponent(m.replace(/\+/g," ")):"")}}}function vt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof vt){this.h=t.h,ge(this,t.j),this.o=t.o,this.g=t.g,me(this,t.s),this.l=t.l;var n=t.i,r=new Xt;r.i=n.i,n.g&&(r.g=new Map(n.g),r.h=n.h),Kn(this,r),this.m=t.m}else t&&(n=String(t).match(Jn))?(this.h=!1,ge(this,n[1]||"",!0),this.o=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),me(this,n[4]),this.l=Wt(n[5]||"",!0),Kn(this,n[6]||"",!0),this.m=Wt(n[7]||"")):(this.h=!1,this.i=new Xt(null,this.h))}vt.prototype.toString=function(){var t=[],n=this.j;n&&t.push(qt(n,Yn,!0),":");var r=this.g;return(r||n=="file")&&(t.push("//"),(n=this.o)&&t.push(qt(n,Yn,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(qt(r,r.charAt(0)=="/"?qs:Ws,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",qt(r,Js)),t.join("")};function ht(t){return new vt(t)}function ge(t,n,r){t.j=r?Wt(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function me(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.s=n}else t.s=null}function Kn(t,n,r){n instanceof Xt?(t.i=n,Ks(t.i,t.h)):(r||(n=qt(n,Xs)),t.i=new Xt(n,t.h))}function O(t,n,r){t.i.set(n,r)}function ye(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wt(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qt(t,n,r){return typeof t=="string"?(t=encodeURI(t).replace(n,Gs),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Gs(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yn=/[#\/\?@]/g,Ws=/[#\?:]/g,qs=/[#\?]/g,Xs=/[#\?@]/g,Js=/#/g;function Xt(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function pt(t){t.g||(t.g=new Map,t.h=0,t.i&&zs(t.i,function(n,r){t.add(decodeURIComponent(n.replace(/\+/g," ")),r)}))}s=Xt.prototype,s.add=function(t,n){pt(this),this.i=null,t=Pt(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(n),this.h+=1,this};function Zn(t,n){pt(t),n=Pt(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function Qn(t,n){return pt(t),n=Pt(t,n),t.g.has(n)}s.forEach=function(t,n){pt(this),this.g.forEach(function(r,a){r.forEach(function(m){t.call(n,m,a,this)},this)},this)},s.na=function(){pt(this);const t=Array.from(this.g.values()),n=Array.from(this.g.keys()),r=[];for(let a=0;a<n.length;a++){const m=t[a];for(let _=0;_<m.length;_++)r.push(n[a])}return r},s.V=function(t){pt(this);let n=[];if(typeof t=="string")Qn(this,t)&&(n=n.concat(this.g.get(Pt(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)n=n.concat(t[r])}return n},s.set=function(t,n){return pt(this),this.i=null,t=Pt(this,t),Qn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},s.get=function(t,n){return t?(t=this.V(t),0<t.length?String(t[0]):n):n};function ti(t,n,r){Zn(t,n),0<r.length&&(t.i=null,t.g.set(Pt(t,n),V(r)),t.h+=r.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(var r=0;r<n.length;r++){var a=n[r];const _=encodeURIComponent(String(a)),E=this.V(a);for(a=0;a<E.length;a++){var m=_;E[a]!==""&&(m+="="+encodeURIComponent(String(E[a]))),t.push(m)}}return this.i=t.join("&")};function Pt(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Ks(t,n){n&&!t.j&&(pt(t),t.i=null,t.g.forEach(function(r,a){var m=a.toLowerCase();a!=m&&(Zn(this,a),ti(this,m,r))},t)),t.j=n}function Ys(t,n){const r=new zt;if(w.Image){const a=new Image;a.onload=B(gt,r,"TestLoadImage: loaded",!0,n,a),a.onerror=B(gt,r,"TestLoadImage: error",!1,n,a),a.onabort=B(gt,r,"TestLoadImage: abort",!1,n,a),a.ontimeout=B(gt,r,"TestLoadImage: timeout",!1,n,a),w.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else n(!1)}function Zs(t,n){const r=new zt,a=new AbortController,m=setTimeout(()=>{a.abort(),gt(r,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:a.signal}).then(_=>{clearTimeout(m),_.ok?gt(r,"TestPingServer: ok",!0,n):gt(r,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(m),gt(r,"TestPingServer: error",!1,n)})}function gt(t,n,r,a,m){try{m&&(m.onload=null,m.onerror=null,m.onabort=null,m.ontimeout=null),a(r)}catch{}}function Qs(){this.g=new ks}function tr(t,n,r){const a=r||"";try{Xn(t,function(m,_){let E=m;S(m)&&(E=He(m)),n.push(a+_+"="+encodeURIComponent(E))})}catch(m){throw n.push(a+"type="+encodeURIComponent("_badmap")),m}}function _e(t){this.l=t.Ub||null,this.j=t.eb||!1}D(_e,$e),_e.prototype.g=function(){return new ve(this.l,this.j)},_e.prototype.i=function(t){return function(){return t}}({});function ve(t,n){$.call(this),this.D=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ve,$),s=ve.prototype,s.open=function(t,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=n,this.readyState=1,Kt(this)},s.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||w).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jt(this)),this.readyState=0},s.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Kt(this)),this.g&&(this.readyState=3,Kt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ei(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ei(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}s.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Jt(this):Kt(this),this.readyState==3&&ei(this)}},s.Ra=function(t){this.g&&(this.response=this.responseText=t,Jt(this))},s.Qa=function(t){this.g&&(this.response=t,Jt(this))},s.ga=function(){this.g&&Jt(this)};function Jt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Kt(t)}s.setRequestHeader=function(t,n){this.u.append(t,n)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var r=n.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=n.next();return t.join(`\r
`)};function Kt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ve.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ni(t){let n="";return nt(t,function(r,a){n+=a,n+=":",n+=r,n+=`\r
`}),n}function en(t,n,r){t:{for(a in r){var a=!1;break t}a=!0}a||(r=ni(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):O(t,n,r))}function L(t){$.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(L,$);var er=/^https?$/i,nr=["POST","PUT"];s=L.prototype,s.Ha=function(t){this.J=t},s.ea=function(t,n,r,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xe.g(),this.v=this.o?kn(this.o):kn(Xe),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(_){ii(this,_);return}if(t=r||"",r=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var m in a)r.set(m,a[m]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const _ of a.keys())r.set(_,a.get(_));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(r.keys()).find(_=>_.toLowerCase()=="content-type"),m=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(nr,n,void 0))||a||m||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,E]of r)this.g.setRequestHeader(_,E);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oi(this),this.u=!0,this.g.send(t),this.u=!1}catch(_){ii(this,_)}};function ii(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.m=5,si(t),we(t)}function si(t){t.A||(t.A=!0,q(t,"complete"),q(t,"error"))}s.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,q(this,"complete"),q(this,"abort"),we(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),we(this,!0)),L.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?ri(this):this.bb())},s.bb=function(){ri(this)};function ri(t){if(t.h&&typeof v<"u"&&(!t.v[1]||lt(t)!=4||t.Z()!=2)){if(t.u&&lt(t)==4)Pn(t.Ea,0,t);else if(q(t,"readystatechange"),lt(t)==4){t.h=!1;try{const E=t.Z();t:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var r;if(!(r=n)){var a;if(a=E===0){var m=String(t.D).match(Jn)[1]||null;!m&&w.self&&w.self.location&&(m=w.self.location.protocol.slice(0,-1)),a=!er.test(m?m.toLowerCase():"")}r=a}if(r)q(t,"complete"),q(t,"success");else{t.m=6;try{var _=2<lt(t)?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.Z()+"]",si(t)}}finally{we(t)}}}}function we(t,n){if(t.g){oi(t);const r=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,n||q(t,"ready");try{r.onreadystatechange=a}catch{}}}function oi(t){t.I&&(w.clearTimeout(t.I),t.I=null)}s.isActive=function(){return!!this.g};function lt(t){return t.g?t.g.readyState:0}s.Z=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(t){if(this.g){var n=this.g.responseText;return t&&n.indexOf(t)==0&&(n=n.substring(t.length)),Os(n)}};function ai(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ir(t){const n={};t=(t.g&&2<=lt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(W(t[a]))continue;var r=d(t[a]);const m=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const _=n[m]||[];n[m]=_,_.push(r)}g(n,function(a){return a.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yt(t,n,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||n}function hi(t){this.Aa=0,this.i=[],this.j=new zt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yt("baseRetryDelayMs",5e3,t),this.cb=Yt("retryDelaySeedMs",1e4,t),this.Wa=Yt("forwardChannelMaxRetries",2,t),this.wa=Yt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new $n(t&&t.concurrentRequestLimit),this.Da=new Qs,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=hi.prototype,s.la=8,s.G=1,s.connect=function(t,n,r,a){X(0),this.W=t,this.H=n||{},r&&a!==void 0&&(this.H.OSID=r,this.H.OAID=a),this.F=this.X,this.I=yi(this,null,this.W),Ae(this)};function nn(t){if(li(t),t.G==3){var n=t.U++,r=ht(t.I);if(O(r,"SID",t.K),O(r,"RID",n),O(r,"TYPE","terminate"),Zt(t,r),n=new dt(t,t.j,n),n.L=2,n.v=ye(ht(r)),r=!1,w.navigator&&w.navigator.sendBeacon)try{r=w.navigator.sendBeacon(n.v.toString(),"")}catch{}!r&&w.Image&&(new Image().src=n.v,r=!0),r||(n.g=_i(n.j,null),n.g.ea(n.v)),n.F=Date.now(),pe(n)}mi(t)}function Ee(t){t.g&&(rn(t),t.g.cancel(),t.g=null)}function li(t){Ee(t),t.u&&(w.clearTimeout(t.u),t.u=null),Ie(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function Ae(t){if(!zn(t.h)&&!t.s){t.s=!0;var n=t.Ga;jt||Sn(),Bt||(jt(),Bt=!0),Me.add(n,t),t.B=0}}function sr(t,n){return Gn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=n.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=$t(I(t.Ga,t,n),gi(t,t.B)),t.B++,!0)}s.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const m=new dt(this,this.j,t);let _=this.o;if(this.S&&(_?(_=l(_),f(_,this.S)):_=this.S),this.m!==null||this.O||(m.H=_,_=null),this.P)t:{for(var n=0,r=0;r<this.i.length;r++){e:{var a=this.i[r];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(n+=a,4096<n){n=r;break t}if(n===4096||r===this.i.length-1){n=r+1;break t}}n=1e3}else n=1e3;n=ui(this,m,n),r=ht(this.I),O(r,"RID",t),O(r,"CVER",22),this.D&&O(r,"X-HTTP-Session-Id",this.D),Zt(this,r),_&&(this.O?n="headers="+encodeURIComponent(String(ni(_)))+"&"+n:this.m&&en(r,this.m,_)),tn(this.h,m),this.Ua&&O(r,"TYPE","init"),this.P?(O(r,"$req",n),O(r,"SID","null"),m.T=!0,Ke(m,r,null)):Ke(m,r,n),this.G=2}}else this.G==3&&(t?ci(this,t):this.i.length==0||zn(this.h)||ci(this))};function ci(t,n){var r;n?r=n.l:r=t.U++;const a=ht(t.I);O(a,"SID",t.K),O(a,"RID",r),O(a,"AID",t.T),Zt(t,a),t.m&&t.o&&en(a,t.m,t.o),r=new dt(t,t.j,r,t.B+1),t.m===null&&(r.H=t.o),n&&(t.i=n.D.concat(t.i)),n=ui(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),tn(t.h,r),Ke(r,a,n)}function Zt(t,n){t.H&&nt(t.H,function(r,a){O(n,a,r)}),t.l&&Xn({},function(r,a){O(n,a,r)})}function ui(t,n,r){r=Math.min(t.i.length,r);var a=t.l?I(t.l.Na,t.l,t):null;t:{var m=t.i;let _=-1;for(;;){const E=["count="+r];_==-1?0<r?(_=m[0].g,E.push("ofs="+_)):_=0:E.push("ofs="+_);let N=!0;for(let F=0;F<r;F++){let P=m[F].g;const z=m[F].map;if(P-=_,0>P)_=Math.max(0,m[F].g-100),N=!1;else try{tr(z,E,"req"+P+"_")}catch{a&&a(z)}}if(N){a=E.join("&");break t}}}return t=t.i.splice(0,r),n.D=t,a}function fi(t){if(!t.g&&!t.u){t.Y=1;var n=t.Fa;jt||Sn(),Bt||(jt(),Bt=!0),Me.add(n,t),t.v=0}}function sn(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=$t(I(t.Fa,t),gi(t,t.v)),t.v++,!0)}s.Fa=function(){if(this.u=null,di(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=$t(I(this.ab,this),t)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,X(10),Ee(this),di(this))};function rn(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function di(t){t.g=new dt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var n=ht(t.qa);O(n,"RID","rpc"),O(n,"SID",t.K),O(n,"AID",t.T),O(n,"CI",t.F?"0":"1"),!t.F&&t.ja&&O(n,"TO",t.ja),O(n,"TYPE","xmlhttp"),Zt(t,n),t.m&&t.o&&en(n,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=ye(ht(n)),r.m=null,r.P=!0,Fn(r,t)}s.Za=function(){this.C!=null&&(this.C=null,Ee(this),sn(this),X(19))};function Ie(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function pi(t,n){var r=null;if(t.g==n){Ie(t),rn(t),t.g=null;var a=2}else if(Qe(t.h,n))r=n.D,Wn(t.h,n),a=1;else return;if(t.G!=0){if(n.o)if(a==1){r=n.m?n.m.length:0,n=Date.now()-n.F;var m=t.B;a=We(),q(a,new jn(a,r)),Ae(t)}else fi(t);else if(m=n.s,m==3||m==0&&0<n.X||!(a==1&&sr(t,n)||a==2&&sn(t)))switch(r&&0<r.length&&(n=t.h,n.i=n.i.concat(r)),m){case 1:wt(t,5);break;case 4:wt(t,10);break;case 3:wt(t,6);break;default:wt(t,2)}}}function gi(t,n){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*n}function wt(t,n){if(t.j.info("Error code "+n),n==2){var r=I(t.fb,t),a=t.Xa;const m=!a;a=new vt(a||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||ge(a,"https"),ye(a),m?Ys(a.toString(),r):Zs(a.toString(),r)}else X(2);t.G=0,t.l&&t.l.sa(n),mi(t),li(t)}s.fb=function(t){t?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function mi(t){if(t.G=0,t.ka=[],t.l){const n=qn(t.h);(n.length!=0||t.i.length!=0)&&(k(t.ka,n),k(t.ka,t.i),t.h.i.length=0,V(t.i),t.i.length=0),t.l.ra()}}function yi(t,n,r){var a=r instanceof vt?ht(r):new vt(r);if(a.g!="")n&&(a.g=n+"."+a.g),me(a,a.s);else{var m=w.location;a=m.protocol,n=n?n+"."+m.hostname:m.hostname,m=+m.port;var _=new vt(null);a&&ge(_,a),n&&(_.g=n),m&&me(_,m),r&&(_.l=r),a=_}return r=t.D,n=t.ya,r&&n&&O(a,r,n),O(a,"VER",t.la),Zt(t,a),a}function _i(t,n,r){if(n&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return n=t.Ca&&!t.pa?new L(new _e({eb:r})):new L(t.pa),n.Ha(t.J),n}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function vi(){}s=vi.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function K(t,n){$.call(this),this.g=new hi(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(t?t["X-WebChannel-Client-Profile"]=n.va:t={"X-WebChannel-Client-Profile":n.va}),this.g.S=t,(t=n&&n.Sb)&&!W(t)&&(this.g.m=t),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!W(n)&&(this.g.D=n,t=this.h,t!==null&&n in t&&(t=this.h,n in t&&delete t[n])),this.j=new Rt(this)}D(K,$),K.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},K.prototype.close=function(){nn(this.g)},K.prototype.o=function(t){var n=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.u&&(r={},r.__data__=He(t),t=r);n.i.push(new Us(n.Ya++,t)),n.G==3&&Ae(n)},K.prototype.N=function(){this.g.l=null,delete this.j,nn(this.g),delete this.g,K.aa.N.call(this)};function wi(t){ze.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){t:{for(const r in n){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,n=n!==null&&t in n?n[t]:void 0),this.data=n}else this.data=t}D(wi,ze);function Ei(){Ge.call(this),this.status=1}D(Ei,Ge);function Rt(t){this.g=t}D(Rt,vi),Rt.prototype.ua=function(){q(this.g,"a")},Rt.prototype.ta=function(t){q(this.g,new wi(t))},Rt.prototype.sa=function(t){q(this.g,new Ei)},Rt.prototype.ra=function(){q(this.g,"b")},K.prototype.send=K.prototype.o,K.prototype.open=K.prototype.m,K.prototype.close=K.prototype.close,qe.NO_ERROR=0,qe.TIMEOUT=8,qe.HTTP_ERROR=6,Vs.COMPLETE="complete",Ms.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",$.prototype.listen=$.prototype.K,L.prototype.listenOnce=L.prototype.L,L.prototype.getLastError=L.prototype.Ka,L.prototype.getLastErrorCode=L.prototype.Ba,L.prototype.getStatus=L.prototype.Z,L.prototype.getResponseJson=L.prototype.Oa,L.prototype.getResponseText=L.prototype.oa,L.prototype.send=L.prototype.ea,L.prototype.setWithCredentials=L.prototype.Ha}).apply(typeof Te<"u"?Te:typeof self<"u"?self:typeof window<"u"?window:{});const Mi="@firebase/firestore",Li="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new rs("@firebase/firestore");function Q(s,...e){if(Mt.logLevel<=R.DEBUG){const i=e.map(wn);Mt.debug(`Firestore (${oe}): ${s}`,...i)}}function us(s,...e){if(Mt.logLevel<=R.ERROR){const i=e.map(wn);Mt.error(`Firestore (${oe}): ${s}`,...i)}}function Ho(s,...e){if(Mt.logLevel<=R.WARN){const i=e.map(wn);Mt.warn(`Firestore (${oe}): ${s}`,...i)}}function wn(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(s,e,i){let o="Unexpected state";typeof e=="string"?o=e:i=e,fs(s,o,i)}function fs(s,e,i){let o=`FIRESTORE (${oe}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(i!==void 0)try{o+=" CONTEXT: "+JSON.stringify(i)}catch{o+=" CONTEXT: "+i}throw us(o),new Error(o)}function te(s,e,i,o){let h="Unexpected state";typeof i=="string"?h=i:o=i,s||fs(e,h,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class C extends Lt{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $o{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(J.UNAUTHENTICATED))}shutdown(){}}class zo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Go{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){te(this.o===void 0,42304);let o=this.i;const h=A=>this.i!==o?(o=this.i,i(A)):Promise.resolve();let p=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),p.resolve(),p=new ee,e.enqueueRetryable(()=>h(this.currentUser))};const v=()=>{const A=p;e.enqueueRetryable(async()=>{await A.promise,await h(this.currentUser)})},w=A=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),v())};this.t.onInit(A=>w(A)),setTimeout(()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?w(A):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),p.resolve(),p=new ee)}},0),v()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(o=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(te(typeof o.accessToken=="string",31837,{l:o}),new ds(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new J(e)}}class Wo{constructor(e,i,o){this.P=e,this.T=i,this.I=o,this.type="FirstParty",this.user=J.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qo{constructor(e,i,o){this.P=e,this.T=i,this.I=o}getToken(){return Promise.resolve(new Wo(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable(()=>i(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xo{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,To(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){te(this.o===void 0,3512);const o=p=>{p.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${p.error.message}`);const v=p.token!==this.m;return this.m=p.token,Q("FirebaseAppCheckTokenProvider",`Received ${v?"new":"existing"} token.`),v?i(p.token):Promise.resolve()};this.o=p=>{e.enqueueRetryable(()=>o(p))};const h=p=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=p,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(p=>h(p)),setTimeout(()=>{if(!this.appCheck){const p=this.V.getImmediate({optional:!0});p?h(p):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xi(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(te(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new xi(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let o=0;o<s;o++)i[o]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let o="";for(;o.length<20;){const h=Jo(40);for(let p=0;p<h.length;++p)o.length<20&&h[p]<i&&(o+=e.charAt(h[p]%62))}return o}}function tt(s,e){return s<e?-1:s>e?1:0}function Zo(s,e){let i=0;for(;i<s.length&&i<e.length;){const o=s.codePointAt(i),h=e.codePointAt(i);if(o!==h){if(o<128&&h<128)return tt(o,h);{const p=Ko(),v=Qo(p.encode(ji(s,i)),p.encode(ji(e,i)));return v!==0?v:tt(o,h)}}i+=o>65535?2:1}return tt(s.length,e.length)}function ji(s,e){return s.codePointAt(e)>65535?s.substring(e,e+2):s.substring(e,e+1)}function Qo(s,e){for(let i=0;i<s.length&&i<e.length;++i)if(s[i]!==e[i])return tt(s[i],e[i]);return tt(s.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="__name__";class it{constructor(e,i,o){i===void 0?i=0:i>e.length&&re(637,{offset:i,range:e.length}),o===void 0?o=e.length-i:o>e.length-i&&re(1746,{length:o,range:e.length-i}),this.segments=e,this.offset=i,this.len=o}get length(){return this.len}isEqual(e){return it.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof it?e.forEach(o=>{i.push(o)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,o=this.limit();i<o;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const o=Math.min(e.length,i.length);for(let h=0;h<o;h++){const p=it.compareSegments(e.get(h),i.get(h));if(p!==0)return p}return tt(e.length,i.length)}static compareSegments(e,i){const o=it.isNumericId(e),h=it.isNumericId(i);return o&&!h?-1:!o&&h?1:o&&h?it.extractNumericId(e).compare(it.extractNumericId(i)):Zo(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vn.fromString(e.substring(4,e.length-2))}}class Z extends it{construct(e,i,o){return new Z(e,i,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const o of e){if(o.indexOf("//")>=0)throw new C(b.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);i.push(...o.split("/").filter(h=>h.length>0))}return new Z(i)}static emptyPath(){return new Z([])}}const ta=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends it{construct(e,i,o){return new At(e,i,o)}static isValidIdentifier(e){return ta.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bi}static keyField(){return new At([Bi])}static fromServerFormat(e){const i=[];let o="",h=0;const p=()=>{if(o.length===0)throw new C(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(o),o=""};let v=!1;for(;h<e.length;){const w=e[h];if(w==="\\"){if(h+1===e.length)throw new C(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const A=e[h+1];if(A!=="\\"&&A!=="."&&A!=="`")throw new C(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);o+=A,h+=2}else w==="`"?(v=!v,h++):w!=="."||v?(o+=w,h++):(p(),h++)}if(p(),v)throw new C(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(i)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.path=e}static fromPath(e){return new It(Z.fromString(e))}static fromName(e){return new It(Z.fromString(e).popFirst(5))}static empty(){return new It(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return Z.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new It(new Z(e.slice()))}}function ea(s,e,i,o){if(e===!0&&o===!0)throw new C(b.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function na(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function ia(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":re(12329,{type:typeof s})}function sa(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new C(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=ia(s);throw new C(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(s,e){const i={typeString:s};return e&&(i.value=e),i}function ae(s,e){if(!na(s))throw new C(b.INVALID_ARGUMENT,"JSON must be an object");let i;for(const o in e)if(e[o]){const h=e[o].typeString,p="value"in e[o]?{value:e[o].value}:void 0;if(!(o in s)){i=`JSON missing required field: '${o}'`;break}const v=s[o];if(h&&typeof v!==h){i=`JSON field '${o}' must be a ${h}.`;break}if(p!==void 0&&v!==p.value){i=`Expected '${o}' field to equal '${p.value}'`;break}}if(i)throw new C(b.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=-62135596800,Fi=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),o=Math.floor((e-1e3*i)*Fi);return new st(i,o)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new C(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new C(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Vi)throw new C(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fi}_compareTo(e){return this.seconds===e.seconds?tt(this.nanoseconds,e.nanoseconds):tt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ae(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vi;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:j("string",st._jsonSchemaVersion),seconds:j("number"),nanoseconds:j("number")};function ra(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(h){try{return atob(h)}catch(p){throw typeof DOMException<"u"&&p instanceof DOMException?new oa("Invalid base64 string: "+p):p}}(e);return new bt(i)}static fromUint8Array(e){const i=function(h){let p="";for(let v=0;v<h.length;++v)p+=String.fromCharCode(h[v]);return p}(e);return new bt(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const o=new Uint8Array(i.length);for(let h=0;h<i.length;h++)o[h]=i.charCodeAt(h);return o}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return tt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const yn="(default)";class Oe{constructor(e,i){this.projectId=e,this.database=i||yn}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database===yn}isEqual(e){return e instanceof Oe&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,i=null,o=[],h=[],p=null,v="F",w=null,A=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=o,this.filters=h,this.limit=p,this.limitType=v,this.startAt=w,this.endAt=A,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ha(s){return new aa(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui,T;(T=Ui||(Ui={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new vn([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=1048576;function un(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,i,o=1e3,h=1.5,p=6e4){this.Fi=e,this.timerId=i,this.d_=o,this.E_=h,this.A_=p,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const i=Math.floor(this.R_+this.p_()),o=Math.max(0,Date.now()-this.m_),h=Math.max(0,i-o);h>0&&Q("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.R_} ms, delay with jitter: ${i} ms, last attempt: ${o} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,h,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,i,o,h,p){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=o,this.op=h,this.removalCallback=p,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(v=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,o,h,p){const v=Date.now()+o,w=new En(e,i,v,h,p);return w.start(o),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Hi,$i;($i=Hi||(Hi={})).Fa="default",$i.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="firestore.googleapis.com",Gi=!0;class Wi{constructor(e){var i,o;if(e.host===void 0){if(e.ssl!==void 0)throw new C(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ps,this.ssl=Gi}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:Gi;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=la;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ca)throw new C(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ea("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fa((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(p){if(p.timeoutSeconds!==void 0){if(isNaN(p.timeoutSeconds))throw new C(b.INVALID_ARGUMENT,`invalid long polling timeout: ${p.timeoutSeconds} (must not be NaN)`);if(p.timeoutSeconds<5)throw new C(b.INVALID_ARGUMENT,`invalid long polling timeout: ${p.timeoutSeconds} (minimum allowed value is 5)`);if(p.timeoutSeconds>30)throw new C(b.INVALID_ARGUMENT,`invalid long polling timeout: ${p.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,h){return o.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gs{constructor(e,i,o,h){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wi({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new C(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wi(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new $o;switch(o.type){case"firstParty":return new qo(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new C(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const o=zi.get(i);o&&(Q("ComponentProvider","Removing Datastore"),zi.delete(i),o.terminate())}(this),Promise.resolve()}}function da(s,e,i,o={}){var h;s=sa(s,gs);const p=is(e),v=s._getSettings(),w=Object.assign(Object.assign({},v),{emulatorOptions:s._getEmulatorOptions()}),A=`${e}:${i}`;p&&(yr(`https://${A}`),Er("Firestore",!0)),v.host!==ps&&v.host!==A&&Ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const S=Object.assign(Object.assign({},v),{host:A,ssl:p,emulatorOptions:o});if(!Pe(S,w)&&(s._setSettings(S),o.mockUserToken)){let x,M;if(typeof o.mockUserToken=="string")x=o.mockUserToken,M=J.MOCK_USER;else{x=_r(o.mockUserToken,(h=s._app)===null||h===void 0?void 0:h.options.projectId);const I=o.mockUserToken.sub||o.mockUserToken.user_id;if(!I)throw new C(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");M=new J(I)}s._authCredentials=new zo(new ds(x,M))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,i,o){this.converter=i,this._query=o,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class rt{constructor(e,i,o){this.converter=i,this._key=o,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,o){if(ae(i,rt._jsonSchema))return new rt(e,o||null,new It(Z.fromString(i.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:j("string",rt._jsonSchemaVersion),referencePath:j("string")};class In extends An{constructor(e,i,o){super(e,i,ha(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new It(e))}withConverter(e){return new In(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="AsyncQueue";class Xi{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ua(this,"async_queue_retry"),this.oc=()=>{const o=un();o&&Q(qi,"Visibility state changed to "+o.visibilityState),this.F_.y_()},this._c=e;const i=un();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const i=un();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const i=new ee;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ra(e))throw e;Q(qi,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const i=this._c.then(()=>(this.nc=!0,e().catch(o=>{throw this.tc=o,this.nc=!1,us("INTERNAL UNHANDLED ERROR: ",Ji(o)),o}).then(o=>(this.nc=!1,o))));return this._c=i,i}enqueueAfterDelay(e,i,o){this.ac(),this.sc.indexOf(e)>-1&&(i=0);const h=En.createAndSchedule(this,e,i,o,p=>this.lc(p));return this.ec.push(h),h}ac(){this.tc&&re(47125,{hc:Ji(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const i of this.ec)if(i.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((i,o)=>i.targetTimeMs-o.targetTimeMs);for(const i of this.ec)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const i=this.ec.indexOf(e);this.ec.splice(i,1)}}function Ji(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class pa extends gs{constructor(e,i,o,h){super(e,i,o,h),this.type="firestore",this._queue=new Xi,this._persistenceKey=h?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xi(e),this._firestoreClient=void 0,await e}}}function ga(s,e){const i=typeof s=="object"?s:Po(),o=typeof s=="string"?s:yn,h=So(i,"firestore").getImmediate({identifier:o});if(!h._initialized){const p=gr("firestore");p&&da(h,...p)}return h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(bt.fromBase64String(e))}catch(i){throw new C(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new ct(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ae(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:j("string",ct._jsonSchemaVersion),bytes:j("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new C(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new C(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new C(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return tt(this._lat,e._lat)||tt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:St._jsonSchemaVersion}}static fromJSON(e){if(ae(e,St._jsonSchema))return new St(e.latitude,e.longitude)}}St._jsonSchemaVersion="firestore/geoPoint/1.0",St._jsonSchema={type:j("string",St._jsonSchemaVersion),latitude:j("number"),longitude:j("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(o,h){if(o.length!==h.length)return!1;for(let p=0;p<o.length;++p)if(o[p]!==h[p])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ae(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(i=>typeof i=="number"))return new Tt(e.vectorValues);throw new C(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:j("string",Tt._jsonSchemaVersion),vectorValues:j("object")};const ma=new RegExp("[~\\*/\\[\\]]");function ya(s,e,i){if(e.search(ma)>=0)throw Ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new ms(...e.split("."))._internalPath}catch{throw Ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function Ki(s,e,i,o,h){let p=`Function ${e}() called with invalid data`;p+=". ";let v="";return new C(b.INVALID_ARGUMENT,p+s+v)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,i,o,h,p){this._firestore=e,this._userDataWriter=i,this._key=o,this._document=h,this._converter=p}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _a(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(_s("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class _a extends ys{data(){return super.data()}}function _s(s,e){return typeof e=="string"?ya(s,e):e instanceof ms?e._internalPath:e._delegate._internalPath}class be{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kt extends ys{constructor(e,i,o,h,p,v){super(e,i,o,h,v),this._firestore=e,this._firestoreImpl=e,this.metadata=p}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new Ce(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const o=this._document.data.field(_s("DocumentSnapshot.get",e));if(o!==null)return this._userDataWriter.convertValue(o,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=kt._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}kt._jsonSchemaVersion="firestore/documentSnapshot/1.0",kt._jsonSchema={type:j("string",kt._jsonSchemaVersion),bundleSource:j("string","DocumentSnapshot"),bundleName:j("string"),bundle:j("string")};class Ce extends kt{data(e={}){return super.data(e)}}class ne{constructor(e,i,o,h){this._firestore=e,this._userDataWriter=i,this._snapshot=h,this.metadata=new be(h.hasPendingWrites,h.fromCache),this.query=o}get docs(){const e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach(o=>{e.call(i,new Ce(this._firestore,this._userDataWriter,o.key,o,new be(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new C(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(h,p){if(h._snapshot.oldDocs.isEmpty()){let v=0;return h._snapshot.docChanges.map(w=>{const A=new Ce(h._firestore,h._userDataWriter,w.doc.key,w.doc,new be(h._snapshot.mutatedKeys.has(w.doc.key),h._snapshot.fromCache),h.query.converter);return w.doc,{type:"added",doc:A,oldIndex:-1,newIndex:v++}})}{let v=h._snapshot.oldDocs;return h._snapshot.docChanges.filter(w=>p||w.type!==3).map(w=>{const A=new Ce(h._firestore,h._userDataWriter,w.doc.key,w.doc,new be(h._snapshot.mutatedKeys.has(w.doc.key),h._snapshot.fromCache),h.query.converter);let S=-1,x=-1;return w.type!==0&&(S=v.indexOf(w.doc.key),v=v.delete(w.doc.key)),w.type!==1&&(v=v.add(w.doc),x=v.indexOf(w.doc.key)),{type:va(w.type),doc:A,oldIndex:S,newIndex:x}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ne._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],o=[],h=[];return this.docs.forEach(p=>{p._document!==null&&(i.push(p._document),o.push(this._userDataWriter.convertObjectMap(p._document.data.value.mapValue.fields,"previous")),h.push(p.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function va(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:s})}}ne._jsonSchemaVersion="firestore/querySnapshot/1.0",ne._jsonSchema={type:j("string",ne._jsonSchemaVersion),bundleSource:j("string","QuerySnapshot"),bundleName:j("string"),bundle:j("string")};(function(e,i=!0){(function(h){oe=h})(Do),Ne(new ie("firestore",(o,{instanceIdentifier:h,options:p})=>{const v=o.getProvider("app").getImmediate(),w=new pa(new Go(o.getProvider("auth-internal")),new Xo(v,o.getProvider("app-check-internal")),function(S,x){if(!Object.prototype.hasOwnProperty.apply(S.options,["projectId"]))throw new C(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(S.options.projectId,x)}(v,h),v);return p=Object.assign({useFetchStreams:i},p),w._setSettings(p),w},"PUBLIC").setMultipleInstances(!0)),Ot(Mi,Li,e),Ot(Mi,Li,"esm2017")})();const wa={apiKey:"AIzaSyCnNUSxeI3V8m8mH-ZAZuW_N_EHipEy4NE",authDomain:"wordleanalytics-94a4b.firebaseapp.com",projectId:"wordleanalytics-94a4b",storageBucket:"wordleanalytics-94a4b.firebasestorage.app",messagingSenderId:"34017571752",appId:"1:34017571752:web:a9f5874201d5e1fccda39d",measurementId:"G-7RSS026EKQ"},Ea=hs(wa);ga(Ea);async function vs(){return new Promise(s=>{const e=document.createElement("iframe");e.src=chrome.runtime.getURL("panel.html"),e.id="wordle-panel",e.style.cssText=`
            position: fixed;
            top: 0;
            right: 0;
            width: 30vw;
            height: 100vh;
            border: none;
            z-index: 9999;
            box-shadow: -2px 0 5px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
            transform: translateX(100%);
        `,document.body.appendChild(e),console.log("Panel created!"),Es(),requestAnimationFrame(()=>{ke()}),window.addEventListener("message",i=>{i.data?.type==="close-panel"&&ws(),i.data?.type==="open-panel"&&ke()})})}async function ws(){const s=document.getElementById("wordle-panel");s&&(requestAnimationFrame(()=>{s.style.transform="translateX(100%)"}),console.log("Panel closed!"))}async function ke(){const s=document.getElementById("wordle-panel");s&&(requestAnimationFrame(()=>{s.style.transform="translateX(0%)"}),console.log("Panel opened!"))}async function Es(){const s=document.getElementById("wordle-panel");s.onload=()=>{s.contentWindow.postMessage({type:"loadPanel"},"*")}}chrome.runtime.onMessage.addListener(s=>{if(s.type==="togglePanel"){console.log("Recieved messaage to toggle panel.");const e=document.getElementById("wordle-panel");e?e.style.transform==="translateX(0%)"?ws():e.style.transform==="translateX(100%)"&&ke():vs()}});async function Yi(s,e,i){console.log(`Game finished on ${s} in ${e} guesses - ${i?"hard":"normal"} mode.`);const h=(await chrome.storage.local.get("wordleStats")).wordleStats||{};h[s]={guess:e,mode:i?"hard":"normal"},await chrome.storage.local.set({wordleStats:h})}const Zi=window.location.toString();if(Zi&&Zi==="https://www.nytimes.com/games/wordle/index.html"){console.log("Monitoring for game finish...");let s=!1,e=setInterval(async()=>{if(s)return;if(document.querySelector(".Header-module_statsHeading__NlnC1")){const h=document.querySelector('[aria-label*="Hard Mode"]')?.getAttribute("aria-checked")==="true",p=document.querySelectorAll(".Row-module_row__pwpBq");for(let w=5;w>-2;w--){if(p[w].textContent){const S=new Date().toISOString().slice(0,10),x=w+1;Yi(S,x,h);break}if(w===-1){const S=new Date().toISOString().slice(0,10);Yi(S,0,h)}}document.getElementById("wordle-panel")?(ke(),Es()):(s=!0,await vs()),clearInterval(e)}},100)}
