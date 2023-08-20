import aCupOfPC from './a-cup-of-pc.json';
import candleChair from './candle-chair.json';
import duplo from './duplo.json';
import deepsense from './deepsense';
import luggageplus from './luggageplus.json';
import magprint from './magprint.json';
import oAssist from './o-assist';
import rebalance from './rebalance';
import remoteControlRedesign from './remote-control-redesign.json';
import searchingBall from './searching-ball.json';

export const projects = {
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

export const misc = {
  'a-cup-of-pc': aCupOfPC
};

export default {
  ...projects,
  ...misc
};
