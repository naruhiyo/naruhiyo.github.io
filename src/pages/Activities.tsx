import { ActivityList } from '@src/components/ActivityList';
import { PageHeader } from '@src/components/PageHeader';
import { useTranslation } from 'react-i18next';

export const ActivityPage = () => {
  const { t } = useTranslation();

  return (
    <section className="page page-section page-activities">
      <div className="page-container">
        <PageHeader number="03" label={t('pages.activities.label')} title="Acti" emphasis="vities" />
        <ActivityList />
      </div>
    </section>
  );
};
