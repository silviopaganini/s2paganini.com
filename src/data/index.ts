import { IContent, IProject, IContact } from '../types'
import config from './projects.config.json'

export const contents: IContent[] = [
  {
    content: `# Hello World
25 years building — from generative digital art and award-winning creative systems to enterprise platforms and agentic infrastructure. Founder of [FLUUUID](https://fluuu.id), CTO of [blkbx.](https://www.apptension.com/case-studies/blkbx-case-study), and Technical Director across studios and agencies including [The Mill](https://themill.com), [Google Creative Lab](https://experiments.withgoogle.com/), [Huge](https://hugeinc.com), [Stinkdigital](https://stinkdigital.com), [UNIT9](https://www.unit9.com), [Jam3](https://www.jam3.com), [YOOX Net-a-Porter](https://www.ynap.com), [R/GA](https://rga.com), [North Kingdom](https://northkingdom.com), [Hi-ReS!](https://www.hi-res.net), and [mgxs.co](https://mgxs.co) — across São Paulo, London, Amsterdam, Paris, Milan, Dubai, Los Angeles, and New York.

Pixels to production. — [LinkedIn](https://www.linkedin.com/in/silviopaganini) · [GitHub](https://github.com/silviopaganini) · [Email](mailto:silvio@fluuu.id)
`,
    type: 'intro',
  },
  {
    content: `16x TheFWA

*   1x Cutting Edge Project of the Year
*   1x Site of the Month
*   3x Cutting Edge Project of the Week
*   9x Site of the Day
*   2x Mobile of the Day

5x Awwwards

*   3x Site of the Day
*   1x Site of the Month
*   1x Honorable Mention

2x Lovie Awards

*   1x GOLD Branded Entertainment
*   1x GOLD Internet Video

5x Cannes Lions

*   1x Silver
*   2x Bronze
*   2x Shortlist

2x One Show

*   1x Gold Pencil
*   1x Bronze Pencil

3x Webbys

3x Effie Awards

NET Awards Nominee Dev of the year (2014)
`,
    type: 'awards',
  },
  {
    content: `2020

* **Mobile Marketer** - [Pepsi Filters](https://www.mobilemarketer.com/news/pepsi-links-gamified-ar-to-packaging-social-as-part-of-global-soccer-push/572640/)
* **Verge Magazine** - [Pepsi Filters](https://vergemagazine.co.uk/pogba-and-sterling-release-new-ar-gaming-filter-with-pepsi-max/)
* **Mirror** - [Pepsi Filters](https://www.mirror.co.uk/sport/football/news/fans-can-now-interact-lionel-21802381)
* **DailyStar** - [Pepsi Filters](https://www.dailystar.co.uk/sport/football/man-utd-liverpool-fans-given-21804636)

2018

*   **File.org** - [Exhibition](https://file.org.br/webgl_2018/silvio-paganini/)
*   **FWA Hero** - [Interview](https://thefwa.com/fwa-hero/fwa-hero-silvio-paganini)

2017

*   **NET magazine** - [Interview / Profile](/NET-profile.pdf)

2016

*   **Lines | Joy Division Visualisation** - [Chrome Experiments](https://www.chromeexperiments.com/experiment/lines)
*   **FWA Insights** - [Crystallized Skins](https://thefwa.com/article/insights-crystallized-skins)

2015

*   **FastCo Design** - [Codedoodl.es](https://www.fastcodesign.com/3049500/hypnotizing-doodles-show-the-beautiful-side-of-coding)
*   **The Wrong** - [Code Nebula](http://www.code-nebula.com/)
*   **The FWA** - [Meet the Judges](http://www.thefwa.com/article/meet-the-fwa-judges-silvio-paganini)
*   **Tubes WebGL Experiment** - [Chrome Experiments](https://www.chromeexperiments.com/experiment/generative-tubes)
*   **Iotorama.io** - [Creators Project](http://thecreatorsproject.vice.com/blog/what-is-the-internet-of-things-an-interactive-tool-lets-you-find-out-for-yourself)
*   **Iotorama.io** - [Prote.in](https://www.prote.in/en/feed/2015/05/a-playful-view-of-the-internet-of-things)
*   **Iotorama Installation** - [Alpha-ville](http://www.alpha-ville.co.uk/announcing-iotorama-new-interactive-project/)
*   **Vitasnella Projection Mapping** - [Little Black Book](http://lbbonline.com/news/how-saatchi-italy-created-the-perfect-woman-to-promote-body-positivity/)

2014

*   **TheFWA** - [Interview](http://www.thefwa.com/interview/silvio-paganini)
*   **Axe Social Effort Scale** - [Bustle](http://www.bustle.com/articles/26174-how-annoying-you-are-on-facebook-the-social-effort-scale-claims-it-can-tell-you)
*   **Axe Social Effort Scale** - [Daily Mail](http://www.dailymail.co.uk/femail/article-2643179/Are-social-media-try-hard-natural-New-website-analyzes-Twitter-Instagram-Facebook-posts-reveal-just-desperate-are.html)
*   **Axe Social Effort Scale** - [Fast Co Creative](http://www.fastcocreate.com/3031119/axes-algorithm-can-tell-you-if-youre-trying-too-hard-on-social-media)
*   **Interview** - [Creative Bloq](http://www.creativebloq.com/netmag/silvio-paganini-working-sony-disney-and-ubisoft-31411143)

2013

*   **Find Your Way To Oz** - [Adobe Inspire Magazine](http://www.adobe.com/inspire/2013/06/cutting-edge-award.html)
*   **Find Your Way To Oz** - [Creative Sandbox](http://www.google.com/think/campaigns/disney-find-your-way-to-oz.html)

2012

*   **Mercedes : Escape the Map** - [Luerzer's Archive](http://www.luerzersarchive.com/content/show/id/65)
*   **The Good Call Centre** - [The FWA Articles](http://www.thefwa.com/article/foster-s-good-call-centre)
*   **The Good Call Centre** - [Campaign Live](http://www.campaignlive.co.uk/analysis/1133415/)
*   **Mercedes : Escape the Map** - [Making of - PAGE](http://www.page-online.de/)

2011

*   **Particle Emitter** - [Chrome Experiments](http://www.chromeexperiments.com/detail/particles-emitter/?f=)
*   **Mercedes : Escape the Map** - [Campaign](http://campaignlive.co.uk/news/1103591/Mercedes-targets-younger-audience-bold-online-film/?DCMP=ILC-SEARCH)
*   **Mercedes : Escape the Map** - [Marketing Magazine](http://www.marketingmagazine.co.uk/news/1103591/Mercedes-targets-younger-audience-bold-online-film/?DCMP=ILC-SEARCH)
*   **Mercedes : Escape the Map -** [The Drum](http://www.thedrum.co.uk/news/2011/11/11/mercedes-benz-launch-%E2%80%98escape-map%E2%80%99-ad-campaign-amv-bbdo)
*   **Mercedes : Escape the Map -** [Creativity Online](http://creativity-online.com/work/mercedes-escape-the-map/25226)
*   **Mercedes : Escape the Map -** [Marketing Magazine](http://www.marketingmagazine.co.uk/news/1103591/)
*   **Project Shiphunt -** [The Edge Of Flash](http://www.adobe.com/newsletters/inspire/november2011/articles/article3/)
*   **Project Shiphunt -** [Creativity Online](http://creativity-online.com/work/sonyintel-project-shiphunt-shipwreck-alley/23561)
*   **Project Shiphunt -** [Ads of the World](http://adsoftheworld.com/media/online/sony_intel_project_shiphunt)
*   **Project Shiphunt -** [Sony Blog](http://blog.sony.com/announcing-project-shiphunt)
*   **British Sea Power Installation -** [The Guardian](http://www.guardian.co.uk/music/2011/mar/03/bat-for-lashes-gucci)
*   **British Sea Power Installation -** [The Creators Project](http://www.thecreatorsproject.com/blog/british-sea-power-live-webcast-with-augmented-kinect-visuals--2)
*   **British Sea Power Installation -** [Wired UK](http://www.wired.co.uk/news/archive/2011-02/18/british-sea-power-kinect-webcast)
*   **British Sea Power Installation -** [The Roundhouse](http://www.roundhouse.org.uk/whats-on/productions/blackbox-british-sea-power)
*   **British Sea Power Installation -** [Music News](http://www.music-news.com/shownews.asp?nItemID=39648)

*   **Umbro Create Your Crest -** [Hyperbeast](http://hypebeast.com/2010/06/umbro-crest-design-competition/)
*   **Umbro World Champions Collection -** [Unlike.net](http://paris.unlike.net/articles/476-The-World-Champions-Collection)

2007

*   **Mundo Eco -** [CCCP](http://ccsp.com.br/ultimas/noticia.php?id=28984)
*   **Extremely Picky -** [CCCP](http://ccsp.com.br/ultimas/noticia.php?id=24448)
*   **Extremely Picky -** [Portal da Propaganda](http://www.portaldapropaganda.com/aboutnews/2007/13/0018?data=2007/03)`,
    type: 'publications',
  },
]

export const projects: IProject[] = [
  {
    id: 'clk8netlk2i200bt9k5f1inez',
    title: 'GNSS Ecosystem',
    link: 'https://mem.mgxs.co/',
    thumb: {
      id: 'clk8n74to3d0c0buvl4k1wxjg',
      url: '/assets/F1FLr6mXoAABPxg.jpeg',
    },
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
    thumb: {
      id: 'ckh0c6r1c2ot50a534rql8ihs',
      url: '/assets/pepsi.jpg',
    },
    video: {
      id: 'ckh0aydtc20x30b60rfekdtlk',
      url: '/assets/video.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Pepsi AR Filter Instagram

Working together with Copa90 and The Mill, we created a product-focused AR experience that engages the user with world view AR and interactive game play with CG versions of the world's biggest football stars through the Instagram Filters.

<span style="padding:56.25% 0 0 0;position:relative;display:block;"><iframe src="https://player.vimeo.com/video/474592719?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></span>

[See it live on Instagram](https://www.instagram.com/ar/203736214362473/)

| Tech-Stack | Credits |
| - | - |
|• SparkAR<br>• Custom WebGL Shaders<br>|**Production:** The Mill <br>**Creative Developers:** Seph Li, Silvio Paganini<br>**Agency:** Copa90<br>**Client:** Pepsi|
`,
  },
  {
    id: 'ckgwfei8w01ad0a528k4dxjh5',
    title: 'TM Community',
    link: undefined,
    thumb: {
      id: 'ckgwfe5wg01990d09316g428k',
      url: '/assets/tm.jpg',
    },
    video: null,
    body: `# TM Community

TM Community website was created to support the TM App. The website was created using the JAMStack concept with Prismic and Gatsby

[See it live](https://tm.community)`,
  },
  {
    id: 'ckgwenz0000o50a53cytydskq',
    title: 'Loop Energy Monitor App',
    link: undefined,
    thumb: {
      id: 'ckgwedk0000gn0a53v1ignp33',
      url: '/assets/loop.jpg',
    },
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
    thumb: {
      id: 'ck10riouc4ta30b71zj2ze0mu',
      url: '/assets/tbvsc.png',
    },
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
    thumb: {
      id: 'ckgw12huw01xq0956ro1l4i8c',
      url: '/assets/codice.jpg',
    },
    video: {
      id: 'ckgwb2rrk03d60a06gdd5f7e0',
      url: '/assets/leo.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'cju5sepmytvdg0c15trpvuao7',
      url: '/assets/spinnup.jpg',
    },
    video: {
      id: 'cju5sf3vrtvmf0c15e9zv4z57',
      url: '/assets/viz11.mp4',
      mimeType: 'video/mp4',
    },
    body: `# SPINNUP

FLUUUID was approached by [Dragon Rouge](https://www.dragonrouge.com) London to collaborate on a music visualisation player for the new Universal Music Distribution website.

Together with [Bruno Imbrizi](http://brunoimbrizi.com) we created 5 different WebGL reactive visualisations.

| Tech-Stack | Credits |
| - | - |
|• Three.js<br>• Custom WebGL Shaders<br>• VanillaJS<br>• Webaudio API|**Production:** FLUUUID <br>**Creative Developers:** Bruno Imbrizi, Silvio Paganini<br>**Agency:** Dragon Rouge<br>**Client:** Universal Music|
`,
  },
  {
    id: 'cju5tccl2uhse0c15jewsk5vh',
    title: 'Intangible Matter',
    link: 'https://lucyhardcastle-thefifthsense.i-d.co/en_gb/',
    thumb: {
      id: 'cju5taib0ugkv0c152qfcrc5h',
      url: '/assets/x_0015_c.jpg',
    },
    video: {
      id: 'cju5tbnvuuhdg0c1557retix4',
      url: '/assets/fifth.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'cjw1vutv20hdc08198xzt9k8r',
      url: '/assets/oz.jpg',
    },
    video: {
      id: 'cjw1w6x250kc70819fhbev2oc',
      url: '/assets/oz.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'cju5sg0gqtw4l0c15jwxih9vn',
      url: '/assets/deadly-class.jpg',
    },
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
    thumb: {
      id: 'ckelsasg805wr01500ruom4fm',
      url: '/assets/iu.jpg',
    },
    video: null,
    body: `# Made With Code

Together with Google and Nexus Studios, we produced a series of projects for the **Made with Code** learning platform. Each project had different partnerships such as Disney, Snapchat and Zac Posen.

|Tech-Stack |
| - |
|• ClosureJS<br>• Modified Google Blockly<br>• Python (AppEngine) |
`,
  },
  {
    id: 'cjw1wmwad0oil0819kusowrax',
    title: 'Vitasnella Projection',
    link: 'https://medium.com/@silviopaganini/vitasnella-full-body-projection-mapping-daea4cf53dfe',
    thumb: {
      id: 'cjw1vuuimemt509101cj0d7qz',
      url: '/assets/vitasnella.jpg',
    },
    video: {
      id: 'cjw1w6xfmem120941zc62bbfb',
      url: '/assets/vitasnela.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Vitasnella Projection

Saatchi Milan challenged UNIT9 to create a hardware+software solution to project real-time 'body deformations' back onto a live subject.

[View full case study](https://medium.com/@silviopaganini/vitasnella-full-body-projection-mapping-daea4cf53dfe)

| Tech-Stack |Credits |
| - | - |
|• Unity3D<br>• Kinect<br>• Arduino<br>• Mobile Sensors|**Agency:** Saatchi&Saatchi Milan<br>**Technical Director:** Silvio Paganini|
`,
  },
  {
    id: 'cjw1wkoqmesb209100kkws3pa',
    title: 'Crystallized Skins',
    link: 'http://crystallizedskins.com/',
    thumb: {
      id: 'cjw1vut5jejda0941bd47feqj',
      url: '/assets/crystalised.jpg',
    },
    video: {
      id: 'cjw1w6vueepbl0910ybh1frt4',
      url: '/assets/crystal.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Crystallized Skins

Crystallized Skins was a project created to be part of [The Wrong - New Digital Art Biennale](https://thewrong.org) where we made available an online collection of 3D objects created by 13 international video artists.

[See it live](http://crystallizedskins.com/)`,
  },
  {
    id: 'cju5tgajeukc30c15nytofx9v',
    title: 'MTV Movie Awards',
    link: undefined,
    thumb: {
      id: 'cju5th777ukv00c15h1n93aow',
      url: '/assets/x_0011_c.jpg',
    },
    video: {
      id: 'cju5tg6ctuk8z0c15w17e455c',
      url: '/assets/mtv.mp4',
      mimeType: 'video/mp4',
    },
    body: `# MTV Movie Awards

Together with Jam3 Toronto we created a Facebook crawler that would generate a video on-demand featuring pictures of you and your friends with a dynamically generated voice over. As a result we created ~500,000 videos that were shared on social media.

|Tech-Stack |
| - |
|• AWS Elastic Beanstalk<br>• FFMpeg <br>• Facebook SDK<br>• React<br>• Nodejs |
`,
  },
  {
    id: 'cjw1woma40ox70819ysv0abtx',
    title: '5Gum experience',
    link: '',
    thumb: {
      id: 'cjw1vut0vemrv0910ksuxjwiy',
      url: '/assets/5gum.jpg',
    },
    video: {
      id: 'cjw1w6vq4epba0910jrd4n0zg',
      url: '/assets/5gum.mp4',
      mimeType: 'video/mp4',
    },
    body: `# 5Gum experience

Experience 5Gum is a multi-sensory virtual reality installation that lets you fly through virtual worlds and shoot thunderbolts from your fingertips.

[See full case study at the UNIT9 website](https://www.unit9.com/project/5gum/)

| Tech-Stack | |
| - | - |
|• OpenGL<br>• OpenAL<br>• C++<br>• OpenFrameworks<br>• Arduino<br>• Raspberry Pi<br>• Oculus Rift||

`,
  },
  {
    id: 'cjw1wr96l0plp0819y3ekjyr2',
    title: 'Delta MovieStar',
    link: '',
    thumb: {
      id: 'cjw1vut2vejd00941aebvxk7g',
      url: '/assets/delta.jpg',
    },
    video: {
      id: 'cjw1w6wa90kbb0819eouclymk',
      url: '/assets/delta.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'ckk4ho8202dyz0a53h4m568e2',
      url: '/assets/robert-fosters-1400x788.jpg',
    },
    video: null,
    body: `# Good Call Center

Adam & Eve approached us to create the interactive component to their "Good Call" campaign for Foster's, "The Good Call Centre".

[See full case study at the UNIT9 website](https://www.unit9.com/project/fosters-good-call-centre)`,
  },
  {
    id: 'cjw1wt2lc0q1i0819a63xip9d',
    title: 'British Sea Power',
    link: '',
    thumb: {
      id: 'cjw1w63fjelsi09410h6hqfy6',
      url: '/assets/kinect.jpg',
    },
    video: {
      id: 'cjw1w6vq90kao0819y2tyl5jg',
      url: '/assets/blackbox.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'cjw1vut5i0hcq08193lzluy8n',
      url: '/assets/axe.jpg',
    },
    video: {
      id: 'cjw1w6w08epbr0910m4vywp2o',
      url: '/assets/axe.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'cjw1vut8zems30910og8ed25l',
      url: '/assets/adidas.jpg',
    },
    video: {
      id: 'cjw1w6vr00kat0819p967f1by',
      url: '/assets/brazuca.mp4',
      mimeType: 'video/mp4',
    },
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
    thumb: {
      id: 'cjw1vut4oejd50941vlsu0tff',
      url: '/assets/assassins-creed.jpg',
    },
    video: {
      id: 'cjw1w6vtqelyt09414hqz6oqf',
      url: '/assets/defy.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Assassin's Creed Defy History

The site allows users to become part of a live painting by choosing and uploading their photo, with the hope of etching themselves in Assassin Creed's history.

| Tech-Stack | Credits |
| - | - |
|• Backbone.js<br>• Python|**Production:** UNIT9 <br>**Tech Lead:** Silvio Paganini|
`,
  },
  {
    id: 'ckhg6yqns38bp0908slyzycch',
    title: 'AllOfUs | BCG Platinion',
    link: 'https://allofus.com',
    thumb: {
      id: 'ckhg8fko002c20b11t7h5h3jd',
      url: '/assets/Frame_111.png',
    },
    video: null,
    body: `# AllOfUs | BCG Platinion

New JAMStack website for AllOfUs after it got acquired by BCG Platinion.

It was created using Gatsby + Typescript + React and Storybook + Styled-components for the design system. The content comes from Prismic.io using GraphQL.

[See it live](https://allofus.com)

| Tech-Stack |
| - |
|• Typescript<br>• React<br>• Theme-ui<br>• Framer-motion<br>• GraphQL<br>• Prismic<br>• Storybook<br>• Gatsby<br>• Firebase|
`,
  },
  {
    id: 'ckhdonpmg0ym6091892ngtkhg',
    title: 'Balbino.cc',
    link: 'https://balbino.cc',
    thumb: {
      id: 'ckhdomx2o0ytz0b53quo6bxyv',
      url: '/assets/Frame_45.png',
    },
    video: {
      id: 'ckhdou7f40z8d0a004xcvjjk3',
      url: '/assets/balbs.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Marcos Balbino | Portfolio

Portfolio for Marcos Balbino. Created using Typescript/React + Theme-ui, simple state management and lazy loading. All content is loaded via GraphQL from GraphCMS. GitHub Actions were used as CI tool to test, build and upload to Firebase.

[See it live](https://balbino.cc)

| Tech-Stack |
| - |
|• Typescript<br>• React<br>• Theme-ui<br>• Framer-motion<br>• GraphQL<br>• GraphCMS<br>• Firebase|`,
  },
  {
    id: 'cjw1x0auievsi0910ezzbjf7w',
    title: 'Sony: Project Shiphunt',
    link: 'https://www.youtube.com/watch?v=nMCTDQPD8YA',
    thumb: {
      id: 'cjw1vuueyejei09413z3eyvxq',
      url: '/assets/robert_shiphunt_530.jpg',
    },
    video: {
      id: 'cjw1w6x40em0f09414zuwf5yt',
      url: '/assets/shiphunt.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Sony: Project Shiphunt

The specialist games team at UNIT9 crafted an engaging gaming experience for Sony – Project Shiphunt: Oceans of Treasure.

| Tech-Stack |Credits |
| - | - |
|• Google Earth<br>• Facebook SDK<br>• LAMP Stack<br>• Kinect|**Creative Director:** Robert Bader<br>**Developers:** Artjom Vassiljev, Keita Kuroki, Silvio Paganini|`,
  },
]

export const experiments: IProject[] = [
  {
    id: 'cklju8ta82bwe0a53ar5qowx5',
    title: 'Tensorflow.js Experiments',
    link: 'https://tensorflow.s2paganini.com',
    thumb: {
      id: 'cklju4dk82b4f0a56grernjda',
      url: '/assets/tf.jpg',
    },
    video: {
      id: 'cklju6o4g2bcv0a566eymuhjv',
      url: '/assets/tf.mp4',
      mimeType: 'video/mp4',
    },
    body: `# Machine Learning using TensorFlow.js Experiments

This is a series of experiments using TensorFlow to explore machine learning only using the browser

Link for the experiment => [http://tensorflow.s2paganini.com](http://tensorflow.s2paganini.com)

| Tech-Stack |
| - |
|• Typescript<br>• TensorFlow.js<br>• React<br>• Storybook<br>• Teachable Machine|
`,
  },
  {
    id: 'ck10skbgbv4mt0b49ja0hhrgf',
    title: 'MuDA Letter Soup',
    link: 'http://muda.co/collection/lettersoup/',
    thumb: {
      id: 'ck10sjw5l52r40b71eor9mdvp',
      url: '/assets/T3Qd1sHdRW2WUyx7mJ3r_muda.jpg',
    },
    video: {
      id: 'ck10sk968v4m80b496f6wa368',
      url: '/assets/iYwZsYeUQcy1bz07Aq4O_muda.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10sp91gv63d0b49jl1tb6fg',
    title: '#webgl #physics #xmas',
    link: 'https://labs.fluuu.id/xmas',
    thumb: {
      id: 'ck10son61v1cc0b85mo7sd848',
      url: '/assets/CY58vVgXTJOjd9YVeIVX_xmas.jpg',
    },
    video: {
      id: 'ck10sp6djv62m0b49sfhpnphb',
      url: '/assets/RHY3iTlzTkG80ddsdeyT_xmas.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10stbmov20u0b549kk6lg45',
    title: 'Fireworks',
    link: 'https://labs.fluuu.id/fireworks/',
    thumb: {
      id: 'ck10ssrvj55z30b718n2rfbrd',
      url: '/assets/wgGVnLFQMCVFZyjoEKG6_fireworks.jpg',
    },
    video: {
      id: 'ck10st59s56220b71dmwnd90i',
      url: '/assets/rgaK7jkFQHOejPq5I7jg_fireworks.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10suezgv2r20b85zdlglibe',
    title: 'Vendetta',
    link: 'https://labs.fluuu.id/vendetta/',
    thumb: {
      id: 'ck10subw4v7bj0b490hbyq3bv',
      url: '/assets/M3fCjhJaTc2s4d3niW7U_vendetta.jpg',
    },
    video: {
      id: 'ck10styqcv78v0b49jdw687iu',
      url: '/assets/LOZXZJ0Q7WtJahOu9fQo_vendetta.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10sim9yuzl30b54u2bct7cb',
    title: '#webgl #physics',
    link: 'https://labs.fluuu.id/sym/',
    thumb: {
      id: 'ck10si5nnuzig0b54lu0zb9fz',
      url: '/assets/9btn6VLSSm2S4Jgjklgj_sym.jpg',
    },
    video: {
      id: 'ck10siix7uzzn0b85b2966p0t',
      url: '/assets/tuEn015SwWa5WvXiPEpG_sym.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10sqk3iv1b10b54kmw97qt5',
    title: '#webgl #gameOfLife',
    link: 'https://labs.fluuu.id/iso2/',
    thumb: {
      id: 'ck10sq10wv6ay0b49snvfowoa',
      url: '/assets/ubl0E1RSZWLT4Mkw7DTU_iso2.jpg',
    },
    video: {
      id: 'ck10sqgoyv6f20b49cpxu9u1c',
      url: '/assets/4ogavAskTRGKbuSIk8OK_gol.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10ss5n755ui0b7128r7j63s',
    title: 'Stars',
    link: 'https://labs.fluuu.id/stars/',
    thumb: {
      id: 'ck10ss2p655tp0b7115iupw6x',
      url: '/assets/rO6R3AYsQ76zQyObi2b0_stars.jpg',
    },
    video: {
      id: 'ck10srr4tv28k0b85und8osj7',
      url: '/assets/wmwt3BtRI67iTHOa6p16_planets.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10sw68hv2i80b54kj291lzz',
    title: 'Boxes',
    link: 'https://labs.fluuu.id/box-physics/',
    thumb: {
      id: 'ck10sv5npv2cd0b54sds3zukr',
      url: '/assets/XA9VkBrRCC4CHmBy7XoI_box.jpg',
    },
    video: {
      id: 'ck10svjqnv2eb0b547koyrwfy',
      url: '/assets/4DKCAJ0gSfiQ8K6Y9NG3_boxes.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10sxhrg57300b71jb1z5186',
    title: 'Lines',
    link: 'https://labs.fluuu.id/lines/',
    thumb: {
      id: 'ck10sxdxyv7w30b49ahwov0js',
      url: '/assets/ekddGXBQ51QAngLy67AS_lines.jpg',
    },
    video: {
      id: 'ck10sx0uyv2pf0b54lik2w31j',
      url: '/assets/22PDyPVoRyKTjdNwvk6H_lines.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10syi31v83s0b497ifjnicq',
    title: 'Tubes',
    link: 'https://labs.fluuu.id/tubes/',
    thumb: {
      id: 'ck10sy0jjv80b0b49k4byunh7',
      url: '/assets/aXWV7xngQc2UI8NLqh8d_tubes.jpg',
    },
    video: {
      id: 'ck10sybqvv3fs0b85zjfkgbua',
      url: '/assets/IresLdX3S9SzG2lqMhQx_tubes.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10szg7e57kl0b71pcr5xgz0',
    title: 'Geo',
    link: 'https://labs.fluuu.id/geo/dist/',
    thumb: {
      id: 'ck10szdxfv89x0b49laxemnkf',
      url: '/assets/ncrjRso8Qde4Li452xTD_geo.jpg',
    },
    video: {
      id: 'ck10sz4n7v3pv0b855fd489zf',
      url: '/assets/tot1gHoUT0m3hXaJYdvO_geo.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10t14e5v4340b85eryumfj4',
    title: 'Mirror',
    link: 'https://labs.fluuu.id/generative-forms/dist/',
    thumb: {
      id: 'ck10t0i5n57se0b71tmhi31t4',
      url: '/assets/3xI73Dt4TcatsRjS2YNj_generative-forms.jpg',
    },
    video: {
      id: 'ck10t122xv8m30b493nl48bd8',
      url: '/assets/hnDIclEiQmKjhsUvwc5W_mirror.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10t2a9hv3yx0b54q18ejq9h',
    title: 'Glow',
    link: 'https://labs.fluuu.id/bloom/dist/',
    thumb: {
      id: 'ck10t27kjv4ce0b85eghlkb3r',
      url: '/assets/uIUHgGiRIyB98CKInD1s_bloom.jpg',
    },
    video: {
      id: 'ck10t1vydv3vi0b54h1pbc6hd',
      url: '/assets/ZbntwurxStuSri6JqhtG_glow.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10t3hht58ol0b71se0ckvuh',
    title: 'Phong',
    link: 'https://labs.fluuu.id/phong/dist/',
    thumb: {
      id: 'ck10t2vpav43x0b54qsrfgll8',
      url: '/assets/OI684Fr2QPxq2lssunaI_phong.jpg',
    },
    video: {
      id: 'ck10t3f63v94w0b496vn7l3ol',
      url: '/assets/EHSVhcp0Q8WWOWvS9AGs_phong.mp4',
      mimeType: 'video/mp4',
    },
  },
  {
    id: 'ck10t4by958xa0b71l7gdx0gs',
    title: 'Curl',
    link: 'https://labs.fluuu.id/curl/dist/',
    thumb: {
      id: 'ck10t49o258wh0b71uvuu500b',
      url: '/assets/mUXM7J3yQmatJmNUjQuz_curl.jpg',
    },
    video: {
      id: 'ck10t40v158uj0b71wfnfyxcr',
      url: '/assets/9m6u6KZWRs28gLHtIXuJ_curl.mp4',
      mimeType: 'video/mp4',
    },
  },
]


// ── Filter by projects.config.json ────────────────────
// Set any ID to false in that file to hide it from the site.
const _cfg = config as { projects: Record<string, boolean>; experiments: Record<string, boolean> }
projects.splice(0, projects.length, ...projects.filter(p => _cfg.projects[p.id!] !== false))
experiments.splice(0, experiments.length, ...experiments.filter(e => _cfg.experiments[e.id!] !== false))

export const contacts: IContact[] = [
  {
    link: 'https://www.linkedin.com/in/silviopaganini',
    icon: {
      id: 'cjvzcl8ny0lg60941mk2euqxv',
      url: '/assets/li.png',
    },
  },
  {
    link: 'http://github.com/silviopaganini',
    icon: {
      id: 'cjvzclv6pjl8m0819v3m7pfhi',
      url: '/assets/gh.png',
    },
  },
  {
    link: 'https://medium.com/@silviopaganini',
    icon: {
      id: 'cjvzckofv0lbm09419imv4hx6',
      url: '/assets/me.png',
    },
  },
]

export const heroStats: string[] = [
  '25 years building',
  '3× startup founder',
  '16× TheFWA',
  '5× Cannes Lions',
  '5× Awwwards',
  '3× Webby Awards',
  '2× Lovie Awards',
  '100+ projects shipped',
  '25+ agencies & studios',
  '65 countries visited',
  '10+ countries worked in',
  'TheFWA judge',
  'codedoodl.es — 8 years',
  'Guest Lecturer · Miami Ad School',
  'Former founder · CTO · Technical Director',
  'BCG X · São Paulo',
]
