import React, { Component } from "react";
import "../Styles/Home.module.css";

class Pagination extends Component {
  render() {
    const { currentPage, getOverviewData } = this.props;
    const showFromSecondpage = (
      <li
        className="page-item"
        onClick={() => {
          getOverviewData(currentPage - 1);
        }}
      >
        <span className="page-link">{currentPage - 1}</span>
      </li>
    );

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-4">
          <li
            className="page-item"
            onClick={() => {
              getOverviewData(currentPage - 1);
            }}
          >
            <span className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </span>
          </li>

          {/* Adapt pagenumbers if on page 2 or further*/}
          {currentPage > 1 ? showFromSecondpage : ""}

          <li className="page-item active">
            <span className="page-link active">{currentPage}</span>
          </li>
          <li
            className="page-item"
            onClick={() => {
              getOverviewData(currentPage + 1);
            }}
          >
            <span className="page-link">{currentPage + 1}</span>
          </li>

          <li
            className="page-item"
            onClick={() => {
              getOverviewData(currentPage + 1);
            }}
          >
            <span className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
