export default {
  actions: {
   async fetchPosts(ctx)
    {
      const res =  await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      const posts = await res.json()
      ctx.commit('updatePost', posts)
    }
  },
  mutations: {
    updatePost(state, posts)
    {
      state.posts = posts
    } 
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state)
    {
      console.log(state.posts)
      return state.posts
    },
    postsCount(state)
    {
      return state.posts.length
    }
  },


}