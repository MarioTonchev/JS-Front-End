function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostsButton = document.getElementById('btnViewPost');
    const postsSelect = document.getElementById('posts');  

    const postTitleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const commentsEl = document.getElementById('post-comments');
    
    let storedPosts = [];

    function createOptions(posts) {
        posts.forEach(p => {
            const option = document.createElement('option');

            option.value = p.id;
            option.textContent = p.title;

            postsSelect.appendChild(option);

            storedPosts.push({body: p.body, title: p.title, id: p.id});
        });

        console.log(storedPosts);
        
    }

    function displayPostsAndComments(comments) {
        let selectedPostId = postsSelect.value;

        let selectedPost = storedPosts.find(p => p.id === selectedPostId);

        postTitleEl.textContent = selectedPost.title;
        postBodyEl.textContent = selectedPost.body;

        commentsEl.innerHTML = '';

        comments
        .filter(c => c.postId === selectedPostId)
        .forEach(c => {
            const li = document.createElement('li');

            li.textContent = c.text;

            commentsEl.append(li);
        });
    }

    function loadPostsHandler() {
        postsSelect.innerHTML = '';

        fetch(POSTS_URL)
        .then(r => r.json())
        .then(r => {
            createOptions(Object.values(r));
        });
    }

    function viewPostsHandler() {
        fetch(COMMENTS_URL)
        .then(r => r.json())
        .then(r => {
            displayPostsAndComments(Object.values(r));
        });
    }

    loadPostsButton.addEventListener('click', loadPostsHandler);
    viewPostsButton.addEventListener('click', viewPostsHandler);    
}

attachEvents();