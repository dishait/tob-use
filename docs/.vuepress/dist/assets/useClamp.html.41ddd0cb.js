import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="useclamp" tabindex="-1"><a class="header-anchor" href="#useclamp" aria-hidden="true">#</a> useClamp</h1><p>\u5728\u4E24\u4E2A\u503C\u8303\u56F4\u4E4B\u95F4\u53D6\u4E00\u4E2A\u503C</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useClamp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> min <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">// \u9650\u5B9A\u8303\u56F4 0 - 10</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useClamp</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span>

result<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">20</span> 

result<span class="token punctuation">.</span>value <span class="token comment">// \u8D85\u51FA\u6700\u5927\uFF0C\u4ECD\u7136\u662F 10</span>

result<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

result<span class="token punctuation">.</span>value <span class="token comment">// \u8D85\u51FA\u6700\u5C0F\uFF0C\u4ECD\u7136\u662F 0</span>

max<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// \u8C03\u6574\u6700\u5927\u503C\u4E3A 20</span>

result<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">20</span>

result<span class="token punctuation">.</span>value <span class="token comment">// 20</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,4);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
