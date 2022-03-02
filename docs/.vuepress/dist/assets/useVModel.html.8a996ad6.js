import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="usevmodel" tabindex="-1"><a class="header-anchor" href="#usevmodel" aria-hidden="true">#</a> useVModel</h1><p>\u4F7F\u7528 v-model</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><p>\u5B50\u7EC4\u4EF6 \u{1F447}</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- foo \u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> string
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u4F20\u5165 props</span>
<span class="token keyword">const</span> modelValue <span class="token operator">=</span> <span class="token function">useVModel</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">,</span> emit<span class="token punctuation">)</span>

modelValue<span class="token punctuation">.</span>value <span class="token comment">// props.modelValue</span>

modelValue<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token comment">// emit(&#39;update:modelValue&#39;, &#39;foo&#39;)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u7236\u7EC4\u4EF6 \u{1F447}</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foo</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><br><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h3><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8BBE\u7F6E <code>key</code> \u{1F447}</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- foo \u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> string <span class="token comment">// \u6CE8\u610F props \u4E5F\u8981\u6709\u5BF9\u5E94\u7684\u8BBE\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// emit \u4E5F\u8981\u6709\u5BF9\u5E94\u7684\u8BBE\u7F6E</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:foo&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// \u7B2C\u4E8C\u4E2A\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E key</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">useVModel</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> emit<span class="token punctuation">)</span>

foo<span class="token punctuation">.</span>value <span class="token comment">// props.foo</span>

foo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span> <span class="token comment">// emit(&#39;update:foo&#39;, &#39;foo&#39;)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u7236\u7EC4\u4EF6 \u{1F447}</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u7701\u7565\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u6CE8\u610F v-model \u540E\u7684 foo \u5C31\u662F key\uFF0C\u9ED8\u8BA4\u4E3A modelValue --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foo</span> <span class="token attr-name"><span class="token namespace">v-model:</span>foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><br><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><p>\u7B2C\u56DB\u4E2A\u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E9B\u9009\u9879\uFF0C\u4E0D\u8FC7\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5E76\u4E0D\u9700\u8981\u5173\u6CE8</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useVModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> string
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> modelValue <span class="token operator">=</span> <span class="token function">useVModel</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">,</span> emit<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">eventName</span><span class="token operator">:</span> <span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u624B\u52A8\u8BBE\u7F6E\u4E8B\u4EF6\u540D</span>
	<span class="token literal-property property">passive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6D88\u6781\u7684\uFF0C\u5373\u5982\u679C\u65B0\u503C\u548C\u65E7\u503C\u76F8\u7B49\u65F6\uFF0C\u4E0D\u4F1A\u51FA\u89E6\u53D1\u4E8B\u4EF6 emit\uFF0C\u9ED8\u8BA4\u4E3A false</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4EC5 passive \u4E3A true \u65F6\u6709\u6548\uFF0Cv-model \u4F20\u5165\u5BF9\u8C61\u65F6\uFF0C\u6DF1\u5C42\u76D1\u542C\uFF0C\u9ED8\u8BA4\u4E3A false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,18);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};