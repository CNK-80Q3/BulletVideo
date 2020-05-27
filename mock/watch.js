import Mock from "mockjs";
const Random = Mock.Random;

// 观看页面视频信息
export const getVideoInfoById = () => {
  let videoInfo = {
    id: 1,
    public_user_id: 1,
    public_user_name: Random.cword(5, 8),
    public_date: Random.integer(1419120000, 1576800000),
    video_title: Random.cword(5, 20),
    video_category: Random.integer(0, 10),
    video_description: Random.csentence(0, 500),
    video_path: Random.url(),
    cover_path: Random.url(),
    preview_path: Random.url(),
    is_relayed: Random.boolean(),
    relay_on_id: 1,
    relayed_count: Random.integer(0, 200000000),
    store_count: Random.integer(0, 20000),
    watch_count: Random.integer(0, 200000000),
    comment_count: Random.integer(0, 200000000),
    like_count: Random.integer(0, 200000000),
    dislike_count: Random.integer(0, 200000000),
    isChecked: Random.boolean()
  };

  return videoInfo;
};
Mock.mock("/watch?id=1", getVideoInfoById);

// 观看页面推荐视频
export const watchPageRecommend = () => {
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
Mock.mock("/watch/recommend", watchPageRecommend);

// 获取视频下方评论
export const watchPageComment = () => {
  let comments = [];
  for (let i = 0; i < 20; i++) {
    let commentInfo = {
      id: i + 1,
      author_id: i + 1,
      comment_date: Random.integer(1419120000, 1576800000),
      comment_content: Random.cword(10, 20),
      target_type: Random.boolean(),
      target_id: i + 1,
      topic_video_id: i + 1,
      like_count: Random.integer(0, 20000),
      dislike_count: Random.integer(0, 20000)
    };
    comments.push(commentInfo);
  }
  return comments;
};
Mock.mock("/watch/comment?target_type=0&target_id=1", watchPageComment);
