import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="ignorablewatch" tabindex="-1"><a class="header-anchor" href="#ignorablewatch" aria-hidden="true">#</a> ignorableWatch</h1><p>\u5FFD\u7565\u578B\u76D1\u542C</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ignorableWatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> stop<span class="token punctuation">,</span> ignoreUpdates<span class="token punctuation">,</span> ignorePrevAsyncUpdates <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">ignorableWatch</span><span class="token punctuation">(</span>
  source<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u66F4\u65B0 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span> 
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA &#39;\u66F4\u65B0 bar&#39;</span>

    <span class="token function">ignoreUpdates</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foobar&#39;</span> <span class="token comment">// \u5FFD\u7565\u4E86\u6B64\u5904\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u89E6\u53D1\u56DE\u8C03</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u65E0\u4E8B\u53D1\u751F</span>

    source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;good&#39;</span>
    <span class="token function">ignorePrevAsyncUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5FFD\u7565\u4E0A\u4E00\u6B21\u4ECD\u672A\u5904\u7406\u7684\u7684\u66F4\u65B0\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u89E6\u53D1\u56DE\u8C03</span>
    <span class="token keyword">await</span> <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u65E0\u4E8B\u53D1\u751F</span>

    <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6682\u505C\u76D1\u542C</span>

    source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;jack&#39;</span> <span class="token comment">// \u4E0D\u4F1A\u89E6\u53D1\u56DE\u8C03\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u6682\u505C\u4E86</span>
<span class="token punctuation">}</span>

<span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><br><h3 id="watch-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#watch-\u9009\u9879" aria-hidden="true">#</a> Watch \u9009\u9879</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ignorableWatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u66F4\u65B0 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> 

<span class="token function">ignorableWatch</span><span class="token punctuation">(</span>
  source<span class="token punctuation">,</span>
  callback<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    deep<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6DF1\u5EA6\u540C\u6B65</span>
    immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u7ACB\u5373\u540C\u6B65\uFF0C\u9ED8\u8BA4\u4E3A false</span>
    flush<span class="token operator">:</span> <span class="token string">&#39;sync&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u540C\u6B65\u65F6\u673A\uFF0C\u652F\u6301 pre\uFF0Cpost\uFF0Csync\uFF0C\u9ED8\u8BA4\u4E3A pre</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,8);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};