import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="refdefault" tabindex="-1"><a class="header-anchor" href="#refdefault" aria-hidden="true">#</a> refDefault</h1><p>ref \u7684\u9ED8\u8BA4\u503C</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> refDefault <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token comment">// \u672A\u5B9A\u4E49\u7684 ref</span>
<span class="token keyword">const</span> raw <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u8BA1\u7B97\u5C5E\u6027</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">refDefault</span><span class="token punctuation">(</span>raw<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value <span class="token comment">// 0</span>

raw<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">1</span> 
state<span class="token punctuation">.</span>value <span class="token comment">// 1</span>

state<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2</span>
raw<span class="token punctuation">.</span>value <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,4);function p(t,r){return e}var l=s(a,[["render",p]]);export{l as default};
