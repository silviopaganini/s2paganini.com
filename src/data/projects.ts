import { IProject } from '../types'
import config from './projects.config.json'

const _cfg = config as { projects: Record<string, boolean>; experiments: Record<string, boolean> }

const _projects: IProject[] = [
  {
    id: 'clk8netlk2i200bt9k5f1inez',
    title: 'GNSS Ecosystem',
    link: 'https://mem.mgxs.co/',
    thumb: { id: 'clk8n74to3d0c0buvl4k1wxjg', url: '/assets/F1FLr6mXoAABPxg.jpeg' },
    video: null,
    body: `### GNSS - Generative Nature Synthetic Species

GNSS stands as a testament to the boundless possibilities that emerge when art, technology, and innovation converge. As a Procedural and Generative Art project, GNSS showcases a breathtaking collection of beings, each meticulously crafted to be unique and exclusive.

To bring this visionary project to life, we spearheaded the development of an advanced AI generative system. This cutting-edge system harnesses the power of the GNSS image to unlock the potential of Machine Embedded Memories (MEMs). By leveraging the intricate details within the metadata, our AI generative system breathes life into these MEMs, enhancing the depth and allure of the GNSS Collection.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/852493329?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GNSS Lisbon'23"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

To introduce GNSS to the world, we orchestrated a captivating live installation in the vibrant city of Lisbon during the NFC Lisbon event. This immersive experience offered attendees the chance to interact directly with our system, witnessing their creativity take center stage.

#### Tech Stack
- Typescript
- ReactJS
- AWS API Gateway
- AWS S3
- AWS Cloudfront
- AWS Lambda
- Python
- Jupyter
- StableDiffusion`,
  },
  {
    id: 'ckh0ayn2o20xk0b60jzam01zh',
    title: 'Pepsi',
    link: undefined,
    thumb: { id: 'ckh0c6r1c2ot50a534rql8ihs', url: '/assets/pepsi.jpg' },
    video: { id: 'ckh0aydtc20x30b60rfekdtlk', url: '/assets/video.mp4', mimeType: 'video/mp4' },
    body: `# Pepsi AR Filter Instagram

Working together with Copa90 and The Mill, we created a product-focused AR experience that engages the user with world view AR and interactive game play with CG versions of the world's biggest football stars through the Instagram Filters.

<span style="padding:56.25% 0 0 0;position:relative;display:block;"><iframe src="https://player.vimeo.com/video/474592719?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></span>

[See it live on Instagram](https://www.instagram.com/ar/203736214362473/)

| Tech-Stack | Credits |
| - | - |
|• SparkAR<br>• Custom WebGL Shaders<br>|**Production:** The Mill <br>**Creative Developers:** Seph Li, Silvio Paganini<br>**Agency:** Copa90<br>**Client:** Pepsi|`,
  },
  {
    id: 'ckgwfei8w01ad0a528k4dxjh5',
    title: 'TM Community',
    link: undefined,
    thumb: { id: 'ckgwfe5wg01990d09316g428k', url: '/assets/tm.jpg' },
    video: null,
    body: `# TM Community

TM Community website was created to support the TM App. The website was created using the JAMStack concept with Prismic and Gatsby

[See it live](https://tm.community)`,
  },
  {
    id: 'ckgwenz0000o50a53cytydskq',
    title: 'Loop Energy Monitor App',
    link: undefined,
    thumb: { id: 'ckgwedk0000gn0a53v1ignp33', url: '/assets/loop.jpg' },
    video: null,
    body: `# Loop: Energy App for Trust Power

[AllOfUs](https://allofus.com) worked together with Trust Power to create Loop, a React-Native App to monitor customer's energy usage.

[Find more about the App](https://loop.homes/loop_apps/)

| Tech-Stack | |
| - | - |
|• React-Native<br>• Lottie<br>||`,
  },
  {
    id: 'ck10riwdbus7p0b54832brynw',
    title: 'The Bicester Village Collection',
    link: 'http://tbvsc.com',
    thumb: { id: 'ck10riouc4ta30b71zj2ze0mu', url: '/assets/tbvsc.png' },
    video: null,
    body: `# The Bicester Village Shopping Collection

[See it live](https://www.tbvsc.com/)

Value Retail approached [Huge Inc](https://www.hugeinc.com/) London with the challenge to rebuild their main website. The original website had 9 languages and over 10000 pages and a very old backoffice system.

We've decided to use Contentful CMS + [JAMStack](https://jamstack.org/) approach to re-shape the website. We pushed Contentful to its limits, using every feature to unleash the power of its localisation tools, editing users roles, Schema scripted migrations, webhooks and content editing tools.

We used React + Storybook to create the Atomic design system, combining them with Gatsby+GraphQL and a custom build system using Azure and Akamai for caching.

|Tech-Stack | Credits |
| - | - |
|•Contentful<br>• React<br>• Storybook<br>• Gatsby<br>• GraphQL<br>•Styled-components<br>•Azure Pipelines<br>•Akamai |**Production:** Huge Inc<br>**Client:** Value Retail|`,
  },
  {
    id: 'ckgw12tfk01y10956042ofhu2',
    title: 'Leonardo da Vinci',
    link: 'https://inside-a-genius-mind.web.app',
    thumb: { id: 'ckgw12huw01xq0956ro1l4i8c', url: '/assets/codice.jpg' },
    video: { id: 'ckgwb2rrk03d60a06gdd5f7e0', url: '/assets/leo.mp4', mimeType: 'video/mp4' },
    body: `# Inside a Genius Mind

Together with Nexus Studios and Google Arts & Culture, we created an experience where the user is invited to explore all codices left by Leonardo da Vinci

[See it live](https://inside-a-genius-mind.web.app)

| Tech-Stack |Credits |
| - | - |
|• Three.js<br>• React<br>• WebGL Custom shaders<br>• Firebase|**Production:** Nexus Studios<br>**Producer:** Amalie Englesson<br>**Developers:** Jordan Machado, Samuel Honigstein (Samsy), Silvio Paganini|`,
  },
  {
    id: 'cju5sfhohtvua0c15y484c6zx',
    title: 'Spinnup | Music Visualisation',
    link: 'https://medium.com/@silviopaganini/spinnup-83bb39d37f40',
    thumb: { id: 'cju5sepmytvdg0c15trpvuao7', url: '/assets/spinnup.jpg' },
    video: { id: 'cju5sf3vrtvmf0c15e9zv4z57', url: '/assets/viz11.mp4', mimeType: 'video/mp4' },
    body: `# SPINNUP

FLUUUID was approached by [Dragon Rouge](https://www.dragonrouge.com) London to collaborate on a music visualisation player for the new Universal Music Distribution website.

Together with [Bruno Imbrizi](http://brunoimbrizi.com) we created 5 different WebGL reactive visualisations.

| Tech-Stack | Credits |
| - | - |
|• Three.js<br>• Custom WebGL Shaders<br>• VanillaJS<br>• Webaudio API|**Production:** FLUUUID <br>**Creative Developers:** Bruno Imbrizi, Silvio Paganini<br>**Agency:** Dragon Rouge<br>**Client:** Universal Music|`,
  },
  {
    id: 'cju5tccl2uhse0c15jewsk5vh',
    title: 'Intangible Matter',
    link: 'https://lucyhardcastle-thefifthsense.i-d.co/en_gb/',
    thumb: { id: 'cju5taib0ugkv0c152qfcrc5h', url: '/assets/x_0015_c.jpg' },
    video: { id: 'cju5tbnvuuhdg0c1557retix4', url: '/assets/fifth.mp4', mimeType: 'video/mp4' },
    body: `# Intangible Matter

The Fifth Sense is an online platform from Chanel and i-D celebrating the emotion of scent. For its latest commission, Intangible Matter, we worked with digital artist Lucy Hardcastle to bring to life her interpretation of Chanel's N°5 L'Eau, through code.

[See the project](https://lucyhardcastle-thefifthsense.i-d.co/en_gb/)

|Tech-Stack | Credits | Awards |
| - | - | - |
|• React<br>• ThreeJS<br>• Custom WebGL Shaders |**Production:** Stink Studios<br>**Artist:** Lucy Hardcastle<br>**Music Production:** Fatima Al Qadiri|**Awwwards**<br>Site of the Day<br>**FWA**<br>Site of the Day|`,
  },
  {
    id: 'cjw1wqclc0pcq0819x9ikup4q',
    title: 'Find Your Way To Oz',
    link: 'https://oz.fluuu.id',
    thumb: { id: 'cjw1vutv20hdc08198xzt9k8r', url: '/assets/oz.jpg' },
    video: { id: 'cjw1w6x250kc70819fhbev2oc', url: '/assets/oz.mp4', mimeType: 'video/mp4' },
    body: `# Find Your Way to Oz

Find Your Way to Oz is a Google Chrome Experiment brought to the web by Disney. It allows you to take an interactive journey through a Kansas circus, which leads you to the land of Oz after you are swept up by a massive storm.

[Read the full case study here](https://www.html5rocks.com/en/tutorials/casestudies/oz/)

|Tech-Stack | Awards |
| - | - |
|• CoffeeScript<br>• ThreeJS<br>• WebGL<br>• BackboneJS<br>• WebAudio<br>• AppEngine | **Awwwards**<br>Site of the Day<br>Site of the Month<br>**FWA**<br>Site of the Day<br>Site of the Month<br>Adobe Cutting Edge Award of the Year 2013|`,
  },
  {
    id: 'cju5sg6q0tw8l0c15wwu5vv30',
    title: 'Deadly Class',
    link: 'https://medium.com/@silviopaganini/deadly-class-2598a57b144a',
    thumb: { id: 'cju5sg0gqtw4l0c15jwxih9vn', url: '/assets/deadly-class.jpg' },
    video: null,
    body: `# Deadly Class | Instagram Filter

SYFY needed an activation to help draw attention to the launch of their new tentpole show, Deadly Class. Nexus Interactive Arts' team developed a graphically rich Spark AR studio character pack, which transforms the user's face into characters from the show.

| Tech-Stack |Credits |
| - | - |
|• SparkAR<br>• Maya<br>• Cinema4D|**Production:** Nexus Studios <br>**Technical Director:** Silvio Paganini|`,
  },
  {
    id: 'cju5tewftujf50c15x0a6i7vc',
    title: 'Made With Code',
    link: undefined,
    thumb: { id: 'ckelsasg805wr01500ruom4fm', url: '/assets/iu.jpg' },
    video: null,
    body: `# Made With Code

Together with Google and Nexus Studios, we produced a series of projects for the **Made with Code** learning platform. Each project had different partnerships such as Disney, Snapchat and Zac Posen.

|Tech-Stack |
| - |
|• ClosureJS<br>• Modified Google Blockly<br>• Python (AppEngine) |`,
  },
  {
    id: 'cjw1wmwad0oil0819kusowrax',
    title: 'Vitasnella Projection',
    link: 'https://medium.com/@silviopaganini/vitasnella-full-body-projection-mapping-daea4cf53dfe',
    thumb: { id: 'cjw1vuuimemt509101cj0d7qz', url: '/assets/vitasnella.jpg' },
    video: { id: 'cjw1w6xfmem120941zc62bbfb', url: '/assets/vitasnela.mp4', mimeType: 'video/mp4' },
    body: `# Vitasnella Projection

Saatchi Milan challenged UNIT9 to create a hardware+software solution to project real-time 'body deformations' back onto a live subject.

[View full case study](https://medium.com/@silviopaganini/vitasnella-full-body-projection-mapping-daea4cf53dfe)

| Tech-Stack |Credits |
| - | - |
|• Unity3D<br>• Kinect<br>• Arduino<br>• Mobile Sensors|**Agency:** Saatchi&Saatchi Milan<br>**Technical Director:** Silvio Paganini|`,
  },
  {
    id: 'cjw1wkoqmesb209100kkws3pa',
    title: 'Crystallized Skins',
    link: 'http://crystallizedskins.com/',
    thumb: { id: 'cjw1vut5jejda0941bd47feqj', url: '/assets/crystalised.jpg' },
    video: { id: 'cjw1w6vueepbl0910ybh1frt4', url: '/assets/crystal.mp4', mimeType: 'video/mp4' },
    body: `# Crystallized Skins

Crystallized Skins was a project created to be part of [The Wrong - New Digital Art Biennale](https://thewrong.org) where we made available an online collection of 3D objects created by 13 international video artists.

[See it live](http://crystallizedskins.com/)`,
  },
  {
    id: 'cju5tgajeukc30c15nytofx9v',
    title: 'MTV Movie Awards',
    link: undefined,
    thumb: { id: 'cju5th777ukv00c15h1n93aow', url: '/assets/x_0011_c.jpg' },
    video: { id: 'cju5tg6ctuk8z0c15w17e455c', url: '/assets/mtv.mp4', mimeType: 'video/mp4' },
    body: `# MTV Movie Awards

Together with Jam3 Toronto we created a Facebook crawler that would generate a video on-demand featuring pictures of you and your friends with a dynamically generated voice over. As a result we created ~500,000 videos that were shared on social media.

|Tech-Stack |
| - |
|• AWS Elastic Beanstalk<br>• FFMpeg <br>• Facebook SDK<br>• React<br>• Nodejs |`,
  },
  {
    id: 'cjw1woma40ox70819ysv0abtx',
    title: '5Gum experience',
    link: '',
    thumb: { id: 'cjw1vut0vemrv0910ksuxjwiy', url: '/assets/5gum.jpg' },
    video: { id: 'cjw1w6vq4epba0910jrd4n0zg', url: '/assets/5gum.mp4', mimeType: 'video/mp4' },
    body: `# 5Gum experience

Experience 5Gum is a multi-sensory virtual reality installation that lets you fly through virtual worlds and shoot thunderbolts from your fingertips.

[See full case study at the UNIT9 website](https://www.unit9.com/project/5gum/)

| Tech-Stack | |
| - | - |
|• OpenGL<br>• OpenAL<br>• C++<br>• OpenFrameworks<br>• Arduino<br>• Raspberry Pi<br>• Oculus Rift||`,
  },
  {
    id: 'cjw1wr96l0plp0819y3ekjyr2',
    title: 'Delta MovieStar',
    link: '',
    thumb: { id: 'cjw1vut2vejd00941aebvxk7g', url: '/assets/delta.jpg' },
    video: { id: 'cjw1w6wa90kbb0819eouclymk', url: '/assets/delta.mp4', mimeType: 'video/mp4' },
    body: `# Delta MovieStar

To promote Delta's intercontinental flight connecting Los Angeles to London, we quite literally brought Hollywood to the UK. We designed and constructed a large interactive "digital window" in Canary Wharf.

| Tech-Stack |Credits |
| - | - |
|• OpenFrameworks<br>• CanonSDK|**Production:** UNIT9 <br>**Technical Lead / Developer:** Silvio Paganini|`,
  },
  {
    id: 'ckk4hohbc29fd09065l15w9m4',
    title: 'Good Call Center',
    link: undefined,
    thumb: { id: 'ckk4ho8202dyz0a53h4m568e2', url: '/assets/robert-fosters-1400x788.jpg' },
    video: null,
    body: `# Good Call Center

Adam & Eve approached us to create the interactive component to their "Good Call" campaign for Foster's, "The Good Call Centre".

[See full case study at the UNIT9 website](https://www.unit9.com/project/fosters-good-call-centre)`,
  },
  {
    id: 'cjw1wt2lc0q1i0819a63xip9d',
    title: 'British Sea Power',
    link: '',
    thumb: { id: 'cjw1w63fjelsi09410h6hqfy6', url: '/assets/kinect.jpg' },
    video: { id: 'cjw1w6vq90kao0819y2tyl5jg', url: '/assets/blackbox.mp4', mimeType: 'video/mp4' },
    body: `# British Sea Power

British Sea Power's live performance of 'Once More Now' at the Roundhouse. Filmed and edited using hacked XBox Kinect technology and broadcast LIVE.

| Tech-Stack |Credits |
| - | - |
|• OpenFrameworks<br>• Kinect|**Venue:** Roundhouse Camden<br>**Creative Developers:** Danilo Figueiredo, Silvio Paganini|`,
  },
  {
    id: 'cjw1wwm1ceuy6091031nnzxrs',
    title: 'Social Effort Scale',
    link: 'https://youtu.be/N1gFp0dwNK8',
    thumb: { id: 'cjw1vut5i0hcq08193lzluy8n', url: '/assets/axe.jpg' },
    video: { id: 'cjw1w6w08epbr0910m4vywp2o', url: '/assets/axe.mp4', mimeType: 'video/mp4' },
    body: `# Social Effort Scale

AXE MATTE EFFECT's Social Effort Scale website measures the 'social efforts' of users with a unique algorithm. Visitors connect via Facebook, Twitter or Instagram and their social posts are scored between -500 and 500.

| Tech-Stack |Credits |
| - | - |
|• Coffeescript<br>• Twitter, Facebook and Instagram APIs<br>• Backbone.js<br>• LAMP Stack|**Director:** Takayoshi Kishimoto<br>**Technical Lead:** Silvio Paganini|`,
  },
  {
    id: 'cjw1wxz37ervj0941wajo1v5g',
    title: 'All in or Nothing',
    link: undefined,
    thumb: { id: 'cjw1vut8zems30910og8ed25l', url: '/assets/adidas.jpg' },
    video: { id: 'cjw1w6vr00kat0819p967f1by', url: '/assets/brazuca.mp4', mimeType: 'video/mp4' },
    body: `# All in or Nothing

All in or Nothing was a game developed together with Google Creative Lab and Adidas that hid prizes in different locations on Google Maps to celebrate the World Cup in Brazil.

| Tech-Stack | Credits |
| - | - |
|• HTML5<br>• Backbone.js<br>• WebWorkers<br>• Google Maps API<br>• App Engine|**Technical Director:** Yates Buckley<br>**Technical Lead:** Silvio Paganini<br>**Production Company:** UNIT9|`,
  },
  {
    id: 'cjw1wyyplevgb0910egv2nebn',
    title: "Assassin's Creed Defy History",
    link: '',
    thumb: { id: 'cjw1vut4oejd50941vlsu0tff', url: '/assets/assassins-creed.jpg' },
    video: { id: 'cjw1w6vtqelyt09414hqz6oqf', url: '/assets/defy.mp4', mimeType: 'video/mp4' },
    body: `# Assassin's Creed Defy History

The site allows users to become part of a live painting by choosing and uploading their photo, with the hope of etching themselves in Assassin Creed's history.

| Tech-Stack | Credits |
| - | - |
|• Backbone.js<br>• Python|**Production:** UNIT9 <br>**Tech Lead:** Silvio Paganini|`,
  },
  {
    id: 'ckhg6yqns38bp0908slyzycch',
    title: 'AllOfUs | BCG Platinion',
    link: 'https://allofus.com',
    thumb: { id: 'ckhg8fko002c20b11t7h5h3jd', url: '/assets/Frame_111.png' },
    video: null,
    body: `# AllOfUs | BCG Platinion

New JAMStack website for AllOfUs after it got acquired by BCG Platinion.

It was created using Gatsby + Typescript + React and Storybook + Styled-components for the design system. The content comes from Prismic.io using GraphQL.

[See it live](https://allofus.com)

| Tech-Stack |
| - |
|• Typescript<br>• React<br>• Theme-ui<br>• Framer-motion<br>• GraphQL<br>• Prismic<br>• Storybook<br>• Gatsby<br>• Firebase|`,
  },
  {
    id: 'ckhdonpmg0ym6091892ngtkhg',
    title: 'Balbino.cc',
    link: 'https://balbino.cc',
    thumb: { id: 'ckhdomx2o0ytz0b53quo6bxyv', url: '/assets/Frame_45.png' },
    video: { id: 'ckhdou7f40z8d0a004xcvjjk3', url: '/assets/balbs.mp4', mimeType: 'video/mp4' },
    body: `# Marcos Balbino | Portfolio

Portfolio for Marcos Balbino. Created using Typescript/React + Theme-ui, simple state management and lazy loading. All content is loaded via GraphQL from GraphCMS. GitHub Actions were used as CI tool to test, build and deploy to Firebase.

[See it live](https://balbino.cc)

| Tech-Stack |
| - |
|• Typescript<br>• React<br>• Theme-ui<br>• Framer-motion<br>• GraphQL<br>• GraphCMS<br>• Firebase|`,
  },
  {
    id: 'cjw1x0auievsi0910ezzbjf7w',
    title: 'Sony: Project Shiphunt',
    link: 'https://www.youtube.com/watch?v=nMCTDQPD8YA',
    thumb: { id: 'cjw1vuueyejei09413z3eyvxq', url: '/assets/robert_shiphunt_530.jpg' },
    video: { id: 'cjw1w6x40em0f09414zuwf5yt', url: '/assets/shiphunt.mp4', mimeType: 'video/mp4' },
    body: `# Sony: Project Shiphunt

The specialist games team at UNIT9 crafted an engaging gaming experience for Sony – Project Shiphunt: Oceans of Treasure.

| Tech-Stack |Credits |
| - | - |
|• Google Earth<br>• Facebook SDK<br>• LAMP Stack<br>• Kinect|**Creative Director:** Robert Bader<br>**Developers:** Artjom Vassiljev, Keita Kuroki, Silvio Paganini|`,
  },
]

export const projects = _projects.filter(p => _cfg.projects[p.id!] !== false)
