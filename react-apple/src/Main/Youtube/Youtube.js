import React, {useEffect, useState}from 'react'
import "./Youtube.css"

function Youtube() {

  const [youtubeVideos, setVideo] = useState([]);
  const Apikey= process.env.REACT_App_YOUTUBE_APIKEY;

  useEffect(() =>{
      fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCtCTNXm9JhceIGQhYQ0ej_X868s1ZdehE&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
      )
        .then((Response) => Response.json())
        //  OR
        // .then((Response) => {
        //   console.log(Response);
        //   return Response.json();
        // })
        .then((data) => {
          const youtubeVideosData = data.items;
          setVideo(youtubeVideosData);
        });
  }, [])
//  console.log(youtubeVideos);


  return (
    <div className="allVideosWarapper">
      <div className="container">
        <div className="row Justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper">
              Latest Videos <br />
              <br />
            </div>
          </div>
          
          {youtubeVideos.map((singleVideo) => {
             let vidId= singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`; 
             let videoWraper= (
              
              <div key={vidId} className='col-sm-12 col-md-6 col-lg-4'>
                <div className='singleVideoWraper'>
                <div className='videoThumbnail'>
                  <a href={vidLink} target = "_blank">
                    <img src={singleVideo.snippet.thumbnails.high.url} />
                  </a>
                 </div>
                 <div className='videoInfoWrapper'>
                  <div className='videoTitle'>
                    <a href={vidLink} target='_blank'>
                      {singleVideo.snippet.title}
                    </a>
                  </div>
                 <div className='videoDesc'>
                  {singleVideo.snippet.description}
                 </div>
                 </div>
                 </div>
                 </div>
            
             );
              return videoWraper
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube