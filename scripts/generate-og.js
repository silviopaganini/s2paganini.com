#!/usr/bin/env node
// Generates /public/og.png at 1200x630

const { chromium } = require('/opt/node22/lib/node_modules/playwright')
const path = require('path')
const fs = require('fs')

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,700;1,300;1,400&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    width: 1200px;
    height: 630px;
    background: #060709;
    font-family: 'DM Sans', sans-serif;
    color: #C8D2DC;
    overflow: hidden;
    position: relative;
  }

  /* Grid lines */
  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,207,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,207,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* Radial glow */
  .glow {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,207,255,0.08) 0%, transparent 70%);
    top: -200px;
    right: -100px;
    pointer-events: none;
  }

  /* Bottom glow line */
  .line-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,207,255,0.4), transparent);
  }

  /* Corner accent */
  .corner {
    position: absolute;
    top: 48px;
    right: 64px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00CFFF;
    box-shadow: 0 0 16px 4px rgba(0,207,255,0.5);
  }

  /* Main content */
  .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 80px;
  }

  .eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #00CFFF;
    margin-bottom: 28px;
  }

  .name {
    font-family: 'Fraunces', serif;
    font-size: 78px;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.02em;
    color: #E8EDF2;
    margin-bottom: 20px;
  }

  .name em {
    font-style: italic;
    color: #C8D2DC;
  }

  .role {
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    font-weight: 300;
    color: #567EA0;
    margin-bottom: 48px;
    letter-spacing: 0.01em;
  }

  .role strong {
    color: #8891A0;
    font-weight: 400;
  }

  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #343D4A;
    border: 1px solid #1E252F;
    padding: 6px 12px;
    border-radius: 2px;
  }

  .tag.highlight {
    color: rgba(0,207,255,0.6);
    border-color: rgba(0,207,255,0.2);
    background: rgba(0,207,255,0.04);
  }

  /* Domain */
  .domain {
    position: absolute;
    bottom: 44px;
    left: 80px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: #343D4A;
    letter-spacing: 0.06em;
  }

  /* Decorative vertical line */
  .vline {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 56px;
    width: 1px;
    background: linear-gradient(180deg, transparent, rgba(0,207,255,0.15) 30%, rgba(0,207,255,0.15) 70%, transparent);
  }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="glow"></div>
  <div class="line-glow"></div>
  <div class="vline"></div>
  <div class="corner"></div>

  <div class="content">
    <div class="eyebrow">s2paganini.com</div>
    <div class="name">Silvio <em>Paganini</em></div>
    <div class="role">Director of Software Engineering · <strong>BCG X</strong></div>
    <div class="tags">
      <span class="tag highlight">Applied AI</span>
      <span class="tag highlight">LLM Systems</span>
      <span class="tag">Agentic Workflows</span>
      <span class="tag">Enterprise Scale</span>
      <span class="tag">25 years building</span>
    </div>
  </div>

  <div class="domain">s2paganini.com</div>
</body>
</html>`

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1200, height: 630 })
  await page.setContent(html, { waitUntil: 'networkidle' })

  // Give fonts a moment to render
  await page.waitForTimeout(500)

  const outPath = path.join(__dirname, '../public/og.png')
  await page.screenshot({ path: outPath, type: 'png' })
  await browser.close()

  console.log('Generated:', outPath)
})()
