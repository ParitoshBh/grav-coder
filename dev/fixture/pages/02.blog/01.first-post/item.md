---
title: First Development Post
date: '2026-01-10'
taxonomy:
  category: [Development]
  tag: [grav, theme]
---

This page exercises post content, taxonomy links, and sibling navigation.

## Typography

Use this text to check headings, paragraphs, and [links](https://getgrav.org).

> A blockquote checks muted text and its identifying border against both page palettes.

| Component | Purpose | Status |
| --- | --- | --- |
| Table | Borders and headings | Ready |
| Form | Native controls | Ready |

Inline `code` should remain distinct from the surrounding paragraph.

```php
function greeting(string $name): string
{
    return "Hello, {$name}!";
}
```

## Form controls

<form class="fixture-form" action="#" method="get">
  <div class="form-group">
    <label for="fixture-name">Name</label>
    <input class="form-control" id="fixture-name" name="name" type="text" placeholder="Ada Lovelace">
  </div>
  <div class="form-group">
    <label for="fixture-topic">Topic</label>
    <select class="form-control" id="fixture-topic" name="topic">
      <option>Theme development</option>
      <option>Accessibility</option>
    </select>
  </div>
  <div class="checkbox">
    <label><input name="updates" type="checkbox" checked> Send fixture updates</label>
  </div>
  <button class="btn btn-primary" type="button">Primary action</button>
  <button class="btn btn-default" type="button">Secondary action</button>
</form>

## Syntax highlighting tokens

The legacy Chroma classes below make the complete theme-owned token palette available even when the Markdown pipeline emits an unclassified code block.

<pre class="chroma"><code><span class="c">// comment</span>
<span class="k">const</span> <span class="nv">message</span> <span class="o">=</span> <span class="s">&quot;Hello&quot;</span><span class="p">;</span>
<span class="nt">main</span> <span class="na">class</span><span class="o">=</span><span class="s2">&quot;demo&quot;</span>
<span class="nf">render</span><span class="p">(</span><span class="m">42</span><span class="p">);</span>
<span class="gd">- removed line</span>
<span class="gi">+ inserted line</span>
<span class="err">error token</span></code></pre>
