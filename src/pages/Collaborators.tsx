import { CollaboratorList } from '@src/components/CollaboratorList';
import { PageHeader } from '@src/components/PageHeader';

export const CollaboratorsPage = () => {
  return (
    <section className="page page-section page-collaborators">
      <div className="page-container">
        <PageHeader number="01" label="The Duo" title="Collabo" emphasis="rators" />
        <CollaboratorList />
      </div>
    </section>
  );
};
