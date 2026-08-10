import { ActivitySchema } from '@src/types/Activity';
import { Fragment, memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Activity = memo((props: ActivitySchema) => {
  const { t } = useTranslation();
  const activity = props.activity;

  return (
    <section className="activity-feature">
      <div className="activity-main">
        <h3 className="activity-title">
          {t(activity.name)
            .split('\n')
            .map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
        </h3>
        <p className="activity-body">
          {activity.body.map((paragraph) => (
            <Fragment key={paragraph}>
              {t(paragraph)}
              <br />
              <br />
            </Fragment>
          ))}
        </p>
        <a className="link-pill" href={activity.github} target="_blank" rel="noreferrer">
          {t('activities.githubLabel')}
        </a>
      </div>

      <div className="activity-side">
        {activity.stats.map((stat) => (
          <div key={stat.label} className="activity-stat">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{t(stat.label)}</div>
          </div>
        ))}
      </div>
    </section>
  );
});
