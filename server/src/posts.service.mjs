import loadJson from 'load-json-file';

let posts = loadJson.sync('./data/posts.json'); //Saving the data  from the wanted file to a variable 

export function getPosts() {
    return posts;
}

export function getPost(id){
    const [ post ] = posts.filter(post => post.id == id);
    return post;
}

export function addPost(post){
    posts.push(post);
}

export function deletePost(id){
    posts = posts.filter(post => post.id != id);//"posts" is an array so we filter it by id. 
}

export function editPost(id, newPost){
    let [post]= posts.filter(post => post.id == id);//"posts" is an array so we filter it by id. the distructuring is to get a single object and not an array with a single object
    post.title = newPost.title, 
    post.body = newPost.body
}


export function getPostByUserId(userId){
    return posts.filter(post => post.userId == userId);
}