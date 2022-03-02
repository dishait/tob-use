import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="computedinject" tabindex="-1"><a class="header-anchor" href="#computedinject" aria-hidden="true">#</a> computedInject</h1><p>\u8BA1\u7B97\u5C5E\u6027\u578B inject</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>\u4E0A\u5C42\u7EC4\u4EF6\u63D0\u4F9B <code>provide</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computedInject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token function">provide</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0B\u5C42\u7EC4\u4EF6\u6CE8\u5165 <code>injcet</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computedInject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token comment">// \u8BA1\u7B97\u5C5E\u6027\uFF0C\u5F53\u4E0A\u5C42\u7EC4\u4EF6\u7684\u6E90\u53D8\u5316\u65F6\uFF0C\u4E5F\u8DDF\u7740\u91CD\u65B0\u8BA1\u7B97</span>
<span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computedInject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token parameter">source</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

double<span class="token punctuation">.</span>value <span class="token comment">// 2</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><br><h3 id="\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u9ED8\u8BA4\u503C</h3><p>\u5F53\u4E0D\u786E\u5B9A\u4E0A\u5C42\u7EC4\u4EF6\u662F\u5426\u63D0\u4F9B <code>provide</code> \u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u7B2C\u4E09\u4E2A\u53C2\u6570\u4F5C\u4E3A\u9ED8\u8BA4\u503C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computedInject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">effect</span> <span class="token operator">=</span> <span class="token parameter">source</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u503C\u4E3A 1</span>
<span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computedInject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> effect<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

double<span class="token punctuation">.</span>value <span class="token comment">// 2</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5DE5\u5382\u51FD\u6570\u578B\u9ED8\u8BA4\u503C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computedInject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">effect</span> <span class="token operator">=</span> <span class="token parameter">source</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> source <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9ED8\u8BA4\u503C\u5DE5\u5382\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">defaultFactory</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">100</span>

<span class="token comment">// \u5F53\u7B2C\u56DB\u4E2A\u53C2\u6570\u4E3A true \u65F6\uFF0C\u5C06\u8C03\u7528 defaultFactory \u6765\u751F\u6210\u9ED8\u8BA4\u503C</span>
<span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computedInject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> effect<span class="token punctuation">,</span> defaultFactory<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

double<span class="token punctuation">.</span>value <span class="token comment">// 200</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><br><h3 id="setter" tabindex="-1"><a class="header-anchor" href="#setter" aria-hidden="true">#</a> setter</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computedInject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span>

<span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computedInject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> source <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        conosle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8D4B\u503C double \u65F6&#39;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,16);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
