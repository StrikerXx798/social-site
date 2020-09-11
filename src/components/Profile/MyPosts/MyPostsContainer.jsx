
import {profileReducerActionCreators} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
//import PropTypes from 'prop-types'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = {
    addPost:profileReducerActionCreators.addPost,
    deletePost: profileReducerActionCreators.deletePost,
    updatePost: profileReducerActionCreators.updatePost
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

