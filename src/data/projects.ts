import { Misc, Projects } from '../interfaces';
import aCupOfPC from './a-cup-of-pc.json';
import autoUnfollow from './auto-unfollow.json';
import candleChair from './candle-chair.json';
import deepsense from './deepsense';
import duplo from './duplo.json';
import luggageplus from './luggageplus.json';
import magprint from './magprint.json';
import oAssist from './o-assist';
import rebalance from './rebalance';
import remoteControlRedesign from './remote-control-redesign.json';
import searchingBall from './searching-ball.json';

export const projects: Projects = {
  rebalance,
  'remote-control-redesign': remoteControlRedesign,
  luggageplus,
  'o-assist': oAssist,
  deepsense,
  'candle-chair': candleChair,
  magprint,
  duplo,
  'searching-ball': searchingBall
};

export const misc: Misc = {
  'auto-unfollow': autoUnfollow,
  'a-cup-of-pc': aCupOfPC
};

export default {
  ...projects,
  ...misc
};
