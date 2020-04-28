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
            </PreviewInfo>
            <DividingLine />
          </div>
          <div class="author-info">
            <AuthorInfo />
            <DividingLine />
          </div>
          <div class="comment">
            <CommentArea />
            <CommentItem
              :commentInfo="commentInfo[0]"
              v-for="(item, index) in numList"
            />
          </div>
        </div>
        <div class="recommend">
          <div class="next-play">
            <Boundary boundaryTitle="接下来播放">
              <template v-slot:right>
                <el-switch v-model="autoNext" active-text="自动播放" />
              </template>
            </Boundary>
            <WatchPreview />
            <DividingLine />
          </div>
          <div class="recommend-list">
            <WatchPreview v-for="(item, index) in numList" />
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

import WatchPreview from "./childComps/WatchPreview";
import CommentArea from "./childComps/CommentArea";
import CommentItem from "./childComps/CommentItem";

export default {
  name: "Watch",
  components: {
    Boundary,
    DividingLine,
    SideMenu,
    BVPlayer,
    CommentArea,
    CommentItem,
    WatchPreview,
    PreviewInfo,
    AuthorInfo
  },
  data() {
    return {
      autoNext: true,
      numList: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      videoInfo: [
        {
          videoTitle:
            "這是個教人長大的黑暗童話，深度解析《潘神的迷宮》怪物原型|哇薩比抓馬WasabiDrama",
          authorName: "哇萨比抓马 WasabiDrama",
          viewerQuantity: "51万次观看",
          time: "4个月前"
        }
      ],
      commentInfo: [
        {
          commentFrom: "Lok Shing Lai",
          commentDate: "3天前",
          commentSubstance:
            "XD 感謝狗哥 終於弄懂啦  ==之前都沒玩過 線在整個霧颯颯",
          likeCount: 26,
          dislikeCount: 6,
          commentReply: [1, 2, 3, 4, 5]
        }
      ]
    };
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
        flex-wrap: wrap;
        flex-basis: 500px;
        flex-shrink: 5;
        flex-grow: 5;

        .player {
          width: 100%;
          height: 600px;
        }

        .video-info {
          margin-top: 16px;
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
