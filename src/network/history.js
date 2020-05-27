import { request } from "./request";

export function getWatchHistoriesByUserId(id) {
  return request({
    url: "/history/watch-history",
    params: {
      id
    }
  });
}

export class WatchHistories {
  constructor(videoData) {
    this.histories = [];
    for (let item of videoData) {
      this.histories.push({
        videoId: item.id,
        videoTitle: item.video_title,
        publicUserName: item.public_user_name,
        watchCount: item.watch_count,
        publicDate: item.public_date
      });
    }
  }
}
