import Mock from "mockjs";
const Random = Mock.Random;

// 主页推荐视频
export const homePageRecommend = () => {
  let recommendVideos = [];
  for (let i = 0; i < 100; i++) {
    let videoInfo = {
      id: i + 1,
      public_user_id: i + 1,
      public_user_name: Random.cword(5, 8),
      public_date: Random.integer(1419120000, 1576800000),
      video_title: Random.cword(5, 20),
      video_category: Random.integer(0, 10),
      video_description: Random.csentence(0, 500),
      video_path: Random.url(),
      cover_path: Random.url(),
      preview_path: Random.url(),
      is_relayed: Random.boolean(),
      relay_on_id: i + 1,
      relayed_count: Random.integer(0, 200000000),
      watch_count: Random.integer(0, 200000000),
      comment_count: Random.integer(0, 200000000),
      like_count: Random.integer(0, 200000000),
      dislike_count: Random.integer(0, 200000000),
      isChecked: Random.boolean()
    };
    recommendVideos.push(videoInfo);
  }
  return recommendVideos;
};
Mock.mock("/home/recommend", homePageRecommend);
