import './dataReading.css';
import data from '../../assets/data.json';
import { useEffect } from 'react';

type DataReadingProps = {
  isMobile: boolean;
};
const DataReading = ({ isMobile }: DataReadingProps) => {
  useEffect(() => {
    if (isMobile === true) {
      const targetFirstAccordion = document.getElementById('collapse0');
      targetFirstAccordion?.classList.add('show');
    } else {
      const targetFirstTab = document.getElementById('tab-pane-0');
      targetFirstTab?.classList.add('active', 'show');
    }
  }, [isMobile]);

  if (isMobile === true) {
    return (
      <div className="accordion" id="accordion-example">
        {data.map((section, i) => {
          const title = section.title;
          const content = section.content;
          const count = String(i);

          return (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${count}`}
                  aria-expanded="true"
                  aria-controls={`collapse${count}`}>
                  {title}
                </button>
              </h2>

              <div id={`collapse${count}`} className="accordion-collapse collapse" data-bs-parent="#accordion-example">
                <div className="accordion-body">{content}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="tabs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {data.map((section, index) => {
            const title = section.title;

            return (
              <li key={index} className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id={`tab-${index}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#tab-pane-${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`tab-pane-${index}`}
                  aria-selected="true">
                  {title}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="tab-content" id="myTabContent">
          {data.map((section, index) => {
            const content = section.content;

            return (
              <div
                key={index}
                className="tab-pane fade"
                id={`tab-pane-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                tabIndex={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default DataReading;
