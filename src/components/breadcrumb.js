import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledBreadcrumb = styled.nav`
  margin-bottom: 20px;
  font-size: var(--fz-sm);
  color: var(--light-slate);

  ol {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;

    &:not(:last-child)::after {
      content: '/';
      margin: 0 8px;
      color: var(--slate);
    }
  }

  a {
    color: var(--green);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--light-green);
    }
  }

  .current {
    color: var(--lightest-slate);
  }
`;

const Breadcrumb = ({ items }) => {
  return (
    <StyledBreadcrumb aria-label="Breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.url ? (
              <Link to={item.url} itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="current" itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </StyledBreadcrumb>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumb;
