import React, { Component } from "react";
import ProfileSummaryCard from "../Profile/ProfileSummaryCard";
import UpdateCard from "../Profile/UpdateCard";

class ProfileCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="flex flex-wrap mb-8 mt-16">
          <div className="w-full lg:w-8/12 px-4">
            <UpdateCard user={this.props.user} />
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <ProfileSummaryCard user={this.props.user} />
          </div>
        </div>
      </>
    );
  }
}

export default ProfileCard;
