import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="watchwithfilter" tabindex="-1"><a class="header-anchor" href="#watchwithfilter" aria-hidden="true">#</a> watchWithFilter</h1><p>\u5E26\u8FC7\u6EE4\u5668\u7684\u76D1\u542C</p><p>\u8FD9\u662F\u4E00\u4E2A\u8F83\u4E3A\u5E95\u5C42\u7684 <code>api</code>\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4F60\u4E0D\u9700\u8981\u5B83\uFF0C\u9664\u975E\u4F60\u8981\u8FDB\u884C\u7279\u522B\u7684\u81EA\u5B9A\u4E49</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchWithFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;changed!&#39;</span><span class="token punctuation">)</span> 

<span class="token function">watchWithFilter</span><span class="token punctuation">(</span>
  source<span class="token punctuation">,</span>
  changed<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token function">eventFilter</span><span class="token punctuation">(</span><span class="token parameter">changedHandle</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">changedHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5C31\u662F\u4E0A\u8FB9\u7684 changed</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><br><h3 id="watch-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#watch-\u9009\u9879" aria-hidden="true">#</a> Watch \u9009\u9879</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchOnce <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;trigger!&#39;</span><span class="token punctuation">)</span> 

<span class="token function">watchWithFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> changed<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6DF1\u5EA6\u540C\u6B65</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u7ACB\u5373\u540C\u6B65\uFF0C\u9ED8\u8BA4\u4E3A false</span>
    <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;sync&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u540C\u6B65\u65F6\u673A\uFF0C\u652F\u6301 pre\uFF0Cpost\uFF0Csync\uFF0C\u9ED8\u8BA4\u4E3A pre</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,8);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};