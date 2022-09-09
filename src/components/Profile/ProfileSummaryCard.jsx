import React, { Component } from "react";

import profileImage from "../../assets/images/team-2-800x800.jpg";

class ProfileSummaryCard extends Component {
  state = {};
  render() {
    const {
      username,
      personal_email,
      first_name,
      last_name,
      company_name,
      company_email,
    } = this.props.user;
    const designation = "Developer";
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words pb-8 bg-darkblue w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={profileImage}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-eggyellow">
                      22
                    </span>
                    <span className="text-sm text-eggyellow">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-eggyellow">
                      10
                    </span>
                    <span className="text-sm text-eggyellow">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-eggyellow">
                      89
                    </span>
                    <span className="text-sm text-eggyellow">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal text-eggyellow mb-2">
                {first_name + " " + last_name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-eggyellow font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-eggyellow"></i>{" "}
                {company_name}
              </div>
              <div className="mb-2 text-eggyellow mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-eggyellow"></i>
                {designation} - {company_name}
              </div>
              <div className="mb-2 text-eggyellow">
                <i className="fas fa-university mr-2 text-lg text-eggyellow"></i>
                {company_name}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileSummaryCard;