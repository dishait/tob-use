import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="syncref" tabindex="-1"><a class="header-anchor" href="#syncref" aria-hidden="true">#</a> syncRef</h1><p>\u4FDD\u6301\u76EE\u6807 ref \u8DDF\u6E90\u540C\u6B65</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> syncRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// \u4FDD\u6301\u76EE\u6807 target \u8DDF\u6E90 source \u540C\u6B65\uFF0C\u5E76\u8FD4\u56DE stop \u6682\u505C\u540C\u6B65\u51FD\u6570</span>
<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">syncRef</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> target<span class="token punctuation">)</span>

target<span class="token punctuation">.</span>value <span class="token comment">// 1</span>

source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">10</span>

target<span class="token punctuation">.</span>value <span class="token comment">// 10</span>

<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6682\u505C\u540C\u6B65</span>

source<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">100</span>

target<span class="token punctuation">.</span>value <span class="token comment">// \u4ECD\u7136\u662F 10</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u591A\u4E2A" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A" aria-hidden="true">#</a> \u591A\u4E2A</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> syncRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// \u4FDD\u6301\u76EE\u6807 b, c \u8DDF\u6E90 a \u540C\u6B65\uFF0C\u5E76\u8FD4\u56DE stop \u6682\u505C\u51FD\u6570</span>
<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">syncRef</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">)</span>

b<span class="token punctuation">.</span>value <span class="token comment">// 1</span>
c<span class="token punctuation">.</span>value <span class="token comment">// 1</span>

a<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">2</span>

b<span class="token punctuation">.</span>value <span class="token comment">// 2</span>
c<span class="token punctuation">.</span>value <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><p><code>syncRef</code> \u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u652F\u6301 <code>watch</code> \u914D\u7F6E</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> syncRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">syncRef</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    deep<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6DF1\u5EA6\u540C\u6B65\uFF0C\u9ED8\u8BA4\u4E3A false</span>
    immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u7ACB\u5373\u540C\u6B65\uFF0C\u9ED8\u8BA4\u4E3A true</span>
    flush<span class="token operator">:</span> <span class="token string">&#39;sync&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u540C\u6B65\u65F6\u673A\uFF0C\u652F\u6301 pre\uFF0Cpost\uFF0Csync\uFF0C\u9ED8\u8BA4\u4E3A sync</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,10);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
