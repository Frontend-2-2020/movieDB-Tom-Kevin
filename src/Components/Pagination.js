import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const {currentPage, getOverviewData} = this.props;

    console.log(this.props);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-2">
          <li className="page-item page-link">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </li>
          <li className="page-item page-link" onClick={()=>{
            getOverviewData(currentPage-1)
          }}>{currentPage-1}</li>
          <li className="page-item page-link">{currentPage}</li>
          <li className="page-item page-link" onClick={()=>{
            getOverviewData(currentPage+1)
          }}>{currentPage+1}</li>

          <li className="page-item page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
