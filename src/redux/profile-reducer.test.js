

let state = {
        posts: [
            {posts: 'Hello, how are you?', id: '1', likes: ' 23'},
            {posts: "It my first post!", id: '2', likes: ' 18'},
            {posts: "Js it's my big trouble", id: '3', likes: ' 10'},
            {posts: "I must flying forward", id: '4', likes: ' 18'},
            {posts: 'Marimo!!!!', id: '5', likes: ' 1'}
        ]
    };

it('new post should be added', () => {
    let action = addPostActionCreator('it-kamasutra.com')
    
    let newState = profileReducer(state, action)

    expect(newState.posts.lenght).toBe(5) 
});