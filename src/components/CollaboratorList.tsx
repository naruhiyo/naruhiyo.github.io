import { Collaborator } from '@src/components/Collaborator';
import { GenericList } from '@src/components/GenericList';
import { COLLABORATORS_DATA } from '@src/data/collaborators';
import { CollaboratorSchema } from '@src/types/Collaborator';
import { useTranslation } from 'react-i18next';

export const CollaboratorList = () => {
  const { t } = useTranslation();

  return (
    <GenericList<CollaboratorSchema>
      label={t(COLLABORATORS_DATA.head)}
      className="collab-grid"
      items={COLLABORATORS_DATA.items}
      renderItem={(item) => <Collaborator collaborator={item.collaborator} />}
      keyExtractor={(item) => item.collaborator.name}
    />
  );
};
