import { ActivityList } from '@src/components/ActivityList';
import { PageHeader } from '@src/components/PageHeader';

export const ActivityPage = () => {
  return (
    <section className="page page-section page-activities">
      <div className="page-container">
        <PageHeader number="03" label="What We Do" title="Acti" emphasis="vities" />
        <ActivityList />
      </div>
    </section>
  );
};
