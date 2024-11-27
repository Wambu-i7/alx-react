import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct number of rows when courses are passed", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    // Check header row count (2 rows: "Available courses" and "Course name / Credit")
    expect(wrapper.find("thead").children()).toHaveLength(2);

    // Check that tbody renders the correct number of rows (3 rows of courses)
    expect(wrapper.find("tbody").children()).toHaveLength(3);

    // Check if each row is properly rendered (comparing the text content)
    wrapper.find("tbody").forEach((node, index) => {
      const course = listCourses[index];
      expect(node.containsMatchingElement(<CourseListRow textFirstCell={course.name} textSecondCell={String(course.credit)} />)).toBe(true);
    });
  });

  it("renders 'No course available yet' when listCourses is empty", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find("tbody").children()).toHaveLength(1);
    expect(wrapper.find("tbody").containsMatchingElement(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
  });

  it("renders the correct rows when listCourses is not passed", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("tbody").children()).toHaveLength(1);
    expect(wrapper.find("tbody").containsMatchingElement(<CourseListRow textFirstCell="No course available yet" />)).toBe(true);
  });
});

