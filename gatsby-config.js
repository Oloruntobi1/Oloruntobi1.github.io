module.exports = {

    siteMetadata: {
        title: 'Askari blog',
    },
    
    plugins: [
        'gatsby-plugin-sass',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'files',
              path: `${__dirname}/src/markdown`,
            },
        },

        'gatsby-transformer-remark'
        
    ]

}