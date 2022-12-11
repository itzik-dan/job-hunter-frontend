import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllProfiles } from "../../actions/profile";
import ProfileItem from "./ProfileItem";
import SearchBar from "./SearchBar";
import "tachyons";

const ProfileList = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const { loading, profiles } = profile;

  // Define the search term state
  const [searchTerm, setSearchTerm] = useState("");
  // Fetch all profiles from DB when componont mounts
  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  // Update searchTerm state when user start typing
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Generate filtered profiles with accordance to searchTerm that user types
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h3>
            <i className="fas fa-users" /> The Community
          </h3>
          <h5>View our hunters</h5>
          <SearchBar searchChange={onSearchChange} />
          <div
            style={{
              overflow: "scroll",
              border: "5px solid black",
              height: "400px",
            }}
          >
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProfileList;
