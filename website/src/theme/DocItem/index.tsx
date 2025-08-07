import Link from "@docusaurus/Link";
import OriginalDocItem from "@theme-original/DocItem";
import type { Props } from "@theme/DocItem";

import "./styles.css";

interface DocItemProps extends Props {
  content: Props["content"] & {
    metadata: {
      previous?: {
        title: string;
        permalink: string;
      };
      next?: {
        title: string;
        permalink: string;
      };
    };
  };
}

export default function DocItem(props: DocItemProps) {
  // Get navigation data from props
  const { content } = props;
  const { metadata } = content;
  const { previous, next } = metadata || {};

  return (
    <div className="custom-doc-container">
      {/* Top Right Pagination */}
      <div className="top-pagination">
        <div className="pagination-container">
          <div className="pagination-buttons">
            {previous && (
              <Link
                to={previous.permalink}
                className="pagination-btn pagination-btn--prev"
                title={`Previous: ${previous.title}`}
              >
                <svg
                  className="pagination-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
                <span className="pagination-text">
                  <span className="pagination-label">Previous</span>
                  <span className="pagination-title">{previous.title}</span>
                </span>
              </Link>
            )}
            {next && (
              <Link
                to={next.permalink}
                className="pagination-btn pagination-btn--next"
                title={`Next: ${next.title}`}
              >
                <span className="pagination-text">
                  <span className="pagination-label">Next</span>
                  <span className="pagination-title">{next.title}</span>
                </span>
                <svg
                  className="pagination-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Original DocItem component (includes default bottom pagination) */}
      <OriginalDocItem {...props} />
    </div>
  );
}
