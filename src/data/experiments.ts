import { IProject } from '../types'
import config from './projects.config.json'

const _cfg = config as { projects: Record<string, boolean>; experiments: Record<string, boolean> }

const _experiments: IProject[] = [
  {
    id: 'cklju8ta82bwe0a53ar5qowx5',
    title: 'Tensorflow.js Experiments',
    link: 'https://tensorflow.s2paganini.com',
    thumb: { id: 'cklju4dk82b4f0a56grernjda', url: '/assets/tf.jpg' },
    video: { id: 'cklju6o4g2bcv0a566eymuhjv', url: '/assets/tf.mp4', mimeType: 'video/mp4' },
    body: `# Machine Learning using TensorFlow.js Experiments

This is a series of experiments using TensorFlow to explore machine learning only using the browser

Link for the experiment => [http://tensorflow.s2paganini.com](http://tensorflow.s2paganini.com)

| Tech-Stack |
| - |
|• Typescript<br>• TensorFlow.js<br>• React<br>• Storybook<br>• Teachable Machine|`,
  },
  {
    id: 'ck10skbgbv4mt0b49ja0hhrgf',
    title: 'MuDA Letter Soup',
    link: 'http://muda.co/collection/lettersoup/',
    thumb: { id: 'ck10sjw5l52r40b71eor9mdvp', url: '/assets/T3Qd1sHdRW2WUyx7mJ3r_muda.jpg' },
    video: { id: 'ck10sk968v4m80b496f6wa368', url: '/assets/iYwZsYeUQcy1bz07Aq4O_muda.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10sp91gv63d0b49jl1tb6fg',
    title: '#webgl #physics #xmas',
    link: 'https://labs.fluuu.id/xmas',
    thumb: { id: 'ck10son61v1cc0b85mo7sd848', url: '/assets/CY58vVgXTJOjd9YVeIVX_xmas.jpg' },
    video: { id: 'ck10sp6djv62m0b49sfhpnphb', url: '/assets/RHY3iTlzTkG80ddsdeyT_xmas.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10stbmov20u0b549kk6lg45',
    title: 'Fireworks',
    link: 'https://labs.fluuu.id/fireworks/',
    thumb: { id: 'ck10ssrvj55z30b718n2rfbrd', url: '/assets/wgGVnLFQMCVFZyjoEKG6_fireworks.jpg' },
    video: { id: 'ck10st59s56220b71dmwnd90i', url: '/assets/rgaK7jkFQHOejPq5I7jg_fireworks.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10suezgv2r20b85zdlglibe',
    title: 'Vendetta',
    link: 'https://labs.fluuu.id/vendetta/',
    thumb: { id: 'ck10subw4v7bj0b490hbyq3bv', url: '/assets/M3fCjhJaTc2s4d3niW7U_vendetta.jpg' },
    video: { id: 'ck10styqcv78v0b49jdw687iu', url: '/assets/LOZXZJ0Q7WtJahOu9fQo_vendetta.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10sim9yuzl30b54u2bct7cb',
    title: '#webgl #physics',
    link: 'https://labs.fluuu.id/sym/',
    thumb: { id: 'ck10si5nnuzig0b54lu0zb9fz', url: '/assets/9btn6VLSSm2S4Jgjklgj_sym.jpg' },
    video: { id: 'ck10siix7uzzn0b85b2966p0t', url: '/assets/tuEn015SwWa5WvXiPEpG_sym.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10sqk3iv1b10b54kmw97qt5',
    title: '#webgl #gameOfLife',
    link: 'https://labs.fluuu.id/iso2/',
    thumb: { id: 'ck10sq10wv6ay0b49snvfowoa', url: '/assets/ubl0E1RSZWLT4Mkw7DTU_iso2.jpg' },
    video: { id: 'ck10sqgoyv6f20b49cpxu9u1c', url: '/assets/4ogavAskTRGKbuSIk8OK_gol.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10ss5n755ui0b7128r7j63s',
    title: 'Stars',
    link: 'https://labs.fluuu.id/stars/',
    thumb: { id: 'ck10ss2p655tp0b7115iupw6x', url: '/assets/rO6R3AYsQ76zQyObi2b0_stars.jpg' },
    video: { id: 'ck10srr4tv28k0b85und8osj7', url: '/assets/wmwt3BtRI67iTHOa6p16_planets.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10sw68hv2i80b54kj291lzz',
    title: 'Boxes',
    link: 'https://labs.fluuu.id/box-physics/',
    thumb: { id: 'ck10sv5npv2cd0b54sds3zukr', url: '/assets/XA9VkBrRCC4CHmBy7XoI_box.jpg' },
    video: { id: 'ck10svjqnv2eb0b547koyrwfy', url: '/assets/4DKCAJ0gSfiQ8K6Y9NG3_boxes.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10sxhrg57300b71jb1z5186',
    title: 'Lines',
    link: 'https://labs.fluuu.id/lines/',
    thumb: { id: 'ck10sxdxyv7w30b49ahwov0js', url: '/assets/ekddGXBQ51QAngLy67AS_lines.jpg' },
    video: { id: 'ck10sx0uyv2pf0b54lik2w31j', url: '/assets/22PDyPVoRyKTjdNwvk6H_lines.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10syi31v83s0b497ifjnicq',
    title: 'Tubes',
    link: 'https://labs.fluuu.id/tubes/',
    thumb: { id: 'ck10sy0jjv80b0b49k4byunh7', url: '/assets/aXWV7xngQc2UI8NLqh8d_tubes.jpg' },
    video: { id: 'ck10sybqvv3fs0b85zjfkgbua', url: '/assets/IresLdX3S9SzG2lqMhQx_tubes.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10szg7e57kl0b71pcr5xgz0',
    title: 'Geo',
    link: 'https://labs.fluuu.id/geo/dist/',
    thumb: { id: 'ck10szdxfv89x0b49laxemnkf', url: '/assets/ncrjRso8Qde4Li452xTD_geo.jpg' },
    video: { id: 'ck10sz4n7v3pv0b855fd489zf', url: '/assets/tot1gHoUT0m3hXaJYdvO_geo.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10t14e5v4340b85eryumfj4',
    title: 'Mirror',
    link: 'https://labs.fluuu.id/generative-forms/dist/',
    thumb: { id: 'ck10t0i5n57se0b71tmhi31t4', url: '/assets/3xI73Dt4TcatsRjS2YNj_generative-forms.jpg' },
    video: { id: 'ck10t122xv8m30b493nl48bd8', url: '/assets/hnDIclEiQmKjhsUvwc5W_mirror.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10t2a9hv3yx0b54q18ejq9h',
    title: 'Glow',
    link: 'https://labs.fluuu.id/bloom/dist/',
    thumb: { id: 'ck10t27kjv4ce0b85eghlkb3r', url: '/assets/uIUHgGiRIyB98CKInD1s_bloom.jpg' },
    video: { id: 'ck10t1vydv3vi0b54h1pbc6hd', url: '/assets/ZbntwurxStuSri6JqhtG_glow.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10t3hht58ol0b71se0ckvuh',
    title: 'Phong',
    link: 'https://labs.fluuu.id/phong/dist/',
    thumb: { id: 'ck10t2vpav43x0b54qsrfgll8', url: '/assets/OI684Fr2QPxq2lssunaI_phong.jpg' },
    video: { id: 'ck10t3f63v94w0b496vn7l3ol', url: '/assets/EHSVhcp0Q8WWOWvS9AGs_phong.mp4', mimeType: 'video/mp4' },
  },
  {
    id: 'ck10t4by958xa0b71l7gdx0gs',
    title: 'Curl',
    link: 'https://labs.fluuu.id/curl/dist/',
    thumb: { id: 'ck10t49o258wh0b71uvuu500b', url: '/assets/mUXM7J3yQmatJmNUjQuz_curl.jpg' },
    video: { id: 'ck10t40v158uj0b71wfnfyxcr', url: '/assets/9m6u6KZWRs28gLHtIXuJ_curl.mp4', mimeType: 'video/mp4' },
  },
]

export const experiments = _experiments.filter(e => _cfg.experiments[e.id!] !== false)
