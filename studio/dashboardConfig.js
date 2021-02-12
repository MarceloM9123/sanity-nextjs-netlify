export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6027030a1bcacd0f23290d7d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-netlify-studio-8joswzn8',
                  apiId: 'a9f0ac91-991d-4ae0-95cd-f8b21b607251'
                },
                {
                  buildHookId: '6027030ae0f0f70decf94245',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-netlify-web',
                  apiId: 'aee1ebd0-d488-486c-82f9-76fa0eb1256c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarceloM9123/sanity-nextjs-netlify',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-netlify-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
