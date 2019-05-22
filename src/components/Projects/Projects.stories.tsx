import * as React from 'react';
import {
  storiesOf
} from '@storybook/react'
import Projects from './Projects';
import {
  IProject
} from '../../types'

const mock: IProject[] = [{
  "id": "cju5sfhohtvua0c15y484c6zx",
  "title": "Spinnup | Music Visualisation",
  "link": "https://medium.com/@silviopaganini/spinnup-83bb39d37f40",
  "thumb": {
    "id": "cju5sepmytvdg0c15trpvuao7",
    "url": "https://media.graphcms.com/WfvnPFztRyen4lJrGEOI",
    "__typename": "Asset"
  },
  "video": {
    "id": "cju5sf3vrtvmf0c15e9zv4z57",
    "url": "https://media.graphcms.com/twUeVukkQPqcXSWmepe8",
    "mimeType": "video/mp4",
    "__typename": "Asset"
  },
  "__typename": "Project"
}, {
  "id": "cju5sg6q0tw8l0c15wwu5vv30",
  "title": "Deadly Class | SparkAR",
  "link": "https://medium.com/@silviopaganini/deadly-class-2598a57b144a",
  "thumb": {
    "id": "cju5sg0gqtw4l0c15jwxih9vn",
    "url": "https://media.graphcms.com/1SFcKfPFTmes8CJ3Ihj5",
    "__typename": "Asset"
  },
  "__typename": "Project"
}, {
  "id": "cju5t7d1duej50c15vtc5242f",
  "title": "Made with Code | Geofilters",
  "link": "https://www.madewithcode.com/projects/snapchat",
  "thumb": {
    "id": "cju5t7arcuehq0c15lo1w0cvb",
    "url": "https://media.graphcms.com/hHXVE4bjRz86t5tBqJry",
    "__typename": "Asset"
  },
  "__typename": "Project"
}, {
  "id": "cju5tccl2uhse0c15jewsk5vh",
  "title": "Intangible Matter",
  "link": "https://lucyhardcastle-thefifthsense.i-d.co/en_gb/",
  "thumb": {
    "id": "cju5taib0ugkv0c152qfcrc5h",
    "url": "https://media.graphcms.com/ZEqS4s9xTT2zTimkCPti",
    "__typename": "Asset"
  },
  "video": {
    "id": "cju5tbnvuuhdg0c1557retix4",
    "url": "https://media.graphcms.com/18soj6sqSy64m5Pk0haj",
    "mimeType": "video/mp4",
    "__typename": "Asset"
  },
  "__typename": "Project"
}, {
  "id": "cju5tewftujf50c15x0a6i7vc",
  "title": "Made With Code | Equality",
  "thumb": {
    "id": "cju5tenhluj8h0c154y6pzip5",
    "url": "https://media.graphcms.com/D3UE1S5uTpWT5EvGXNn6",
    "__typename": "Asset"
  },
  "video": {
    "id": "cju5tduxkuiqe0c15xq5btq7i",
    "url": "https://media.graphcms.com/6CiVH4YxSU64ZDFkj94T",
    "mimeType": "video/mp4",
    "__typename": "Asset"
  },
  "__typename": "Project"
}, {
  "id": "cju5tgajeukc30c15nytofx9v",
  "title": "MTV Movie Awards",
  "thumb": {
    "id": "cju5th777ukv00c15h1n93aow",
    "url": "https://media.graphcms.com/KX6nuGLuQGin38zWx2AY",
    "__typename": "Asset"
  },
  "video": {
    "id": "cju5tg6ctuk8z0c15w17e455c",
    "url": "https://media.graphcms.com/J2NOCBhRwaUvOuyvzSyT",
    "mimeType": "video/mp4",
    "__typename": "Asset"
  },
  "__typename": "Project"
}]

storiesOf('Projects', module).add('Projects', () => ( 
<div>
  <Projects title = "Featured Projects"
  data = {
    mock
  }
  /> </div>
))