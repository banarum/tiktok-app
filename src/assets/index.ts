import HomeTabIcon from '../../assets/icons/home_tab.svg';
import ActivityTabIcon from '../../assets/icons/activity_tab.svg';
import BookmarksTabIcon from '../../assets/icons/bookmarks_tab.svg';
import ProfileTabIcon from '../../assets/icons/profile_tab.svg';
import DiscoverTabIcon from '../../assets/icons/discover_tab.svg';
import TimerIcon from '../../assets/icons/timer.svg';
import SearchIcon from '../../assets/icons/search.svg';

import LikeIcon from '../../assets/icons/like.svg';
import BookmarkIcon from '../../assets/icons/bookmark.svg';
import CommentsIcon from '../../assets/icons/comments.svg';
import ShareIcon from '../../assets/icons/share.svg';
import FlipIcon from '../../assets/icons/flip.svg';

import Paper from '../../assets/icons/paper.svg';
import PaperPlus from '../../assets/icons/paper_plus.svg';

import PlaylistIcon from '../../assets/icons/playlist.svg';

import RightArrow from '../../assets/icons/right_arrow.svg';

export type Asset = {
  type: 'vector' | 'bitmap';
  path: any;
};

export default class Assets {
  static getVector(path: any): Asset {
    return {
      type: 'vector',
      path: path,
    };
  }

  static getBitmap(path: any): Asset {
    return {
      type: 'bitmap',
      path: path,
    };
  }

  static homeTabIcon = Assets.getVector(HomeTabIcon);

  static activityTabIcon = Assets.getVector(ActivityTabIcon);
  static bookmarksTabIcon = Assets.getVector(BookmarksTabIcon);
  static profileTabIcon = Assets.getVector(ProfileTabIcon);
  static discoverTabIcon = Assets.getVector(DiscoverTabIcon);

  // add timer and search icons
  static timerIcon = Assets.getVector(TimerIcon);
  static searchIcon = Assets.getVector(SearchIcon);

  static likeIcon = Assets.getVector(LikeIcon);
  static bookmarkIcon = Assets.getVector(BookmarkIcon);
  static commentsIcon = Assets.getVector(CommentsIcon);
  static shareIcon = Assets.getVector(ShareIcon);
  static flipIcon = Assets.getVector(FlipIcon);
  static paperIcon = Assets.getVector(Paper);
  static paperPlusIcon = Assets.getVector(PaperPlus);
  static playlistIcon = Assets.getVector(PlaylistIcon);
  static rightArrowIcon = Assets.getVector(RightArrow);

  //static avatar = Assets.getBitmap(require('../../assets/imgs/avatar.png'));
}
