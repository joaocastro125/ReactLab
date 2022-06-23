import {ApolloClient, InMemoryCache} from '@apollo/client'
export const client=new ApolloClient({
    uri:"https://api-sa-east-1.graphcms.com/v2/cl4o5ha3b0nyo01xx6gy0bo8k/master",
    cache:new InMemoryCache()
})