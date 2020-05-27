import { request } from "./request";

export function getVideoInfoById(id) {
  return request({
    url: "/watch",
    params: {
      id
    }
  });
}

export function getWatchPageRecommends() {
  return request({
    url: "/watch/recommend"
  });
}

export function getWatchPageComments(target_type, target_id) {
  return request({
    url: "/watch/comment",
    params: {
      target_type,
      target_id
    }
  });
}

export class VideoDetailData {
  constructor(videoData) {
    this.videoInfo = {
      videoTitle: videoData.video_title,
      watchCount: videoData.watch_count,
      commentCount: videoData.comment_count,
      publicDate: videoData.public_date,
      videoDescription: videoData.video_description
    };
    this.videoToolbarData = [
      videoData.like_count,
      videoData.dislike_count,
      videoData.relayed_count,
      videoData.store_count
    ];
  }
}

export class WatchPageRecommends {
  constructor(videoData) {
    this.recommends = [];
    for (let item of videoData) {
      this.recommends.push({
        videoId: item.id,
        videoTitle: item.video_title,
        publicUserName: item.public_user_name,
        watchCount: item.watch_count,
        publicDate: item.public_date
      });
    }
  }
}
