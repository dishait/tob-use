import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="autoresetref" tabindex="-1"><a class="header-anchor" href="#autoresetref" aria-hidden="true">#</a> autoResetRef</h1><p>\u81EA\u52A8\u91CD\u7F6E ref</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> autoResetRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A ref\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u8BBE\u7F6E\u5EF6\u8FDF\uFF0C\u9ED8\u8BA4\u4E3A 10 \u79D2</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">autoResetRef</span><span class="token punctuation">(</span><span class="token string">&#39;\u9ED8\u8BA4&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span> 

message<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;\u66F4\u65B0\u4E86&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA \u66F4\u65B0\u4E86</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA \u9ED8\u8BA4</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,4);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};