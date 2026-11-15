import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Exit Fresh',
  description: 'IS117 group business research: an interior car-care kit that comes with a scent.',
  base: '/is117-group-business/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Research', link: '/research' },
      { text: 'Sources', link: '/sources' },
      { text: 'Team & reviews', link: '/team' }
    ],
    sidebar: [
      { text: 'Start here', items: [{ text: 'Overview', link: '/' }] },
      {
        text: 'Research',
        items: [
          { text: 'Research findings', link: '/research' },
          { text: 'Sources & check dates', link: '/sources' }
        ]
      },
      { text: 'Team', items: [{ text: 'Team, contributions & reviews', link: '/team' }] }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    footer: {
      message: 'Class project for IS117-005 (NJIT). Exit Fresh is a fictional business; competitor facts come from official pages checked 2026-11-15.'
    }
  }
})
