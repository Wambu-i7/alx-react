import React from "react";
import PropTypes from "prop-types";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";

function CourseList({ listCourses = [] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" textSecondCell={null} isHeader={false} />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

// PropTypes definition for the component
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

// Default props
CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;

