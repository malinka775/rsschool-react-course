import { TEXT_CONTENT } from '../../consts';
import './NoMatches.scss';

const NoMatches = () => {
  return (
    <div className="error no-matches">
      <p className="no-matches__text">{TEXT_CONTENT.__NO_MATCHES}</p>
    </div>
  );
};
export default NoMatches;
