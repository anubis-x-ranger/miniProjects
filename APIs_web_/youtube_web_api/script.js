const API = "AIzaSyCHBqnUok-cIjLDDeA0rjQROh9kieq1YIs";

const results_div = document.querySelector(".video-container");

async function searchVideo() {
  try {
    let video_query = document.querySelector(".search-bar").value;
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_query}&type=video&key=${API}&maxResults=10`
    );
    let data = await response.json();

    let array_of_videos = data.items;

    appendVideos(array_of_videos);
    // console.log("data:", data);
  } catch (e) {
    console.log("err:", e);
  }
}

const appendVideos = (arr) => {
  arr.forEach(({ id: { videoId } }) => {
    console.log("videoId:", videoId);
    let div = document.createElement("div");

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    // iframe.width = "300px";
    // iframe.height = "260px";
    iframe.allowfullscreen = "true";

    iframe.setAttribute("allowfullscreen", true);

    div.append(iframe);

    results_div.append(div);
  });
};
