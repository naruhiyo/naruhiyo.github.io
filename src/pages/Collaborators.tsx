import { CollaboratorList } from '@src/components/CollaboratorList';
import { PageHeader } from '@src/components/PageHeader';
import { useTranslation } from 'react-i18next';

export const CollaboratorsPage = () => {
  const { t } = useTranslation();

  return (
    <section className="page page-section page-collaborators">
      <div className="page-container">
        <PageHeader number="01" label={t('pages.collaborators.label')} title="Collabo" emphasis="rators" />
        <CollaboratorList />
      </div>
    </section>
  );
};
