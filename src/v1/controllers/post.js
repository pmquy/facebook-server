const db = require('../databases/post')
class Controller {
    getPosts = async (req, res) => {        
        const posts = await db.findPosts(req.query);
        res.send(posts)
    }

    getPostByID = async (req, res) => {
       const post = await db.findPostByID(req.params.id);
       res.send(post)
    }

    deletePostByID = async (req, res) => {
        const post = await db.deletePostByID(req.params.id)
        res.send(post)
    }
    
    updatePostByID = async (req, res) => {
        const post = await db.updatePostById(req.params.id, req.body);
        res.send(post)
    }

    createPost = async (req, res) => {                
        const post = await db.createPost(req.body)
        res.send(post)
    }

    deletePosts = async (req, res) => {
        const posts = await db.deletePosts(req.query)
        res.send(posts);
    }

    updatePosts = async (req, res) => {
        const posts = await db.updatePosts(req.body)
        res.send(posts)
    }
}

module.exports = new Controller();