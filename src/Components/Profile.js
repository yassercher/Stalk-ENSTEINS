import React from "react";
import Stories from "./Story/Stories";

const Profile = ({ hidden, user }) => {
  return (
    <div className="profile" hidden={hidden}>
      <div className="user_info">
        <div className="user_image">
          <img src={user.pic} alt="you" />
        </div>
        <div className="user_name">YasserCherfaoui</div>
        <div className="user_bio">
          UI/UX designer, Photographer Living in Miami, US #Creative #Design
          #Photography #Urban #Art
        </div>
        <div className="user_stats">
          <b>735</b>
          <b>876</b>
          <b>586</b>
        </div>
        <div className="user_stats_text">
          <p>Posts</p>
          <p id="followers">Followers</p>
          <p id="following">Following</p>
        </div>
        <button id="follow">Follow</button>
      </div>
      <div className="pstories">
        <Stories />
      </div>
      <div className="utabs">
        <b id="highlightedp">Posts</b>
        <b>Tags</b>
        <b>Shared</b>
      </div>
    </div>
  );
};

export default Profile;
