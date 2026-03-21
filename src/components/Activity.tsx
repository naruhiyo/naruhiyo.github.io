import { ActivitySchema } from '@src/types/Activity';
import { Fragment } from 'react';

export const Activity = (props: ActivitySchema) => {
  const activity = props.activity;

  return (
    <section className="activity-feature">
      <div className="activity-main">
        <h3 className="activity-title">
          {activity.name.split('\n').map((line) => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </h3>
        <p className="activity-body">
          {activity.body.map((paragraph) => (
            <Fragment key={paragraph}>
              {paragraph}
              <br />
              <br />
            </Fragment>
          ))}
        </p>
        <a className="link-pill" href={activity.github} target="_blank" rel="noreferrer">
          Github Repository
        </a>
      </div>

      <div className="activity-side">
        {activity.stats.map((stat) => (
          <div key={stat.label} className="activity-stat">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
