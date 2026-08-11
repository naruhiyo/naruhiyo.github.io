import { CollaboratorSchema } from '@src/types/Collaborator';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

export const Collaborator = memo((props: CollaboratorSchema) => {
  const { t } = useTranslation();
  const collaborator = props.collaborator;

  return (
    <article className="collab-card">
      <p className="collab-handle">{collaborator.name}</p>
      <div className="collab-avatar-wrap">
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <p className="collab-role">{t(collaborator.bio)}</p>
      <div className="collab-links">
        <a className="link-pill" href={collaborator.link.portfolio} target="_blank" rel="noreferrer">
          {t('collaborators.portfolio')}
        </a>
      </div>
    </article>
  );
});
