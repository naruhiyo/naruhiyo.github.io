import { CollaboratorSchema } from '@src/types/Collaborator';

export const Collaborator = (props: CollaboratorSchema) => {
  const collaborator = props.collaborator;

  return (
    <article className="collab-card">
      <p className="collab-handle">{collaborator.name}</p>
      <div className="collab-avatar-wrap">
        <img src={collaborator.image} alt={collaborator.name} />
      </div>
      <p className="collab-role">{collaborator.bio}</p>
      <div className="collab-links">
        <a className="link-pill" href={collaborator.link.portfolio} target="_blank" rel="noreferrer">
          Portfolio
        </a>
        <a className="link-pill" href={collaborator.link.atcoder} target="_blank" rel="noreferrer">
          AtCoder
        </a>
        <a className="link-pill" href={collaborator.link.github} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </article>
  );
};
