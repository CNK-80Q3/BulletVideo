<template>
  <div id="watch">
    <div id="default">
      <aside id="side-menu">
        <el-drawer
          :visible.sync="$store.state.drawerOpen"
          direction="ltr"
          size="260px"
          :show-close="false"
          :withHeader="false"
          title="BulletVideo"
          class="drawer"
        >
          <SideMenu />
        </el-drawer>
      </aside>
      <main id="main">
        <div class="watch-area">
          <div class="player">
            <BVPlayer />
          </div>
          <div class="video-info">
            <PreviewInfo :videoInfo="videoInfo">
              <template v-slot:author-name>
                <div></div>
              </template>
              <template v-slot:video-toolbar>
                <VideoToolbar :videoToolbarData="videoToolbarData" />
              </template>
            </PreviewInfo>
            <DividingLine />
          </div>
          <div class="author-info">
            <AuthorInfo />
            <DividingLine />
          </div>
          <div class="comment">
            <ToComment />
            <CommentItem
              v-for="(item, index) in commentList"
              :commentInfo="item"
              :key="item.id"
            >
              <template v-slot:more-reply>
                <div class="more-reply">
                  <span class="show-more" @click="subCommentdisplay()">
                    显示更多回复
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                  <div
                    class="sub-comment"
                    :class="{ 'sub-comment-show': isSubCommentShow }"
                  >
                    <CommentItem
                      :avatarSize="30"
                      v-for="(item, index) in commentList"
                      :commentInfo="item"
                      :key="item.id"
                    />
                  </div>
                </div>
              </template>
            </CommentItem>
          </div>
        </div>
        <div class="recommend">
          <div class="next-play">
            <PlayQueue />
            <Boundary boundaryTitle="接下来播放">
              <template v-slot:right>
                <el-switch v-model="autoNext" active-text="自动播放" />
              </template>
            </Boundary>
            <WatchPreview :recommendVideo="recommendVideos[0]" />
            <DividingLine />
          </div>
          <div class="recommend-list">
            <WatchPreview
              v-for="(item, index) in recommendVideos"
              :recommendVideo="item"
              :key="item.id"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Boundary from "components/common/boundary/Boundary";
import DividingLine from "components/common/boundary/DividingLine";

import SideMenu from "components/content/side-menu/SideMenu";
import PreviewInfo from "components/content/preview-info/PreviewInfo";
import AuthorInfo from "components/content/author-info/AuthorInfo";
import BVPlayer from "components/content/video-player/BVPlayer";
import PlayQueue from "components/content/play-queue/PlayQueue";

import WatchPreview from "./childComps/WatchPreview";
import VideoToolbar from "./childComps/video-toolbar/VideoToolbar";
import ToComment from "./childComps/ToComment";
import CommentItem from "./childComps/CommentItem";

import {
  getWatchPageRecommends,
  getVideoInfoById,
  getWatchPageComments,
  VideoDetailData,
  WatchPageRecommends
} from "network/watch";

export default {
  name: "Watch",
  components: {
    Boundary,
    DividingLine,
    SideMenu,
    BVPlayer,
    VideoToolbar,
    PlayQueue,
    ToComment,
    CommentItem,
    WatchPreview,
    PreviewInfo,
    AuthorInfo
  },
  data() {
    return {
      autoNext: true,
      recommendVideos: [],
      videoId: 0,
      videoInfo: {},
      videoToolbarData: [],
      commentList: [],
      isSubCommentShow: true
    };
  },
  methods: {
    getRecommends() {
      getWatchPageRecommends().then(res => {
        this.recommendVideos = new WatchPageRecommends(res).recommends;
      });
    },
    getVideoInfo(id) {
      getVideoInfoById(id).then(res => {
        let detailData = new VideoDetailData(res);
        this.videoInfo = detailData.videoInfo;
        this.videoToolbarData = detailData.videoToolbarData;
        console.log(detailData);
      });
    },
    getComments(type, id) {
      getWatchPageComments(type, id).then(res => {
        this.commentList = res;
      });
    },
    getSubComments(type, id) {
      getWatchPageComments(type, id).then(res => {
        this.subCommentList = res;
      });
    },
    subCommentdisplay() {
      this.isSubCommentShow = !this.isSubCommentShow;
    }
  },
  created() {
    this.videoId = this.$route.params.id;
    this.getRecommends();
    this.getVideoInfo(this.videoId);
    this.getComments(0, this.videoId);
  }
};
</script>

<style lang="less" scoped>
#watch {
  position: relative;
  top: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  #default {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    aside {
      position: relative;
      height: 100%;

      /deep/.el-drawer {
        outline: none;
      }
    }

    main {
      width: 100%;
      padding: 30px;
      background-color: #131313;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;

      .watch-area {
        margin: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        flex: 10 0 600px;

        .player {
          flex-basis: 100%;
          height: 600px;
        }

        .video-info {
          width: 100%;
          margin-top: 16px;
        }

        .author-info {
          width: 100%;
        }
      }

      .comment {
        width: 100%;

        .more-reply {
          margin-top: 10px;

          .show-more {
            font-size: 1.4em;
            color: #409eff;
          }

          .sub-comment-show {
            display: none;
          }
        }
      }

      .recommend {
        margin: 10px;
        width: 100%;
        flex-basis: 500px;
        flex-shrink: 1;
        flex-grow: 1;
      }
    }
  }
}
</style>
