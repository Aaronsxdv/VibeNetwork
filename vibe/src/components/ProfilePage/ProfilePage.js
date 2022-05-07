import "./profile.css"
import { BrowserRouter, Route, Routes, Navigate,Link} from "react-router-dom";
function ProfilePage() {
    return (
      <div className="profile_page">

        <div className="cover_image_container"></div>
        <div className="main_info">
          <img className="profile_img" src="https://pbs.twimg.com/media/ETgEAG6UYAAw2JG.jpg"/>
          <div className="profile_name_container">
            <h1>Profile Name</h1>
            <p>@profile</p>  
          </div>
          <button class="btn edit_profile">Edit profile</button>  
        </div>
        
       
        <div className="profile_button_group">
          <Link className="profile_link" to="/posts">Posts</Link>
          <Link className="profile_link" to="/media">Media</Link>
          <Link className="profile_link" to="/likes">Likes</Link>
          <Link className="profile_link" to="/comments">Comments</Link>
        </div>
      </div>
    );
  }
  
  export default ProfilePage;