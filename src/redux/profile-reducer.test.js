import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postsData: [
        {id: 0, message: 'Hi, how are you', likesCount: 5, img: "https://yt3.ggpht.com/a/AGF-l78XZgyutXUlON-U4sTy-EwaZoBJXrqGvQ2kxg=s900-c-k-c0xffffffff-no-rj-mo"},
        {id: 1, message: 'It\'s my first post', likesCount: 20, img: "https://yt3.ggpht.com/a/AGF-l78XZgyutXUlON-U4sTy-EwaZoBJXrqGvQ2kxg=s900-c-k-c0xffffffff-no-rj-mo"}
    ]
};

it('length of postsData should be incremented', () => {
    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});

it('message of posts should be correct', () => {
    let action = addPostActionCreator("it-kamasutra.com");
    let newState = profileReducer(state, action);
    expect(newState.postsData[2].message).toBe("it-kamasutra.com");
});


it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(1);
});
it(`after deleting length of messages should'n be decrement if id is incorrect`, () => {
    let action = deletePost(10000000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2);
});



