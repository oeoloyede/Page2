import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ChatIcon } from './ChatIcon';
import { HomeIcon } from './HomeIcon';
import { ProfileIcon } from './ProfileIcon';
import classes from './Questionnaire.module.css';
import { SearchIcon } from './SearchIcon';
import { UploadIcon } from './UploadIcon';

interface Props {
  className?: string;
}
/* @figmaId 11:58 */
export const Questionnaire: FC<Props> = memo(function Questionnaire(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.questionnaire}>Questionnaire</div>
      <div className={classes.letSCreateAPersonalizedRoadmap}>
        Let’s Create a personalized Roadmap that details the steps to land you a job using this questionnaire
      </div>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon2} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon3} />
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon4} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon5} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.frame3}></div>
      <div className={classes.whatIsYourMostProficientCoding}>What is your most proficient Coding Language?</div>
      <div className={classes.button}>
        <div className={classes.rectangle2}></div>
        <div className={classes.java}>Java</div>
      </div>
      <div className={classes.button2}>
        <div className={classes.rectangle22}></div>
        <div className={classes.c}>C++</div>
      </div>
      <div className={classes.button3}>
        <div className={classes.rectangle23}></div>
        <div className={classes.other}>Other</div>
      </div>
      <div className={classes.button4}>
        <div className={classes.rectangle24}></div>
        <div className={classes.next}>Next</div>
      </div>
      <div className={classes._115}>1/15</div>
      <div className={classes.button5}>
        <div className={classes.rectangle25}></div>
        <div className={classes.python}>Python</div>
      </div>
    </div>
  );
});
