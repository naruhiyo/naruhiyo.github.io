import { Activity } from '@src/components/Activity';
import { GenericList } from '@src/components/GenericList';
import { ACTIVITIES_DATA } from '@src/data/activities';
import { ActivitySchema } from '@src/types/Activity';
import { useTranslation } from 'react-i18next';

export const ActivityList = () => {
  const { t } = useTranslation();

  return (
    <GenericList<ActivitySchema>
      label={t(ACTIVITIES_DATA.head)}
      items={ACTIVITIES_DATA.items}
      renderItem={(item) => <Activity activity={item.activity} />}
      keyExtractor={(item) => item.activity.github}
    />
  );
};
