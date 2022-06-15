import React, { useEffect, useState } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import YouTubeDetail from "../YouTubeDetail/YouTubeDetail";
import classes from "./Youtube.module.css";

const Youtube = (props) => {
  const [youTube, setVideo] = useState([]);
  const [VideoId, setVideoId] = useState("");
  const [Description, setDescription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Information, setInformation] = useState(false);
  const [DetailInformation, setDetailInformation] = useState(false);
  useEffect(() => {
    fetch(
      "	https://www.googleapis.com/youtube/v3/search?key=AIzaSyCa7WCZ3sQvAwZw9JWNZq2uZ8Slalo8PjY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.items);
      })
      .catch(() => {
        console.log("please check the API");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const DescriptionHandler = (e) => {
    setDescription((prevValue) => !prevValue);
    setVideoId(e.target.className);
  };
  const InformationHandler = (e) => {
    setInformation((prevValue) => !prevValue);
    setDetailInformation(e.target.className);
  };
  return (
    <div className={classes.allVideosWrapper}>
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className={classes["title-wrapper"]}>Latest Videos</div>
          </div>
          {youTube?.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-4">
                <div className={classes.singleVideoWrapper}>
                  <div className={classes.videoThumbnail}>
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                      {Information &&
                        DetailInformation === singleVideo.id.videoId && (
                          <YouTubeDetail Video={DetailInformation} />
                        )}
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        <p> {singleVideo.snippet.title}</p>
                      </a>
                    </div>
                    <div>
                      <button
                        style={{
                          marginBottom: 10,
                          marginTop: 20,
                          height: 40,
                          width: 100,
                          backgroundColor: "blueviolet",
                          color: "white",
                        }}
                        className={vidId}
                        onClick={DescriptionHandler}
                      >
                        Description
                      </button>
                      <button
                        style={{
                          marginBottom: 10,
                          marginTop: 20,
                          marginLeft: 10,
                          height: 40,
                          width: 150,
                          backgroundColor: "blueviolet",
                          color: "white",
                        }}
                        className={vidId}
                        onClick={InformationHandler}
                      >
                        More Information
                      </button>
                      {Description && VideoId === singleVideo.id.videoId && (
                        <p className={classes.para}>
                          {singleVideo.snippet.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
