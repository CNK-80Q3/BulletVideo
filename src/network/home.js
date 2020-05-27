import { request } from "./request";

export function getHomePageRecommend() {
  return request({
    url: "/home/recommend"
  });
}

export class HomePageRecommend {
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
