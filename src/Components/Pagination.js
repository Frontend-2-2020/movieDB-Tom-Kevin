import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-2">
          <li className="page-item page-link">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </li>
          <li className="page-item page-link">1{/* page props */}</li>
          <li className="page-item page-link">{/* page props */}2</li>
          <li className="page-item page-link">{/* page props */}3</li>
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
