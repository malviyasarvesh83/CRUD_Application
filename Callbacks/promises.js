const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
];

let intervalId = 0;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval( () => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime()-post.createdAt) / 1000 } seconds ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        
        const error=false;
        if (!error) {
            resolve();
        } else {
            reject('Error: Array is Empty');
        }
       }, 2000); 
    });
}

function create4Post(post) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        posts.push({ ...post, createdAt: new Date().getTime() });
        
        const error = true;
        if (!error) {
          resolve();
        } else {
          reject("Error: Array is Empty");
        }
       }, 2000); 
    });
}

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(err => console.log(err));
create4Post({ title: "Post Four", body: "This is post four" }).then(getPosts).catch(err => console.log(err));