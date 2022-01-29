import PropTypes from 'prop-types';
import React from 'react';
import DescriptionList from 'Components/DescriptionList/DescriptionList';
import DescriptionListItem from 'Components/DescriptionList/DescriptionListItem';
import DescriptionListItemDescription from 'Components/DescriptionList/DescriptionListItemDescription';
import DescriptionListItemTitle from 'Components/DescriptionList/DescriptionListItemTitle';
import Link from 'Components/Link/Link';
import ModalBody from 'Components/Modal/ModalBody';
import ModalContent from 'Components/Modal/ModalContent';
import ModalHeader from 'Components/Modal/ModalHeader';
import translate from 'Utilities/String/translate';
import styles from './IndexerInfoModalContent.css';

function IndexerInfoModalContent(props) {
  const {
    id,
    name,
    description,
    encoding,
    language,
    indexerUrls,
    protocol,
    capabilities,
    onModalClose
  } = props;

  return (
    <ModalContent onModalClose={onModalClose}>
      <ModalHeader>
        {`${name}`}
      </ModalHeader>

      <ModalBody>
        <DescriptionList>
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('Id')}
            data={id}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('Description')}
            data={description ? description : '-'}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('Encoding')}
            data={encoding ? encoding : '-'}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('Language')}
            data={language ?? '-'}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('RawSearchSupported')}
            data={capabilities.supportsRawSearch ? translate('Yes') : translate('No')}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('SearchTypes')}
            data={capabilities.search.length === 0 ? translate('NotSupported') : capabilities.search[0]}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('TVSearchTypes')}
            data={capabilities.tv.length === 0 ? translate('NotSupported') : capabilities.tv.join(', ')}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('MovieSearchTypes')}
            data={capabilities.movie.length === 0 ? translate('NotSupported') : capabilities.movie.join(', ')}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('BookSearchTypes')}
            data={capabilities.book.length === 0 ? translate('NotSupported') : capabilities.book.join(', ')}
          />
          <DescriptionListItem
            descriptionClassName={styles.description}
            title={translate('MusicSearchTypes')}
            data={capabilities.music.length === 0 ? translate('NotSupported') : capabilities.music.join(', ')}
          />

          <DescriptionListItemTitle>{translate('IndexerSite')}</DescriptionListItemTitle>
          <DescriptionListItemDescription>
            <Link to={indexerUrls[0]}>{indexerUrls[0]}</Link>
          </DescriptionListItemDescription>

          <DescriptionListItemTitle>{`${protocol === 'usenet' ? 'Newznab' : 'Torznab'} Url`}</DescriptionListItemTitle>
          <DescriptionListItemDescription>
            {`${window.location.origin}${window.Prowlarr.urlBase}/${id}/api`}
          </DescriptionListItemDescription>

        </DescriptionList>
      </ModalBody>
    </ModalContent>
  );
}

IndexerInfoModalContent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  encoding: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  indexerUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  protocol: PropTypes.string.isRequired,
  capabilities: PropTypes.object.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default IndexerInfoModalContent;
